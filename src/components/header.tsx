"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 animate-fade-in-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl  group">
          <span className="text-primary group-hover:animate-pulse-glow transition">{"{ }"}</span>
          <span className="ml-2 group-hover:text-primary font-bold transition">AURA.DEV</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-primary transition duration-300 hover:scale-105 inline-block">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition duration-300 hover:scale-105 inline-block">
            About
          </Link>
          <Link href="/service" className="hover:text-primary transition duration-300 hover:scale-105 inline-block">
            Services
          </Link>
          <Link href="/skills" className="hover:text-primary transition duration-300 hover:scale-105 inline-block">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-primary transition duration-300 hover:scale-105 inline-block">
            Projects
          </Link>
          <Link href="/faq" className="hover:text-primary transition duration-300 hover:scale-105 inline-block">
            FAQ
          </Link>
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden relative z-50 transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
  {isOpen && (
  <div className="md:hidden bg-card border-t border-border animate-slide-in-up z-40">
          <div className="px-10 py-4 space-y-4">
            <Link href="/" className="block hover:text-primary transition duration-300 hover:translate-x-2">
              Home
            </Link>
            <Link href="/about" className="block hover:text-primary transition duration-300 hover:translate-x-2">
              About
            </Link>
            <Link href="/service" className="block hover:text-primary transition duration-300 hover:translate-x-2">
              Services
            </Link>
            <Link href="/projects" className="block hover:text-primary transition duration-300 hover:translate-x-2">
              Projects
            </Link>
            <Link href="/faq" className="block hover:text-primary transition duration-300 hover:translate-x-2">
              FAQ
            </Link>
            <Link href="/skills" className="block hover:text-primary transition duration-300 hover:translate-x-2">
              Skils
            </Link>
            <Link
              href="/contact"
              className="block w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition duration-300 text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
