"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdvertisingContactForm from "./AdvertisingContactForm";

const operationalFacts = [
  {
    number: "10–15",
    unit: "Menit",
    title: "Rata-Rata Dwell Time",
    desc: "Waktu tempuh penumpang di dalam kabin bus dari gate menuju remote apron tanpa distraksi luar.",
  },
  {
    number: "100%",
    unit: "Captive",
    title: "Zero Ad Clutter",
    desc: "Zona airside steril dari ratusan billboard jalan raya. Brand Anda menjadi satu-satunya fokus visual penumpang.",
  },
  {
    number: "8",
    unit: "Armada",
    title: "Unit Bus Operasional",
    desc: "6 unit aktif di Bandara I Gusti Ngurah Rai (DPS) dan 2 unit di Bandara Soekarno-Hatta (CGK).",
  },
  {
    number: "Airside",
    unit: "Zone",
    title: "Akses Sisi Udara Steril",
    desc: "Bergerak langsung di apron, remote aircraft stand, dan jalur perimeter terminal kedatangan/keberangkatan.",
  },
];

const fleetData = [
  {
    code: "DPS",
    airport: "Bandara Internasional I Gusti Ngurah Rai",
    location: "Tuban, Badung — Bali",
    units: "6 Unit Shuttle Bus",
    badgeColor: "#1967D2",
    audience: "Wisatawan domestik, turis mancanegara (Australia, Asia, Eropa), pelaku bisnis pariwisata.",
    route: "Remote apron gate domestik & internasional, transfer penumpang pesawat berbadan sedang/lebar.",
    imgSrc: "/fleet-bali-dps.jpg",
    fileName: "fleet-bali-dps.jpg",
    placeholderTitle: "Dokumentasi Armada Shuttle Bali (DPS)",
  },
  {
    code: "CGK",
    airport: "Bandara Internasional Soekarno-Hatta",
    location: "Tangerang — Banten / Jakarta",
    units: "2 Unit Shuttle Bus",
    badgeColor: "#0D2461",
    audience: "Pebisnis, eksekutif, pengambil keputusan B2B, komuter antar-kota tersibuk di Indonesia.",
    route: "Pergerakan penumpang remote stand terminal utama, jalur apron sisi udara steril.",
    imgSrc: "/fleet-jakarta-cgk.jpg",
    fileName: "fleet-jakarta-cgk.jpg",
    placeholderTitle: "Dokumentasi Armada Shuttle Jakarta (CGK)",
  },
];

const adFormats = [
  {
    id: "hand-strap",
    title: "Hand Strap / Handgrip",
    placement: "Interior • Gantungan Tangan Penumpang",
    desc: "Dipegang langsung dan berada tepat di depan garis pandang mata (eye-level) penumpang berdiri selama perjalanan.",
    specs: "Material akrilik/polikarbonat khusus aviasi, cetak insert bolak-balik (double-sided).",
    imgSrc: "/option-hand-strap.jpeg",
    fileName: "option-hand-strap.jpeg",
  },
  {
    id: "window-sticker",
    title: "Window Sticker (One-Way Vision)",
    placement: "Kaca Samping Kabin Bus",
    desc: "Terlihat tajam dari luar saat penumpang antre naik, namun tidak menghalangi pemandangan penumpang dari dalam kabin.",
    specs: "Perforated vinyl one-way vision, tahan panas cuaca apron, tidak merusak kaca.",
    imgSrc: "/option-window-sticker.jpg",
    fileName: "option-window-sticker.jpg",
  },
  {
    id: "interior-branding",
    title: "Interior Cabin Dominance",
    placement: "Kabin Dalam • Ceiling, Dinding & Seat-back",
    desc: "Dominasi visual menyeluruh di dalam kabin bus. Cocok untuk narasi produk, fitur layanan, atau pesan promosi komprehensif.",
    specs: "Vinyl matte finishing anti-glare, ditempatkan di panel atas jendela dan partisi interior.",
    imgSrc: "/option-interior-branding.jpg",
    fileName: "option-interior-branding.jpg",
  },
  {
    id: "full-bus",
    title: "Full Exterior Bus Wrap",
    placement: "Eksterior • 360° Seluruh Badan Bus",
    desc: "Billboard bergerak raksasa di landasan apron. Terlihat dari terminal tunggu, garbarata, runway, hingga jendela pesawat.",
    specs: "Cast vinyl wrap otomotif premium + laminasi anti-UV & tahan bahan bakar/oli apron.",
    imgSrc: "/option-full-bus.jpg",
    fileName: "option-full-bus.jpg",
  },
  {
    id: "campaign-takeover",
    title: "Exclusive Full Fleet Takeover",
    placement: "Kombinasi Total Eksterior & Interior",
    desc: "Satu unit bus didedikasikan 100% untuk satu brand tunggal. Memberikan impresi eksklusif tanpa kompetisi dari brand lain.",
    specs: "Paket kustom eksterior 360° + seluruh handgrip + panel kaca + ceiling branding.",
    imgSrc: "/option-campaign-takeover.jpg",
    fileName: "option-campaign-takeover.jpg",
  },
];

const targetAudiences = [
  {
    category: "Fintech & Banking",
    why: "Traveler bandara membutuhkan kartu kredit travel, penukaran valas, mobile payment, dan asuransi perjalanan.",
    icon: "fa-building-columns",
  },
  {
    category: "Telco & Roaming",
    why: "Titik temu paling krusial bagi turis mancanegara yang baru mendarat dan butuh paket internet roaming / eSIM lokal.",
    icon: "fa-wifi",
  },
  {
    category: "FMCG, Beverage & Retail",
    why: "Membangun top-of-mind instan bagi penumpang yang segera keluar terminal menuju minimarket, kafe, atau hotel.",
    icon: "fa-mug-hot",
  },
  {
    category: "Hospitality & Travel",
    why: "Hotel, resor Bali, atraksi wisata, dan rental mobil yang langsung menyasar turis saat tiba di destinasi.",
    icon: "fa-plane-departure",
  },
];

const executionWorkflow = [
  {
    step: "01",
    title: "Konsultasi & Kunci Slot Armada",
    desc: "Pilih bandara (DPS / CGK), jumlah unit bus, dan durasi penayangan. Tim kami memverifikasi ketersediaan jadwal slot armada.",
  },
  {
    step: "02",
    title: "Pengecekan Materi & Regulasi",
    desc: "Materi desain diverifikasi agar memenuhi standar pedoman periklanan kawasan bandara dan regulasi keselamatan aviasi.",
  },
  {
    step: "03",
    title: "Produksi & Instalasi Airside",
    desc: "Pencetakan bahan tahan cuaca bandara dan pemasangan stiker/handgrip pada bus di malam hari (saat traffic penerbangan rendah).",
  },
  {
    step: "04",
    title: "Laporan Dokumentasi Penayangan",
    desc: "Klien menerima berita acara resmi (BAST) dan laporan foto dokumentasi armada beroperasi di area apron bandara.",
  },
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
      {/* ── GLOBAL NAVBAR (Identik dengan Homepage, CTA: Hubungi Sales) ── */}
      <Navbar />

      {/* ── STYLES ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: [
            ".ad-hero { padding: 140px 0 80px; background: linear-gradient(180deg, #010D2E 0%, #061540 100%); color: #fff; }",
            ".ad-section-padding { padding: 88px 0; scroll-margin-top: 80px; }",
            ".ad-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }",
            ".ad-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }",
            ".ad-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }",
            ".ad-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 12px; padding: 28px; transition: all 0.25s ease; box-shadow: 0 4px 18px rgba(0,0,0,0.03); }",
            ".ad-card:hover { transform: translateY(-4px); box-shadow: 0 14px 32px rgba(0,31,91,0.08); border-color: #CBD5E1; }",
            ".img-placeholder { width: 100%; height: 220px; background: linear-gradient(135deg, #0F2042 0%, #193B7B 100%); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: rgba(255,255,255,0.7); font-size: 0.88rem; text-align: center; padding: 20px; border: 1px dashed rgba(255,255,255,0.25); }",
            ".rate-table { width: 100%; border-collapse: collapse; margin-top: 16px; background: #fff; border-radius: 10px; overflow: hidden; border: 1px solid #E2E8F0; }",
            ".rate-table th { background: #001F5B; color: #fff; text-align: left; padding: 14px 18px; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.04em; }",
            ".rate-table td { padding: 14px 18px; border-bottom: 1px solid #F1F5F9; color: #334155; font-size: 0.9rem; }",
            ".rate-table tr:last-child td { border-bottom: none; }",
            ".rate-table tr:hover td { background: #F8FAFC; }",
            "@media (max-width: 900px) {",
            "  .ad-grid-4 { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }",
            "}",
            "@media (max-width: 768px) {",
            "  .ad-hero { padding: 110px 0 60px !important; }",
            "  .ad-grid-2 { grid-template-columns: 1fr !important; gap: 24px !important; }",
            "  .ad-grid-4 { grid-template-columns: 1fr !important; gap: 16px !important; }",
            "  .ad-grid-3 { grid-template-columns: 1fr !important; gap: 16px !important; }",
            "  .ad-options-grid { grid-template-columns: 1fr !important; }",
            "  .rate-table th, .rate-table td { padding: 10px 12px !important; font-size: 0.82rem !important; }",
            "}",
          ].join("\n"),
        }}
      />

      {/* ── 1. HERO SECTION (LUGAS, FAKTA DATA, ANTI-BUZZWORD) ── */}
      <section
        style={{
          position: "relative",
          minHeight: "82vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding: "150px 0 90px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/advertising-hero-bg.jpg"
            alt="Airport Shuttle Apron MAP"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(1,13,46,0.94) 0%, rgba(6,21,64,0.86) 55%, rgba(25,103,210,0.48) 100%)",
            }}
          />
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ maxWidth: 740 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(74, 158, 245, 0.12)",
                border: "1px solid rgba(74, 158, 245, 0.3)",
                padding: "6px 14px",
                borderRadius: 4,
                marginBottom: 20,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4A9EF5" }} />
              <span
                style={{
                  color: "#4A9EF5",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                OUT-OF-HOME (OOH) AIRPORT MEDIA • BALI & JAKARTA
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.3rem, 4.8vw, 3.6rem)",
                fontWeight: 800,
                lineHeight: 1.18,
                marginBottom: 22,
                color: "#fff",
              }}
            >
              Iklan Eksklusif di Armada Shuttle Bus Bandara.
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.88)",
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                lineHeight: 1.75,
                marginBottom: 36,
                maxWidth: 680,
              }}
            >
              Jangkau penumpang penerbangan langsung di zona steril sisi udara (airside) Bandara I Gusti Ngurah Rai Bali (DPS) dan Soekarno-Hatta Jakarta (CGK). Format media bergerak tanpa kompetisi visual, dengan rata-rata 10–15 menit perhatian penuh selama perjalanan menuju pesawat.
            </p>

            {/* Quick Action Anchors */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="#rates"
                style={{
                  background: "linear-gradient(135deg, #1967D2, #4A9EF5)",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "13px 28px",
                  borderRadius: 6,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 18px rgba(25,103,210,0.3)",
                  transition: "all 0.2s",
                }}
              >
                Lihat Tarif & Paket
              </a>
              <a
                href="#media-options"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "13px 26px",
                  borderRadius: 6,
                  fontSize: "0.92rem",
                  border: "1px solid rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                Pilihan Format Media
              </a>
              <a
                href="#contact-section"
                style={{
                  color: "#F5A623",
                  fontWeight: 700,
                  padding: "13px 20px",
                  fontSize: "0.92rem",
                  textDecoration: "none",
                }}
              >
                Hubungi Tim Sales →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. REAL OPERATIONAL METRICS (BUKAN GENERIC BUZZWORD) ── */}
      <section style={{ background: "#061338", padding: "50px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="ad-grid-4">
            {operationalFacts.map((fact, idx) => (
              <div
                key={idx}
                style={{
                  padding: "20px 24px",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "2.1rem",
                      fontWeight: 800,
                      color: "#4A9EF5",
                      lineHeight: 1,
                    }}
                  >
                    {fact.number}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "#F5A623", fontWeight: 700 }}>{fact.unit}</span>
                </div>
                <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>
                  {fact.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", lineHeight: 1.55, margin: 0 }}>
                  {fact.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ARMADA & LOKASI BANDARA OPERASIONAL ── */}
      <section id="fleet" className="ad-section-padding" style={{ background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 700, marginBottom: 44 }}>
            <span
              style={{
                color: "#1967D2",
                fontWeight: 700,
                fontSize: "0.82rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                display: "block",
                marginBottom: 8,
              }}
            >
              ALOKASI UNIT &amp; CAKUPAN BANDARA
            </span>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.25,
                marginBottom: 12,
              }}
            >
              8 Unit Shuttle Bus di 2 Hub Terpadat Indonesia
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
              Armada MAP beroperasi setiap hari melayani pergerakan penumpang maskapai dari gate terminal menuju remote stand pesawat dan sebaliknya.
            </p>
          </div>

          <div className="ad-grid-2">
            {fleetData.map((f) => (
              <div key={f.code} className="ad-card" style={{ padding: 0, overflow: "hidden" }}>
                <ImageSlot
                  src={f.imgSrc}
                  alt={f.placeholderTitle}
                  fileName={f.fileName}
                  height={300}
                  borderRadius="12px 12px 0 0"
                />
                <div style={{ padding: "26px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span
                      style={{
                        background: f.badgeColor,
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        padding: "4px 12px",
                        borderRadius: 4,
                      }}
                    >
                      {f.units}
                    </span>
                    <span style={{ color: "#001F5B", fontSize: "0.88rem", fontWeight: 700 }}>
                      Kode IATA: {f.code}
                    </span>
                  </div>

                  <h3 style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.2rem", marginBottom: 4 }}>
                    {f.airport}
                  </h3>
                  <span style={{ display: "block", color: "#64748B", fontSize: "0.82rem", marginBottom: 16 }}>
                    <i className="fas fa-location-dot" style={{ color: "#F5A623", marginRight: 6 }} />
                    {f.location}
                  </span>

                  <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div>
                      <strong style={{ fontSize: "0.82rem", color: "#0F172A", display: "block" }}>Profil Penumpang:</strong>
                      <span style={{ fontSize: "0.84rem", color: "#475569", lineHeight: 1.5 }}>{f.audience}</span>
                    </div>
                    <div>
                      <strong style={{ fontSize: "0.82rem", color: "#0F172A", display: "block" }}>Rute Operasional:</strong>
                      <span style={{ fontSize: "0.84rem", color: "#475569", lineHeight: 1.5 }}>{f.route}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PILIHAN FORMAT MEDIA (SPESIFIKASI & PENEMPATAN) ── */}
      <section id="media-options" className="ad-section-padding" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 700, marginBottom: 44 }}>
            <span
              style={{
                color: "#1967D2",
                fontWeight: 700,
                fontSize: "0.82rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                display: "block",
                marginBottom: 8,
              }}
            >
              INVENTORY &amp; FORMAT IKLAN
            </span>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.25,
                marginBottom: 12,
              }}
            >
              Format Media Sesuai Kebutuhan Objektif Brand
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
              Dari media taktis berfrekuensi sentuh tinggi di dalam kabin hingga branding eksterior berukuran raksasa yang mendominasi apron.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
            className="ad-options-grid"
          >
            {adFormats.map((opt, i) => (
              <div
                key={opt.id}
                className="ad-card"
                style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                <ImageSlot
                  src={opt.imgSrc}
                  alt={opt.title}
                  fileName={opt.fileName}
                  height={200}
                  borderRadius="12px 12px 0 0"
                />
                <div style={{ padding: "22px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <span
                      style={{
                        color: "#1967D2",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {opt.placement}
                    </span>
                    <h3 style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.15rem", marginBottom: 10 }}>
                      {opt.title}
                    </h3>
                    <p style={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: 14 }}>
                      {opt.desc}
                    </p>
                  </div>
                  <div style={{ background: "#F8FAFC", padding: "10px 14px", borderRadius: 6, border: "1px solid #E2E8F0" }}>
                    <span style={{ fontSize: "0.78rem", color: "#64748B", display: "block" }}>
                      <strong>Spesifikasi Material:</strong> {opt.specs}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MEDIA SPOTLIGHT: HAND STRAP (BEFORE / AFTER REAL) ── */}
      <section className="ad-section-padding" style={{ background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="ad-grid-2" style={{ alignItems: "center", gap: 50 }}>
            <div>
              <span
                style={{
                  color: "#1967D2",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                MEDIA FOKUS
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  lineHeight: 1.25,
                  marginBottom: 16,
                }}
              >
                Hand Strap Branding: Jarak Pandang 30 cm Langsung di Tangan Penumpang
              </h2>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 24 }}>
                Penumpang berdiri memegang gantungan bus selama perjalanan apron. Di titik ini, perhatian mata mereka tertuju langsung pada materi iklan Anda tanpa kompetisi dari layar ponsel atau iklan luar.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  {
                    title: "Eye-Level & Jarak Pandang Dekat",
                    desc: "Tepat di posisi mata orang dewasa, menjamin keterbacaan teks headline dan visual produk 100%.",
                  },
                  {
                    title: "Interaksi Fisik Nyata (Tactile Touchpoint)",
                    desc: "Media disentuh dan digenggam langsung selama 10–15 menit durasi perjalanan shuttle.",
                  },
                  {
                    title: "Cetak Dua Sisi (Double-Sided)",
                    desc: "Desain depan dan belakang dapat dibuat berbeda (misal: Sisi A logo brand, Sisi B promo QR code).",
                  },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <i className="fas fa-check-circle" style={{ color: "#1967D2", marginTop: 4, flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: "#0F172A", fontSize: "0.92rem", display: "block" }}>{item.title}</strong>
                      <span style={{ color: "#64748B", fontSize: "0.84rem", lineHeight: 1.5 }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup Showcase */}
            <div className="ad-card" style={{ padding: "28px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span style={{ color: "#001F5B", fontWeight: 700, fontSize: "0.9rem" }}>Perbandingan Visual</span>
                <span style={{ fontSize: "0.78rem", color: "#64748B", background: "#E2E8F0", padding: "3px 8px", borderRadius: 4 }}>
                  Mockup Realisasi
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div style={{ background: "#F1F5F9", padding: "12px", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                  <ImageSlot
                    src="/handgrip-before.jpg"
                    alt="Handgrip Polos Standar"
                    fileName="handgrip-before.jpg"
                    height={180}
                    borderRadius="6px"
                  />
                  <span style={{ display: "block", marginTop: 8, fontWeight: 700, fontSize: "0.78rem", color: "#64748B" }}>
                    STANDAR (Polos)
                  </span>
                </div>

                <div style={{ background: "#F1F5F9", padding: "12px", borderRadius: 8, border: "2px solid #1967D2" }}>
                  <ImageSlot
                    src="/handgrip-after.jpg"
                    alt="Handgrip Branded"
                    fileName="handgrip-after.jpg"
                    height={180}
                    borderRadius="6px"
                  />
                  <span style={{ display: "block", marginTop: 8, fontWeight: 700, fontSize: "0.78rem", color: "#1967D2" }}>
                    TERPASANG (Branded)
                  </span>
                </div>
              </div>

              <span style={{ color: "#64748B", fontSize: "0.8rem", display: "block" }}>
                Inspeksi berkala dilakukan tim teknis MAP untuk memastikan stiker selalu bersih dan presisi.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. RATE CARD & PAKET PENAWARAN TRANSPARAN ── */}
      <section id="rates" className="ad-section-padding" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 700, marginBottom: 40 }}>
            <span
              style={{
                color: "#1967D2",
                fontWeight: 700,
                fontSize: "0.82rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                display: "block",
                marginBottom: 8,
              }}
            >
              RATE CARD RESMI
            </span>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.25,
                marginBottom: 12,
              }}
            >
              Struktur Tarif &amp; Paket Penayangan
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
              Harga terstandarisasi untuk perencanaan budget media agensi dan brand. Kontrak multi-bulan dan bundling multi-bandara mendapatkan potongan khusus.
            </p>
          </div>

          <div className="ad-grid-2" style={{ alignItems: "flex-start", marginBottom: 28 }}>
            {/* Table 1: Hand Strap Package */}
            <div className="ad-card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <i className="fas fa-layer-group" style={{ color: "#1967D2", fontSize: "1.1rem" }} />
                <h3 style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>
                  Paket Bundling Hand Strap / Handgrip
                </h3>
              </div>
              <p style={{ color: "#64748B", fontSize: "0.84rem", marginBottom: 14 }}>
                Seluruh gantungan tangan dalam armada dipasang materi promosi brand Anda.
              </p>

              <table className="rate-table">
                <thead>
                  <tr>
                    <th>CAKUPAN ARMADA</th>
                    <th>DURASI</th>
                    <th style={{ textAlign: "right" }}>TARIF (IDR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1 Unit Bus</strong></td>
                    <td>1 Bulan</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>Rp 12.000.000</td>
                  </tr>
                  <tr>
                    <td><strong>3 Unit Bus</strong></td>
                    <td>1 Bulan</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>Rp 30.000.000</td>
                  </tr>
                  <tr style={{ background: "rgba(25,103,210,0.06)" }}>
                    <td>
                      <strong style={{ color: "#1967D2" }}>6 Unit Bus (Full Fleet Bali)</strong>
                      <span style={{ display: "block", fontSize: "0.72rem", color: "#D97706", fontWeight: 700 }}>
                        Efisiensi Biaya Terbaik
                      </span>
                    </td>
                    <td>1 Bulan</td>
                    <td style={{ textAlign: "right", fontWeight: 800, color: "#1967D2", fontSize: "1.05rem" }}>
                      Rp 55.000.000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table 2: Add-On Individual Formats */}
            <div className="ad-card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <i className="fas fa-puzzle-piece" style={{ color: "#1967D2", fontSize: "1.1rem" }} />
                <h3 style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>
                  Tarif Satuan per Unit per Bulan
                </h3>
              </div>
              <p style={{ color: "#64748B", fontSize: "0.84rem", marginBottom: 14 }}>
                Pilihan penempatan media individual per bus untuk kebutuhan kampanye taktis.
              </p>

              <table className="rate-table">
                <thead>
                  <tr>
                    <th>FORMAT MEDIA</th>
                    <th style={{ textAlign: "right" }}>TARIF (IDR) / BULAN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hand Strap / Handgrip (per unit)</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>Rp 5.000.000</td>
                  </tr>
                  <tr>
                    <td>Window Sticker One-Way (per unit)</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>Rp 4.000.000</td>
                  </tr>
                  <tr>
                    <td>Interior Cabin Dominance (per unit)</td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#0F172A" }}>Rp 7.000.000</td>
                  </tr>
                  <tr>
                    <td>
                      <strong style={{ color: "#001F5B" }}>Full Exterior Bus Wrap (per unit)</strong>
                    </td>
                    <td style={{ textAlign: "right", fontWeight: 800, color: "#001F5B" }}>Rp 15.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8, padding: "14px 20px" }}>
            <span style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: 1.5, display: "block" }}>
              * <strong>Catatan Teknis:</strong> Tarif belum termasuk PPN 11% dan biaya produksi materi cetak (material vinyl/akrilik). Durasi kontrak minimum 1 bulan. Untuk kontrak 3, 6, atau 12 bulan tersedia diskon penayangan multi-periode.
            </span>
          </div>
        </div>
      </section>

      {/* ── 7. WORKFLOW / ALUR KERJA PENAYANGAN AIRSIDE ── */}
      <section style={{ background: "#F8FAFC", padding: "80px 0", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 700, marginBottom: 40 }}>
            <span
              style={{
                color: "#1967D2",
                fontWeight: 700,
                fontSize: "0.82rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                display: "block",
                marginBottom: 8,
              }}
            >
              STANDARD OPERATING PROCEDURE
            </span>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.25,
                marginBottom: 10,
              }}
            >
              Alur Eksekusi Penayangan Iklan Bandara
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem", margin: 0 }}>
              Setiap tahapan penayangan mematuhi regulasi keamanan kawasan keselamatan operasi penerbangan (KKOP).
            </p>
          </div>

          <div className="ad-grid-4">
            {executionWorkflow.map((wf, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: 10,
                  padding: "24px",
                  border: "1px solid #E2E8F0",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "1.8rem",
                    fontWeight: 900,
                    color: "#CBD5E1",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: 12,
                  }}
                >
                  {wf.step}
                </span>
                <h3 style={{ color: "#0F172A", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>
                  {wf.title}
                </h3>
                <p style={{ color: "#64748B", fontSize: "0.84rem", lineHeight: 1.6, margin: 0 }}>
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TARGET INDUSTRI DENGAN INSIGHT RELEVAN ── */}
      <section className="ad-section-padding" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 700, marginBottom: 40 }}>
            <span
              style={{
                color: "#1967D2",
                fontWeight: 700,
                fontSize: "0.82rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                display: "block",
                marginBottom: 8,
              }}
            >
              RELEVANSI KATEGORI
            </span>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.25,
                marginBottom: 10,
              }}
            >
              Industri dengan Konversi Tertinggi di Bandara
            </h2>
            <p style={{ color: "#64748B", fontSize: "0.95rem", margin: 0 }}>
              Mengapa media shuttle bus efektif untuk kategori brand yang mengandalkan momentum mobilitas traveler:
            </p>
          </div>

          <div className="ad-grid-4">
            {targetAudiences.map((aud, i) => (
              <div
                key={i}
                className="ad-card"
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 6,
                      background: "rgba(25,103,210,0.1)",
                      color: "#1967D2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      marginBottom: 16,
                    }}
                  >
                    <i className={"fas " + aud.icon} />
                  </div>
                  <h3 style={{ color: "#0F172A", fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>
                    {aud.category}
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                    {aud.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. KONTAK SALES & FORM INQUIRY ── */}
      <section id="contact-section" className="ad-section-padding" style={{ background: "#010D2E", color: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="ad-grid-2" style={{ alignItems: "flex-start", gap: 50 }}>
            <div>
              <span
                style={{
                  color: "#4A9EF5",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                KONSULTASI MEDIA PLACEMENT
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.25,
                  marginBottom: 18,
                }}
              >
                Diskusikan Kebutuhan Kampanye &amp; Cek Ketersediaan Slot Armada
              </h2>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 32 }}>
                Kirimkan brief kampanye Anda untuk menerima proposal penawaran resmi, panduan teknis die-cut desain, dan jadwal ketersediaan armada bus di Bandara Bali (DPS) atau Jakarta (CGK).
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 8,
                      background: "rgba(74,158,245,0.15)",
                      color: "#4A9EF5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fas fa-phone" />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", display: "block" }}>
                      WhatsApp / Telepon Tim Sales
                    </span>
                    <strong style={{ fontSize: "1.05rem", color: "#fff" }}>+62 831-7029-3216</strong>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 8,
                      background: "rgba(74,158,245,0.15)",
                      color: "#4A9EF5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fas fa-envelope" />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", display: "block" }}>
                      Email Resmi Surat Penawaran
                    </span>
                    <strong style={{ fontSize: "1rem", color: "#fff" }}>contact@map-airportservices.id</strong>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 8,
                      background: "rgba(74,158,245,0.15)",
                      color: "#4A9EF5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      marginTop: 2,
                      flexShrink: 0,
                    }}
                  >
                    <i className="fas fa-location-dot" />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", display: "block" }}>
                      Kantor Operasional MAP
                    </span>
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

      {/* ── GLOBAL FOOTER ── */}
      <Footer />
    </>
  );
}
