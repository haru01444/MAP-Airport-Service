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
    desc: "GSE Handling, VIP Service, Ticketing, Passenger & Baggage Handling, Crew Transport, dan LST/WST Service.",
    future: false,
  },
  {
    year: "2022",
    title: "Pertumbuhan Operasional",
    desc: "Lavatory Service, Water Service, Crew Transport, Terminal Handling Support, Passenger Bus, dan Land Transport Outsourcing.",
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
    <section id="milestone" style={{ position: "relative", padding: "100px 0", background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div className="ms-header-wrap" style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            className="ms-eyebrow"
            style={{
              display: "inline-block",
              color: "#1967D2",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Perjalanan Kami
          </span>
          <h2 className="ms-h2" style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, marginBottom: 16 }}>
            Tumbuh dan Berkembang Bersama <br /> Industri Aviasi Indonesia
          </h2>
          <p className="ms-intro" style={{ color: "#64748B", maxWidth: 560, margin: "0 auto", lineHeight: 1.75, fontSize: "0.95rem" }}>
            Sejak awal berdiri, Mawaddah Angkasa Prima terus memperluas jangkauan layanan dan memperkuat
            kapasitas operasional demi mendukung industri penerbangan nasional.
          </p>
        </div>

        {/* Timeline */}
        <style dangerouslySetInnerHTML={{
          __html: [
            "@media (max-width: 768px) {",
            "  .ms-header-wrap { margin-bottom: 32px !important; }",
            "  .ms-eyebrow { margin-bottom: 12px !important; }",
            "  .ms-h2 { font-size: 23px !important; line-height: 1.25 !important; margin-bottom: 16px !important; }",
            "  .ms-intro { font-size: 13.5px !important; line-height: 1.7 !important; }",
            "  ",
            "  .timeline-item-responsive {",
            "    justify-content: flex-start !important;",
            "  }",
            "  .timeline-center-line {",
            "    left: 12px !important;",
            "    transform: translateX(-50%) !important;",
            "    background: #CBD5E1 !important;",
            "  }",
            "  .timeline-dot-responsive {",
            "    left: 12px !important;",
            "    top: 6px !important;",
            "    transform: translateX(-50%) !important;",
            "    width: 14px !important;",
            "    height: 14px !important;",
            "  }",
            "  .timeline-card-responsive {",
            "    width: calc(100% - 36px) !important;",
            "    margin-left: 36px !important;",
            "    padding: 16px 20px !important;",
            "    border-radius: 10px !important;",
            "  }",
            "  .ms-year {",
            "    font-size: 15px !important;",
            "    font-family: monospace !important;",
            "    font-weight: 700 !important;",
            "    margin-bottom: 4px !important;",
            "  }",
            "  .ms-title {",
            "    font-size: 1rem !important;",
            "    margin-bottom: 6px !important;",
            "  }",
            "  .ms-desc {",
            "    font-size: 13px !important;",
            "    color: #475569 !important;",
            "    line-height: 1.65 !important;",
            "  }",
            "}"
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
              background: "#E2E8F0",
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
                    top: 24,
                    transform: "translateX(-50%)",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: m.future ? "#F5A623" : "#FFFFFF",
                    border: m.future ? "3px solid #F5A623" : "3px solid #1967D2",
                    boxShadow: "0 0 0 4px #FFFFFF",
                    zIndex: 2,
                  }}
                />

                {/* Card / Text Content */}
                <div
                  className="timeline-card-responsive"
                  style={{
                    width: "calc(50% - 40px)",
                    background: m.future ? "rgba(245,166,35,0.08)" : "#F8FAFC",
                    border: m.future ? "1px solid rgba(245,166,35,0.4)" : "1px solid #E2E8F0",
                    borderRadius: 12,
                    padding: "20px 24px",
                    boxShadow: "0 4px 16px rgba(0,31,91,0.04)",
                  }}
                >
                  <div
                    className="ms-year"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: m.future ? "#D97706" : "#1967D2",
                      marginBottom: 6,
                    }}
                  >
                    {m.year}
                  </div>
                  <h3 className="ms-title" style={{ color: "#0F172A", fontWeight: 700, fontSize: "1.05rem", marginBottom: 6 }}>{m.title}</h3>
                  <p className="ms-desc" style={{ color: "#475569", lineHeight: 1.7, fontSize: "0.88rem", margin: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
