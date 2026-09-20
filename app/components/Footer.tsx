import Image from "next/image";
import Link from "next/link";

const navLinks = ["Tentang Kami", "Layanan", "Milestone", "Klien"];
const navHrefs = ["#about", "#services", "#milestone", "#clients"];
const footerServices = ["Ground Handling Airlines", "Passenger & Trucking", "Ramp Site Service", "Equipment Support"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#060B19", padding: "64px 0 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <style dangerouslySetInnerHTML={{ __html: [
          ".mobile-training-link { display: none; }",
          "        .ft-contact-icon { display: block; color: #4A9EF5; margin-top: 3px; flex-shrink: 0; }",
          "        .ft-contact-item { display: flex; align-items: flex-start; gap: 10px; color: rgba(255,255,255,0.5); font-size: 0.88rem; }",
          "        ",
          "        .footer-grid {",
          "          display: grid;",
          "          grid-template-columns: 2fr 1fr 1fr 1.5fr;",
          "          gap: 40px;",
          "          margin-bottom: 48px;",
          "        }",
          "",
          "        @media (max-width: 768px) {",
          "          .ft-title { font-size: 14px !important; text-transform: none !important; letter-spacing: normal !important; color: #fff !important; margin-bottom: 16px !important; }",
          "          .ft-link { font-size: 14px !important; color: #64748B !important; }",
          "          .ft-copy { font-size: 12px !important; color: #475569 !important; text-align: left !important; }",
          "",
          "          .footer-grid {",
          "            grid-template-columns: 1fr 1fr !important;",
          "            grid-template-areas:",
          "              \"brand brand\"",
          "              \"nav services\"",
          "              \"contact contact\" !important;",
          "            gap: 32px 16px !important;",
          "            margin-bottom: 32px !important;",
          "          }",
          "          ",
          "          .ft-brand { grid-area: brand; }",
          "          .ft-nav { grid-area: nav; }",
          "          .ft-services { grid-area: services; }",
          "          .ft-contact { grid-area: contact; }",
          "",
          "          .desktop-training-link { display: none !important; }",
          "          .mobile-training-link { display: inline-block !important; }",
          "          ",
          "          .ft-contact-icon { display: none !important; }",
          "          .ft-contact-item { gap: 0 !important; color: #64748B !important; font-size: 14px !important; line-height: 2 !important; }",
          "          ",
          "          .footer-bottom-responsive {",
          "            flex-direction: column !important;",
          "            align-items: flex-start !important;",
          "            text-align: left !important;",
          "            gap: 8px !important;",
          "            padding: 24px 0 !important;",
          "            border-top: 1px solid rgba(255,255,255,0.1) !important;",
          "          }",
          "          ",
          "          .brand-desc {",
          "            font-size: 14px !important;",
          "            color: #64748B !important;",
          "          }",
          "        }"
        ].join('\n') }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="footer-grid">

          {/* Brand */}
          <div className="ft-brand">
            <Image
              src="/LOGO MAP NO BACKGROUND.png"
              alt="Logo Mawaddah Angkasa Prima"
              width={140}
              height={48}
              style={{ height: 48, width: "auto", objectFit: "contain", marginBottom: 16 }}
            />
            <p className="brand-desc" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 300 }}>
              Mitra terpercaya layanan ground handling & aviasi di Indonesia.
            </p>
            <div style={{ marginTop: 20 }}>
              <Link href="/training" className="desktop-training-link" style={{ display: "inline-block", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.4)", color: "#F5A623", padding: "8px 16px", borderRadius: 8, fontSize: "0.82rem", fontWeight: 600, textDecoration: "none" }}>
                ✈ MAP Training Center ↗
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="ft-nav">
            <h4 className="ft-title" style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20 }}>Navigasi</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((l, i) => (
                <li key={l}>
                  <a className="ft-link" href={navHrefs[i]} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="ft-services">
            <h4 className="ft-title" style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20 }}>Layanan Utama</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {footerServices.map((s) => (
                <li key={s} className="ft-link" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="ft-contact">
            <h4 className="ft-title" style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20 }}>Hubungi Kami</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "fa-phone", text: "+62 831 7029 3216" },
                { icon: "fa-envelope", text: "mawaddahangkasaprima@gmail.com" },
                { icon: "fa-location-dot", text: "Sentul Village, Kab. Bogor, Jawa Barat" },
              ].map((item, i) => (
                <li key={i} className="ft-contact-item">
                  <i className={"fas " + item.icon + " ft-contact-icon"} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <Link href="/training" className="mobile-training-link" style={{ color: "#F5A623", fontWeight: 700, fontSize: "14px", textDecoration: "none", marginTop: 12 }}>
              ▶ MAP Training Center
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom-responsive" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p className="ft-copy" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", margin: 0 }}>
            © {year} Mawaddah Angkasa Prima. Seluruh hak dilindungi.
          </p>
          <p className="ft-copy" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", margin: 0 }}>
            Ground Handling & Aviation Services — Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
