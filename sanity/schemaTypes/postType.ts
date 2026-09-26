import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Berita & Artikel MAP",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul Berita",
      type: "string",
      validation: (rule) => rule.required().error("Judul berita wajib diisi"),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("Klik 'Generate' untuk membuat URL slug"),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Tanggal Publikasi",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "📌 Sematkan / Pin Berita Ini? (Featured News)",
      description: "Jika tombol ini diaktifkan (ON), berita ini otomatis disematkan sebagai Berita Utama paling atas di halaman website.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "mainImage",
      title: "Foto Utama / Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Deskripsi Gambar (Alt Text untuk SEO)",
        },
      ],
      validation: (rule) => rule.required().error("Foto utama wajib diupload"),
    }),
    defineField({
      name: "excerpt",
      title: "Ringkasan Singkat (Muncul di kartu preview)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(220).warning("Ringkasan sebaiknya di bawah 220 karakter"),
    }),
    defineField({
      name: "body",
      title: "Isi Berita Lengkap",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Keterangan Foto",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption Foto",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "publishedAt",
      media: "mainImage",
    },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString("id-ID", { dateStyle: "medium" }) : "",
        media,
      };
    },
  },
});
