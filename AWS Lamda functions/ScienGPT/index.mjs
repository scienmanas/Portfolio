import { GoogleGenerativeAI } from "@google/generative-ai";

// create a new instance of the GoogleGenerativeAI
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Get the tuned model & generation config 
const model = genAI.getGenerativeModel({
    model: "tunedModels/sciengpt-sir8hq875798"
});
const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
}


export const handler = async (event) => {
    // Destructure
    const { chatHistory, prompt } = event;

    try {
        // Generate response
        const chatSession = model.startChat({
            generationConfig,
            history: chatHistory
        })

        const response = await chatSession.sendMessage(prompt);
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