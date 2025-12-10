import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  {
    image: "/pro-energy-cafe-shop.png",
    title: "Restauration et boutique",
    description: "Découvrez nos magasins et une gamme de produits essentiels du quotidien.",
  },
  {
    image: "/quartz-motor-oil-campaign-with-gold-bottle.jpg",
    title: "Carburants de qualité",
    description: "Des carburants performants pour tous types de véhicules.",
  },
  {
    image: "/excellium-premium-fuel-campaign.jpg",
    title: "Services premium",
    description: "Découvrez tout ce qu'il faut savoir sur nos services Excellium.",
  },
  {
    image: "/car-wash-service-with-foam-and-brush.jpg",
    title: "Nos conseils et astuces",
    description: "Découvrez tous nos conseils et astuces pour bien entretenir votre véhicule.",
  },
  {
    image: "/mobile-app-with-gas-station-locator.jpg",
    title: "Application mobile",
    description: "Trouvez la station PRO energy la plus proche directement sur votre téléphone.",
  },
  {
    image: "/young-entrepreneurs-startup-challenge.jpg",
    title: "Programme Startupper",
    description: "Vous êtes un jeune entrepreneur ? Vous avez un projet qui vous tient à cœur ?",
  },
]

export function ProductsSection() {
  return (
    <section id="produits" className="py-20 md:py-32 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="border-none bg-white hover:shadow-2xl transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">{product.title}</h3>
                <p className="text-zinc-600 leading-relaxed mb-4">{product.description}</p>
                <Button variant="link" className="text-primary font-semibold p-0 h-auto hover:underline">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
