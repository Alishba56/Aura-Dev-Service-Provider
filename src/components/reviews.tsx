"use client"

import { Star } from "lucide-react"
import Image from "next/image"

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image: "/reviewer-1.jpg",
      rating: 5,
      text: "Exceptional work! Robert delivered a complete overhaul of our platform. His attention to detail and problem-solving skills are outstanding.",
      delay: 0,
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Innovation Labs",
      image: "/reviewer-2.jpg",
      rating: 5,
      text: "Working with Robert was a game-changer for our project. His expertise in full-stack development saved us months of development time.",
      delay: 0.1,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder of DesignHub",
      image: "/reviewer-3.jpg",
      rating: 5,
      text: "The most professional developer I've worked with. Robert not only delivered the project on time but also provided valuable insights.",
      delay: 0.2,
    },
    {
      name: "David Park",
      role: "CTO at Digital Solutions",
      image: "/reviewer-4.jpg",
      rating: 5,
      text: "Incredible talent! Robert's ability to translate complex requirements into elegant solutions is truly remarkable.",
      delay: 0.3,
    },
  ]

  return (
    <section id="reviews" className="py-20 px-4 md:px-8 lg:px-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Client Reviews</span>
          </h2>
          <p className="text-muted-foreground text-lg">What my clients have to say</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${review.delay}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

              <div className="relative p-8 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group-hover:scale-105 group-hover:-translate-y-2">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 group-hover:animate-pulse" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/90 mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  "{review.text}"
                </p>
                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
