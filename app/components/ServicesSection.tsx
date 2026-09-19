"use client";

import { useState } from "react";

const services = [
  {
    id: "svc-01",
    label: "Ground Handling for Airlines",
    tag: "01 – Ground Handling",
    title: "Ground Handling Services for Airlines",
    desc: "Cakupan layanan ground handling maskapai di empat lokasi bandara strategis di Indonesia, dengan standar operasional dan keselamatan internasional.",
    airports: [
      { code: "CGK", city: "Jakarta", name: "Soekarno-Hatta Int'l", isNew: true },
      { code: "SUB", city: "Surabaya", name: "Juanda Int'l", isNew: false },
      { code: "KNO", city: "Deli / Medan", name: "Kualanamu Int'l", isNew: false },
      { code: "UPG", city: "Makassar", name: "Sultan Hasanuddin Int'l", isNew: false },
    ],
  },
  {
    id: "svc-02",
    label: "Passenger & Ticketing Services",
    tag: "02 – Ancillary",
    title: "Passenger & Ticketing Services",
    desc: "Melayani kebutuhan penumpang secara langsung, mulai dari penyambutan di terminal hingga penanganan tiket dan layanan VIP eksklusif.",
    items: ["Transportation", "Greeting Services", "Hand-held Metal Detector Security Services", "Ticket Services", "Passenger Services", "VIP Handling"],
  },
  {
    id: "svc-03",
    label: "Ramp Side Service",
    tag: "03 – Ramp",
    title: "Ramp Side Service",
    desc: "Mendukung seluruh aktivitas operasional di sisi udara (ramp area) secara aman, terkoordinasi, dan tepat waktu untuk setiap penerbangan.",
    items: ["Crew Transport (pesawat ke terminal)", "Apron Passenger Bus (APB)", "Aviation Security Transport", "Lavatory & Water Services", "Baggage Towing Tractor"],
  },
  {
    id: "svc-04",
    label: "Aircraft & Cabin Cleaning",
    tag: "04 – Cleaning",
    title: "Aircraft & Cabin Cleaning Services",
    desc: "Menjaga standar kebersihan dan kenyamanan kabin pesawat secara konsisten di setiap siklus penerbangan, dari transit cepat hingga deep cleaning berkala.",
    items: ["Lavatory Soaking", "Night Stop Cleaning", "Daily Cabin Cleaning", "Transit Cleaning", "Deep / Weekly Cabin Cleaning"],
  },
  {
    id: "svc-05",
    label: "Equipment Rental Support",
    tag: "05 – Equipment",
    title: "Equipment Rental Support",
    desc: "Penyewaan peralatan Ground Support Equipment (GSE) berkualitas tinggi untuk menunjang kelancaran operasional di area bandara.",
    items: ["GPU (Ground Power Unit) Rental Support", "GTC (Ground Tow Coupling) Rental Support", "ACU (Air Conditioning Unit) Rental Support"],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState("svc-01");
  const current = services.find((s) => s.id === active)!;

  return (
    <section id="services" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Top */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, marginBottom: 48, flexWrap: "wrap" }}>
          <div>
            <span style={{ color: "#F5A623", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em", display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ width: 10, height: 10, background: "#F5A623", borderRadius: 2, display: "inline-block" }} />
              Layanan Kami
            </span>
            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, margin: 0 }}>
              Solusi Ground Handling<br />
              <strong>yang Menyeluruh.</strong>
            </h2>
          </div>
          <p style={{ color: "#64748B", maxWidth: 420, lineHeight: 1.75 }}>
            Kami menyediakan layanan ground handling untuk maskapai penerbangan di berbagai bandara utama di Indonesia,
            dilengkapi dengan rangkaian layanan pendukung yang dirancang untuk memastikan operasional penerbangan
            berjalan lancar, aman, dan efisien.
          </p>
        </div>

        <div style={{ height: 1, background: "#E2E8F0", marginBottom: 48 }} />

        {/* Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 40 }} className="services-layout">

          {/* Nav */}
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setActive(svc.id)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 20px",
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s",
                  background: active === svc.id ? "linear-gradient(135deg, #001F5B, #1967D2)" : "transparent",
                  color: active === svc.id ? "#fff" : "#475569",
                  fontWeight: active === svc.id ? 600 : 500,
                  fontSize: "0.9rem",
                }}
              >
                <span>{svc.label}</span>
                <i className="fas fa-arrow-right" style={{ fontSize: "0.75rem", opacity: active === svc.id ? 1 : 0.4 }} />
              </button>
            ))}
          </nav>

          {/* Panel */}
          <div
            style={{
              background: "#F8FAFC",
              borderRadius: 16,
              padding: 40,
              border: "1px solid #E2E8F0",
            }}
          >
            <div style={{ color: "#1967D2", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              {current.tag}
            </div>
            <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 12 }}>
              {current.title}
            </h3>
            <p style={{ color: "#475569", lineHeight: 1.75, marginBottom: 28 }}>{current.desc}</p>

            {current.airports && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                {current.airports.map((ap) => (
                  <div
                    key={ap.code}
                    style={{
                      background: "#fff",
                      borderRadius: 10,
                      padding: "16px 20px",
                      border: "1px solid #E2E8F0",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-poppins)", fontSize: "1.4rem", fontWeight: 800, color: "#1967D2" }}>{ap.code}</span>
                    <div>
                      <strong style={{ display: "block", color: "#0F172A", fontSize: "0.9rem" }}>{ap.city}</strong>
                      <span style={{ color: "#64748B", fontSize: "0.78rem" }}>{ap.name}</span>
                      {ap.isNew && (
                        <em style={{ display: "block", color: "#F5A623", fontSize: "0.72rem", fontStyle: "normal", fontWeight: 600, marginTop: 2 }}>
                          Baru · Feb 2024
                        </em>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {current.items && (
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {current.items.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, color: "#475569" }}>
                    <i className="fas fa-check" style={{ color: "#1967D2", fontSize: "0.85rem", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
