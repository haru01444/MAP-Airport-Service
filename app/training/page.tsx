import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "MAP Training Center — Pusat Pelatihan Aviasi Indonesia",
  description:
    "MAP Training Center menyediakan program pelatihan Aircraft Maintenance, GSE, Aviation Security (AVSEC), dan Pramugari/Pramugara berstandar internasional.",
};

/* ─────────────── DATA ─────────────── */

const whyChoose = [
  {
    icon: "fa-award",
    title: "Bersertifikat",
    desc: "Program pelatihan tersertifikasi dan diakui oleh industri penerbangan nasional.",
  },
  {
    icon: "fa-user-tie",
    title: "Instruktur Berpengalaman",
    desc: "Dibimbing langsung oleh praktisi aviasi dengan pengalaman lapangan bertahun-tahun.",
  },
  {
    icon: "fa-plane-departure",
    title: "Kurikulum Industri",
    desc: "Materi disesuaikan dengan standar dan kebutuhan nyata dunia penerbangan.",
  },
  {
    icon: "fa-handshake",
    title: "Jaringan Luas",
    desc: "Terhubung dengan ekosistem mitra maskapai dan operator bandara MAP.",
  },
  {
    icon: "fa-flask",
    title: "Fasilitas Modern",
    desc: "Didukung fasilitas dan peralatan pelatihan berstandar operasional bandara.",
  },
  {
    icon: "fa-chart-line",
    title: "Karir Terjamin",
    desc: "Lulusan siap kerja dengan rekam jejak penempatan di industri penerbangan.",
  },
];

const programs = [
  {
    id: "aircraft",
    tag: "01",
    icon: "fa-wrench",
    title: "Aircraft Maintenance",
    titleFirst: "Aircraft",
    titleSecond: "Maintenance",
    color: "#1967D2",
    bgColor: "rgba(25,103,210,0.08)",
    desc: "Program pelatihan perawatan dan pemeliharaan pesawat udara yang komprehensif, mencakup aspek teknis, prosedur standar, dan keselamatan kerja di area maintenance.",
    items: [
      { text: "Line Maintenance Procedure", icon: "fa-gear" },
      { text: "Aircraft Component Inspection", icon: "fa-plane" },
      { text: "Ground Run & Engine Test", icon: "fa-shield-halved" },
      { text: "Safety & Hazard Awareness", icon: "fa-triangle-exclamation" },
      { text: "Documentation & Reporting", icon: "fa-file-lines" },
      { text: "Tool Control & Equipment", icon: "fa-screwdriver-wrench" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Aircraft Maintenance Training",
  },
  {
    id: "gse",
    tag: "02",
    icon: "fa-truck-fast",
    title: "GSE (Ground Support Equipment)",
    titleFirst: "GSE",
    titleSecond: "(Ground Support Equipment)",
    color: "#F5A623",
    bgColor: "rgba(245,166,35,0.08)",
    desc: "Pelatihan operasional dan pengelolaan Ground Support Equipment untuk menunjang kelancaran operasional di sisi udara bandara.",
    items: [
      { text: "GPU (Ground Power Unit)", icon: "fa-plug" },
      { text: "Belt Loader & Tractor", icon: "fa-truck-ramp-box" },
      { text: "Passenger Boarding Stairs", icon: "fa-stairs" },
      { text: "Lavatory & Water Service", icon: "fa-droplet" },
      { text: "Aircraft Towing Procedures", icon: "fa-truck-arrow-right" },
      { text: "GSE Maintenance & Safety", icon: "fa-wrench" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=85",
    imageAlt: "GSE Training",
  },
  {
    id: "avsec",
    tag: "03",
    icon: "fa-shield-halved",
    title: "Aviation Security (AVSEC)",
    titleFirst: "Aviation",
    titleSecond: "Security (AVSEC)",
    color: "#EF4444",
    bgColor: "rgba(239,68,68,0.08)",
    desc: "Pelatihan keamanan penerbangan sesuai standar ICAO Annex 17 dan regulasi DJPU Kementerian Perhubungan RI, wajib bagi seluruh personel yang bekerja di area bandara.",
    items: [
      { text: "Threat & Risk Assessment", icon: "fa-magnifying-glass-chart" },
      { text: "Passenger & Baggage Screening", icon: "fa-suitcase" },
      { text: "Access Control Management", icon: "fa-id-badge" },
      { text: "CCTV & Surveillance System", icon: "fa-video" },
      { text: "Emergency Response Procedure", icon: "fa-kit-medical" },
      { text: "Security Equipment Operation", icon: "fa-desktop" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Aviation Security Training",
  },
  {
    id: "pramugari",
    tag: "04",
    icon: "fa-user-nurse",
    title: "Pramugari / Pramugara",
    titleFirst: "Pramugari",
    titleSecond: "/ Pramugara",
    color: "#8B5CF6",
    bgColor: "rgba(139,92,246,0.08)",
    desc: "Program pembentukan calon pramugari dan pramugara profesional dengan standar pelayanan prima dan kesiagaan darurat penerbangan komersial.",
    items: [
      { text: "Aviation Knowledge", icon: "fa-book" },
      { text: "Safety & Emergency Proc", icon: "fa-life-ring" },
      { text: "Passenger Handling", icon: "fa-users" },
      { text: "In-flight Service", icon: "fa-utensils" },
      { text: "Grooming & Etiquette", icon: "fa-star" },
      { text: "Aviation English", icon: "fa-language" },
    ],
    imageUrl: "/pramugara_training.jpg",
    imageAlt: "Pramugari Training",
  },
];

const facilities = [
  {
    icon: "fa-display",
    title: "Ruang Kelas Modern",
    desc: "Dilengkapi proyektor, AC, dan peralatan multimedia untuk proses belajar yang nyaman.",
  },
  {
    icon: "fa-wrench",
    title: "Lab Praktek GSE",
    desc: "Area praktek dengan peralatan GSE nyata untuk simulasi operasional bandara.",
  },
  {
    icon: "fa-shield",
    title: "Ruang Simulasi AVSEC",
    desc: "Simulasi checkpoint keamanan dengan X-Ray dan metal detector standar bandara.",
  },
  {
    icon: "fa-person-rays",
    title: "Studio Grooming",
    desc: "Fasilitas latihan penampilan dan tata rias profesional untuk calon cabin crew.",
  },
  {
    icon: "fa-wifi",
    title: "Perpustakaan Digital",
    desc: "Akses modul pelatihan, e-book, dan referensi regulasi penerbangan terkini.",
  },
  {
    icon: "fa-users-line",
    title: "Aula Serbaguna",
    desc: "Ruang besar untuk seminar, wisuda, dan acara kolaborasi industri.",
  },
];

/* ─────────────── PAGE ─────────────── */

export default function TrainingPage() {
  return (
    <>
      {/* ── REUSABLE NAVBAR COMPONENT ── */}
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=85"
              alt="Aviation Airport Background"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(1,13,46,0.92) 0%, rgba(13,36,97,0.7) 50%, rgba(25,103,210,0.4) 100%)",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 900,
              margin: "0 auto",
              padding: "180px 24px 120px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div className="animate-fade-in-up" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(245,166,35,0.15)",
                  border: "1px solid rgba(245,166,35,0.35)",
                  borderRadius: 100,
                  padding: "6px 16px",
                  marginBottom: 24,
                }}
              >
                <i className="fas fa-graduation-cap" style={{ color: "#F5A623", fontSize: "0.78rem" }} />
                <span
                  style={{
                    color: "#F5A623",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  Pusat Pelatihan Aviasi Profesional
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: 24,
                }}
              >
                MAP
                <br />
                <span style={{ color: "#F5A623" }}>Training</span> Center
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  lineHeight: 1.8,
                  marginBottom: 40,
                  maxWidth: 700,
                }}
              >
                Mencetak tenaga profesional aviasi yang kompeten, bersertifikat,
                dan siap beroperasi di standar industri penerbangan internasional.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
                <a
                  href="#programs"
                  className="hover-lift"
                  style={{
                    background: "linear-gradient(135deg, #F5A623, #e8941f)",
                    color: "#001F5B",
                    fontWeight: 700,
                    padding: "14px 32px",
                    borderRadius: 10,
                    fontSize: "0.95rem",
                    boxShadow: "0 8px 20px rgba(245,166,35,0.3)",
                  }}
                >
                  Lihat Program
                </a>
                <a
                  href="#contact-training"
                  className="hover-glow"
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                    padding: "14px 32px",
                    borderRadius: 10,
                    fontSize: "0.95rem",
                    border: "2px solid rgba(255,255,255,0.35)",
                  }}
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 80,
              background: "#F8FAFC",
              clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
              zIndex: 1,
            }}
          />
        </section>

        {/* ── TENTANG KAMI ── */}
        <section id="about" style={{ padding: "120px 0 100px", background: "#F8FAFC", scrollMarginTop: "80px", position: "relative", overflow: "hidden" }}>
          <i className="fas fa-plane" style={{ position: "absolute", bottom: 60, left: -20, fontSize: "20rem", color: "#F1F5F9", transform: "rotate(-45deg)", zIndex: 0 }} />
          <div style={{ position: "absolute", top: 80, right: 0, width: 250, height: 250, zIndex: 0, opacity: 0.8 }}>
            <div style={{ position: "absolute", top: 40, right: -60, width: 250, height: 16, background: "#FDE68A", transform: "rotate(45deg)" }} />
            <div style={{ position: "absolute", top: 80, right: -60, width: 250, height: 16, background: "#F5A623", transform: "rotate(45deg)" }} />
          </div>

          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
                gap: 64,
                alignItems: "center",
              }}
            >
              <div>
                {/* ── resolved: revised/ui pill badge ── */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#E0F2FE",
                    color: "#1D4ED8",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "6px 16px",
                    borderRadius: 100,
                    marginBottom: 16,
                  }}
                >
                  <i className="fas fa-plane" style={{ transform: "rotate(-45deg)" }} /> TENTANG KAMI
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "clamp(2.2rem, 3.5vw, 2.8rem)",
                    fontWeight: 900,
                    color: "#0F172A",
                    lineHeight: 1.2,
                    marginBottom: 20,
                  }}
                >
                  Siapa MAP Training<br />Center?
                </h2>
                <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: 24, fontSize: "0.95rem" }}>
                  MAP Training Center adalah divisi pengembangan kompetensi dari{" "}
                  <strong>PT Mawaddah Angkasa Prima</strong>, perusahaan ground
                  handling & aviation services yang telah berpengalaman lebih
                  dari 7 tahun di industri penerbangan Indonesia.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                  {[
                    { title: "Sertifikasi resmi berstandar nasional", desc: "Pelatihan dengan standar kompetensi yang diakui secara nasional.", icon: "fa-shield-halved" },
                    { title: "Instruktur dari praktisi maskapai aktif", desc: "Dibimbing langsung oleh profesional industri penerbangan.", icon: "fa-user-graduate" },
                    { title: "Fasilitas praktik riil operasional bandara", desc: "Belajar dengan peralatan dan suasana kerja yang sebenarnya.", icon: "fa-users" },
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{ width: 44, height: 44, borderRadius: 22, background: "#E0F2FE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <i className={`fas ${item.icon}`} style={{ color: "#1D4ED8", fontSize: "1.1rem" }} />
                      </div>
                      <div style={{ paddingTop: 2 }}>
                        <h4 style={{ color: "#0F172A", fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>{item.title}</h4>
                        <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#programs"
                  className="hover-lift"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "#1D4ED8",
                    color: "#fff",
                    padding: "14px 28px",
                    borderRadius: 100,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    boxShadow: "0 8px 20px rgba(29,78,216,0.25)",
                  }}
                >
                  Jelajahi Program Pelatihan <i className="fas fa-arrow-right" style={{ marginLeft: 8 }} />
                </a>
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    aspectRatio: "16/11",
                    position: "relative",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1000&q=85"
                    alt="MAP Training Center Operations"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: -20,
                    right: 16,
                    background: "linear-gradient(135deg, #F5A623, #e8941f)",
                    color: "#0F172A",
                    borderRadius: 12,
                    padding: "16px 24px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    boxShadow: "0 12px 24px rgba(245,166,35,0.3)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <i className="fas fa-graduation-cap" style={{ fontSize: "1.1rem" }} />
                  Training Center Est. 2026
                </div>
              </div>
            </div>

            {/* Bottom Full-Width Stats Bar */}
            <div
              style={{
                marginTop: 80,
                background: "#fff",
                borderRadius: 24,
                padding: "32px 40px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 24,
                boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                border: "1px solid #F1F5F9",
                position: "relative",
                zIndex: 2,
              }}
            >
              {[
                { num: "7+", label: "Tahun Pengalaman", desc: "Berpengalaman di industri penerbangan Indonesia.", icon: "fa-clock", highlight: false },
                { num: "4", label: "Kota Operasional", desc: "Hadir di berbagai kota utama di Indonesia.", icon: "fa-map-location-dot", highlight: false },
                { num: "4", label: "Program Pelatihan", desc: "Program pelatihan terstandar untuk berbagai kebutuhan.", icon: "fa-book-open", highlight: false },
                { num: "8+", label: "Mitra Maskapai", desc: "Bekerja sama dengan berbagai maskapai terkemuka.", icon: "fa-plane", highlight: true },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, position: "relative" }}>
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: 24,
                      background: s.highlight ? "#FEF3C7" : "#DBEAFE",
                      display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0,
                    }}
                  >
                    <i className={`fas ${s.icon}`} style={{ color: s.highlight ? "#D97706" : "#1D4ED8", fontSize: "1.2rem" }} />
                  </div>
                  <div>
                    <span style={{ fontFamily: "var(--font-poppins)", fontSize: "1.6rem", fontWeight: 800, color: s.highlight ? "#D97706" : "#1D4ED8", lineHeight: 1, display: "block" }}>{s.num}</span>
                    <span style={{ color: "#1E293B", fontSize: "0.85rem", fontWeight: 700, display: "block", marginTop: 6, marginBottom: 4 }}>{s.label}</span>
                    <p style={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.5, margin: 0, paddingRight: 16 }}>{s.desc}</p>
                  </div>
                  {i < 3 && <div style={{ position: "absolute", right: -12, top: "10%", height: "80%", width: 1, background: "#E2E8F0" }} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MENGAPA MEMILIH ── */}
        <section style={{ padding: "100px 0", background: "#F8FAFC" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              {/* ── resolved: revised/ui pill badge ── */}
              <span
                style={{
                  display: "inline-block",
                  background: "#E0F2FE",
                  color: "#1D4ED8",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "6px 16px",
                  borderRadius: 100,
                  marginBottom: 16,
                }}
              >
                Keunggulan Kami
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#0F172A",
                  lineHeight: 1.25,
                  marginBottom: 16,
                }}
              >
                Mengapa Memilih<br />MAP Training Center?
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                gap: 24,
              }}
            >
              {whyChoose.map((item, i) => (
                <div
                  key={i}
                  className="stat-card-hover"
                  style={{
                    background: "#fff",
                    border: "1px solid #F1F5F9",
                    borderRadius: 16,
                    padding: "32px",
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.02)",
                  }}
                >
                  <div
                    style={{
                      width: 56, height: 56, borderRadius: 12,
                      background: "#E0F2FE",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}
                  >
                    <i className={`fas ${item.icon}`} style={{ color: "#1D4ED8", fontSize: "1.3rem" }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, color: "#0F172A", fontSize: "1.1rem", margin: "0 0 12px 0", lineHeight: 1.2 }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRAM PELATIHAN HEADER ── */}
        {/* ── resolved: revised/ui decorative circles ── */}
        <section
          id="programs"
          style={{
            padding: "100px 0 80px",
            background: "#08163E",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 800, borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.15)", zIndex: 0 }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 1200, height: 1200, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)", zIndex: 0 }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 1600, height: 1600, borderRadius: "50%", border: "2px dashed rgba(245,166,35,0.2)", zIndex: 0 }} />

          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(245,166,35,0.1)",
                color: "#F5A623",
                border: "1px solid rgba(245,166,35,0.3)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: 100,
                marginBottom: 24,
              }}
            >
              <i className="fas fa-graduation-cap" /> Kurikulum Kami
            </span>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Program<br /><span style={{ color: "#F5A623" }}>Pelatihan</span>
            </h2>
            <div style={{ width: 60, height: 4, background: "#F5A623", margin: "0 auto 28px", borderRadius: 2 }} />
            <p style={{ color: "#94A3B8", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              4 program pelatihan dirancang bersama praktisi industri untuk memenuhi standar kompetensi aviasi nasional dan internasional.
            </p>
          </div>
        </section>

        {/* ── PROGRAM CARDS ── */}
        {programs.map((prog, idx) => (
          <section key={prog.id} style={{ padding: "100px 0", background: idx % 2 === 0 ? "#fff" : "#F8FAFC", overflow: "hidden" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
                  gap: 80,
                  alignItems: "center",
                }}
              >
                {/* Content */}
                <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                    <div style={{ background: prog.bgColor, color: prog.color, borderRadius: 100, padding: "4px 16px", fontSize: "1rem", fontWeight: 900, fontFamily: "var(--font-poppins)" }}>
                      {prog.tag}
                    </div>
                    <div style={{ width: 1, height: 20, background: "#E2E8F0" }} />
                    <div style={{ background: prog.bgColor, color: prog.color, borderRadius: 100, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className={`fas ${prog.icon}`} style={{ fontSize: "0.95rem" }} />
                    </div>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                      fontWeight: 900,
                      color: "#0F172A",
                      lineHeight: 1.15,
                      marginBottom: 16,
                    }}
                  >
                    {prog.titleFirst} <span style={{ color: prog.color }}>{prog.titleSecond}</span>
                  </h3>
                  <p style={{ color: "#64748B", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: 28 }}>{prog.desc}</p>

                  {/* ── resolved: revised/ui items with icons ── */}
                  <ul
                    className="stat-card-hover"
                    style={{
                      listStyle: "none",
                      margin: "0 0 32px 0",
                      background: idx % 2 === 0 ? "#F8FAFC" : "#fff",
                      border: idx % 2 === 0 ? "1px solid #E2E8F0" : "1px solid rgba(0,0,0,0.03)",
                      borderRadius: 16,
                      padding: "28px 24px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "22px 18px",
                    }}
                  >
                    {prog.items.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: 14, color: "#334155", fontSize: "0.85rem", fontWeight: 500 }}>
                        <div style={{ width: 36, height: 36, borderRadius: "50%", background: prog.bgColor, color: prog.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <i className={`fas ${item.icon}`} style={{ fontSize: "0.85rem" }} />
                        </div>
                        <span style={{ lineHeight: 1.4 }}>{item.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <a
                      href="#contact-training"
                      className="hover-lift"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        background: prog.color, color: "#fff", fontWeight: 600,
                        padding: "12px 24px", borderRadius: 12, fontSize: "0.85rem",
                        textDecoration: "none", boxShadow: `0 8px 24px ${prog.bgColor}`, flexShrink: 0,
                      }}
                    >
                      Daftar Program Ini <i className="fas fa-arrow-right" style={{ fontSize: "0.8rem" }} />
                    </a>
                    <div style={{ flex: 1, height: 2, background: "#E2E8F0", borderRadius: 2 }} />
                    <i className="fas fa-plane" style={{ color: "#1E293B", fontSize: "1.2rem", transform: "rotate(-45deg)" }} />
                  </div>
                </div>

                {/* Image */}
                <div style={{ order: idx % 2 === 0 ? 1 : 0, position: "relative" }}>
                  <div style={{ position: "absolute", inset: "-15% -10% -10% -5%", background: prog.bgColor, borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", zIndex: 0, transform: "rotate(-5deg)", opacity: 0.6 }} />
                  <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/3", position: "relative", zIndex: 1, boxShadow: "0 24px 48px rgba(0,0,0,0.12)" }}>
                    <Image src={prog.imageUrl} alt={prog.imageAlt} fill style={{ objectFit: "cover" }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── FASILITAS ── */}
        <section id="fasilitas" style={{ padding: "100px 0", background: "linear-gradient(135deg, #041235 0%, #082567 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -200, right: -200, width: 800, height: 800, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", zIndex: 0 }} />
          <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", zIndex: 0 }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              {/* ── resolved: revised/ui pill badge ── */}
              <span
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: "1px solid rgba(245,166,35,0.3)", color: "#F5A623",
                  fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", padding: "8px 20px", borderRadius: 100,
                  marginBottom: 24, background: "rgba(245,166,35,0.05)",
                }}
              >
                <i className="fas fa-desktop" style={{ fontSize: "0.85rem" }} /> INFRASTRUKTUR
              </span>
              <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: 16 }}>
                Fasilitas Kami
              </h2>
              <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: 550, margin: "0 auto", lineHeight: 1.7, fontSize: "1.05rem" }}>
                Didukung fasilitas modern dan lengkap untuk memastikan kualitas pelatihan yang optimal.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24 }}>
              {facilities.map((f, i) => (
                <div
                  key={i}
                  className="hover-lift"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 24, padding: "36px 32px", cursor: "pointer",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <div
                    style={{
                      width: 56, height: 56, borderRadius: 16,
                      background: i % 2 === 0 ? "rgba(74,158,245,0.15)" : "rgba(245,166,35,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24,
                    }}
                  >
                    <i className={`fas ${f.icon}`} style={{ color: i % 2 === 0 ? "#4A9EF5" : "#F5A623", fontSize: "1.3rem" }} />
                  </div>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: 12, fontFamily: "var(--font-poppins)" }}>{f.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERTIFIKAT ── */}
        <section id="sertifikat" style={{ padding: "100px 0", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 56, alignItems: "center" }}>
              <div>
                {/* ── resolved: revised/ui pill badge ── */}
                <span
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(245,166,35,0.1)", color: "#e8941f",
                    border: "1px solid rgba(245,166,35,0.3)", fontSize: "0.75rem",
                    fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    padding: "8px 20px", borderRadius: 100, marginBottom: 20,
                  }}
                >
                  <i className="fas fa-ribbon" style={{ fontSize: "0.85rem" }} /> PENGAKUAN INDUSTRI
                </span>
                <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, marginBottom: 20 }}>
                  Sertifikat Diakui Industri
                </h2>
                <p style={{ color: "#64748B", lineHeight: 1.85, marginBottom: 32, fontSize: "1.05rem" }}>
                  Setiap peserta yang menyelesaikan program pelatihan akan mendapatkan sertifikat kompetensi yang diakui oleh industri penerbangan nasional dan sesuai dengan regulasi otoritas penerbangan Indonesia.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { icon: "fa-ribbon", text: "Sertifikat Kompetensi Keahlian", sub: "Diakui oleh industri aviasi nasional" },
                    { icon: "fa-file-lines", text: "Sertifikat Kelulusan Pelatihan", sub: "Diterbitkan oleh MAP Training Center" },
                    { icon: "fa-address-card", text: "Kartu Tanda Peserta", sub: "Valid selama masa pelatihan berlangsung" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 20px", background: "#F8FAFC", borderRadius: 16, border: "1px solid rgba(0,0,0,0.04)" }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(245,166,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <i className={`fas ${item.icon}`} style={{ color: "#F5A623", fontSize: "1.1rem" }} />
                      </div>
                      <div>
                        <strong style={{ display: "block", color: "#0F172A", fontSize: "0.95rem", marginBottom: 2 }}>{item.text}</strong>
                        <span style={{ color: "#64748B", fontSize: "0.85rem" }}>{item.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: "20px" }}>
                <div className="certificate-hover" style={{ background: "#15203A", borderRadius: 16, padding: "24px", boxShadow: "0 24px 60px rgba(0,0,0,0.15)", position: "relative", overflow: "hidden" }}>
                  <div style={{ border: "1px solid rgba(245,166,35,0.3)", borderRadius: 12, padding: "40px 32px", position: "relative", textAlign: "center" }}>
                    <div style={{ position: "absolute", top: 12, left: 12, width: 12, height: 12, borderTop: "2px solid #F5A623", borderLeft: "2px solid #F5A623" }} />
                    <div style={{ position: "absolute", top: 12, right: 12, width: 12, height: 12, borderTop: "2px solid #F5A623", borderRight: "2px solid #F5A623" }} />
                    <div style={{ position: "absolute", bottom: 12, left: 12, width: 12, height: 12, borderBottom: "2px solid #F5A623", borderLeft: "2px solid #F5A623" }} />
                    <div style={{ position: "absolute", bottom: 12, right: 12, width: 12, height: 12, borderBottom: "2px solid #F5A623", borderRight: "2px solid #F5A623" }} />
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 32 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <i className="fas fa-globe" style={{ color: "#fff", fontSize: "0.9rem" }} />
                        </div>
                        <div style={{ textAlign: "left", lineHeight: 1.1 }}>
                          <span style={{ display: "block", color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em" }}>MAWADDAH</span>
                          <span style={{ display: "block", color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em" }}>ANGKASA PRIMA</span>
                        </div>
                      </div>
                      <div style={{ color: "#F5A623", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Sertifikat Kompetensi</div>
                      <h3 style={{ color: "#fff", fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 400, marginBottom: 16 }}>MAP Training Center</h3>
                      <div style={{ height: 1, background: "rgba(255,255,255,0.1)", width: 40, margin: "0 auto 24px" }} />
                      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: 320, margin: "0 auto" }}>
                        Diberikan kepada peserta yang telah menyelesaikan program pelatihan dengan hasil memuaskan dan memenuhi standar kompetensi yang ditetapkan.
                      </p>
                      <div style={{ marginTop: 32, marginBottom: 32, display: "flex", justifyContent: "center" }}>
                        <div style={{ width: 48, height: 48, borderRadius: "50%", border: "1px dashed #F5A623", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#0F172A", border: "1px solid rgba(245,166,35,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className="fas fa-star" style={{ color: "#F5A623", fontSize: "0.9rem" }} />
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 24 }}>
                        <div style={{ textAlign: "left" }}>
                          <div style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "#fff", fontSize: "0.9rem", marginBottom: 4 }}>MAP Training Center</div>
                          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Direktur Program</div>
                        </div>
                        <div style={{ background: "#F1F5F9", padding: 6, borderRadius: 6 }}>
                          <i className="fas fa-qrcode" style={{ fontSize: "1.2rem", color: "#0F172A" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact-training" style={{ position: "relative", padding: "100px 0", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1920&q=85" alt="Aviation" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(1,13,46,0.92)" }} />
          </div>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
            <i className="fas fa-plane-departure" style={{ fontSize: "2.5rem", color: "#F5A623", marginBottom: 20, display: "block" }} />
            {/* ── resolved: revised/ui pill badge ── */}
            <span
              style={{
                display: "inline-block", background: "rgba(255,255,255,0.1)", color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.75rem", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 16px",
                borderRadius: 100, marginBottom: 16,
              }}
            >
              Terima Kasih
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: 16 }}>
              Siap Bergabung dengan<br />MAP Training Center?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
              Hubungi kami sekarang untuk informasi pendaftaran, jadwal pelatihan, biaya program, dan kerja sama institusi. Tim kami siap membantu Anda.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+6283170293216" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, #F5A623, #e8941f)", color: "#001F5B", fontWeight: 700, padding: "14px 28px", borderRadius: 10, fontSize: "0.9rem" }}>
                <i className="fas fa-phone" /> +62 831 7029 3216
              </a>
              {/* ── resolved: revised/ui correct email ── */}
              <a href="mailto:mawaddahangkasaprima@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "2px solid rgba(255,255,255,0.35)", color: "#fff", fontWeight: 600, padding: "14px 28px", borderRadius: 10, fontSize: "0.9rem" }}>
                <i className="fas fa-envelope" /> Email Kami
              </a>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.1)", color: "#fff", fontWeight: 600, padding: "14px 28px", borderRadius: 10, fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.15)" }}>
                <i className="fas fa-plane" /> MAP Airport Service
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
