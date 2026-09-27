"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Airport {
  code: string;
  city: string;
  name: string;
  isNew: boolean;
}

const airports: Airport[] = [
  { code: "CGK", city: "Jakarta", name: "Soekarno-Hatta Int'l", isNew: true },
  { code: "SUB", city: "Surabaya", name: "Juanda Int'l", isNew: false },
  { code: "KNO", city: "Deli / Medan", name: "Kualanamu Int'l", isNew: false },
  { code: "UPG", city: "Makassar", name: "Sultan Hasanuddin Int'l", isNew: false },
];

interface ServiceTab {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  category: string;
}

const serviceTabs: ServiceTab[] = [
  { id: "ground-handling", number: "01", shortTitle: "Ground Handling", title: "Ground Handling for Airlines", category: "Airlines Services" },
  { id: "passenger-services", number: "02", shortTitle: "Passenger & Ticketing", title: "Passenger & Ticketing Services", category: "Ancillary Services" },
  { id: "ramp-services", number: "03", shortTitle: "Ramp Side Service", title: "Ramp Side Operations", category: "Ramp Operations" },
  { id: "cabin-cleaning", number: "04", shortTitle: "Cabin Cleaning", title: "Aircraft & Cabin Cleaning", category: "Cleaning Services" },
  { id: "equipment-rental", number: "05", shortTitle: "Equipment Rental (GSE)", title: "GSE Equipment Rental Support", category: "Equipment Support" },
  { id: "outsourcing-staff", number: "06", shortTitle: "Outsourcing Staff", title: "Aviation Staff Outsourcing", category: "Human Resources" },
  { id: "airport-advertising", number: "07", shortTitle: "Airport Advertising", title: "Airport Shuttle Advertising", category: "Media & Advertising" },
  { id: "training-center", number: "08", shortTitle: "Training Center", title: "MAP Training Center", category: "Training Center" },
];

export default function ServicesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync with URL hash if provided
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = serviceTabs.findIndex((t) => t.id === hash);
        if (found !== -1) {
          setActiveIndex(found);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? serviceTabs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === serviceTabs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="services-slider-root" style={{ background: "#F8FAFC", position: "relative" }}>
      <style dangerouslySetInnerHTML={{
        __html: [
          ".svc-slider-container { max-width: 1200px; margin: 0 auto; padding: 0 24px 80px; }",
          ".svc-tab-floating-card { transform: translateY(-36px); position: relative; z-index: 10; background: #FFFFFF; border-radius: 8px; padding: 20px 24px; box-shadow: 0 10px 30px rgba(0, 31, 91, 0.06); border: 1px solid #E2E8F0; margin-bottom: 24px; }",
          ".svc-tab-fullwidth-container { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; width: 100%; }",
          ".svc-category-btn { width: 100%; display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px 14px; border-radius: 6px; font-size: 0.88rem; font-weight: 500; transition: all 0.2s ease; cursor: pointer; border: 1px solid transparent; white-space: nowrap; }",
          ".svc-category-btn.active { background: #001F5B; color: #FFFFFF; border-color: #001F5B; box-shadow: 0 2px 8px rgba(0, 31, 91, 0.2); font-weight: 600; }",
          ".svc-category-btn.inactive { background: #FFFFFF; color: #475569; border-color: #E2E8F0; }",
          ".svc-category-btn.inactive:hover { background: #F1F5F9; color: #001F5B; border-color: #CBD5E1; }",
          "",
          "/* Slider Main Card */",
          ".svc-slide-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 40px 36px; box-shadow: 0 4px 20px rgba(0,31,91,0.04); display: flex; flex-direction: column; justify-content: space-between; position: relative; }",
          ".svc-hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px; align-items: center; }",
          ".svc-sec-title { font-family: var(--font-poppins); font-size: clamp(2rem, 3.5vw, 2.6rem); font-weight: 900; line-height: 1.15; color: #001F5B; margin-bottom: 16px; text-transform: uppercase; }",
          ".svc-sec-title span { color: inherit; }",
          ".svc-sec-desc { color: #64748B; font-size: 0.98rem; line-height: 1.75; margin-bottom: 24px; }",
          ".svc-img-frame { position: relative; width: 100%; border-radius: 8px; overflow: hidden; box-shadow: 0 16px 40px rgba(0,31,91,0.1); aspect-ratio: 4/3; }",
          "",
          "/* Checklist */",
          ".svc-checklist { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 18px; }",
          ".svc-check-item { display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.9rem; font-weight: 600; line-height: 1.45; }",
          ".svc-check-dot { width: 8px; height: 8px; border-radius: 50%; background: #1967D2; flex-shrink: 0; margin-top: 6px; }",
          "",
          "/* Navigation Controls Bar */",
          ".svc-controls-bar { display: flex; align-items: center; justify-content: space-between; margin-top: 48px; padding-top: 28px; border-top: 1px solid #F1F5F9; }",
          ".svc-nav-btn { display: inline-flex; align-items: center; gap: 10px; padding: 12px 24px; border-radius: 6px; font-family: var(--font-poppins); font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: all 0.2s ease; border: 1px solid #CBD5E1; background: #FFFFFF; color: #001F5B; }",
          ".svc-nav-btn:hover { background: #001F5B; color: #FFFFFF; border-color: #001F5B; transform: translateY(-2px); box-shadow: 0 4px 14px rgba(0,31,91,0.15); }",
          ".svc-nav-btn:hover .nav-icon { color: #FFFFFF; }",
          ".nav-icon { font-size: 0.95rem; color: #1967D2; transition: color 0.2s; }",
          "",
          "/* Bento & Staff for Sliders */",
          ".bento-sub-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }",
          ".bento-sub-item { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 16px; }",
          ".staff-slider-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }",
          ".staff-slider-card { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 18px; }",
          "",
          "/* Responsive */",
          "@media (max-width: 900px) {",
          "  .svc-tab-fullwidth-container {",
          "    display: flex !important;",
          "    overflow-x: auto !important;",
          "    padding-bottom: 8px !important;",
          "    -webkit-overflow-scrolling: touch !important;",
          "  }",
          "  .svc-tab-fullwidth-container .svc-category-btn {",
          "    flex: 0 0 auto !important;",
          "    width: auto !important;",
          "  }",
          "  .svc-slide-card { padding: 24px 20px !important; }",
          "  .svc-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }",
          "  .svc-checklist { grid-template-columns: 1fr !important; gap: 10px !important; }",
          "  .bento-sub-grid { grid-template-columns: 1fr !important; }",
          "  .staff-slider-grid { grid-template-columns: 1fr !important; }",
          "  .svc-controls-bar { flex-wrap: wrap; gap: 16px; justify-content: center; }",
          "}",
        ].join('\n')
      }} />

      <div className="svc-slider-container">
        {/* Floating Card for Category Tabs Navigation */}
        <div className="svc-tab-floating-card">
          <div className="svc-tab-fullwidth-container">
            {serviceTabs.map((tab, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`svc-category-btn ${isActive ? "active" : "inactive"}`}
                >
                  {tab.shortTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Service Slide Card */}
        <div className="svc-slide-card">

          {/* SLIDE 01: GROUND HANDLING */}
          {activeIndex === 0 && (
            <div className="svc-hero-grid">
              <div>
                <span style={{ display: "inline-block", color: "#1967D2", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                  01. Ground Handling for Airlines
                </span>
                <h2 className="svc-sec-title">
                  Ground <span>Handling</span>
                </h2>
                <p className="svc-sec-desc">
                  Cakupan layanan ground handling maskapai di berbagai lokasi bandara strategis di Indonesia, dengan standar operasional dan keselamatan internasional.
                </p>

                {/* 4 Hubs */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 24 }}>
                  {airports.map((ap) => (
                    <div key={ap.code} style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 10, padding: "10px", position: "relative" }}>
                      {ap.isNew && (
                        <span style={{ position: "absolute", top: 4, right: 4, background: "#10B981", color: "#fff", fontSize: "0.55rem", fontWeight: 700, padding: "2px 4px", borderRadius: 3 }}>
                          Baru
                        </span>
                      )}
                      <span style={{ fontFamily: "var(--font-poppins)", fontSize: "1.2rem", fontWeight: 800, color: "#1967D2", display: "block", lineHeight: 1 }}>
                        {ap.code}
                      </span>
                      <strong style={{ display: "block", color: "#0F172A", fontSize: "0.78rem", marginTop: 4 }}>
                        {ap.city}
                      </strong>
                    </div>
                  ))}
                </div>

                <ul className="svc-checklist">
                  {[
                    "Ground Handling Service",
                    "Ramp Handling",
                    "GSE Rental Support",
                    "Passenger Handling & Gate Management",
                  ].map((item, i) => (
                    <li key={i} className="svc-check-item">
                      <span className="svc-check-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="svc-img-frame">
                  <Image
                    src="/services-passenger-host.jpg"
                    alt="Ground Handling & Passenger Service MAP"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 900px) 100vw, 500px"
                    priority
                  />
                  <div style={{ position: "absolute", bottom: 14, left: 14, background: "rgba(0, 31, 91, 0.92)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)", padding: "10px 16px", borderRadius: 8, color: "#fff" }}>
                    <strong style={{ display: "block", fontSize: "0.85rem" }}>MAP Ground Handling</strong>
                    <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.8)" }}>Layanan Terintegrasi Sejak 2017</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 02: PASSENGER & TICKETING SERVICES */}
          {activeIndex === 1 && (
            <div className="svc-hero-grid">
              <div>
                <span style={{ display: "inline-block", color: "#1967D2", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                  02. Ancillary Services
                </span>
                <h2 className="svc-sec-title">
                  Passenger &amp; <span>Ticketing</span>
                </h2>
                <p className="svc-sec-desc">
                  Melayani kebutuhan penumpang secara langsung, mulai dari penyambutan di terminal hingga penanganan tiket dan layanan VIP eksklusif.
                </p>

                <ul className="svc-checklist">
                  {[
                    "Transportation & Shuttle",
                    "Greeting Services di Terminal",
                    "Hand-held Metal Detector Security Services",
                    "Ticket Services",
                    "Check-in & Gate Handling Services",
                    "VIP Handling",
                  ].map((item, i) => (
                    <li key={i} className="svc-check-item">
                      <span className="svc-check-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 16, padding: "32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(25,103,210,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1967D2", fontSize: "1.3rem", marginBottom: 18 }}>
                  <i className="fas fa-user-tie" />
                </div>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.25rem", fontWeight: 700, color: "#001F5B", marginBottom: 10 }}>
                  Standar Pelayanan Hospitality Prima
                </h3>
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.7, margin: "0 0 18px" }}>
                  Personel customer service dan ticketing MAP dibekali keahlian sistem DCS maskapai, ramah, sigap, serta siap berkoordinasi untuk kelancaran arus penumpang di area terminal dan boarding gate.
                </p>
                <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 14 }}>
                  <span style={{ fontSize: "0.82rem", color: "#1967D2", fontWeight: 700 }}>
                    ✓ Melayani Terminal Domestik &amp; Internasional
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 03: RAMP SIDE SERVICE */}
          {activeIndex === 2 && (
            <div className="svc-hero-grid">
              <div>
                <span style={{ display: "inline-block", color: "#1967D2", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                  03. Ramp Operations
                </span>
                <h2 className="svc-sec-title">
                  Ramp Side <span>Service</span>
                </h2>
                <p className="svc-sec-desc">
                  Mendukung seluruh aktivitas operasional di sisi udara (ramp area) secara aman, terkoordinasi, dan tepat waktu untuk setiap penerbangan.
                </p>

                <ul className="svc-checklist">
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
              </div>

              <div>
                <div className="svc-img-frame">
                  <Image
                    src="/services-ramp-agent.jpg"
                    alt="Ramp Services Operation MAP"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 900px) 100vw, 500px"
                  />
                  <div style={{ position: "absolute", bottom: 14, left: 14, background: "rgba(0, 31, 91, 0.92)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)", padding: "10px 16px", borderRadius: 8, color: "#fff" }}>
                    <strong style={{ display: "block", fontSize: "0.88rem", fontFamily: "var(--font-poppins)" }}>RAMP SERVICES</strong>
                    <span style={{ fontSize: "0.72rem", color: "#F5A623", fontWeight: 600 }}>Operasional Sisi Udara 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 04: CABIN CLEANING */}
          {activeIndex === 3 && (
            <div className="svc-hero-grid">
              <div>
                <span style={{ display: "inline-block", color: "#1967D2", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                  04. Cleaning Services
                </span>
                <h2 className="svc-sec-title">
                  Aircraft &amp; <span>Cabin Cleaning</span>
                </h2>
                <p className="svc-sec-desc">
                  Menjaga standar kebersihan dan kenyamanan kabin pesawat secara konsisten di setiap siklus penerbangan, dari transit cepat hingga deep cleaning berkala.
                </p>

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

              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 16, padding: "32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(25,103,210,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1967D2", fontSize: "1.3rem", marginBottom: 18 }}>
                  <i className="fas fa-broom" />
                </div>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.25rem", fontWeight: 700, color: "#001F5B", marginBottom: 10 }}>
                  Bahan &amp; Prosedur Tersertifikasi
                </h3>
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.7, margin: "0 0 18px" }}>
                  Seluruh proses pembersihan kabin dan pencucian eksterior menggunakan chemical pembersih ramah lingkungan yang memenuhi sertifikasi pabrikan pesawat (Boeing &amp; Airbus approved).
                </p>
                <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 14 }}>
                  <span style={{ fontSize: "0.82rem", color: "#1967D2", fontWeight: 700 }}>
                    ✓ Cepat, Bersih &amp; Menjaga Standar Higienitas
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 05: EQUIPMENT RENTAL SUPPORT */}
          {activeIndex === 4 && (
            <div>
              <div style={{ marginBottom: 28 }}>
                <span style={{ display: "inline-block", color: "#1967D2", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                  05. EQUIPMENT
                </span>
                <h2 className="svc-sec-title" style={{ marginBottom: 16 }}>
                  Equipment Rental <span>Support</span>
                </h2>
                <p className="svc-sec-desc" style={{ maxWidth: 850, margin: 0, fontSize: "1.02rem", lineHeight: 1.7 }}>
                  Penyewaan peralatan Ground Support Equipment (GSE) berkualitas tinggi untuk menunjang kelancaran operasional di area bandara.
                </p>
              </div>

              <ul className="svc-checklist" style={{ marginTop: 28, gridTemplateColumns: "1fr 1fr", gap: "20px 32px" }}>
                {[
                  "GPU (Ground Power Unit) Rental Support",
                  "GTC (Ground Tow Coupling) Rental Support",
                  "ACU (Air Conditioning Unit) Rental Support",
                  "BTT(Baggage Towing Tractor) Rental Support",
                  "Aircraft Maintenance Stair Rental Support",
                ].map((item, i) => (
                  <li key={i} className="svc-check-item" style={{ fontSize: "0.95rem", color: "#1E293B", fontWeight: 600 }}>
                    <span className="svc-check-dot" style={{ background: "#10B981", borderRadius: 3, width: 10, height: 10, marginTop: 5 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* SLIDE 06: OUTSOURCING STAFF */}
          {activeIndex === 5 && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <span style={{ display: "inline-block", color: "#1967D2", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                  06. Human Resources
                </span>
                <h2 className="svc-sec-title" style={{ marginBottom: 8 }}>
                  Outsourcing <span>Staff</span>
                </h2>
                <p className="svc-sec-desc" style={{ maxWidth: 700, margin: 0 }}>
                  Menyediakan tenaga kerja profesional dan bersertifikasi untuk mendukung berbagai lini operasional bandara dan maskapai.
                </p>
              </div>

              <div className="staff-slider-grid">
                <div className="staff-slider-card">
                  <h4 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", fontWeight: 700, color: "#001F5B", margin: "0 0 6px" }}>
                    Ground Staff
                  </h4>
                  <p style={{ color: "#64748B", fontSize: "0.85rem", margin: 0, lineHeight: 1.5 }}>
                    Petugas check-in counter, boarding gate, customer service, dan penanganan penumpang. (DCS Certified)
                  </p>
                </div>

                <div className="staff-slider-card">
                  <h4 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", fontWeight: 700, color: "#001F5B", margin: "0 0 6px" }}>
                    Aviation Security (AVSEC)
                  </h4>
                  <p style={{ color: "#64748B", fontSize: "0.85rem", margin: 0, lineHeight: 1.5 }}>
                    Personel AVSEC berlisensi resmi DKPPU Kemenhub untuk pengamanan area terminal dan sisi udara bandara.
                  </p>
                </div>

                <div className="staff-slider-card">
                  <h4 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", fontWeight: 700, color: "#001F5B", margin: "0 0 6px" }}>
                    GSE Operator
                  </h4>
                  <p style={{ color: "#64748B", fontSize: "0.85rem", margin: 0, lineHeight: 1.5 }}>
                    Operator alat berat apron bersertifikat SIO &amp; TIM untuk BTT, GPU, dan kendaraan apron.
                  </p>
                </div>

                <div className="staff-slider-card">
                  <h4 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", fontWeight: 700, color: "#001F5B", margin: "0 0 6px" }}>
                    Porter &amp; Baggage Handling
                  </h4>
                  <p style={{ color: "#64748B", fontSize: "0.85rem", margin: 0, lineHeight: 1.5 }}>
                    Tenaga porter terminal dan loading/unloading bagasi yang terlatih menangani muatan secara cepat dan aman.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 07: AIRPORT ADVERTISING */}
          {activeIndex === 6 && (
            <div className="svc-hero-grid">
              <div>
                <span style={{ display: "inline-block", color: "#1967D2", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                  07. Media Promosi
                </span>
                <h2 className="svc-sec-title">
                  Shuttle Bus <span>Advertising</span>
                </h2>
                <p className="svc-sec-desc">
                  Media promosi bergerak eksklusif di 6 armada shuttle bus bandara MAP (CGK, SUB, KNO, UPG). Jangkau captive audience ribuan penumpang setiap hari.
                </p>

                <ul className="svc-checklist">
                  {[
                    "Full Bus Wrap (360° Exterior Branding)",
                    "Side Panel & Rear Window Branding",
                    "Interior Overhead Passenger Cards",
                    "Hand-Grip Strap Advertising",
                  ].map((item, i) => (
                    <li key={i} className="svc-check-item">
                      <span className="svc-check-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 16, padding: "32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(25,103,210,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1967D2", fontSize: "1.3rem", marginBottom: 18 }}>
                  <i className="fas fa-bullhorn" />
                </div>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.25rem", fontWeight: 700, color: "#001F5B", marginBottom: 10 }}>
                  Visibilitas Maksimal di 4 Bandara Utama
                </h3>
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.7, margin: "0 0 18px" }}>
                  Armada shuttle bus kami beroperasi nonstop di bandara Soekarno-Hatta (CGK), Juanda (SUB), Kualanamu (KNO), dan Sultan Hasanuddin (UPG).
                </p>
                <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 14 }}>
                  <span style={{ fontSize: "0.82rem", color: "#1967D2", fontWeight: 700 }}>
                    ✓ Captive Market Wisatawan &amp; Bisnis
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 08: TRAINING CENTER */}
          {activeIndex === 7 && (
            <div className="svc-hero-grid">
              <div>
                <span style={{ display: "inline-block", color: "#F5A623", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                  08. Unit Bisnis
                </span>
                <h2 className="svc-sec-title">
                  MAP <span>Training Center</span>
                </h2>
                <p className="svc-sec-desc">
                  Pusat pelatihan kejuruan aviasi terpadu untuk mencetak tenaga profesional operasional bandara yang kompeten, bersertifikat, dan berdaya saing tinggi.
                </p>

                <ul className="svc-checklist">
                  {[
                    "Aviation Security (AVSEC) Training Resmi",
                    "Ground Support Equipment (GSE) Training",
                    "Customer Service & DCS Hospitality",
                    "Dangerous Goods Awareness",
                  ].map((item, i) => (
                    <li key={i} className="svc-check-item">
                      <span className="svc-check-dot" style={{ background: "#F5A623" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 16, padding: "32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,166,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D97706", fontSize: "1.3rem", marginBottom: 18 }}>
                  <i className="fas fa-graduation-cap" />
                </div>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.25rem", fontWeight: 700, color: "#001F5B", marginBottom: 10 }}>
                  Fasilitas &amp; Instruktur Tersertifikasi
                </h3>
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.7, margin: "0 0 18px" }}>
                  Didukung kurikulum resmi Kemenhub DKPPU, simulator peralatan modern, dan instruktur senior berpengalaman di industri ground handling nasional.
                </p>
                <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 14 }}>
                  <span style={{ fontSize: "0.82rem", color: "#D97706", fontWeight: 700 }}>
                    ✓ Sertifikasi Resmi &amp; Penyaluran Kerja
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Left & Right Navigation Controls */}
          <div className="svc-controls-bar">
            <button onClick={handlePrev} className="svc-nav-btn" aria-label="Layanan Sebelumnya">
              <i className="fas fa-arrow-left nav-icon" />
              <span>Sebelumnya</span>
            </button>

            <button onClick={handleNext} className="svc-nav-btn" aria-label="Layanan Selanjutnya">
              <span>Selanjutnya</span>
              <i className="fas fa-arrow-right nav-icon" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
