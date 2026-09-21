import Image from "next/image";

const milestones = [

  {
    year: "2017",
    title: "Awal Operasional",
    desc: "Memulai kerja sama operasional dengan Trinusa Ekasakti, serta menghadirkan layanan Passenger Bus Service dan Crew Transport.",
    future: false,
  },
  {
    year: "2018",
    title: "Perluasan Layanan",
    desc: "GSE Handling, VIP Service, Ticketing, Passenger & Baggage Handling, Crew Transport,  dan LST/WST Service.",
    future: false,
  },
  {
    year: "2022",
    title: "Pertumbuhan Operasional",
    desc: "Lavatory Service, Water Service, Crew Transport, Terminal Handling Support, Passanger Bus, dan Land Transport Outsourcing.",
    future: false,
  },
  {
    year: "2026",
    title: "MAP Training Center",
    desc: "Pusat pengembangan kompetensi AVSEC Training, GSE Training, pengembangan SDM, pelatihan operasional, dan sertifikasi profesional.",
    future: true,
  },
];

export default function MilestoneSection() {
  return (
    <section id="milestone" style={{ position: "relative", padding: "100px 0", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1920&q=85"
          alt="Aircraft"
          fill
          style={{ objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(1,13,46,0.92)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div className="ms-header-wrap" style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            className="ms-eyebrow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "#fff",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
            Perjalanan Kami
          </span>
          <h2 className="ms-h2" style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: 16 }}>
            Tumbuh dan Berkembang Bersama <br /> Industri Aviasi Indonesia
          </h2>
          <p className="ms-intro" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Sejak awal berdiri, Mawaddah Angkasa Prima terus memperluas jangkauan layanan dan memperkuat
            kapasitas operasional demi mendukung industri penerbangan nasional.
          </p>
        </div>

        {/* Timeline */}
        <style dangerouslySetInnerHTML={{
          __html: [
            "@media (max-width: 768px) {",
            "            .ms-header-wrap { margin-bottom: 32px !important; }",
            "            .ms-eyebrow { margin-bottom: 12px !important; }",
            "            .ms-h2 { font-size: 23px !important; line-height: 1.25 !important; margin-bottom: 16px !important; }",
            "            .ms-intro { font-size: 13.5px !important; line-height: 1.7 !important; }",
            "            ",
            "            .timeline-item-responsive {",
            "              justify-content: flex-start !important;",
            "            }",
            "            .timeline-center-line {",
            "              left: 12px !important;",
            "              transform: translateX(-50%) !important;",
            "              background: rgba(74, 158, 245, 0.2) !important;",
            "            }",
            "            .timeline-dot-responsive {",
            "              left: 12px !important;",
            "              top: 5px !important; /* aligns beautifully with text */",
            "              transform: translateX(-50%) !important;",
            "              width: 14px !important;",
            "              height: 14px !important;",
            "            }",
            "            .timeline-card-responsive {",
            "              width: calc(100% - 36px) !important;",
            "              margin-left: 36px !important;",
            "              padding: 0 !important;",
            "              background: transparent !important;",
            "              border: none !important;",
            "              backdrop-filter: none !important;",
            "            }",
            "            .ms-year {",
            "              font-size: 1.05rem !important;",
            "              margin-bottom: 2px !important;",
            "            }",
            "            .ms-title {",
            "              font-size: 1.05rem !important;",
            "              margin-bottom: 8px !important;",
            "            }",
            "            .ms-desc {",
            "              font-size: 0.88rem !important;",
            "              color: rgba(255,255,255,0.6) !important;",
            "              line-height: 1.6 !important;",
            "            }"
          ].join('\n')
        }} />
        <div style={{ position: "relative" }}>
          {/* Center line */}
          <div
            className="timeline-center-line"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background: "rgba(255,255,255,0.15)",
              transform: "translateX(-50%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="timeline-item-responsive"
                style={{
                  display: "flex",
                  justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                  position: "relative",
                }}
              >
                {/* Dot / Circle Indicator */}
                <div
                  className="timeline-dot-responsive"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 24, /* Aligns visually with the box padding in desktop */
                    transform: "translateX(-50%)",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: m.future ? "#F5A623" : "transparent",
                    border: m.future ? "none" : "2px solid #4A9EF5",
                    zIndex: 2,
                  }}
                />

                {/* Card / Text Content */}
                <div
                  className="timeline-card-responsive"
                  style={{
                    width: "calc(50% - 40px)",
                    background: m.future ? "rgba(245,166,35,0.08)" : "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(10px)",
                    border: m.future ? "1px solid rgba(245,166,35,0.3)" : "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 14,
                    padding: "20px 24px",
                  }}
                >
                  <div
                    className="ms-year"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: m.future ? "#F5A623" : "#4A9EF5",
                      marginBottom: 6,
                    }}
                  >
                    {m.year}
                  </div>
                  <h3 className="ms-title" style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: 6 }}>{m.title}</h3>
                  <p className="ms-desc" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontSize: "0.88rem" }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
