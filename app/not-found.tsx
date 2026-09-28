import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "140px 24px 80px",
          background: "#F8FAFC",
        }}
      >
        <span
          style={{
            fontSize: "5rem",
            fontWeight: 900,
            color: "#001F5B",
            lineHeight: 1,
            marginBottom: 16,
            fontFamily: "var(--font-poppins)",
          }}
        >
          404
        </span>
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: 800,
            color: "#0F172A",
            marginBottom: 12,
            fontFamily: "var(--font-poppins)",
          }}
        >
          Halaman Tidak Ditemukan
        </h1>
        <p style={{ color: "#64748B", maxWidth: 480, marginBottom: 28, lineHeight: 1.6 }}>
          Halaman yang Anda cari mungkin telah dipindahkan, diubah namanya, atau tidak tersedia.
        </p>
        <Link
          href="/"
          style={{
            background: "#001F5B",
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "12px 28px",
            borderRadius: 6,
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
        >
          Kembali ke Beranda
        </Link>
      </main>
      <Footer />
    </>
  );
}
