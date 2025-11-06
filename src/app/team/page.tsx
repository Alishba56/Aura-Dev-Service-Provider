"use client"

import { Linkedin, Github, Twitter } from "lucide-react"
import girls from "@/public/girls.png"
import Image from "next/image"
import mans from "@/public/mans.png"

export default function Team() {
  const team = [
    {
      name: "MuhammadAli ",
      role: "Full Stack Developer",
      bio: "Expert in React, Node.js, and cloud technologies",
      image: mans,
      socials: [
        { icon: Github, href: "https://github.com/muhammadali1631" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/ali-web-dev/" },
        { icon: Twitter, href: "https://x.com/Alishahzad2000M" },
      ],
    },
    {
      name: "Muhammad Sameer",
      role: "Front-End Developer",
      bio: "Passionate about creating beautiful and intuitive interfaces",
      image: mans,
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-sameer-ai/" },
        { icon: Twitter, href: "#" },
      ],
    },
    {
      name: "Alishba Shahzad",
      role: "Back-End Developer",
      bio: "Focused on delivering exceptional user experiences",
      image: girls,
      socials: [
        { icon: Github, href: "https://github.com/Alishba56" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/alishba-shahzad-web/" },
        { icon: Twitter, href: "https://x.com/Alishbah0723" },
      ],
    },
    {
      name: "Neha Shahzad",
      role: "Full Stack Developer",
      bio: "Specializing in cloud infrastructure and deployment",
      image: girls,
      socials: [
        { icon: Github, href: "https://github.com/SKneha0" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/neha-shahzad-55b945309/" },
        { icon: Twitter, href: "#" },
      ],
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative pt-10 z-0">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Meet Our</span>
            <br />
            <span className="text-foreground">Team</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

              <div className="relative bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-sm border border-purple-500/20 hover:border-cyan-500/40 rounded-2xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-b from-purple-500/10 to-cyan-500/10">
                  <Image
                  width={500}
                  height={500}
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-1">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                  </div>
                  <p className="text-primary text-sm font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-8 flex-1 leading-relaxed">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.socials.map((social, idx) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={idx}
                          href={social.href}
                          className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 hover:from-purple-500 hover:to-cyan-500 border border-purple-500/30 hover:border-transparent text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 group/social"
                        >
                          <Icon className="w-5 h-5 group-hover/social:rotate-6 transition-transform duration-300" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
