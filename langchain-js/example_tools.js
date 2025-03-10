import dotenv from 'dotenv';
dotenv.config({ path: '.env.dev' });


import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "You are very powerful assistant, but don't know current events"],
  ["human", "{input}"],
  new MessagesPlaceholder("agent_scratchpad"),
]);
  
import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { geocodeLocation } from './tools/geocoder.mjs'

const tools = [
    new DynamicStructuredTool({
        name: "geocode-location",
        description: "converts a placename or address into geographic coordinates: [longitude, latitude]",
        schema: z.object({
            address: z.string().describe("The location name or street address")
        }),
        func: async ({ address }) => {
            console.log("Calling Geocoder")
            return await geocodeLocation(address)
        }
    }),
];


import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
//   openAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY, // In Node.js defaults to process.env.AZURE_OPENAI_API_KEY
  azureOpenAIApiVersion: process.env.OPENAI_API_VERSION, // In Node.js defaults to process.env.AZURE_OPENAI_API_VERSION
  azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME, // In Node.js defaults to process.env.AZURE_OPENAI_API_INSTANCE_NAME
  azureOpenAIApiDeploymentName: process.env.OPENAI_DEPLOYMENT_NAME, // In Node.js defaults to process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME
  modelName: process.env.OPENAI_MODEL_NAME
});

import { createOpenAIToolsAgent, AgentExecutor } from "langchain/agents";

const agent = await createOpenAIToolsAgent({
    llm: model,
    tools: tools,
    prompt: prompt,
  });

const agentExecutor = new AgentExecutor({
  agent,
  tools,
  verbose: true,
});
  
let query = `Where is Redlands, CA?`;
const response = await agentExecutor.invoke({
  input: query,
})


console.log(`< ${query}`);
console.log(`> ${response.content}`);





