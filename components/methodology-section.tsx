"use client"

import { Headphones, Search, FileSpreadsheet, Truck, UserCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    step: "1",
    icon: Headphones,
    title: "Écouter",
    desc: "Comprendre votre activité et vos contraintes.",
  },
  {
    step: "2",
    icon: Search,
    title: "Analyser",
    desc: "Évaluer vos volumes et votre organisation.",
  },
  {
    step: "3",
    icon: FileSpreadsheet,
    title: "Proposer",
    desc: "Construire une solution adaptée.",
  },
  {
    step: "4",
    icon: Truck,
    title: "Approvisionner",
    desc: "Organiser les livraisons selon les modalités convenues.",
  },
  {
    step: "5",
    icon: UserCheck,
    title: "Suivre",
    desc: "Assurer le suivi commercial de la relation.",
  },
]

export function MethodologySection() {
  return (
    <section id="methode" className="py-20 md:py-32 bg-zinc-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary text-sm font-semibold mb-4 border border-secondary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Méthode ProEnergy
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Notre méthode en <span className="text-secondary">5 étapes</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Une démarche rigoureuse et structurée pour garantir la fiabilité de vos approvisionnements.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto mb-12">
          {steps.map((st, i) => {
            const Icon = st.icon
            return (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-secondary/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-white/20 group-hover:text-secondary transition-colors">
                    0{st.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-secondary transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Action callout */}
        <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-sm md:text-base font-medium text-zinc-200 mb-4">
            Parlons de votre consommation et construisons ensemble votre solution d'approvisionnement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="default" className="bg-secondary hover:bg-secondary/90 text-zinc-900 font-bold rounded-xl px-6 shadow">
              <Link href="/contact">
                Contacter un conseiller
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
            <a
              href="tel:04010194"
              className="text-white hover:text-secondary font-bold text-sm px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-secondary transition-all"
            >
              Appel direct : 04 01 01 94
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
