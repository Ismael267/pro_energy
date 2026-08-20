"use client"

import { Headphones, Search, FileSpreadsheet, Truck, UserCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    step: "1",
    icon: Headphones,
    title: "Écouter",
    desc: "Comprendre votre activité, vos cycles de travail et vos contraintes d'approvisionnement.",
  },
  {
    step: "2",
    icon: Search,
    title: "Analyser",
    desc: "Évaluer précisément vos volumes de consommation et votre organisation opérationnelle.",
  },
  {
    step: "3",
    icon: FileSpreadsheet,
    title: "Proposer",
    desc: "Construire une solution d'approvisionnement et une offre tarifaire sur mesure.",
  },
  {
    step: "4",
    icon: Truck,
    title: "Approvisionner",
    desc: "Organiser et sécuriser les livraisons de carburant selon les modalités convenues.",
  },
  {
    step: "5",
    icon: UserCheck,
    title: "Suivre",
    desc: "Assurer un suivi commercial régulier et optimiser la gestion de vos volumes.",
  },
]

export function MethodologySection() {
  return (
    <section className="py-20 md:py-32 bg-zinc-900 text-white relative overflow-hidden">
      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary text-sm font-semibold mb-4 border border-secondary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Processus & Rigueur
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Notre méthode en <span className="text-secondary">5 étapes</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-5" />
          <p className="text-zinc-400 text-lg leading-relaxed">
            De la première prise de contact au suivi continu, une démarche claire et structurée pour garantir votre satisfaction.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-16">
          {steps.map((st, i) => {
            const Icon = st.icon
            return (
              <div
                key={i}
                data-stagger
                style={{ "--si": i } as React.CSSProperties}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-secondary/40 transition-all duration-300 group relative hover:-translate-y-2"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-white/20 group-hover:text-secondary transition-colors">
                    0{st.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {st.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Action callout */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <p className="text-lg md:text-xl font-medium text-zinc-200 mb-6">
            Construisons ensemble la solution d'approvisionnement parfaitement ajustée à votre organisation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="btn-shine bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl px-8 shadow-xl">
              <a href="#contact">
                Prendre contact avec l'équipe
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <a
              href="tel:04010194"
              className="text-white hover:text-secondary font-bold text-lg px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-secondary transition-all"
            >
              Appelez le 04 01 01 94
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
