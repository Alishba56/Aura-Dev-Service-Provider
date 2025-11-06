"use client"

import { ArrowUpRight, Star, GitFork, ArrowBigRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ecom from '@/public/Ecom.png'
import ai from '@/public/ai-model.png'
import blog from '@/public/blog.png'

export default function Projects() {
  const projects = [
    {
      title: "AI-ChatBot",
      description: "An AI-powered chatbot web application with conversational interface and natural language processing capabilities.",
      image: ai,
      tags: [{ name: "TypeScript", color: "bg-blue-500/20 text-blue-400" }],
      stats: { stars: 128, forks: 45 },
      link: "https://ai-chatbot-next-js-eta.vercel.app/",
      github: "https://github.com/Alishba56/AI_CHATBOT_NEXT.JS",
      delay: 0,
    },
    {
      title: "E-Commerce",
      description: "A full-featured e-commerce platform with product listings, shopping cart, and payment integration.",
      image: ecom,
      tags: [{ name: "TypeScript", color: "bg-blue-500/20 text-blue-400" }],
      stats: { stars: 92, forks: 30 },
      link: "https://honest-bazar.vercel.app/",
      github: "https://github.com/Alishba56/Next.js_Design_Jam_2024",
      delay: 1,
    },
    {
      title: "Blog-Website",
      description: "A content-rich blog website with user authentication, post creation, and commenting features.",
      image: blog,
      tags: [{ name: "TypeScript", color: "bg-blue-500/20 text-blue-400" }],
      stats: { stars: 76, forks: 22 },
      link: "https://milestone-three-blogs-web-n4hc.vercel.app/ ",
      github: "https://github.com/Alishba56/milestone-three-blogs-web",
      delay: 2,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-8  relative lg:px-20 bg-background   overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-1">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore my portfolio of modern web interfaces and applications built with Next.js, React, and Tailwind CSS, showcasing clean UI, smooth user experience, and responsive design.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{
                animationDelay: `${project.delay * 0.15}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

              <div className="relative rounded-2xl  pb-4 w-[350px] border border-purple-500/20 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
                  <Image
                  width={500}
                  height={500}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent group-hover:from-purple-950/60 transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="px-10 py-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 flex-1">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-primary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <div
                      key={tagIndex}
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900/50 border border-gray-700/50 hover:border-gray-600 transition-colors"
                      >
                        <div className={`w-2 h-2 rounded-full ${tag.color.split(" ")[0]}`}></div>
                        <span className={`text-xs font-medium ${tag.color}`}>{tag.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Link
                      href={project.link}
                      className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 text-center transform hover:scale-105"
                      >
                      Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg border border-gray-600 hover:border-primary text-gray-300 hover:text-primary transition-all duration-300 text-center transform hover:scale-105"
                      >
                      Repository
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    <Link href="/projects">
        <div className="mt-10 flex items-center  justify-center">
            <button className="px-12 py-3  rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 group hover:scale-105">
               All Projects
              <span className="group-hover:translate-x-2 group-hover:-translate-y-0 transition-transform duration-300" > → </span>
            </button>
        </div>
          </Link>

      </div>
    </section>
  )
}
