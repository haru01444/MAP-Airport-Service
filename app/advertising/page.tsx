import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import AdvertisingContactForm from "./AdvertisingContactForm";

export const metadata: Metadata = {
  title: "Airport Advertising — Pasang Iklan di Shuttle Bus Bandara | MAP",
  description:
    "Advertise Where Your Audience Travels. Layanan airport shuttle bus advertising di 6 armada bandara MAP di Soekarno-Hatta (CGK), Juanda (SUB), Kualanamu (KNO), dan Hasanuddin (UPG).",
  keywords: [
    "airport advertising indonesia",
    "iklan bus bandara",
    "shuttle bus advertising",
    "apron bus branding",
    "media iklan bandara",
    "pasang iklan bandara soekarno hatta",
    "iklan bandara juanda",
    "outdoor advertising bandara",
    "MAP advertising",
  ],
};

const audiencePoints = [
  {
    icon: "fa-bullseye",
    title: "100% Captive Audience",
    desc: "Penumpang berada di dalam shuttle bus selama perpindahan apron tanpa distraksi luar. Pesan brand Anda dibaca dengan fokus penuh.",
  },
  {
    icon: "fa-user-tie",
    title: "Profil Audiens Premium",
    desc: "Menjangkau para eksekutif, profesional bisnis, dan pelancong berdaya beli tinggi yang aktif menggunakan transportasi udara.",
  },
  {
    icon: "fa-eye",
    title: "Visibilitas Tanpa Gangguan",
    desc: "Berbeda dengan jalan raya yang penuh billboard, area sisi udara (airside) steril sehingga brand Anda menjadi sorotan utama.",
  },
  {
    icon: "fa-rotate",
    title: "Frekuensi & Mobilitas Tinggi",
    desc: "6 armada beroperasi bolak-balik menghubungkan terminal, gate, dan pesawat setiap hari sepanjang jadwal penerbangan.",
  },
];

const adSpaces = [
  {
    id: "full-wrap",
    tag: "MAXIMUM IMPACT",
    title: "Full Bus Wrap (360°)",
    subtitle: "Seluruh Eksterior Badan Bus",
    desc: "Membungkus 100% eksterior shuttle bus dengan visual brand Anda. Memberikan dominasi brand tertinggi dan terlihat dari apron, remote gate, hingga jendela pesawat.",
    features: [
      "Visibilitas 360 derajat",
      "Format visual raksasa di landasan bandara",
      "Terlihat oleh seluruh penumpang di apron & terminal",
      "Cocok untuk brand dominance & peluncuran produk besar",
    ],
    highlight: true,
  },
  {
    id: "side-panel",
    tag: "HIGH ENGAGEMENT",
    title: "Side Panel Branding",
    subtitle: "Panel Samping Kiri & Kanan Bus",
    desc: "Penempatan visual di badan samping bus dengan proporsi eye-level yang tepat saat penumpang antre menaiki atau menuruni shuttle bus.",
    features: [
      "Eye-level horizontal view",
      "Terlihat jelas dari jarak dekat dan menengah",
      "Pilihan sisi pintu naik/turun atau sisi sebaliknya",
      "Format efektif dan efisien untuk kampanye korporat",
    ],
    highlight: false,
  },
  {
    id: "rear-panel",
    tag: "EXTENDED DWELL TIME",
    title: "Rear Panel / Back Wrap",
    subtitle: "Panel Belakang Bus",
    desc: "Menjangkau kendaraan operasional, kru, dan iring-iringan bus di belakangnya dengan waktu pandang (dwell time) yang panjang dan stabil.",
    features: [
      "Fokus pandang langsung dari belakang",
      "Tingkat keterbacaan tinggi saat bus berhenti/antre",
      "Cocok untuk pesan ringkas, call-to-action, & logo",
      "Pilihan tepat untuk campaign spesifik",
    ],
    highlight: false,
  },
  {
    id: "interior-panels",
    tag: "DIRECT ENGAGEMENT",
    title: "Interior Passenger Cards",
    subtitle: "Overhead Panel & Dinding Dalam Bus",
    desc: "Menyapa penumpang langsung dari dalam kabin bus selama perjalanan dari gate menuju tangga pesawat.",
    features: [
      "Jarak pandang sangat dekat dengan penumpang",
      "Durasi paparan 10–25 menit tanpa distraksi",
      "Bisa memuat informasi detail, QR code, & promo",
      "Bisa dikombinasikan dengan eksterior",
    ],
    highlight: false,
  },
];

const fleetList = [
  {
    no: "Armada 01",
    airport: "Soekarno-Hatta (CGK)",
    city: "Jakarta / Tangerang",
    status: "Siap Tayang",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=85",
  },
  {
    no: "Armada 02",
    airport: "Soekarno-Hatta (CGK)",
    city: "Jakarta / Tangerang",
    status: "Siap Tayang",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=85",
  },
  {
    no: "Armada 03",
    airport: "Juanda Int'l (SUB)",
    city: "Surabaya",
    status: "Siap Tayang",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=85",
  },
  {
    no: "Armada 04",
    airport: "Juanda Int'l (SUB)",
    city: "Surabaya",
    status: "Siap Tayang",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=85",
  },
  {
    no: "Armada 05",
    airport: "Kualanamu Int'l (KNO)",
    city: "Deli Serdang / Medan",
    status: "Siap Tayang",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=85",
  },
  {
    no: "Armada 06",
    airport: "Sultan Hasanuddin (UPG)",
    city: "Makassar",
    status: "Siap Tayang",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=85",
  },
];

const mediaSpecs = [
  {
    space: "Full Bus Wrap (360°)",
    pos: "Seluruh Bodi Eksterior (Kiri, Kanan, Belakang, Kaca One-Way)",
    dimension: "± 12.000 mm × 2.500 mm (Bodi) / Sesuai tipe bus",
    material: "Vinyl Cast Wrap Film + Lamination Anti-UV & Weatherproof",
    note: "Termasuk stiker one-way vision pada kaca jendela",
  },
  {
    space: "Side Panel (Street / Curb Side)",
    pos: "Bodi Samping Kiri & Kanan di bawah garis jendela",
    dimension: "± 7.000 mm × 900 mm (Sisi Kiri & Kanan)",
    material: "High-grade Vinyl Removable Film + Gloss Lamination",
    note: "Proporsi lanskap horizontal optimal untuk pesan promosi",
  },
  {
    space: "Rear Window & Back Panel",
    pos: "Kaca Belakang & Pintu Belakang Bus",
    dimension: "± 2.100 mm × 1.400 mm",
    material: "Perforated Vinyl (One-Way Vision) + Bumper Decal",
    note: "Dilihat jelas oleh kendaraan antre di apron",
  },
  {
    space: "Interior Overhead Cards",
    pos: "Dinding atas jendela dalam kabin penumpang",
    dimension: "± 700 mm × 280 mm per panel",
    material: "Hi-Res Coated Card / Vinyl Matte Mounted Panel",
    note: "Penempatan berulang di sepanjang kabin penumpang",
  },
];

const durationPackages = [
  {
    duration: "1 Bulan",
    label: "Tactical & Launching",
    desc: "Pilihan tepat untuk campaign jangka pendek, peluncuran produk baru, promosi musiman (holiday/lebaran), atau event khusus.",
    badge: "Fleksibel",
    features: [
      "Branding pada armada terpilih",
      "Pemasangan & monitoring berkala",
      "Laporan dokumentasi foto penayangan",
      "Lead time produksi cepat",
    ],
    highlight: false,
  },
  {
    duration: "3 Bulan",
    label: "Brand Awareness",
    desc: "Paket paling direkomendasikan untuk membangun pengenalan merek yang kuat dan mengakar di benak para penumpang penerbangan.",
    badge: "Paling Populer ⭐",
    features: [
      "Frekuensi paparan optimal & berkelanjutan",
      "Pilihan bundling multi-armada / multi-bandara",
      "Maintenance & pembersihan berkala media stiker",
      "Laporan bulanan kondisi display",
    ],
    highlight: true,
  },
  {
    duration: "6 Bulan - 1 Tahun",
    label: "Brand Dominance",
    desc: "Kemitraan eksklusif untuk mendominasi area apron bandara secara konsisten sepanjang tahun dengan penawaran tarif paling kompetitif.",
    badge: "Nilai Terbaik",
    features: [
      "Prioritas armada dan penempatan rute utama",
      "Opsi rotasi materi kreatif berkala",
      "Rate eksklusif long-term partnership",
      "Dukungan penuh tim teknis & pemeliharaan",
    ],
    highlight: false,
  },
];

export default function AdvertisingPage() {
  return (
    <>
      {/* ── TOP NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(1,13,46,0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "14px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <Image
              src="/LOGO MAP NO BACKGROUND.png"
              alt="Logo MAP"
              width={140}
              height={48}
              style={{ height: 44, width: "auto", objectFit: "contain" }}
            />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link
              href="/"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontWeight: 500,
                fontSize: "0.88rem",
                textDecoration: "none",
              }}
            >
              ← Beranda MAP
            </Link>
            <a
              href="#spaces"
              style={{
                color: "#fff",
                fontWeight: 500,
                fontSize: "0.88rem",
                textDecoration: "none",
                display: "inline-block",
              }}
              className="hide-on-mobile"
            >
              Pilihan Space
            </a>
            <a
              href="#contact-sales"
              style={{
                background: "linear-gradient(135deg, #F5A623, #D97706)",
                color: "#001F5B",
                fontWeight: 700,
                padding: "9px 20px",
                borderRadius: 8,
                fontSize: "0.88rem",
                textDecoration: "none",
              }}
            >
              Hubungi Sales
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section
          style={{
            position: "relative",
            minHeight: "92vh",
            display: "flex",
            alignItems: "center",
            background: "#001238",
            overflow: "hidden",
            paddingTop: 100,
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1920&q=85"
              alt="Airport Shuttle Bus"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(1,13,46,0.95) 0%, rgba(0,31,91,0.85) 60%, rgba(245,166,35,0.2) 100%)",
              }}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 1000,
              margin: "0 auto",
              padding: "80px 24px",
              textAlign: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(245,166,35,0.15)",
                border: "1px solid rgba(245,166,35,0.4)",
                padding: "6px 18px",
                borderRadius: 100,
                marginBottom: 24,
              }}
            >
              <i className="fas fa-bullhorn" style={{ color: "#F5A623", fontSize: "0.85rem" }} />
              <span
                style={{
                  color: "#F5A623",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                6 Armada Shuttle Bus · 4 Bandara Strategis
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              Airport Advertising
              <br />
              <span style={{ color: "#F5A623" }}>
                Advertise Where Your Audience Travels.
              </span>
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                lineHeight: 1.8,
                maxWidth: 720,
                margin: "0 auto 36px",
              }}
            >
              Hadirkan brand Anda tepat di hadapan ribuan penumpang penerbangan setiap hari. Media promosi bergerak eksklusif di armada shuttle bus bandara MAP dengan tingkat atensi dan prestise tertinggi.
            </p>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="#spaces"
                style={{
                  background: "linear-gradient(135deg, #F5A623, #D97706)",
                  color: "#001F5B",
                  fontWeight: 700,
                  padding: "14px 32px",
                  borderRadius: 10,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(245,166,35,0.35)",
                }}
              >
                Lihat Advertising Space
              </a>
              <a
                href="#contact-sales"
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  padding: "14px 32px",
                  borderRadius: 10,
                  fontSize: "0.95rem",
                  border: "2px solid rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                Hubungi Tim Sales
              </a>
            </div>
          </div>
        </section>

        {/* ── AUDIENCE INFORMATION ── */}
        <section style={{ padding: "100px 0", background: "#F8FAFC" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
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
                Audience & Reach
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
                Mengapa Beriklan di Shuttle Bus Bandara?
              </h2>
              <p style={{ color: "#64748B", maxWidth: 650, margin: "0 auto", lineHeight: 1.7 }}>
                Bandara adalah salah satu gerbang ekonomi paling dinamis. Shuttle bus bandara memberikan jangkauan audiens premium yang tidak bisa disaingi oleh media promosi jalan raya biasa.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                gap: 24,
              }}
            >
              {audiencePoints.map((pt, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: "32px 24px",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: "#E0F2FE",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <i className={`fas ${pt.icon}`} style={{ color: "#1D4ED8", fontSize: "1.3rem" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: 10,
                    }}
                  >
                    {pt.title}
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ADVERTISING SPACES ── */}
        <section id="spaces" style={{ padding: "100px 0", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(245,166,35,0.12)",
                  color: "#D97706",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "6px 16px",
                  borderRadius: 100,
                  marginBottom: 16,
                }}
              >
                Pilihan Format Media
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
                Jenis Advertising Space
              </h2>
              <p style={{ color: "#64748B", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
                Pilih format yang sesuai dengan strategi komunikasi dan target campaign brand Anda — dari dominasi visual luar hingga paparan intim di dalam kabin.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
                gap: 28,
              }}
            >
              {adSpaces.map((sp) => (
                <div
                  key={sp.id}
                  style={{
                    background: sp.highlight ? "#001F5B" : "#F8FAFC",
                    color: sp.highlight ? "#fff" : "#0F172A",
                    borderRadius: 20,
                    padding: "36px 28px",
                    border: sp.highlight ? "2px solid #F5A623" : "1px solid #E2E8F0",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: sp.highlight
                      ? "0 20px 40px rgba(0,31,91,0.2)"
                      : "0 4px 16px rgba(0,0,0,0.02)",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        background: sp.highlight ? "rgba(245,166,35,0.2)" : "#E2E8F0",
                        color: sp.highlight ? "#F5A623" : "#475569",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        padding: "4px 12px",
                        borderRadius: 100,
                        marginBottom: 16,
                      }}
                    >
                      {sp.tag}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        marginBottom: 4,
                      }}
                    >
                      {sp.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: sp.highlight ? "rgba(255,255,255,0.7)" : "#64748B",
                        marginBottom: 16,
                        fontWeight: 500,
                      }}
                    >
                      {sp.subtitle}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        color: sp.highlight ? "rgba(255,255,255,0.85)" : "#475569",
                        marginBottom: 24,
                      }}
                    >
                      {sp.desc}
                    </p>

                    <div style={{ height: 1, background: sp.highlight ? "rgba(255,255,255,0.15)" : "#E2E8F0", marginBottom: 20 }} />

                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0" }}>
                      {sp.features.map((ft, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            fontSize: "0.84rem",
                            lineHeight: 1.5,
                            marginBottom: 10,
                            color: sp.highlight ? "rgba(255,255,255,0.9)" : "#334155",
                          }}
                        >
                          <i
                            className="fas fa-check-circle"
                            style={{
                              color: sp.highlight ? "#F5A623" : "#1967D2",
                              fontSize: "0.85rem",
                              marginTop: 2,
                              flexShrink: 0,
                            }}
                          />
                          <span>{ft}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact-sales"
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: sp.highlight
                        ? "linear-gradient(135deg, #F5A623, #D97706)"
                        : "#001F5B",
                      color: sp.highlight ? "#001F5B" : "#fff",
                      padding: "12px",
                      borderRadius: 10,
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      textDecoration: "none",
                    }}
                  >
                    Pilih Space Ini →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6 SHUTTLE BUS ARMADA & FOTO LOKASI ── */}
        <section style={{ padding: "100px 0", background: "#F1F5F9" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span
                style={{
                  display: "inline-block",
                  background: "#DBEAFE",
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
                Armada & Lokasi
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
                6 Armada Shuttle Bus MAP
              </h2>
              <p style={{ color: "#64748B", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
                Armada shuttle bus MAP aktif melayani pergerakan penumpang dan kru di 4 bandara tersibuk di Indonesia. Anda dapat memilih penayangan di satu bandara spesifik atau bundling seluruh kota.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                gap: 28,
              }}
            >
              {fleetList.map((bus, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#fff",
                    borderRadius: 18,
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ position: "relative", height: 200, width: "100%" }}>
                    <Image
                      src={bus.image}
                      alt={`Shuttle Bus ${bus.no}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 14,
                        right: 14,
                        background: "rgba(5, 150, 105, 0.9)",
                        color: "#fff",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "4px 12px",
                        borderRadius: 100,
                      }}
                    >
                      ● {bus.status}
                    </div>
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
                        {bus.no}
                      </h3>
                      <span style={{ fontSize: "0.8rem", color: "#1967D2", fontWeight: 700 }}>
                        Apron Shuttle Service
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748B", fontSize: "0.9rem", marginTop: 4 }}>
                      <i className="fas fa-location-dot" style={{ color: "#F5A623" }} />
                      <span><strong>{bus.airport}</strong> — {bus.city}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEDIA SPECIFICATIONS ── */}
        <section style={{ padding: "100px 0", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <span
                style={{
                  display: "inline-block",
                  background: "#FEF3C7",
                  color: "#B45309",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "6px 16px",
                  borderRadius: 100,
                  marginBottom: 16,
                }}
              >
                Spesifikasi Teknis
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
                Ukuran Media & Spesifikasi Material
              </h2>
              <p style={{ color: "#64748B", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
                Semua materi iklan dicetak menggunakan bahan tahan cuaca bandara dengan standar aviasi internasional. Template die-cut resmi akan diberikan oleh tim teknis kami saat pemesanan.
              </p>
            </div>

            <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
                <thead>
                  <tr style={{ background: "#001F5B", color: "#fff" }}>
                    <th style={{ padding: "16px 20px" }}>Jenis Space</th>
                    <th style={{ padding: "16px 20px" }}>Posisi Penempatan</th>
                    <th style={{ padding: "16px 20px" }}>Estimasi Dimensi</th>
                    <th style={{ padding: "16px 20px" }}>Material Rekomendasi</th>
                  </tr>
                </thead>
                <tbody>
                  {mediaSpecs.map((m, i) => (
                    <tr
                      key={i}
                      style={{
                        background: i % 2 === 0 ? "#fff" : "#F8FAFC",
                        borderBottom: "1px solid #E2E8F0",
                      }}
                    >
                      <td style={{ padding: "18px 20px", fontWeight: 700, color: "#0F172A" }}>
                        {m.space}
                      </td>
                      <td style={{ padding: "18px 20px", color: "#475569" }}>
                        {m.pos}
                      </td>
                      <td style={{ padding: "18px 20px", color: "#1967D2", fontWeight: 600 }}>
                        {m.dimension}
                      </td>
                      <td style={{ padding: "18px 20px", color: "#475569" }}>
                        {m.material}
                        <br />
                        <span style={{ fontSize: "0.78rem", color: "#94A3B8" }}>* {m.note}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ color: "#94A3B8", fontSize: "0.82rem", textAlign: "center", marginTop: 20 }}>
              * Catatan: Dimensi aktual dapat sedikit bervariasi sesuai model bus per bandara. Blueprint CAD akurat akan disediakan untuk tim desainer Anda.
            </p>
          </div>
        </section>

        {/* ── CAMPAIGN DURATION PACKAGES ── */}
        <section style={{ padding: "100px 0", background: "#08163E" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(245,166,35,0.15)",
                  color: "#F5A623",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "6px 16px",
                  borderRadius: 100,
                  marginBottom: 16,
                }}
              >
                Pilihan Durasi
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.25,
                  marginBottom: 16,
                }}
              >
                Paket Durasi Campaign
              </h2>
              <p style={{ color: "#94A3B8", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
                Fleksibilitas jangka waktu penayangan yang dapat disesuaikan dengan kalender promosi Anda. Diskusikan kebutuhan Anda dengan tim sales kami untuk penawaran terbaik.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                gap: 28,
              }}
            >
              {durationPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  style={{
                    background: pkg.highlight ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                    border: pkg.highlight ? "2px solid #F5A623" : "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 20,
                    padding: "40px 32px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        background: pkg.highlight ? "#F5A623" : "rgba(255,255,255,0.1)",
                        color: pkg.highlight ? "#001F5B" : "#fff",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        padding: "4px 14px",
                        borderRadius: 100,
                        marginBottom: 20,
                      }}
                    >
                      {pkg.badge}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "2rem",
                        fontWeight: 900,
                        color: "#fff",
                        marginBottom: 4,
                      }}
                    >
                      {pkg.duration}
                    </h3>
                    <div style={{ color: "#F5A623", fontWeight: 700, fontSize: "0.95rem", marginBottom: 16 }}>
                      {pkg.label}
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 28 }}>
                      {pkg.desc}
                    </p>

                    <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 24 }} />

                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
                      {pkg.features.map((f, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            color: "rgba(255,255,255,0.85)",
                            fontSize: "0.88rem",
                            marginBottom: 12,
                          }}
                        >
                          <i className="fas fa-check" style={{ color: "#F5A623", marginTop: 3, flexShrink: 0 }} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact-sales"
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: pkg.highlight ? "linear-gradient(135deg, #F5A623, #D97706)" : "transparent",
                      border: pkg.highlight ? "none" : "1px solid rgba(255,255,255,0.3)",
                      color: pkg.highlight ? "#001F5B" : "#fff",
                      padding: "14px",
                      borderRadius: 10,
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                    }}
                  >
                    Konsultasikan Durasi Ini
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT SALES SECTION ── */}
        <section id="contact-sales" style={{ padding: "100px 0", background: "#F8FAFC" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
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
                Media Kit & Rate Card
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
                Hubungi Tim Sales Advertising
              </h2>
              <p style={{ color: "#64748B", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
                Dapatkan penawaran resmi, panduan teknis artwork, serta ketersediaan slot armada shuttle bus untuk kampanye brand Anda.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                gap: 48,
                alignItems: "flex-start",
              }}
            >
              {/* Form */}
              <AdvertisingContactForm />

              {/* Direct Info */}
              <div
                style={{
                  background: "#001F5B",
                  color: "#fff",
                  borderRadius: 24,
                  padding: "44px 36px",
                  boxShadow: "0 20px 40px rgba(0,31,91,0.15)",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: "rgba(245,166,35,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <i className="fas fa-headset" style={{ color: "#F5A623", fontSize: "1.4rem" }} />
                </div>

                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, fontFamily: "var(--font-poppins)" }}>
                  Konsultasi Langsung dengan Tim Sales
                </h3>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontSize: "0.92rem", marginBottom: 32 }}>
                  Ingin berdiskusi mengenai ketersediaan jadwal tayang, negosiasi multi-armada, atau presentasi langsung ke tim marketing Anda? Kami siap membantu.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className="fas fa-phone" style={{ color: "#4A9EF5" }} />
                    </div>
                    <div>
                      <span style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", textTransform: "uppercase" }}>Telepon / WhatsApp</span>
                      <a href="tel:+6283170293216" style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
                        +62 831 7029 3216
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className="fas fa-envelope" style={{ color: "#4A9EF5" }} />
                    </div>
                    <div>
                      <span style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", textTransform: "uppercase" }}>Email Resmi</span>
                      <a href="mailto:contact@map-airportservices.id" style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
                        contact@map-airportservices.id
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className="fas fa-location-dot" style={{ color: "#4A9EF5" }} />
                    </div>
                    <div>
                      <span style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", textTransform: "uppercase" }}>Area Operasional</span>
                      <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>
                        Bandara CGK, SUB, KNO, UPG
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 36,
                    paddingTop: 24,
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>
                    💡 <strong>Tips:</strong> Diskusikan booking armada minimal 2–3 minggu sebelum tanggal tayang campaign untuk persiapan cetak material dan instalasi oleh tim teknis kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
