"use client";

import { useState } from "react";

export default function AdvertisingContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    spaceType: "Full Bus Wrap (360°)",
    duration: "3 Bulan (Brand Awareness)",
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
      alert("Mohon lengkapi nama PIC, nama brand/perusahaan, dan email.");
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
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal mengirim formulir.");
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
    borderRadius: 10,
    border: "1px solid #CBD5E1",
    background: "#fff",
    color: "#0F172A",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "#334155",
    fontSize: "0.85rem",
    fontWeight: 600,
    marginBottom: 6,
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: "48px 32px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
          border: "1px solid #E2E8F0",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#ECFDF5",
            color: "#059669",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            fontSize: "2rem",
          }}
        >
          <i className="fas fa-check-circle" />
        </div>
        <h3 style={{ color: "#0F172A", fontSize: "1.4rem", fontWeight: 700, marginBottom: 12 }}>
          Permintaan Terkirim!
        </h3>
        <p style={{ color: "#64748B", lineHeight: 1.7, maxWidth: 440, margin: "0 auto 28px" }}>
          Terima kasih telah tertarik beriklan di armada shuttle bus MAP. Tim Sales Advertising kami akan segera menghubungi Anda dengan Media Kit & penawaran resmi.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              company: "",
              email: "",
              phone: "",
              spaceType: "Full Bus Wrap (360°)",
              duration: "3 Bulan (Brand Awareness)",
              message: "",
            });
          }}
          style={{
            background: "#001F5B",
            color: "#fff",
            border: "none",
            padding: "12px 28px",
            borderRadius: 10,
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Kirim Permintaan Lain
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        borderRadius: 24,
        padding: "40px",
        boxShadow: "0 20px 50px rgba(0,31,91,0.08)",
        border: "1px solid #E2E8F0",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
        <div>
          <label style={labelStyle}>
            Nama Penanggung Jawab / PIC <span style={{ color: "#EF4444" }}>*</span>
          </label>
          <input
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
          <label style={labelStyle}>
            Nama Brand / Perusahaan <span style={{ color: "#EF4444" }}>*</span>
          </label>
          <input
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

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
        <div>
          <label style={labelStyle}>
            Email Bisnis <span style={{ color: "#EF4444" }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="pic@perusahaan.com"
            style={inputStyle}
            required
          />
        </div>
        <div>
          <label style={labelStyle}>Nomor WhatsApp / Telepon</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="0812xxxxxxx"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
        <div>
          <label style={labelStyle}>Jenis Advertising Space</label>
          <select
            name="spaceType"
            value={form.spaceType}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="Full Bus Wrap (360°)">Full Bus Wrap (360° Exterior)</option>
            <option value="Side Panel (Kiri / Kanan)">Side Panel (Kiri / Kanan)</option>
            <option value="Rear Panel / Back Wrap">Rear Panel / Back Wrap</option>
            <option value="Interior Cards / Overhead Panels">Interior Cards / Overhead Panels</option>
            <option value="Kombinasi Eksterior & Interior">Kombinasi Eksterior & Interior</option>
            <option value="Konsultasi Terlebih Dahulu">Konsultasi Terlebih Dahulu</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Rencana Durasi Campaign</label>
          <select
            name="duration"
            value={form.duration}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="1 Bulan (Tactical / Event)">1 Bulan (Tactical / Event Launch)</option>
            <option value="3 Bulan (Brand Awareness)">3 Bulan (Brand Awareness - Rekomendasi)</option>
            <option value="6 Bulan (Maksimal Reach)">6 Bulan (Maksimal Reach)</option>
            <option value="1 Tahun (Brand Dominance)">1 Tahun (Brand Dominance Exclusive)</option>
            <option value="Custom Duration">Custom / Konsultasi Durasi</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: 28 }}>
        <label style={labelStyle}>Brief / Pertanyaan Tambahan</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Jelaskan kebutuhan campaign, target bandara (CGK/SUB/KNO/UPG), atau periode tayang yang diinginkan..."
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          background: loading ? "#94A3B8" : "linear-gradient(135deg, #001F5B, #1967D2)",
          color: "#fff",
          fontWeight: 700,
          padding: "16px",
          borderRadius: 12,
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          boxShadow: "0 10px 24px rgba(0,31,91,0.2)",
          transition: "all 0.2s",
        }}
      >
        <i className={`fas ${loading ? "fa-spinner fa-spin" : "fa-paper-plane"}`} />
        {loading ? "Mengirimkan Permintaan..." : "Hubungi Tim Sales Advertising"}
      </button>

      {errorMsg && (
        <p style={{ color: "#EF4444", fontSize: "0.85rem", textAlign: "center", marginTop: 12 }}>
          ⚠ {errorMsg}
        </p>
      )}

      <p style={{ color: "#94A3B8", fontSize: "0.8rem", textAlign: "center", marginTop: 16 }}>
        🔒 Informasi perusahaan Anda aman dan hanya digunakan untuk korespondensi penawaran resmi MAP.
      </p>
    </form>
  );
}
