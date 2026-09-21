import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://map-airportservices.id"),
  title: "Mawaddah Angkasa Prima | Ground Handling & Aviasi Indonesia",
  description:
    "Mawaddah Angkasa Prima. Mitra terpercaya layanan ground handling dan aviasi di Indonesia.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "ground handling indonesia",
    "aviation services indonesia",
    "PT Mawaddah Angkasa Prima",
    "MAP Airport Services",
    "ramp handling bandara",
    "passenger handling airlines",
    "ticketing check in gate handling",
    "aircraft cabin cleaning",
    "GSE rental support",
    "aviation security outsourcing",
    "aviation training center",
    "AVSEC training",
    "Bandara Soekarno Hatta CGK",
    "Bandara Juanda Surabaya SUB",
    "Bandara Kualanamu Medan KNO",
    "Bandara Sultan Hasanuddin UPG"
  ],
  openGraph: {
    title: "Mawaddah Angkasa Prima | Ground Handling & Aviasi Indonesia",
    description:
      "Mitra terpercaya layanan ground handling dan aviasi di Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              "name": "PT Mawaddah Angkasa Prima",
              "alternateName": ["MAP", "MAP Ground Handling", "MAP Airport Services"],
              "url": "https://map-airportservices.id",
              "logo": "https://map-airportservices.id/LOGO%20MAP%20NO%20BACKGROUND.png",
              "telephone": "+6283170293216",
              "email": "contact@map-airportservices.id",
              "description": "Penyedia layanan aviasi dan ground handling terintegrasi di bandara-bandara strategis Indonesia: Ramp Handling, Passenger Services, Aircraft Cleaning, Equipment Rental, Staff Outsourcing, dan Training Center.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sentul Village, Jl. Cikeas Raya No. 123",
                "addressLocality": "Sukaraja, Kab. Bogor",
                "addressRegion": "Jawa Barat",
                "postalCode": "16711",
                "addressCountry": "ID"
              },
              "areaServed": [
                {
                  "@type": "Airport",
                  "name": "Bandara Internasional Soekarno-Hatta",
                  "iataCode": "CGK",
                  "addressLocality": "Jakarta / Tangerang"
                },
                {
                  "@type": "Airport",
                  "name": "Bandara Internasional Juanda",
                  "iataCode": "SUB",
                  "addressLocality": "Surabaya"
                },
                {
                  "@type": "Airport",
                  "name": "Bandara Internasional Kualanamu",
                  "iataCode": "KNO",
                  "addressLocality": "Deli Serdang / Medan"
                },
                {
                  "@type": "Airport",
                  "name": "Bandara Internasional Sultan Hasanuddin",
                  "iataCode": "UPG",
                  "addressLocality": "Makassar"
                }
              ],
              "serviceType": [
                "Ground Handling for Airlines",
                "Ramp Handling & Ramp Side Services",
                "Passenger & Ticketing Services",
                "Aircraft & Cabin Cleaning Services",
                "Ground Support Equipment (GSE) Rental Support",
                "Aviation Staff Outsourcing",
                "MAP Aviation Training Center"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Katalog Layanan Aviasi & Ground Handling MAP",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Ground Handling for Airlines",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ground Handling Service" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ramp Handling" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GSE Rental Support" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Passenger Handling Service (Check In counter & Gate Management)" } }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Passenger & Ticketing Services",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Passenger Transportation" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Passenger Greeting Services" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hand-held Metal Detector Security Services" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ticketing Services" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Check In and Gate Handling Services" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VIP Passenger Handling" } }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Ramp Side Service",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flight Crew Transport" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Apron Passenger Bus (APB)" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aviation Security Transport" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lavatory & Potable Water Services" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Baggage Towing Tractor (BTT)" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ground Power Service & GPU" } }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Aircraft & Cabin Cleaning Services",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Daily Interior Cabin Cleaning" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transit Flight Cleaning" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep / Weekly Cabin Cleaning" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aircraft Exterior Washing & Polishing" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lavatory Soaking" } }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Equipment Rental Support (GSE)",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GPU (Ground Power Unit) Rental" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GTC (Ground Tow Coupling) Rental" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ACU (Air Conditioning Unit) Rental" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "BTT (Baggage Towing Tractor) Rental" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aircraft Maintenance Stair Rental" } }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Outsourcing Staff",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ground Staff Outsourcing" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aviation Security (AVSEC) Staff" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GSE Operator Personnel" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Porter Service" } }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "MAP Training Center",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aviation Security (AVSEC) Training & Certification" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GSE (Ground Support Equipment) Operator Training" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aircraft Maintenance Training" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pramugari & Pramugara Flight Attendant Training" } }
                    ]
                  }
                ]
              },
              "sameAs": [
                "https://mawaddahangkasaprima.id",
                "https://map-airportservices.id"
              ]
            }),
          }}
        />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  );
}

