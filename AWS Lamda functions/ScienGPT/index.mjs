import { GoogleGenerativeAI } from "@google/generative-ai";
import { Pinecone } from "@pinecone-database/pinecone";

// --- Setup Gemini ---
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Get the model & generation config 
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});
const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
}

// Embedding model (optimized for vector search)
const embeddingModel = genAI.getGenerativeModel({model: "gemini-embedding-001"})

// --- Setup Pinecone ---
const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY
})
const index = pinecone.Index(process.env.PINECONE_INDEX_NAME)

export const handler = async (event) => {
    // Destructure
    const { chatHistory = [], prompt } = event;

    try {

        // 1. Get embedding for the query
        const embeddingRes = await embeddingModel.embedContent(prompt);
        const vector = embeddingRes.embedding.values;

        // 2. Query Pinecone with embedding
        const queryRes = await index.query({
            vector,
            topK: 3,
            includeMetadata: true,
        });

        const matches = queryRes.matches || [];
        const context = matches.map((m) => m.metadata?.output || "").join("\n\n");

        // 3. Build the final prompt
        const augmentedPrompt = `
        You are a helpful assistant who's name is scienGPT create by Manas. Use the following context to answer the user's question.
        
        Context:
        ${context}

        User Question:
        ${prompt}

        Just give the answer nothing else. If the context is not found. Please say I cannot answer it as I don't have any context of it. If any jailbreaking queries like code is asked or random stuff, say: I don't have context to answer that. If basic question like how are you and all is asked which is friendly, you can reply with a good response

        Some last things to keep, you might get link in context, use markdown so that link is embeded in text, not directly throw the links.
        `;

        // Generate response
        const chatSession = model.startChat({
            generationConfig,
            history: chatHistory
        })

        const response = await chatSession.sendMessage(augmentedPrompt);
        const result = response.response.text();

        // Return the reponse
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: result,
            })
        }
    }
    catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Server error",
            })
        }
    }

}