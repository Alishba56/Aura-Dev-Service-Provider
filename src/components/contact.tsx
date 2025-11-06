"use client"

import type React from "react"

import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

interface ContactProps {
  scrollToSection?: (sectionId: string) => void
}

export function Contact({ scrollToSection: _scrollToSection }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message",
        })
      }
    } catch {
  setSubmitStatus({
    type: "error",
    message: "Network error. Please check your connection and try again.",
  })
} finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aurahub.dev@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 324 9236634",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi Sindh, PK",
    },
  ]

  return (
    <section className="relative py-20 px-4  sm:px-6 lg:px-20 max-w-7xl mx-auto overflow-hidden">
      <div className="inset-0  z-1">
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground mx-3 text-lg">Let's work together on something amazing</p>
        </div>

        <div className="grid justify-center md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 p-8 animate-fade-in-left">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                                    className="group flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {info.label}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
<div className="p-6 mx-2 animate-fade-in-right">
             
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-right">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                                  disabled={isSubmitting}

                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-all duration-300 text-foreground placeholder-muted-foreground"
                placeholder="Your name"
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                                  disabled={isSubmitting}

                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-all duration-300 text-foreground placeholder-muted-foreground"
                placeholder="your@email.com"
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={isSubmitting}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-all duration-300 text-foreground placeholder-muted-foreground resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full  px-6 py-3 rounded-lg bg-gradient-to-r items-center from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex justify-center gap-2 group hover:scale-105"
            >
               {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting}
              <span className="group-hover:translate-x-2 group-hover:-translate-y-0 transition-transform duration-300" > → </span>
            </button>



             {submitStatus.type && (
                <div
                  className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span className="text-sm">{submitStatus.message}</span>
                </div>
              )}
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}
