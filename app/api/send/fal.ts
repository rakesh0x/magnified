import { fal } from "@fal-ai/client";
import dotenv from 'dotenv';

require('dotenv').config();
fal.config({
  credentials: process.env.FAL_KEY
});

const result = await fal.subscribe("fal-ai/flux-lora-fast-training", {
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
console.log(result.data);
console.log(result.requestId);