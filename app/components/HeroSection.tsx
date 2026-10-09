"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import HeroBgSlider from "./HeroBgSlider";

const pillars = [
  { icon: "fa-shield-halved", title: "Safety First", desc: "Keselamatan sebagai prioritas utama di setiap proses" },
  { icon: "fa-users", title: "Professional Team", desc: "Ditangani oleh tim bersertifikasi dan berpengalaman" },
  { icon: "fa-globe", title: "Global Standards", desc: "Mengacu pada standar aviasi internasional" },
  { icon: "fa-handshake", title: "Trust & Integrity", desc: "Dibangun di atas kepercayaan dan integritas" },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedPillars = [...pillars, pillars[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((current) => current + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (activeIndex === pillars.length) {
      setIsTransitioning(false);
      setActiveIndex(0);
    }
  };

  return (
    <section id="hero" className="home-hero-section" style={{ position: "relative", minHeight: "115vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{
        __html: [
          "@media (max-width: 768px) {",
          "  .home-hero-section { min-height: 100vh !important; }",
          "}"
        ].join('\n')
      }} />

      {/* Background Slider */}
      <HeroBgSlider
        overlayGradient="linear-gradient(135deg, rgba(8, 24, 69, 0.75) 0%, rgba(13, 36, 97, 0.52) 50%, rgba(25, 103, 210, 0.25) 100%)"
      />

      {/* Hero Content */}
      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", alignItems: "center", padding: "120px 0 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <p
            className="hero-eyebrow-text"
            style={{
              color: "#4A9EF5",
              fontFamily: "var(--font-inter)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            READY TO CONNECT THE WORLD SAFELY
          </p>
          <h1
            className="hero-h1-text"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            Melayani <br />
            Industri Penerbangan <br />
            Indonesia
          </h1>
          <p
            className="hero-desc-text"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              maxWidth: 580,
              lineHeight: 1.75,
              marginBottom: 36,
            }}
          >
            Mawaddah Angkasa Prima merupakan mitra terpercaya layanan Ground Handling & Aviasi di Indonesia.
            Kami hadir untuk mendukung kelancaran operasional penerbangan Anda melalui layanan profesional yang
            mengedepankan keselamatan, kecepatan, dan standar internasional di setiap titik layanan.
          </p>
          <div className="hero-btn-wrap" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#services"
              style={{
                background: "linear-gradient(135deg, #1967D2, #4A9EF5)",
                color: "#fff",
                fontWeight: 600,
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: "0.95rem",
                transition: "all 0.3s",
              }}
            >
              Lihat Layanan Kami
            </a>
            <a
              href="#contact"
              style={{
                color: "#fff",
                fontWeight: 600,
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: "0.95rem",
                border: "2px solid rgba(255,255,255,0.5)",
                transition: "all 0.3s",
              }}
            >
              Hubungi Tim Kami
            </a>
          </div>
        </div>
      </div>

      {/* Pillars Strip */}
      <style dangerouslySetInnerHTML={{
        __html: [
          ".pillars-desktop {",
          "  display: grid;",
          "  grid-template-columns: repeat(4, 1fr);",
          "}",
          ".pillars-mobile {",
          "  display: none;",
          "}",
          ".slider-dots {",
          "  display: flex;",
          "  justify-content: center;",
          "  gap: 6px;",
          "  padding-bottom: 16px;",
          "}",
          ".dot {",
          "  width: 6px;",
          "  height: 6px;",
          "  border-radius: 50%;",
          "  background: rgba(255,255,255,0.2);",
          "  transition: all 0.3s ease;",
          "}",
          ".dot.active {",
          "  background: #FFFFFF;",
          "  width: 16px;",
          "  border-radius: 4px;",
          "}",
          "@media (max-width: 768px) {",
          "  .hero-eyebrow-text { font-size: 11.5px !important; margin-bottom: 12px !important; }",
          "  .hero-h1-text { font-size: 32px !important; line-height: 1.12 !important; margin-bottom: 16px !important; }",
          "  .hero-desc-text { font-size: 14.5px !important; line-height: 1.7 !important; margin-bottom: 24px !important; }",
          "  .hero-btn-wrap { flex-direction: column !important; width: 100% !important; }",
          "  .hero-btn-wrap a { width: 100% !important; text-align: center !important; font-size: 13px !important; }",
          "  .pillars-desktop { display: none !important; }",
          "  .pillars-mobile { display: block !important; }",
          "  .pillar-title-text { font-size: 13.5px !important; font-weight: 700 !important; }",
          "  .pillar-desc-text { font-size: 12px !important; }",
          "}"
        ].join('\n')
      }} />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "linear-gradient(90deg, rgba(0, 75, 175, 0.95) 0%, rgba(0, 98, 210, 0.95) 50%, rgba(0, 75, 175, 0.95) 100%)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.16)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0" }}>

          {/* DESKTOP VIEW */}
          <div className="pillars-desktop">
            {pillars.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "24px 24px",
                  borderRight: i < pillars.length - 1 ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(255, 255, 255, 0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={"fas " + p.icon} style={{ color: "#FFFFFF", fontSize: "1.1rem" }} />
                </div>
                <div>
                  <strong className="pillar-title-text" style={{ color: "#FFFFFF", display: "block", fontSize: "0.9rem", fontWeight: 600 }}>{p.title}</strong>
                  <span className="pillar-desc-text" style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.78rem" }}>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE SLIDER VIEW */}
          <div className="pillars-mobile">
            <div style={{ overflow: "hidden", position: "relative", width: "100%" }}>
              <div
                onTransitionEnd={handleTransitionEnd}
                style={{
                  display: "flex",
                  transition: isTransitioning ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
                  transform: "translateX(-" + (activeIndex * 100) + "%)"
                }}
              >
                {extendedPillars.map((p, i) => (
                  <div key={i} style={{ width: "100%", flexShrink: 0, padding: "20px 20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", textAlign: "left" }}>
                    <strong className="pillar-title-text" style={{ color: "#FFFFFF", display: "block", fontSize: "0.9rem", fontWeight: 600, marginBottom: "4px" }}>{p.title}</strong>
                    <span className="pillar-desc-text" style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.78rem" }}>{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


