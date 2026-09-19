import Image from "next/image";

const stats = [
  { num: "7+", label: "Tahun Pengalaman" },
  { num: "4", label: "Kota Layanan" },
  { num: "8+", label: "Klien Terpercaya" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "100px 0", background: "#F8FAFC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Content */}
          <div>
            <span
              style={{
                display: "inline-block",
                background: "rgba(25,103,210,0.1)",
                color: "#1967D2",
                border: "1px solid rgba(25,103,210,0.2)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: 100,
                marginBottom: 16,
              }}
            >
              Tentang Perusahaan
            </span>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.25,
                marginBottom: 20,
              }}
            >
              Berpengalaman Sejak 2017 dalam Layanan Aviasi Terintegrasi
            </h2>
            <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: 16 }}>
              Berdiri sejak tahun 2017 melalui unit usaha MAP Ground Handling, Mawaddah Angkasa Prima
              telah tumbuh menjadi salah satu penyedia layanan aviasi terintegrasi terkemuka di Indonesia. Kami
              menghadirkan rangkaian solusi yang komprehensif — mulai dari Ramp Handling, Passenger Services,
              Trucking, General Aviation, Airport Lounge Management, hingga Premium Services — yang seluruhnya
              dibangun di atas fondasi profesionalisme, keselamatan, dan pelayanan prima.
            </p>
            <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: 32 }}>
              Selama lebih dari tujuh tahun perjalanan kami, komitmen terhadap kualitas dan kepercayaan mitra
              menjadi landasan setiap layanan yang kami berikan, menjadikan kami mitra strategis bagi maskapai
              dan operator bandara di berbagai kota di Indonesia.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: 0, marginBottom: 32, borderTop: "1px solid #E2E8F0", paddingTop: 28 }}>
              {stats.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ textAlign: "center", padding: "0 24px" }}>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-poppins)",
                        fontSize: "2.2rem",
                        fontWeight: 800,
                        color: "#1967D2",
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </span>
                    <span style={{ color: "#64748B", fontSize: "0.82rem", marginTop: 4, display: "block" }}>{s.label}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <div style={{ width: 1, height: 40, background: "#CBD5E1", flexShrink: 0 }} />
                  )}
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote
              style={{
                borderLeft: "3px solid #F5A623",
                paddingLeft: 20,
                margin: 0,
              }}
            >
              <i className="fas fa-quote-left" style={{ color: "#F5A623", marginBottom: 8, display: "block" }} />
              <p style={{ color: "#475569", fontStyle: "italic", lineHeight: 1.7 }}>
                &quot;Kami berdedikasi untuk memberikan layanan ground handling terbaik, didukung oleh
                produk-produk pendukung (ancillary) yang menyeluruh.&quot;
              </p>
            </blockquote>
          </div>

          {/* Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.15)",
                aspectRatio: "4/5",
                position: "relative",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=800&q=85"
                alt="Aviation Ground Operations"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Badge */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: -20,
                background: "linear-gradient(135deg, #001F5B, #1967D2)",
                color: "#fff",
                borderRadius: 14,
                padding: "20px 24px",
                boxShadow: "0 8px 32px rgba(0,31,91,0.4)",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-poppins)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                2017
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.75)" }}>Tahun Berdiri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
