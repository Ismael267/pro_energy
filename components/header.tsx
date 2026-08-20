"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/",             label: "Accueil" },
  { href: "/solutions-pro", label: "Solutions B2B" },
  { href: "/a-propos",      label: "À Propos" },
  { href: "/services",      label: "Services" },
  { href: "/stations",      label: "Stations" },
  { href: "/contact",       label: "Contact & Devis" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-zinc-900/5 border-b border-zinc-200/80"
          : "bg-white/98 backdrop-blur-md border-b border-zinc-200/60"
      }`}
    >
      {/* Top bar blanc épuré */}
      <div
        className={`hidden md:flex items-center justify-between px-8 text-xs border-b border-zinc-100 overflow-hidden transition-all duration-500 ${
          scrolled ? "h-0 py-0 opacity-0" : "h-9 py-1.5 opacity-100 bg-zinc-50/90 text-zinc-600"
        }`}
      >
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-sm shadow-secondary/50 animate-pulse" />
          <span className="text-zinc-600">Votre partenaire pour un approvisionnement fiable en carburant</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:04010194" className="flex items-center gap-1.5 font-bold text-zinc-900 hover:text-primary transition-colors">
            <PhoneCall className="w-3.5 h-3.5 text-primary" />
            <span>Commercial : <span className="text-primary font-extrabold">04 01 01 94</span></span>
          </a>
          <span className="text-zinc-300">|</span>
          <a href="mailto:proenergy.k@gmail.com" className="flex items-center gap-1.5 text-zinc-600 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5 text-secondary" />
            <span>proenergy.k@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group py-1">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/pro-energy-logo-transparent.png"
                alt="PRO energy"
                width={260}
                height={120}
                className="h-14 sm:h-16 md:h-18 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav avec liens de pages */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/80 p-1.5 rounded-full border border-zinc-200/60">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white bg-primary shadow-md shadow-primary/25"
                      : "text-zinc-700 hover:text-zinc-950 hover:bg-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary ring-2 ring-white" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Devis & Contact */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-bold btn-shine rounded-full px-6 py-5 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-primary/30"
            >
              <Link href="/contact">Devis & Contact</Link>
            </Button>
          </div>

          {/* Hamburger Menu button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors border border-zinc-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`transition-all duration-300 ${isMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"}`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-zinc-900" />
              ) : (
                <Menu className="w-5 h-5 text-zinc-900" />
              )}
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isMenuOpen ? "max-h-[520px] opacity-100 pb-5" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-zinc-200 pt-4 bg-zinc-50/90 rounded-2xl p-4 mt-2 border">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-zinc-700 hover:text-primary hover:bg-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-white" : "bg-secondary"}`} />
                  </Link>
                );
              })}
              
              <div className="pt-3 flex flex-col gap-2 border-t border-zinc-200 mt-2">
                <a
                  href="tel:04010194"
                  className="flex items-center justify-center gap-2 bg-white text-zinc-900 font-bold py-3 rounded-xl border border-zinc-200 hover:border-primary transition-colors shadow-sm"
                >
                  <PhoneCall className="w-4 h-4 text-primary" />
                  <span>Commercial : 04 01 01 94</span>
                </a>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl py-3 shadow-md"
                >
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Demander une proposition
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Ligne d'accent inférieure aux couleurs exactes du logo */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-80" />
    </header>
  );
}
