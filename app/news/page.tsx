import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBgSlider from "../components/HeroBgSlider";
import NewsPageContent from "./NewsPageContent";
import { client } from "../../sanity/lib/client";
import { ALL_POSTS_QUERY } from "../../sanity/lib/queries";
import { urlForImage } from "../../sanity/lib/image";
import { newsData, NewsItem } from "../data/newsData";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Berita & Informasi | Mawaddah Angkasa Prima",
  description:
    "Kumpulan berita terbaru, siaran pers, dan informasi perkembangan operasional layanan aviasi dan ground handling PT Mawaddah Angkasa Prima.",
  keywords: [
    "berita mawaddah angkasa prima",
    "kabar terbaru MAP",
    "siaran pers ground handling",
    "berita aviasi indonesia",
    "kegiatan operasional bandara MAP",
  ],
};

export default async function NewsPage() {
  let sanityPosts: any[] = [];
  try {
    sanityPosts = await client.fetch(ALL_POSTS_QUERY);
  } catch (error) {
    console.error("Gagal mengambil berita Sanity:", error);
  }

  // Convert Sanity posts to NewsItem format if any exist
  const formattedSanityPosts: NewsItem[] = (sanityPosts || []).map((p: any) => ({
    id: p._id,
    slug: p.slug,
    title: p.title,
    category: p.category || "Operasional",
    date: new Date(p.publishedAt).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    readTime: "3 min baca",
    author: "Tim Media MAP",
    image: p.mainImage
      ? urlForImage(p.mainImage).width(800).height(500).url()
      : "/Ground-Handling-Operations.png",
    excerpt: p.excerpt || "",
    content: [p.excerpt || ""],
    tags: [p.category || "Berita"],
    featured: false,
  }));

  // Combine Sanity posts with existing newsData (Sanity posts first, followed by default newsData)
  const combinedPosts: NewsItem[] = [
    ...formattedSanityPosts,
    ...newsData.filter((nd) => !formattedSanityPosts.some((sp) => sp.slug === nd.slug)),
  ];

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", color: "#0F172A" }}>
      {/* ── 1. NAVBAR IDENTIK DENGAN HOMEPAGE ── */}
      <Navbar />

      {/* ── 2. HERO BANNER WITH SLIDER (SESUAI DESAIN SEBELUMNYA) ── */}
      <section
        className="news-hero-section"
        style={{
          position: "relative",
          minHeight: "52vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          overflow: "hidden",
          padding: "130px 0 60px",
        }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: [
              "@media (max-width: 768px) {",
              "  .news-hero-section { min-height: 45vh !important; padding: 110px 0 50px !important; }",
              "  .news-hero-h1 { font-size: 28px !important; line-height: 1.2 !important; margin-bottom: 12px !important; }",
              "  .news-hero-desc { font-size: 13.5px !important; line-height: 1.6 !important; margin-bottom: 0 !important; }",
              "}",
            ].join("\n"),
          }}
        />

        {/* Background Slider */}
        <HeroBgSlider
          overlayGradient="linear-gradient(180deg, rgba(1, 13, 46, 0.70) 0%, rgba(13, 36, 97, 0.52) 50%, rgba(1, 13, 46, 0.75) 100%)"
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            width: "100%",
          }}
        >
          <span
            style={{
              display: "inline-block",
              color: "#4A9EF5",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            BERITA &amp; INFORMASI
          </span>
          <h1
            className="news-hero-h1"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 22,
            }}
          >
            Kabar Terbaru MAP
          </h1>
          <p
            className="news-hero-desc"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
              maxWidth: 720,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Pusat informasi resmi, siaran pers, pembaruan operasional, dan pencapaian strategis terkini dari PT Mawaddah Angkasa Prima.
          </p>
        </div>
      </section>

      {/* ── 3. MAIN CONTENT: SEARCH, CATEGORIES, FEATURED POST & CARDS GRID ── */}
      <NewsPageContent initialPosts={combinedPosts} />

      {/* ── 4. FOOTER ── */}
      <Footer />
    </div>
  );
}
