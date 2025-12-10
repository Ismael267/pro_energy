import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary via-[#c93528] to-[#d94636]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">S'inscrire à notre newsletter</h2>
          <p className="text-white/90 mb-8 text-lg">Restez informé de nos dernières offres et actualités</p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <Input type="email" placeholder="Votre Email..." className="pl-12 h-14 bg-white border-none text-lg" />
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 font-semibold">
              Envoyer
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
