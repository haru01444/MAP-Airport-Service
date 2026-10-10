"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdvertisingContactForm from "./AdvertisingContactForm";


const fleetList = [
  {
    code: "DPS",
    airport: "I Gusti Ngurah Rai International Airport",
    city: "Bali",
    units: "6 Unit Bus",
    badgeColor: "#1967D2",
    desc: "Melayani pergerakan penumpang domestik dan internasional di pintu gerbang pariwisata utama Indonesia.",
    imgSrc: "/fleet-bali-dps.jpg",
    fileName: "fleet-bali-dps.jpg",
    placeholderTitle: "Armada Shuttle Bali (DPS)",
  },
  {
    code: "CGK",
    airport: "Soekarno-Hatta International Airport",
    city: "Jakarta",
    units: "2 Unit Bus",
    badgeColor: "#0D2461",
    desc: "Menjangkau penumpang bisnis, eksekutif, dan komuter reguler di bandara tersibuk di Indonesia.",
    imgSrc: "/fleet-jakarta-cgk.jpg",
    fileName: "fleet-jakarta-cgk.jpg",
    placeholderTitle: "Armada Shuttle Jakarta (CGK)",
  },
];

const adOptions = [
  {
    id: "hand-strap",
    title: "HAND STRAP / HANDGRIP",
    desc: "Media promosi pada gantungan tangan penumpang di dalam bus.",
    highlight: "Eye-Level & Sentuhan Langsung",
    imgSrc: "/option-hand-strap.jpeg",
    fileName: "option-hand-strap.jpeg",
  },
  {
    id: "window-sticker",
    title: "WINDOW STICKER",
    desc: "Stiker one-way vision pada kaca samping kabin bus.",
    highlight: "Terlihat dari Luar & Dalam",
    imgSrc: "/option-window-sticker.jpeg",
    fileName: "option-window-sticker.jpeg",
  },
  {
    id: "interior-branding",
    title: "INTERIOR BRANDING",
    desc: "Kombinasi panel dinding, ceiling strip, dan belakang kursi.",
    highlight: "Dominasi Kabin Penumpang",
    imgSrc: "/option-interior-branding.jpeg",
    fileName: "option-interior-branding.jpeg",
  },
  {
    id: "full-bus",
    title: "FULL BUS WRAPPING",
    desc: "Branding menyeluruh pada bodi luar bus.",
    highlight: "Billboard Bergerak 360°",
    imgSrc: "/option-full-bus.jpg",
    fileName: "option-full-bus.jpg",
  },
  {
    id: "campaign-takeover",
    title: "CAMPAIGN TAKEOVER",
    desc: "Eksklusivitas total eksterior dan interior untuk satu brand.",
    highlight: "Eksklusif Tanpa Kompetisi",
    imgSrc: "/option-campaign-takeover.jpg",
    fileName: "option-campaign-takeover.jpg",
  },
];

const industryCategories = [
  { icon: "fa-mug-hot", name: "F&B & Coffee" },
  { icon: "fa-spray-can-sparkles", name: "Beauty & Personal Care" },
  { icon: "fa-wifi", name: "Telco & Provider" },
  { icon: "fa-building-columns", name: "Banking & Fintech" },
  { icon: "fa-bag-shopping", name: "Retail & Fashion" },
  { icon: "fa-plane-departure", name: "Travel & Hospitality" },
  { icon: "fa-graduation-cap", name: "Edukasi & Institusi" },
  { icon: "fa-car", name: "Otomotif & Transportasi" },
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
      {/* ── REUSABLE NAVBAR COMPONENT (Standar Global Website) ── */}
      <Navbar />

      {/* ── STYLES ── */}
      <style
        dangerouslySetInnerHTML={{
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
            "}",
          ].join("\n"),
        }}
      />

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
                display: "inline-block",
                color: "#4A9EF5",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              AIRPORT ADVERTISING • MEDIA KIT &amp; RATE CARD
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
              Iklan Shuttle Bus Bandara.<br />
              <span style={{ color: "#4A9EF5" }}>Bali &amp; Jakarta.</span>
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
              Media promosi luar ruang eksklusif pada armada shuttle bus bandara di Bandara I Gusti Ngurah Rai (DPS) dan Soekarno-Hatta (CGK). Menjangkau penumpang langsung di area sisi udara (airside) yang bebas distraksi.
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
                Lihat Paket &amp; Tarif
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


      {/* ── 3. OUR FLEET (Slide 3) ── */}
      <section id="fleet" className="ad-section-padding" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            <span style={{ color: "#1967D2", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              CAKUPAN ARMADA
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", marginTop: 8, marginBottom: 12 }}>
              8 Unit Shuttle Bus Operasional
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
              6 Unit — I Gusti Ngurah Rai (DPS) &nbsp;|&nbsp; 2 Unit — Soekarno-Hatta (CGK)
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
              FORMAT PENEMPATAN MEDIA
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", marginTop: 8, marginBottom: 12 }}>
              Pilihan Format Iklan
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
              Penempatan media yang fleksibel dan terintegrasi di seluruh bagian armada bus.
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
                MEDIA FOKUS
              </span>
              <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.3rem)", fontWeight: 800, color: "#0F172A", marginTop: 8, marginBottom: 16 }}>
                Hand Strap / Handgrip Branding
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 28 }}>
                Media <strong>Hand Strap / Handgrip</strong> memposisikan brand Anda tepat di garis pandang mata penumpang yang berdiri, dengan tingkat interaksi sentuh langsung sepanjang perjalanan di apron.
              </p>

              {/* Key Features List */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "fa-eye", title: "Eye-Level & Jarak Pandang Dekat", desc: "Tepat di posisi mata penumpang berdiri saat menaiki shuttle bus." },
                  { icon: "fa-hand", title: "Interaksi Sentuh Langsung", desc: "Dipegang dan dilihat langsung selama 10–15 menit perjalanan apron." },
                  { icon: "fa-circle-check", title: "Fungsional & Rapi", desc: "Menyatu secara profesional dengan fasilitas pegangan penumpang bus." },
                  { icon: "fa-palette", title: "Cetak Bolak-Balik (Double-Sided)", desc: "Materi desain dua sisi yang dapat disesuaikan dengan kampanye brand Anda." },
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
                    STANDAR (Polos)
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
                    TERPASANG (Branded)
                  </span>
                </div>
              </div>

              <p style={{ color: "#64748B", fontSize: "0.82rem", margin: 0 }}>
                Materi promosi dicetak presisi dengan material khusus standar aviasi yang tahan lama.
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
              TARIF &amp; PAKET
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", marginTop: 8, marginBottom: 12 }}>
              Tarif Paket Iklan Transparan
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
              Perencanaan investasi media yang jelas dan terukur untuk kampanye brand Anda.
            </p>
          </div>

          <div className="ad-grid-2" style={{ alignItems: "flex-start", marginBottom: 32 }}>
            {/* Table 1: Hand Strap Package */}
            <div className="ad-card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <i className="fas fa-layer-group" style={{ color: "#1967D2", fontSize: "1.1rem" }} />
                <h3 style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.15rem", margin: 0 }}>
                  PAKET HAND STRAP / HANDGRIP
                </h3>
              </div>
              <p style={{ color: "#64748B", fontSize: "0.85rem", marginBottom: 16 }}>
                Penempatan hand strap terintegrasi pada armada shuttle bus.
              </p>

              <table className="rate-table">
                <thead>
                  <tr>
                    <th>PAKET</th>
                    <th>DURASI</th>
                    <th style={{ textAlign: "right" }}>TARIF (IDR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1 Unit Bus</strong></td>
                    <td>1 Bulan</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>12.000.000</td>
                  </tr>
                  <tr>
                    <td><strong>3 Unit Bus</strong></td>
                    <td>1 Bulan</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>30.000.000</td>
                  </tr>
                  <tr style={{ background: "rgba(25,103,210,0.05)" }}>
                    <td>
                      <strong style={{ color: "#1967D2" }}>6 Unit Bus (Full Fleet Bali)</strong>
                      <span style={{ display: "block", fontSize: "0.72rem", color: "#F5A623", fontWeight: 600 }}>Nilai Terbaik</span>
                    </td>
                    <td>1 Bulan</td>
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
                  FORMAT MEDIA INDIVIDUAL
                </h3>
              </div>
              <p style={{ color: "#64748B", fontSize: "0.85rem", marginBottom: 16 }}>
                Pilihan penempatan satuan per unit bus per bulan.
              </p>

              <table className="rate-table">
                <thead>
                  <tr>
                    <th>MEDIA</th>
                    <th style={{ textAlign: "right" }}>TARIF (IDR) / BULAN</th>
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
                    <td><strong style={{ color: "#001F5B" }}>Full Bus Wrapping (per bus)</strong></td>
                    <td style={{ textAlign: "right", fontWeight: 800, color: "#001F5B" }}>15.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p style={{ color: "#94A3B8", fontSize: "0.82rem", textAlign: "center", margin: 0 }}>
            *Harga belum termasuk PPN. Untuk penawaran khusus, kontrak jangka panjang, dan bundling multi-kota, silakan hubungi tim kami.
          </p>
        </div>
      </section>

      {/* ── 7. IDEAL FOR (Slide 7) ── */}
      <section id="ideal-for" className="ad-section-padding" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            <span style={{ color: "#1967D2", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              TARGET INDUSTRI
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", marginTop: 8, marginBottom: 12 }}>
              Kategori Brand yang Relevan
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
              Sangat efektif untuk sektor industri yang menargetkan audiens traveler dengan daya beli aktif.
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
                KONSULTASI &amp; PEMESANAN
              </span>
              <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", marginTop: 8, marginBottom: 20, lineHeight: 1.25 }}>
                Diskusikan Kebutuhan Kampanye Iklan Bandara Anda
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 32 }}>
                Konsultasikan jadwal penayangan, ketersediaan unit armada di Bali dan Jakarta, serta dapatkan proposal penawaran resmi dari tim Airport Advertising MAP.
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
                      PT Mawaddah Angkasa Prima<br />
                      Sentul Village, Jl. Cikeas Raya No. 123, Sukaraja, Kab. Bogor, Jawa Barat 16711
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
