import Image from "next/image";

const clients = [
  { type: "img", src: "/logo-Citilink.svg", alt: "Citilink" },
  { type: "img", src: "/logo-Gapura.webp", alt: "Gapura" },
  { type: "img", src: "/logo-JAS.png", alt: "JAS" },
  { type: "img", src: "/logo-Angkasa Pura.jpg", alt: "Angkasa Pura" },
  { type: "img", src: "/logo-Air Asia.jpg", alt: "Air Asia" },
  { type: "img", src: "/logo-Celebi Aviation.png", alt: "Celebi Aviation" },
  { type: "text", text: "TransNusa", style: { color: "#005A9C", fontWeight: 800, fontStyle: "italic" } },
  { type: "text", text: "Kokapura", sub: "Syamsudin Noor", style: { color: "#333", fontWeight: 700 } },
];

export default function ClientsSection() {
  return (
    <section id="clients" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            Klien Kami
          </span>
          <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, marginBottom: 16 }}>
            Dipercaya oleh Maskapai dan Operator <br /> Bandara Terkemuka
          </h2>
          <p style={{ color: "#64748B", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Kepercayaan yang diberikan oleh mitra dan klien kami adalah bukti komitmen kami terhadap kualitas layanan
            yang konsisten. Berikut rekam jejak kerja sama kami.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
          }}
        >
          {clients.map((c, i) => (
            <div
              key={i}
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: 12,
                padding: "28px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 100,
                transition: "all 0.3s",
              }}
            >
              {c.type === "img" ? (
                <Image
                  src={c.src!}
                  alt={c.alt!}
                  width={120}
                  height={50}
                  style={{ objectFit: "contain", maxHeight: 50, width: "auto", filter: "grayscale(30%)" }}
                />
              ) : (
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "1.1rem", ...c.style }}>{c.text}</span>
                  {c.sub && (
                    <span style={{ display: "block", fontSize: "0.72rem", color: "#94A3B8", fontWeight: 400, marginTop: 4 }}>
                      {c.sub}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
