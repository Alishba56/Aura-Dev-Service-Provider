import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { QNA_CATEGORIES } from "../../../data/chat-qna"; // path adjust karo

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const CREATOR_NAME = "Alishba-Shahzad";

const TECH_KEYWORDS = [
  "website", "web", "portfolio", "landing page", "ecommerce",
  "frontend", "backend", "react", "next", "javascript",
  "typescript", "api", "server", "hosting", "data base",
  "ai", "chatbot", "coding", "programming", "software", "developer"
];

const MODEL_OPTIONS = ["gemini-2.0-flash"];

export async function POST(req: Request) {
  try {
    const { messages }: { messages: { content: string }[] } = await req.json();
    const lastMsgRaw = messages[messages.length - 1]?.content || "";
    const lastMsg = lastMsgRaw.toLowerCase();

    // 👤 Creator answer
    if (["who created you", "who made you", "hi","hello","hy"].some(q => lastMsg.includes(q))) {
  return NextResponse.json({ 
    reply: `HEY!⚡\nI am AURA.DEV Assistant. I was created by ${CREATOR_NAME}.\nHow can help you?` 
  });
}


    // ⚡ Quick questions from qna.ts
    // Quick questions check using Object.values
const quick = Object.values(QNA_CATEGORIES).find(category =>
  category.questions.some(q => lastMsg.includes(q.toLowerCase()))
);

if (quick) {
  return NextResponse.json({ reply: quick.answer });
}


    // ❌ Off-topic filter
    const isTechQuery = TECH_KEYWORDS.some(k => lastMsg.includes(k));
    if (!isTechQuery) {
      return NextResponse.json({
        reply: "Sorry 😇 I can only help with technology, programming and website questions."
      });
    }

    // ✅ AI response
    let reply: string | null = null;
    let lastError: string | null = null;

    for (const modelName of MODEL_OPTIONS) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const prompt = `Answer concisely in 1-2 sentences:\n${lastMsgRaw}`;
        const result = await model.generateContent(prompt);
        reply = result.response.text();
        break;
      } catch (err: any) {
        lastError = err?.message || "Unknown error";
        console.warn(`Model ${modelName} failed:`, lastError);
      }
    }

    if (!reply) throw new Error(lastError || "Gemini unavailable");
    return NextResponse.json({ reply });

  } catch (err: any) {
    console.error("Gemini error:", err?.message);
    return NextResponse.json(
      { reply: "⚠️ AI service unavailable, please try again." },
      { status: 503 }
    );
  }
}
