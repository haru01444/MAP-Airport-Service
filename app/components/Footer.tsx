import Image from "next/image";
import Link from "next/link";

const navLinks = ["Tentang Kami", "Layanan", "Milestone", "Klien Kami", "Kontak"];
const navHrefs = ["#about", "#services", "#milestone", "#clients", "#contact"];
const services = ["Ground Handling Airlines", "Passenger & Ticketing", "Ramp Side Service", "Aircraft & Cabin Cleaning", "Equipment Rental"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#010D2E", padding: "64px 0 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 40, marginBottom: 48 }} className="footer-grid">

          {/* Brand */}
          <div>
            <Image
              src="/LOGO MAP NO BACKGROUND.png"
              alt="Logo Mawaddah Angkasa Prima"
              width={140}
              height={48}
              style={{ height: 48, width: "auto", objectFit: "contain", marginBottom: 16 }}
            />
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 260 }}>
              Mitra terpercaya layanan ground handling & aviasi di Indonesia sejak 2017.
            </p>
            <div style={{ marginTop: 20 }}>
              <Link href="/training" style={{ display: "inline-block", background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.4)", color: "#F5A623", padding: "8px 16px", borderRadius: 8, fontSize: "0.82rem", fontWeight: 600 }}>
                ✈ MAP Training Center →
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", marginBottom: 20 }}>Navigasi</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((l, i) => (
                <li key={l}>
                  <a href={navHrefs[i]} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", transition: "color 0.2s" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", marginBottom: 20 }}>Layanan Utama</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {services.map((s) => (
                <li key={s} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", marginBottom: 20 }}>Hubungi Kami</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "fa-phone", text: "+62 831 7029 3216" },
                { icon: "fa-envelope", text: "mawaddahangkasaprima@gmail.com" },
                { icon: "fa-location-dot", text: "Sentul Village, Kab. Bogor, Jawa Barat" },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>
                  <i className={`fas ${item.icon}`} style={{ color: "#4A9EF5", marginTop: 3, flexShrink: 0 }} />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem" }}>
            © {year} Mawaddah Angkasa Prima. Semua hak dilindungi.
          </p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem" }}>
            Ground Handling & Aviation Services — Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
