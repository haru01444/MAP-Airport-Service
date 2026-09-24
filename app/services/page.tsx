import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Lengkap Ground Handling & Aviasi | PT Mawaddah Angkasa Prima",
  description:
    "Solusi terintegrasi PT Mawaddah Angkasa Prima: Ground Handling for Airlines, Passenger & Ticketing, Ramp Side Service, Aircraft & Cabin Cleaning, GSE Equipment Rental, Staff Outsourcing, Training Center, dan Airport Advertising.",
};

const airports = [
  { code: "CGK", city: "Jakarta", name: "Soekarno-Hatta Int'l", isNew: true },
  { code: "SUB", city: "Surabaya", name: "Juanda Int'l", isNew: false },
  { code: "KNO", city: "Deli / Medan", name: "Kualanamu Int'l", isNew: false },
  { code: "UPG", city: "Makassar", name: "Sultan Hasanuddin Int'l", isNew: false },
];


export default function ServicesPage() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", color: "#0F172A" }}>
      <Navbar />

      <style dangerouslySetInnerHTML={{
        __html: [
          "/* ============================================== */",
          "/* GLOBAL SERVICES PAGE STYLES                   */",
          "/* ============================================== */",
          ".svc-hero { padding: 140px 0 80px; background: #FFFFFF; position: relative; }",
          ".svc-hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items: center; }",
          ".svc-hero-title { font-family: var(--font-poppins); font-size: clamp(2.4rem, 4.5vw, 3.6rem); font-weight: 900; line-height: 1.1; color: #001F5B; margin-bottom: 20px; }",
          ".svc-hero-title span { color: #1967D2; font-weight: 800; display: block; }",
          ".svc-hero-desc { color: #475569; font-size: 1.02rem; line-height: 1.8; margin-bottom: 24px; }",
          ".svc-img-frame { position: relative; width: 100%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 48px rgba(0,31,91,0.12); aspect-ratio: 4/3; }",
          "",
          "/* Subnav Bar */",
          ".svc-subnav-bar { background: #001F5B; padding: 14px 0; position: sticky; top: 72px; z-index: 100; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }",
          ".svc-subnav-list { display: flex; align-items: center; justify-content: space-between; gap: 8px; overflow-x: auto; padding: 0; margin: 0; list-style: none; -webkit-overflow-scrolling: touch; scrollbar-width: none; }",
          ".svc-subnav-list::-webkit-scrollbar { display: none; }",
          ".svc-subnav-link { color: rgba(255,255,255,0.85); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; padding: 6px 12px; border-radius: 20px; white-space: nowrap; transition: all 0.2s ease; }",
          ".svc-subnav-link:hover { color: #fff; background: rgba(74, 158, 245, 0.2); }",
          "",
          "/* Section Headings */",
          ".svc-sec-title { font-family: var(--font-poppins); font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 900; line-height: 1.15; color: #001F5B; margin-bottom: 16px; text-transform: uppercase; }",
          ".svc-sec-title span { color: #10B981; }",
          ".svc-sec-desc { color: #64748B; font-size: 1rem; line-height: 1.75; max-width: 560px; margin-bottom: 28px; }",
          "",
          "/* Check Items */",
          ".svc-checklist { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 14px 20px; }",
          ".svc-check-item { display: flex; align-items: center; gap: 12px; color: #334155; font-size: 0.94rem; font-weight: 600; }",
          ".svc-check-dot { width: 10px; height: 10px; border-radius: 50%; background: #10B981; flex-shrink: 0; }",
          "",
          "/* Bento Cards */",
          ".bento-fleet-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 24px; align-items: stretch; margin-top: 32px; }",
          ".bento-main-card { position: relative; border-radius: 16px; overflow: hidden; min-height: 380px; display: flex; flex-direction: column; justify-content: flex-end; padding: 32px; background: linear-gradient(180deg, rgba(0,31,91,0.3) 0%, rgba(0,15,45,0.96) 100%), #0D2461; color: #fff; box-shadow: 0 12px 32px rgba(0,31,91,0.1); }",
          ".bento-stack-wrap { display: flex; flex-direction: column; gap: 14px; }",
          ".bento-sub-card { position: relative; border-radius: 14px; overflow: hidden; padding: 20px 22px; background: #F8FAFC; border: 1px solid #E2E8F0; display: flex; align-items: center; justify-content: space-between; gap: 16px; transition: all 0.25s ease; }",
          ".bento-sub-card:hover { transform: translateY(-3px); border-color: #1967D2; box-shadow: 0 8px 24px rgba(0,31,91,0.08); background: #fff; }",
          "",
          "/* Staff Cards */",
          ".staff-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 32px; }",
          ".staff-card { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 28px 22px; transition: all 0.25s ease; display: flex; flex-direction: column; justify-content: space-between; }",
          ".staff-card:hover { transform: translateY(-4px); border-color: #1967D2; box-shadow: 0 12px 28px rgba(0,31,91,0.08); background: #fff; }",
          "",
          "/* Customer Strip */",
          ".client-logo-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px 24px; display: flex; align-items: center; justify-content: center; height: 90px; transition: all 0.2s ease; }",
          ".client-logo-card:hover { border-color: #CBD5E1; transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.05); }",
          "",
          "/* Responsive */",
          "@media (max-width: 768px) {",
          "  .svc-hero { padding: 100px 0 48px !important; }",
          "  .svc-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }",
          "  .svc-hero-title { font-size: 28px !important; }",
          "  .svc-hero-desc { font-size: 14px !important; }",
          "  .svc-sec-title { font-size: 24px !important; }",
          "  .svc-sec-desc { font-size: 14px !important; margin-bottom: 20px !important; }",
          "  .svc-checklist { grid-template-columns: 1fr !important; gap: 12px !important; }",
          "  .bento-fleet-grid { grid-template-columns: 1fr !important; gap: 16px !important; }",
          "  .bento-main-card { min-height: 280px !important; padding: 24px 20px !important; }",
          "  .staff-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }",
          "  .staff-card { padding: 20px 16px !important; }",
          "  .svc-subnav-bar { top: 60px !important; padding: 10px 0 !important; }",
          "  .svc-subnav-link { font-size: 0.72rem !important; padding: 4px 10px !important; }",
          "}"
        ].join('\n')
      }} />

      {/* ==================================================== */}
      {/* 1. HERO: 01. GROUND HANDLING SERVICES FOR AIRLINES   */}
      {/* ==================================================== */}
      <section id="ground-handling" className="svc-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-hero-grid">
            
            {/* Left Content */}
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#1967D2",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                <span style={{ width: 22, height: 2, background: "#F5A623", borderRadius: 2 }} />
                01. Ground Handling for Airlines
              </span>

              <h1 className="svc-hero-title">
                Ground
                <span>Handling</span>
              </h1>

              <p className="svc-hero-desc">
                Cakupan layanan ground handling maskapai di berbagai lokasi bandara strategis di Indonesia, dengan standar operasional dan keselamatan internasional.
              </p>

              {/* 4 Airport Hubs */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 28 }}>
                {airports.map((ap) => (
                  <div
                    key={ap.code}
                    style={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderRadius: 10,
                      padding: "12px",
                      position: "relative",
                    }}
                  >
                    {ap.isNew && (
                      <span style={{ position: "absolute", top: 6, right: 6, background: "#10B981", color: "#fff", fontSize: "0.6rem", fontWeight: 700, padding: "2px 5px", borderRadius: 4 }}>
                        Baru
                      </span>
                    )}
                    <span style={{ fontFamily: "var(--font-poppins)", fontSize: "1.3rem", fontWeight: 800, color: "#1967D2", display: "block", lineHeight: 1 }}>
                      {ap.code}
                    </span>
                    <strong style={{ display: "block", color: "#0F172A", fontSize: "0.82rem", marginTop: 4 }}>
                      {ap.city}
                    </strong>
                    <span style={{ color: "#64748B", fontSize: "0.7rem", display: "block", lineHeight: 1.2 }}>
                      {ap.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Checklist MAP */}
              <ul className="svc-checklist" style={{ marginBottom: 32 }}>
                {[
                  "Ground Handling Service",
                  "Ramp Handling",
                  "GSE Rental Support",
                  "Passenger Handling Service (Check In counter & Gate Management)",
                ].map((item, i) => (
                  <li key={i} className="svc-check-item">
                    <span className="svc-check-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <a
                  href="https://wa.me/6283170293216?text=Halo%20MAP%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20ground%20handling%20dan%20aviasi."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "linear-gradient(135deg, #10B981, #059669)",
                    color: "#fff",
                    fontWeight: 700,
                    padding: "13px 26px",
                    borderRadius: 8,
                    fontSize: "0.92rem",
                    textDecoration: "none",
                    boxShadow: "0 6px 18px rgba(16,185,129,0.25)",
                  }}
                >
                  <span>Hubungi Tim Operasional</span>
                  <i className="fas fa-arrow-right" style={{ fontSize: "0.8rem" }} />
                </a>

                <a
                  href="#equipment-rental"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#F8FAFC",
                    color: "#001F5B",
                    fontWeight: 600,
                    padding: "13px 24px",
                    borderRadius: 8,
                    fontSize: "0.92rem",
                    textDecoration: "none",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <span>Lihat Rental GSE</span>
                </a>
              </div>
            </div>

            {/* Right Image Frame */}
            <div>
              <div className="svc-img-frame">
                <Image
                  src="/services-passenger-host.jpg"
                  alt="Ground Handling & Passenger Service MAP"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 550px"
                  priority
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    background: "rgba(0, 31, 91, 0.92)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    padding: "10px 16px",
                    borderRadius: 8,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.8rem" }}>
                    <i className="fas fa-check" />
                  </div>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.82rem", lineHeight: 1.2 }}>
                      MAP Ground Handling
                    </strong>
                    <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)" }}>
                      Layanan Terintegrasi Sejak 2017
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. STICKY SUB-NAV STRIP                             */}
      {/* ==================================================== */}
      <div className="svc-subnav-bar">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <ul className="svc-subnav-list">
            <li><a href="#ground-handling" className="svc-subnav-link">GROUND HANDLING</a></li>
            <li><a href="#passenger-services" className="svc-subnav-link">PASSENGER &amp; ANCILLARY</a></li>
            <li><a href="#ramp-services" className="svc-subnav-link">RAMP SIDE SERVICE</a></li>
            <li><a href="#cabin-cleaning" className="svc-subnav-link">CABIN CLEANING</a></li>
            <li><a href="#equipment-rental" className="svc-subnav-link">GSE EQUIPMENT RENTAL</a></li>
            <li><a href="#outsourcing-staff" className="svc-subnav-link">OUTSOURCING STAFF</a></li>
            <li><a href="#business-units" className="svc-subnav-link">UNIT BISNIS MAP</a></li>
            <li><a href="#contact" className="svc-subnav-link">KONTAK</a></li>
          </ul>
        </div>
      </div>

      {/* ==================================================== */}
      {/* 3. 02. PASSENGER & TICKETING SERVICES (ANCILLARY)    */}
      {/* ==================================================== */}
      <section id="passenger-services" style={{ padding: "90px 0", background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-hero-grid">
            
            {/* Left Content */}
            <div>
              <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                02. Ancillary Services
              </span>
              <h2 className="svc-sec-title">
                Passenger &amp;<br />
                <span>Ticketing Services</span>
              </h2>

              <p className="svc-sec-desc">
                Melayani kebutuhan penumpang secara langsung, mulai dari penyambutan di terminal hingga penanganan tiket dan layanan VIP eksklusif.
              </p>

              {/* Exact MAP Service Items */}
              <ul className="svc-checklist" style={{ marginBottom: 28 }}>
                {[
                  "Transportation",
                  "Greeting Services",
                  "Hand-held Metal Detector Security Services",
                  "Ticket Services",
                  "Check In and Gate Handling Services",
                  "VIP Handling",
                ].map((item, i) => (
                  <li key={i} className="svc-check-item">
                    <span className="svc-check-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card Frame */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "36px 32px", boxShadow: "0 10px 30px rgba(0,31,91,0.05)" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", fontSize: "1.3rem", marginBottom: 20 }}>
                <i className="fas fa-user-tie" />
              </div>
              <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.3rem", fontWeight: 700, color: "#001F5B", marginBottom: 12 }}>
                Standar Pelayanan Hospitality Prima
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7, margin: "0 0 20px" }}>
                Personel customer service dan ticketing MAP dibekali keahlian sistem DCS maskapai, ramah, sigap, serta siap berkoordinasi untuk kelancaran arus penumpang di area terminal dan boarding gate.
              </p>
              <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 16 }}>
                <span style={{ fontSize: "0.82rem", color: "#10B981", fontWeight: 700 }}>
                  ✓ Melayani Terminal Domestik &amp; Internasional
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. 03. RAMP SIDE SERVICE                            */}
      {/* ==================================================== */}
      <section id="ramp-services" style={{ padding: "90px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-hero-grid">
            
            {/* Left Content */}
            <div>
              <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                03. Ramp Operations
              </span>
              <h2 className="svc-sec-title">
                RAMP<br />
                <span>SIDE SERVICE</span>
              </h2>

              <p className="svc-sec-desc">
                Mendukung seluruh aktivitas operasional di sisi udara (ramp area) secara aman, terkoordinasi, dan tepat waktu untuk setiap penerbangan.
              </p>

              {/* Exact MAP Service Items */}
              <ul className="svc-checklist" style={{ marginBottom: 32 }}>
                {[
                  "Crew Transport (pesawat ke terminal)",
                  "Apron Passenger Bus (APB)",
                  "Aviation Security Transport",
                  "Lavatory & Water Services",
                  "Baggage Towing Tractor (BTT)",
                  "Ground Power Service (GPS)",
                  "Ground Power Unit (GPU)",
                ].map((item, i) => (
                  <li key={i} className="svc-check-item">
                    <span className="svc-check-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact-section"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#001F5B",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                }}
              >
                <span>Pelajari Detail Kemitraan Ramp</span>
                <i className="fas fa-chevron-right" style={{ fontSize: "0.75rem", color: "#10B981" }} />
              </a>
            </div>

            {/* Right Image Frame */}
            <div>
              <div className="svc-img-frame">
                <Image
                  src="/services-ramp-agent.jpg"
                  alt="Ramp Services Operation MAP"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 550px"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    background: "rgba(0, 31, 91, 0.92)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    padding: "12px 18px",
                    borderRadius: 10,
                    color: "#fff",
                  }}
                >
                  <strong style={{ display: "block", fontSize: "0.95rem", fontFamily: "var(--font-poppins)", letterSpacing: "0.05em" }}>
                    RAMP SERVICES
                  </strong>
                  <span style={{ fontSize: "0.75rem", color: "#10B981", fontWeight: 600 }}>
                    Operasional Sisi Udara 24/7
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. 04. AIRCRAFT & CABIN CLEANING                    */}
      {/* ==================================================== */}
      <section id="cabin-cleaning" style={{ padding: "90px 0", background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-hero-grid">
            
            {/* Left Content */}
            <div>
              <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                04. Cleaning Services
              </span>
              <h2 className="svc-sec-title">
                Aircraft &amp;<br />
                <span>Cabin Cleaning</span>
              </h2>

              <p className="svc-sec-desc">
                Menjaga standar kebersihan dan kenyamanan kabin pesawat secara konsisten di setiap siklus penerbangan, dari transit cepat hingga deep cleaning berkala.
              </p>

              {/* Exact MAP Service Items */}
              <ul className="svc-checklist">
                {[
                  "Lavatory Soaking",
                  "Daily Interior Cabin Cleaning",
                  "Transit Cleaning",
                  "Deep / Weekly Cabin Cleaning",
                  "Aircraft Exterior Washing",
                  "Aircraft Exterior Polishing",
                ].map((item, i) => (
                  <li key={i} className="svc-check-item">
                    <span className="svc-check-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card Frame */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "36px 32px", boxShadow: "0 10px 30px rgba(0,31,91,0.05)" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(25,103,210,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1967D2", fontSize: "1.3rem", marginBottom: 20 }}>
                <i className="fas fa-broom" />
              </div>
              <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.3rem", fontWeight: 700, color: "#001F5B", marginBottom: 12 }}>
                Bahan &amp; Prosedur Tersertifikasi
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7, margin: "0 0 20px" }}>
                Seluruh proses pembersihan kabin dan pencucian eksterior menggunakan chemical pembersih ramah lingkungan yang memenuhi sertifikasi pabrikan pesawat (Boeing &amp; Airbus approved).
              </p>
              <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 16 }}>
                <span style={{ fontSize: "0.82rem", color: "#1967D2", fontWeight: 700 }}>
                  ✓ Cepat, Bersih &amp; Menjaga Standar Higienitas
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 6. 05. EQUIPMENT RENTAL SUPPORT (GSE)                */}
      {/* ==================================================== */}
      <section id="equipment-rental" style={{ padding: "90px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          
          <div>
            <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
              05. Equipment Support
            </span>
            <h2 className="svc-sec-title">
              Equipment Rental <span>Support (GSE)</span>
            </h2>
            <p className="svc-sec-desc">
              Penyewaan peralatan Ground Support Equipment (GSE) berkualitas tinggi untuk menunjang kelancaran operasional di area bandara.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="bento-fleet-grid">
            
            {/* Big Main Card */}
            <div className="bento-main-card">
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: "url('/about-map-operations-v2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.35,
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 2 }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "#10B981",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    padding: "4px 10px",
                    borderRadius: 4,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 12,
                  }}
                >
                  GSE Support • Armada Lengkap
                </span>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#fff", marginBottom: 10, lineHeight: 1.2 }}>
                  Ground Support Equipment Rental
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 500, margin: 0 }}>
                  Menyediakan opsi sewa fleksibel (per flight, harian, bulanan, atau kontrak tahunan) dengan dukungan pemeliharaan teknis 24/7.
                </p>
              </div>
            </div>

            {/* Stack of Sub Cards (Exact MAP GSE Rental Items) */}
            <div className="bento-stack-wrap">
              
              <div className="bento-sub-card">
                <div>
                  <h4 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", fontWeight: 700, color: "#001F5B", margin: "0 0 4px" }}>
                    GPU (Ground Power Unit) Rental
                  </h4>
                  <p style={{ color: "#64748B", fontSize: "0.85rem", margin: 0 }}>
                    Pasokan daya listrik darat berkualitas untuk kebutuhan penerbangan.
                  </p>
                </div>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", fontSize: "1.1rem", flexShrink: 0 }}>
                  <i className="fas fa-bolt" />
                </div>
              </div>

              <div className="bento-sub-card">
                <div>
                  <h4 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", fontWeight: 700, color: "#001F5B", margin: "0 0 4px" }}>
                    GTC (Ground Tow Coupling) Rental
                  </h4>
                  <p style={{ color: "#64748B", fontSize: "0.85rem", margin: 0 }}>
                    Peralatan coupling andal untuk penarikan dan pushback pesawat.
                  </p>
                </div>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", fontSize: "1.1rem", flexShrink: 0 }}>
                  <i className="fas fa-link" />
                </div>
              </div>

              <div className="bento-sub-card">
                <div>
                  <h4 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", fontWeight: 700, color: "#001F5B", margin: "0 0 4px" }}>
                    ACU (Air Conditioning Unit) Rental
                  </h4>
                  <p style={{ color: "#64748B", fontSize: "0.85rem", margin: 0 }}>
                    Unit pendingin udara kabin pesawat selama proses boarding di darat.
                  </p>
                </div>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", fontSize: "1.1rem", flexShrink: 0 }}>
                  <i className="fas fa-snowflake" />
                </div>
              </div>

              <div className="bento-sub-card">
                <div>
                  <h4 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", fontWeight: 700, color: "#001F5B", margin: "0 0 4px" }}>
                    BTT &amp; Maintenance Stair Rental
                  </h4>
                  <p style={{ color: "#64748B", fontSize: "0.85rem", margin: 0 }}>
                    Baggage Towing Tractor &amp; tangga perawatan pesawat berbagai tipe.
                  </p>
                </div>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", fontSize: "1.1rem", flexShrink: 0 }}>
                  <i className="fas fa-stairs" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 7. 06. OUTSOURCING STAFF                            */}
      {/* ==================================================== */}
      <section id="outsourcing-staff" style={{ padding: "90px 0", background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
            <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
              06. Human Resources
            </span>
            <h2 className="svc-sec-title">
              Outsourcing <span>Staff</span>
            </h2>
            <p className="svc-sec-desc" style={{ margin: "0 auto" }}>
              Menyediakan tenaga kerja profesional dan terlatih untuk mendukung berbagai lini operasional bandara dan maskapai.
            </p>
          </div>

          {/* 4 Cards (Exact MAP Outsourcing Items) */}
          <div className="staff-grid">
            
            <div className="staff-card">
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(25,103,210,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1967D2", fontSize: "1.2rem", marginBottom: 16 }}>
                  <i className="fas fa-user-tie" />
                </div>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.15rem", fontWeight: 700, color: "#001F5B", marginBottom: 8 }}>
                  Ground Staff
                </h3>
                <p style={{ color: "#64748B", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                  Petugas check-in counter, boarding gate, customer service, dan penanganan penumpang di terminal.
                </p>
              </div>
              <span style={{ display: "block", marginTop: 16, fontSize: "0.78rem", color: "#1967D2", fontWeight: 700 }}>
                • DCS &amp; Hospitality Certified
              </span>
            </div>

            <div className="staff-card">
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", fontSize: "1.2rem", marginBottom: 16 }}>
                  <i className="fas fa-shield-halved" />
                </div>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.15rem", fontWeight: 700, color: "#001F5B", marginBottom: 8 }}>
                  Aviation Security
                </h3>
                <p style={{ color: "#64748B", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                  Personel AVSEC berlisensi resmi DKPPU Kemenhub untuk pengamanan area terminal dan sisi udara bandara.
                </p>
              </div>
              <span style={{ display: "block", marginTop: 16, fontSize: "0.78rem", color: "#10B981", fontWeight: 700 }}>
                • Lisensi Resmi Kemenhub
              </span>
            </div>

            <div className="staff-card">
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(245,166,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D97706", fontSize: "1.2rem", marginBottom: 16 }}>
                  <i className="fas fa-id-card" />
                </div>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.15rem", fontWeight: 700, color: "#001F5B", marginBottom: 8 }}>
                  GSE Operator
                </h3>
                <p style={{ color: "#64748B", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                  Operator alat berat apron bersertifikat SIO (Surat Izin Operator) untuk BTT, GPU, dan kendaraan darat.
                </p>
              </div>
              <span style={{ display: "block", marginTop: 16, fontSize: "0.78rem", color: "#D97706", fontWeight: 700 }}>
                • Lisensi SIO &amp; TIM Terverifikasi
              </span>
            </div>

            <div className="staff-card">
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(100,116,139,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", fontSize: "1.2rem", marginBottom: 16 }}>
                  <i className="fas fa-boxes-packing" />
                </div>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.15rem", fontWeight: 700, color: "#001F5B", marginBottom: 8 }}>
                  Porter
                </h3>
                <p style={{ color: "#64748B", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                  Tenaga porter terminal dan loading/unloading bagasi yang terlatih menangani barang secara rapi dan aman.
                </p>
              </div>
              <span style={{ display: "block", marginTop: 16, fontSize: "0.78rem", color: "#475569", fontWeight: 700 }}>
                • Fast &amp; Careful Handling
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 8. 07 & 08. UNIT BISNIS MAP (TRAINING & ADVERTISING) */}
      {/* ==================================================== */}
      <section id="business-units" style={{ padding: "90px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 40px" }}>
            <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
              Unit Bisnis Strategis MAP
            </span>
            <h2 className="svc-sec-title">
              Training Center &amp; <span>Advertising</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            
            {/* 07. Training Center */}
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 16, padding: "36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ color: "#F5A623", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  07. Training
                </span>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.4rem", fontWeight: 800, color: "#001F5B", margin: "8px 0 12px" }}>
                  MAP Training Center
                </h3>
                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 20 }}>
                  Pusat pelatihan terpadu untuk mencetak tenaga profesional aviasi yang kompeten dan tersertifikasi.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                  <li style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: "0.92rem", fontWeight: 600 }}>
                    <i className="fas fa-check-circle" style={{ color: "#10B981" }} />
                    <span>Aviation Security (AVSEC) Training</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: "0.92rem", fontWeight: 600 }}>
                    <i className="fas fa-check-circle" style={{ color: "#10B981" }} />
                    <span>GSE Training Center</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/training"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg, #F5A623, #D97706)",
                  color: "#001F5B",
                  fontWeight: 700,
                  padding: "12px 22px",
                  borderRadius: 8,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                <span>Kunjungi Halaman Training Center</span>
                <i className="fas fa-arrow-right" style={{ fontSize: "0.75rem" }} />
              </Link>
            </div>

            {/* 08. Airport Advertising */}
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 16, padding: "36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ color: "#1967D2", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  08. Advertising
                </span>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.4rem", fontWeight: 800, color: "#001F5B", margin: "8px 0 12px" }}>
                  Airport Shuttle Bus Advertising
                </h3>
                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 20 }}>
                  Media promosi bergerak eksklusif di 6 armada shuttle bus bandara MAP (CGK, SUB, KNO, UPG). Jangkau captive audience ribuan penumpang setiap hari.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                  <li style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: "0.92rem", fontWeight: 600 }}>
                    <i className="fas fa-check-circle" style={{ color: "#1967D2" }} />
                    <span>Full Bus Wrap (360° Exterior)</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: "0.92rem", fontWeight: 600 }}>
                    <i className="fas fa-check-circle" style={{ color: "#1967D2" }} />
                    <span>Side Panel &amp; Rear Window Branding</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: "0.92rem", fontWeight: 600 }}>
                    <i className="fas fa-check-circle" style={{ color: "#1967D2" }} />
                    <span>Interior Overhead Passenger Cards</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/advertising"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg, #1967D2, #4A9EF5)",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "12px 22px",
                  borderRadius: 8,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                <span>Lihat Katalog &amp; Tarif Advertising</span>
                <i className="fas fa-arrow-right" style={{ fontSize: "0.75rem" }} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
