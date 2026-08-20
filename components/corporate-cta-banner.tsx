import Link from "next/link"
import { PhoneCall, ArrowRight, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CorporateCtaBanner() {
  return (
    <section className="py-14 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto rounded-3xl p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Text Left */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Espace Entreprises & Professionnels
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 leading-snug">
              Vous recherchez un approvisionnement continu pour votre activité ?
            </h2>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
              Étudions ensemble vos volumes réguliers, vos installations sur chantier ou les besoins de vos flottes professionnelles.
            </p>
          </div>

          {/* Actions Right */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto flex-shrink-0">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-zinc-950 font-black rounded-xl px-7 py-6 shadow-xl btn-shine text-sm md:text-base">
              <Link href="/contact" className="flex items-center justify-center gap-2">
                <span>Demander une étude tarifaire</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <a
              href="tel:04010194"
              className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/15 transition-all text-sm"
            >
              <PhoneCall className="w-4 h-4 text-secondary" />
              <span>Commercial : <strong className="text-secondary">04 01 01 94</strong></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
