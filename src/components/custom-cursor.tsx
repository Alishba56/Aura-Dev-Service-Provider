"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`
      }

      if (ringRef.current) {
        ringRef.current.animate(
          { transform: `translate(${clientX - 16}px, ${clientY - 16}px)` },
          { duration: 300, fill: "forwards" }
        )
      }
    }

    const handleEnter = () => (document.body.style.cursor = "none")
    const handleLeave = () => (document.body.style.cursor = "auto")

    document.addEventListener("mousemove", handleMove)
    document.addEventListener("mouseenter", handleEnter)
    document.addEventListener("mouseleave", handleLeave)

    return () => {
      document.removeEventListener("mousemove", handleMove)
      document.removeEventListener("mouseenter", handleEnter)
      document.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  return (
    <>
      {/* Outer Glass Ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.8px solid rgba(6,182,212,.6)", // cyan glow
          background: "rgba(168,85,247,0.12)", // purple soft glow
          backdropFilter: "blur(8px)",
          boxShadow:
            "0 0 20px rgba(6,182,212,0.5), 0 0 30px rgba(168,85,247,0.4)",
          mixBlendMode: "screen",
          position: "fixed",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
          transition: ".15s ease-out",
        }}
      />

      {/* Center Neon Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #a855f7 0%, #06b6d4 100%)", // purple → cyan
          mixBlendMode: "screen",
          position: "fixed",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
          boxShadow:
            "0 0 18px rgba(168,85,247,.9), 0 0 30px rgba(6,182,212,.7)",
        }}
      />
    </>
  )
}
