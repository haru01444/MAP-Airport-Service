"use client";

import { useState } from "react";

export default function MapSection() {
  const airports = [
    { code: "KNO", city: "Medan", name: "Bandar Udara Internasional Kualanamu", top: "18.5%", left: "14.5%" },
    { code: "CGK", city: "Jakarta", name: "Soekarnoâ€“Hatta International Airport", top: "66.8%", left: "33.2%" },
    { code: "SUB", city: "Surabaya", name: "Bandar Udara Internasional Juanda", top: "72.5%", left: "46.7%" },
    { code: "DPS", city: "Bali", name: "Bandar Udara Internasional I Gusti Ngurah Rai", top: "78.5%", left: "52.7%" }
  ];

  const [activeDot, setActiveDot] = useState<string | null>(null);

  const toggleDot = (code: string) => {
    setActiveDot((prev) => (prev === code ? null : code));
  };

  return (
    <section id="map" className="map-section">
      <style dangerouslySetInnerHTML={{
        __html: [
          ".map-section {",
          "          padding: 100px 0;",
          "          background: #F8FAFC;",
          "          position: relative;",
          "        }",
          "        ",
          "        .map-container {",
          "          max-width: 1200px;",
          "          margin: 0 auto;",
          "          padding: 0 24px;",
          "          position: relative;",
          "        }",
          "",
          "        .map-header {",
          "          text-align: center;",
          "          margin-bottom: 60px;",
          "        }",
          "",
          "        .map-eyebrow {",
          "          display: inline-flex;",
          "          align-items: center;",
          "          gap: 10px;",
          "          color: #1967D2;",
          "          font-size: 0.85rem;",
          "          font-weight: 600;",
          "          letter-spacing: 0.12em;",
          "          text-transform: uppercase;",
          "          margin-bottom: 16px;",
          "        }",
          "",
          "        .map-title {",
          "          font-family: var(--font-poppins);",
          "          font-size: clamp(2rem, 4vw, 2.8rem);",
          "          font-weight: 800;",
          "          color: #0F172A;",
          "          margin-bottom: 16px;",
          "        }",
          "",
          "        .map-desc {",
          "          color: #64748B;",
          "          font-size: 1.1rem;",
          "          max-width: 600px;",
          "          margin: 0 auto;",
          "        }",
          "",
          "        .indonesia-map-wrapper {",
          "          position: relative;",
          "          width: 100%;",
          "          border-radius: 20px;",
          "          border: 1px solid #E2E8F0;",
          "          box-shadow: 0 10px 40px rgba(0,0,0,0.03);",
          "          background-color: #F8FAFC;",
          "          line-height: 0;",
          "        }",
          "        ",
          "        .map-inner {",
          "          position: relative;",
          "          width: 100%;",
          "          height: auto;",
          "        }",
          "",
          "        .indonesia-map-img {",
          "          width: 100%;",
          "          height: auto;",
          "          display: block;",
          "          opacity: 0.8;",
          "          border-radius: 20px;",
          "        }",
          "",
          "        .pulsing-dot-wrapper {",
          "          position: absolute;",
          "          transform: translate(-50%, -50%);",
          "          z-index: 10;",
          "          cursor: pointer;",
          "          -webkit-tap-highlight-color: transparent;",
          "        }",
          "",
          "        .pulsing-dot {",
          "          width: 16px;",
          "          height: 16px;",
          "          background-color: #1967D2;",
          "          border-radius: 50%;",
          "          position: relative;",
          "        }",
          "",
          "        .pulsing-dot::before {",
          "          content: '';",
          "          position: absolute;",
          "          left: -100%;",
          "          top: -100%;",
          "          width: 300%;",
          "          height: 300%;",
          "          background-color: #1967D2;",
          "          border-radius: 50%;",
          "          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;",
          "        }",
          "",
          "        @keyframes pulse-ring {",
          "          0% { transform: scale(0.3); opacity: 0.8; }",
          "          80%, 100% { transform: scale(1.5); opacity: 0; }",
          "        }",
          "",
          "        .map-tooltip {",
          "          position: absolute;",
          "          bottom: calc(100% + 12px);",
          "          left: 50%;",
          "          transform: translateX(-50%) translateY(10px);",
          "          background: #0F172A;",
          "          color: #fff;",
          "          padding: 14px 18px;",
          "          border-radius: 10px;",
          "          font-size: 0.85rem;",
          "          width: max-content;",
          "          max-width: 220px;",
          "          pointer-events: none;",
          "          opacity: 0;",
          "          visibility: hidden;",
          "          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);",
          "          box-shadow: 0 10px 25px rgba(0,0,0,0.2);",
          "          text-align: center;",
          "          display: flex;",
          "          flex-direction: column;",
          "          gap: 6px;",
          "          z-index: 50;",
          "        }",
          "",
          "        .map-tooltip::after {",
          "          content: '';",
          "          position: absolute;",
          "          top: 100%;",
          "          left: 50%;",
          "          transform: translateX(-50%);",
          "          border-width: 7px;",
          "          border-style: solid;",
          "          border-color: #0F172A transparent transparent transparent;",
          "        }",
          "",
          "        .pulsing-dot-wrapper:hover .map-tooltip,",
          "        .pulsing-dot-wrapper.active .map-tooltip {",
          "          opacity: 1;",
          "          visibility: visible;",
          "          transform: translateX(-50%) translateY(0);",
          "        }",
          "",
          "        .tooltip-code {",
          "          color: #F5A623;",
          "          font-weight: 800;",
          "          font-size: 1.15rem;",
          "          line-height: 1;",
          "        }",
          "",
          "        .map-watermark {",
          "          position: absolute;",
          "          bottom: 24px;",
          "          right: 32px;",
          "          font-family: var(--font-poppins);",
          "          font-size: 2rem;",
          "          font-weight: 800;",
          "          color: rgba(15,23,42,0.04);",
          "          text-align: right;",
          "          line-height: 1.1;",
          "          pointer-events: none;",
          "        }",
          "",
          "        @media (max-width: 768px) {",
          "          .map-section {",
          "            padding: 60px 0 !important;",
          "            overflow-x: hidden; /* Prevent body scroll */",
          "          }",
          "          .map-container {",
          "            padding-right: 0 !important; /* Remove right padding so map touches edge */",
          "          }",
          "          .map-header {",
          "            margin-bottom: 28px !important;",
          "            padding-right: 24px; /* Put back padding just for header */",
          "          }",
          "          .map-eyebrow {",
          "            font-size: 11.5px !important;",
          "            margin-bottom: 12px !important;",
          "          }",
          "          .map-title {",
          "            font-size: 23px !important;",
          "            line-height: 1.25 !important;",
          "            margin-bottom: 16px !important;",
          "          }",
          "          .map-desc {",
          "            font-size: 13.5px !important;",
          "            line-height: 1.7 !important;",
          "          }",
          "          ",
          "          /* Scrollable full map */",
          "          .indonesia-map-wrapper {",
          "            overflow-x: auto;",
          "            overflow-y: hidden;",
          "            padding: 110px 24px 60px 24px; /* Top/bottom padding for tooltips, left/right for scroll */",
          "            border-radius: 20px 0 0 20px; /* Flat edge on the right */",
          "            border-right: none;",
          "            ",
          "            /* Hide scrollbar for a cleaner look */",
          "            -ms-overflow-style: none;",
          "            scrollbar-width: none;",
          "          }",
          "          .indonesia-map-wrapper::-webkit-scrollbar {",
          "            display: none;",
          "          }",            "          .pulsing-dot-wrapper:nth-child(3) .map-tooltip { left: 0; transform: translateX(-15%) translateY(10px); }",
            "          .pulsing-dot-wrapper:nth-child(3).active .map-tooltip,",
            "          .pulsing-dot-wrapper:nth-child(3):hover .map-tooltip { transform: translateX(-15%) translateY(0); }",
            "          .pulsing-dot-wrapper:nth-child(3) .map-tooltip::after { left: 30px; }",
            "          .pulsing-dot-wrapper:nth-child(6) .map-tooltip { left: auto; right: 0; transform: translateX(10%) translateY(10px); }",
            "          .pulsing-dot-wrapper:nth-child(6).active .map-tooltip,",
            "          .pulsing-dot-wrapper:nth-child(6):hover .map-tooltip { transform: translateX(10%) translateY(0); }",
            "          .pulsing-dot-wrapper:nth-child(6) .map-tooltip::after { left: auto; right: 30px; }",
            "          .map-inner {",
          "            width: 170%; /* Scaled perfectly so Bali is visible */",
          "            left: 0;",
          "            padding-right: 24px;",
          "          }",
          "          .map-watermark {",
          "            font-size: 1.1rem !important;",
          "            bottom: 16px !important;",
          "            right: 40px !important; /* Offset for padding */",
          "          }",
          "        }"
        ].join('\n')
      }} />

      <div className="map-container">
        <div className="map-header">
          <span className="map-eyebrow">
            <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
            Jejak Layanan Kami
          </span>
          <h2 className="map-title">Beroperasi di Bandara Utama Indonesia</h2>
          <p className="map-desc">
            Jaringan operasional ground handling MAP terus berkembang di berbagai titik strategis Indonesia.
          </p>
        </div>

        <div className="indonesia-map-wrapper">
          <div className="map-inner">
            <img src="/indonesia-map.svg" className="indonesia-map-img" alt="Map of Indonesia" />

            <div className="map-watermark">
              Jejak Layanan<br />MAP Indonesia
            </div>

            {airports.map((ap) => {
              const isActive = activeDot === ap.code;
              return (
                <div
                  key={ap.code}
                  className={"pulsing-dot-wrapper" + (isActive ? " active" : "")}
                  style={{ top: ap.top, left: ap.left }}
                  onClick={() => toggleDot(ap.code)}
                >
                  <div className="pulsing-dot"></div>
                  <div className="map-tooltip">
                    <span className="tooltip-code">{ap.code}</span>
                    <span style={{ fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.2 }}>{ap.city}</span>
                    <span style={{ color: "#94A3B8", fontSize: "0.75rem", lineHeight: 1.4 }}>{ap.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}










