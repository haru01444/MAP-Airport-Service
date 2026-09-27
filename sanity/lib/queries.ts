import { groq } from "next-sanity";

// Query untuk mengambil semua artikel berita yang sudah dipublish
export const ALL_POSTS_QUERY = groq`
  *[_type == "post"] | order(featured desc, publishedAt desc) {
    _id,
    title,
    "slug": coalesce(slug.current, _id),
    publishedAt,
    excerpt,
    mainImage,
    "category": category->title,
    featured,
    body
  }
`;

// Query untuk mengambil 1 artikel berita berdasarkan slug, title, atau ID
export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && (
    slug.current == $slug || 
    slug.current == $decodedSlug || 
    slug.current == $hyphenatedSlug ||
    slug.current == $spacedSlug ||
    title == $decodedSlug ||
    title == $slug ||
    _id == $slug
  )][0] {
    _id,
    title,
    "slug": coalesce(slug.current, _id),
    publishedAt,
    excerpt,
    mainImage,
    "category": category->title,
    body
  }
`;

// Query untuk sitemap berita
export const ALL_POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt
  }
`;
