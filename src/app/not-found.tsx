"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-b from-background via-background/95 to-background text-foreground overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-secondary/25 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-blob animation-delay-4000"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <div className="my-20">
          <div className="relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <h1 className="relative text-[120px] md:text-[180px] font-black leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-2xl">
              404
            </h1>
          </div>
        </div>

        <div className="animate-fade-in-up space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Page Lost in Space 🪐</h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto leading-relaxed">
            The page you’re looking for seems to have drifted off into the cosmic void.  
            But don’t worry — we’ll help you get back to orbit.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Link
            href="/"
            className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/40 transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">← Back to Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl font-semibold border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>

        <div className="mt-20 flex justify-center gap-8 md:gap-16 text-foreground/40">
          <div className="animate-float delay-[0s]">
            <div className="w-16 h-16 border-4 border-primary/40 rounded-xl hover:rotate-45 transition-transform duration-500"></div>
          </div>
          <div className="animate-float delay-[0.5s]">
            <div className="w-16 h-16 border-4 border-secondary/40 rounded-full"></div>
          </div>
          <div className="animate-float delay-[1s]">
            <div className="w-16 h-16 border-4 border-accent/40 rounded-xl hover:rotate-45 transition-transform duration-500"></div>
          </div>
        </div>

        <div className="my-20 pt-12 border-t border-foreground/10 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-foreground/40 mb-6">Quick Navigation</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link href="/" className="hover:text-primary transition-colors duration-300 hover:underline">Home</Link>
            <span className="text-foreground/20">•</span>
            <Link href="/projects" className="hover:text-secondary transition-colors duration-300 hover:underline">Projects</Link>
            <span className="text-foreground/20">•</span>
            <Link href="/service" className="hover:text-accent transition-colors duration-300 hover:underline">Services</Link>
            <span className="text-foreground/20">•</span>
            <Link href="/contact" className="hover:text-primary transition-colors duration-300 hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
