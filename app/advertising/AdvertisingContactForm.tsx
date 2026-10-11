"use client";

import { useState } from "react";

export default function AdvertisingContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    spaceType: "Hand Strap / Handgrip",
    duration: "1 Bulan",
    airportTarget: "Bali (DPS) - 6 Buses",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.email) {
      alert("Mohon lengkapi semua field yang wajib diisi (*).");
      return;
    }
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/advertising", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Gagal mengirim formulir.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Terjadi kendala. Silakan coba lagi.");
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
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "rgba(255,255,255,0.8)",
    fontSize: "0.85rem",
    fontWeight: 500,
    marginBottom: 8,
  };

  return (
    <div
      className="ad-contact-card"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        padding: 36,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .ad-contact-card select option {
              background-color: #07153B !important;
              color: #FFFFFF !important;
              padding: 10px 14px !important;
            }
            .ad-contact-card select option:checked,
            .ad-contact-card select option:hover {
              background-color: #1967D2 !important;
              color: #FFFFFF !important;
            }
            @media (max-width: 768px) {
              .ad-label { font-size: 12px !important; }
              .ad-input { font-size: 15px !important; }
              .ad-btn { font-size: 14px !important; }
            }
            @media (max-width: 640px) {
              .ad-form-grid {
                grid-template-columns: 1fr !important;
              }
              .ad-contact-card {
                padding: 24px 20px !important;
              }
            }
          `,
        }}
      />

      {!submitted ? (
        <form onSubmit={handleSubmit} noValidate>
          <h3
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.2rem",
              marginBottom: 24,
              fontFamily: "var(--font-poppins)",
            }}
          >
            Formulir Konsultasi Iklan
          </h3>

          <div className="ad-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div>
              <label className="ad-label" style={labelStyle}>
                Nama Penanggung Jawab / PIC <span style={{ color: "#4A9EF5" }}>*</span>
              </label>
              <input
                className="ad-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Contoh: Budi Santoso"
                style={inputStyle}
                required
              />
            </div>
            <div>
              <label className="ad-label" style={labelStyle}>
                Nama Brand / Perusahaan <span style={{ color: "#4A9EF5" }}>*</span>
              </label>
              <input
                className="ad-input"
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Contoh: PT Brand Indonesia"
                style={inputStyle}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label className="ad-label" style={labelStyle}>
              Email Bisnis <span style={{ color: "#4A9EF5" }}>*</span>
            </label>
            <input
              className="ad-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="pic@perusahaan.com"
              style={inputStyle}
              required
            />
          </div>

          <div className="ad-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div>
              <label className="ad-label" style={labelStyle}>Pilihan Media / Paket</label>
              <select
                className="ad-input"
                name="spaceType"
                value={form.spaceType}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="Hand Strap / Handgrip" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>Hand Strap / Handgrip</option>
                <option value="Window Sticker" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>Window Sticker</option>
                <option value="Interior Branding" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>Interior Branding</option>
                <option value="Full Bus Branding" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>Full Bus Branding</option>
                <option value="Campaign Takeover" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>Campaign Takeover</option>
                <option value="Konsultasi / Paket Lainnya" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>Konsultasi / Paket Lainnya</option>
              </select>
            </div>
            <div>
              <label className="ad-label" style={labelStyle}>Target Lokasi Bandara</label>
              <select
                className="ad-input"
                name="airportTarget"
                value={form.airportTarget}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="Bali (DPS) - 6 Buses" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>I Gusti Ngurah Rai (DPS) - Bali (6 Buses)</option>
                <option value="Jakarta (CGK) - 2 Buses" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>Soekarno-Hatta (CGK) - Jakarta (2 Buses)</option>
                <option value="Keduanya (Bali & Jakarta)" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>Keduanya (Bali & Jakarta - 8 Buses)</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label className="ad-label" style={labelStyle}>Rencana Durasi Campaign</label>
            <select
              className="ad-input"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="1 Bulan" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>1 Bulan</option>
              <option value="3 Bulan" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>3 Bulan (Brand Awareness)</option>
              <option value="6 Bulan" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>6 Bulan (Maksimal Reach)</option>
              <option value="12 Bulan / 1 Tahun" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>12 Bulan / 1 Tahun (Exclusive Dominance)</option>
              <option value="Custom Duration" style={{ backgroundColor: "#010D2E", color: "#FFFFFF" }}>Custom Duration</option>
            </select>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label className="ad-label" style={labelStyle}>Brief / Catatan Tambahan (Opsional)</label>
            <textarea
              className="ad-input"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tuliskan periode tayang yang diinginkan atau pertanyaan khusus untuk tim kami..."
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <button
            className="ad-btn"
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              background: loading ? "#64748B" : "linear-gradient(135deg, #1967D2, #4A9EF5)",
              color: "#fff",
              fontWeight: 600,
              padding: "14px",
              borderRadius: 10,
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              transition: "all 0.2s",
            }}
          >
            <i className={`fas ${loading ? "fa-spinner fa-spin" : "fa-paper-plane"}`} />
            {loading ? "Mengirimkan Permintaan..." : "Hubungi Tim Sales Advertising"}
          </button>

          {errorMsg && (
            <p style={{ color: "#F87171", fontSize: "0.82rem", textAlign: "center", marginTop: 10 }}>
              ⚠ {errorMsg}
            </p>
          )}

          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", textAlign: "center", marginTop: 12 }}>
            * Tim Sales Advertising kami akan merespons dalam 1x24 jam kerja
          </p>
        </form>
      ) : (
        <div style={{ textAlign: "center", padding: "40px 20px" }}>
          <i className="fas fa-circle-check" style={{ fontSize: "3rem", color: "#4A9EF5", marginBottom: 16, display: "block" }} />
          <h4 style={{ color: "#fff", fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, fontFamily: "var(--font-poppins)" }}>
            Permintaan Terkirim!
          </h4>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 24 }}>
            Terima kasih telah tertarik beriklan di armada shuttle bus MAP. Tim Sales Advertising kami akan segera menghubungi Anda dengan proposal & penawaran resmi.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                company: "",
                email: "",
                phone: "",
                spaceType: "Hand Strap / Handgrip",
                duration: "1 Bulan",
                airportTarget: "Bali (DPS) - 6 Buses",
                message: "",
              });
            }}
            style={{
              border: "2px solid rgba(255,255,255,0.3)",
              color: "#fff",
              background: "none",
              padding: "12px 28px",
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Kirim Permintaan Lain
          </button>
        </div>
      )}
    </div>
  );
}
