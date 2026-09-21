import Image from "next/image";

interface ClientItem {
  no: number;
  client: string;
  displayName: string;
  subText?: string;
  logo: string | null;
  action: string;
  actionUpper: string;
  shortLoc: string;
  location: string;
}

const clientData: ClientItem[] = [
  {
    no: 1,
    client: "PT. AIRASIA INDONESIA",
    displayName: "AirAsia",
    logo: "/logo-Air Asia.jpg",
    action: "Ticket Sales",
    actionUpper: "TICKET SALES",
    shortLoc: "CGK - Soekarno-Hatta, Tangerang",
    location: "CGK (Soekarno Hatta Airport - Tangerang)",
  },
  {
    no: 2,
    client: "CITILINK",
    displayName: "Citilink",
    logo: "/logo-Citilink.svg",
    action: "Ticket Sales",
    actionUpper: "TICKET SALES",
    shortLoc: "CGK - KNO - UPG - SUB",
    location: "CGK (Soekarno Hatta Airport - Tangerang), KNO (Kualanamu International Airport - Medan), UPG (Sultan Hasanuddin - Makassar), SUB (Juanda - Surabaya)",
  },
  {
    no: 3,
    client: "AIRASIA",
    displayName: "AirAsia",
    logo: "/logo-Air Asia.jpg",
    action: "Cargo Handling",
    actionUpper: "CARGO HANDLING",
    shortLoc: "CGK - Soekarno-Hatta, Tangerang",
    location: "CGK (Soekarno Hatta Airport - Tangerang)",
  },
  {
    no: 4,
    client: "JAS",
    displayName: "JAS",
    logo: "/logo-JAS.png",
    action: "Ramp - Ramp",
    actionUpper: "RAMP - RAMP",
    shortLoc: "SUB - Juanda Int'l, Surabaya",
    location: "SUB (Juanda - Surabaya)",
  },
  {
    no: 5,
    client: "GAPURA",
    displayName: "Gapura",
    logo: "/logo-Gapura.webp",
    action: "Ramp - Ramp",
    actionUpper: "RAMP - RAMP",
    shortLoc: "UPG - Sultan Hasanuddin, Makassar",
    location: "UPG (Sultan Hasanuddin - Makassar)",
  },
  // {
  //   no: 6,
  //   client: "KOKAPURA",
  //   displayName: "Kokapura",
  //   subText: "Syamsudin Noor",
  //   logo: null,
  //   action: "Ramp - Ramp",
  //   actionUpper: "RAMP - RAMP",
  //   shortLoc: "BDJ - Syamsudin Noor, Banjarmasin",
  //   location: "BDJ (Syamsudin Noor Airport - Banjarmasin)",
  // },
];

export default function ClientsSection() {
  return (
    <section id="clients" style={{ padding: "100px 0", background: "#F8FAFC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div className="cl-header-wrap" style={{ textAlign: "center", marginBottom: 56 }}>
          <span
            className="cl-eyebrow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "#1967D2",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
            Klien Kami
          </span>
          <h2 className="cl-h2" style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, marginBottom: 16 }}>
            Rekam Jejak Kerjasama & Network Klien
          </h2>
          <p className="cl-intro" style={{ color: "#64748B", maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
            Kepercayaan yang diberikan oleh mitra dan klien kami adalah bukti komitmen kami terhadap kualitas layanan
            yang konsisten di berbagai bandara strategis Indonesia.
          </p>
        </div>

        {/* Responsive Table/Card Styles */}
        <style dangerouslySetInnerHTML={{
          __html: [
            ".desktop-client-table { display: block; }",
            "          .mobile-client-list { display: none; }",
            "",
            "          @media (max-width: 768px) {",
            "            .cl-header-wrap { margin-bottom: 28px !important; }",
            "            .cl-eyebrow { margin-bottom: 12px !important; font-size: 11.5px !important; }",
            "            .cl-h2 { font-size: 23px !important; line-height: 1.25 !important; margin-bottom: 16px !important; }",
            "            .cl-intro { font-size: 13.5px !important; line-height: 1.7 !important; }",
            "",
            "            .desktop-client-table { display: none !important; }",
            "            .mobile-client-list { display: block !important; }",
            "          }"
          ].join('\n')
        }} />

        {/* Card/Table Container */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            border: "1px solid #E2E8F0",
            overflow: "hidden",
          }}
        >
          {/* DESKTOP TABLE */}
          <div className="desktop-client-table" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #001F5B, #1967D2)", color: "#fff" }}>
                  <th style={{ padding: "16px 20px", fontWeight: 700, fontSize: "0.85rem", width: 60, textAlign: "center" }}>NO</th>
                  <th style={{ padding: "16px 20px", fontWeight: 700, fontSize: "0.85rem", minWidth: 180 }}>CLIENT</th>
                  <th style={{ padding: "16px 20px", fontWeight: 700, fontSize: "0.85rem", minWidth: 160 }}>ACTION / LAYANAN</th>
                  <th style={{ padding: "16px 20px", fontWeight: 700, fontSize: "0.85rem", minWidth: 300 }}>LOCATION / BANDARA</th>
                </tr>
              </thead>
              <tbody>
                {clientData.map((item, index) => (
                  <tr
                    key={item.no}
                    style={{
                      borderBottom: index === clientData.length - 1 ? "none" : "1px solid #F1F5F9",
                      background: index % 2 === 0 ? "#fff" : "#FAFAFA",
                      transition: "background 0.2s",
                    }}
                  >
                    <td style={{ padding: "18px 20px", textAlign: "center", fontWeight: 700, color: "#1967D2", fontSize: "0.9rem" }}>
                      {item.no}
                    </td>
                    <td style={{ padding: "18px 20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        {item.logo ? (
                          <div style={{ width: 100, height: 40, position: "relative", display: "flex", alignItems: "center", flexShrink: 0 }}>
                            <Image
                              src={item.logo}
                              alt={item.client}
                              width={100}
                              height={40}
                              style={{ objectFit: "contain", maxHeight: 40 }}
                            />
                          </div>
                        ) : (
                          <div style={{ fontWeight: 800, color: "#333", fontSize: "0.95rem" }}>
                            {item.client}
                            {item.subText && (
                              <span style={{ display: "block", fontSize: "0.75rem", color: "#64748B", fontWeight: 400 }}>
                                {item.subText}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </td>
                    <td style={{ padding: "18px 20px" }}>
                      <span
                        style={{
                          display: "inline-block",
                          background: "rgba(25, 103, 210, 0.08)",
                          color: "#1967D2",
                          border: "1px solid rgba(25, 103, 210, 0.2)",
                          padding: "6px 12px",
                          borderRadius: 6,
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.actionUpper}
                      </span>
                    </td>
                    <td style={{ padding: "18px 20px", color: "#475569", fontSize: "0.85rem", lineHeight: 1.6 }}>
                      <i className="fas fa-location-dot" style={{ color: "#F5A623", marginRight: 8 }} />
                      {item.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE LIST */}
          <div className="mobile-client-list">
            {clientData.map((item, index) => (
              <div
                key={item.no}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "16px 20px",
                  borderBottom: index === clientData.length - 1 ? "none" : "1px solid #F1F5F9",
                  background: "#fff",
                }}
              >
                {/* Green indicator dot */}
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 3,
                    background: "#10B981",
                    boxShadow: "0 0 8px rgba(16,185,129,0.4)",
                    display: "inline-block",
                    marginTop: 5,
                    flexShrink: 0,
                  }}
                />
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <strong style={{ color: "#0F172A", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-poppins)" }}>
                      {item.displayName}
                    </strong>
                    <span style={{ color: "#64748B", fontSize: "12px", fontWeight: 600 }}>
                      {item.action}
                    </span>
                  </div>
                  <div style={{ color: "#1967D2", fontSize: "12px", fontWeight: 500, lineHeight: 1.5 }}>
                    {item.shortLoc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
