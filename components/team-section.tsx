import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const team = [
  {
    name: "Kouassi Jean",
    role: "Directeur Général",
    image: "/african-businessman-smiling-professional.jpg",
  },
  {
    name: "Adjoua Marie",
    role: "Responsable Operations",
    image: "/african-businesswoman-professional.jpg",
  },
  {
    name: "Koffi Yao",
    role: "Chef Mécanicien",
    image: "/african-mechanic-uniform-professional.jpg",
  },
  {
    name: "Aya Fatou",
    role: "Responsable Boutique",
    image: "/african-woman-retail-manager.jpg",
  },
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 md:py-32 bg-[#f5ebe5]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4 text-balance">Notre Équipe</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Des professionnels dévoués à votre service pour vous garantir une expérience exceptionnelle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="border-none bg-white hover:shadow-xl transition-shadow duration-200 group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-300 ease-[var(--ease-out)]"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
