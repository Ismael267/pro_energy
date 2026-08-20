"use client"

import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Kouassi Jean",
    role: "Directeur Général",
    image: "/african-businessman-smiling-professional.jpg",
    linkedin: "#",
  },
  {
    name: "Adjoua Marie",
    role: "Responsable Operations",
    image: "/african-businesswoman-professional.jpg",
    linkedin: "#",
  },
  {
    name: "Koffi Yao",
    role: "Chef Mécanicien",
    image: "/african-mechanic-uniform-professional.jpg",
    linkedin: "#",
  },
  {
    name: "Aya Fatou",
    role: "Responsable Boutique",
    image: "/african-woman-retail-manager.jpg",
    linkedin: "#",
  },
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 md:py-36 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fdf6f0 0%, #fff8f5 50%, #f0f9f0 100%)" }}>
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-primary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-5 border border-secondary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Les visages de ProEnergy
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            Notre <span className="gradient-text">Équipe</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-5" />
          <p className="text-lg text-zinc-500 leading-relaxed">
            Des professionnels dévoués à votre service pour vous garantir une expérience exceptionnelle.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              data-stagger
              style={{ "--si": index } as React.CSSProperties}
              className="card-3d group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-secondary/20 hover:shadow-2xl transition-all duration-400"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-zinc-100">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-108"
                />
                {/* Photo overlay with social */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-5 gap-3">
                  <a
                    href={member.linkedin}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-200"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-secondary transition-all duration-200"
                    aria-label={`Contacter ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 text-center relative">
                {/* Accent top bar */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                <h3 className="text-lg font-bold text-zinc-900 mb-1 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-secondary">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
