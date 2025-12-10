import { MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export function StationsSection() {
  const stations = [
    {
      name: "Station TITA",
      type: "Propriété",
      address: "Ouagadougou, Burkina Faso",
      description: "Station principale située au cœur de la ville, offrant tous nos services 24h/24.",
    },
    {
      name: "Station Ramongo",
      type: "Propriété",
      address: "Ouagadougou, Burkina Faso",
      description: "Station moderne avec services complets de lavage et entretien automobile.",
    },
    {
      name: "Station Koloko",
      type: "Propriété",
      address: "Ouagadougou, Burkina Faso",
      description: "Station équipée avec café-shop et restauration rapide pour votre confort.",
    },
    {
      name: "Station Zonsé",
      type: "Partenaire",
      address: "Ouagadougou, Burkina Faso",
      description: "Station partenaire offrant carburants de qualité et services de base.",
    },
    {
      name: "Station Barma",
      type: "Partenaire",
      address: "Ouagadougou, Burkina Faso",
      description: "Station partenaire avec emplacement stratégique et services essentiels.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20" id="stations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Nos Stations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Retrouvez-nous dans nos 5 stations réparties à Ouagadougou pour vous servir 24h/24, 7j/7
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stations.map((station, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-2"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{station.name}</h3>
                  {/* <span
                    className={`text-xs px-3 py-1 rounded-full inline-block ${
                      station.type === "Propriété"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {station.type}
                  </span> */}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{station.address}</p>
              <p className="text-sm leading-relaxed">{station.description}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs font-semibold text-primary">Ouvert 24h/24 - 7j/7</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
