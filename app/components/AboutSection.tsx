import Image from "next/image";

const stats = [
  { num: "7+", label: "Tahun Pengalaman" },
  { num: "4", label: "Kota Layanan" },
  { num: "8+", label: "Klien Terpercaya" },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section" style={{ background: "#F8FAFC" }}>
      <style dangerouslySetInnerHTML={{
        __html: [
          "/* --- DESKTOP STYLES (Default) --- */",
          "        .about-section { padding: 100px 0; }",
          "        .about-grid {",
          "          display: grid;",
          "          grid-template-columns: 1fr 1fr;",
          "          grid-template-rows: auto auto auto;",
          "          grid-template-areas:",
          "            \"text image\"",
          "            \"stats image\"",
          "            \"quote image\";",
          "          gap: 20px 64px;",
          "          align-items: start;",
          "        }",
          "        .about-text-area { grid-area: text; }",
          "        .about-image-area { grid-area: image; position: relative; }",
          "        .about-stats-area { grid-area: stats; }",
          "        .about-quote-area { grid-area: quote; }",
          "",
          "        .about-eyebrow {",
          "          display: flex;",
          "          align-items: center;",
          "          gap: 8px;",
          "          background: transparent;",
          "          border: none;",
          "          padding: 0;",
          "          color: #1967D2;",
          "          font-size: 0.85rem;",
          "          font-weight: 600;",
          "          letter-spacing: 0.12em;",
          "          text-transform: uppercase;",
          "          margin-bottom: 16px;",
          "        }",
          "        .about-eyebrow-dash {",
          "          display: block;",
          "          width: 20px;",
          "          height: 2px;",
          "          background: #F5A623;",
          "          border-radius: 2px;",
          "        }",
          "        ",
          "        .about-title {",
          "          font-family: var(--font-poppins);",
          "          font-size: clamp(1.8rem, 3vw, 2.4rem);",
          "          font-weight: 800;",
          "          color: #0F172A;",
          "          line-height: 1.25;",
          "          margin-bottom: 20px;",
          "        }",
          "",
          "        .about-desc { color: #475569; line-height: 1.8; margin-bottom: 16px; }",
          "        .about-desc.second { margin-bottom: 0; }",
          "",
          "        .about-stats-wrap {",
          "          display: flex;",
          "          gap: 0;",
          "          border-top: 1px solid #E2E8F0;",
          "          padding-top: 28px;",
          "          margin-top: 12px;",
          "        }",
          "        ",
          "        .about-stat-item { display: flex; align-items: center; }",
          "        .about-stat-box { text-align: center; padding: 0 24px; }",
          "        .about-stat-num {",
          "          display: block;",
          "          font-family: var(--font-poppins);",
          "          font-size: 2.2rem;",
          "          font-weight: 800;",
          "          color: #1967D2;",
          "          line-height: 1;",
          "        }",
          "        .about-stat-label { color: #64748B; font-size: 0.82rem; margin-top: 4px; display: block; }",
          "        .about-stat-divider { width: 1px; height: 40px; background: #CBD5E1; flex-shrink: 0; }",
          "",
          "        .about-quote {",
          "          border-left: 3px solid #F5A623;",
          "          padding-left: 20px;",
          "          margin: 16px 0 0 0;",
          "        }",
          "        .about-quote-icon { color: #F5A623; margin-bottom: 8px; display: block; }",
          "        .about-quote p { color: #475569; font-style: italic; line-height: 1.7; font-size: 1rem; }",
          "",
          "        .about-image-frame {",
          "          width: 100%;",
          "          position: relative;",
          "          border-radius: 16px;",
          "          overflow: hidden;",
          "          box-shadow: 0 24px 64px rgba(0,0,0,0.15);",
          "          aspect-ratio: 4/5;",
          "        }",
          "        .about-badge-responsive {",
          "          position: absolute;",
          "          bottom: -20px;",
          "          left: -20px;",
          "          background: linear-gradient(135deg, #001F5B, #1967D2);",
          "          color: #fff;",
          "          border-radius: 14px;",
          "          padding: 20px 24px;",
          "          box-shadow: 0 8px 32px rgba(0,31,91,0.4);",
          "          z-index: 2;",
          "        }",
          "        .about-badge-year { display: block; font-family: var(--font-poppins); font-size: 2rem; font-weight: 800; line-height: 1; }",
          "        .about-badge-text { font-size: 0.8rem; color: rgba(255,255,255,0.75); }",
          "        .mobile-only-dash { display: none; }",
          "",
          "        /* --- MOBILE STYLES (Strict Overrides) --- */",
          "        @media (max-width: 768px) {",
          "          .about-section { padding: 60px 0; }",
          "          .about-grid {",
          "            display: flex !important;",
          "            flex-direction: column !important;",
          "            gap: 24px !important;",
          "          }",
          "          ",
          "          /* Reordering */",
          "          .about-text-area { order: 1; width: 100% !important; }",
          "          .about-image-area { order: 2; width: 100% !important; position: relative !important; }",
          "          .about-stats-area { order: 3; width: 100% !important; }",
          "          .about-quote-area { order: 4; width: 100% !important; }",
          "",
          "          /* Eyebrow Style Change */",
          "          .about-eyebrow {",
          "            background: transparent !important;",
          "            border: none !important;",
          "            padding: 0 !important;",
          "            color: #1967D2 !important;",
          "            font-size: 0.85rem !important;",
          "            display: flex !important;",
          "            align-items: center !important;",
          "            gap: 8px !important;",
          "            margin-bottom: 12px !important;",
          "          }",
          "          .mobile-only-dash {",
          "            display: block !important;",
          "            width: 20px;",
          "            height: 2px;",
          "            background: #F5A623;",
          "          }",
          "",
          "          /* Titles & Text */",
          "          .about-title { font-size: 25px !important; margin-bottom: 16px !important; }",
          "          .about-desc { font-size: 14px !important; line-height: 1.75 !important; }",
          "          .hide-on-mobile { display: none !important; }",
          "",
          "          /* Image & Badge Style Change */",
          "          .about-image-frame {",
          "            width: 100% !important;",
          "            position: relative !important;",
          "            aspect-ratio: 4/3 !important;",
          "            border-radius: 12px !important;",
          "            box-shadow: none !important;",
          "          }",
          "          .about-badge-responsive {",
          "            bottom: 12px !important;",
          "            left: 12px !important;",
          "            background: #000B21 !important; /* Very dark navy */",
          "            border: 1px solid rgba(25,103,210,0.5) !important;",
          "            box-shadow: none !important;",
          "            padding: 12px 16px !important;",
          "            border-radius: 8px !important;",
          "          }",
          "          .about-badge-year { font-size: 1.25rem !important; color: #4A9EF5 !important; }",
          "          .about-badge-text { font-size: 0.65rem !important; color: rgba(255,255,255,0.6) !important; }",
          "",
          "          /* Stats Cards Change */",
          "          .about-stats-wrap {",
          "            display: grid !important;",
          "            grid-template-columns: repeat(3, 1fr) !important;",
          "            gap: 12px !important;",
          "            border-top: none !important;",
          "            padding-top: 0 !important;",
          "            margin-top: 0 !important;",
          "          }",
          "          .about-stat-item { display: block !important; }",
          "          .about-stat-box {",
          "            border: 1px solid #E2E8F0 !important;",
          "            border-radius: 10px !important;",
          "            padding: 16px 8px !important;",
          "            background: #fff !important;",
          "          }",
          "          .about-stat-num { font-size: 22px !important; font-family: monospace !important; font-weight: 700 !important; }",
          "          .about-stat-label { font-size: 10.5px !important; }",
          "          .about-stat-divider { display: none !important; }",
          "",
          "          /* Quote Style Change */",
          "          .about-quote {",
          "            border-left: 3px solid #F5A623 !important;",
          "            padding-left: 16px !important;",
          "            margin: 0 !important;",
          "          }",
          "          .about-quote-icon { display: none !important; }",
          "          .about-quote p { font-size: 14.5px !important; color: #64748B !important; }",
          "        }"
        ].join('\n')
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="about-grid">

          <div className="about-text-area">
            <span className="about-eyebrow">
              <span className="about-eyebrow-dash"></span>
              Tentang Perusahaan
            </span>
            <h2 className="about-title">
              Berpengalaman dalam Layanan Aviasi Terintegrasi
            </h2>
            <p className="about-desc">
              Melalui unit usaha MAP Ground Handling, Mawaddah Angkasa Prima
              tumbuh menjadi salah satu penyedia layanan aviasi terintegrasi terkemuka di Indonesia —
              mulai dari Ramp Handling, Check In and Gate Handling Services, Trucking, hingga General Aviation.
            </p>
            <p className="about-desc second hide-on-mobile">
              Komitmen terhadap kualitas dan kepercayaan mitra
              menjadi landasan setiap layanan yang kami berikan, menjadikan kami mitra strategis bagi maskapai
              dan operator bandara di berbagai kota di Indonesia.
            </p>
          </div>

          <div className="about-image-area">
            <div className="about-image-frame">
              <Image
                src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=800&q=85"
                alt="Aviation Ground Operations"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="about-stats-area">
            <div className="about-stats-wrap">
              {stats.map((s, i) => (
                <div key={i} className="about-stat-item">
                  <div className="about-stat-box">
                    <span className="about-stat-num">{s.num}</span>
                    <span className="about-stat-label">{s.label}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="about-stat-divider" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="about-quote-area">
            <blockquote className="about-quote">
              <i className="fas fa-quote-left about-quote-icon" />
              <p>
                &quot;Kami berdedikasi memberikan layanan ground handling terbaik, didukung produk pendukung (ancillary) yang menyeluruh.&quot;
              </p>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}

