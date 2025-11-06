"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I offer web development, UI/UX design, and performance optimization services. I specialize in building modern, responsive applications using React, Next.js, and Tailwind CSS.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary depending on complexity and scope. Small projects typically take 2-4 weeks, while larger applications may take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes! I love working with startups and early-stage companies. I can help you build your MVP, scale your application, and optimize your development process.",
    },
    {
      question: "What is your development process?",
      answer:
        "I follow an agile development process with regular communication and feedback loops. This includes discovery, design, development, testing, and deployment phases.",
    },
    {
      question: "Can you help with existing projects?",
      answer:
        "I can help with code reviews, performance optimization, bug fixes, feature additions, and technical consulting for existing projects.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React, Next.js, TypeScript, Tailwind CSS, Node.js, and modern web development tools. I'm always learning new technologies to stay current.",
    },
  ]

  return (
    <section className="relative py-20  px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0  -z-1">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked</span>
            <br />
            <span className="text-foreground">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about my services and process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-left text-foreground group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div className="mt-2 animate-fade-in-down">
                  <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
