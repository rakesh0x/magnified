import { fal } from "@fal-ai/client";

require('dotenv').config();
fal.config({
  credentials: process.env.FAL_KEY
});

export const submitReq = async (prompt: string, tensorPath: string) => {
  const { request_id, response_url }  = await fal.queue.submit("fal-ai/flux-lora-fast-training", {
    input: {
      images_data_url: prompt,
      
    },
  });
}   


export const subscribeToModel = async () => {
  const { subscribe } = fal;
  return await subscribe("fal-ai/flux-lora-fast-training", {
    input: {
      images_data_url: ""
    },
    logs: true,
    onQueueUpdate: (update) => {  
      if (update.status === "IN_PROGRESS") {
        update.logs.map((log) => log.message).forEach(console.log);
      }
    },
  });
};

export const getStatusUpdate = async (requestId: string) => {
  const { queue } = fal;
  return await queue.status("fal-ai/flux-lora-fast-training", {
    requestId,
    logs: true,
  });
};

export const getImageResult = async (requestId: string) => {
  const { queue } = fal;
  return await queue.result("fal-ai/flux-lora-fast-training", {
    requestId
  });
};