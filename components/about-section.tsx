import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="apropos" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-zinc-100 shadow-xl group">
            <Image src="/pro-energy-station-full.png" alt="Station PRO energy" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 ease-[var(--ease-out)]">
                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Présentation ProEnergy
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">
              Une marque burkinabè engagée
            </h2>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              <span className="font-bold text-primary">ProEnergy</span> est une marque burkinabè engagée dans la distribution de carburant et les services énergétiques.
              Née de la volonté de proposer une alternative moderne, fiable et accessible aux usagers de
              la route, aux transporteurs, aux entreprises et aux communautés locales.
            </p>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              Aujourd'hui, elle s'appuie sur un réseau de cinq stations-service, 
              <span className="font-bold text-primary"> (TITA, Ramongo, Koloko, Barma et Zonsé)</span> qui s'approvisionnent exclusivement
              auprès de la marque.
            </p>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              Chaque jour, nos équipes s'engagent à offrir un accueil chaleureux, une gestion rigoureuse des
              installations et un environnement respectant les standards de sécurité.
            </p>
            {/* <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              En savoir plus
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
