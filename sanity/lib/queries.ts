import { groq } from "next-sanity";

// Query untuk mengambil semua artikel berita yang sudah dipublish
export const ALL_POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(featured desc, publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage,
    "category": category->title,
    featured
  }
`;

// Query untuk mengambil 1 artikel berita berdasarkan slug
export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
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
