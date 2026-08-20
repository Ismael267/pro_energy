import { MapPin, Clock, CheckCircle2 } from "lucide-react"

const stations = [
  {
    name: "Station TITA",
    type: "Propriété",
    address: "Ouagadougou, Burkina Faso",
    description: "Station principale située au cœur de la ville, offrant tous nos services 24h/24.",
    services: ["Carburant", "Lavage", "Boutique"],
  },
  {
    name: "Station Ramongo",
    type: "Propriété",
    address: "Ouagadougou, Burkina Faso",
    description: "Station moderne avec services complets de lavage et entretien automobile.",
    services: ["Carburant", "Lavage", "Mécanique"],
  },
  {
    name: "Station Koloko",
    type: "Propriété",
    address: "Ouagadougou, Burkina Faso",
    description: "Station équipée avec café-shop et restauration rapide pour votre confort.",
    services: ["Carburant", "Café-Shop", "Boutique"],
  },
  {
    name: "Station Zonsé",
    type: "Partenaire",
    address: "Ouagadougou, Burkina Faso",
    description: "Station partenaire offrant carburants de qualité et services de base.",
    services: ["Carburant", "Services de base"],
  },
  {
    name: "Station Barma",
    type: "Partenaire",
    address: "Ouagadougou, Burkina Faso",
    description: "Station partenaire avec emplacement stratégique et services essentiels.",
    services: ["Carburant", "Services de base"],
  },
]

export function StationsSection() {
  return (
    <section id="stations" className="py-24 md:py-36 bg-gradient-to-b from-zinc-900 to-zinc-800 relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-5 border border-secondary/30">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Notre réseau
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Nos <span className="text-secondary">Stations</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-5" />
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Retrouvez-nous dans nos 5 stations réparties à Ouagadougou pour vous servir 24h/24, 7j/7.
          </p>
        </div>

        {/* Stations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stations.map((station, index) => (
            <div
              key={index}
              data-stagger
              style={{ "--si": index } as React.CSSProperties}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-secondary/30 transition-all duration-400 hover:shadow-2xl hover:shadow-secondary/10 cursor-default overflow-hidden"
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                station.type === "Propriété"
                  ? "bg-gradient-to-r from-primary to-secondary"
                  : "bg-gradient-to-r from-secondary/60 to-secondary"
              } scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl flex-shrink-0 ${
                  station.type === "Propriété" ? "bg-primary/20" : "bg-secondary/20"
                }`}>
                  <MapPin className={`w-5 h-5 ${station.type === "Propriété" ? "text-primary" : "text-secondary"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white mb-1 truncate">{station.name}</h3>
                  <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    station.type === "Propriété"
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary/20 text-secondary"
                  }`}>
                    <span className="w-1 h-1 rounded-full bg-current" />
                    {station.type}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-zinc-400 text-sm mb-3">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{station.address}</span>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-4">{station.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {station.services.map((s, si) => (
                  <span key={si} className="inline-flex items-center gap-1 text-xs bg-white/8 border border-white/10 text-zinc-300 px-2.5 py-1 rounded-lg">
                    <CheckCircle2 className="w-3 h-3 text-secondary" />
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 pt-3 border-t border-white/8">
                <Clock className="w-3.5 h-3.5 text-secondary" />
                <p className="text-xs font-semibold text-secondary">Ouvert 24h/24 · 7j/7</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
