import dotenv from 'dotenv';
dotenv.config({ path: '.env.dev' });

import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
//   openAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY, // In Node.js defaults to process.env.AZURE_OPENAI_API_KEY
  azureOpenAIApiVersion: process.env.OPENAI_API_VERSION, // In Node.js defaults to process.env.AZURE_OPENAI_API_VERSION
  azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME, // In Node.js defaults to process.env.AZURE_OPENAI_API_INSTANCE_NAME
  azureOpenAIApiDeploymentName: process.env.OPENAI_DEPLOYMENT_NAME, // In Node.js defaults to process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME
  modelName: process.env.OPENAI_MODEL_NAME
});

let query = "what is Esri?"
const response = await model.invoke(query);

console.log(`< ${query}`);
console.log(`> ${response.content}`);