import { createAgent } from "langchain";
import z from "zod";

export const emotionClassifier = createAgent({
  model: "gpt-4o-mini",
  systemPrompt: `
    Classify the user's emotional state into ONE of the following categories:

    sadness
    anxiety
    fear
    gratitude
    anger
    hope

    Return only the single word.`,
  responseFormat: z.object({
    emotionClassification: z.enum([
      "sadness",
      "anxiety",
      "fear",
      "gratitude",
      "anger",
      "hope",
    ]),
  }),
});
