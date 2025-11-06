"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">

      {/* 🎨 Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[130px] animate-pulse delay-2000"></div>
      </div>

      

      {/* ⭐ Main Content Center */}
      <div className="text-center z-1 max-w-4xl mx-auto animate-fade-in-up">

        {/* Floating Badge */}
        <div className="mx-auto inline-block px-6 py-2 border border-white/20 bg-white/10 backdrop-blur-xl rounded-full text-xs text-gray-300 shadow-lg mb-8 animate-bounce">
          🚀 Available For Freelance Projects
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Transforming Ideas Into  
          <span className="block gradient-text">Digital Reality</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
          I build sleek, fast, and modern web apps using Next.js, Tailwind, and AI integrations.  
          Creating meaningful digital products with design + performance in mind.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <Link href="/projects">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:shadow-primary/40 transition-all hover:scale-105">
              View Projects
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-8 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all hover:scale-105">
              Contact Me
            </button>
          </Link>
        </div>

        <div className="text-gray-400 text-sm tracking-wide">
          Full-Stack Developer • UI/UX • AI Integration
        </div>
      </div>
    </section>
  );
}
