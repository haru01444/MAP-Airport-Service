"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- Main Airport Services Footer Data ---
const mainNavLinks = ["Tentang Kami", "Layanan", "Peta Layanan", "Perjalanan Kami", "Klien", "Berita", "Karir"];
const mainNavHrefs = ["/about", "/services", "/#map", "/about#milestone", "/#clients", "/news", "/training"];
const mainFooterServices = [
  { name: "Ground Handling for Airlines", href: "/services#ground-handling" },
  { name: "Passenger & Ticketing Services", href: "/services#passenger-services" },
  { name: "Ramp Side Service", href: "/services#ramp-services" },
  { name: "Aircraft & Cabin Cleaning", href: "/services#cabin-cleaning" },
  { name: "Equipment Rental Support", href: "/services#equipment-rental" },
  { name: "Outsourcing Staff", href: "/services#outsourcing-staff" },
  { name: "Airport Advertising", href: "/advertising" },
  { name: "MAP Training Center", href: "/training" },
];

// --- Training Center Footer Data ---
const trainingNavLinks = [
  { name: "Beranda Training", href: "/training" },
  { name: "Tentang MAP Training", href: "/training/about" },
  { name: "Program Pelatihan", href: "/training/programs" },
  { name: "Fasilitas Diklat", href: "/training/facilities" },
  { name: "Kembali ke Layanan Bandara", href: "/" },
];

const trainingProgramsList = [
  { name: "Aircraft Maintenance (AMC-01)", href: "/training/programs#aircraft" },
  { name: "Ground Support Equipment (GSE-02)", href: "/training/programs#gse" },
  { name: "Aviation Security (SEC-03)", href: "/training/programs#avsec" },
  { name: "Pramugari & Pramugara (CAB-04)", href: "/training/programs#pramugari" },
  { name: "Semua Program Pelatihan", href: "/training/programs" },
];

export default function Footer() {
  const pathname = usePathname();
  const isTraining = pathname.startsWith("/training");
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#060B19", padding: "64px 0 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <style dangerouslySetInnerHTML={{
        __html: [
          ".mobile-training-link { display: none; }",
          "        .ft-contact-icon { display: block; color: #4A9EF5; margin-top: 3px; flex-shrink: 0; }",
          "        .ft-contact-item { display: flex; align-items: flex-start; gap: 10px; color: rgba(255,255,255,0.5); font-size: 0.88rem; }",
          "        ",
          "        .footer-grid {",
          "          display: grid;",
          "          grid-template-columns: 2fr 1.2fr 1fr 1.5fr;",
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
          "              \"services nav\"",
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
        ].join('\n')
      }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="footer-grid">

          {/* Brand */}
          <div className="ft-brand">
            <Link href={isTraining ? "/training" : "/"} style={{ display: "inline-block" }}>
              <Image
                src="/LOGO MAP NO BACKGROUND.png"
                alt="Logo Mawaddah Angkasa Prima"
                width={140}
                height={48}
                style={{ height: 48, width: "auto", objectFit: "contain", marginBottom: 16 }}
              />
            </Link>
            <p className="brand-desc" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 300 }}>
              {isTraining
                ? "Pusat pendidikan dan pelatihan kejuruan aviasi terpadu berstandar industri dan berlisensi resmi di Indonesia."
                : "Mitra terpercaya layanan ground handling & aviasi di Indonesia."}
            </p>
          </div>

          {/* Column 2: Services / Training Programs */}
          <div className="ft-services">
            <h4 className="ft-title" style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20 }}>
              {isTraining ? "Program Pelatihan" : "Layanan Utama"}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {isTraining
                ? trainingProgramsList.map((prog) => (
                    <li key={prog.name}>
                      <Link href={prog.href} className="ft-link" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", textDecoration: "none" }}>
                        {prog.name}
                      </Link>
                    </li>
                  ))
                : mainFooterServices.map((s) => (
                    <li key={s.name}>
                      <Link href={s.href} className="ft-link" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", textDecoration: "none" }}>
                        {s.name}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="ft-nav">
            <h4 className="ft-title" style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20 }}>
              {isTraining ? "Navigasi Diklat" : "Navigasi"}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {isTraining
                ? trainingNavLinks.map((item) => (
                    <li key={item.name}>
                      <Link className="ft-link" href={item.href} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s" }}>
                        {item.name}
                      </Link>
                    </li>
                  ))
                : mainNavLinks.map((l, i) => (
                    <li key={l}>
                      <Link className="ft-link" href={mainNavHrefs[i]} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s" }}>
                        {l}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="ft-contact">
            <h4 className="ft-title" style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20 }}>
              {isTraining ? "Pendaftaran & Kontak" : "Hubungi Kami"}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {isTraining ? (
                <>
                  <li className="ft-contact-item">
                    <i className="fas fa-location-dot ft-contact-icon" />
                    <span>Sentul Village, Jl. Cikeas Raya No. 123, Sukaraja, Kab. Bogor, Jawa Barat 16711, Indonesia</span>
                  </li>
                  <li className="ft-contact-item">
                    <i className="fas fa-phone ft-contact-icon" />
                    <a href="tel:083170293216" style={{ color: "inherit", textDecoration: "none" }}>083170293216</a>
                  </li>
                  <li className="ft-contact-item">
                    <i className="fas fa-envelope ft-contact-icon" />
                    <a href="mailto:trainingcenter@map-airportservices.id" style={{ color: "inherit", textDecoration: "none" }}>trainingcenter@map-airportservices.id</a>
                  </li>
                  <li className="ft-contact-item">
                    <i className="fab fa-instagram ft-contact-icon" />
                    <a href="https://instagram.com/map_trainingcenter" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>@map_trainingcenter</a>
                  </li>
                  <li className="ft-contact-item">
                    <i className="fab fa-tiktok ft-contact-icon" />
                    <a href="https://tiktok.com/@map_trainingcenter" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>@map_trainingcenter</a>
                  </li>
                </>
              ) : (
                [
                  { icon: "fa-phone", text: "+62 831 7029 3216" },
                  { icon: "fa-envelope", text: "contact@map-airportservices.id" },
                  { icon: "fa-location-dot", text: "Sentul Village, Kab. Bogor, Jawa Barat" },
                ].map((item, i) => (
                  <li key={i} className="ft-contact-item">
                    <i className={"fas " + item.icon + " ft-contact-icon"} />
                    <span>{item.text}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom-responsive" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p className="ft-copy" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", margin: 0 }}>
            {isTraining
              ? `© ${year} MAP Training Center — PT Mawaddah Angkasa Prima. Seluruh hak dilindungi.`
              : `© ${year} Mawaddah Angkasa Prima. Seluruh hak dilindungi.`}
          </p>
          <p className="ft-copy" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", margin: 0 }}>
            {isTraining
              ? "Pendidikan & Pelatihan Kejuruan Aviasi | Indonesia"
              : "Ground Handling & Aviation Services | Indonesia"}
          </p>
        </div>
      </div>
    </footer>
  );
}
