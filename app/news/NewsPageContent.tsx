"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsData, NewsItem } from "../data/newsData";

const categories = [
  "Semua",
  "Operasional",
  "Pelatihan & Karir",
  "Armada & Peralatan",
  "Kemitraan",
  "Layanan Khusus",
  "Keselamatan",
];

export default function NewsPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  // Filter news
  const filteredNews = useMemo(() => {
    return newsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredArticle = newsData.find((item) => item.featured) || newsData[0];

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", paddingBottom: 100 }}>
      {/* CSS Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: [
            ".news-card {",
            "  background: #FFFFFF;",
            "  border: 1px solid #E2E8F0;",
            "  border-radius: 8px;",
            "  overflow: hidden;",
            "  display: flex;",
            "  flex-direction: column;",
            "  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;",
            "}",
            ".news-card:hover {",
            "  transform: translateY(-6px);",
            "  box-shadow: 0 16px 36px rgba(0, 31, 91, 0.08);",
            "  border-color: #1967D2;",
            "}",
            ".news-card:hover .news-card-img {",
            "  transform: scale(1.06);",
            "}",
            ".news-category-btn {",
            "  padding: 8px 16px;",
            "  border-radius: 6px;",
            "  font-size: 0.88rem;",
            "  font-weight: 500;",
            "  transition: all 0.2s ease;",
            "  cursor: pointer;",
            "  border: 1px solid transparent;",
            "  white-space: nowrap;",
            "}",
            ".news-category-btn.active {",
            "  background: #001F5B;",
            "  color: #FFFFFF;",
            "  border-color: #001F5B;",
            "  box-shadow: 0 2px 8px rgba(0, 31, 91, 0.2);",
            "}",
            ".news-category-btn.inactive {",
            "  background: #FFFFFF;",
            "  color: #475569;",
            "  border-color: #E2E8F0;",
            "}",
            ".news-category-btn.inactive:hover {",
            "  background: #F1F5F9;",
            "  color: #001F5B;",
            "  border-color: #CBD5E1;",
            "}",
            "@media (max-width: 900px) {",
            "  .news-grid { grid-template-columns: 1fr !important; }",
            "  .featured-card-grid { grid-template-columns: 1fr !important; }",
            "  .featured-img-wrap { min-height: 240px !important; }",
            "}",
            "@media (max-width: 600px) {",
            "  .category-scroll-container {",
            "    overflow-x: auto;",
            "    padding-bottom: 8px;",
            "    -webkit-overflow-scrolling: touch;",
            "  }",
            "}",
          ].join("\n"),
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Controls Bar: Search & Categories */}
        <div
          style={{
            transform: "translateY(-36px)",
            position: "relative",
            zIndex: 10,
            background: "#FFFFFF",
            borderRadius: 8,
            padding: "24px 28px",
            boxShadow: "0 10px 30px rgba(0, 31, 91, 0.06)",
            border: "1px solid #E2E8F0",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Search Input */}
            <div style={{ position: "relative", flex: "1 1 280px", maxWidth: 450 }}>
              <span
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#94A3B8",
                  fontSize: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i className="fas fa-search" />
              </span>
              <input
                type="text"
                placeholder="Cari berita atau topik..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 16px 10px 38px",
                  borderRadius: 6,
                  border: "1px solid #CBD5E1",
                  fontSize: "0.92rem",
                  color: "#0F172A",
                  outline: "none",
                  background: "#F8FAFC",
                  transition: "all 0.2s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#1967D2";
                  e.currentTarget.style.background = "#FFFFFF";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(25, 103, 210, 0.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#CBD5E1";
                  e.currentTarget.style.background = "#F8FAFC";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#94A3B8",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Total Results Counter */}
            <div style={{ fontSize: "0.88rem", color: "#64748B", fontWeight: 500 }}>
              Menampilkan <span style={{ color: "#001F5B", fontWeight: 700 }}>{filteredNews.length}</span> artikel
            </div>
          </div>

          {/* Category Tabs */}
          <div
            className="category-scroll-container"
            style={{
              display: "flex",
              gap: 8,
              marginTop: 20,
              paddingTop: 16,
              borderTop: "1px solid #F1F5F9",
            }}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`news-category-btn ${isActive ? "active" : "inactive"}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Article (Shown when no search filter is active and 'Semua' selected) */}
        {!searchQuery && selectedCategory === "Semua" && featuredArticle && (
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#1967D2",
                }}
              >
                Sorotan Utama
              </span>
            </div>

            <div
              className="news-card featured-card-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                background: "#FFFFFF",
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(0, 31, 91, 0.04)",
                cursor: "pointer",
              }}
              onClick={() => setSelectedArticle(featuredArticle)}
            >
              {/* Image */}
              <div
                className="featured-img-wrap"
                style={{
                  position: "relative",
                  minHeight: 360,
                  overflow: "hidden",
                  background: "#0A192F",
                }}
              >
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="news-card-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,31,91,0.6) 0%, transparent 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: "#1967D2",
                    color: "#FFFFFF",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 4,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {featuredArticle.category}
                </div>
              </div>

              {/* Text Info */}
              <div
                style={{
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: "0.82rem",
                      color: "#64748B",
                      marginBottom: 12,
                    }}
                  >
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                      fontWeight: 700,
                      color: "#001F5B",
                      lineHeight: 1.35,
                      marginBottom: 14,
                    }}
                  >
                    {featuredArticle.title}
                  </h2>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.7,
                      color: "#475569",
                      marginBottom: 20,
                    }}
                  >
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 16,
                    borderTop: "1px solid #F1F5F9",
                  }}
                >
                  <span style={{ fontSize: "0.82rem", color: "#64748B", fontWeight: 500 }}>
                    Penulis: {featuredArticle.author}
                  </span>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "#1967D2",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Baca Selengkapnya
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section Title for Grid */}
        <div style={{ marginBottom: 24 }}>
          <h3
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "1.35rem",
              fontWeight: 700,
              color: "#001F5B",
              marginBottom: 4,
            }}
          >
            {selectedCategory === "Semua" ? "Daftar Artikel & Berita" : `Kategori: ${selectedCategory}`}
          </h3>
          <p style={{ color: "#64748B", fontSize: "0.88rem" }}>
            Informasi terkini dan kabar operasional dari PT Mawaddah Angkasa Prima
          </p>
        </div>

        {/* News Grid */}
        {filteredNews.length === 0 ? (
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 8,
              padding: "50px 24px",
              textAlign: "center",
              border: "1px dashed #CBD5E1",
            }}
          >
            <h4
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "1.1rem",
                color: "#001F5B",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              Tidak ada artikel yang ditemukan
            </h4>
            <p style={{ color: "#64748B", fontSize: "0.88rem", maxWidth: 420, margin: "0 auto 18px" }}>
              Coba gunakan kata kunci pencarian lain atau pilih kategori yang berbeda.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Semua");
              }}
              style={{
                padding: "8px 18px",
                borderRadius: 6,
                background: "#1967D2",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.85rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div
            className="news-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 24,
            }}
          >
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="news-card"
                onClick={() => setSelectedArticle(item)}
                style={{ cursor: "pointer" }}
              >
                {/* Image Cover */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 210,
                    overflow: "hidden",
                    background: "#0A192F",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                    className="news-card-img"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: "rgba(0, 31, 91, 0.88)",
                      backdropFilter: "blur(4px)",
                      color: "#4A9EF5",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: 4,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(74, 158, 245, 0.3)",
                    }}
                  >
                    {item.category}
                  </div>
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    {/* Date & Read time */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: "0.78rem",
                        color: "#64748B",
                        marginBottom: 10,
                      }}
                    >
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>

                    {/* Title */}
                    <h4
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#001F5B",
                        lineHeight: 1.4,
                        marginBottom: 10,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.title}
                    </h4>

                    {/* Excerpt */}
                    <p
                      style={{
                        fontSize: "0.86rem",
                        lineHeight: 1.6,
                        color: "#475569",
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

                  {/* Footer link */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 12,
                      borderTop: "1px solid #F1F5F9",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "#1967D2",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Baca Selengkapnya
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Banner / CTA */}
        <div
          style={{
            marginTop: 56,
            background: "linear-gradient(135deg, #001F5B 0%, #0D2461 60%, #1967D2 100%)",
            borderRadius: 8,
            padding: "40px 32px",
            color: "#FFFFFF",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            boxShadow: "0 10px 30px rgba(0, 31, 91, 0.15)",
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <span
              style={{
                color: "#F5A623",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: 8,
              }}
            >
              KEMITRAAN &amp; MEDIA
            </span>
            <h3
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.25rem, 2.2vw, 1.7rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: 10,
                lineHeight: 1.3,
              }}
            >
              Butuh Informasi Lebih Lanjut atau Kerjasama Media?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: 1.65 }}>
              Tim hubungan korporat dan operasional kami siap membantu menjawab pertanyaan Anda terkait layanan ground handling, pelatihan, atau media promosi bandara.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                borderRadius: 6,
                background: "linear-gradient(135deg, #1967D2, #4A9EF5)",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(25, 103, 210, 0.3)",
              }}
            >
              Hubungi Kami
            </Link>
            <Link
              href="/training"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                borderRadius: 6,
                background: "rgba(255,255,255,0.12)",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Info Karir &amp; Pelatihan
            </Link>
          </div>
        </div>
      </div>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 15, 45, 0.8)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
              maxWidth: 760,
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
              position: "relative",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image cover in modal */}
            <div style={{ position: "relative", width: "100%", height: 280, background: "#060B19" }}>
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,20,60,0.85) 0%, transparent 60%)",
                }}
              />
              <button
                onClick={() => setSelectedArticle(null)}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 36,
                  height: 36,
                  borderRadius: 6,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "#FFFFFF",
                  border: "none",
                  fontSize: 16,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label="Tutup"
              >
                ✕
              </button>

              <div style={{ position: "absolute", bottom: 18, left: 22, right: 22 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span
                    style={{
                      background: "#1967D2",
                      color: "#FFFFFF",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: 4,
                      textTransform: "uppercase",
                    }}
                  >
                    {selectedArticle.category}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem" }}>
                    {selectedArticle.date} • {selectedArticle.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "28px 24px 36px" }}>
              <h2
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
                  fontWeight: 700,
                  color: "#001F5B",
                  lineHeight: 1.35,
                  marginBottom: 14,
                }}
              >
                {selectedArticle.title}
              </h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingBottom: 14,
                  marginBottom: 20,
                  borderBottom: "1px solid #E2E8F0",
                  fontSize: "0.85rem",
                  color: "#64748B",
                }}
              >
                <span>Ditulis oleh: <strong>{selectedArticle.author}</strong></span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {selectedArticle.content.map((p, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: "0.94rem",
                      lineHeight: 1.75,
                      color: "#334155",
                      margin: 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Tags */}
              {selectedArticle.tags && selectedArticle.tags.length > 0 && (
                <div
                  style={{
                    marginTop: 28,
                    paddingTop: 18,
                    borderTop: "1px solid #E2E8F0",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: "0.82rem", color: "#64748B", fontWeight: 600 }}>Tag:</span>
                  {selectedArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.75rem",
                        background: "#F1F5F9",
                        color: "#001F5B",
                        padding: "3px 8px",
                        borderRadius: 4,
                        fontWeight: 500,
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Modal Close CTA */}
              <div style={{ marginTop: 28, textAlign: "right" }}>
                <button
                  onClick={() => setSelectedArticle(null)}
                  style={{
                    background: "#001F5B",
                    color: "#FFFFFF",
                    padding: "9px 22px",
                    borderRadius: 6,
                    border: "none",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer",
                  }}
                >
                  Tutup Artikel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
