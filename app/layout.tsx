import type React from "react"
import type { Metadata, Viewport } from "next"
import { Toaster } from "sonner"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://proenergy-bf.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PRO ENERGY | Approvisionnement en Carburant & Stations-Service au Burkina Faso",
    template: "%s | PRO ENERGY",
  },
  description:
    "Votre partenaire de référence pour l'approvisionnement fiable en carburant au Burkina Faso. Solutions pour chantiers BTP avec citernes sur site, transporteurs, flottes et réseau de 6 stations-service ouvertes 24h/24 et 7j/7.",
  keywords: [
    "ProEnergy",
    "PRO ENERGY",
    "station essence Ouagadougou",
    "approvisionnement carburant Burkina Faso",
    "livraison carburant chantier BTP",
    "citerne carburant sur site",
    "carburant transporteurs Burkina",
    "flottes professionnelles Ouagadougou",
    "essence diesel Ouagadougou",
    "station service TITA",
    "station service Ramongo",
    "station service Koloko",
    "station service Zonsé",
    "station service Barma",
    "station essence Koudougou",
    "carburant site minier Burkina Faso",
    "contrat de couleur station-service",
    "lavage auto Ouagadougou",
    "vidange moteur Burkina",
  ],
  authors: [{ name: "PRO ENERGY Industries" }],
  creator: "PRO ENERGY",
  publisher: "PRO ENERGY",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "PRO ENERGY",
    title: "PRO ENERGY | Approvisionnement en Carburant & Stations-Service au Burkina Faso",
    description:
      "Du carburant à la solution complète d'approvisionnement : chantiers BTP, transporteurs, flottes professionnelles et 6 stations-service 24/7.",
    images: [
      {
        url: "/pro-energy-station-full.png",
        width: 1200,
        height: 630,
        alt: "Station-service moderne PRO ENERGY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRO ENERGY | Approvisionnement en Carburant & Réseau de Stations",
    description:
      "Solutions d'approvisionnement fiables en carburant pour entreprises, BTP et flottes au Burkina Faso. Contact direct : 04 01 01 94.",
    images: ["/pro-energy-station-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/pro-energy-logo-transparent.png",
        type: "image/png",
      },
    ],
    shortcut: "/pro-energy-logo-transparent.png",
    apple: "/pro-energy-logo-transparent.png",
  },
  alternates: {
    canonical: "/",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121311" },
  ],
}

// JSON-LD Structured Data for LocalBusiness & GasStation
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GasStation",
      "@id": `${siteUrl}/#organization`,
      name: "PRO ENERGY",
      url: siteUrl,
      logo: `${siteUrl}/pro-energy-logo-transparent.png`,
      image: `${siteUrl}/pro-energy-station-full.png`,
      description:
        "Fournisseur d'énergie et réseau de stations-service au Burkina Faso. Approvisionnement B2B pour entreprises, transporteurs et chantiers BTP.",
      telephone: "+22604010194",
      email: "proenergy.k@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Avenue de la République",
        addressLocality: "Ouagadougou",
        addressCountry: "BF",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.3714,
        longitude: -1.5197,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      priceRange: "$$",
      paymentAccepted: ["Cash", "Credit Card", "Mobile Payment"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services et Carburants PRO ENERGY",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Approvisionnement Chantiers BTP",
              description: "Installation de citerne et pompe de distribution sur site.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Approvisionnement Flottes & Transporteurs",
              description: "Fourniture continue de carburant pour poids lourds et véhicules.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vente de Carburants en Station",
              description: "Essence et Diesel haute qualité 24h/24 7j/7.",
            },
          },
        ],
      },
    },
  ],
}

import { PageLoader } from "@/components/page-loader"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <PageLoader />
        {children}
        <Toaster theme="light" position="bottom-right" richColors />
        <Analytics />
      </body>
    </html>
  )
}
