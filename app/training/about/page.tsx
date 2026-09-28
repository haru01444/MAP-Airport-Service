import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroBgSlider from "../../components/HeroBgSlider";
import TrainingContactSection from "../components/TrainingContactSection";

export const metadata: Metadata = {
  title: "Tentang MAP Training Center | PT Mawaddah Angkasa Prima",
  description:
    "Profil, visi, misi, dan keunggulan MAP Training Center: Pusat pengembangan kompetensi SDM aviasi dan ground handling berstandar internasional di Indonesia.",
  keywords: [
    "tentang map training center",
    "visi misi map training center",
    "diklat aviasi indonesia",
    "pusat pelatihan ground handling",
    "sekolah penerbangan bogor",
  ],
};

export default function TrainingAboutPage() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", color: "#0F172A" }}>
      {/* ── 1. NAVBAR ── */}
      <Navbar />

      <main style={{ paddingTop: 0 }}>
        {/* ── 2. HERO BANNER ── */}
        <section
          className="training-about-hero"
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
                "  .training-about-hero { min-height: 45vh !important; padding: 110px 0 50px !important; }",
                "  .training-about-h1 { font-size: 28px !important; line-height: 1.2 !important; margin-bottom: 12px !important; }",
                "  .training-about-desc { font-size: 13.5px !important; line-height: 1.6 !important; margin-bottom: 0 !important; }",
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
              PROFIL LEMBAGA
            </span>
            <h1
              className="training-about-h1"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 22,
              }}
            >
              Tentang MAP Training Center
            </h1>
            <p
              className="training-about-desc"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                maxWidth: 760,
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Lembaga pendidikan dan pelatihan kejuruan aviasi terpadu untuk mencetak tenaga profesional operasional bandara yang kompeten, bersertifikat, dan berdaya saing global.
            </p>
          </div>
        </section>

        {/* ── 3. OVERVIEW & BACKGROUND SECTION ── */}
        <section style={{ padding: "90px 0 60px", background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
                gap: 56,
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
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
                    LATAR BELAKANG
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)",
                    fontWeight: 800,
                    color: "#001F5B",
                    lineHeight: 1.25,
                    marginBottom: 20,
                  }}
                >
                  Pusat Pengembangan Kompetensi Dunia Penerbangan
                </h2>

                <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 20 }}>
                  MAP Training Center adalah unit pendidikan dan pelatihan kerja resmi yang dikembangkan oleh <strong>PT Mawaddah Angkasa Prima</strong>. Berbekal rekam jejak operasional ground handling dan aviation support di berbagai bandara utama Indonesia, kami menghadirkan kurikulum yang berorientasi langsung pada praktik kerja nyata.
                </p>

                <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 32 }}>
                  Setiap materi diklat disusun mengacu pada standar keselamatan penerbangan ICAO, IATA, dan regulasi Direktorat Jenderal Perhubungan Udara (DJPU) Kementerian Perhubungan RI, memastikan seluruh lulusan memiliki kualifikasi yang siap diserap oleh industri aviasi.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { title: "Instruktur Praktisi Aktif", desc: "Berpengalaman puluhan ribu jam terbang & operasional." },
                    { title: "Simulator & Fasilitas Nyata", desc: "Praktek dengan unit GSE dan checkpoint bandara riil." },
                    { title: "Sertifikasi Resmi", desc: "Lisensi kompetensi terakreditasi instansi berwenang." },
                    { title: "Penyaluran Karir", desc: "Terhubung jaringan mitra maskapai & ground operator MAP." },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: 8,
                        padding: "16px",
                      }}
                    >
                      <strong style={{ color: "#001F5B", fontSize: "0.9rem", display: "block", marginBottom: 4 }}>
                        {item.title}
                      </strong>
                      <span style={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.5, display: "block" }}>
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Photo Frame */}
              <div>
                <div
                  style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    position: "relative",
                    boxShadow: "0 16px 40px rgba(0, 31, 91, 0.08)",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1000&q=85"
                    alt="MAP Training Center Facility"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. VISI & MISI SECTION ── */}
        <section
          id="visi-misi"
          style={{
            padding: "80px 0 90px",
            background: "#F8FAFC",
            borderTop: "1px solid #E2E8F0",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: [
                "@media (max-width: 860px) {",
                "  .visi-misi-grid { grid-template-columns: 1fr !important; gap: 24px !important; }",
                "  .visi-card, .misi-card { padding: 24px 20px !important; }",
                "}",
              ].join("\n"),
            }}
          />

          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 12, justifyContent: "center" }}>
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
                  LANDASAN KAMI
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(1.9rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  color: "#001F5B",
                  margin: 0,
                }}
              >
                Visi &amp; Misi
              </h2>
            </div>

            {/* Symmetrical Dual Cards */}
            <div
              className="visi-misi-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.15fr",
                gap: 28,
                alignItems: "stretch",
              }}
            >
              {/* CARD 1: VISI */}
              <div
                className="visi-card"
                style={{
                  background: "#FFFFFF",
                  borderRadius: 8,
                  padding: "36px 32px",
                  border: "1px solid #E2E8F0",
                  borderTop: "3px solid #1967D2",
                  boxShadow: "0 4px 16px rgba(0, 31, 91, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 6,
                        background: "rgba(25, 103, 210, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#1967D2",
                        fontSize: "1rem",
                      }}
                    >
                      <i className="fas fa-eye" />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "1.35rem",
                        fontWeight: 800,
                        color: "#001F5B",
                        margin: 0,
                      }}
                    >
                      Visi
                    </h3>
                  </div>

                  <div
                    style={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderLeft: "4px solid #1967D2",
                      borderRadius: "0 6px 6px 0",
                      padding: "24px 20px",
                      marginBottom: 24,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1.02rem",
                        lineHeight: 1.75,
                        color: "#0F172A",
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      &ldquo;Menjadi pusat pelatihan aviasi terpercaya yang menghasilkan SDM profesional, kompeten, dan berdaya saing global.&rdquo;
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid #F1F5F9",
                    paddingTop: 20,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#64748B",
                      marginBottom: 12,
                    }}
                  >
                    Fokus Capaian
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Pusat pelatihan aviasi terpercaya di Indonesia",
                      "Standar kompetensi profesional & berkarakter",
                      "Kesiapan karir berdaya saing nasional & global",
                    ].map((point, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <i className="fas fa-check" style={{ color: "#1967D2", fontSize: "0.78rem" }} />
                        <span style={{ color: "#475569", fontSize: "0.86rem", fontWeight: 500 }}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CARD 2: MISI */}
              <div
                className="misi-card"
                style={{
                  background: "#FFFFFF",
                  borderRadius: 8,
                  padding: "36px 32px",
                  border: "1px solid #E2E8F0",
                  borderTop: "3px solid #F5A623",
                  boxShadow: "0 4px 16px rgba(0, 31, 91, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 6,
                      background: "rgba(245, 166, 35, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#F5A623",
                      fontSize: "1rem",
                    }}
                  >
                    <i className="fas fa-bullseye" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      color: "#001F5B",
                      margin: 0,
                    }}
                  >
                    Misi
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  {[
                    "Menyelenggarakan pendidikan dan pelatihan aviasi berkualitas sesuai standar industri.",
                    "Mengembangkan kompetensi, karakter, dan disiplin peserta secara berkelanjutan.",
                    "Menyediakan fasilitas modern dan lingkungan belajar yang kondusif.",
                    "Membangun kerja sama strategis dengan industri dan institusi terkait.",
                    "Mencetak SDM aviasi yang siap bersaing di tingkat nasional dan internasional.",
                  ].map((misi, idx, arr) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 14,
                        padding: "12px 0",
                        borderBottom: idx < arr.length - 1 ? "1px solid #F1F5F9" : "none",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "#1967D2",
                          background: "#F8FAFC",
                          border: "1px solid #E2E8F0",
                          borderRadius: 4,
                          width: 26,
                          height: 26,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        {idx + 1}
                      </span>
                      <p
                        style={{
                          margin: 0,
                          color: "#334155",
                          fontSize: "0.91rem",
                          lineHeight: 1.6,
                          fontWeight: 500,
                        }}
                      >
                        {misi}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. STATS BAR ── */}
        <section style={{ padding: "70px 0", background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                background: "#F8FAFC",
                borderRadius: 12,
                padding: "36px 32px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 24,
                border: "1px solid #E2E8F0",
              }}
            >
              {[
                { num: "7+", label: "Tahun Pengalaman", desc: "Rekam jejak ekosistem aviasi Indonesia." },
                { num: "4", label: "Program Spesialis", desc: "AMC, GSE, AVSEC & Cabin Crew." },
                { num: "4", label: "Kota Operasional", desc: "Jaringan operasional bandara MAP." },
                { num: "8+", label: "Mitra Industri", desc: "Kolaborasi maskapai & ground operator." },
              ].map((s, i) => (
                <div key={i} style={{ padding: "8px 12px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#1967D2",
                      lineHeight: 1,
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {s.num}
                  </span>
                  <span style={{ color: "#001F5B", fontSize: "0.92rem", fontWeight: 700, display: "block", marginBottom: 4 }}>
                    {s.label}
                  </span>
                  <span style={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.5, display: "block" }}>
                    {s.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. NAVIGATION CTA BUTTONS ── */}
        <section style={{ padding: "60px 0 90px", background: "#001F5B", color: "#fff", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 16,
              }}
            >
              Jelajahi Program &amp; Fasilitas Pelatihan
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 32 }}>
              Temukan informasi spesialisasi diklat, fasilitas lab, dan alur pendaftaran siswa baru MAP Training Center.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/training#programs"
                style={{
                  background: "#1967D2",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  padding: "12px 26px",
                  borderRadius: 6,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                Lihat Program Pelatihan
              </Link>
              <Link
                href="/training#contact-training"
                style={{
                  background: "#FFFFFF",
                  color: "#001F5B",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  padding: "12px 26px",
                  borderRadius: 6,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                Konsultasi Pendaftaran
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. KONTAK & PENDAFTARAN ── */}
        <TrainingContactSection />
      </main>

      {/* ── 8. FOOTER ── */}
      <Footer />
    </div>
  );
}
