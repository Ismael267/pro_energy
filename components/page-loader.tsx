"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    // Start hide animation after 850ms, remove completely from DOM after 1350ms
    const hideTimer = setTimeout(() => {
      setHiding(true)
    }, 850)

    const removeTimer = setTimeout(() => {
      setLoading(false)
    }, 1350)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!loading) return null

  return (
    <div
      className={`page-loader ${hiding ? "is-hiding" : ""}`}
      role="status"
      aria-label="Chargement de PRO ENERGY..."
    >
      <div className="page-loader__glow" />

      {/* Logo ProEnergy */}
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/pro-energy-logo-transparent.png"
          alt="PRO ENERGY"
          width={280}
          height={130}
          priority
          className="h-20 sm:h-24 w-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 duration-700"
        />

        {/* Animated Brand Gradient Line */}
        <div className="page-loader__line-wrap">
          <div className="page-loader__line" />
        </div>

        {/* Slogan */}
        <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase mt-4">
          L'Énergie en mouvement
        </span>
      </div>
    </div>
  )
}
