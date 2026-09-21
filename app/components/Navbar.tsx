"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "Tentang Kami" },
  { href: "#services", label: "Layanan" },
  { href: "#map", label: "Peta Layanan" },
  { href: "#milestone", label: "Milestone" },
  { href: "#clients", label: "Klien" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    handleNavClick();
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.35s ease",
        background: scrolled ? "rgba(1,13,46,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        padding: scrolled ? "12px 0" : "20px 0",
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
        }}
      >
        {/* Logo */}
        <a href="#hero" onClick={(e) => scrollTo(e, "#hero")}>
          <Image
            src="/LOGO MAP NO BACKGROUND.png"
            alt="Logo Mawaddah Angkasa Prima"
            width={140}
            height={48}
            style={{ height: 48, width: "auto", objectFit: "contain" }}
          />
        </a>

                <style dangerouslySetInnerHTML={{ __html: [
          ".mobile-hamburger {",
          "            display: none !important;",
          "          }",
          "          @media (max-width: 768px) {",
          "            .desktop-nav {",
          "              display: none !important;",
          "            }",
          "            .mobile-hamburger {",
          "              display: flex !important;",
          "            }",
          "            .mobile-nav-link {",
          "              font-size: 14.5px !important;",
          "              font-weight: 500 !important;",
          "            }",
          "            .mobile-nav-btn {",
          "              font-size: 13px !important;",
          "              font-weight: 600 !important;",
          "            }",
          "          }"
        ].join('\n') }} />

        {/* Desktop Nav */}
        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            listStyle: "none",
            gap: 8,
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                style={{
                  color: activeSection === item.href.slice(1) ? "#4A9EF5" : "#fff",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  padding: "8px 16px",
                  borderRadius: 8,
                  transition: "all 0.2s",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              style={{
                background: "linear-gradient(135deg, #1967D2, #4A9EF5)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "10px 22px",
                borderRadius: 8,
                transition: "all 0.2s",
              }}
            >
              Kontak
            </a>
          </li>
          <li>
            <Link
              href="/training"
              style={{
                color: "#F5A623",
                fontWeight: 600,
                fontSize: "0.85rem",
                padding: "8px 16px",
                border: "1px solid rgba(245,166,35,0.4)",
                borderRadius: 8,
                transition: "all 0.2s",
              }}
            >
              Training Center
            </Link>
          </li>
        </ul>

                {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="mobile-hamburger"
          aria-label="Toggle Menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            padding: 4,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "#fff",
                borderRadius: 2,
                transition: "all 0.3s",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : menuOpen && i === 1
                    ? "opacity: 0"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(1,13,46,0.98)",
            padding: "20px 24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
          className="md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="mobile-nav-link"
              style={{
                color: "#fff",
                fontWeight: 500,
                fontSize: "1rem",
                padding: "12px 16px",
                borderRadius: 8,
                display: "block",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="mobile-nav-btn"
            style={{
              background: "linear-gradient(135deg, #1967D2, #4A9EF5)",
              color: "#fff",
              fontWeight: 600,
              padding: "12px 16px",
              borderRadius: 8,
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Kontak
          </a>
          <Link
            href="/training"
            onClick={handleNavClick}
            className="mobile-nav-btn"
            style={{
              color: "#F5A623",
              fontWeight: 600,
              padding: "12px 16px",
              border: "1px solid rgba(245,166,35,0.4)",
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            Training Center
          </Link>
        </div>
      )}
    </nav>
  );
}




