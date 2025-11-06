"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

type Message = { role: "user" | "assistant" | "system"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const quickQuestions = [
    "What type of website suits me?",
    "How to start?",
    "Business website plan",
    "Types of websites?",
    "Portfolio examples",
  ];

  async function sendMessage(text: string) {
    if (!text.trim()) return;
    setError(null);

    const newMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok) setError(data.error?.message || "Failed to get response");
      else
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed z-2">
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 p-4 rounded-full 
        bg-white backdrop-blur-xl border border-black/10
        shadow-lg hover:shadow-xl transition-all flex items-center justify-center
        hover:scale-110"
      >
        {open ? (
          <X className="text-gray-800" size={24} />
        ) : (
          <MessageCircle className="text-gray-800" size={24} />
        )}
      </button>

      {open && (
        <div
          className="fixed bottom-20 right-6 w-80 p-4 rounded-2xl
          bg-white/60 backdrop-blur-2xl 
          border border-black/10
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          flex flex-col animate-[fadeIn_0.25s_ease]"
        >
          <div className="font-semibold text-gray-900 mb-2 text-center">
            💬 Your AI Assistant
          </div>

          <div className="flex flex-wrap gap-2 mb-3 justify-center">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs px-3 py-1 rounded-full 
                bg-white border border-black/10 text-gray-700
                hover:bg-gray-100 transition"
              >
                {q}
              </button>
            ))}
          </div>

          <div
            ref={chatRef}
            className="h-64 overflow-y-auto space-y-2 p-2 rounded-xl bg-white/70 border border-black/5"
          >
            {messages
              .filter((m) => m.role !== "system")
              .map((m, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-xl whitespace-pre-wrap text-sm max-w-[80%] backdrop-blur-sm ${
                    m.role === "user"
                      ? "bg-black text-white ml-auto"
                      : "bg-white/90 text-gray-800 border border-black/10"
                  }`}
                >
                  {m.content}
                </div>
              ))}
          </div>

          {error && (
            <p className="text-xs text-red-600 mt-1 text-center">{error}</p>
          )}

          <div className="flex gap-2 mt-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Type here..."
              className="flex-1 px-3 py-2 text-sm rounded-xl border text-black border-black/10 
              bg-white/70 focus:outline-none"
            />

            <button
              onClick={() => sendMessage(input)}
              disabled={loading}
              className="px-4 py-2 rounded-xl bg-black text-white text-sm 
              hover:bg-gray-900 transition disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
