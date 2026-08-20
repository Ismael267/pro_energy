"use client"

import { Button } from "@/components/ui/button"
import { MapPin, PhoneCall, Fuel, HardHat, Truck, ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"

const slides = [
  {
    image: "/pro-energy-station-full.png",
    badge: "Fournisseur d'Énergie de Référence",
    title: "Votre Partenaire pour un Approvisionnement Fiable en Carburant",
    subtitle: "Du carburant à la solution complète d'approvisionnement : chantiers BTP, transporteurs, flottes et réseau de stations.",
    primaryCta: { label: "Découvrir nos solutions", href: "/solutions-pro" },
    secondaryCta: { label: "Trouver une station", href: "/stations" },
  },
  {
    image: "/station-service-moderne-pompes.jpg",
    badge: "Solutions Sur Chantier BTP",
    title: "Le Carburant Directement sur Votre Chantier",
    subtitle: "Mise en place de citernes et pompes sur site avec livraisons programmées selon le rythme de vos travaux.",
    primaryCta: { label: "Solution BTP & Citerne", href: "/solutions-pro" },
    secondaryCta: { label: "Demander une étude", href: "/contact" },
  },
  {
    image: "/pro-energy-cafe-shop.png",
    badge: "Réseau & Services 24/7",
    title: "5 Stations-Service Modernes à Ouagadougou",
    subtitle: "Carburants haute performance, lavage auto professionnel, boutiques et café-shop pour votre confort au quotidien.",
    primaryCta: { label: "Nos 5 Stations", href: "/stations" },
    secondaryCta: { label: "Tous nos services", href: "/services" },
  },
]

const quickActions = [
  {
    icon: Fuel,
    title: "Trouver une station",
    desc: "5 stations ouvertes 24h/24 7j/7",
    href: "/stations",
    accent: "text-primary group-hover:text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: HardHat,
    title: "Chantiers & BTP",
    desc: "Citernes & livraisons sur site",
    href: "/solutions-pro",
    accent: "text-amber-600 group-hover:text-amber-600",
    bg: "bg-amber-500/10",
  },
  {
    icon: Truck,
    title: "Flottes & Transporteurs",
    desc: "Suivi & conditions gros volumes",
    href: "/solutions-pro",
    accent: "text-blue-600 group-hover:text-blue-600",
    bg: "bg-blue-500/10",
  },
  {
    icon: PhoneCall,
    title: "Contact Commercial",
    desc: "Ligne directe : 04 01 01 94",
    href: "/contact",
    accent: "text-secondary group-hover:text-secondary",
    bg: "bg-secondary/20",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6500)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative pt-24 md:pt-28 pb-12 bg-gradient-to-b from-zinc-100 via-white to-zinc-50 overflow-hidden">
      
      {/* Container Hero Style TotalEnergies */}
      <div className="container mx-auto px-4">
        
        {/* Main Banner Card */}
        <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden min-h-[540px] md:min-h-[580px] flex items-center shadow-2xl border border-zinc-200/60 bg-zinc-950">
          
          {/* Background Images */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-7000 ease-out ken-burns-active"
                priority={index === 0}
              />
              {/* Gradients inspirés TotalEnergies : sombre contrasté à gauche pour la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/75 to-zinc-950/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/30" />
            </div>
          ))}

          {/* Hero Content */}
          <div className="relative z-20 max-w-2xl px-6 py-12 md:px-14 lg:px-16 text-white">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-secondary text-xs font-bold uppercase tracking-wider mb-5">
              {/* <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" /> */}
              <span>{slides[currentSlide].badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.12] mb-5 text-balance">
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed mb-8 max-w-xl">
              {slides[currentSlide].subtitle}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-7 py-6 shadow-xl shadow-primary/30 btn-shine">
                <Link href={slides[currentSlide].primaryCta.href}>
                  {slides[currentSlide].primaryCta.label}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/20 text-white font-bold rounded-xl px-6 py-6">
                <Link href={slides[currentSlide].secondaryCta.href}>
                  {slides[currentSlide].secondaryCta.label}
                </Link>
              </Button>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? "w-8 bg-secondary"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Aller au slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Floating Commercial Phone Pill (Top Right on desktop) */}
          <div className="hidden lg:flex absolute top-8 right-8 z-20 items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-zinc-900">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-zinc-300 font-medium">Service Commercial</div>
              <a href="tel:04010194" className="text-base font-extrabold text-white hover:text-secondary transition-colors">
                04 01 01 94
              </a>
            </div>
          </div>

        </div>

        {/* TotalEnergies Style: Quick-Action Floating Cards Strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-8 sm:-mt-10 relative z-30 max-w-6xl mx-auto px-2">
          {quickActions.map((action, i) => {
            const Icon = action.icon
            return (
              <Link
                key={i}
                href={action.href}
                className="group bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl border border-zinc-200/80 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-xl ${action.bg} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                  <Icon className={`w-6 h-6 ${action.accent}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{action.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </h3>
                  <p className="text-xs text-zinc-500 truncate mt-0.5">{action.desc}</p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* TotalEnergies Style: Key Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-zinc-200/80 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-2">
            <div className="text-2xl md:text-4xl font-extrabold text-primary mb-1">5+</div>
            <div className="text-xs md:text-sm font-semibold text-zinc-800">Stations-Service</div>
            <div className="text-[11px] text-zinc-500">À Ouagadougou & régions</div>
          </div>
          <div className="p-2">
            <div className="text-2xl md:text-4xl font-extrabold text-secondary mb-1">24/7</div>
            <div className="text-xs md:text-sm font-semibold text-zinc-800">Service Continu</div>
            <div className="text-[11px] text-zinc-500">Jour et nuit sans interruption</div>
          </div>
          <div className="p-2">
            <div className="text-2xl md:text-4xl font-extrabold text-primary mb-1">100%</div>
            <div className="text-xs md:text-sm font-semibold text-zinc-800">Carburants Certifiés</div>
            <div className="text-[11px] text-zinc-500">Qualité et rendement moteur</div>
          </div>
          <div className="p-2">
            <div className="text-2xl md:text-4xl font-extrabold text-zinc-900 mb-1">BTP & Pro</div>
            <div className="text-xs md:text-sm font-semibold text-zinc-800">Livraison Sur Site</div>
            <div className="text-[11px] text-zinc-500">Citernes et pompes dédiées</div>
          </div>
        </div>

      </div>
    </section>
  )
}
