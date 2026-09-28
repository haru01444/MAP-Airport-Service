import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { client } from "../../../sanity/lib/client";
import { POST_BY_SLUG_QUERY, ALL_POSTS_QUERY } from "../../../sanity/lib/queries";
import { urlForImage } from "../../../sanity/lib/image";
import { newsData, NewsItem } from "../../data/newsData";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug || "");
  const hyphenatedSlug = decodedSlug.toLowerCase().trim().replace(/\s+/g, "-");
  const spacedSlug = decodedSlug.replace(/-/g, " ");

  let post = await client.fetch(POST_BY_SLUG_QUERY, {
    slug,
    decodedSlug,
    hyphenatedSlug,
    spacedSlug,
  });

  if (!post) {
    const local = newsData.find(
      (n: NewsItem) =>
        n.slug === slug ||
        n.slug === decodedSlug ||
        n.slug === hyphenatedSlug ||
        n.id === slug
    );
    if (local) {
      post = {
        title: local.title,
        excerpt: local.excerpt,
        publishedAt: new Date().toISOString(),
        mainImage: null,
        fallbackImageUrl: local.image,
      };
    } else {
      return {
        title: "Berita Tidak Ditemukan — MAP",
      };
    }
  }

  const imageUrl = (post.mainImage && post.mainImage.asset)
    ? urlForImage(post.mainImage).width(1200).height(630).url()
    : (post.fallbackImageUrl || "/LOGO MAP NO BACKGROUND.png");

  return {
    title: `${post.title} — PT Mawaddah Angkasa Prima`,
    description: post.excerpt || "Berita dan siaran pers resmi PT Mawaddah Angkasa Prima.",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div style={{ margin: "36px 0", textAlign: "center" }}>
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <Image
              src={urlForImage(value).width(1000).url()}
              alt={value.alt || "Dokumentasi MAP"}
              width={1000}
              height={550}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          {value.caption && (
            <p
              style={{
                color: "#64748B",
                fontSize: "0.85rem",
                marginTop: 10,
                fontStyle: "italic",
              }}
            >
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2
        style={{
          fontFamily: "var(--font-poppins)",
          color: "#0F172A",
          fontSize: "1.6rem",
          fontWeight: 800,
          marginTop: 40,
          marginBottom: 16,
          lineHeight: 1.3,
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontFamily: "var(--font-poppins)",
          color: "#0F172A",
          fontSize: "1.3rem",
          fontWeight: 700,
          marginTop: 32,
          marginBottom: 12,
        }}
      >
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p
        style={{
          color: "#334155",
          fontSize: "1.05rem",
          lineHeight: 1.85,
          marginBottom: 24,
        }}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #F5A623",
          paddingLeft: 20,
          margin: "32px 0",
          color: "#001F5B",
          fontStyle: "italic",
          fontSize: "1.1rem",
          lineHeight: 1.7,
          background: "#F8FAFC",
          padding: "20px 24px",
          borderRadius: "0 12px 12px 0",
        }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul
        style={{
          paddingLeft: 24,
          marginBottom: 24,
          color: "#334155",
          lineHeight: 1.8,
          fontSize: "1.02rem",
        }}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{
          paddingLeft: 24,
          marginBottom: 24,
          color: "#334155",
          lineHeight: 1.8,
          fontSize: "1.02rem",
        }}
      >
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1967D2", textDecoration: "underline", fontWeight: 600 }}
      >
        {children}
      </a>
    ),
  },
};

function extractTextFromBody(body: any[]): string[] {
  if (!body || !Array.isArray(body)) return [];
  return body
    .filter((block) => block._type === "block" && block.children)
    .map((block) =>
      block.children
        .map((child: any) => child.text || "")
        .join("")
    )
    .filter((text) => text.trim().length > 0);
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug || "");
  const hyphenatedSlug = decodedSlug.toLowerCase().trim().replace(/\s+/g, "-");
  const spacedSlug = decodedSlug.replace(/-/g, " ");

  let post = await client.fetch(POST_BY_SLUG_QUERY, {
    slug,
    decodedSlug,
    hyphenatedSlug,
    spacedSlug,
  });

  // Fallback to local newsData or first available post if not found in Sanity by exact slug
  if (!post) {
    const localItem = newsData.find(
      (n: NewsItem) =>
        n.slug === slug ||
        n.slug === decodedSlug ||
        n.slug === hyphenatedSlug ||
        n.id === slug
    );
    if (localItem) {
      post = {
        _id: localItem.id,
        title: localItem.title,
        slug: localItem.slug,
        publishedAt: new Date().toISOString(),
        excerpt: localItem.excerpt,
        mainImage: null,
        fallbackImage: localItem.image,
        category: localItem.category,
        bodyParagraphs: localItem.content,
      };
    } else {
      // Try to fetch first available post from Sanity as graceful fallback
      const sanityPostsFallback = await client.fetch(ALL_POSTS_QUERY);
      if (sanityPostsFallback && sanityPostsFallback.length > 0) {
        post = sanityPostsFallback[0];
      } else if (newsData.length > 0) {
        const first = newsData[0];
        post = {
          _id: first.id,
          title: first.title,
          slug: first.slug,
          publishedAt: new Date().toISOString(),
          excerpt: first.excerpt,
          mainImage: null,
          fallbackImage: first.image,
          category: first.category,
          bodyParagraphs: first.content,
        };
      } else {
        notFound();
      }
    }
  }

  // Fetch all posts to build related news section
  let sanityPosts: any[] = [];
  try {
    sanityPosts = await client.fetch(ALL_POSTS_QUERY);
  } catch (err) {
    console.error("Gagal mengambil related posts Sanity:", err);
  }

  let formattedAllPosts: NewsItem[] = (sanityPosts || []).map((p: any) => {
    const bodyParagraphs = extractTextFromBody(p.body);
    return {
      id: p._id,
      slug: p.slug,
      title: p.title,
      category: p.category || "Berita",
      date: new Date(p.publishedAt).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      readTime: "3 min baca",
      author: "Redaksi MAP",
      image: (p.mainImage && p.mainImage.asset)
        ? urlForImage(p.mainImage).width(800).height(450).url()
        : "/LOGO MAP NO BACKGROUND.png",
      isFallbackImage: !(p.mainImage && p.mainImage.asset),
      excerpt: p.excerpt || (bodyParagraphs[0] ? bodyParagraphs[0].slice(0, 140) + "..." : ""),
      content: bodyParagraphs,
      featured: p.featured,
    };
  });

  // Combine Sanity posts with local fallback data to ensure there's always candidate posts
  const allCombinedPosts: NewsItem[] = [
    ...formattedAllPosts,
    ...newsData.filter((nd) => !formattedAllPosts.some((sp) => sp.slug === nd.slug)),
  ];

  // Filter out the current active post
  const otherPosts = allCombinedPosts.filter(
    (item) => item.id !== post._id && item.slug !== post.slug && item.slug !== slug && item.slug !== decodedSlug
  );

  // 1. Prioritaskan berita dari kategori yang sama
  const sameCategoryPosts = otherPosts.filter(
    (item) =>
      item.category &&
      post.category &&
      item.category.trim().toLowerCase() === post.category.trim().toLowerCase()
  );

  // 2. Berita dari kategori lain jika kategori sama kurang dari 3
  const differentCategoryPosts = otherPosts.filter(
    (item) => !sameCategoryPosts.some((scp) => scp.id === item.id)
  );

  // 3. Gabungkan (utamakan kategori sama) dan ambil maksimal 3 berita
  const relatedPosts = [...sameCategoryPosts, ...differentCategoryPosts].slice(0, 3);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isPostFallbackImage = !post.mainImage || !post.mainImage.asset;
  const postHeroImageSrc = (post.mainImage && post.mainImage.asset)
    ? urlForImage(post.mainImage).width(1200).height(650).url()
    : (post.fallbackImage || "/LOGO MAP NO BACKGROUND.png");

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh", paddingTop: 120, paddingBottom: 0, background: "#FFFFFF" }}>
        <article style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          {/* Header Info */}
          <div style={{ marginBottom: 32 }}>
            {/* Category & Date Subheader */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              {post.category && (
                <span
                  style={{
                    color: "#1967D2",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {post.category}
                </span>
              )}
              <span style={{ color: "#64748B", fontSize: "0.9rem" }}>
                <i className="far fa-calendar-alt" style={{ marginRight: 6 }} />
                {formattedDate}
              </span>
            </div>

            {/* Title with Back Button on the Left */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                marginBottom: 16,
              }}
            >
              <Link
                href="/news"
                aria-label="Kembali ke Semua Berita"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: "#F1F5F9",
                  color: "#001F5B",
                  border: "1px solid #CBD5E1",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  transition: "all 0.2s ease",
                  flexShrink: 0,
                  marginTop: 4,
                }}
              >
                <i className="fas fa-arrow-left" />
              </Link>

              <h1
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  lineHeight: 1.25,
                  margin: 0,
                  flex: 1,
                }}
              >
                {post.title}
              </h1>
            </div>

            <div
              style={{
                color: "#64748B",
                fontSize: "0.92rem",
                marginBottom: 28,
              }}
            >
              Dipublikasikan oleh {post.author || "Tim Media PT Mawaddah Angkasa Prima"}
            </div>
          </div>

          {/* Main Hero Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(280px, 35vw, 500px)",
              borderRadius: 16,
              overflow: "hidden",
              marginBottom: 44,
              boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
              background: isPostFallbackImage ? "#F1F5F9" : "#0F172A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isPostFallbackImage ? (
              <div style={{ position: "relative", width: 180, height: 70, opacity: 0.9 }}>
                <Image
                  src="/LOGO MAP NO BACKGROUND.png"
                  alt="Logo MAP"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            ) : (
              <Image
                src={postHeroImageSrc}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            )}
          </div>

          {/* Body Content */}
          <div style={{ paddingBottom: 48, marginBottom: 40 }}>
            {post.body && (
              <PortableText value={post.body} components={portableTextComponents} />
            )}
            {post.bodyParagraphs && post.bodyParagraphs.map((p: string, idx: number) => (
              <p
                key={idx}
                style={{
                  color: "#334155",
                  fontSize: "1.05rem",
                  lineHeight: 1.85,
                  marginBottom: 24,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </article>

        {/* ── BERITA TERKAIT SECTION (3 RELATED ARTICLES) ── */}
        {relatedPosts.length > 0 && (
          <section style={{ background: "#F8FAFC", paddingTop: 64, paddingBottom: 80, borderTop: "1px solid #E2E8F0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
              {/* Eyebrow & Section Header */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ marginBottom: 10 }}>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#1967D2",
                    }}
                  >
                    Rekomendasi
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                    fontWeight: 800,
                    color: "#0F172A",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  Berita Terkait
                </h3>
              </div>

              {/* 3 Related Cards Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: 24,
                }}
              >
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/news/${rel.slug}`}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: 8,
                      border: "1px solid #E2E8F0",
                      overflow: "hidden",
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 4px 16px rgba(0,31,91,0.03)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {/* Image Cover */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: 190,
                        background: (rel.isFallbackImage || rel.image.includes("LOGO MAP")) ? "#F1F5F9" : "#0F172A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      {(rel.isFallbackImage || rel.image.includes("LOGO MAP")) ? (
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
                          src={rel.image}
                          alt={rel.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>

                    {/* Card Body */}
                    <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "#64748B", marginBottom: 10 }}>
                          <span style={{ color: "#1967D2", fontWeight: 600 }}>{rel.category}</span>
                          <span>•</span>
                          <span>{rel.date}</span>
                        </div>

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
                          {rel.title}
                        </h4>

                        <p
                          style={{
                            fontSize: "0.86rem",
                            lineHeight: 1.6,
                            color: "#475569",
                            marginBottom: 16,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {rel.excerpt}
                        </p>
                      </div>

                      <div style={{ paddingTop: 12, borderTop: "1px solid #F1F5F9" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1967D2" }}>
                          Baca Selengkapnya
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
