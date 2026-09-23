"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
}

interface BusinessUnit {
  title: string;
  desc: string;
  href: string;
  icon: string;
}

interface PageNavConfig {
  navItems: NavItem[];
  businessUnits: BusinessUnit[];
  cta: {
    href: string;
    label: string;
    gradient: string;
    textColor?: string;
  };
}

const navConfigs: Record<string, PageNavConfig> = {
  "/": {
    navItems: [
      { href: "#about", label: "Tentang Kami" },
      { href: "#services", label: "Layanan" },
      { href: "#map", label: "Peta Layanan" },
      { href: "#milestone", label: "Milestone" },
      { href: "#clients", label: "Klien" },
    ],
    businessUnits: [
      {
        title: "Airport Advertising",
        desc: "Media & Promosi Bandara",
        href: "/advertising",
        icon: "fa-bullhorn",
      },
      {
        title: "MAP Training Center",
        desc: "Pusat Pelatihan & Sertifikasi Aviasi",
        href: "/training",
        icon: "fa-graduation-cap",
      },
    ],
    cta: {
      href: "#contact",
      label: "Kontak",
      gradient: "linear-gradient(135deg, #1967D2, #4A9EF5)",
      textColor: "#fff",
    },
  },
  "/advertising": {
    navItems: [
      { href: "#about-shuttle", label: "Tentang Shuttle" },
      { href: "#fleet", label: "Armada" },
      { href: "#media-options", label: "Pilihan Media" },
      { href: "#rates", label: "Tarif & Paket" },
      { href: "#ideal-for", label: "Target Industri" },
    ],
    businessUnits: [
      {
        title: "Layanan Ground Handling",
        desc: "Layanan Operasional Aviasi MAP",
        href: "/",
        icon: "fa-plane-arrival",
      },
      {
        title: "MAP Training Center",
        desc: "Pusat Pelatihan & Sertifikasi Aviasi",
        href: "/training",
        icon: "fa-graduation-cap",
      },
    ],
    cta: {
      href: "#contact-section",
      label: "Hubungi Sales",
      gradient: "linear-gradient(135deg, #1967D2, #4A9EF5)",
      textColor: "#fff",
    },
  },
  "/training": {
    navItems: [
      { href: "#about", label: "Tentang Kami" },
      { href: "#programs", label: "Program Pelatihan" },
      { href: "#fasilitas", label: "Fasilitas" },
      { href: "#sertifikat", label: "Sertifikasi" },
    ],
    businessUnits: [
      {
        title: "Layanan Ground Handling",
        desc: "Layanan Operasional Aviasi MAP",
        href: "/",
        icon: "fa-plane-arrival",
      },
      {
        title: "Airport Advertising",
        desc: "Media & Promosi Bandara",
        href: "/advertising",
        icon: "fa-bullhorn",
      },
    ],
    cta: {
      href: "#contact-training",
      label: "Pendaftaran",
      gradient: "linear-gradient(135deg, #F5A623, #e8941f)",
      textColor: "#001F5B",
    },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const currentConfig = navConfigs[pathname] || navConfigs["/"];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px 0px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

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

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = (target as HTMLElement).offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
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
        backdropFilter: scrolled ? "blur(14px)" : "none",
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
        <Link href="/" onClick={() => handleNavClick()}>
          <Image
            src="/LOGO MAP NO BACKGROUND.png"
            alt="Logo Mawaddah Angkasa Prima"
            width={140}
            height={48}
            style={{ height: 44, width: "auto", objectFit: "contain" }}
          />
        </Link>

        <style dangerouslySetInnerHTML={{
          __html: [
            ".mobile-hamburger { display: none !important; }",
            ".desktop-dropdown-item:hover { background: rgba(74, 158, 245, 0.15) !important; }",
            ".desktop-nav-link:hover { color: #4A9EF5 !important; }",
            "@keyframes navDropdownFade {",
            "  from { opacity: 0; transform: translateY(6px); }",
            "  to { opacity: 1; transform: translateY(0); }",
            "}",
            "@media (max-width: 768px) {",
            "  .desktop-nav { display: none !important; }",
            "  .mobile-hamburger { display: flex !important; }",
            "  .mobile-nav-link { font-size: 14.5px !important; font-weight: 500 !important; }",
            "  .mobile-nav-btn { font-size: 13px !important; font-weight: 600 !important; }",
            "}"
          ].join('\n')
        }} />

        {/* Desktop Nav */}
        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            listStyle: "none",
            gap: 6,
            alignItems: "center",
          }}
        >
          {currentConfig.navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className="desktop-nav-link"
                style={{
                  color: activeSection === item.href.slice(1) ? "#4A9EF5" : "#fff",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  padding: "8px 14px",
                  borderRadius: 6,
                  transition: "all 0.2s",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Unit Bisnis Dropdown (Desktop Only) */}
          <li
            ref={dropdownRef}
            style={{ position: "relative" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setDropdownOpen((prev) => !prev);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: dropdownOpen ? "#4A9EF5" : "#fff",
                background: dropdownOpen ? "rgba(255,255,255,0.06)" : "transparent",
                border: "none",
                fontWeight: 500,
                fontSize: "0.9rem",
                padding: "8px 14px",
                borderRadius: 6,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <span>Unit Bisnis</span>
              <i
                className="fas fa-chevron-down"
                style={{
                  fontSize: "0.7rem",
                  transition: "transform 0.25s ease",
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {/* Dropdown Menu Wrapper with Bridge */}
            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  paddingTop: 8,
                  zIndex: 1010,
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  style={{
                    minWidth: 275,
                    background: "rgba(1, 13, 46, 0.96)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: 8,
                    padding: "6px",
                    boxShadow: "0 18px 40px rgba(0, 0, 0, 0.45)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    animation: "navDropdownFade 0.2s ease forwards",
                  }}
                >
                  {currentConfig.businessUnits.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="desktop-dropdown-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 12px",
                        borderRadius: 6,
                        textDecoration: "none",
                        transition: "all 0.2s",
                        color: "#fff",
                      }}
                    >
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 6,
                          background: "rgba(74, 158, 245, 0.14)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#4A9EF5",
                          fontSize: "0.9rem",
                          flexShrink: 0,
                        }}
                      >
                        <i className={"fas " + item.icon} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#fff", lineHeight: 1.2 }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", marginTop: 2 }}>
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* CTA Action Button */}
          <li>
            <a
              href={currentConfig.cta.href}
              onClick={(e) => scrollTo(e, currentConfig.cta.href)}
              style={{
                background: currentConfig.cta.gradient,
                color: currentConfig.cta.textColor || "#fff",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "10px 22px",
                borderRadius: 6,
                transition: "all 0.2s",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              {currentConfig.cta.label}
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
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
            maxHeight: "calc(100vh - 80px)",
            overflowY: "auto",
          }}
          className="md:hidden"
        >
          {/* Main Navigation Links for Current Page */}
          {currentConfig.navItems.map((item) => (
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
                borderRadius: 6,
                display: "block",
              }}
            >
              {item.label}
            </a>
          ))}

          {/* Business Unit Items Directly Listed on Mobile */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "4px 0", paddingTop: 4, display: "flex", flexDirection: "column", gap: 8 }}>
            {currentConfig.businessUnits.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="mobile-nav-link"
                style={{
                  color: "#4A9EF5",
                  fontWeight: 500,
                  fontSize: "1rem",
                  padding: "12px 16px",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <i className={"fas " + item.icon} style={{ fontSize: "0.9rem" }} />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          {/* CTA Mobile Button */}
          <a
            href={currentConfig.cta.href}
            onClick={(e) => scrollTo(e, currentConfig.cta.href)}
            className="mobile-nav-btn"
            style={{
              background: currentConfig.cta.gradient,
              color: currentConfig.cta.textColor || "#fff",
              fontWeight: 700,
              padding: "12px 16px",
              borderRadius: 6,
              textAlign: "center",
              marginTop: 10,
              display: "block",
              textDecoration: "none",
            }}
          >
            {currentConfig.cta.label}
          </a>
        </div>
      )}
    </nav>
  );
}
