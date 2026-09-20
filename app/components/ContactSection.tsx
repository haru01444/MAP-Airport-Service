"use client";

import { useState } from "react";
import Image from "next/image";

const serviceOptions = [
  "Ground Handling Services for Airlines",
  "Passenger & Ticketing Services",
  "Ramp Side Service",
  "Aircraft & Cabin Cleaning",
  "Equipment Rental Support",
  "Lainnya",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Mohon lengkapi semua field yang wajib diisi (*).");
      return;
    }
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal mengirim pesan.");
      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Terjadi kesalahan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    fontSize: "0.9rem",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "rgba(255,255,255,0.8)",
    fontSize: "0.85rem",
    fontWeight: 500,
    marginBottom: 8,
  };

  return (
    <section id="contact" style={{ position: "relative", padding: "100px 0", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1920&q=85"
          alt="Airport"
          fill
          style={{ objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(1,13,46,0.90)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div className="ct-header-wrap" style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="ct-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#fff", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
            <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
            Mari Terhubung
          </span>
          <h2 className="ct-h2" style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: 16 }}>
            Siap Menjadi Mitra Operasional Anda
          </h2>
          <p className="ct-intro" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Kami terbuka untuk menjalin kerja sama dengan maskapai, operator bandara, maupun mitra bisnis lainnya.
            Hubungi kami untuk konsultasi lebih lanjut.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48 }}>
          {/* Info */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem", marginBottom: 28 }}>Informasi Kontak</h3>
            {[
              { icon: "fa-phone", label: "Telepon", value: "+62 831 7029 3216", href: "tel:+6283170293216" },
              { icon: "fa-envelope", label: "Email", value: "mawaddahangkasaprima@gmail.com", href: "mailto:mawaddahangkasaprima@gmail.com" },
              { icon: "fa-location-dot", label: "Alamat", value: "Sentul Village, Jl. Cikeas Raya No. 123, Sukaraja, Kab. Bogor, Jawa Barat 16711" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(74,158,245,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={"fas " + item.icon} style={{ color: "#4A9EF5" }} />
                </div>
                <div>
                  <span style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} style={{ color: "#fff", fontWeight: 500, fontSize: "0.95rem" }}>{item.value}</a>
                  ) : (
                    <address style={{ color: "#fff", fontWeight: 500, fontSize: "0.9rem", lineHeight: 1.6 }}>{item.value}</address>
                  )}
                </div>
              </div>
            ))}
            <a className="ct-btn-call" href="tel:+6283170293216" style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", gap: 10, background: "linear-gradient(135deg, #1967D2, #4A9EF5)", color: "#fff", fontWeight: 600, padding: "14px 28px", borderRadius: 10, fontSize: "0.9rem", marginTop: 8 }}>
              <i className="fas fa-phone" /> Hubungi Kami Sekarang
            </a>
          </div>

          {/* Form */}
          <style dangerouslySetInnerHTML={{ __html: [
          "@media (max-width: 768px) {",
          "              .ct-header-wrap { margin-bottom: 28px !important; }",
          "              .ct-eyebrow { margin-bottom: 12px !important; }",
          "              .ct-h2 { font-size: 23px !important; line-height: 1.25 !important; margin-bottom: 16px !important; }",
          "              .ct-intro { font-size: 13.5px !important; line-height: 1.7 !important; }",
          "              .ct-label { font-size: 12px !important; }",
          "              .ct-input { font-size: 15px !important; }",
          "              .ct-btn { font-size: 14px !important; } .ct-btn-call { width: 100% !important; }",
          "            }",
          "            @media (max-width: 640px) {",
          "              .contact-form-grid {",
          "                grid-template-columns: 1fr !important;",
          "              }",
          "              .contact-card-wrap {",
          "                padding: 24px 20px !important;",
          "              }",
          "            }"
        ].join('\n') }} />
          <div className="contact-card-wrap" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 36 }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem", marginBottom: 24 }}>Kirim Pesan</h3>
                <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label className="ct-label" style={labelStyle}>Nama Lengkap <span style={{ color: "#4A9EF5" }}>*</span></label>
                    <input className="ct-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nama Anda" style={inputStyle} required />
                  </div>
                  <div>
                    <label className="ct-label" style={labelStyle}>Perusahaan / Maskapai</label>
                    <input className="ct-input" type="text" name="company" value={form.company} onChange={handleChange} placeholder="Nama perusahaan" style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label className="ct-label" style={labelStyle}>Email <span style={{ color: "#4A9EF5" }}>*</span></label>
                  <input className="ct-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@perusahaan.com" style={inputStyle} required />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label className="ct-label" style={labelStyle}>Layanan yang Diminati</label>
                  <select className="ct-input" name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, color: form.service ? "#fff" : "rgba(255,255,255,0.4)" }}>
                    <option value="" style={{ background: "#001F5B" }}>Pilih layanan...</option>
                    {serviceOptions.map((s) => <option key={s} value={s} style={{ background: "#001F5B" }}>{s}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label className="ct-label" style={labelStyle}>Pesan <span style={{ color: "#4A9EF5" }}>*</span></label>
                  <textarea className="ct-input" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tuliskan kebutuhan layanan Anda..." style={{ ...inputStyle, resize: "vertical" }} required />
                </div>
                <button className="ct-btn" type="submit" disabled={loading} style={{ width: "100%", background: loading ? "#64748B" : "linear-gradient(135deg, #1967D2, #4A9EF5)", color: "#fff", fontWeight: 600, padding: "14px", borderRadius: 10, border: "none", cursor: loading ? "not-allowed" : "pointer", fontSize: "0.95rem", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, transition: "all 0.2s" }}>
                  <i className={`fas ${loading ? "fa-spinner fa-spin" : "fa-paper-plane"}`} />
                  {loading ? "Mengirim..." : "Kirim Pesan"}
                </button>
                {errorMsg && (
                  <p style={{ color: "#F87171", fontSize: "0.82rem", textAlign: "center", marginTop: 10 }}>
                    ⚠ {errorMsg}
                  </p>
                )}
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", textAlign: "center", marginTop: 12 }}>* Kami akan merespons dalam 1x24 jam kerja</p>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <i className="fas fa-circle-check" style={{ fontSize: "3rem", color: "#4A9EF5", marginBottom: 16, display: "block" }} />
                <h4 style={{ color: "#fff", fontSize: "1.3rem", fontWeight: 700, marginBottom: 12 }}>Pesan Terkirim!</h4>
                <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 24 }}>Terima kasih telah menghubungi kami. Tim kami akan segera merespons dalam 1x24 jam kerja.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", service: "", message: "" }); }} style={{ border: "2px solid rgba(255,255,255,0.3)", color: "#fff", background: "none", padding: "12px 28px", borderRadius: 10, cursor: "pointer", fontWeight: 600 }}>
                  Kirim Pesan Lain
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

