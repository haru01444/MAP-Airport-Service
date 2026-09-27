import Image from "next/image";

interface ClientContract {
  no: number;
  client: string;
  logo: string;
  period: string;
  services: string[];
}

const clientContracts: ClientContract[] = [
  {
    no: 1,
    client: "Injourney Airports",
    logo: "/logo-injourney.svg",
    period: "2024 - May 2026",
    services: [
      "Free Shuttle",
      "Aviation Security Transport for Hajj",
    ],
  },
  {
    no: 2,
    client: "Citilink",
    logo: "/logo-Citilink.svg",
    period: "2018 - Now",
    services: [
      "Crew Transport",
      "Apron Passenger Bus (APB)",
      "Lavatory Water Services",
      "Ground Power System (GPS)",
      "VIP Apron Passenger Handling Transport",
    ],
  },
  {
    no: 3,
    client: "Transnusa",
    logo: "/logo-transnusa.svg",
    period: "2024 - Now",
    services: [
      "Apron Passenger Bus (APB)",
      "Crew Transport",
      "Lavatory Water Services",
      "Ground Power System (GPS)",
    ],
  },
  {
    no: 4,
    client: "AirAsia",
    logo: "/logo-Air Asia.jpg",
    period: "2018 - Now",
    services: [
      "Land Side Crew Transport",
      "Apron Passenger Bus (APB)",
      "Lavatory Water Services",
      "Ground Power System (GPS)",
      "Transit Baggage Handling",
    ],
  },
  {
    no: 5,
    client: "Gapura Aircraft Services",
    logo: "/logo-Gapura.webp",
    period: "2024 - Now",
    services: [
      "Apron Passenger Bus (APB)",
      "Lavatory Water Services",
    ],
  },
  {
    no: 6,
    client: "JAS Airport Services",
    logo: "/logo-JAS.png",
    period: "2025 - Now",
    services: [
      "Apron Passenger Bus (APB)",
    ],
  },
];

export default function AboutClientsTable() {
  return (
    <section id="clients-table" style={{ padding: "100px 0", background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
      <style dangerouslySetInnerHTML={{
        __html: [
          ".about-table-wrap { width: 100%; border-radius: 10px; border: 1px solid #E2E8F0; overflow: hidden; background: #fff; box-shadow: 0 4px 20px rgba(0,31,91,0.04); }",
          ".about-table { width: 100%; border-collapse: collapse; text-align: left; }",
          ".about-table th { background: #001F5B; color: #ffffff; font-family: var(--font-poppins); font-size: 0.88rem; font-weight: 700; padding: 16px 20px; letter-spacing: 0.04em; text-transform: uppercase; border-bottom: 2px solid #001540; }",
          ".about-table td { padding: 18px 20px; border-bottom: 1px solid #F1F5F9; vertical-align: middle; }",
          ".about-table tr:last-child td { border-bottom: none; }",
          ".about-table tr:hover { background-color: #F8FAFC !important; }",
          ".about-cell-no { font-family: var(--font-poppins); font-weight: 700; font-size: 0.95rem; color: #475569; text-align: center; }",
          ".about-logo-box { width: 140px; height: 44px; display: flex; align-items: center; justify-content: center; margin: 0 auto; }",
          ".about-logo-img { max-width: 130px; max-height: 38px; width: auto; height: auto; object-fit: contain; }",
          ".about-services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px 24px; list-style: none; padding: 0; margin: 0; }",
          ".about-service-item { display: flex; align-items: flex-start; gap: 8px; color: #334155; font-size: 0.88rem; font-weight: 500; line-height: 1.5; }",
          ".about-service-bullet { width: 5px; height: 5px; border-radius: 50%; background: #1967D2; flex-shrink: 0; margin-top: 7px; }",
          ".mobile-about-contracts { display: none; }",
          "@media (max-width: 860px) {",
          "  .desktop-about-table { display: none !important; }",
          "  .mobile-about-contracts { display: flex !important; flex-direction: column; gap: 16px; }",
          "  .mobile-contract-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.03); }",
          "  .mobile-logo-box { width: 110px; height: 36px; display: flex; align-items: center; justify-content: flex-start; }",
          "  .mobile-logo-img { max-width: 105px; max-height: 32px; width: auto; height: auto; object-fit: contain; }",
          "  .about-services-grid { grid-template-columns: 1fr !important; gap: 8px !important; }",
          "}"
        ].join('\n')
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
          <span
            style={{
              display: "inline-block",
              color: "#1967D2",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Portofolio Kemitraan
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
            Klien &amp; Cakupan Layanan Operasional
          </h2>
          <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.75, margin: 0 }}>
            Rekam jejak komitmen layanan operasional ground handling terpadu PT Mawaddah Angkasa Prima bersama maskapai dan operator bandara terkemuka.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="about-table-wrap desktop-about-table">
          <table className="about-table">
            <thead>
              <tr>
                <th style={{ width: "8%", textAlign: "center" }}>No</th>
                <th style={{ width: "24%", textAlign: "center" }}>Clients</th>
                <th style={{ width: "20%", textAlign: "center" }}>Period</th>
                <th style={{ width: "48%" }}>Services</th>
              </tr>
            </thead>
            <tbody>
              {clientContracts.map((item, idx) => (
                <tr key={item.no} style={{ background: idx % 2 === 0 ? "#FFFFFF" : "#FBFDFF" }}>
                  <td className="about-cell-no">
                    {item.no}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <div className="about-logo-box">
                      <Image
                        src={item.logo}
                        alt={item.client}
                        width={130}
                        height={38}
                        className="about-logo-img"
                      />
                    </div>
                  </td>
                  <td style={{ textAlign: "center", color: "#0F172A", fontWeight: 700, fontSize: "0.92rem", fontFamily: "var(--font-poppins)" }}>
                    {item.period}
                  </td>
                  <td>
                    <ul className="about-services-grid">
                      {item.services.map((svc, sIdx) => (
                        <li key={sIdx} className="about-service-item">
                          <span className="about-service-bullet" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="mobile-about-contracts">
          {clientContracts.map((item) => (
            <div key={item.no} className="mobile-contract-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, paddingBottom: 14, borderBottom: "1px solid #E2E8F0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1.05rem", color: "#001F5B" }}>
                    #{item.no}
                  </span>
                  <div className="mobile-logo-box">
                    <Image
                      src={item.logo}
                      alt={item.client}
                      width={105}
                      height={32}
                      className="mobile-logo-img"
                    />
                  </div>
                </div>
                <span style={{ background: "#F1F5F9", color: "#001F5B", fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: 4, border: "1px solid #E2E8F0" }}>
                  {item.period}
                </span>
              </div>

              <div>
                <span style={{ display: "block", color: "#64748B", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Layanan Diberikan:
                </span>
                <ul className="about-services-grid">
                  {item.services.map((svc, sIdx) => (
                    <li key={sIdx} className="about-service-item">
                      <span className="about-service-bullet" />
                      <span>{svc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
