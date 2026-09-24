import Image from "next/image";

export default function HomeAboutSection() {
  return (
    <section id="about" className="home-about-section" style={{ background: "#F8FAFC", padding: "90px 0" }}>
      <style dangerouslySetInnerHTML={{
        __html: [
          ".home-about-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }",
          ".home-about-eyebrow { display: flex; align-items: center; gap: 8px; color: #1967D2; font-size: 0.85rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 16px; }",
          ".home-about-eyebrow-dash { width: 20px; height: 2px; background: #F5A623; border-radius: 2px; }",
          ".home-about-title { font-family: var(--font-poppins); font-size: clamp(1.8rem, 3vw, 2.3rem); font-weight: 800; color: #0F172A; line-height: 1.25; margin-bottom: 20px; }",
          ".home-about-desc { color: #475569; font-size: clamp(0.92rem, 1.4vw, 0.98rem); line-height: 1.8; margin-bottom: 16px; }",
          ".home-about-image-wrap { position: relative; width: 100%; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 48px rgba(0,31,91,0.12); aspect-ratio: 4/3; }",
          "@media (max-width: 768px) {",
          "  .home-about-section { padding: 56px 0 !important; }",
          "  .home-about-grid { grid-template-columns: 1fr !important; gap: 28px !important; }",
          "  .home-about-eyebrow { margin-bottom: 12px !important; }",
          "  .home-about-title { font-size: 24px !important; margin-bottom: 16px !important; }",
          "  .home-about-desc { font-size: 14px !important; line-height: 1.75 !important; }",
          "  .home-about-image-wrap { aspect-ratio: 16/10 !important; border-radius: 12px !important; }",
          "}"
        ].join('\n')
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="home-about-grid">
          <div>
            <span className="home-about-eyebrow">
              <span className="home-about-eyebrow-dash" />
              Tentang Perusahaan
            </span>
            <h2 className="home-about-title">
              Penyedia Layanan Aviasi &amp; Ground Handling Terpercaya
            </h2>
            <p className="home-about-desc">
              PT Mawaddah Angkasa Prima (MAP) adalah penyedia layanan operasional aviasi terintegrasi di Indonesia. Berdedikasi tinggi terhadap standar keselamatan aviasi internasional, kami menghadirkan rangkaian solusi profesional mulai dari Ground Handling, Passenger &amp; Gate Handling, Ramp Side Services, Cabin Cleaning, GSE Support, hingga Airport Shuttle Bus Advertising dan MAP Training Center.
            </p>
          </div>

          <div>
            <div className="home-about-image-wrap">
              <Image
                src="/about-map-operations-v2.jpg"
                alt="Operasional Ground Handling & Armada Shuttle Bus MAP"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 550px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
