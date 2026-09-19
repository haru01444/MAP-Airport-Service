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
  title: "Mawaddah Angkasa Prima — Ground Handling & Aviasi Indonesia",
  description:
    "Mawaddah Angkasa Prima — Mitra terpercaya layanan ground handling dan aviasi di Indonesia sejak 2017.",
  keywords: [
    "ground handling",
    "aviation services",
    "bandara indonesia",
    "mawaddah angkasa prima",
    "MAP",
    "ramp handling",
    "passenger services",
  ],
  openGraph: {
    title: "Mawaddah Angkasa Prima — Ground Handling & Aviasi Indonesia",
    description:
      "Mitra terpercaya layanan ground handling dan aviasi di Indonesia sejak 2017.",
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
      </head>
      <body className="font-inter">{children}</body>
    </html>
  );
}
