"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#programs", label: "Program" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#sertifikat", label: "Sertifikat" },
  { href: "#contact-training", label: "Kontak" },
];

export default function TrainingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .tc-nav-link {
          color: #475569;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          padding: 6px 0;
          position: relative;
          transition: color 0.2s;
        }
        .tc-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #F97316;
          border-radius: 2px;
          transition: width 0.25s;
        }
        .tc-nav-link:hover {
          color: #0F172A;
        }
        .tc-nav-link:hover::after {
          width: 100%;
        }
        .tc-cta-btn {
          background: #F97316;
          color: #fff;
          font-weight: 700;
          font-size: 0.88rem;
          padding: 10px 22px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .tc-cta-btn:hover {
          background: #ea6c00;
          box-shadow: 0 6px 16px rgba(249,115,22,0.3);
        }
        .tc-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          background: none;
          border: none;
        }
        .tc-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #0F172A;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .tc-desktop-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .tc-back-link {
          font-size: 0.8rem;
          color: #94A3B8;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }
        .tc-back-link:hover {
          color: #64748B;
        }
        @media (max-width: 768px) {
          .tc-hamburger { display: flex !important; }
          .tc-desktop-links { display: none !important; }
          .tc-back-link { display: none !important; }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled || menuOpen ? "#fff" : "rgba(255,255,255,0.97)",
          borderBottom: "1px solid #E2E8F0",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Brand */}
          <Link href="/training" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image
              src="/LOGO MAP NO BACKGROUND.png"
              alt="MAP Training Center"
              width={36}
              height={36}
              style={{ height: 36, width: "auto", objectFit: "contain" }}
            />
            <div style={{ lineHeight: 1.1 }}>
              <span style={{ display: "block", fontWeight: 800, fontSize: "0.92rem", color: "#0F172A", letterSpacing: "-0.01em" }}>
                MAP Training
              </span>
              <span style={{ display: "block", fontWeight: 500, fontSize: "0.72rem", color: "#F97316", letterSpacing: "0.04em" }}>
                CENTER
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="tc-desktop-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="tc-nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: back link + CTA */}
          <div className="tc-desktop-links" style={{ gap: 20 }}>
            <a href="/" className="tc-back-link">
              <i className="fas fa-arrow-left" style={{ fontSize: "0.7rem" }} />
              MAP Airport Service
            </a>
            <a href="#contact-training" className="tc-cta-btn">
              Daftar Sekarang
              <i className="fas fa-arrow-right" style={{ fontSize: "0.75rem" }} />
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="tc-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid #E2E8F0",
              background: "#fff",
              padding: "16px 24px 24px",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "#334155",
                    fontSize: "1rem",
                    fontWeight: 500,
                    padding: "12px 0",
                    borderBottom: "1px solid #F1F5F9",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="#contact-training"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "#F97316",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "13px 24px",
                  borderRadius: 8,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                }}
              >
                Daftar Sekarang <i className="fas fa-arrow-right" />
              </a>
              <a
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  border: "1px solid #E2E8F0",
                  color: "#64748B",
                  fontWeight: 500,
                  padding: "12px 24px",
                  borderRadius: 8,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                }}
              >
                <i className="fas fa-arrow-left" /> MAP Airport Service
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
