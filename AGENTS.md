<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# User Preferences & Rules

- **Eksekusi Otomatis (Tanpa Izin)**: Jalankan perubahan kode, perbaikan, pembuatan file, dan pengeditan secara otomatis tanpa perlu meminta izin terlebih dahulu kepada pengguna. Langsung selesaikan tugas secara proaktif.

- **Aturan Mode Tampilan (Desktop/Mobile)**:
  - Jika pengguna mengatakan **"ubah tampilan desktop"**, HANYA ubah layout/styling untuk layar desktop (CSS utama). JANGAN sentuh styling mobile (media queries). Pertahankan fokus/mode "Desktop Only" ini untuk tugas-tugas styling berikutnya hingga pengguna memberikan instruksi lain.
  - Jika pengguna mengatakan **"ubah tampilan mobile"**, HANYA ubah layout/styling untuk layar mobile (di dalam media queries max-width). JANGAN sentuh styling desktop. Pertahankan fokus/mode "Mobile Only" ini untuk tugas-tugas styling berikutnya hingga pengguna memberikan instruksi lain.
  - Jika pengguna mengatakan **"ubah tampilan keduanya"**, ubah layout/styling untuk kedua tampilan (desktop dan mobile), dan pertahankan mode ini untuk instruksi selanjutnya.

- **Aturan Subheader / Eyebrow (Tampilan Keduanya - Desktop & Mobile)**:
  - JANGAN gunakan background card, pill, border, atau badge container pada subheader/eyebrow section.
  - Gunakan format standar: **Garis/Dash oranye (`—`)** di sebelah kiri (width: 20px, height: 2px, background: `#F5A623`, border-radius: 2px) + **Teks Uppercase** (font-weight: 600, letter-spacing: 0.12em) berwarna `#1967D2` pada latar terang atau `#fff` / `#4A9EF5` pada latar gelap.

- **Aturan Tipografi & Styling Mobile**:
  Saat merubah/menyelaraskan tampilan mobile (`@media (max-width: 768px)`), selalu terapkan spesifikasi ukuran font dan line-height berikut:
  1. **Header/Nav**: Nama brand 11.5px (700), Sub-label brand 8.5px, Link menu mobile 14.5px (500), Tombol (Kontak, dll) 12.5–13.5px (600).
  2. **Hero**: H1 32px / line-height 1.12, Paragraf 14.5px / line-height 1.7, Eyebrow 11.5px.
  3. **Trust bar**: Judul item (Safety First, dll) 13px (600), Deskripsi 11.5px.
  4. **About**: H2 25px, Paragraf 14px / line-height 1.75, Angka statistik (7+, 4, 8+) 22px monospace (700), Label statistik 10.5px, Quote 14.5px.
  5. **Layanan (accordion)**: Label layanan 14px (600), Kode (GH·01) 11.5px monospace, Deskripsi 13.5px, Kode bandara (CGK dst.) 16px monospace (700), Nama kota 12px, Nama bandara 10px, Item checklist 13px.
  6. **Peta & Timeline**: H2 23px, Paragraf intro 13.5px, Tahun di timeline 15px monospace (700), Deskripsi item timeline 13px.
  7. **Klien**: Nama klien 14px (600, di dalam card), Chip label (Ticket Sales, dll) 10px (700), Lokasi 12px.
  8. **Kontak/Form**: H2 23px, Label field 12px, Input/select/textarea 15px (pencegahan auto-zoom Safari iOS), Tombol submit 14px.
  9. **Footer**: Judul kolom 11px, Link 12.5px, Copyright 11px.
  10. **Jarak Spacing Header Mobile**: Eyebrow margin-bottom 12px, Judul (H1/H2) margin-bottom 16px, Margin-bottom pembungkus header section 28px.
