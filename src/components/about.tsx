"use client"
import Image from "next/image"
import img from "../../public/aboout.png"

export default function About() {
  return (
    <section className=" relative py-20 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto overflow-hidden">
    <div className=" inset-0 z-1">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/30 rounded-full mix-blend-screen blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-accent/20 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-4000"></div>
</div>
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="animate-fade-in-left ">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl text-gray-300 font-bold mb-4 animate-fade-in-up  from-primary via-secondary gradient-text to-primary bg-clip-text">About Us            </h2>
            <div
              className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            ></div>
          </div>

          <p
            className="text-lg text-gray-300 mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            I am a Front-End Developer passionate about building clean, responsive, and user-focused web applications. I specialize in Next.js, React.js, JavaScript, Tailwind CSS, and modern UI practices — with hands-on experience converting designs into pixel-perfect, high-performance interfaces.
          </p>

          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Work Experience</h3>

            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-30 transition duration-500 blur"></div>
                <div className="relative border border-primary/30 bg-gradient-to-r from-primary/5 to-transparent rounded-lg p-5 hover:border-primary/60 transition duration-300">
                  <h4 className="text-primary font-bold text-lg mb-2">Frontend Developer</h4>
                  <p className="text-secondary/80 font-semibold text-sm mb-3">2025 - Present</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
Worked on AI-powered web apps using Next.js, Tailwind, and OpenAI APIs.
Built reusable UI components and animations with Framer Motion and GSAP.                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-lg opacity-0 group-hover:opacity-30 transition duration-500 blur"></div>
                <div className="relative border border-secondary/30 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg p-5 hover:border-secondary/60 transition duration-300">
                  <h4 className="text-secondary font-bold text-lg mb-2">
Web Developer </h4>
                  <p className="text-primary/80 font-semibold text-sm mb-3">2022 - 2024</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
Created responsive websites for local businesses using React and Sanity CMS.
Improved site performance and SEO, leading to better engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Image with enhanced styling */}
        <div className="animate-fade-in-right">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-30 group-hover:opacity-60 transition duration-300"></div>

            <div className="relative border border-secondary/50 rounded-2xl p-1 bg-gradient-to-br from-secondary/10 to-primary/10 overflow-hidden">
              <Image
              width={500}
              height={500}
                src={img}
                alt="Developer working"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
