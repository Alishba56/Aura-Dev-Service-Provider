"use client"

import { Check, Zap, Globe, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function Pricing() {
  const pricingPlans = [
    {
      name: "5 Page Website",
      price: 99,
      description: "Perfect for small businesses and portfolios",
      icon: Globe,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      features: [
        "5 Responsive Pages",
        "Mobile Optimized",
        "SEO Friendly",
        "Contact Form",
        "Social Media Links",
        "2 Revision Rounds",
        "1 Month Support",
      ],
      highlighted: false,
      delay: 0,
    },
    {
      name: "E-commerce with API Integration",
      price: 299,
      description: "Full-featured online store with payments",
      icon: ShoppingCart,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      features: [
        "Product Management",
        "Shopping Cart",
        "Stripe Integration",
        "User Authentication",
        "Order Tracking",
        "Payment Processing",
        "API Integration",
        "Unlimited Revisions",
        "3 Months Support",
      ],
      highlighted: true,
      delay: 1,
    },
    {
      name: "Custom Project",
      price: "Custom",
      description: "Tailored solution for your specific needs",
      icon: Zap,
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      features: [
        "Custom Development",
        "Advanced Features",
        "API Integration",
        "Database Design",
        "Performance Optimization",
        "Full Support",
        "Maintenance Plans",
      ],
      highlighted: false,
      delay: 2,
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-background relative overflow-hidden">
       <div className="absolute inset-0 z-1">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full mix-blend-screen blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-4000"></div>

        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-1">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Project Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">Flexible packages to fit your budget</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={index}
                className={`relative group animate-fade-in-up ${plan.highlighted ? "md:scale-105" : ""}`}
                style={{
                  animationDelay: `${plan.delay * 0.1}s`,
                }}
              >
                {/* Background glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                ></div>

                {/* Featured badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-xs font-semibold text-foreground z-20 animate-bounce">
                    Most Popular
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative p-8 rounded-xl bg-card border ${plan.borderColor} ${
                    plan.highlighted ? "border-primary/50 shadow-2xl shadow-primary/20" : "hover:border-primary/50"
                  } transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group-hover:-translate-y-2 h-full flex flex-col`}
                >
                  {/* Icon */}
                  <div className="mb-6 inline-block p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110 w-fit">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    {typeof plan.price === "number" ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold gradient-text">${plan.price}</span>
                        <span className="text-muted-foreground">/one-time</span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-primary">{plan.price}</div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 group/feature">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                        <span className="text-foreground/90 group-hover/feature:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                            <Link href='/contact'>

                  <button
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-primary to-secondary text-foreground hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
                        : "bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30 hover:border-primary/50"
                    }`}
                  >
                    Get Started
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                            </Link>

                </div>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}">
          <p className="text-muted-foreground mb-4">Have a unique project in mind?</p>
          <button className="text-primary hover:text-secondary transition-colors duration-300 font-semibold flex items-center gap-2 mx-auto link-hover">
          <Link href='/contact'>
            Contact me for a custom quote
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          </button>
        </div>
      </div>
    </section>
  )
}
