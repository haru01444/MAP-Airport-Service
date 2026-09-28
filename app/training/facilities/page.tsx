import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroBgSlider from "../../components/HeroBgSlider";
import TrainingContactSection from "../components/TrainingContactSection";

export const metadata: Metadata = {
  title: "Fasilitas MAP Training Center | Sarana & Prasarana Diklat Aviasi",
  description:
    "Fasilitas lengkap dan modern MAP Training Center: Perpustakaan, Ruang Kelas Multimedia, Ruang Kantor, Asrama Peserta, dan Mushola untuk mendukung pembelajaran aviasi profesional.",
  keywords: [
    "fasilitas map training center",
    "sarana diklat aviasi",
    "asrama sekolah penerbangan",
    "ruang kelas aviasi bogor",
    "fasilitas pelatihan ground handling",
  ],
};

const detailedFacilities = [
  {
    id: "perpustakaan",
    num: "01",
    tag: "01 • PUSAT LITERATUR & REGULASI",
    title: "Perpustakaan & Ruang Baca Aviasi",
    desc: "Pusat sumber belajar yang menyediakan ratusan koleksi buku kejuruan penerbangan, regulasi keselamatan resmi, manual operasional ground handling, dan modul diklat berstandar internasional.",
    image: "/facilities/01-perpustakaan.jpg",
    specs: [
      "Koleksi manual regulasi CASR, ICAO, IATA, dan DJPU Kemenhub RI",
      "Buku & modul teknis Aircraft Maintenance, GSE, AVSEC & Cabin Crew",
      "Area baca tenang dengan meja studi kondusif untuk pengayaan materi",
      "Akses modul e-learning dan materi referensi penerbangan terkini",
    ],
  },
  {
    id: "ruang-kelas",
    num: "02",
    tag: "02 • RUANG PEMBELAJARAN MULTIMEDIA",
    title: "Ruang Kelas Modern & Ber-AC",
    desc: "Ruang pembelajaran teori yang didesain berpendingin udara penuh (Full AC) dengan proyektor multimedia resolusi tinggi, sound system jernih, dan fasilitas Computer-Based Testing (CBT) untuk simulasi ujian lisensi.",
    image: "/facilities/02-ruang-kelas.jpg",
    specs: [
      "Dilengkapi pendingin ruangan (AC) untuk kenyamanan belajar optimal",
      "Proyektor multimedia beresolusi tinggi & layar presentasi interaktif",
      "Dukungan laptop & komputer untuk simulasi ujian berbasis komputer (CBT)",
      "Kapasitas kelas ideal dengan tempat duduk ergonomis dan suasana fokus",
    ],
  },
  {
    id: "ruang-kantor-1",
    num: "03",
    tag: "03 • PELAYANAN & ADMINISTRASI",
    title: "Ruang Kantor 1 (Front Office & Manajemen)",
    desc: "Area kantor representatif yang berfungsi sebagai pusat layanan pendaftaran calon siswa, konsultasi program, administrasi akademik, dan pelayanan kemitraan maskapai penerbangan.",
    image: "/facilities/03-ruang-kantor-1.jpg",
    specs: [
      "Pusat informasi dan konsultasi pendaftaran siswa baru",
      "Pelayanan administrasi akademik, sertifikasi, dan legalitas diklat",
      "Ruang tunggu tamu dan orang tua siswa yang nyaman dan representatif",
      "Sistem pendataan dan kearsipan akademik terkomputerisasi",
    ],
  },
  {
    id: "ruang-kantor-2",
    num: "04",
    tag: "04 • KOORDINASI TIM & LOUNGE",
    title: "Ruang Kantor 2 (Ruang Kerja & Rapat Instruktur)",
    desc: "Ruang kerja dan koordinasi yang nyaman untuk mendukung briefing harian instruktur praktisi, evaluasi kurikulum, rapat kemitraan industri, dan koordinasi staf akademik.",
    image: "/facilities/04-ruang-kantor-2.jpg",
    specs: [
      "Area sofa lounge untuk diskusi tim dan konsultasi bimbingan siswa",
      "Ruang rapat instruktur untuk penyusunan materi & evaluasi belajar",
      "Fasilitas kerja modern terhubung jaringan internet berkecepatan tinggi",
      "Suasana profesional yang mendukung kolaborasi dan koordinasi optimal",
    ],
  },
  {
    id: "asrama",
    num: "05",
    tag: "05 • AKOMODASI & TEMPAT TINGGAL",
    title: "Asrama Peserta Pelatihan (Dormitory)",
    desc: "Fasilitas akomodasi hunian yang bersih, aman, dan berlokasi strategis di lingkungan kampus diklat untuk mendukung kedisiplinan, istirahat yang cukup, dan kenyamanan peserta dari luar kota.",
    image: "/facilities/05-asrama.jpg",
    specs: [
      "Lingkungan asrama asri, bersih, dan aman dengan pengawasan 24 jam",
      "Kamar tidur dengan ventilasi baik, ranjang representatif, dan loker",
      "Akses sangat dekat ke ruang kelas, mushola, dan area simulasi",
      "Sarana pembentukan karakter mandiri, kedisiplinan, dan jiwa korsa aviasi",
    ],
  },
  {
    id: "mushola",
    num: "06",
    tag: "06 • SARANA IBADAH",
    title: "Mushola Representatif",
    desc: "Sarana ibadah yang bersih, wangi, dan tertata rapi untuk menunjang ibadah harian serta pembinaan nilai spiritual dan integritas moral peserta pelatihan MAP Training Center.",
    image: "/facilities/06-mushola.jpg",
    specs: [
      "Karpet sajadah tebal, bersih, wangi, dan senantiasa terawat",
      "Area tempat wudhu terpisah dengan suplai air bersih yang lancar",
      "Tersedia perlengkapan ibadah lengkap dan rak Al-Qur'an",
      "Suasana hening dan khusyuk untuk mendukung ibadah berjamaah",
    ],
  },
];

export default function TrainingFacilitiesPage() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", color: "#0F172A" }}>
      {/* ── 1. NAVBAR ── */}
      <Navbar />

      <main style={{ paddingTop: 0 }}>
        {/* ── 2. HERO BANNER ── */}
        <section
          className="facilities-hero-section"
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
                "  .facilities-hero-section { min-height: 45vh !important; padding: 110px 0 50px !important; }",
                "  .facilities-hero-h1 { font-size: 28px !important; line-height: 1.2 !important; margin-bottom: 12px !important; }",
                "  .facilities-hero-desc { font-size: 13.5px !important; line-height: 1.6 !important; margin-bottom: 0 !important; }",
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
              SARANA &amp; INFRASTRUKTUR
            </span>
            <h1
              className="facilities-hero-h1"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 22,
              }}
            >
              Fasilitas MAP Training Center
            </h1>
            <p
              className="facilities-hero-desc"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                maxWidth: 780,
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Kami menyediakan fasilitas pelatihan yang lengkap, modern, dan nyaman untuk mendukung proses belajar mengajar yang efektif, kondusif, dan profesional.
            </p>
          </div>
        </section>

        {/* ── 3. OVERVIEW BANNER ── */}
        <section style={{ padding: "70px 0 50px", background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
              }}
            >
              {[
                {
                  icon: "fa-laptop-code",
                  title: "Teknologi Modern",
                  desc: "Dilengkapi perangkat multimedia dan sistem Computer-Based Test (CBT).",
                },
                {
                  icon: "fa-building-shield",
                  title: "Aman & Nyaman",
                  desc: "Lingkungan belajar ber-AC, asrama bersih, dan keamanan 24 jam.",
                },
                {
                  icon: "fa-book-open-reader",
                  title: "Literatur Lengkap",
                  desc: "Modul pelatihan, CASR, ICAO, IATA, dan regulasi resmi DJPU.",
                },
                {
                  icon: "fa-map-location-dot",
                  title: "Lokasi Strategis",
                  desc: "Akses mudah di Sentul Village, Kab. Bogor dengan udara yang asri.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 8,
                    padding: "24px 20px",
                    boxShadow: "0 2px 10px rgba(0, 31, 91, 0.03)",
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 8,
                      background: "rgba(25, 103, 210, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1967D2",
                      fontSize: "1.1rem",
                      marginBottom: 16,
                    }}
                  >
                    <i className={`fas ${item.icon}`} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", fontWeight: 700, color: "#001F5B", margin: "0 0 6px 0" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. DETAILED FACILITIES SHOWCASE ── */}
        <div id="daftar-fasilitas">
          {detailedFacilities.map((fac, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <section
                key={fac.id}
                id={fac.id}
                style={{
                  padding: "90px 0",
                  background: isEven ? "#FFFFFF" : "#F8FAFC",
                  borderBottom: "1px solid #E2E8F0",
                  scrollMarginTop: "80px",
                }}
              >
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
                      gap: 56,
                      alignItems: "center",
                    }}
                  >
                    {/* Text Column */}
                    <div style={{ order: isEven ? 0 : 1 }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block" }} />
                        <span
                          style={{
                            color: "#1967D2",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                          }}
                        >
                          {fac.tag}
                        </span>
                      </div>

                      <h2
                        style={{
                          fontFamily: "var(--font-poppins)",
                          fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
                          fontWeight: 800,
                          color: "#001F5B",
                          lineHeight: 1.25,
                          marginBottom: 16,
                        }}
                      >
                        {fac.title}
                      </h2>

                      <p
                        style={{
                          color: "#475569",
                          fontSize: "0.95rem",
                          lineHeight: 1.8,
                          marginBottom: 28,
                        }}
                      >
                        {fac.desc}
                      </p>

                      {/* Specs Checklist */}
                      <div
                        style={{
                          background: isEven ? "#F8FAFC" : "#FFFFFF",
                          border: "1px solid #E2E8F0",
                          borderRadius: 8,
                          padding: "20px 22px",
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
                          SPESIFIKASI &amp; KEUNGGULAN
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          {fac.specs.map((spec, sIdx) => (
                            <div key={sIdx} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                              <div
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: 4,
                                  background: "#EFF6FF",
                                  border: "1px solid #DBEAFE",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "#1967D2",
                                  fontSize: "0.72rem",
                                  flexShrink: 0,
                                  marginTop: 2,
                                }}
                              >
                                <i className="fas fa-check" />
                              </div>
                              <span style={{ color: "#1E293B", fontSize: "0.88rem", lineHeight: 1.55, fontWeight: 500 }}>
                                {spec}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Image Column */}
                    <div style={{ order: isEven ? 1 : 0 }}>
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "4/3",
                          borderRadius: 12,
                          overflow: "hidden",
                          boxShadow: "0 16px 40px rgba(0, 31, 91, 0.08)",
                          border: "1px solid #E2E8F0",
                          background: "#F1F5F9",
                        }}
                      >
                        <Image
                          src={fac.image}
                          alt={fac.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 550px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ── 5. KONTAK & PENDAFTARAN ── */}
        <TrainingContactSection />
      </main>

      {/* ── 6. FOOTER ── */}
      <Footer />
    </div>
  );
}
