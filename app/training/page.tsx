import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "MAP Training Center — Pusat Pelatihan Aviasi Indonesia",
  description:
    "MAP Training Center menyediakan program pelatihan Aircraft Maintenance, GSE, Aviation Security (AVSEC), dan Pramugari/Pramugara berstandar internasional.",
};

/* ─────────────── DATA ─────────────── */

const whyChoose = [
  { icon: "fa-certificate", title: "Bersertifikat", desc: "Program pelatihan tersertifikasi dan diakui oleh industri penerbangan nasional." },
  { icon: "fa-user-tie", title: "Instruktur Berpengalaman", desc: "Dibimbing langsung oleh praktisi aviasi dengan pengalaman lapangan bertahun-tahun." },
  { icon: "fa-plane-departure", title: "Kurikulum Industri", desc: "Materi disesuaikan dengan standar dan kebutuhan nyata dunia penerbangan." },
  { icon: "fa-handshake", title: "Jaringan Luas", desc: "Terhubung dengan ekosistem mitra maskapai dan operator bandara MAP." },
  { icon: "fa-flask", title: "Fasilitas Modern", desc: "Didukung fasilitas dan peralatan pelatihan berstandar operasional bandara." },
  { icon: "fa-chart-line", title: "Karir Terjamin", desc: "Lulusan siap kerja dengan rekam jejak penempatan di industri penerbangan." },
];

const programs = [
  {
    id: "aircraft",
    tag: "01",
    icon: "fa-wrench",
    title: "Aircraft Maintenance",
    color: "#1967D2",
    bgColor: "rgba(25,103,210,0.08)",
    desc: "Program pelatihan perawatan dan pemeliharaan pesawat udara yang komprehensif, mencakup aspek teknis, prosedur standar, dan keselamatan kerja di area maintenance.",
    items: [
      "Line Maintenance Procedure",
      "Aircraft Component Inspection",
      "Ground Run & Engine Test",
      "Safety & Hazard Awareness",
      "Documentation & Reporting",
      "Tool Control & Equipment",
    ],
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Aircraft Maintenance Training",
  },
  {
    id: "gse",
    tag: "02",
    icon: "fa-truck-fast",
    title: "GSE (Ground Support Equipment)",
    color: "#F5A623",
    bgColor: "rgba(245,166,35,0.08)",
    desc: "Pelatihan operasional dan pengelolaan Ground Support Equipment untuk menunjang kelancaran operasional di sisi udara bandara.",
    items: [
      "GPU (Ground Power Unit) Operation",
      "Belt Loader & Baggage Tractor",
      "Passenger Boarding Stairs",
      "Lavatory & Water Service Vehicle",
      "Aircraft Towing Procedures",
      "GSE Maintenance & Safety",
    ],
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=85",
    imageAlt: "GSE Training",
  },
  {
    id: "avsec",
    tag: "03",
    icon: "fa-shield-halved",
    title: "Aviation Security (AVSEC)",
    color: "#EF4444",
    bgColor: "rgba(239,68,68,0.08)",
    desc: "Pelatihan keamanan penerbangan sesuai standar ICAO Annex 17 dan regulasi DJPU Kementerian Perhubungan RI, wajib bagi seluruh personel yang bekerja di area bandara.",
    items: [
      "Threat & Risk Assessment",
      "Passenger & Baggage Screening",
      "Access Control Management",
      "CCTV & Surveillance System",
      "Emergency Response Procedure",
      "Security Equipment Operation",
    ],
    imageUrl: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Aviation Security Training",
  },
  {
    id: "pramugari",
    tag: "04",
    icon: "fa-user-tie",
    title: "Pramugari / Pramugara",
    color: "#8B5CF6",
    bgColor: "rgba(139,92,246,0.08)",
    desc: "Program pembentukan calon pramugari dan pramugara profesional yang siap bertugas di berbagai maskapai, dengan penekanan pada pelayanan prima, keselamatan, dan penampilan.",
    items: [
      "Cabin Crew Role & Responsibility",
      "Safety & Emergency Procedure",
      "Passenger Handling & Service",
      "First Aid & Medical Handling",
      "Grooming & Professional Image",
      "Communication & Hospitality",
    ],
    imageUrl: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Pramugari Pramugara Training",
  },
];

const facilities = [
  { icon: "fa-chalkboard-teacher", title: "Ruang Kelas Modern", desc: "Dilengkapi proyektor, AC, dan peralatan multimedia untuk proses belajar yang nyaman." },
  { icon: "fa-tools", title: "Lab Praktek GSE", desc: "Area praktek dengan peralatan GSE nyata untuk simulasi operasional bandara." },
  { icon: "fa-shield-halved", title: "Ruang Simulasi AVSEC", desc: "Simulasi checkpoint keamanan dengan X-Ray dan metal detector standar bandara." },
  { icon: "fa-person-dress", title: "Studio Grooming", desc: "Fasilitas latihan penampilan dan tata rias profesional untuk calon cabin crew." },
  { icon: "fa-wifi", title: "Perpustakaan Digital", desc: "Akses modul pelatihan, e-book, dan referensi regulasi penerbangan terkini." },
  { icon: "fa-users", title: "Aula Serbaguna", desc: "Ruang besar untuk seminar, wisuda, dan acara kolaborasi industri." },
];

/* ─────────────── PAGE ─────────────── */

export default function TrainingPage() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: "rgba(1,13,46,0.97)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "14px 0",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/">
            <Image src="/LOGO MAP NO BACKGROUND.png" alt="Logo MAP" width={140} height={48} style={{ height: 44, width: "auto", objectFit: "contain" }} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.65)", fontWeight: 500, fontSize: "0.88rem" }}>
              ← MAP Airport Service
            </Link>
            <a
              href="#programs"
              style={{ background: "linear-gradient(135deg, #F5A623, #e8941f)", color: "#fff", fontWeight: 600, padding: "10px 20px", borderRadius: 8, fontSize: "0.88rem" }}
            >
              Program Pelatihan
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=85"
              alt="Aviation Training"
              fill style={{ objectFit: "cover" }} priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(1,13,46,0.95) 0%, rgba(13,36,97,0.85) 60%, rgba(25,103,210,0.5) 100%)" }} />
          </div>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <Image src="/LOGO MAP NO BACKGROUND.png" alt="MAP Logo" width={60} height={60} style={{ height: 52, width: "auto" }} />
              <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.2)" }} />
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", fontWeight: 500 }}>Training Center</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.35)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
              <i className="fas fa-graduation-cap" style={{ color: "#F5A623", fontSize: "0.78rem" }} />
              <span style={{ color: "#F5A623", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em" }}>Pusat Pelatihan Aviasi Profesional</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24 }}>
              MAP<br />
              <span style={{ color: "#F5A623" }}>Training</span><br />
              Center
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", maxWidth: 520, lineHeight: 1.8, marginBottom: 40 }}>
              Mencetak tenaga profesional aviasi yang kompeten, bersertifikat, dan siap beroperasi di standar industri penerbangan internasional.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#programs" style={{ background: "linear-gradient(135deg, #F5A623, #e8941f)", color: "#001F5B", fontWeight: 700, padding: "14px 32px", borderRadius: 10, fontSize: "0.95rem" }}>
                Lihat Program
              </a>
              <a href="#contact-training" style={{ color: "#fff", fontWeight: 600, padding: "14px 32px", borderRadius: 10, fontSize: "0.95rem", border: "2px solid rgba(255,255,255,0.35)" }}>
                Hubungi Kami
              </a>
            </div>
          </div>
          {/* Decorative diagonal */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)", zIndex: 1 }} />
        </section>

        {/* ── TENTANG KAMI ── */}
        <section id="about" style={{ padding: "100px 0", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
              <div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#1967D2", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
                  <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
                  Tentang Kami
                </span>
                <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, marginBottom: 20 }}>
                  Siapa MAP Training Center?
                </h2>
                <p style={{ color: "#475569", lineHeight: 1.85, marginBottom: 16 }}>
                  MAP Training Center adalah divisi pengembangan kompetensi dari <strong>PT Mawaddah Angkasa Prima</strong>, perusahaan ground handling & aviation services yang telah berpengalaman lebih dari 7 tahun di industri penerbangan Indonesia.
                </p>
                <p style={{ color: "#475569", lineHeight: 1.85, marginBottom: 28 }}>
                  Didirikan sebagai wujud komitmen kami dalam meningkatkan kualitas sumber daya manusia aviasi nasional, MAP Training Center menghadirkan program pelatihan terstruktur, bersertifikat, dan dibimbing langsung oleh praktisi industri berpengalaman.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { num: "7+", label: "Tahun Pengalaman" },
                    { num: "4", label: "Kota Operasional" },
                    { num: "4", label: "Program Pelatihan" },
                    { num: "8+", label: "Mitra Maskapai" },
                  ].map((s, i) => (
                    <div key={i} style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12, padding: "20px", textAlign: "center" }}>
                      <span style={{ fontFamily: "var(--font-poppins)", fontSize: "1.8rem", fontWeight: 800, color: "#1967D2", display: "block", lineHeight: 1 }}>{s.num}</span>
                      <span style={{ color: "#64748B", fontSize: "0.8rem", marginTop: 4, display: "block" }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=800&q=85"
                    alt="MAP Training Center"
                    fill style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ position: "absolute", bottom: -16, right: -16, background: "linear-gradient(135deg, #F5A623, #e8941f)", color: "#001F5B", borderRadius: 12, padding: "16px 20px", fontWeight: 700, fontSize: "0.9rem", boxShadow: "0 8px 24px rgba(245,166,35,0.4)" }}>
                  <i className="fas fa-graduation-cap" style={{ marginRight: 8 }} />
                  Est. 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MENGAPA MEMILIH ── */}
        <section style={{ padding: "100px 0", background: "#F8FAFC" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#1967D2", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
                <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
                Keunggulan Kami
              </span>
              <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, marginBottom: 16 }}>
                Mengapa Memilih<br />MAP Training Center?
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {whyChoose.map((item, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 14, padding: "28px", display: "flex", gap: 18, alignItems: "flex-start", transition: "all 0.3s" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(25,103,210,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={`fas ${item.icon}`} style={{ color: "#1967D2", fontSize: "1.1rem" }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#0F172A", fontSize: "0.95rem", marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRAM PELATIHAN HEADER ── */}
        <section id="programs" style={{ padding: "80px 0 40px", background: "linear-gradient(135deg, #001F5B, #0D2461)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#fff", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
              <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
              Kurikulum Kami
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
              Program<br /><span style={{ color: "#F5A623" }}>Pelatihan</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
              4 program pelatihan dirancang bersama praktisi industri untuk memenuhi standar kompetensi aviasi nasional dan internasional.
            </p>
          </div>
        </section>

        {/* ── PROGRAM CARDS ── */}
        {programs.map((prog, idx) => (
          <section
            key={prog.id}
            style={{ padding: "80px 0", background: idx % 2 === 0 ? "#fff" : "#F8FAFC", borderTop: "1px solid #E2E8F0" }}
          >
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "center" }}>
                {/* Content — alternating sides */}
                <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <span style={{ fontFamily: "var(--font-poppins)", fontSize: "3rem", fontWeight: 900, color: "#E2E8F0", lineHeight: 1 }}>{prog.tag}</span>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: prog.bgColor, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className={`fas ${prog.icon}`} style={{ color: prog.color, fontSize: "1.2rem" }} />
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, marginBottom: 16 }}>
                    {prog.title}
                  </h3>
                  <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: 28 }}>{prog.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px" }}>
                    {prog.items?.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#475569", fontSize: "0.875rem" }}>
                        <i className="fas fa-check-circle" style={{ color: prog.color, fontSize: "0.85rem", marginTop: 2, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact-training"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28, background: prog.color, color: "#fff", fontWeight: 600, padding: "12px 24px", borderRadius: 10, fontSize: "0.88rem" }}
                  >
                    Daftar Program Ini <i className="fas fa-arrow-right" />
                  </a>
                </div>
                {/* Image */}
                <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                  <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
                    <Image src={prog.imageUrl} alt={prog.imageAlt} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: 16, left: 16, background: prog.color, color: "#fff", padding: "6px 14px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {prog.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── FASILITAS ── */}
        <section id="fasilitas" style={{ padding: "100px 0", background: "linear-gradient(135deg, #010D2E, #001F5B)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -200, right: -200, width: 500, height: 500, borderRadius: "50%", background: "rgba(74,158,245,0.05)" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#fff", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
                <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
                Infrastruktur
              </span>
              <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: 16 }}>
                Fasilitas Kami
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
                Didukung fasilitas modern dan lengkap untuk memastikan kualitas pelatihan yang optimal.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {facilities.map((f, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "28px" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(74,158,245,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <i className={`fas ${f.icon}`} style={{ color: "#4A9EF5", fontSize: "1.1rem" }} />
                  </div>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERTIFIKAT ── */}
        <section id="sertifikat" style={{ padding: "100px 0", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "center" }}>
              <div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#1967D2", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
                  <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
                  Pengakuan Industri
                </span>
                <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, marginBottom: 20 }}>
                  Sertifikat Diakui Industri
                </h2>
                <p style={{ color: "#475569", lineHeight: 1.85, marginBottom: 28 }}>
                  Setiap peserta yang menyelesaikan program pelatihan akan mendapatkan sertifikat kompetensi yang diakui oleh industri penerbangan nasional dan sesuai dengan regulasi otoritas penerbangan Indonesia.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { icon: "fa-certificate", text: "Sertifikat Kompetensi Keahlian", sub: "Diakui oleh industri aviasi nasional" },
                    { icon: "fa-file-contract", text: "Sertifikat Kelulusan Pelatihan", sub: "Diterbitkan oleh MAP Training Center" },
                    { icon: "fa-id-card", text: "Kartu Tanda Peserta", sub: "Valid selama masa pelatihan berlangsung" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px", background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0" }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(245,166,35,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <i className={`fas ${item.icon}`} style={{ color: "#F5A623" }} />
                      </div>
                      <div>
                        <strong style={{ display: "block", color: "#0F172A", fontSize: "0.9rem" }}>{item.text}</strong>
                        <span style={{ color: "#64748B", fontSize: "0.82rem" }}>{item.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Certificate mockup */}
              <div>
                <div style={{ background: "linear-gradient(135deg, #001F5B, #1967D2)", borderRadius: 16, padding: "40px", textAlign: "center", boxShadow: "0 24px 60px rgba(0,31,91,0.25)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -40, right: -40, width: 150, height: 150, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
                  <div style={{ position: "absolute", bottom: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(245,166,35,0.1)" }} />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <Image src="/LOGO MAP NO BACKGROUND.png" alt="MAP Logo" width={80} height={80} style={{ height: 64, width: "auto", margin: "0 auto 20px" }} />
                    <div style={{ color: "#F5A623", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Sertifikat Kompetensi</div>
                    <h3 style={{ color: "#fff", fontFamily: "var(--font-poppins)", fontSize: "1.3rem", fontWeight: 800, marginBottom: 8 }}>MAP Training Center</h3>
                    <div style={{ height: 1, background: "rgba(255,255,255,0.2)", margin: "20px 0" }} />
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", lineHeight: 1.7 }}>
                      Diberikan kepada peserta yang telah menyelesaikan program pelatihan dengan hasil memuaskan dan memenuhi standar kompetensi yang ditetapkan.
                    </p>
                    <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 12 }}>
                      <i className="fas fa-medal" style={{ color: "#F5A623", fontSize: "1.5rem" }} />
                      <i className="fas fa-star" style={{ color: "#F5A623", fontSize: "1.5rem" }} />
                      <i className="fas fa-medal" style={{ color: "#F5A623", fontSize: "1.5rem" }} />
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
            <Image
              src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1920&q=85"
              alt="Aviation"
              fill style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(1,13,46,0.92)" }} />
          </div>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
            <i className="fas fa-plane-departure" style={{ fontSize: "2.5rem", color: "#F5A623", marginBottom: 20, display: "block" }} />
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#fff", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
              <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
              Terima Kasih
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: 16 }}>
              Siap Bergabung dengan<br />MAP Training Center?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
              Hubungi kami sekarang untuk informasi pendaftaran, jadwal pelatihan, biaya program, dan kerja sama institusi. Tim kami siap membantu Anda.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="tel:+6283170293216"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, #F5A623, #e8941f)", color: "#001F5B", fontWeight: 700, padding: "14px 28px", borderRadius: 10, fontSize: "0.9rem" }}
              >
                <i className="fas fa-phone" /> +62 831 7029 3216
              </a>
              <a
                href="mailto:mawaddahangkasaprima@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "2px solid rgba(255,255,255,0.35)", color: "#fff", fontWeight: 600, padding: "14px 28px", borderRadius: 10, fontSize: "0.9rem" }}
              >
                <i className="fas fa-envelope" /> Email Kami
              </a>
              <Link
                href="/"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.1)", color: "#fff", fontWeight: 600, padding: "14px 28px", borderRadius: 10, fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.15)" }}
              >
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
