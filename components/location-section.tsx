import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export function LocationSection() {
  return (
    <section id="localisation" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Où Nous Trouver</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Idéalement située et facilement accessible. Venez nous rendre visite !
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-1">Adresse</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        123 Avenue de la République
                        <br />
                        75012 Paris, France
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-1">Horaires</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ouvert 24h/24, 7j/7
                        <br />
                        Service continu toute l'année
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-1">Téléphone</h3>
                      <p className="text-muted-foreground leading-relaxed">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground leading-relaxed">contact@station-premium.fr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <img
                src="/map-location-marker-on-street-map.jpg"
                alt="Carte de localisation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
