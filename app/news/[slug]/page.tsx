import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Footer from "../../components/Footer";
import { client } from "../../../sanity/lib/client";
import { POST_BY_SLUG_QUERY } from "../../../sanity/lib/queries";
import { urlForImage } from "../../../sanity/lib/image";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) {
    return {
      title: "Berita Tidak Ditemukan — MAP",
    };
  }

  const imageUrl = post.mainImage ? urlForImage(post.mainImage).width(1200).height(630).url() : undefined;

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

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
              href="/news"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontWeight: 600,
                fontSize: "0.88rem",
                textDecoration: "none",
              }}
            >
              ← Kembali ke Berita
            </Link>
          </div>
        </div>
      </nav>

      <main style={{ minHeight: "80vh", paddingTop: 120, paddingBottom: 100, background: "#fff" }}>
        <article style={{ maxWidth: 840, margin: "0 auto", padding: "0 24px" }}>
          {/* Header Info */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              {post.category && (
                <span
                  style={{
                    background: "#DBEAFE",
                    color: "#1D4ED8",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: 100,
                    textTransform: "uppercase",
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

            <h1
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "#0F172A",
                lineHeight: 1.25,
                marginBottom: 20,
              }}
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p
                style={{
                  color: "#475569",
                  fontSize: "1.15rem",
                  lineHeight: 1.7,
                  borderLeft: "3px solid #1967D2",
                  paddingLeft: 16,
                  margin: "0 0 32px 0",
                }}
              >
                {post.excerpt}
              </p>
            )}
          </div>

          {/* Main Hero Image */}
          {post.mainImage && (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 440,
                borderRadius: 20,
                overflow: "hidden",
                marginBottom: 44,
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src={urlForImage(post.mainImage).width(1200).height(650).url()}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}

          {/* Body Content */}
          <div style={{ borderBottom: "1px solid #E2E8F0", paddingBottom: 48, marginBottom: 40 }}>
            {post.body && (
              <PortableText value={post.body} components={portableTextComponents} />
            )}
          </div>

          {/* Bottom Back Button & Share */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <Link
              href="/news"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#F1F5F9",
                color: "#0F172A",
                fontWeight: 700,
                padding: "12px 24px",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              <i className="fas fa-arrow-left" /> Semua Berita MAP
            </Link>

            <span style={{ color: "#94A3B8", fontSize: "0.85rem" }}>
              Dipublikasikan oleh Tim Media PT Mawaddah Angkasa Prima
            </span>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
