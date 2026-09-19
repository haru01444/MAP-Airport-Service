import Image from "next/image";

const milestones = [
  {
    year: "2017",
    icon: "fa-rocket",
    title: "Awal Operasional",
    desc: "Memulai kerja sama operasional dengan Kokapura & Trinusa Ekasakti, serta menghadirkan layanan Passenger Bus Service.",
    future: false,
  },
  {
    year: "2018",
    icon: "fa-arrow-trend-up",
    title: "Perluasan Layanan",
    desc: "GSE Handling, VIP Service, Ticketing, Passenger & Baggage Handling, Crew Transport, kerja sama Exxon Mobile, serta LST/WST Service.",
    future: false,
  },
  {
    year: "2022",
    icon: "fa-chart-line",
    title: "Pertumbuhan Operasional",
    desc: "Lavatory Service, Water Service, Citilink Crew Transport, Terminal Handling Support, dan Land Transport Outsourcing.",
    future: false,
  },
  {
    year: "2026",
    icon: "fa-graduation-cap",
    title: "MAP Training Center",
    desc: "Pusat pengembangan kompetensi: AVSEC Training, GSE Training, pengembangan SDM, pelatihan operasional, dan sertifikasi profesional.",
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
        <div style={{ position: "absolute", inset: 0, background: "rgba(1,13,46,0.88)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.25)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: 100,
              marginBottom: 16,
            }}
          >
            Perjalanan Kami
          </span>
          <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: 16 }}>
            Tumbuh dan Berkembang Bersama <br /> Industri Aviasi Indonesia
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Sejak awal berdiri, Mawaddah Angkasa Prima terus memperluas jangkauan layanan dan memperkuat
            kapasitas operasional demi mendukung industri penerbangan nasional.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Center line */}
          <div
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

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {milestones.map((m, i) => (
              <div
                key={m.year}
                style={{
                  display: "flex",
                  justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 20,
                    transform: "translateX(-50%)",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: m.future
                      ? "linear-gradient(135deg, #F5A623, #e8941f)"
                      : "linear-gradient(135deg, #1967D2, #4A9EF5)",
                    border: "3px solid rgba(1,13,46,0.9)",
                    zIndex: 2,
                  }}
                >
                  <i className={`fas ${m.icon}`} style={{ color: "#fff", fontSize: "0.9rem" }} />
                </div>

                {/* Card */}
                <div
                  style={{
                    width: "calc(50% - 44px)",
                    background: m.future ? "rgba(245,166,35,0.08)" : "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(10px)",
                    border: m.future ? "1px solid rgba(245,166,35,0.3)" : "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 14,
                    padding: "24px 28px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: m.future ? "#F5A623" : "#4A9EF5",
                      marginBottom: 8,
                    }}
                  >
                    {m.year}
                  </div>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: 8 }}>{m.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontSize: "0.88rem" }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
