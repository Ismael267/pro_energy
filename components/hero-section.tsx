"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, HardHat, MapPin, PhoneCall, Truck } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

const slides = [
  {
    image: "/pro-energy-station-full.png",
    eyebrow: "L'énergie qui vous met en mouvement",
    title: "L'énergie au rythme de vos opérations.",
    description:
      "Approvisionnement, logistique et réseau de stations : PRO ENERGY accompagne les entreprises et les particuliers, chaque jour.",
    primary: { label: "Nos solutions pro", href: "/solutions-pro" },
  },
  {
    image: "/station-service-moderne-pompes.jpg",
    eyebrow: "Chantiers & grands travaux",
    title: "Le carburant arrive là où votre chantier avance.",
    description: "Citernes, pompes et livraisons programmées pour garder vos équipes et vos engins en mouvement.",
    primary: { label: "Solution chantier", href: "/solutions-pro#btp" },
  },
  {
    image: "/pro-energy-cafe-shop.png",
    eyebrow: "Un réseau toujours proche",
    title: "Six stations. Une même exigence de service.",
    description: "Carburants, services automobiles, café-shop : l'essentiel pour vos trajets, 24h/24 et 7j/7.",
    primary: { label: "Trouver une station", href: "/stations" },
  },
]

const services = [
  { icon: HardHat, label: "Chantiers", detail: "Carburant sur site", href: "/solutions-pro#btp" },
  { icon: Truck, label: "Flottes", detail: "Approvisionnement maîtrisé", href: "/solutions-pro#flottes" },
  { icon: MapPin, label: "Stations", detail: "6 sites, ouverts 24/7", href: "/stations" },
]

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const nextSlide = useCallback(() => setActiveSlide((current) => (current + 1) % slides.length), [])

  useEffect(() => {
    const interval = window.setInterval(nextSlide, 7000)
    return () => window.clearInterval(interval)
  }, [nextSlide])

  const slide = slides[activeSlide]

  return (
    <section className="relative overflow-hidden bg-[#121311] text-white">
      <div className="absolute inset-0">
        {slides.map((item, index) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-opacity duration-500 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
            style={{ transitionTimingFunction: "var(--ease-out)" }}
          >
            <Image
              src={item.image}
              alt=""
              fill
              priority={index === 0}
              className={`hero-kenburns object-cover ${index === activeSlide ? "scale-100" : "scale-[1.04]"}`}
              style={{
                transition: "transform 7000ms linear, opacity 500ms var(--ease-out)",
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,19,17,.96)_0%,rgba(18,19,17,.78)_38%,rgba(18,19,17,.28)_72%,rgba(18,19,17,.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,19,17,.78),transparent_52%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] pt-[calc(var(--header-offset)+2rem)] sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16">
          <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.18em] text-[#c5e85c] uppercase">
            <span className="h-px w-8 bg-[#c5e85c]" />
            {slide.eyebrow}
          </div>
          <h1 className="heading-display max-w-3xl text-4xl text-white sm:text-6xl lg:text-7xl">{slide.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">{slide.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={slide.primary.href}
              className="hero-action group inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30"
            >
              {slide.primary.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="hero-action inline-flex items-center gap-3 rounded-lg border border-white/25 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm"
            >
              Parler à un conseiller
            </Link>
          </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <Link href="/solutions-pro" className="quick-card flex items-start gap-3 rounded-xl p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/30 text-[#ffb3b1]"><CheckCircle2 className="h-5 w-5" /></span>
                <span><span className="block text-[11px] font-bold tracking-wider text-[#c5e85c] uppercase">Solutions sur mesure</span><span className="mt-1 block text-sm font-semibold text-white">Un accompagnement pour chaque volume.</span></span>
              </Link>
              <Link href="/stations" className="quick-card flex items-start gap-3 rounded-xl p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#c5e85c]/15 text-[#c5e85c]"><MapPin className="h-5 w-5" /></span>
                <span><span className="block text-[11px] font-bold tracking-wider text-[#c5e85c] uppercase">Réseau de proximité</span><span className="mt-1 block text-sm font-semibold text-white">6 stations à votre service, 24h/24.</span></span>
              </Link>
            </div>
          </div>
          <aside className="hidden rounded-2xl border border-white/15 bg-white/8 p-7 text-center shadow-2xl backdrop-blur-xl lg:block">
            <div className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(from_45deg,#c0262e,#c5e85c,#c0262e)] p-1.5">
              <div className="grid h-full w-full place-items-center rounded-full bg-white p-5 shadow-inner">
                <Image src="/pro-energy-logo-transparent.png" alt="PRO ENERGY" width={150} height={70} className="h-auto w-full object-contain" />
              </div>
            </div>
            <p className="mt-5 text-base font-bold text-white">PRO ENERGY Industries</p>
            <p className="mt-1 text-xs text-zinc-300">L&apos;énergie qui accompagne vos ambitions.</p>
            <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-5 text-xs text-zinc-300">
              <span className="rounded-lg bg-white/6 p-2"><strong className="block text-lg text-white">6</strong>Stations</span>
              <span className="rounded-lg bg-white/6 p-2"><strong className="block text-lg text-white">24/7</strong>Service</span>
            </div>
          </aside>
        </div>

        <div className="grid gap-4 border-t border-white/15 pt-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="grid gap-2 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/15">
            {services.map(({ icon: Icon, label, detail, href }) => (
              <Link key={label} href={href} className="pressable group flex items-center gap-3 py-2 sm:px-5 first:pl-0">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[#c5e85c]">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{label}</span>
                  <span className="block text-xs text-zinc-400">{detail}</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2" aria-label="Choisir une présentation">
            {slides.map((item, index) => (
              <button
                key={item.image}
                onClick={() => setActiveSlide(index)}
                aria-label={`Présentation ${index + 1}`}
                className={`h-2 rounded-full ${index === activeSlide ? "w-9 bg-[#c5e85c]" : "w-2 bg-white/40"}`}
                style={{ transition: "width 200ms var(--ease-out), background-color 200ms ease" }}
              />
            ))}
          </div>
        </div>
      </div>

      <a
        href="tel:04010194"
        className="hero-call fixed right-5 z-40 hidden items-center gap-3 rounded-full bg-white px-5 py-3 text-sm text-zinc-900 shadow-2xl md:flex"
        style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#b51823] text-white">
          <PhoneCall className="h-3.5 w-3.5" />
        </span>
        <span>
          <span className="block text-[10px] font-bold tracking-wider text-zinc-500 uppercase">Service commercial</span>
          <span className="font-bold">04 01 01 94</span>
        </span>
      </a>
    </section>
  )
}
