import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { client } from "../../sanity/lib/client";
import { ALL_POSTS_QUERY } from "../../sanity/lib/queries";
import { urlForImage } from "../../sanity/lib/image";

export const revalidate = 60; // Refresh data setiap 60 detik

export const metadata: Metadata = {
  title: "Berita & Update Terkini — PT Mawaddah Angkasa Prima",
  description:
    "Pusat informasi resmi, siaran pers, pembaruan operasional, dan perkembangan terbaru seputar layanan aviasi dan ground handling PT Mawaddah Angkasa Prima.",
  keywords: [
    "berita mawaddah angkasa prima",
    "kegiatan MAP airport",
    "siaran pers MAP ground handling",
    "berita aviasi indonesia",
    "info ground handling bandara",
  ],
};

interface PostItem {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  mainImage: any;
  category?: string;
}

export default async function NewsIndexPage() {
  let posts: PostItem[] = [];

  try {
    posts = await client.fetch(ALL_POSTS_QUERY);
  } catch (error) {
    console.error("Gagal mengambil berita dari Sanity:", error);
  }

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <>
      {/* ── TOP NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(1,13,46,0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "14px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <Image
              src="/LOGO MAP NO BACKGROUND.png"
              alt="Logo MAP"
              width={140}
              height={48}
              style={{ height: 44, width: "auto", objectFit: "contain" }}
            />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link
              href="/"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontWeight: 500,
                fontSize: "0.88rem",
                textDecoration: "none",
              }}
            >
              ← Beranda MAP
            </Link>
            <a
              href="https://www.sanity.io/manage/project/opyqbgh4"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(245,166,35,0.15)",
                border: "1px solid rgba(245,166,35,0.4)",
                color: "#F5A623",
                fontWeight: 600,
                padding: "8px 18px",
                borderRadius: 8,
                fontSize: "0.85rem",
                textDecoration: "none",
              }}
            >
              🔒 Tulis Berita (Studio)
            </a>
          </div>
        </div>
      </nav>

      <main style={{ minHeight: "80vh", paddingTop: 110, background: "#F8FAFC" }}>
        {/* ── HEADER BANNER ── */}
        <section
          style={{
            background: "linear-gradient(135deg, #001F5B 0%, #08163E 100%)",
            color: "#fff",
            padding: "64px 24px 72px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />

          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(245,166,35,0.15)",
                color: "#F5A623",
                border: "1px solid rgba(245,166,35,0.3)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: 100,
                marginBottom: 16,
              }}
            >
              MAP Media Center
            </span>
            <h1
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Berita & Pembaruan Terkini
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                margin: "0 auto",
                maxWidth: 600,
              }}
            >
              Pusat informasi resmi seputar kegiatan operasional, inovasi layanan, dan perkembangan terbaru PT Mawaddah Angkasa Prima.
            </p>
          </div>
        </section>

        {/* ── ARTICLES LIST ── */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 100px" }}>
          {posts.length === 0 ? (
            /* Empty State */
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: "80px 32px",
                textAlign: "center",
                border: "1px dashed #CBD5E1",
                boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "#EFF6FF",
                  color: "#1967D2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  margin: "0 auto 20px",
                }}
              >
                <i className="fas fa-newspaper" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#0F172A",
                  marginBottom: 12,
                }}
              >
                Belum Ada Berita yang Diterbitkan
              </h3>
              <p
                style={{
                  color: "#64748B",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                  marginBottom: 28,
                }}
              >
                Ruang redaksi berita baru saja disiapkan. Anda dapat langsung masuk ke Studio Admin untuk menulis dan menerbitkan artikel berita pertama Anda.
              </p>
              <a
                href="https://www.sanity.io/manage/project/opyqbgh4"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "linear-gradient(135deg, #001F5B, #1967D2)",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(0,31,91,0.2)",
                }}
              >
                <i className="fas fa-pen-to-square" /> Buka Studio & Tulis Berita Pertama
              </a>
            </div>
          ) : (
            <div>
              {/* Featured Post */}
              {featuredPost && (
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                    marginBottom: 48,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
                  }}
                >
                  <div style={{ position: "relative", minHeight: 340, width: "100%" }}>
                    {featuredPost.mainImage && (
                      <Image
                        src={urlForImage(featuredPost.mainImage).width(900).height(600).url()}
                        alt={featuredPost.title}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                      />
                    )}
                  </div>
                  <div
                    style={{
                      padding: "48px 40px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      {featuredPost.category && (
                        <span
                          style={{
                            background: "#DBEAFE",
                            color: "#1D4ED8",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            padding: "4px 12px",
                            borderRadius: 100,
                            textTransform: "uppercase",
                          }}
                        >
                          {featuredPost.category}
                        </span>
                      )}
                      <span style={{ color: "#94A3B8", fontSize: "0.85rem" }}>
                        {new Date(featuredPost.publishedAt).toLocaleDateString("id-ID", {
                          dateStyle: "long",
                        })}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                        fontWeight: 800,
                        color: "#0F172A",
                        lineHeight: 1.3,
                        marginBottom: 16,
                      }}
                    >
                      <Link
                        href={`/news/${featuredPost.slug}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {featuredPost.title}
                      </Link>
                    </h2>

                    {featuredPost.excerpt && (
                      <p
                        style={{
                          color: "#64748B",
                          fontSize: "0.95rem",
                          lineHeight: 1.7,
                          marginBottom: 24,
                        }}
                      >
                        {featuredPost.excerpt}
                      </p>
                    )}

                    <div>
                      <Link
                        href={`/news/${featuredPost.slug}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          color: "#1967D2",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          textDecoration: "none",
                        }}
                      >
                        Baca Selengkapnya <i className="fas fa-arrow-right" style={{ fontSize: "0.85rem" }} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid of Other Posts */}
              {regularPosts.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                    gap: 32,
                  }}
                >
                  {regularPosts.map((post) => (
                    <article
                      key={post._id}
                      style={{
                        background: "#fff",
                        borderRadius: 20,
                        overflow: "hidden",
                        border: "1px solid #E2E8F0",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.2s",
                      }}
                    >
                      <div style={{ position: "relative", height: 220, width: "100%" }}>
                        {post.mainImage && (
                          <Image
                            src={urlForImage(post.mainImage).width(600).height(400).url()}
                            alt={post.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        )}
                      </div>
                      <div
                        style={{
                          padding: "24px",
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                            {post.category && (
                              <span
                                style={{
                                  background: "#EFF6FF",
                                  color: "#1D4ED8",
                                  fontSize: "0.72rem",
                                  fontWeight: 700,
                                  padding: "3px 10px",
                                  borderRadius: 100,
                                }}
                              >
                                {post.category}
                              </span>
                            )}
                            <span style={{ color: "#94A3B8", fontSize: "0.8rem" }}>
                              {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                                dateStyle: "medium",
                              })}
                            </span>
                          </div>

                          <h3
                            style={{
                              fontFamily: "var(--font-poppins)",
                              fontSize: "1.15rem",
                              fontWeight: 800,
                              color: "#0F172A",
                              lineHeight: 1.4,
                              marginBottom: 10,
                            }}
                          >
                            <Link
                              href={`/news/${post.slug}`}
                              style={{ color: "inherit", textDecoration: "none" }}
                            >
                              {post.title}
                            </Link>
                          </h3>

                          {post.excerpt && (
                            <p
                              style={{
                                color: "#64748B",
                                fontSize: "0.88rem",
                                lineHeight: 1.6,
                                marginBottom: 20,
                              }}
                            >
                              {post.excerpt}
                            </p>
                          )}
                        </div>

                        <div>
                          <Link
                            href={`/news/${post.slug}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              color: "#1967D2",
                              fontWeight: 700,
                              fontSize: "0.88rem",
                              textDecoration: "none",
                            }}
                          >
                            Baca Selengkapnya →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
