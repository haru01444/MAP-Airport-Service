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
    return body
      .filter((block) => block._type === "block" && block.children)
      .map((block) =>
        block.children
          .map((child: any) => child.text || "")
          .join("")
      )
      .filter((text) => text.trim().length > 0);
  }

  const formattedSanityPosts: NewsItem[] = (sanityPosts || []).map((p: any) => {
    const bodyParagraphs = extractTextFromBody(p.body);
    return {
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
      image: (p.mainImage && p.mainImage.asset)
        ? urlForImage(p.mainImage).width(800).height(500).url()
        : "/LOGO MAP NO BACKGROUND.png",
      isFallbackImage: !(p.mainImage && p.mainImage.asset),
      excerpt: p.excerpt || "",
      content: bodyParagraphs.length > 0 ? bodyParagraphs : [p.excerpt || ""],
      tags: [p.category || "Berita"],
      featured: Boolean(p.featured),
    };
  });

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
