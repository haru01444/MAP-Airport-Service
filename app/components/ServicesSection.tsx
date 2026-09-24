"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface CoreService {
  id: string;
  code: string;
  tag: string;
  title: string;
  desc: string;
  icon: string;
  points: string[];
  link?: string;
  linkText?: string;
}

const coreServices: CoreService[] = [
  {
    id: "gh",
    code: "01",
    tag: "Airlines Ground Handling",
    title: "Ground Handling Services",
    desc: "Penanganan operasional darat menyeluruh untuk maskapai di 4 hub bandara utama Indonesia (CGK, SUB, KNO, UPG).",
    icon: "fa-plane-departure",
    points: ["Ramp Handling & Turnaround", "Passenger Check-In & Gate Management", "Baggage Handling & Load Control"],
  },
  {
    id: "passenger",
    code: "02",
    tag: "Ancillary Services",
    title: "Passenger & Ticketing",
    desc: "Pelayanan penumpang prima, mulai dari penyambutan di terminal, penanganan bagasi, hingga layanan VIP eksklusif.",
    icon: "fa-user-tie",
    points: ["Terminal Passenger Transportation", "Greeting & Meet-and-Assist Services", "Check-in & VIP Protocol Handling"],
  },
  {
    id: "ramp",
    code: "03",
    tag: "Airside Operations",
    title: "Ramp Side Service",
    desc: "Mendukung kelancaran aktivitas di sisi udara secara aman, terkoordinasi, dan tepat waktu untuk setiap penerbangan.",
    icon: "fa-gas-pump",
    points: ["Flight Crew Transport", "Apron Passenger Bus (APB)", "Lavatory & Potable Water Servicing"],
  },
  {
    id: "cleaning",
    code: "04",
    tag: "Hygiene & Sanitization",
    title: "Aircraft & Cabin Cleaning",
    desc: "Menjaga kebersihan dan higienitas kabin pesawat dengan standar internasional dan material tersertifikasi Boeing/Airbus.",
    icon: "fa-broom",
    points: ["Transit / Quick Turnaround Cleaning", "Daily Interior Disinfection", "Aircraft Exterior Washing & Polishing"],
  },
  {
    id: "equipment",
    code: "05",
    tag: "GSE Fleet Support",
    title: "Equipment Rental Support",
    desc: "Penyewaan armada Ground Support Equipment (GSE) motorized dan non-motorized berkualitas tinggi dengan opsi fleksibel.",
    icon: "fa-truck-ramp-box",
    points: ["GPU (Ground Power Unit) 90kVA - 140kVA", "GTC, ACU & ASU Support", "Aircraft Maintenance Stairs"],
  },
  {
    id: "staffing",
    code: "06",
    tag: "Human Resources",
    title: "Outsourcing Staff",
    desc: "Penyediaan tenaga kerja aviasi profesional, terlatih, dan memiliki lisensi resmi untuk mendukung operasional bandara.",
    icon: "fa-users-gear",
    points: ["Certified Aviation Security (AVSEC)", "Ground Staff & Gate Agents", "Licensed GSE Operators & Porters"],
  },
  {
    id: "training",
    code: "07",
    tag: "Education & Cert",
    title: "MAP Training Center",
    desc: "Pusat pelatihan aviasi terpadu untuk mencetak personil yang siap kerja dan tersertifikasi resmi di industri aviasi.",
    icon: "fa-graduation-cap",
    points: ["AVSEC Certification Training", "GSE Operator Training", "Cabin Crew & Aviation Hospitality"],
    link: "/training",
    linkText: "Info Training Center →",
  },
  {
    id: "advertising",
    code: "08",
    tag: "Out-of-Home Media",
    title: "Airport Shuttle Advertising",
    desc: "Media promosi bergerak eksklusif di 6 armada shuttle bus bandara MAP, menjangkau captive audience ribuan penumpang.",
    icon: "fa-bullhorn",
    points: ["Full 360° Bus Wrap Exterior", "Side Panel & Rear Window Ads", "Interior Overhead Cards"],
    link: "/advertising",
    linkText: "Katalog Advertising →",
  },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="home-services-section" style={{ padding: "96px 0", background: "#FFFFFF", overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{
        __html: [
          ".home-svc-carousel-wrap { display: flex; gap: 24px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 16px 4px 32px; -webkit-overflow-scrolling: touch; scrollbar-width: none; }",
          ".home-svc-carousel-wrap::-webkit-scrollbar { display: none; }",
          ".home-svc-card { flex: 0 0 350px; scroll-snap-align: start; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 32px 28px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: relative; }",
          ".home-svc-card:hover { transform: translateY(-6px); border-color: #1967D2; box-shadow: 0 16px 36px rgba(0,31,91,0.08); background: #FFFFFF; }",
          ".home-svc-icon-box { width: 48px; height: 48px; border-radius: 12px; background: rgba(25,103,210,0.08); display: flex; align-items: center; justify-content: center; color: #1967D2; font-size: 1.25rem; }",
          ".home-svc-card:hover .home-svc-icon-box { background: #1967D2; color: #FFFFFF; }",
          ".home-svc-nav-btn { width: 44px; height: 44px; border-radius: 50%; border: 1px solid #E2E8F0; background: #fff; color: #0F172A; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 0.9rem; }",
          ".home-svc-nav-btn:hover:not(:disabled) { background: #001F5B; color: #fff; border-color: #001F5B; }",
          ".home-svc-nav-btn:disabled { opacity: 0.35; cursor: not-allowed; }",
          "@media (max-width: 768px) {",
          "  .home-services-section { padding: 56px 0 !important; }",
          "  .home-svc-top { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; margin-bottom: 24px !important; }",
          "  .home-svc-title { font-size: 24px !important; }",
          "  .home-svc-desc { font-size: 14px !important; line-height: 1.7 !important; }",
          "  .home-svc-card { flex: 0 0 285px !important; padding: 24px 20px !important; border-radius: 12px !important; }",
          "  .home-svc-nav-desktop { display: none !important; }",
          "}"
        ].join('\n')
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Top Header with Navigation Controls */}
        <div className="home-svc-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, marginBottom: 40, flexWrap: "wrap" }}>
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#1967D2",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2 }} />
              Layanan Utama Kami
            </span>
            <h2 className="home-svc-title" style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, margin: 0 }}>
              Solusi Operasional Aviasi <br />
              <strong>yang Menyeluruh &amp; Terpercaya.</strong>
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <p className="home-svc-desc" style={{ color: "#64748B", maxWidth: 460, lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
              Menghadirkan rangkaian layanan terpadu mulai dari operasional maskapai di apron hingga penanganan darat bersertifikasi.
            </p>

            {/* Desktop Arrows */}
            <div className="home-svc-nav-desktop" style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                className="home-svc-nav-btn"
                aria-label="Scroll left"
              >
                <i className="fas fa-chevron-left" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                className="home-svc-nav-btn"
                aria-label="Scroll right"
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="home-svc-carousel-wrap"
        >
          {coreServices.map((svc) => (
            <div key={svc.id} className="home-svc-card">
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <div className="home-svc-icon-box">
                    <i className={"fas " + svc.icon} />
                  </div>
                  <span style={{ fontFamily: "var(--font-poppins)", fontSize: "1.1rem", fontWeight: 800, color: "#CBD5E1" }}>
                    {svc.code}
                  </span>
                </div>

                <span style={{ color: "#1967D2", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>
                  {svc.tag}
                </span>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.22rem", fontWeight: 700, color: "#0F172A", marginBottom: 12, lineHeight: 1.3 }}>
                  {svc.title}
                </h3>
                <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: 20 }}>
                  {svc.desc}
                </p>

                {/* Key Points */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {svc.points.map((pt, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: "#334155", fontSize: "0.84rem", fontWeight: 500 }}>
                      <i className="fas fa-check" style={{ color: "#10B981", fontSize: "0.75rem", flexShrink: 0 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Link */}
              <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 16, marginTop: 8 }}>
                {svc.link ? (
                  <Link
                    href={svc.link}
                    style={{
                      color: "#1967D2",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span>{svc.linkText || "Lihat Detail →"}</span>
                  </Link>
                ) : (
                  <Link
                    href="/services"
                    style={{
                      color: "#1967D2",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span>Pelajari Layanan Ini</span>
                    <i className="fas fa-arrow-right" style={{ fontSize: "0.75rem" }} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
