"use client"

import { PhoneCall, ArrowDown, ChevronLeft, ChevronRight, Fuel, HardHat, Truck } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/pro-energy-station-full.png",
    tag: "Approvisionnement Fiable & Continu",
    title: "Votre Partenaire pour un Approvisionnement Fiable en Carburant",
    subtitle: "Du carburant à la solution complète d'approvisionnement pour stations, entreprises, BTP et flottes professionnelles.",
    accent: "from-black/90 via-black/60 to-transparent",
  },
  {
    image: "/station-service-moderne-pompes.jpg",
    tag: "Chantiers & Professionnels",
    title: "Le Carburant Directement sur Votre Chantier",
    subtitle: "Mise en place de citernes, pompes et livraisons régulières adaptées à vos volumes et contraintes de terrain.",
    accent: "from-black/85 via-black/55 to-transparent",
  },
  {
    image: "/pro-energy-cafe-shop.png",
    tag: "Réseau & Services",
    title: "5 Stations-Service Ouvertes 24h/24, 7j/7",
    subtitle: "Carburants haute qualité, boutiques, lavage et café-shop pour les usagers de la route et les transporteurs.",
    accent: "from-black/85 via-black/55 to-transparent",
  },
]

const targetBadges = [
  { icon: Fuel, label: "Stations & Revendeurs" },
  { icon: HardHat, label: "Entreprises & BTP" },
  { icon: Truck, label: "Transporteurs & Flottes" },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [kenBurns, setKenBurns] = useState(true)

  const goTo = useCallback(
    (next: number) => {
      setCurrentSlide(next)
      setKenBurns(false)
      requestAnimationFrame(() => requestAnimationFrame(() => setKenBurns(true)))
    },
    []
  )

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((currentSlide + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlide, goTo])

  const nextSlide = () => goTo((currentSlide + 1) % slides.length)
  const prevSlide = () => goTo((currentSlide - 1 + slides.length) % slides.length)

  return (
    <section
      id="accueil"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-black"
    >
      {/* Slides images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className={`object-cover ${index === currentSlide && kenBurns ? "ken-burns-active" : ""}`}
            priority={index === 0}
          />
          {/* Gradients */}
          <div className={`absolute inset-0 hero-overlay bg-gradient-to-r ${slide.accent}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>
      ))}

      {/* Nav arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 group"
        aria-label="Slide précédent"
      >
        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 shadow-lg">
          <ChevronLeft className="w-5 h-5" />
        </div>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 group"
        aria-label="Slide suivant"
      >
        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 shadow-lg">
          <ChevronRight className="w-5 h-5" />
        </div>
      </button>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20 pt-32 pb-24">
        <div className="max-w-4xl">
          
          {/* Tag badge */}
          <div
            key={`tag-${currentSlide}`}
            className="hero-copy hero-copy--badge inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/40 text-secondary text-xs font-bold tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            {slides[currentSlide].tag}
          </div>

          {/* Title */}
          <h1
            key={`h1-${currentSlide}`}
            className="hero-copy text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] text-balance drop-shadow-md"
          >
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p
            key={`sub-${currentSlide}`}
            className="hero-copy hero-copy--subtitle text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
          >
            {slides[currentSlide].subtitle}
          </p>

          {/* Target badges */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {targetBadges.map((badge, i) => {
              const Icon = badge.icon
              return (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold"
                >
                  <Icon className="w-3.5 h-3.5 text-secondary" />
                  <span>{badge.label}</span>
                </div>
              )
            })}
          </div>

          {/* CTA Buttons & Direct Call */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button asChild size="lg" className="btn-shine bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 py-6 text-base shadow-xl shadow-primary/30">
              <a href="#solutions-pro">Découvrir nos solutions</a>
            </Button>
            
            <a
              href="tel:04010194"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
            >
              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-white">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <span>Commercial : <strong className="text-secondary">04 01 01 94</strong></span>
            </a>
          </div>

          {/* Slide dots */}
          <div className="flex gap-2 items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-8 bg-secondary"
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#solutions-pro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors"
        aria-label="Défiler vers le bas"
      >
        <span className="text-xs tracking-widest uppercase font-semibold">Découvrir</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>

      {/* Progress line */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/10">
        <div
          key={`progress-${currentSlide}`}
          className="h-full bg-gradient-to-r from-primary to-secondary origin-left"
          style={{ animation: "loader-line 6s linear both" }}
        />
      </div>
    </section>
  )
}
