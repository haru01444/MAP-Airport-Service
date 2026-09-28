import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import HeroBgSlider from "../../../components/HeroBgSlider";
import TrainingContactSection from "../../components/TrainingContactSection";
import { trainingPrograms, TrainingProgramItem } from "../../../data/trainingData";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const program = trainingPrograms.find(
    (p) => p.id === id || p.slug === id
  );

  if (!program) {
    return { title: "Program Pelatihan Tidak Ditemukan — MAP Training Center" };
  }

  return {
    title: `${program.title} (${program.code}) — MAP Training Center`,
    description: program.desc,
  };
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { id } = await params;
  const program = trainingPrograms.find(
    (p) => p.id === id || p.slug === id
  );

  if (!program) {
    notFound();
  }

  const relatedPrograms = trainingPrograms.filter(
    (p) => p.id !== program.id
  );

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", color: "#0F172A" }}>
      {/* ── NAVBAR ── */}
      <Navbar />

      <main style={{ paddingTop: 0 }}>
        {/* ── HERO BANNER ── */}
        <section
          style={{
            position: "relative",
            minHeight: "48vh",
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
          <HeroBgSlider
            overlayGradient="linear-gradient(180deg, rgba(1, 13, 46, 0.75) 0%, rgba(13, 36, 97, 0.6) 50%, rgba(1, 13, 46, 0.8) 100%)"
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 1100,
              margin: "0 auto",
              padding: "0 24px",
              width: "100%",
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block" }} />
              <span
                style={{
                  color: "#4A9EF5",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {program.code} • {program.tag}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              {program.title}
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.88)",
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                maxWidth: 760,
                margin: "0 auto 28px",
                lineHeight: 1.75,
              }}
            >
              {program.desc}
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", padding: "8px 18px", borderRadius: 8, fontSize: "0.85rem", color: "#fff", fontWeight: 600 }}>
                <i className="fas fa-clock" style={{ marginRight: 8, color: "#F5A623" }} />
                Durasi: {program.duration}
              </div>
              <div style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", padding: "8px 18px", borderRadius: 8, fontSize: "0.85rem", color: "#fff", fontWeight: 600 }}>
                <i className="fas fa-certificate" style={{ marginRight: 8, color: "#F5A623" }} />
                Sertifikat Resmi Kompetensi
              </div>
            </div>
          </div>
        </section>

        {/* ── PROGRAM CONTENT ── */}
        <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            
            {/* Back Button & Navigation */}
            <div style={{ marginBottom: 36 }}>
              <Link
                href="/training"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#001F5B",
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  padding: "9px 18px",
                  borderRadius: 8,
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <i className="fas fa-arrow-left" /> Kembali ke Program Pelatihan
              </Link>
            </div>

            {/* Main Section Grid: Image & Overview */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
                gap: 48,
                alignItems: "center",
                marginBottom: 72,
              }}
            >
              {/* Image Frame */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/11",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 16px 40px rgba(0, 31, 91, 0.08)",
                  border: "1px solid #E2E8F0",
                  background: "#001F5B",
                }}
              >
                <Image
                  src={program.imageUrl}
                  alt={program.imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              {/* Text Description */}
              <div>
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
                    PENJELASAN PROGRAM
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "clamp(1.7rem, 3vw, 2.2rem)",
                    fontWeight: 800,
                    color: "#0F172A",
                    lineHeight: 1.3,
                    marginBottom: 18,
                  }}
                >
                  Tentang Diklat {program.title}
                </h2>

                <p
                  style={{
                    color: "#475569",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    marginBottom: 24,
                  }}
                >
                  {program.fullDesc}
                </p>

                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: 12,
                    padding: "20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <i className="fas fa-user-tie" style={{ color: "#1967D2", fontSize: "1rem" }} />
                    <span style={{ fontSize: "0.88rem", color: "#334155" }}>
                      <strong>Target Karir:</strong> {program.targetCareer}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <i className="fas fa-clock" style={{ color: "#1967D2", fontSize: "1rem" }} />
                    <span style={{ fontSize: "0.88rem", color: "#334155" }}>
                      <strong>Sistem Belajar:</strong> Kelas Teori Audio-Visual &amp; Simulasi Praktik Lapangan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── KURIKULUM & MATERI PELATIHAN ── */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ marginBottom: 32 }}>
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
                    MATERI PELATIHAN
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)",
                    fontWeight: 800,
                    color: "#0F172A",
                    margin: 0,
                  }}
                >
                  Kurikulum &amp; Modul Utama
                </h3>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 310px), 1fr))",
                  gap: 20,
                }}
              >
                {program.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderRadius: 12,
                      padding: "20px 22px",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "rgba(25, 103, 210, 0.1)",
                        color: "#1967D2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className={`fas ${item.icon}`} style={{ fontSize: "1.1rem" }} />
                    </div>
                    <span style={{ color: "#0F172A", fontWeight: 600, fontSize: "0.92rem", lineHeight: 1.4 }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── PERSYARATAN PESERTA ── */}
            <div style={{ marginBottom: 72, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 16, padding: "36px 32px" }}>
              <div style={{ marginBottom: 24 }}>
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
                    PERSYARATAN DIKLAT
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                    fontWeight: 800,
                    color: "#0F172A",
                    margin: 0,
                  }}
                >
                  Kualifikasi Calon Peserta
                </h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 16 }}>
                {program.requirements.map((req, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#10B981", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", flexShrink: 0, marginTop: 2 }}>
                      ✓
                    </div>
                    <span style={{ color: "#334155", fontSize: "0.92rem", lineHeight: 1.6, fontWeight: 500 }}>
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── FORM & REGISTRATION CTA ── */}
            <div id="contact-training" style={{ background: "#010D2E", color: "#fff", borderRadius: 20, padding: "48px 36px", textAlign: "center", marginBottom: 72 }}>
              <span style={{ color: "#F5A623", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: 12 }}>
                PENDAFTARAN GELOMBANG DIBUKA
              </span>
              <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
                Daftar Program {program.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", maxWidth: 580, margin: "0 auto 32px", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Hubungi panitia pendaftaran MAP Training Center untuk konfirmasi jadwal gelombang diklat, konsultasi karir, dan penyerahan berkas.
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
                    textDecoration: "none",
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
                    textDecoration: "none",
                  }}
                >
                  <i className="fas fa-envelope" /> Email Pendaftaran
                </a>
              </div>
            </div>

            {/* ── PROGRAM PELATIHAN LAINNYA ── */}
            <div>
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
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
                    PROGRAM LAINNYA
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                    fontWeight: 800,
                    color: "#0F172A",
                    margin: 0,
                  }}
                >
                  Pilihan Program Diklat Lainnya
                </h3>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                  gap: 24,
                }}
              >
                {relatedPrograms.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/training/programs/${rel.id}`}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: 12,
                      border: "1px solid #E2E8F0",
                      overflow: "hidden",
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 4px 16px rgba(0,31,91,0.03)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", overflow: "hidden", background: "#001F5B" }}>
                      <Image src={rel.imageUrl} alt={rel.imageAlt} fill style={{ objectFit: "cover" }} />
                    </div>

                    <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                      <div>
                        <span style={{ color: "#1967D2", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                          {rel.tag}
                        </span>
                        <h4 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.1rem", fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>
                          {rel.title}
                        </h4>
                        <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.5, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                          {rel.desc}
                        </p>
                      </div>

                      <div style={{ paddingTop: 12, borderTop: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "0.8rem", color: "#475569", fontWeight: 600 }}>{rel.duration}</span>
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1967D2" }}>Lihat Detail →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── KONTAK & PENDAFTARAN ── */}
        <TrainingContactSection />
      </main>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
