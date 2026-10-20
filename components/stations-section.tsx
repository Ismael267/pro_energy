import { MapPin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const stations = [
  {
    name: "Station TITA",
    address: "Ouagadougou, Burkina Faso",
    description: "Station principale au cœur de la ville, tous services 24h/24.",
  },
  {
    name: "Station Ramongo",
    address: "Ouagadougou, Burkina Faso",
    description: "Station moderne avec lavage et entretien automobile.",
  },
  {
    name: "Station Koloko",
    address: "Ouagadougou, Burkina Faso",
    description: "Café-shop et restauration rapide pour vos arrêts.",
  },
  {
    name: "Station Zonsé",
    address: "Ouagadougou, Burkina Faso",
    description: "Station partenaire, carburants de qualité et services essentiels.",
  },
  {
    name: "Station Barma",
    address: "Ouagadougou, Burkina Faso",
    description: "Emplacement stratégique, services essentiels 24/7.",
  },
]

export function StationsSection() {
  return (
    <section className="bg-background py-20 md:py-28" id="stations">
      <div className="container mx-auto px-4">
        <SectionHeading
          className="mb-14"
          eyebrow="Réseau"
          title="Nos stations"
          description="Cinq sites pour vous servir 24h/24, 7j/7."
        />

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stations.map((station) => (
            <article key={station.name} className="card-surface card-lift p-6">
              <div className="mb-4 flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{station.name}</h3>
                  <p className="text-sm text-zinc-500">{station.address}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600">{station.description}</p>
              <p className="mt-4 border-t border-zinc-100 pt-4 text-xs font-semibold tracking-wide text-primary uppercase">
                Ouvert 24h/24 — 7j/7
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
