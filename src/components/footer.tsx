"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in-up">
            <h3 className="text-lg font-bold mb-4 group">
              <span className="text-primary group-hover:animate-pulse-glow transition">
                {"{}"}
              </span>{" "}
              AURA.DEV
            </h3>
            <p className="text-gray-400 text-sm">
              Building digital solutions for modern web.
            </p>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block">
                Next.js Website Development
              </li>
              <li className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block">
                React Front-End Development
              </li>
              <li className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block">
                Responsive UI Development
              </li>
              <li className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block">
                Tailwind CSS UI Design & Development
              </li>
              <li className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block">
                Figma to React/Next Conversion
              </li>
              <li className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block">
                Corporate & Portfolio Websites
              </li>
              <li className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block">
                Landing Page Design & Development
              </li>
              <li className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block">
                Frontend Performance Optimization
              </li>
              <li className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block">
                Website Redesign / UI Upgrade
              </li>
              <li className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block">
SEO-Friendly Frontend Setup
              </li>
            </ul>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400 text-sm">

              <li>
                <Link
                  href="https://github.com/aurahubdev-glitch  "
                  className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-center items-center text-gray-400 text-sm animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <p>&copy; 2025 Aura.Dev. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}
