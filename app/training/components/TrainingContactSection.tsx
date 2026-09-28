"use client";

import React, { useState } from "react";
import Image from "next/image";

const trainingServiceOptions = [
  "Aircraft Maintenance Training",
  "Ground Support Equipment (GSE) Training",
  "Aviation Security (AVSEC) Licensing",
  "Pramugari & Pramugara (Cabin Crew)",
  "Konsultasi Diklat / Informasi Umum",
  "Lainnya",
];

export default function TrainingContactSection({ id = "contact-training" }: { id?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
        body: JSON.stringify({ ...form, source: "training" }),
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
    fontSize: "0.95rem",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "rgba(255,255,255,0.85)",
    fontSize: "0.85rem",
    fontWeight: 500,
    marginBottom: 8,
  };

  return (
    <section id={id} style={{ position: "relative", padding: "100px 0", overflow: "hidden" }}>
      {/* Background with Dark Overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1920&q=85"
          alt="MAP Training Center"
          fill
          style={{ objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(1,13,46,0.90)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header Section */}
        <div className="tc-contact-header" style={{ textAlign: "center", marginBottom: 56 }}>
          {/* Eyebrow matching AGENTS.md rule */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
              justifyContent: "center",
            }}
          >
            <span style={{ width: 20, height: 2, background: "#F5A623", borderRadius: 2, display: "inline-block" }} />
            <span
              style={{
                color: "#4A9EF5",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              INFORMASI &amp; PENDAFTARAN
            </span>
          </div>

          <h2
            className="tc-contact-h2"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.25,
              marginBottom: 16,
            }}
          >
            Mulai Karir Aviasi Anda Bersama MAP Training Center
          </h2>
          <p
            className="tc-contact-intro"
            style={{ color: "rgba(255,255,255,0.75)", maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}
          >
            Hubungi tim pendaftaran kami untuk informasi gelombang diklat, konsultasi program, persyaratan calon siswa, serta penempatan karir aviasi.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48 }}>
          {/* LEFT COLUMN: Contact Information */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem", marginBottom: 28, fontFamily: "var(--font-poppins)" }}>
              Informasi Kontak Diklat
            </h3>

            {[
              {
                icon: "fa-location-dot",
                label: "Alamat Kampus & Kantor Diklat",
                value: "Sentul Village, Jl. Cikeas Raya No. 123, Sukaraja, Kab. Bogor, Jawa Barat 16711, Indonesia",
              },
              {
                icon: "fa-phone",
                label: "Telepon / WhatsApp Pendaftaran",
                value: "083170293216",
                href: "tel:083170293216",
              },
              {
                icon: "fa-envelope",
                label: "Email Pendaftaran & Informasi",
                value: "trainingcenter@map-airportservices.id",
                href: "mailto:trainingcenter@map-airportservices.id",
              },
              {
                icon: "fa-brands fa-instagram",
                label: "Instagram Resmi",
                value: "@map_trainingcenter",
                href: "https://instagram.com/map_trainingcenter",
              },
              {
                icon: "fa-brands fa-tiktok",
                label: "TikTok Resmi",
                value: "@map_trainingcenter",
                href: "https://tiktok.com/@map_trainingcenter",
              },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(74,158,245,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className={`${item.icon.startsWith("fa-brands") ? item.icon : `fas ${item.icon}`}`} style={{ color: "#4A9EF5", fontSize: "1.1rem" }} />
                </div>
                <div>
                  <span
                    style={{
                      display: "block",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.78rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <address style={{ color: "#fff", fontWeight: 500, fontSize: "0.9rem", lineHeight: 1.6, fontStyle: "normal" }}>
                      {item.value}
                    </address>
                  )}
                </div>
              </div>
            ))}

            <a
              className="tc-btn-call"
              href="tel:+6283170293216"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                background: "linear-gradient(135deg, #F5A623 0%, #e8941f 100%)",
                color: "#001F5B",
                fontWeight: 700,
                padding: "14px 28px",
                borderRadius: 10,
                fontSize: "0.9rem",
                marginTop: 8,
                textDecoration: "none",
              }}
            >
              <i className="fas fa-phone" /> Hubungi Pendaftaran Sekarang
            </a>
          </div>

          {/* RIGHT COLUMN: Contact Form Box */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @media (max-width: 768px) {
                  .tc-contact-header { margin-bottom: 28px !important; }
                  .tc-contact-h2 { font-size: 23px !important; line-height: 1.25 !important; margin-bottom: 16px !important; }
                  .tc-contact-intro { font-size: 13.5px !important; line-height: 1.7 !important; }
                  .tc-label { font-size: 12px !important; }
                  .tc-input { font-size: 15px !important; }
                  .tc-btn { font-size: 14px !important; }
                  .tc-btn-call { width: 100% !important; }
                }
                @media (max-width: 640px) {
                  .tc-form-grid {
                    grid-template-columns: 1fr !important;
                  }
                  .tc-contact-card {
                    padding: 24px 20px !important;
                  }
                }
              `,
            }}
          />

          <div
            className="tc-contact-card"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: 36,
            }}
          >
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
                  Form Pendaftaran &amp; Konsultasi
                </h3>

                <div
                  className="tc-form-grid"
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}
                >
                  <div>
                    <label className="tc-label" style={labelStyle}>
                      Nama Lengkap <span style={{ color: "#F5A623" }}>*</span>
                    </label>
                    <input
                      className="tc-input"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nama lengkap Anda"
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div>
                    <label className="tc-label" style={labelStyle}>
                      Asal Sekolah / Instansi
                    </label>
                    <input
                      className="tc-input"
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Nama sekolah / instansi"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label className="tc-label" style={labelStyle}>
                    Email <span style={{ color: "#F5A623" }}>*</span>
                  </label>
                  <input
                    className="tc-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@domain.com"
                    style={inputStyle}
                    required
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label className="tc-label" style={labelStyle}>
                    Program Pelatihan yang Diminati
                  </label>
                  <select
                    className="tc-input"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      color: form.service ? "#fff" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    <option value="" style={{ background: "#001F5B" }}>
                      Pilih program pelatihan...
                    </option>
                    {trainingServiceOptions.map((s) => (
                      <option key={s} value={s} style={{ background: "#001F5B" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label className="tc-label" style={labelStyle}>
                    Pesan / Pertanyaan <span style={{ color: "#F5A623" }}>*</span>
                  </label>
                  <textarea
                    className="tc-input"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tuliskan pertanyaan atau informasi pendaftaran yang ingin Anda ketahui..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    required
                  />
                </div>

                <button
                  className="tc-btn"
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    background: loading
                      ? "#64748B"
                      : "linear-gradient(135deg, #F5A623 0%, #e8941f 100%)",
                    color: "#001F5B",
                    fontWeight: 700,
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
                  {loading ? "Mengirim..." : "Kirim Formulir Pendaftaran"}
                </button>

                {errorMsg && (
                  <p style={{ color: "#F87171", fontSize: "0.82rem", textAlign: "center", marginTop: 10 }}>
                    ⚠ {errorMsg}
                  </p>
                )}

                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", textAlign: "center", marginTop: 12 }}>
                  * Tim Pendaftaran kami akan merespons dalam 1x24 jam kerja
                </p>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <i className="fas fa-circle-check" style={{ fontSize: "3rem", color: "#F5A623", marginBottom: 16, display: "block" }} />
                <h4 style={{ color: "#fff", fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, fontFamily: "var(--font-poppins)" }}>
                  Formulir Terkirim!
                </h4>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 24 }}>
                  Terima kasih telah mendaftar / menghubungi MAP Training Center. Tim pendaftaran kami akan segera menghubungi Anda.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", company: "", email: "", service: "", message: "" });
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
