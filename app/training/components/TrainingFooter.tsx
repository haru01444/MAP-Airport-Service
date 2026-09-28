import Image from "next/image";
import Link from "next/link";

const programs = [
  { name: "Aircraft Maintenance", href: "#programs" },
  { name: "GSE (Ground Support Equipment)", href: "#programs" },
  { name: "Aviation Security (AVSEC)", href: "#programs" },
  { name: "Pramugari / Pramugara", href: "#programs" },
];

const quickLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Program Pelatihan", href: "#programs" },
  { label: "Fasilitas Diklat", href: "#fasilitas" },
  { label: "Sertifikasi", href: "#sertifikat" },
  { label: "Kontak & Pendaftaran", href: "#contact-training" },
];

export default function TrainingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0F172A", borderTop: "1px solid #1E293B" }}>
      <style>{`
        .tf-link {
          color: #94A3B8;
          font-size: 0.875rem;
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1.8;
        }
        .tf-link:hover { color: #F97316; }
        .tf-title {
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 20px;
        }
        .tf-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
          gap: 48px;
          padding: 64px 0 48px;
        }
        @media (max-width: 768px) {
          .tf-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px 24px !important;
            padding: 40px 0 32px !important;
          }
          .tf-brand-col { grid-column: 1 / -1 !important; }
          .tf-bottom-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
            padding: 20px 0 !important;
          }
          .tf-bottom-text { font-size: 0.78rem !important; }
          .tf-title { font-size: 11px !important; margin-bottom: 14px !important; }
          .tf-link { font-size: 12.5px !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="tf-grid">

          {/* Brand */}
          <div className="tf-brand-col">
            <Link href="/training" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
              <Image
                src="/LOGO MAP NO BACKGROUND.png"
                alt="MAP Training Center"
                width={36}
                height={36}
                style={{ height: 36, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
              <div style={{ lineHeight: 1.15 }}>
                <span style={{ display: "block", fontWeight: 800, fontSize: "0.95rem", color: "#fff" }}>
                  MAP Training
                </span>
                <span style={{ display: "block", fontWeight: 500, fontSize: "0.72rem", color: "#F97316", letterSpacing: "0.04em" }}>
                  CENTER
                </span>
              </div>
            </Link>
            <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.75, maxWidth: 280, marginBottom: 20 }}>
              Pusat pendidikan & pelatihan kerja bidang aviasi dari PT Mawaddah Angkasa Prima.
              Mencetak personel siap kerja berstandar industri penerbangan nasional.
            </p>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#64748B",
                fontSize: "0.8rem",
                textDecoration: "none",
                border: "1px solid #1E293B",
                padding: "7px 14px",
                borderRadius: 6,
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              <i className="fas fa-plane" style={{ fontSize: "0.7rem", color: "#F97316" }} />
              MAP Airport Service
            </a>
          </div>

          {/* Program */}
          <div>
            <h4 className="tf-title">Program</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {programs.map((p) => (
                <li key={p.name}>
                  <a href={p.href} className="tf-link">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="tf-title">Navigasi</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="tf-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="tf-title">Kontak Pendaftaran</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "fa-phone", text: "+62 831 7029 3216", href: "tel:+6283170293216" },
                { icon: "fa-envelope", text: "mawaddahangkasaprima@gmail.com", href: "mailto:mawaddahangkasaprima@gmail.com" },
                { icon: "fa-location-dot", text: "Sentul Village, Kab. Bogor, Jawa Barat", href: "#" },
              ].map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="tf-link"
                    style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                  >
                    <i className={`fas ${item.icon}`} style={{ color: "#F97316", fontSize: "0.8rem", marginTop: 3, flexShrink: 0 }} />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="tf-bottom-bar"
          style={{
            borderTop: "1px solid #1E293B",
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p className="tf-bottom-text" style={{ color: "#475569", fontSize: "0.82rem", margin: 0 }}>
            © {year} MAP Training Center — PT Mawaddah Angkasa Prima. Seluruh hak dilindungi.
          </p>
          <p className="tf-bottom-text" style={{ color: "#475569", fontSize: "0.82rem", margin: 0 }}>
            Pusat Pelatihan Aviasi Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
