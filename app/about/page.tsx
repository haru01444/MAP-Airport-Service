import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import AboutClientsTable from "../components/AboutClientsTable";
import MilestoneSection from "../components/MilestoneSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroBgSlider from "../components/HeroBgSlider";

export const metadata: Metadata = {
  title: "Tentang Kami | Mawaddah Angkasa Prima",
  description:
    "Profil lengkap PT Mawaddah Angkasa Prima (MAP), penyedia layanan aviasi dan ground handling terintegrasi di Indonesia, serta jejak perjalanan pengembangan perusahaan.",
  keywords: [
    "tentang mawaddah angkasa prima",
    "profil perusahaan ground handling",
    "sejarah MAP airport services",
    "visi misi aviasi indonesia",
    "milestone MAP",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        {/* Top Page Header Banner with Background Slider */}
        <section
          className="about-hero-section"
          style={{
            position: "relative",
            minHeight: "52vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
            overflow: "hidden",
            padding: "130px 0 60px",
          }}
        >
          <style dangerouslySetInnerHTML={{
            __html: [
              "@media (max-width: 768px) {",
              "  .about-hero-section { min-height: 45vh !important; padding: 110px 0 50px !important; }",
              "  .about-hero-h1 { font-size: 28px !important; line-height: 1.2 !important; margin-bottom: 12px !important; }",
              "  .about-hero-desc { font-size: 13.5px !important; line-height: 1.6 !important; margin-bottom: 0 !important; }",
              "}"
            ].join('\n')
          }} />

          {/* Background Slider */}
          <HeroBgSlider
            overlayGradient="linear-gradient(180deg, rgba(1, 13, 46, 0.70) 0%, rgba(13, 36, 97, 0.52) 50%, rgba(1, 13, 46, 0.75) 100%)"
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
            <span
              style={{
                display: "inline-block",
                color: "#4A9EF5",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              TENTANG KAMI
            </span>
            <h1
              className="about-hero-h1"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 22,
              }}
            >
              Mawaddah Angkasa Prima
            </h1>
            <p
              className="about-hero-desc"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                maxWidth: 720,
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Mitra strategis tepercaya dalam penyediaan layanan operasional aviasi, ground handling terintegrasi, dan pengembangan SDM penerbangan di Indonesia.
            </p>
          </div>
        </section>

        {/* Detailed Company Section */}
        <div id="about-company">
          <AboutSection />
        </div>

        {/* Journey / Milestone Section */}
        <div id="milestone">
          <MilestoneSection />
        </div>

        {/* Client Contracts & Services Table */}
        <div id="clients-portfolio">
          <AboutClientsTable />
        </div>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
