import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HomeAboutSection from "./components/HomeAboutSection";
import ServicesSection from "./components/ServicesSection";
import MapSection from "./components/MapSection";
import ClientsSection from "./components/ClientsSection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { client } from "../sanity/lib/client";
import { ALL_POSTS_QUERY } from "../sanity/lib/queries";
import { urlForImage } from "../sanity/lib/image";
import { newsData, NewsItem } from "./data/newsData";

export const revalidate = 60;

export default async function Home() {
  let sanityPosts: any[] = [];
  try {
    sanityPosts = await client.fetch(ALL_POSTS_QUERY);
  } catch (error) {
    console.error("Gagal mengambil berita Sanity di homepage:", error);
  }

  function extractTextFromBody(body: any[]): string[] {
    if (!body || !Array.isArray(body)) return [];
    try {
      return body
        .filter(
          (block) =>
            block &&
            typeof block === "object" &&
            block._type === "block" &&
            Array.isArray(block.children)
        )
        .map((block) =>
          (block.children || [])
            .map((child: any) =>
              child && typeof child === "object" && child.text ? String(child.text) : ""
            )
            .join("")
        )
        .filter((text) => typeof text === "string" && text.trim().length > 0);
    } catch (e) {
      console.error("Error extracting text from body:", e);
      return [];
    }
  }

  function safeFormatDate(rawDate: any): string {
    if (!rawDate) return "Terbaru";
    try {
      const parsed = new Date(rawDate);
      if (isNaN(parsed.getTime())) return "Terbaru";
      return parsed.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return "Terbaru";
    }
  }

  const formattedSanityPosts: NewsItem[] = (sanityPosts || [])
    .filter((p: any) => p && typeof p === "object")
    .map((p: any): NewsItem | null => {
      try {
        const bodyParagraphs = extractTextFromBody(p.body);
        const item: NewsItem = {
          id: String(p._id || Math.random()),
          slug: String(p.slug || p._id || "berita"),
          title: String(p.title || "Berita MAP"),
          category: String(p.category || "Operasional"),
          date: safeFormatDate(p.publishedAt || p._createdAt),
          readTime: "3 min baca",
          author: "Tim Media MAP",
          image: (p.mainImage && p.mainImage.asset)
            ? urlForImage(p.mainImage).width(800).height(500).url()
            : "/LOGO MAP NO BACKGROUND.png",
          isFallbackImage: !(p.mainImage && p.mainImage.asset),
          excerpt: String(p.excerpt || ""),
          content: bodyParagraphs.length > 0 ? bodyParagraphs : [p.excerpt || ""],
          tags: [p.category || "Berita"],
          featured: Boolean(p.featured),
        };
        return item;
      } catch (err) {
        console.error("Error formatting sanity post:", err);
        return null;
      }
    })
    .filter((item: NewsItem | null): item is NewsItem => item !== null);

  const combinedPosts: NewsItem[] = [
    ...formattedSanityPosts,
    ...newsData.filter((nd) => !formattedSanityPosts.some((sp) => sp.slug === nd.slug)),
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HomeAboutSection />
        <ServicesSection />
        <MapSection />
        <ClientsSection />
        <NewsSection initialPosts={combinedPosts} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
