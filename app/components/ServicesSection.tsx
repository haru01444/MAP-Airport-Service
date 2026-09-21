"use client";

import { useState } from "react";

const services = [
  {
    id: "svc-01",
    label: "Ground Handling for Airlines",
    tag: "01 Ã¢â‚¬â€œ Ground Handling",
    short: "GH Ã¢â‚¬Â¢ 01",
    title: "Ground Handling Services for Airlines",
    desc: "Cakupan layanan ground handling maskapai di berbagai lokasi bandara strategis di Indonesia, dengan standar operasional dan keselamatan internasional.",
    airports: [
      { code: "CGK", city: "Jakarta", name: "Soekarno-Hatta Int'l", isNew: true },
      { code: "SUB", city: "Surabaya", name: "Juanda Int'l", isNew: false },
      { code: "KNO", city: "Deli / Medan", name: "Kualanamu Int'l", isNew: false },
      { code: "UPG", city: "Makassar", name: "Sultan Hasanuddin Int'l", isNew: false },
    ],
    items: [
      "Ground Handling Service",
      "Ramp Handling",
      "GSE Rental Support",
      "Passenger Handling Service (Check In counter & Gate Management)",
    ],
  },
  {
    id: "svc-02",
    label: "Passenger & Ticketing Services",
    tag: "02 Ã¢â‚¬â€œ Ancillary",
    short: "CLN Ã¢â‚¬Â¢ 02",
    title: "Passenger & Ticketing Services",
    desc: "Melayani kebutuhan penumpang secara langsung, mulai dari penyambutan di terminal hingga penanganan tiket dan layanan VIP eksklusif.",
    items: ["Transportation", "Greeting Services", "Hand-held Metal Detector Security Services", "Ticket Services", "Check In and Gate Handling Services", "VIP Handling"],
  },
  {
    id: "svc-03",
    label: "Ramp Side Service",
    tag: "03 Ã¢â‚¬â€œ Ramp",
    short: "TKT Ã¢â‚¬Â¢ 03",
    title: "Ramp Side Service",
    desc: "Mendukung seluruh aktivitas operasional di sisi udara (ramp area) secara aman, terkoordinasi, dan tepat waktu untuk setiap penerbangan.",
    items: ["Crew Transport (pesawat ke terminal)", "Apron Passenger Bus (APB)", "Aviation Security Transport", "Lavatory & Water Services", "Baggage Towing Tractor (BTT)", "Ground Power Service (GPS)", "Ground Power Unit (GPU)"],
  },
  {
    id: "svc-04",
    label: "Aircraft & Cabin Cleaning",
    tag: "04 Ã¢â‚¬â€œ Cleaning",
    short: "AVS Ã¢â‚¬Â¢ 04",
    title: "Aircraft & Cabin Cleaning Services",
    desc: "Menjaga standar kebersihan dan kenyamanan kabin pesawat secara konsisten di setiap siklus penerbangan, dari transit cepat hingga deep cleaning berkala.",
    items: ["Lavatory Soaking", "Daily Interior Cabin Cleaning", "Transit Cleaning", "Deep / Weekly Cabin Cleaning", "Aircraft Exterior Washing", "Aircraft Exterior Polishing"],
  },
  {
    id: "svc-05",
    label: "Equipment Rental Support",
    tag: "05 Ã¢â‚¬â€œ Equipment",
    short: "EQP Ã¢â‚¬Â¢ 05",
    title: "Equipment Rental Support",
    desc: "Penyewaan peralatan Ground Support Equipment (GSE) berkualitas tinggi untuk menunjang kelancaran operasional di area bandara.",
    items: ["GPU (Ground Power Unit) Rental Support", "GTC (Ground Tow Coupling) Rental Support", "ACU (Air Conditioning Unit) Rental Support", "BTT(Baggage Towing Tractor) Rental Support", "Aircraft Maintenance Stair Rental Support"],  },
  {
    id: "svc-06",
    label: "Outsourcing Staff",
    tag: "06 — Staff",
    short: "STF — 06",
    title: "Outsourcing Staff",
    desc: "Menyediakan tenaga kerja profesional dan terlatih untuk mendukung berbagai lini operasional bandara dan maskapai.",
    items: ["Ground Staff", "Aviation Security", "GSE Operator", "Porter"],
  },
  {
    id: "svc-07",
    label: "Training Center",
    tag: "07 — Training",
    short: "TRN — 07",
    title: "Training Center",
    desc: "Pusat pelatihan terpadu untuk mencetak tenaga profesional aviasi yang kompeten dan tersertifikasi.",
    items: ["Aviation Security", "GSE Training Center"],
  }
];

export default function ServicesSection() {
  const [active, setActive] = useState("svc-01");
  const current = services.find((s) => s.id === active) || services[0];

  return (
    <section id="services" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        <style dangerouslySetInnerHTML={{
          __html: [
            "/* ================================================= */",
            "          /* DESKTOP LAYOUT (Tabbed Card UI)                   */",
            "          /* ================================================= */",
            "          .desktop-layout {",
            "            display: flex;",
            "            align-items: stretch;",
            "          }",
            "          .mobile-layout {",
            "            display: none;",
            "          }",
            "",
            "          .desktop-nav-wrap {",
            "            width: 360px;",
            "            flex-shrink: 0;",
            "            border: 1px solid #E2E8F0;",
            "            border-right: none;",
            "            border-radius: 16px 0 0 16px;",
            "            background: #fff;",
            "            display: flex;",
            "            flex-direction: column;",
            "            overflow: hidden;",
            "          }",
            "          ",
            "          .desktop-nav-btn {",
            "            display: flex;",
            "            align-items: center;",
            "            width: 100%;",
            "            padding: 24px 20px;",
            "            border: none;",
            "            background: #fff;",
            "            border-bottom: 1px solid #E2E8F0;",
            "            border-left: 4px solid transparent;",
            "            cursor: pointer;",
            "            text-align: left;",
            "            position: relative;",
            "            transition: all 0.2s;",
            "          }",
            "          .desktop-nav-btn:last-child {",
            "            border-bottom: none;",
            "          }",
            "          .desktop-nav-btn.active {",
            "            background: #F8FAFC;",
            "            border-left-color: #F5A623;",
            "            margin-right: -1px; /* overlays the panel's left border */",
            "            z-index: 10;",
            "          }",
            "          ",
            "          .d-nav-left {",
            "            color: #64748B;",
            "            font-family: var(--font-poppins);",
            "            font-weight: 600;",
            "            font-size: 0.95rem;",
            "            width: 80px;",
            "            flex-shrink: 0;",
            "          }",
            "          .desktop-nav-btn.active .d-nav-left {",
            "            color: #F5A623;",
            "          }",
            "          ",
            "          .d-nav-title {",
            "            color: #475569;",
            "            font-family: var(--font-poppins);",
            "            font-weight: 600;",
            "            font-size: 1.05rem;",
            "            line-height: 1.3;",
            "            flex-grow: 1;",
            "            padding-right: 16px;",
            "          }",
            "          .desktop-nav-btn.active .d-nav-title {",
            "            color: #0F172A;",
            "            font-weight: 700;",
            "          }",
            "          ",
            "          .d-nav-icon {",
            "            color: #94A3B8;",
            "            font-size: 0.85rem;",
            "          }",
            "          .desktop-nav-btn.active .d-nav-icon {",
            "            color: #F5A623;",
            "          }",
            "",
            "          .desktop-panel-wrap {",
            "            flex-grow: 1;",
            "            background: #F8FAFC;",
            "            border: 1px solid #E2E8F0;",
            "            border-radius: 0 16px 16px 0;",
            "            padding: 48px;",
            "            position: relative;",
            "            z-index: 1;",
            "          }",
            "",
            "          /* ================================================= */",
            "          /* MOBILE ACCORDION STYLES                           */",
            "          /* ================================================= */",
            "          .svc-accordion-item { border: 1px solid #E2E8F0; border-radius: 12px; margin-bottom: 16px; overflow: hidden; background: #fff; }",
            "          .svc-accordion-header { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px; background: #F8FAFC; border: none; cursor: pointer; text-align: left; }",
            "          .svc-accordion-header.active { border-bottom: 1px solid #E2E8F0; transition: border-color 0.4s ease; }",
            "          .svc-acc-left { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }",
            "          .svc-acc-code { color: #F5A623; font-family: var(--font-poppins); font-weight: 700; font-size: 0.95rem; letter-spacing: 0.05em; }",
            "          .svc-acc-title { color: #0F172A; font-family: var(--font-poppins); font-weight: 700; font-size: 1.15rem; }",
            "          .svc-acc-icon { color: #1967D2; font-size: 1rem; transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }",
            "          ",
            "          /* Accordion Animation Classes */",
            "          .svc-accordion-collapse {",
            "            display: grid;",
            "            transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);",
            "          }",
            "          .svc-accordion-collapse-inner {",
            "            overflow: hidden;",
            "          }",
            "",
            "          .svc-accordion-body { padding: 24px 20px; background: #fff; }",
            "          .svc-body-desc { color: #475569; line-height: 1.7; font-size: 1.05rem; margin-bottom: 24px; }",
            "          ",
            "          .svc-ap-grid { display: grid; gap: 16px; }",
            "          .svc-ap-card { background: #F8FAFC; border-radius: 12px; padding: 20px 24px; border: 1px solid #E2E8F0; display: flex; flex-direction: column; gap: 8px; }",
            "          .svc-ap-code { font-family: var(--font-poppins); font-size: 1.6rem; font-weight: 800; color: #1967D2; line-height: 1;}",
            "          .svc-ap-city { display: block; color: #0F172A; font-size: 1rem; font-weight: 700; margin-bottom: 2px; }",
            "          .svc-ap-name { color: #64748B; font-size: 0.85rem; }",
            "          ",
            "          .svc-item-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }",
            "          .svc-item-list li { display: flex; align-items: flex-start; gap: 12px; color: #334155; font-size: 0.95rem; font-weight: 600; line-height: 1.5; }",
            "          .svc-item-list li::before { content: ''; width: 12px; height: 12px; background: #10B981; border-radius: 3px; flex-shrink: 0; margin-top: 4px; }",
            "",
            "          @media (max-width: 768px) {",
            "            .desktop-layout { display: none !important; }",
            "            .mobile-layout { display: block !important; }",
            "            .svc-top-wrap { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; margin-bottom: 28px !important; }",
            "            .svc-eyebrow { font-size: 11.5px !important; margin-bottom: 12px !important; }",
            "            .svc-top-desc { margin-top: 0 !important; font-size: 13.5px !important; line-height: 1.7 !important; }",
            "            ",
            "            /* FORCE 2x2 FOR AIRPORTS GRID ON MOBILE */",
            "            .svc-ap-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }",
            "            .svc-ap-card { padding: 16px 12px !important; }",
            "            .svc-ap-code { font-size: 1.2rem !important; }",
            "            .svc-ap-city { font-size: 0.85rem !important; }",
            "            .svc-ap-name { font-size: 0.75rem !important; }",
            "",
            "            .svc-item-list { grid-template-columns: 1fr !important; gap: 12px !important; }",
            "          }"
          ].join('\n')
        }} />

        {/* Top Header */}
        <div className="svc-top-wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, marginBottom: 48, flexWrap: "wrap" }}>
          <div>
            <span
              className="svc-eyebrow"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "#1967D2",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
              Layanan Kami
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, margin: 0 }}>
              Solusi Ground Handling<br />
              <strong>yang Menyeluruh.</strong>
            </h2>
          </div>
          <p className="svc-top-desc" style={{ color: "#64748B", maxWidth: 580, lineHeight: 1.75 }}>
            Kami menyediakan layanan ground handling untuk maskapai penerbangan di berbagai bandara utama di Indonesia,
            dilengkapi dengan rangkaian layanan pendukung yang dirancang untuk memastikan operasional penerbangan
            berjalan lancar, aman, dan efisien.
          </p>
        </div>

        {/* ==================================================== */}
        {/* DESKTOP LAYOUT (Tabbed Card UI) */}
        {/* ==================================================== */}
        <div className="desktop-layout">
          {/* Nav */}
          <div className="desktop-nav-wrap">
            {services.map((svc) => {
              const isActive = active === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActive(svc.id)}
                  className={"desktop-nav-btn" + (isActive ? " active" : "")}
                >
                  <span className="d-nav-left">{svc.short}</span>
                  <span className="d-nav-title">{svc.title}</span>
                  <i className="fas fa-chevron-right d-nav-icon" />
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="desktop-panel-wrap">
            <div style={{ color: "#1967D2", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              {current.tag}
            </div>
            <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 12 }}>
              {current.title}
            </h3>
            <p style={{ color: "#475569", lineHeight: 1.75, marginBottom: 28 }}>{current.desc}</p>

            {current.airports && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                {current.airports.map((ap) => (
                  <div
                    key={ap.code}
                    style={{
                      background: "#fff",
                      borderRadius: 10,
                      padding: "16px 12px",
                      border: "1px solid #E2E8F0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 6,
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-poppins)", fontSize: "1.4rem", fontWeight: 800, color: "#1967D2", lineHeight: 1 }}>{ap.code}</span>
                    <div>
                      <strong style={{ display: "block", color: "#0F172A", fontSize: "0.85rem", marginBottom: 2 }}>{ap.city}</strong>
                      <span style={{ color: "#64748B", fontSize: "0.7rem", display: "block", lineHeight: 1.3 }}>{ap.name}</span>

                    </div>
                  </div>
                ))}
              </div>
            )}

            {current.airports && current.items && (
              <div style={{ borderTop: "1px dashed #CBD5E1", margin: "24px 0" }} />
            )}

            {current.items && (
              <ul className="svc-item-list" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
                {current.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ==================================================== */}
        {/* MOBILE LAYOUT (Accordion / Dropdown) */}
        {/* ==================================================== */}
        <div className="mobile-layout">
          {services.map((svc) => {
            const isActive = active === svc.id;
            return (
              <div key={svc.id} className="svc-accordion-item">
                <button
                  className={"svc-accordion-header" + (isActive ? " active" : "")}
                  onClick={() => setActive(isActive ? "" : svc.id)}
                >
                  <div className="svc-acc-left">
                    <span className="svc-acc-code">{svc.short}</span>
                    <span className="svc-acc-title">{svc.title}</span>
                  </div>
                  <i
                    className="fas fa-chevron-up svc-acc-icon"
                    style={{ transform: isActive ? 'rotate(0deg)' : 'rotate(180deg)' }}
                  />
                </button>

                {/* Smooth CSS Grid Animation Wrapper */}
                <div
                  className="svc-accordion-collapse"
                  style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                >
                  <div className="svc-accordion-collapse-inner">
                    <div className="svc-accordion-body">
                      <p className="svc-body-desc">{svc.desc}</p>

                      {svc.airports && (
                        <div className="svc-ap-grid">
                          {svc.airports.map((ap) => (
                            <div key={ap.code} className="svc-ap-card">
                              <span className="svc-ap-code">{ap.code}</span>
                              <div>
                                <strong className="svc-ap-city">{ap.city}</strong>
                                <span className="svc-ap-name">{ap.name}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {svc.airports && svc.items && (
                        <div style={{ borderTop: "1px dashed #CBD5E1", margin: "24px 0" }} />
                      )}

                      {svc.items && (
                        <ul className="svc-item-list">
                          {svc.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}




