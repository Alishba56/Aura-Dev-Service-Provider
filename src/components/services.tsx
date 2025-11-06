"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Code2, Palette, Zap, Server, ArrowBigRight } from 'lucide-react'

type Service = {
  icon: string
  title: string 
  description: string
  delay: number
  color: string
  borderColor: string
}

const ICONS: Record<string, any> = {
  Code2,
  Palette,
  Zap,
  Server,
}

export default function Services() {
  const [services, setServices] = useState<Service[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch('/api/services')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!mounted) return
        setServices(data.services || [])
      })
      .catch((err) => {
        console.error('Failed to load services:', err)
        if (mounted) setError('Failed to load services')
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  const items = services || []

  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-background relative overflow-hidden">
      <div className="absolute z-auto inset-0 overflow-hidden ">
        <div className="absolute top-20 left-10 w-96 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-1">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text ">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">What I can do for you</p>
        </div>

        {loading && <div className="text-center">Loading services...</div>}
        {error && <div className="text-center text-red-600">{error}</div>}

        <div className="grid md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((service, index) => {
            const Icon = ICONS[service.icon] || Zap
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{
                  animationDelay: `${service.delay * 0.1}s`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>

                <div className={`relative p-8 rounded-lg bg-card border ${service.borderColor} hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group-hover:scale-105 group-hover:-translate-y-1`}>
                  <div className="mb-6 inline-block p-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* bottom hover line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-12 transition-all duration-300"></div>

                  
                </div>
              </div>
            )
          })}
        </div>

        {/* ✅ View All Button bottom center */}
          <Link href="/service">
        <div className="mt-10 flex items-center  justify-center">
            <button className="px-[50px] py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 group hover:scale-105">
              All Services
              <span className="group-hover:translate-x-2 group-hover:-translate-y-0 transition-transform duration-300" > → </span>
            </button>
        </div>
          </Link>

      </div>
    </section>
  )
}
