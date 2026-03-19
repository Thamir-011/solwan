import { NextResponse } from "next/server";
import { classifyEmotion } from "@/utils/emotion";
import { hadiths } from "@/data/hadiths";

export async function POST(req: Request) {
  const { userInput } = await req.json();

  // 1️⃣ classify emotion
  const emotion = await classifyEmotion(userInput);

  // 2️⃣ find matching hadith
  const matches = hadiths.filter((h) => h.emotions.includes(emotion || ""));

  const match = matches[Math.floor(Math.random() * matches.length)];

  if (!match) {
    return NextResponse.json({ message: "No match found." });
  }

  return NextResponse.json({ hadith: match });
}
