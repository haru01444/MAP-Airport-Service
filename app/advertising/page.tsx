"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdvertisingContactForm from "./AdvertisingContactForm";

const valuePillars = [
  {
    icon: "fa-users",
    title: "High Passenger Traffic",
    desc: "Volume penumpang tinggi setiap hari dari berbagai maskapai domestik dan internasional.",
  },
  {
    icon: "fa-shield-halved",
    title: "Safe & Comfortable Journey",
    desc: "Armada shuttle modern, terawat, dan ber-AC dengan standar keselamatan aviasi prima.",
  },
  {
    icon: "fa-location-dot",
    title: "Strategic Airport Routes",
    desc: "Melayani rute-rute strategis di sisi udara (airside), remote apron, hingga antar terminal.",
  },
  {
    icon: "fa-eye",
    title: "High Visibility Media",
    desc: "Media bergerak eksklusif di area steril bandara dengan tingkat perhatian 100% tanpa distraksi.",
  },
];

const fleetList = [
  {
    code: "DPS",
    airport: "I Gusti Ngurah Rai International Airport",
    city: "Bali",
    units: "6 Buses",
    badgeColor: "#1967D2",
    desc: "Melayani ribuan wisatawan domestik dan mancanegara setiap hari di gerbang pariwisata utama Indonesia.",
    imgSrc: "/fleet-bali-dps.jpg",
    fileName: "fleet-bali-dps.jpg",
    placeholderTitle: "Armada Shuttle Bali (DPS)",
  },
  {
    code: "CGK",
    airport: "Soekarno-Hatta International Airport",
    city: "Jakarta",
    units: "2 Buses",
    badgeColor: "#0D2461",
    desc: "Menjangkau jutaan penumpang bisnis, eksekutif, dan pelancong reguler di bandara tersibuk di Indonesia.",
    imgSrc: "/fleet-jakarta-cgk.jpg",
    fileName: "fleet-jakarta-cgk.jpg",
    placeholderTitle: "Armada Shuttle Jakarta (CGK)",
  },
];

const adOptions = [
  {
    id: "hand-strap",
    title: "HAND STRAP / HANDGRIP",
    desc: "Branding pada gantungan tangan di dalam bus.",
    highlight: "Eye-Level & Direct Touch",
    imgSrc: "/option-hand-strap.jpeg",
    fileName: "option-hand-strap.jpeg",
  },
  {
    id: "window-sticker",
    title: "WINDOW STICKER",
    desc: "Branding pada kaca bagian dalam dan luar bus.",
    highlight: "Dual-Side Visibility",
    imgSrc: "/option-window-sticker.jpg",
    fileName: "option-window-sticker.jpg",
  },
  {
    id: "interior-branding",
    title: "INTERIOR BRANDING",
    desc: "Branding di dalam kabin bus (ceiling, seat, panel, dll).",
    highlight: "Full Cabin Immersion",
    imgSrc: "/option-interior-branding.jpg",
    fileName: "option-interior-branding.jpg",
  },
  {
    id: "full-bus",
    title: "FULL BUS BRANDING",
    desc: "Branding eksterior seluruh unit bus.",
    highlight: "360° Giant Billboard",
    imgSrc: "/option-full-bus.jpg",
    fileName: "option-full-bus.jpg",
  },
  {
    id: "campaign-takeover",
    title: "CAMPAIGN TAKEOVER",
    desc: "Custom campaign sesuai kebutuhan brand.",
    highlight: "Exclusive Dominance",
    imgSrc: "/option-campaign-takeover.jpg",
    fileName: "option-campaign-takeover.jpg",
  },
];

const industryCategories = [
  { icon: "fa-mug-hot", name: "F&B & Coffee" },
  { icon: "fa-spray-can-sparkles", name: "Beauty & Personal Care" },
  { icon: "fa-wifi", name: "Telco & Technology" },
  { icon: "fa-building-columns", name: "Banking & Fintech" },
  { icon: "fa-bag-shopping", name: "Retail & Lifestyle" },
  { icon: "fa-plane-departure", name: "Travel & Hospitality" },
  { icon: "fa-graduation-cap", name: "Education" },
  { icon: "fa-car", name: "Automotive" },
];

function ImageSlot({
  src,
  alt,
  fileName,
  height = 200,
  borderRadius = "8px",
}: {
  src: string;
  alt: string;
  fileName: string;
  height?: number;
  borderRadius?: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="img-placeholder"
        style={{
          height,
          borderRadius,
          border: "1px dashed rgba(255,255,255,0.25)",
        }}
      >
        <i className="fas fa-image" style={{ fontSize: "2rem", color: "#4A9EF5", marginBottom: 8 }} />
        <strong style={{ color: "#fff", fontSize: "0.85rem", display: "block", marginBottom: 4 }}>{alt}</strong>
        <code
          style={{
            fontSize: "0.75rem",
            color: "#F5A623",
            background: "rgba(0,0,0,0.4)",
            padding: "3px 8px",
            borderRadius: 4,
          }}
        >
          public/{fileName}
        </code>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        borderRadius,
        overflow: "hidden",
        background: "#0F2042",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

export default function AdvertisingPage() {
  return (
    <>
      {/* ── REUSABLE NAVBAR COMPONENT ── */}
      <Navbar />

      {/* ── STYLES ── */}
      <style dangerouslySetInnerHTML={{
        __html: [
          ".ad-hero { padding: 140px 0 80px; background: linear-gradient(180deg, #010D2E 0%, #061540 100%); color: #fff; }",
          ".ad-section-padding { padding: 90px 0; scroll-margin-top: 80px; }",
          ".ad-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }",
          ".ad-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }",
          ".ad-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }",
          ".ad-grid-8 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }",
          ".ad-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 12px; padding: 28px; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(0,0,0,0.03); }",
          ".ad-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.08); border-color: #CBD5E1; }",
          ".img-placeholder { width: 100%; height: 220px; background: linear-gradient(135deg, #0F2042 0%, #193B7B 100%); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: rgba(255,255,255,0.7); font-size: 0.88rem; text-align: center; padding: 20px; border: 1px dashed rgba(255,255,255,0.25); }",
          ".rate-table { width: 100%; border-collapse: collapse; margin-top: 16px; background: #fff; border-radius: 10px; overflow: hidden; border: 1px solid #E2E8F0; }",
          ".rate-table th { background: #001F5B; color: #fff; text-align: left; padding: 14px 18px; font-size: 0.88rem; font-weight: 600; }",
          ".rate-table td { padding: 14px 18px; border-bottom: 1px solid #F1F5F9; color: #334155; font-size: 0.9rem; }",
          ".rate-table tr:last-child td { border-bottom: none; }",
          ".rate-table tr:hover td { background: #F8FAFC; }",
          "@media (max-width: 768px) {",
          "  .ad-hero { padding: 110px 0 60px !important; }",
          "  .ad-grid-2 { grid-template-columns: 1fr !important; gap: 24px !important; }",
          "  .ad-grid-4 { grid-template-columns: 1fr !important; gap: 16px !important; }",
          "  .ad-grid-3 { grid-template-columns: 1fr !important; gap: 16px !important; }",
          "  .ad-grid-8 { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }",
          "  .ad-options-grid { grid-template-columns: 1fr !important; }",
          "  .rate-table th, .rate-table td { padding: 10px 12px !important; font-size: 0.8rem !important; }",
          "}"
        ].join('\n')
      }} />

      {/* ── 1. HERO / COVER ── */}
      <section
        style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding: "160px 0 100px",
        }}
      >
        {/* Background Photo from public folder & Dark Aviation Gradient Overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/advertising-hero-bg.jpg"
            alt="Airport Shuttle Background"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(1,13,46,0.92) 0%, rgba(6,21,64,0.82) 50%, rgba(25,103,210,0.45) 100%)",
            }}
          />
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ maxWidth: 720 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#4A9EF5",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <span style={{ width: 16, height: 2, background: "#F5A623", borderRadius: 2 }} />
              AIRPORT ADVERTISING • MEDIA KIT & RATE CARD
            </span>
            <h1
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 24,
                color: "#fff",
              }}
            >
              Your Brand.<br />
              <span style={{ color: "#4A9EF5" }}>Our Airport Network.</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                lineHeight: 1.75,
                marginBottom: 36,
                maxWidth: 620,
              }}
            >
              Reach thousands of passengers at Bali and Jakarta airports with exclusive, high-visibility airport shuttle bus advertising solutions.
            </p>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="#rates"
                style={{
                  background: "linear-gradient(135deg, #1967D2, #4A9EF5)",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "14px 32px",
                  borderRadius: 6,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  display: "inline-block",
                }}
              >
                Lihat Paket & Tarif
              </a>
              <a
                href="#contact-section"
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  padding: "14px 32px",
                  borderRadius: 6,
                  fontSize: "0.95rem",
                  border: "1px solid rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  display: "inline-block",
                }}
              >
                Hubungi Tim Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT OUR AIRPORT SHUTTLE (Slide 2) ── */}
      <section id="about-shuttle" className="ad-section-padding" style={{ background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            <span style={{ color: "#1967D2", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              ABOUT OUR AIRPORT SHUTTLE
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", marginTop: 8, marginBottom: 16 }}>
              Comfortable. Safe. Connected.
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              MAP Airport Services operates airport shuttle buses that serve passengers at I Gusti Ngurah Rai International Airport (Bali) and Soekarno-Hatta International Airport (CGK), providing convenient transportation within the airport area.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="ad-grid-4" style={{ marginBottom: 40 }}>
            {valuePillars.map((p, idx) => (
              <div key={idx} className="ad-card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 8,
                    background: "rgba(25,103,210,0.1)",
                    color: "#1967D2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontSize: "1.3rem",
                  }}
                >
                  <i className={"fas " + p.icon} />
                </div>
                <h3 style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.05rem", marginBottom: 8 }}>
                  {p.title}
                </h3>
                <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quote Callout Banner */}
          <div
            style={{
              background: "linear-gradient(135deg, #001F5B 0%, #1967D2 100%)",
              borderRadius: 12,
              padding: "24px 32px",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <i className="fas fa-quote-left" style={{ fontSize: "2rem", color: "#F5A623" }} />
              <div>
                <p style={{ fontSize: "1.15rem", fontWeight: 600, fontStyle: "italic", margin: 0 }}>
                  “More than just a shuttle, it’s a moving billboard.”
                </p>
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)" }}>
                  Maksimalkan impresi brand Anda di setiap sudut bandara tersibuk Indonesia.
                </span>
              </div>
            </div>
            <a
              href="#rates"
              style={{
                background: "#F5A623",
                color: "#001F5B",
                fontWeight: 700,
                fontSize: "0.88rem",
                padding: "10px 22px",
                borderRadius: 6,
                textDecoration: "none",
              }}
            >
              Cek Pilihan Media
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. OUR FLEET (Slide 3) ── */}
      <section id="fleet" className="ad-section-padding" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            <span style={{ color: "#1967D2", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              OUR FLEET
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", marginTop: 8, marginBottom: 12 }}>
              8 Units Active Shuttle Buses
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
              6 Units — I Gusti Ngurah Rai (DPS) &nbsp;|&nbsp; 2 Units — Soekarno Hatta (CGK)
            </p>
          </div>

          <div className="ad-grid-2">
            {fleetList.map((f) => (
              <div key={f.code} className="ad-card" style={{ padding: 0, overflow: "hidden" }}>
                <ImageSlot
                  src={f.imgSrc}
                  alt={f.placeholderTitle}
                  fileName={f.fileName}
                  height={340}
                  borderRadius="12px 12px 0 0"
                />
                <div style={{ padding: "24px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{ background: f.badgeColor, color: "#fff", fontWeight: 700, fontSize: "0.8rem", padding: "4px 12px", borderRadius: 4 }}>
                      {f.units}
                    </span>
                    <span style={{ color: "#64748B", fontSize: "0.85rem", fontWeight: 600 }}>Kode: {f.code}</span>
                  </div>
                  <h3 style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.15rem", marginBottom: 8 }}>
                    {f.airport}
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ADVERTISING OPTIONS (Slide 4) ── */}
      <section id="media-options" className="ad-section-padding" style={{ background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            <span style={{ color: "#1967D2", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              ADVERTISING OPTIONS
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", marginTop: 8, marginBottom: 12 }}>
              Multiple Touchpoints. Maximum Impact.
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
              Pilihan penempatan media yang fleksibel dan terintegrasi di seluruh bagian armada bus.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }} className="ad-options-grid">
            {adOptions.map((opt, i) => (
              <div key={opt.id} className="ad-card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <ImageSlot
                  src={opt.imgSrc}
                  alt={opt.title}
                  fileName={opt.fileName}
                  height={180}
                  borderRadius="12px 12px 0 0"
                />
                <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ color: "#1967D2", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>
                      0{i + 1} • {opt.highlight}
                    </span>
                    <h3 style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.05rem", marginBottom: 8 }}>
                      {opt.title}
                    </h3>
                    <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                      {opt.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. THE MEDIA SPOTLIGHT: HAND STRAP (Slide 5) ── */}
      <section className="ad-section-padding" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="ad-grid-2">
            <div>
              <span style={{ color: "#1967D2", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                THE MEDIA
              </span>
              <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.3rem)", fontWeight: 800, color: "#0F172A", marginTop: 8, marginBottom: 16 }}>
                Reach Your Audience,<br />Right Where They Travel.
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 28 }}>
                Media eksklusif <strong>Hand Strap / Handgrip</strong> memposisikan brand Anda tepat di hadapan mata penumpang secara intim dengan tingkat interaksi fisik langsung.
              </p>

              {/* Key Features List */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "fa-eye", title: "High visibility & eye level", desc: "Berada tepat di garis pandang mata penumpang saat berdiri di bus." },
                  { icon: "fa-hand", title: "Direct passenger interaction", desc: "Dipegang dan dilihat langsung selama durasi perjalanan apron." },
                  { icon: "fa-circle-check", title: "Non-intrusive & functional", desc: "Menyatu secara natural dan elegan dengan fasilitas transportasi bandara." },
                  { icon: "fa-palette", title: "Custom branding & design", desc: "Desain dua sisi (double-sided) yang dapat disesuaikan dengan identitas brand." },
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 6,
                        background: "rgba(25,103,210,0.1)",
                        color: "#1967D2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.95rem",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <i className={"fas " + feat.icon} />
                    </div>
                    <div>
                      <strong style={{ color: "#0F172A", fontSize: "0.95rem", display: "block" }}>{feat.title}</strong>
                      <span style={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.5 }}>{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Before / After Handgrip Showcase */}
            <div className="ad-card" style={{ background: "#F8FAFC", padding: "32px", textAlign: "center" }}>
              <h3 style={{ color: "#0F172A", fontSize: "1.1rem", fontWeight: 700, marginBottom: 20 }}>
                Visual Mockup Showcase
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div style={{ background: "#fff", padding: "16px", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                  <ImageSlot
                    src="/handgrip-before.jpg"
                    alt="Standard Handgrip"
                    fileName="handgrip-before.jpg"
                    height={160}
                    borderRadius="6px"
                  />
                  <span style={{ display: "block", marginTop: 8, fontWeight: 700, fontSize: "0.8rem", color: "#64748B" }}>
                    BEFORE (Standard)
                  </span>
                </div>

                <div style={{ background: "#fff", padding: "16px", borderRadius: 8, border: "2px solid #1967D2" }}>
                  <ImageSlot
                    src="/handgrip-after.jpg"
                    alt="Branded Handgrip"
                    fileName="handgrip-after.jpg"
                    height={160}
                    borderRadius="6px"
                  />
                  <span style={{ display: "block", marginTop: 8, fontWeight: 700, fontSize: "0.8rem", color: "#1967D2" }}>
                    AFTER (Branded)
                  </span>
                </div>
              </div>

              <p style={{ color: "#64748B", fontSize: "0.82rem", margin: 0 }}>
                Materi iklan dicetak presisi dengan material tahan lama berkualitas tinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. RATES & PACKAGES (Slide 6) ── */}
      <section id="rates" className="ad-section-padding" style={{ background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            <span style={{ color: "#1967D2", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              RATES & PACKAGES
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", marginTop: 8, marginBottom: 12 }}>
              Tarif Paket Iklan Transparan
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
              Investasi media terukur untuk hasil dan eksposur maksimal di bandara.
            </p>
          </div>

          <div className="ad-grid-2" style={{ alignItems: "flex-start", marginBottom: 32 }}>
            {/* Table 1: Hand Strap Package */}
            <div className="ad-card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <i className="fas fa-layer-group" style={{ color: "#1967D2", fontSize: "1.1rem" }} />
                <h3 style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.15rem", margin: 0 }}>
                  HAND STRAP / HANDGRIP PACKAGE
                </h3>
              </div>
              <p style={{ color: "#64748B", fontSize: "0.85rem", marginBottom: 16 }}>
                Paket hemat penempatan hand strap untuk armada bus.
              </p>

              <table className="rate-table">
                <thead>
                  <tr>
                    <th>PACKAGE</th>
                    <th>DURATION</th>
                    <th style={{ textAlign: "right" }}>RATE (IDR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1 Bus</strong></td>
                    <td>1 Month</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>12.000.000</td>
                  </tr>
                  <tr>
                    <td><strong>3 Buses</strong></td>
                    <td>1 Month</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>30.000.000</td>
                  </tr>
                  <tr style={{ background: "rgba(25,103,210,0.05)" }}>
                    <td>
                      <strong style={{ color: "#1967D2" }}>6 Buses (Full Fleet)</strong>
                      <span style={{ display: "block", fontSize: "0.72rem", color: "#F5A623", fontWeight: 600 }}>Best Value</span>
                    </td>
                    <td>1 Month</td>
                    <td style={{ textAlign: "right", fontWeight: 800, color: "#1967D2", fontSize: "1.05rem" }}>55.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table 2: Add-On / Individual Media */}
            <div className="ad-card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <i className="fas fa-puzzle-piece" style={{ color: "#1967D2", fontSize: "1.1rem" }} />
                <h3 style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.15rem", margin: 0 }}>
                  ADD-ON / INDIVIDUAL MEDIA
                </h3>
              </div>
              <p style={{ color: "#64748B", fontSize: "0.85rem", marginBottom: 16 }}>
                Pilihan media satuan per unit bus per bulan.
              </p>

              <table className="rate-table">
                <thead>
                  <tr>
                    <th>MEDIA</th>
                    <th style={{ textAlign: "right" }}>RATE (IDR) / MONTH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hand Strap / Handgrip (per bus)</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>5.000.000</td>
                  </tr>
                  <tr>
                    <td>Window Sticker (per bus)</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>4.000.000</td>
                  </tr>
                  <tr>
                    <td>Interior Branding (per bus)</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>7.000.000</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: "#001F5B" }}>Full Bus Branding (per bus)</strong></td>
                    <td style={{ textAlign: "right", fontWeight: 800, color: "#001F5B" }}>15.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p style={{ color: "#94A3B8", fontSize: "0.82rem", textAlign: "center", margin: 0 }}>
            *Harga dapat berubah sewaktu-waktu. Untuk penawaran khusus, kontrak jangka panjang, dan paket kombinasi, hubungi tim kami.
          </p>
        </div>
      </section>

      {/* ── 7. IDEAL FOR (Slide 7) ── */}
      <section id="ideal-for" className="ad-section-padding" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            <span style={{ color: "#1967D2", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              IDEAL FOR
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", marginTop: 8, marginBottom: 12 }}>
              Your Brand. In Front of the Right People.
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
              Sangat efektif untuk berbagai kategori industri yang menargetkan audiens berdaya beli tinggi.
            </p>
          </div>

          <div className="ad-grid-8">
            {industryCategories.map((ind, i) => (
              <div
                key={i}
                className="ad-card"
                style={{
                  textAlign: "center",
                  padding: "24px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(25,103,210,0.08)",
                    color: "#1967D2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    marginBottom: 14,
                  }}
                >
                  <i className={"fas " + ind.icon} />
                </div>
                <strong style={{ color: "#0F172A", fontSize: "0.95rem" }}>{ind.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. LET'S PARTNER / CONTACT (Slide 8 & Slide 9) ── */}
      <section id="contact-section" className="ad-section-padding" style={{ background: "#010D2E", color: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="ad-grid-2" style={{ alignItems: "center" }}>
            <div>
              <span style={{ color: "#4A9EF5", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                LET’S PARTNER FOR GREATER IMPACT
              </span>
              <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", marginTop: 8, marginBottom: 20, lineHeight: 1.2 }}>
                “Your brand deserves to be seen in the right place, at the right time — where journeys begin.”
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 32 }}>
                Konsultasikan kebutuhan kampanye brand Anda bersama tim spesialis Airport Advertising MAP. Dapatkan proposal penawaran khusus dan ketersediaan slot armada.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(74,158,245,0.15)", color: "#4A9EF5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                    <i className="fas fa-phone" />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", display: "block" }}>Telepon / WhatsApp</span>
                    <strong style={{ fontSize: "1rem", color: "#fff" }}>+62 831-7029-3216</strong>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(74,158,245,0.15)", color: "#4A9EF5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                    <i className="fas fa-envelope" />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", display: "block" }}>Email Tim Sales</span>
                    <strong style={{ fontSize: "1rem", color: "#fff" }}>contact@map-airportservices.id</strong>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(74,158,245,0.15)", color: "#4A9EF5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", marginTop: 2 }}>
                    <i className="fas fa-location-dot" />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", display: "block" }}>Kantor Pusat</span>
                    <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.5 }}>
                      Mawaddah Angkasa Prima Airport Services<br />
                      Jl Cikeas Raya no 123, Sentul Village, Kec. Sukaraja, Kab. Bogor, Jawa Barat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <AdvertisingContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── REUSABLE FOOTER COMPONENT ── */}
      <Footer />
    </>
  );
}
