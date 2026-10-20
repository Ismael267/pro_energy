"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Fuel, MapPin, Menu, Mail, PhoneCall } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/solutions-pro", label: "Solutions B2B" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/stations", label: "Stations" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`glass-chrome fixed top-0 right-0 left-0 z-50 border-b pt-[env(safe-area-inset-top,0px)] ${
        scrolled ? "border-zinc-200/70 bg-white/72 shadow-[0_8px_30px_rgba(18,19,17,0.06)]" : "border-white/40 bg-white/55"
      }`}
      style={{ backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)" }}
    >
      <div className="institutional-strip hidden md:block">
        <div className="container mx-auto flex h-9 items-center justify-between px-4 text-[11px] font-semibold">
          <div className="flex items-center gap-3 text-zinc-600">
            <span className="flex items-center gap-1.5 text-zinc-900"><Fuel className="h-3.5 w-3.5 text-primary" />Prix indicatifs en station</span>
            <span>Super &amp; Diesel disponibles 24h/24</span>
          </div>
          <a href="tel:04010194" className="pressable flex items-center gap-1.5 text-zinc-800">
            <PhoneCall className="h-3.5 w-3.5 text-secondary" />Service commercial : 04 01 01 94
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex h-[4.5rem] items-center justify-between md:h-[5.25rem]">
          <Link href="/" className="pressable flex items-center py-1">
            <Image
              src="/pro-energy-logo-transparent.png"
              alt="PRO ENERGY"
              width={360}
              height={160}
              className="h-12 w-auto object-contain sm:h-14 md:h-16"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pressable relative rounded-lg px-3 py-2 text-sm font-semibold ${
                    isActive ? "bg-primary text-white shadow-sm shadow-primary/20" : "text-zinc-700"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="/stations" className="pressable hidden items-center gap-2 rounded-lg bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-700 xl:flex">
              <MapPin className="h-4 w-4 text-primary" />
              Trouver une station
            </a>
            <Button asChild className="btn-shine rounded-full px-5 font-semibold shadow-md shadow-primary/20">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>

          <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen} shouldScaleBackground>
            <DrawerTrigger
              className="pressable flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-800 lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </DrawerTrigger>
            <DrawerContent className="lg:hidden">
              <DrawerHeader className="text-left">
                <DrawerTitle>Navigation</DrawerTitle>
                <DrawerDescription>Solutions, stations et contact commercial.</DrawerDescription>
              </DrawerHeader>
              <nav className="flex flex-col gap-1 px-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))]">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <DrawerClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`pressable rounded-2xl px-4 py-3 text-sm font-semibold ${
                          isActive ? "bg-primary text-white" : "bg-zinc-50 text-zinc-800"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </DrawerClose>
                  )
                })}
                <a
                  href="tel:04010194"
                  className="pressable mt-3 flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white py-3 font-semibold text-zinc-900"
                >
                  <PhoneCall className="h-4 w-4 text-primary" />
                  Commercial : 04 01 01 94
                </a>
                <a
                  href="mailto:proenergy.k@gmail.com"
                  className="pressable flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-medium text-zinc-600"
                >
                  <Mail className="h-4 w-4" />
                  proenergy.k@gmail.com
                </a>
                <DrawerClose asChild>
                  <Button asChild className="mt-1 w-full rounded-2xl py-6 font-semibold">
                    <Link href="/contact">Demander une proposition</Link>
                  </Button>
                </DrawerClose>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-70" />
    </header>
  )
}
