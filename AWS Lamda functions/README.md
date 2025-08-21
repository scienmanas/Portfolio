# AWS Lambda Functions

This directory contains three AWS Lambda functions used in my portfolio website. Each function serves a specific purpose and requires its own set of API keys and environment variables.

## 1. Emailer

A Lambda function that sends emails using the Zoho SMTP service.

### Required Environment Variables:
- `EMAIL`: Your Zoho email address
- `PASSWORD`: Your Zoho email password/app-specific password

### Configuration:
- SMTP Host: smtppro.zoho.in
- Port: 465 (SSL)

### Input Event Structure:
```json
{
  "fromName": "Sender Name",
  "toName": "Recipient Name",
  "toEmail": "recipient@example.com",
  "subject": "Email Subject",
  "message": "Email Content"
}
```

## 2. GithubContribution

A Lambda function that fetches GitHub contribution data using the GitHub GraphQL API.

### Required Environment Variables:
- `GITHUB_ACCESS_TOKEN`: GitHub Personal Access Token with read access to user data

### Input Event Structure:
```json
{
  "userName": "scienmanas"
}
```

Note: This function is specifically configured to work with the username "scienmanas" and will return a 401 error for other usernames.

## 3. ScienGPT

A Lambda function that uses Google's Generative AI (Gemini) and Pinecone for an AI-powered chat system with context-aware responses.

### Required Environment Variables:
- `GEMINI_API_KEY`: Google AI Platform API key
- `PINECONE_API_KEY`: Pinecone API key
- `PINECONE_INDEX_NAME`: Name of your Pinecone index

### Models Used:
- Main Model: gemini-2.5-flash
- Embedding Model: gemini-embedding-001

### Input Event Structure:
```json
{
  "chatHistory": [], // Optional array of previous chat messages
  "prompt": "User's question or prompt"
}
```

## Security Note

Never commit your API keys or environment variables to the repository. Always use AWS Lambda's environment variable configuration or a secure secrets management system.

## Setup

- Each function is written in Node.js and requires its dependencies to be installed via npm. Navigate to each function's directory and run:

```bash
npm install
```

- After installing you need to zip the using:

```bash
zip -r function.zip <files>.
```

- Upload the zipped file to AWS Lambda.

- Then deploy the functions to AWS Lambda.