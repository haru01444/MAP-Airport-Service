import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroBgSlider from "../../components/HeroBgSlider";
import TrainingProgramsSlider from "../components/TrainingProgramsSlider";
import TrainingContactSection from "../components/TrainingContactSection";

export const metadata: Metadata = {
  title: "Program Pelatihan Aviasi Lengkap | MAP Training Center",
  description:
    "Rangkaian program diklat kejuruan aviasi terpadu MAP Training Center: Aircraft Maintenance (AMC), Ground Support Equipment (GSE), Aviation Security (AVSEC), dan Pramugari/Pramugara.",
  keywords: [
    "program pelatihan map training center",
    "diklat avsec berlisensi",
    "sekolah pramugari bogor",
    "pelatihan teknisi pesawat",
    "training gse operator bandara",
  ],
};

export default function TrainingProgramsPage() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", color: "#0F172A" }}>
      {/* ── 1. NAVBAR ── */}
      <Navbar />

      <main style={{ paddingTop: 0 }}>
        {/* ── 2. HERO BANNER ── */}
        <section
          className="programs-hero-section"
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
          <style
            dangerouslySetInnerHTML={{
              __html: [
                "@media (max-width: 768px) {",
                "  .programs-hero-section { min-height: 45vh !important; padding: 110px 0 50px !important; }",
                "  .programs-hero-h1 { font-size: 28px !important; line-height: 1.2 !important; margin-bottom: 12px !important; }",
                "  .programs-hero-desc { font-size: 13.5px !important; line-height: 1.6 !important; margin-bottom: 0 !important; }",
                "}",
              ].join("\n"),
            }}
          />

          {/* Background Slider */}
          <HeroBgSlider
            overlayGradient="linear-gradient(180deg, rgba(1, 13, 46, 0.70) 0%, rgba(13, 36, 97, 0.52) 50%, rgba(1, 13, 46, 0.75) 100%)"
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 24px",
              width: "100%",
            }}
          >
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
              KURIKULUM &amp; SPESIALISASI
            </span>
            <h1
              className="programs-hero-h1"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 22,
              }}
            >
              Program Pelatihan Aviasi
            </h1>
            <p
              className="programs-hero-desc"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                maxWidth: 780,
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              MAP Training Center menyelenggarakan 4 spesialisasi pendidikan kejuruan aviasi terpadu dengan lisensi resmi untuk mencetak SDM unggul siap kerja.
            </p>
          </div>
        </section>

        {/* ── 3. INTERACTIVE PROGRAMS SLIDER (MATCHING SERVICES PAGE PATTERN) ── */}
        <TrainingProgramsSlider />

        {/* ── 4. KONTAK & PENDAFTARAN ── */}
        <TrainingContactSection />
      </main>

      {/* ── 5. FOOTER ── */}
      <Footer />
    </div>
  );
}
