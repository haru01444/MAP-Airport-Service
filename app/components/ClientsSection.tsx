import Image from "next/image";

interface ClientLogo {
  name: string;
  src: string;
}

const clientLogos: ClientLogo[] = [
  { name: "AirAsia", src: "/logo-Air Asia.jpg" },
  { name: "Citilink", src: "/logo-Citilink.svg" },
  { name: "Angkasa Pura", src: "/logo-Angkasa Pura.jpg" },
  { name: "Gapura Angkasa", src: "/logo-Gapura.webp" },
  { name: "JAS Airport Services", src: "/logo-JAS.png" },
  { name: "Celebi Aviation", src: "/logo-Celebi Aviation.png" },
];

export default function ClientsSection() {
  return (
    <section id="clients" style={{ padding: "96px 0", background: "#FFFFFF", borderTop: "1px solid #F1F5F9" }}>
      <style dangerouslySetInnerHTML={{
        __html: [
          ".client-logo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px 32px; align-items: center; justify-items: center; }",
          ".client-logo-item { display: flex; align-items: center; justify-content: center; width: 100%; height: 80px; padding: 10px; transition: transform 0.25s ease; }",
          ".client-logo-img { max-height: 46px; width: auto; max-width: 150px; object-fit: contain; transition: transform 0.25s ease, opacity 0.25s ease; opacity: 0.92; }",
          ".client-logo-item:hover .client-logo-img { transform: scale(1.06); opacity: 1; }",
          "@media (max-width: 768px) {",
          "  .client-logo-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px 16px !important; }",
          "  .client-logo-item { height: 70px !important; padding: 6px !important; }",
          "  .client-logo-img { max-height: 40px !important; max-width: 125px !important; }",
          "}"
        ].join('\n')
      }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
          <span
            style={{
              display: "inline-block",
              color: "#1967D2",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Klien &amp; Mitra Kami
          </span>
          <h2
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.25,
              marginBottom: 16,
            }}
          >
            Dipercaya oleh Maskapai &amp; Mitra Aviasi Terkemuka
          </h2>
          <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.75, margin: 0 }}>
            Komitmen kami dalam menghadirkan layanan operasional darat berkualitas tinggi didukung oleh kepercayaan berkelanjutan dari mitra aviasi di berbagai bandara strategis Indonesia.
          </p>
        </div>

        {/* Logo Grid (3 Columns x 2 Rows, Cardless / Seamless) */}
        <div className="client-logo-grid">
          {clientLogos.map((client, idx) => (
            <div key={idx} className="client-logo-item">
              <Image
                src={client.src}
                alt={client.name}
                width={180}
                height={65}
                className="client-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
