"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const slides = [
  {
    image: "/pro-energy-station-full.png",
    title: "Votre Station d'Essence de Confiance",
    subtitle: "Des carburants de qualité supérieure, des services complets et un accueil chaleureux",
  },
  {
    image: "/pro-energy-cafe-shop.png",
    title: "Café Shop & Boutique",
    subtitle: "Découvrez nos magasins et une gamme de produits essentiels du quotidien",
  },
  {
    image: "/pro-energy-price-sign.png",
    title: "Prix Compétitifs",
    subtitle: "Les meilleurs tarifs pour tous vos carburants",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section
      id="accueil"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-[90vh] flex items-center overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-all"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-all"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/20 backdrop-blur-sm text-primary border border-primary/30 text-sm font-medium">
            Ouvert 24h/24, 7j/7
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto shadow-2xl px-8 py-6 text-lg font-semibold rounded-full"
            >
              Trouver une station
            </Button>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto shadow-2xl px-8 py-6 text-lg font-semibold rounded-full"
            >
              Nos produits
            </Button>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto shadow-2xl px-8 py-6 text-lg font-semibold rounded-full"
            >
              Nos cartes
            </Button>
          </div> */}

          <div className="flex gap-2 justify-center mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-primary w-8" : "bg-white/50"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-white/80">
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-primary" />
              <span>123 Avenue de la République</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-accent" />
              <span>Service non-stop 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
