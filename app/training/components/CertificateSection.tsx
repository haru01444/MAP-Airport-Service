"use client";

import React from "react";
import Image from "next/image";

/**
 * PLACEHOLDER GAMBAR SERTIFIKAT
 * Anda dapat mengganti gambar ini dengan mengubah file di `/public/certificate-placeholder.png`
 * atau mengganti string path di bawah ini ke lokasi file gambar sertifikat Anda.
 */
const CERTIFICATE_IMAGE_PLACEHOLDER = "/certificate-placeholder.png";

export default function CertificateSection() {
  return (
    <section
      id="sertifikat"
      style={{
        padding: "100px 0",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .cert-section-grid {
              display: grid;
              grid-template-columns: 1.15fr 0.85fr;
              gap: 56px;
              align-items: center;
            }
            .cert-badge-card {
              display: flex;
              align-items: center;
              gap: 20px;
              border: 2px solid #001F5B;
              border-radius: 16px;
              padding: 20px 24px;
              background: #FFFFFF;
              max-width: 480px;
              box-shadow: 0 4px 16px rgba(0, 31, 91, 0.05);
            }
            .cert-doc-frame {
              position: relative;
              background: #FFFFFF;
              border-radius: 12px;
              box-shadow: 0 20px 50px rgba(0, 31, 91, 0.14), 0 2px 8px rgba(0, 0, 0, 0.06);
              overflow: hidden;
              border: 1px solid #E2E8F0;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .cert-doc-frame:hover {
              transform: translateY(-4px);
              box-shadow: 0 28px 60px rgba(0, 31, 91, 0.18);
            }
            @media (max-width: 900px) {
              .cert-section-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
              .cert-badge-card {
                max-width: 100% !important;
                padding: 16px 18px !important;
                gap: 16px !important;
              }
              .cert-main-title {
                font-size: 32px !important;
                line-height: 1.1 !important;
              }
              .cert-subtitle {
                font-size: 17px !important;
                line-height: 1.2 !important;
              }
              .cert-desc {
                font-size: 14px !important;
                line-height: 1.7 !important;
              }
            }
          `,
        }}
      />

      {/* Grid Pattern Dots Accent (Top Right) */}
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 30,
          display: "grid",
          gridTemplateColumns: "repeat(8, 6px)",
          gap: "10px",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#001F5B" }} />
        ))}
      </div>

      {/* Grid Pattern Dots Accent (Bottom Left) */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 30,
          display: "grid",
          gridTemplateColumns: "repeat(8, 6px)",
          gap: "10px",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#001F5B" }} />
        ))}
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        <div className="cert-section-grid">
          
          {/* LEFT COLUMN: Header, Description, and Official Hubud Badge */}
          <div>
            {/* Main Section Titles */}
            <h2
              className="cert-main-title"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                fontWeight: 900,
                color: "#001F5B",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                margin: "0 0 6px 0",
              }}
            >
              SERTIFIKAT
            </h2>
            <div
              className="cert-subtitle"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                fontWeight: 800,
                color: "#001F5B",
                letterSpacing: "0.02em",
                marginBottom: 16,
              }}
            >
              YANG DIKELUARKAN SECARA RESMI
            </div>

            {/* Yellow Bar Accent Line */}
            <div
              style={{
                width: 80,
                height: 5,
                background: "#F5A623",
                borderRadius: 3,
                marginBottom: 28,
              }}
            />

            {/* Main Description */}
            <p
              className="cert-desc"
              style={{
                color: "#334155",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                maxWidth: 540,
                marginBottom: 36,
              }}
            >
              Sertifikat pelatihan dari MAP Training Center dikeluarkan secara resmi oleh{" "}
              <strong style={{ color: "#001F5B", fontWeight: 700 }}>
                Direktorat Jenderal Perhubungan Udara
              </strong>{" "}
              sebagai bukti kompetensi peserta setelah menyelesaikan program pelatihan.
            </p>

            {/* Institution Badge Card Box */}
            <div className="cert-badge-card">
              {/* Vector Emblem of Ditjen Hubud */}
              <div
                style={{
                  width: 58,
                  height: 58,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="58" height="58" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer gear / circular rim */}
                  <circle cx="50" cy="50" r="46" fill="#001F5B" stroke="#F5A623" strokeWidth="3" />
                  <circle cx="50" cy="50" r="38" fill="#0A369D" />
                  {/* Globe Lines */}
                  <circle cx="50" cy="50" r="30" stroke="#F5A623" strokeWidth="1.5" />
                  <ellipse cx="50" cy="50" rx="30" ry="14" stroke="#F5A623" strokeWidth="1.5" fill="none" />
                  <ellipse cx="50" cy="50" rx="14" ry="30" stroke="#F5A623" strokeWidth="1.5" fill="none" />
                  <line x1="20" y1="50" x2="80" y2="50" stroke="#F5A623" strokeWidth="2" />
                  <line x1="50" y1="20" x2="50" y2="80" stroke="#F5A623" strokeWidth="2" />
                  {/* Stylized Wings/Emblem */}
                  <path d="M 28 54 Q 50 36 72 54 L 50 68 Z" fill="#F5A623" />
                  <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
                </svg>
              </div>

              {/* Institution Name */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    color: "#001F5B",
                    lineHeight: 1.25,
                    letterSpacing: "0.02em",
                  }}
                >
                  DIREKTORAT JENDERAL<br />
                  PERHUBUNGAN UDARA
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "#475569",
                    marginTop: 4,
                  }}
                >
                  Kementerian Perhubungan<br />
                  Republik Indonesia
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Certificate Image Document Mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="cert-doc-frame" style={{ width: "100%", maxWidth: 520 }}>
              {/* 
                Placeholder Gambar Sertifikat
                Gambar ini disesuaikan dengan desain sertifikat resmi Direktorat Jenderal Perhubungan Udara.
              */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1.414" }}>
                <Image
                  src={CERTIFICATE_IMAGE_PLACEHOLDER}
                  alt="Sertifikat Resmi Direktorat Jenderal Perhubungan Udara - MAP Training Center"
                  fill
                  style={{ objectFit: "contain", padding: 8, background: "#FAFAFA" }}
                  priority
                  sizes="(max-width: 900px) 100vw, 520px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
