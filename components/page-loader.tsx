"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const hideTimer = window.setTimeout(() => setIsVisible(false), 850)
    return () => window.clearTimeout(hideTimer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="page-loader" role="status" aria-label="Chargement de la page">
      <div className="page-loader__glow" />
      <Image
        src="/pro-energy-logo-transparent.png"
        alt="PRO energy"
        width={260}
        height={120}
        priority
        className="page-loader__logo"
      />
      <div className="page-loader__line" />
      <span className="page-loader__label">L'énergie en mouvement</span>
    </div>
  )
}