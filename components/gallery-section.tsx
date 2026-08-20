"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const galleryImages = [
  { src: "/pro-energy-station-full.png", alt: "Vue extérieure station PRO energy", category: "Station" },
  { src: "/pro-energy-cafe-shop.png", alt: "Cafe Shop PRO energy", category: "Boutique" },
  { src: "/pro-energy-price-sign.png", alt: "Panneau de prix", category: "Tarifs" },
  { src: "/pro-energy-3d-mockup.png", alt: "Maquette 3D de la station", category: "Design" },
  { src: "/station-service-moderne-pompes.jpg", alt: "Pompes à essence", category: "Station" },
  { src: "/lavage-auto-professionnel.jpg", alt: "Service lavage auto", category: "Services" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const prev = () =>
    setSelectedImage((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null))
  const next = () =>
    setSelectedImage((i) => (i !== null ? (i + 1) % galleryImages.length : null))

  return (
    <section id="gallery" className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5 border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Nos installations
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            Notre <span className="gradient-text">Galerie</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-5" />
          <p className="text-lg text-zinc-500 leading-relaxed">
            Découvrez nos installations modernes et nos services de qualité en images.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-stagger
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-zinc-100"
              style={{
                aspectRatio: index === 0 || index === 3 ? "4/3" : "1/1",
                "--si": index,
              } as React.CSSProperties}
              onClick={() => setSelectedImage(index)}
            >

              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Category badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur text-zinc-800">
                  {image.category}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end">
                <div className="p-4 flex items-end justify-between">
                  <p className="text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </p>
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-colors z-10"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-colors z-10"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              width={1400}
              height={900}
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white/70 text-sm">{galleryImages[selectedImage].alt}</p>
            <p className="text-white/40 text-xs mt-1">
              {selectedImage + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
