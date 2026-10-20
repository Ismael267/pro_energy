import { ArrowUpRight, Clock, MapPin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const stations = [
  {
    name: "Station TITA",
    description: "Station principale au cœur de la ville, tous services 24h/24.",
    services: ["Carburants", "Boutique", "Lavage", "Entretien"],
  },
  {
    name: "Station Ramongo",
    description: "Station moderne avec lavage et entretien automobile.",
    services: ["Carburants", "Lavage", "Entretien"],
  },
  {
    name: "Station Koloko",
    description: "Café-shop et restauration rapide pour vos arrêts.",
    services: ["Carburants", "Café-shop"],
  },
  {
    name: "Station Zonsé",
    description: "Station partenaire, carburants de qualité et services essentiels.",
    services: ["Carburants", "Services essentiels"],
  },
  {
    name: "Station Barma",
    description: "Emplacement stratégique, services essentiels 24/7.",
    services: ["Carburants", "Services essentiels"],
  },
]

const mapsUrl = (name: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`PRO ENERGY ${name} Ouagadougou`)}`

export function StationsSection() {
  const [main, ...others] = stations

  return (
    <section className="bg-background py-20 md:py-28" id="stations">
      <div className="container mx-auto px-4">
        <SectionHeading
          className="mb-14"
          eyebrow="Réseau"
          title="Nos stations"
          description="Cinq sites à Ouagadougou, ouverts 24h/24 et 7j/7."
        />

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article className="relative flex flex-col overflow-hidden rounded-xl bg-[#121311] p-7 text-white md:col-span-2 lg:col-span-1 lg:row-span-2">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#c5e85c] uppercase">Station principale</span>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">{main.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{main.description}</p>

            <ul className="mt-6 mb-8 flex flex-wrap gap-2">
              {main.services.map((service) => (
                <li key={service} className="rounded-md bg-white/8 px-2.5 py-1 text-xs font-medium text-zinc-200">
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-6">
              <span className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <Clock className="h-4 w-4 text-[#c5e85c]" />
                24h/24 — 7j/7
              </span>
              <a
                href={mapsUrl(main.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white"
              >
                Itinéraire
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>

          {others.map((station) => (
            <article key={station.name} className="card-surface card-lift flex flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-zinc-900">{station.name}</h3>
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{station.description}</p>
              <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                <p className="text-xs text-zinc-500">{station.services.join(" · ")}</p>
                <a
                  href={mapsUrl(station.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable inline-flex shrink-0 items-center gap-1 rounded-md py-1 text-sm font-semibold text-primary"
                  aria-label={`Itinéraire vers ${station.name}`}
                >
                  Itinéraire
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
