import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import MilestoneSection from "../components/MilestoneSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

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
      <main style={{ paddingTop: 80 }}>
        {/* Top Page Header Banner */}
        <section
          style={{
            background: "linear-gradient(180deg, #010D2E 0%, #061540 100%)",
            padding: "80px 0 60px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#4A9EF5",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2 }} />
              TENTANG KAMI
            </span>
            <h1
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Mawaddah Angkasa Prima
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                maxWidth: 640,
                margin: "0 auto",
                lineHeight: 1.7,
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

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
