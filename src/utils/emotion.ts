import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const classifyEmotion = async (userInput: string) => {
  const prompt = `
Classify the user's emotional state into ONE of the following categories:

sadness
anxiety
fear
gratitude
anger
hope

Return ONLY the word.

User message:
${userInput}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const emotion = response.choices[0].message.content?.trim().toLowerCase();

  console.log({ emotion });

  return emotion;
};
