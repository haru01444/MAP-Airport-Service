"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsData, NewsItem } from "../data/newsData";

interface NewsSectionProps {
  initialPosts?: NewsItem[];
}

export default function NewsSection({ initialPosts }: NewsSectionProps) {
  const posts = initialPosts && initialPosts.length > 0 ? initialPosts : newsData;
  const displayNews = [...posts, ...posts, ...posts];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstCard = container.querySelector(".home-news-card") as HTMLElement;
    if (!firstCard) return;

    const step = firstCard.offsetWidth + 24;
    const oneSetWidth = step * posts.length;

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

  // Auto-play scroll every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleScroll("right");
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="news"
      style={{ padding: "96px 0", background: "#F8FAFC", overflow: "hidden", borderTop: "1px solid #E2E8F0" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style dangerouslySetInnerHTML={{
        __html: [
          ".home-news-carousel-wrap { display: flex; gap: 24px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 16px 4px 24px; -webkit-overflow-scrolling: touch; scrollbar-width: none; }",
          ".home-news-carousel-wrap::-webkit-scrollbar { display: none; }",
          ".home-news-card { flex: 0 0 calc((100% - 48px) / 3); min-width: 340px; scroll-snap-align: start; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 16px rgba(0,31,91,0.03); }",
          ".home-news-card:hover { transform: translateY(-6px); border-color: #1967D2; box-shadow: 0 16px 36px rgba(0,31,91,0.1); }",
          ".home-news-card:hover .home-news-img { transform: scale(1.06); }",
          ".home-news-img-frame { position: relative; width: 100%; aspect-ratio: 16/10; overflow: hidden; background: #001F5B; }",
          ".home-news-img { transition: transform 0.4s ease; object-fit: cover; }",
          ".home-news-body { padding: 22px 20px 20px; display: flex; flex-direction: column; justify-content: space-between; flex: 1; }",
          ".home-news-nav-btn { width: 48px; height: 48px; border-radius: 8px; border: 1px solid #CBD5E1; background: #fff; color: #001F5B; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }",
          ".home-news-nav-btn:hover { background: #001F5B; color: #fff; border-color: #001F5B; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,31,91,0.2); }",
          ".news-view-all-btn { display: inline-flex; align-items: center; gap: 8px; color: #1967D2; font-weight: 600; font-size: 0.95rem; text-decoration: none; padding: 10px 16px; border-radius: 8px; transition: all 0.2s ease; }",
          ".news-view-all-btn:hover { background: rgba(25, 103, 210, 0.08); color: #001F5B; transform: translateX(3px); }",
          "@media (max-width: 768px) {",
          "  .home-news-card { flex: 0 0 280px !important; min-width: 280px !important; border-radius: 8px !important; }",
          "  .home-news-body { padding: 18px 16px 16px !important; }",
          "  .news-bottom-bar { flex-direction: column !important; gap: 16px !important; align-items: center !important; }",
          "  .news-bottom-spacer { display: none !important; }",
          "}"
        ].join('\n')
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ display: "inline-block", width: 20, height: 2, background: "#F5A623", borderRadius: 2 }} />
            <span
              style={{
                color: "#1967D2",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Berita &amp; Informasi
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, margin: 0 }}>
            Kabar Terbaru MAP
          </h2>
        </div>

        {/* Carousel Slider */}
        <div className="home-news-carousel-wrap" ref={scrollRef}>
          {displayNews.map((item, idx) => (
            <Link
              key={`${item.id}-${idx}`}
              href={`/news/${item.slug}`}
              className="home-news-card"
            >
              {/* Card Image */}
              <div
                className="home-news-img-frame"
                style={{
                  background: (item.isFallbackImage || item.image.includes("LOGO MAP")) ? "#F1F5F9" : "#0F172A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {(item.isFallbackImage || item.image.includes("LOGO MAP")) ? (
                  <div style={{ position: "relative", width: 130, height: 48, opacity: 0.88 }}>
                    <Image
                      src="/LOGO MAP NO BACKGROUND.png"
                      alt="Logo MAP"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="home-news-img"
                    sizes="(max-width: 768px) 280px, 380px"
                  />
                )}
              </div>

              {/* Card Body */}
              <div className="home-news-body">
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      lineHeight: 1.4,
                      marginBottom: 10,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#64748B",
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                      marginBottom: 18,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 14,
                    borderTop: "1px solid #F1F5F9",
                  }}
                >
                  <span
                    style={{
                      color: "#1967D2",
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Baca Selengkapnya
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation row below cards */}
        <div
          className="news-bottom-bar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 28,
          }}
        >
          {/* Left spacer to keep center buttons perfectly centered on desktop */}
          <div className="news-bottom-spacer" style={{ width: 140, flexShrink: 0 }} />

          {/* Centered Prev & Next Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
            }}
          >
            <button
              onClick={() => handleScroll("left")}
              className="home-news-nav-btn"
              aria-label="Scroll left"
            >
              <i className="fas fa-chevron-left" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="home-news-nav-btn"
              aria-label="Scroll right"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>

          {/* Far-Right "Lihat Semua" Button linking directly to /news */}
          <div style={{ textAlign: "right", minWidth: 140 }}>
            <Link
              href="/news"
              className="news-view-all-btn"
              aria-label="Lihat semua berita"
            >
              <span>Lihat Semua</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
