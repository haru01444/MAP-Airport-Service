"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface CoreService {
  id: string;
  tag: string;
  title: string;
  image: string;
  link: string;
}

const coreServices: CoreService[] = [
  {
    id: "gh",
    tag: "Airlines Ground Handling",
    title: "Ground Handling Services",
    image: "/about-map-operations-v2.jpeg",
    link: "/services#ground-handling",
  },
  {
    id: "passenger",
    tag: "Ancillary Services",
    title: "Passenger & Ticketing Services",
    image: "/services-passenger-host.jpg",
    link: "/services#passenger-services",
  },
  {
    id: "ramp",
    tag: "Airside Operations",
    title: "Ramp Side Service",
    image: "/services-ramp-agent.jpg",
    link: "/services#ramp-services",
  },
  {
    id: "cleaning",
    tag: "Hygiene & Sanitization",
    title: "Aircraft & Cabin Cleaning",
    image: "/Aircraft-Cabin-Cleaning.jpeg",
    link: "/services#cabin-cleaning",
  },
  {
    id: "equipment",
    tag: "GSE Fleet Support",
    title: "Equipment Rental Support",
    image: "/Equipment-Rental-Support.jpeg",
    link: "/services#equipment-rental",
  },
  {
    id: "staffing",
    tag: "Human Resources",
    title: "Outsourcing Staff",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    link: "/services#outsourcing-staff",
  },
  {
    id: "advertising",
    tag: "Out-of-Home Media",
    title: "Airport Shuttle Advertising",
    image: "/fleet-jakarta-cgk.jpg",
    link: "/advertising",
  },
  {
    id: "training",
    tag: "Education & Cert",
    title: "MAP Training Center",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    link: "/training",
  },
];

// Duplicate items 3x for endless continuous forward scrolling
const displayServices = [...coreServices, ...coreServices, ...coreServices];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstCard = container.querySelector(".home-svc-card") as HTMLElement;
    if (!firstCard) return;

    const step = firstCard.offsetWidth + 24;
    const oneSetWidth = step * coreServices.length;

    if (direction === "right") {
      if (container.scrollLeft >= oneSetWidth * 1.8) {
        container.scrollLeft -= oneSetWidth;
      }
      container.scrollBy({ left: step, behavior: "smooth" });
    } else {
      if (container.scrollLeft <= 10) {
        container.scrollLeft += oneSetWidth;
      }
      container.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  // Auto-play scroll every 4 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleScroll("right");
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="services"
      className="home-services-section"
      style={{ padding: "96px 0", background: "#FFFFFF", overflow: "hidden" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style dangerouslySetInnerHTML={{
        __html: [
          ".home-svc-carousel-wrap { display: flex; gap: 24px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 16px 4px 24px; -webkit-overflow-scrolling: touch; scrollbar-width: none; }",
          ".home-svc-carousel-wrap::-webkit-scrollbar { display: none; }",
          ".home-svc-card { flex: 0 0 calc((100% - 48px) / 3); min-width: 340px; scroll-snap-align: start; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 16px rgba(0,31,91,0.03); }",
          ".home-svc-card:hover { transform: translateY(-6px); border-color: #1967D2; box-shadow: 0 16px 36px rgba(0,31,91,0.1); }",
          ".home-svc-card:hover .home-svc-img { transform: scale(1.06); }",
          ".home-svc-img-frame { position: relative; width: 100%; aspect-ratio: 16/11; overflow: hidden; background: #E2E8F0; }",
          ".home-svc-img { transition: transform 0.4s ease; object-fit: cover; }",
          ".home-svc-body { padding: 22px 20px 20px; display: flex; flex-direction: column; justify-content: space-between; flex: 1; }",
          ".home-svc-nav-btn { width: 48px; height: 48px; border-radius: 8px; border: 1px solid #CBD5E1; background: #fff; color: #001F5B; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }",
          ".home-svc-nav-btn:hover { background: #001F5B; color: #fff; border-color: #001F5B; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,31,91,0.2); }",
          "@media (max-width: 768px) {",
          "  .home-services-section { padding: 56px 0 !important; }",
          "  .home-svc-top { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; margin-bottom: 24px !important; }",
          "  .home-svc-title { font-size: 24px !important; }",
          "  .home-svc-desc { font-size: 14px !important; line-height: 1.7 !important; }",
          "  .home-svc-card { flex: 0 0 280px !important; min-width: 280px !important; border-radius: 8px !important; }",
          "  .home-svc-body { padding: 18px 16px 16px !important; }",
          "}"
        ].join('\n')
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Top Header */}
        <div className="home-svc-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, marginBottom: 36, flexWrap: "wrap" }}>
          <div>
            <span
              style={{
                display: "inline-block",
                color: "#1967D2",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Layanan Utama Kami
            </span>
            <h2 className="home-svc-title" style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, margin: 0 }}>
              Solusi Operasional Aviasi <br />
              <strong>yang Menyeluruh &amp; Terpercaya.</strong>
            </h2>
          </div>

          <p className="home-svc-desc" style={{ color: "#64748B", maxWidth: 440, lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
            Menghadirkan rangkaian layanan terpadu mulai dari operasional maskapai di apron hingga penanganan darat bersertifikasi.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="home-svc-carousel-wrap"
        >
          {displayServices.map((svc, idx) => (
            <Link key={`${svc.id}-${idx}`} href={svc.link} className="home-svc-card">
              {/* Image Frame */}
              <div className="home-svc-img-frame">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="home-svc-img"
                  sizes="(max-width: 768px) 280px, 380px"
                />
              </div>

              {/* Card Body */}
              <div className="home-svc-body">
                <div>
                  <span style={{ color: "#1967D2", fontSize: "0.76rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>
                    {svc.tag}
                  </span>

                  <h3 style={{ fontFamily: "var(--font-poppins)", fontSize: "1.15rem", fontWeight: 700, color: "#001F5B", margin: 0, lineHeight: 1.35 }}>
                    {svc.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Navigation Arrow Buttons */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginTop: 28 }}>
          <button
            onClick={() => handleScroll("left")}
            className="home-svc-nav-btn"
            aria-label="Scroll left"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="home-svc-nav-btn"
            aria-label="Scroll right"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>

      </div>
    </section>
  );
}
