"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a] border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-sm text-white/70 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+226 27 217 588 40</span>
          </div>
          <span>|</span>
          <span>ProEnergy.k@gmail.com</span>
        </div>

        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <Image
              src="/pro-energy-logo-transparent.png"
              alt="PRO energy"
              width={260}
              height={120}
              className="h-20 w-auto"
              priority
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#accueil"
              className="text-sm font-medium text-white hover:text-secondary transition-colors"
            >
              Accueil
            </a>
            <a
              href="#apropos"
              className="text-sm font-medium text-white hover:text-secondary transition-colors"
            >
              À Propos
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-white hover:text-secondary transition-colors"
            >
              Nos Services
            </a>
            <a
              href="#stations"
              className="text-sm font-medium text-white hover:text-secondary transition-colors"
            >
              Nos stations
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-white hover:text-secondary transition-colors"
            >
              
              Galerie{" "}
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-white hover:text-secondary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Nous contacter
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a
                href="#accueil"
                className="text-sm font-medium text-white hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a
                href="#apropos"
                className="text-sm font-medium text-white hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-white hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos Services
              </a>
              <a
                href="#prix"
                className="text-sm font-medium text-white hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos Prix
              </a>
              <a
                href="#localisation"
                className="text-sm font-medium text-white hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Localisation
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-white hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                Nous contacter
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
