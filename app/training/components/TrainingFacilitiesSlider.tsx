"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface FacilityItem {
  id: string;
  num: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
}

const facilitiesData: FacilityItem[] = [
  {
    id: "perpustakaan",
    num: "01",
    tag: "01 • RUANG BACA & LITERATUR",
    title: "Perpustakaan",
    desc: "Koleksi buku dan sumber belajar lengkap untuk mendukung pengembangan pengetahuan.",
    image: "/facilities/01-perpustakaan.jpg",
  },
  {
    id: "ruang-kelas",
    num: "02",
    tag: "02 • RUANG PEMBELAJARAN",
    title: "Ruang Kelas",
    desc: "Ruang kelas ber-AC dilengkapi fasilitas modern untuk proses pembelajaran yang optimal.",
    image: "/facilities/02-ruang-kelas.jpg",
  },
  {
    id: "ruang-kantor-1",
    num: "03",
    tag: "03 • ADMINISTRASI & MANAJEMEN",
    title: "Ruang Kantor 1",
    desc: "Ruang kantor yang representatif dan nyaman untuk mendukung kegiatan administrasi dan manajemen.",
    image: "/facilities/03-ruang-kantor-1.jpg",
  },
  {
    id: "ruang-kantor-2",
    num: "04",
    tag: "04 • RUANG KOORDINASI TIM",
    title: "Ruang Kantor 2",
    desc: "Ruang kerja yang nyaman dan modern untuk mendukung koordinasi tim dan pelayanan yang optimal.",
    image: "/facilities/04-ruang-kantor-2.jpg",
  },
  {
    id: "asrama",
    num: "05",
    tag: "05 • AKOMODASI PESERTA",
    title: "Asrama",
    desc: "Fasilitas asrama yang bersih, aman, dan nyaman untuk mendukung kebutuhan peserta pelatihan.",
    image: "/facilities/05-asrama.jpg",
  },
  {
    id: "mushola",
    num: "06",
    tag: "06 • SARANA IBADAH",
    title: "Mushola",
    desc: "Mushola yang bersih dan nyaman sebagai sarana ibadah bagi peserta pelatihan.",
    image: "/facilities/06-mushola.jpg",
  },
];

// Duplicate items 3x for endless continuous smooth scrolling
const displayFacilities = [...facilitiesData, ...facilitiesData, ...facilitiesData];

export default function TrainingFacilitiesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstCard = container.querySelector(".training-facility-card") as HTMLElement;
    if (!firstCard) return;

    const step = firstCard.offsetWidth + 24;
    const oneSetWidth = step * facilitiesData.length;

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
      id="fasilitas"
      className="training-facilities-section"
      style={{ padding: "96px 0", background: "#FFFFFF", overflow: "hidden", scrollMarginTop: "80px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: [
            ".training-fac-carousel-wrap { display: flex; gap: 24px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 16px 4px 24px; -webkit-overflow-scrolling: touch; scrollbar-width: none; }",
            ".training-fac-carousel-wrap::-webkit-scrollbar { display: none; }",
            ".training-facility-card { flex: 0 0 calc((100% - 48px) / 3); min-width: 340px; scroll-snap-align: start; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 16px rgba(0,31,91,0.03); }",
            ".training-facility-card:hover { transform: translateY(-6px); border-color: #1967D2; box-shadow: 0 16px 36px rgba(0,31,91,0.1); }",
            ".training-facility-card:hover .training-fac-img { transform: scale(1.06); }",
            ".training-fac-img-frame { position: relative; width: 100%; aspect-ratio: 16/11; overflow: hidden; background: #F1F5F9; }",
            ".training-fac-img { transition: transform 0.4s ease; object-fit: cover; }",
            ".training-fac-body { padding: 22px 20px 20px; display: flex; flex-direction: column; justify-content: space-between; flex: 1; }",
            ".training-fac-nav-btn { width: 48px; height: 48px; border-radius: 8px; border: 1px solid #CBD5E1; background: #fff; color: #001F5B; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }",
            ".training-fac-nav-btn:hover { background: #001F5B; color: #fff; border-color: #001F5B; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,31,91,0.2); }",
            "@media (max-width: 768px) {",
            "  .training-facilities-section { padding: 56px 0 !important; }",
            "  .training-fac-top { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; margin-bottom: 24px !important; }",
            "  .training-fac-title { font-size: 24px !important; }",
            "  .training-fac-desc { font-size: 14px !important; line-height: 1.7 !important; }",
            "  .training-facility-card { flex: 0 0 280px !important; min-width: 280px !important; border-radius: 8px !important; }",
            "  .training-fac-body { padding: 18px 16px 18px !important; }",
            "  .training-fac-actions { flex-direction: column !important; align-items: stretch !important; gap: 16px !important; }",
            "}",
          ].join("\n"),
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Top Header */}
        <div
          className="training-fac-top"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 32,
            marginBottom: 36,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block" }} />
              <span
                style={{
                  color: "#1967D2",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                SARANA &amp; PRASARANA
              </span>
            </div>
            <h2
              className="training-fac-title"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.25,
                margin: 0,
              }}
            >
              Fasilitas Pelatihan Modern <br />
              <strong>yang Lengkap &amp; Nyaman.</strong>
            </h2>
          </div>

          <p
            className="training-fac-desc"
            style={{
              color: "#64748B",
              maxWidth: 440,
              lineHeight: 1.7,
              fontSize: "0.95rem",
              margin: 0,
            }}
          >
            Kami menyediakan fasilitas pelatihan yang lengkap, modern, dan nyaman untuk mendukung proses belajar mengajar yang efektif dan profesional.
          </p>
        </div>

        {/* Carousel Container */}
        <div ref={scrollRef} className="training-fac-carousel-wrap">
          {displayFacilities.map((fac, idx) => (
            <Link
              key={`${fac.id}-${idx}`}
              href={`/training/facilities#${fac.id}`}
              className="training-facility-card"
            >
              {/* Image Frame */}
              <div className="training-fac-img-frame">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  className="training-fac-img"
                  sizes="(max-width: 768px) 280px, 380px"
                />
              </div>

              {/* Card Body */}
              <div className="training-fac-body">
                <div>
                  <span
                    style={{
                      color: "#1967D2",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {fac.tag}
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#001F5B",
                      margin: "0 0 8px 0",
                      lineHeight: 1.35,
                    }}
                  >
                    {fac.title}
                  </h3>

                  <p
                    style={{
                      color: "#64748B",
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                      margin: "0 0 16px 0",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {fac.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#1967D2",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    paddingTop: 12,
                    borderTop: "1px solid #F1F5F9",
                  }}
                >
                  <span>Lihat Detail</span>
                  <i className="fas fa-arrow-right" style={{ fontSize: "0.75rem" }} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Actions Row */}
        <div
          className="training-fac-actions"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 28,
          }}
        >
          {/* Navigation Arrow Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={() => handleScroll("left")}
              className="training-fac-nav-btn"
              aria-label="Geser ke kiri"
            >
              <i className="fas fa-chevron-left" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="training-fac-nav-btn"
              aria-label="Geser ke kanan"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

