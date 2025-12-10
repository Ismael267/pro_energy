import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingDown } from "lucide-react"

const prices = [
  {
    fuel: "Sans-Plomb 95 (SP95)",
    price: "1.85",
    badge: "Populaire",
  },
  {
    fuel: "Sans-Plomb 98 (SP98)",
    price: "1.95",
    badge: "Premium",
  },
  {
    fuel: "Gazole (Diesel)",
    price: "1.72",
    badge: "Économique",
  },
  {
    fuel: "GPL",
    price: "0.95",
    badge: null,
  },
]

export function PricingSection() {
  return (
    <section id="prix" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-accent/10 text-accent text-sm font-medium">
            <TrendingDown className="w-4 h-4" />
            <span>Prix compétitifs mis à jour quotidiennement</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Tarifs du Jour</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Des prix transparents et compétitifs pour tous nos carburants. Qualité garantie sans compromis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {prices.map((item, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow relative">
              {item.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {item.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-lg font-semibold text-card-foreground">{item.fuel}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-2">
                  <span className="text-5xl font-bold text-primary">{item.price}</span>
                  <span className="text-2xl text-muted-foreground">€</span>
                </div>
                <p className="text-sm text-muted-foreground">par litre</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * Prix indicatifs au{" "}
            {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}. Susceptibles
            de varier selon les conditions du marché.
          </p>
        </div>
      </div>
    </section>
  )
}
