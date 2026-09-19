import Image from "next/image";

const pillars = [
  { icon: "fa-shield-halved", title: "Safety First", desc: "Keselamatan sebagai prioritas utama di setiap proses" },
  { icon: "fa-users", title: "Professional Team", desc: "Ditangani oleh tim bersertifikasi dan berpengalaman" },
  { icon: "fa-globe", title: "Global Standards", desc: "Mengacu pada standar aviasi internasional" },
  { icon: "fa-handshake", title: "Trust & Integrity", desc: "Dibangun di atas kepercayaan dan integritas" },
];

export default function HeroSection() {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=85"
          alt="Ground Handling Operations"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(1,13,46,0.88) 0%, rgba(13,36,97,0.75) 50%, rgba(25,103,210,0.45) 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", alignItems: "center", padding: "120px 0 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <p
            style={{
              color: "#4A9EF5",
              fontFamily: "var(--font-inter)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            READY TO CONNECT THE WORLD SAFELY
          </p>
          <h1
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            Melayani <br />
            Industri Penerbangan <br />
            Indonesia Sejak 2017
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              maxWidth: 580,
              lineHeight: 1.75,
              marginBottom: 36,
            }}
          >
            Mawaddah Angkasa Prima — Mitra Terpercaya Layanan Ground Handling & Aviasi di Indonesia.
            Kami hadir untuk mendukung kelancaran operasional penerbangan Anda melalui layanan profesional yang
            mengedepankan keselamatan, kecepatan, dan standar internasional di setiap titik layanan.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#services"
              style={{
                background: "linear-gradient(135deg, #1967D2, #4A9EF5)",
                color: "#fff",
                fontWeight: 600,
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: "0.95rem",
                transition: "all 0.3s",
              }}
            >
              Lihat Layanan Kami
            </a>
            <a
              href="#contact"
              style={{
                color: "#fff",
                fontWeight: 600,
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: "0.95rem",
                border: "2px solid rgba(255,255,255,0.5)",
                transition: "all 0.3s",
              }}
            >
              Hubungi Tim Kami
            </a>
          </div>
        </div>
      </div>

      {/* Pillars Strip */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(1,13,46,0.92)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 0,
            }}
          >
            {pillars.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "24px 20px", borderRight: i < pillars.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(74,158,245,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className={`fas ${p.icon}`} style={{ color: "#4A9EF5", fontSize: "1.1rem" }} />
                </div>
                <div>
                  <strong style={{ color: "#fff", display: "block", fontSize: "0.9rem", fontWeight: 600 }}>{p.title}</strong>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem" }}>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
