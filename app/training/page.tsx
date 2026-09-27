import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBgSlider from "../components/HeroBgSlider";

export const metadata: Metadata = {
  title: "MAP Training Center : Pusat Pelatihan Aviasi Indonesia",
  description:
    "MAP Training Center menyediakan program pelatihan Aircraft Maintenance, GSE, Aviation Security (AVSEC), dan Pramugari/Pramugara berstandar internasional.",
};

/* ─────────────── DATA ─────────────── */

const whyChoose = [
  {
    icon: "fa-award",
    title: "Bersertifikat Resmi",
    desc: "Program pelatihan tersertifikasi dan diakui oleh otoritas & industri penerbangan nasional.",
    featured: true,
    tag: "Keunggulan Utama",
  },
  {
    icon: "fa-user-tie",
    title: "Instruktur Berpengalaman",
    desc: "Dibimbing langsung oleh praktisi aviasi aktif dengan pengalaman puluhan ribu jam operasional.",
    featured: false,
  },
  {
    icon: "fa-plane-departure",
    title: "Kurikulum Industri",
    desc: "Materi disesuaikan dengan standar ICAO, DJPU, dan kebutuhan terkini dunia penerbangan.",
    featured: false,
  },
  {
    icon: "fa-handshake",
    title: "Jaringan Ekosistem MAP",
    desc: "Terhubung langsung dengan jaringan penempatan & mitra maskapai di berbagai bandara.",
    featured: false,
  },
  {
    icon: "fa-flask",
    title: "Fasilitas & Lab Modern",
    desc: "Didukung simulator, lab praktek GSE, dan alat pendukung berstandar bandara aktif.",
    featured: false,
  },
  {
    icon: "fa-chart-line",
    title: "Prospek Karir Terarah",
    desc: "Bimbingan karir, pembentukan karakter profesional, dan koneksi industri pasca kelulusan.",
    featured: false,
  },
];

const programs = [
  {
    id: "aircraft",
    tag: "AIRCRAFT MAINTENANCE",
    code: "AMC-01",
    title: "Aircraft Maintenance",
    desc: "Program pelatihan perawatan & pemeliharaan teknis pesawat udara komprehensif, mencakup kelayakan terbang, inspeksi komponen, dan keselamatan di area ramp & hangar.",
    duration: "Intensif • 6 Bulan",
    targetCareer: "Technician & Line Maintenance",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Aircraft Maintenance Training MAP Center",
  },
  {
    id: "gse",
    tag: "GSE OPERATIONS",
    code: "GSE-02",
    title: "Ground Support Equipment (GSE)",
    desc: "Pelatihan operasional, pengemudian, dan perawatan armada Ground Support Equipment untuk menjamin ketepatan waktu turn-around time penerbangan di apron.",
    duration: "Intensif • 3 Bulan",
    targetCareer: "GSE Operator & Pushback Driver",
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "GSE Training MAP Center",
  },
  {
    id: "avsec",
    tag: "AVIATION SECURITY",
    code: "SEC-03",
    title: "Aviation Security (AVSEC)",
    desc: "Pelatihan keamanan penerbangan sesuai standar ICAO Annex 17 dan regulasi Ditjen Hubud RI untuk pengamanan area terbatas bandara.",
    duration: "Lisensi AVSEC • 4 Bulan",
    targetCareer: "AVSEC Officer & Cargo Screener",
    imageUrl:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Aviation Security Training MAP Center",
  },
  {
    id: "pramugari",
    tag: "CABIN CREW SERVICES",
    code: "CAB-04",
    title: "Pramugari / Pramugara",
    desc: "Program pembentukan calon Cabin Crew profesional bersikap ramah, tanggap darurat, dan berstandar pelayanan prima maskapai internasional.",
    duration: "Siap Kerja • 4 Bulan",
    targetCareer: "Flight Attendant & Cabin Crew",
    imageUrl: "/pramugara_training.jpg",
    imageAlt: "Pramugari Training MAP Center",
  },
];

const facilities = [
  {
    icon: "fa-display",
    title: "Ruang Kelas Audio Visual",
    desc: "Multimedia modern, pendingin udara, dan akses e-learning untuk kenyamanan studi.",
  },
  {
    icon: "fa-wrench",
    title: "Lab Praktek GSE Operasional",
    desc: "Area simulasi lapangan dengan unit GSE nyata untuk latihan prosedur ramp side.",
  },
  {
    icon: "fa-shield",
    title: "Simulator Checkpoint AVSEC",
    desc: "Dilengkapi X-Ray scanner, WTMD, dan HHMD sesuai standar checkpoint bandara.",
  },
  {
    icon: "fa-person-rays",
    title: "Studio Grooming & Mockup Cabin",
    desc: "Fasilitas latihan penampilan profesional, postur, dan tata rias standar awak kabin.",
  },
  {
    icon: "fa-wifi",
    title: "Perpustakaan & Regulasi Aviasi",
    desc: "Akses modul pelatihan, manual CASR/ICAO, e-book, dan literatur penerbangan terkini.",
  },
  {
    icon: "fa-users-line",
    title: "Aula Seminar & Uji Kompetensi",
    desc: "Ruang serbaguna untuk orientasi industri, workshop, dan evaluasi sertifikasi.",
  },
];

/* ─────────────── PAGE COMPONENT ─────────────── */

export default function TrainingPage() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <Navbar />

      <main>
        {/* ── HERO SECTION ── */}
        <section
          className="training-hero-section"
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
                ".training-programs-2x2-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }",
                ".training-program-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; box-shadow: 0 4px 16px rgba(0, 31, 91, 0.04); }",
                ".training-program-card:hover { transform: translateY(-6px); border-color: #1967D2; box-shadow: 0 16px 36px rgba(0, 31, 91, 0.1); }",
                ".training-program-card:hover .training-card-img { transform: scale(1.06); }",
                "@media (max-width: 900px) {",
                "  .training-hero-section { min-height: 45vh !important; padding: 110px 0 50px !important; }",
                "  .training-hero-h1 { font-size: 28px !important; line-height: 1.2 !important; margin-bottom: 12px !important; }",
                "  .training-hero-desc { font-size: 13.5px !important; line-height: 1.6 !important; margin-bottom: 0 !important; }",
                "  .training-programs-header-grid { grid-template-columns: 1fr !important; gap: 16px !important; }",
                "  .training-programs-2x2-grid { grid-template-columns: 1fr !important; gap: 20px !important; }",
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
              PUSAT PELATIHAN &amp; DIKLAT AVIASI
            </span>
            <h1
              className="training-hero-h1"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 22,
              }}
            >
              MAP Training Center
            </h1>
            <p
              className="training-hero-desc"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                maxWidth: 740,
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Mencetak personel aviasi siap kerja dan bersertifikat resmi untuk kebutuhan Aircraft Maintenance, GSE, Aviation Security (AVSEC), dan Cabin Crew.
            </p>
          </div>
        </section>

        {/* ── PROGRAM PELATIHAN (2x2 GRID DENGAN HEADER SUMMARY) ── */}
        <section id="programs" style={{ padding: "90px 0", background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            
            {/* Header Layout: Title on Left, Summary on Right */}
            <div
              className="training-programs-header-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: 40,
                alignItems: "end",
                marginBottom: 48,
              }}
            >
              <div>
                {/* Eyebrow according to AGENTS.md rule */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block" }} />
                  <span
                    style={{
                      color: "#1967D2",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    PROGRAM PELATIHAN UTAMA
                  </span>
                </div>
                <h2
                  className="training-section-h2"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)",
                    fontWeight: 800,
                    color: "#0F172A",
                    lineHeight: 1.25,
                    margin: 0,
                  }}
                >
                  Program Pelatihan Aviasi<br />
                  Terpadu &amp; Berstandar Industri
                </h2>
              </div>

              <div>
                <p
                  style={{
                    color: "#475569",
                    fontSize: "0.98rem",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  Mencetak SDM penerbangan profesional bersertifikat resmi untuk memenuhi kebutuhan operasional maskapai dan ekosistem bandara nasional maupun internasional.
                </p>
              </div>
            </div>

            {/* 2x2 Grid Cards (Static 4 cards, NOT horizontal scrollable) */}
            <div className="training-programs-2x2-grid">
              {programs.map((prog) => (
                <div key={prog.id} className="training-program-card">
                  {/* Card Image */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16/10",
                      overflow: "hidden",
                      background: "#001F5B",
                    }}
                  >
                    <Image
                      src={prog.imageUrl}
                      alt={prog.imageAlt}
                      fill
                      className="training-card-img"
                      style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: "24px 22px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                    <div>
                      {/* Tag / Category */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                        <span
                          style={{
                            color: "#1967D2",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {prog.tag}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: 600 }}>
                          {prog.code}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "var(--font-poppins)",
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#0F172A",
                          lineHeight: 1.35,
                          marginBottom: 10,
                        }}
                      >
                        {prog.title}
                      </h3>

                      {/* Summary Explanation */}
                      <p
                        style={{
                          color: "#475569",
                          fontSize: "0.88rem",
                          lineHeight: 1.6,
                          marginBottom: 20,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {prog.desc}
                      </p>
                    </div>

                    {/* Footer Row inside Card */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 16,
                        borderTop: "1px solid #F1F5F9",
                      }}
                    >
                      <span style={{ fontSize: "0.82rem", color: "#334155", fontWeight: 600 }}>
                        <i className="fas fa-clock" style={{ marginRight: 6, color: "#1967D2" }} />
                        {prog.duration}
                      </span>
                      <a
                        href="#contact-training"
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 700,
                          color: "#1967D2",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        Daftar <i className="fas fa-arrow-right" style={{ fontSize: "0.75rem" }} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── MENGAPA MEMILIH (FEATURED GRID) ── */}
        <section style={{ padding: "100px 0", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div
                className="training-eyebrow-light"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                  justifyContent: "center",
                }}
              >
                <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block" }} />
                <span
                  className="training-eyebrow-text"
                  style={{
                    color: "#1967D2",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  KEUNGGULAN KAMI
                </span>
              </div>
              <h2
                className="training-section-h2"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
                  fontWeight: 900,
                  color: "#0F172A",
                  lineHeight: 1.2,
                }}
              >
                Mengapa Mengikuti Diklat di<br />
                MAP Training Center?
              </h2>
            </div>

            {/* Asymmetric Featured Layout Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                gap: 24,
              }}
            >
              {whyChoose.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: item.featured ? "linear-gradient(135deg, #001F5B 0%, #082567 100%)" : "#F8FAFC",
                    color: item.featured ? "#fff" : "#0F172A",
                    border: item.featured ? "1px solid #001F5B" : "1px solid #E2E8F0",
                    borderRadius: 20,
                    padding: "36px 30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <div>
                    {item.tag && (
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          background: "#F5A623",
                          color: "#001F5B",
                          padding: "4px 12px",
                          borderRadius: 100,
                          display: "inline-block",
                          marginBottom: 20,
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: item.featured ? "rgba(245,166,35,0.15)" : "#E0F2FE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                      }}
                    >
                      <i
                        className={`fas ${item.icon}`}
                        style={{ color: item.featured ? "#F5A623" : "#1967D2", fontSize: "1.2rem" }}
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        marginBottom: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: item.featured ? "rgba(255,255,255,0.8)" : "#64748B",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FASILITAS ── */}
        <section id="fasilitas" style={{ padding: "100px 0", background: "#001F5B", color: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div
                className="training-eyebrow-dark"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
                  justifyContent: "center",
                }}
              >
                <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block" }} />
                <span
                  className="training-eyebrow-text"
                  style={{
                    color: "#4A9EF5",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  INFRASTRUKTUR PELATIHAN
                </span>
              </div>
              <h2 className="training-section-h2" style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(2rem, 3.2vw, 2.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: 16 }}>
                Fasilitas &amp; Lab Diklat
              </h2>
              <p className="training-section-desc" style={{ color: "rgba(255,255,255,0.8)", maxWidth: 550, margin: "0 auto", lineHeight: 1.7, fontSize: "0.95rem" }}>
                Sarana pembelajaran komprehensif untuk menunjang pemahaman teori dan keahlian praktik peserta.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
              {facilities.map((f, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 18,
                    padding: "32px 28px",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(245,166,35,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <i className={`fas ${f.icon}`} style={{ color: "#F5A623", fontSize: "1.2rem" }} />
                  </div>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: 10, fontFamily: "var(--font-poppins)" }}>
                    {f.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERTIFIKAT PREVIEW ── */}
        <section id="sertifikat" style={{ padding: "100px 0", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 56, alignItems: "center" }}>
              <div>
                <div
                  className="training-eyebrow-light"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block" }} />
                  <span
                    className="training-eyebrow-text"
                    style={{
                      color: "#1967D2",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    PENGAKUAN &amp; LISENSI
                  </span>
                </div>
                <h2 className="training-section-h2" style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, marginBottom: 20 }}>
                  Sertifikat Kompetensi Diakui
                </h2>
                <p style={{ color: "#475569", lineHeight: 1.75, marginBottom: 32, fontSize: "0.95rem" }}>
                  Peserta yang dinyatakan lulus evaluasi akan menerima sertifikat resmi kualifikasi kompetensi untuk menunjang karir profesional di industri penerbangan.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { title: "Sertifikat Kompetensi Spesialisasi", sub: "Memuat daftar kualifikasi keahlian teknis peserta." },
                    { title: "Sertifikat Kelulusan Resmi", sub: "Diterbitkan langsung oleh MAP Training Center." },
                    { title: "Verifikasi Keabsahan", sub: "Dilengkapi sistem verifikasi nomor lisensi peserta." },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0" }}>
                      <i className="fas fa-certificate" style={{ color: "#F5A623", fontSize: "1.1rem", marginTop: 2 }} />
                      <div>
                        <strong style={{ color: "#0F172A", fontSize: "0.9rem", display: "block" }}>{item.title}</strong>
                        <span style={{ color: "#64748B", fontSize: "0.8rem" }}>{item.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Graphic Card */}
              <div style={{ background: "#001F5B", borderRadius: 20, padding: "36px 30px", color: "#fff", position: "relative" }}>
                <div style={{ border: "1px solid rgba(245,166,35,0.4)", borderRadius: 14, padding: "32px 24px", textAlign: "center" }}>
                  <span style={{ color: "#F5A623", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 12 }}>
                    SERTIFIKAT KOMPETENSI
                  </span>
                  <h3 style={{ color: "#fff", fontFamily: "Georgia, serif", fontSize: "1.8rem", margin: "0 0 16px 0" }}>
                    MAP Training Center
                  </h3>
                  <div style={{ height: 1, background: "rgba(255,255,255,0.15)", width: 60, margin: "0 auto 20px" }} />
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.82rem", lineHeight: 1.7, maxWidth: 300, margin: "0 auto 24px" }}>
                    Diberikan kepada lulusan yang telah memenuhi kualifikasi dan standar uji kompetensi aviasi.
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
                    <span>VERIFIED LICENCE</span>
                    <span>ID: MAP-2026-AVSEC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA BANNER ── */}
        <section id="contact-training" style={{ padding: "90px 0", background: "#010D2E", color: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
            <div
              className="training-eyebrow-dark"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
                justifyContent: "center",
              }}
            >
              <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block" }} />
              <span
                className="training-eyebrow-text"
                style={{
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                INFORMASI &amp; PENDAFTARAN
              </span>
            </div>

            <h2
              className="training-section-h2"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.25,
                marginBottom: 16,
              }}
            >
              Mulai Karir Aviasi Anda Bersama<br />
              <span style={{ color: "#F5A623" }}>MAP Training Center</span>
            </h2>

            <p
              className="training-section-desc"
              style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 36, maxWidth: 540, margin: "0 auto 36px" }}
            >
              Hubungi tim pendaftaran kami untuk jadwal gelombang diklat, persyaratan calon siswa, dan informasi lengkap program.
            </p>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="tel:+6283170293216"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "linear-gradient(135deg, #F5A623 0%, #e8941f 100%)",
                  color: "#001F5B",
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontSize: "0.9rem",
                }}
              >
                <i className="fas fa-phone" /> +62 831 7029 3216
              </a>
              <a
                href="mailto:mawaddahangkasaprima@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontSize: "0.9rem",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <i className="fas fa-envelope" /> Email Pendaftaran
              </a>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontSize: "0.9rem",
                }}
              >
                <i className="fas fa-plane" /> MAP Airport Service
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <Footer />
    </>
  );
}
