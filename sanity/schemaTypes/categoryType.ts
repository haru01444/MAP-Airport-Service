import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Kategori Berita",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nama Kategori",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
    }),
  ],
});
