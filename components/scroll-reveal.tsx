"use client"

import type { ReactNode } from "react"
import { useEffect, useRef } from "react"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "fade"
}

const directionStyles: Record<string, string> = {
  up: "translateY(36px)",
  left: "translateX(-36px)",
  right: "translateX(36px)",
  fade: "translateY(0)",
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    element.style.setProperty("--sr-from", directionStyles[direction])

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        element.classList.add("is-visible")
        observer.unobserve(element)
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [direction])

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${className}`}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--sr-from": directionStyles[direction],
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
