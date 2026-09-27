"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsData, NewsItem } from "../data/newsData";

interface NewsPageContentProps {
  initialPosts?: NewsItem[];
}

export default function NewsPageContent({ initialPosts }: NewsPageContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const currentNewsData = useMemo(() => {
    return initialPosts && initialPosts.length > 0 ? initialPosts : newsData;
  }, [initialPosts]);

  // Dynamically compute unique categories from data while keeping standard ones available
  const categories = useMemo(() => {
    const defaultCats = ["Semua", "Operasional", "Pelatihan & Karir", "Armada & Peralatan", "Kemitraan"];
    const dynamicCats = currentNewsData
      .map((item) => item.category?.trim())
      .filter((cat): cat is string => Boolean(cat));

    const set = new Set<string>();
    set.add("Semua");
    defaultCats.slice(1).forEach((cat) => set.add(cat));
    dynamicCats.forEach((cat) => set.add(cat));
    return Array.from(set);
  }, [currentNewsData]);

  // Filter news
  const filteredNews = useMemo(() => {
    return currentNewsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "Semua" ||
        (item.category && item.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase());
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [currentNewsData, searchQuery, selectedCategory]);

  // Sorotan Utama: Prioritaskan artikel yang dipin (featured === true).
  // Jika tidak ada yang dipin, gunakan artikel paling baru diupload (item pertama).
  const featuredArticle = useMemo(() => {
    if (!currentNewsData || currentNewsData.length === 0) return null;
    const pinned = currentNewsData.find((item) => item.featured === true);
    return pinned || currentNewsData[0];
  }, [currentNewsData]);

  // Daftar Artikel & Berita (Grid):
  // Saat tab 'Semua' aktif & tidak ada pencarian, kecualikan featuredArticle agar tidak muncul ganda.
  const gridNews = useMemo(() => {
    if (!searchQuery && selectedCategory === "Semua" && featuredArticle) {
      return filteredNews.filter((item) => item.id !== featuredArticle.id);
    }
    return filteredNews;
  }, [filteredNews, searchQuery, selectedCategory, featuredArticle]);

  // Pagination calculation
  const totalPages = Math.ceil(gridNews.length / ITEMS_PER_PAGE);

  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return gridNews.slice(start, start + ITEMS_PER_PAGE);
  }, [gridNews, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const element = document.getElementById("news-grid-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

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
            "  text-decoration: none;",
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
            "  width: 100%;",
            "  display: flex;",
            "  align-items: center;",
            "  justify-content: center;",
            "  text-align: center;",
            "  padding: 10px 14px;",
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
            ".category-fullwidth-container {",
            "  display: grid;",
            "  grid-template-columns: repeat(5, 1fr);",
            "  gap: 10px;",
            "  width: 100%;",
            "  margin-top: 20px;",
            "  padding-top: 16px;",
            "  border-top: 1px solid #F1F5F9;",
            "}",
            ".news-pagination-wrap {",
            "  display: flex;",
            "  align-items: center;",
            "  justify-content: center;",
            "  gap: 8px;",
            "  margin-top: 48px;",
            "  flex-wrap: wrap;",
            "}",
            ".news-page-btn {",
            "  min-width: 40px;",
            "  height: 40px;",
            "  padding: 0 12px;",
            "  display: inline-flex;",
            "  align-items: center;",
            "  justify-content: center;",
            "  border-radius: 6px;",
            "  font-size: 0.9rem;",
            "  font-weight: 600;",
            "  transition: all 0.2s ease;",
            "  cursor: pointer;",
            "  border: 1px solid #CBD5E1;",
            "  background: #FFFFFF;",
            "  color: #334155;",
            "  user-select: none;",
            "}",
            ".news-page-btn:hover:not(:disabled):not(.active) {",
            "  background: #F1F5F9;",
            "  color: #001F5B;",
            "  border-color: #94A3B8;",
            "}",
            ".news-page-btn.active {",
            "  background: #001F5B;",
            "  color: #FFFFFF;",
            "  border-color: #001F5B;",
            "  box-shadow: 0 2px 8px rgba(0, 31, 91, 0.18);",
            "  cursor: default;",
            "}",
            ".news-page-btn:disabled {",
            "  opacity: 0.4;",
            "  cursor: not-allowed;",
            "  border-color: #E2E8F0;",
            "  background: #F8FAFC;",
            "  color: #94A3B8;",
            "}",
            ".news-page-ellipsis {",
            "  min-width: 32px;",
            "  height: 40px;",
            "  display: inline-flex;",
            "  align-items: center;",
            "  justify-content: center;",
            "  font-size: 0.9rem;",
            "  color: #64748B;",
            "  font-weight: 600;",
            "}",
            "@media (max-width: 900px) {",
            "  .news-grid { grid-template-columns: 1fr !important; }",
            "  .featured-card-grid { grid-template-columns: 1fr !important; }",
            "  .featured-img-wrap { min-height: 240px !important; }",
            "  .category-fullwidth-container {",
            "    display: flex !important;",
            "    overflow-x: auto !important;",
            "    padding-bottom: 8px !important;",
            "    -webkit-overflow-scrolling: touch !important;",
            "  }",
            "  .category-fullwidth-container .news-category-btn {",
            "    flex: 0 0 auto !important;",
            "    width: auto !important;",
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
                onChange={(e) => handleSearchChange(e.target.value)}
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
                  onClick={() => handleSearchChange("")}
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

          {/* Category Tabs Full Width */}
          <div className="category-fullwidth-container">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
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
            <div style={{ marginBottom: 14 }}>
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#1967D2",
                }}
              >
                Sorotan Utama
              </span>
            </div>

            <Link
              href={`/news/${featuredArticle.slug}`}
              className="news-card featured-card-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                background: "#FFFFFF",
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(0, 31, 91, 0.04)",
                textDecoration: "none",
              }}
            >
              {/* Image */}
              <div
                className="featured-img-wrap"
                style={{
                  position: "relative",
                  minHeight: 360,
                  overflow: "hidden",
                  background: (featuredArticle.isFallbackImage || featuredArticle.image.includes("LOGO MAP")) ? "#F1F5F9" : "#0F172A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {(featuredArticle.isFallbackImage || featuredArticle.image.includes("LOGO MAP")) ? (
                  <div style={{ position: "relative", width: 160, height: 60, opacity: 0.88 }}>
                    <Image
                      src="/LOGO MAP NO BACKGROUND.png"
                      alt="Logo MAP"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  <>
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
                          "linear-gradient(to top, rgba(0,31,91,0.5) 0%, transparent 60%)",
                      }}
                    />
                  </>
                )}
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
                    <span style={{ color: "#1967D2", fontWeight: 600 }}>{featuredArticle.category}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                      fontWeight: 700,
                      color: "#001F5B",
                      lineHeight: 1.35,
                      marginBottom: 14,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
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
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
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
            </Link>
          </div>
        )}

        {/* Section Title for Grid */}
        <div id="news-grid-section" style={{ marginBottom: 24, scrollMarginTop: 100 }}>
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
        {gridNews.length === 0 ? (
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
                handleSearchChange("");
                handleCategoryChange("Semua");
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
          <>
            <div
              className="news-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: 24,
              }}
            >
              {paginatedNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="news-card"
                  style={{ textDecoration: "none" }}
                >
                  {/* Image Cover */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 210,
                      overflow: "hidden",
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
                        style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                        className="news-card-img"
                      />
                    )}
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
                      {/* Category & Date */}
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
                        <span style={{ color: "#1967D2", fontWeight: 600 }}>{item.category}</span>
                        <span>•</span>
                        <span>{item.date}</span>
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
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="news-pagination-wrap" aria-label="Navigasi Halaman Berita">
                <button
                  className="news-page-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Halaman sebelumnya"
                >
                  <i className="fas fa-chevron-left" style={{ fontSize: "0.8rem" }} />
                </button>

                {getPageNumbers().map((page, idx) => {
                  if (page === "...") {
                    return (
                      <span key={`dots-${idx}`} className="news-page-ellipsis">
                        …
                      </span>
                    );
                  }
                  const pageNum = page as number;
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`news-page-btn ${isActive ? "active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                      aria-label={`Halaman ${pageNum}`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  className="news-page-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Halaman selanjutnya"
                >
                  <i className="fas fa-chevron-right" style={{ fontSize: "0.8rem" }} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
