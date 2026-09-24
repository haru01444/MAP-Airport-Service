"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
}

interface DropdownItem {
  title: string;
  href: string;
}

interface PageNavConfig {
  navItems: NavItem[];
  businessUnits: DropdownItem[];
  hasServicesDropdown?: boolean;
  cta: {
    href: string;
    label: string;
    gradient: string;
    textColor?: string;
  };
}

const aboutMenuItems: DropdownItem[] = [
  { title: "Tentang Perusahaan", href: "/about#about-company" },
  { title: "Perjalanan Kami", href: "/about#milestone" },
];

const servicesMenuItems: DropdownItem[] = [
  { title: "Ground Handling", href: "/services#ground-handling" },
  { title: "Passenger & Ancillary", href: "/services#passenger-services" },
  { title: "Ramp Side Service", href: "/services#ramp-services" },
  { title: "Aircraft & Cabin Cleaning", href: "/services#cabin-cleaning" },
  { title: "Equipment Rental (GSE)", href: "/services#equipment-rental" },
  { title: "Outsourcing Staff", href: "/services#outsourcing-staff" },
  { title: "MAP Training Center", href: "/training" },
  { title: "Airport Shuttle Advertising", href: "/advertising" },
];

const homeNavConfig: PageNavConfig = {
  hasServicesDropdown: true,
  navItems: [
    { href: "/#map", label: "Peta Layanan" },
    { href: "/#clients", label: "Klien" },
  ],
  businessUnits: [
    { title: "Airport Advertising", href: "/advertising" },
    { title: "MAP Training Center", href: "/training" },
  ],
  cta: {
    href: "/#contact",
    label: "Kontak",
    gradient: "linear-gradient(135deg, #1967D2, #4A9EF5)",
    textColor: "#fff",
  },
};

const navConfigs: Record<string, PageNavConfig> = {
  "/": homeNavConfig,
  "/about": homeNavConfig,
  "/services": homeNavConfig,
  "/advertising": {
    hasServicesDropdown: false,
    navItems: [
      { href: "#about-shuttle", label: "Tentang Shuttle" },
      { href: "#fleet", label: "Armada" },
      { href: "#media-options", label: "Pilihan Media" },
      { href: "#rates", label: "Tarif & Paket" },
      { href: "#ideal-for", label: "Target Industri" },
    ],
    businessUnits: [
      { title: "Layanan Ground Handling", href: "/services" },
      { title: "MAP Training Center", href: "/training" },
    ],
    cta: {
      href: "#contact-section",
      label: "Hubungi Sales",
      gradient: "linear-gradient(135deg, #1967D2, #4A9EF5)",
      textColor: "#fff",
    },
  },
  "/training": {
    hasServicesDropdown: false,
    navItems: [
      { href: "#programs", label: "Program Pelatihan" },
      { href: "#fasilitas", label: "Fasilitas" },
      { href: "#sertifikat", label: "Sertifikasi" },
    ],
    businessUnits: [
      { title: "Layanan Ground Handling", href: "/services" },
      { title: "Airport Advertising", href: "/advertising" },
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
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const dropdownRef = useRef<HTMLLIElement>(null);
  const aboutDropdownRef = useRef<HTMLLIElement>(null);
  const servicesDropdownRef = useRef<HTMLLIElement>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Close desktop dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
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

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 200);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.startsWith("/#") ? href.slice(1) : href.startsWith("#") ? href : "";
    if (hash && pathname === "/") {
      e.preventDefault();
      const target = document.querySelector(hash);
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
            ".desktop-dropdown-item { color: #E2E8F0 !important; }",
            ".desktop-dropdown-item:hover { background: rgba(74, 158, 245, 0.15) !important; color: #4A9EF5 !important; }",
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
          {/* 1. Tentang Kami Dropdown (Desktop Only) */}
          <li
            ref={aboutDropdownRef}
            style={{ position: "relative" }}
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <button
              onClick={() => {
                if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
                setAboutDropdownOpen((prev) => !prev);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: aboutDropdownOpen || pathname === "/about" ? "#4A9EF5" : "#fff",
                background: aboutDropdownOpen ? "rgba(255,255,255,0.06)" : "transparent",
                border: "none",
                fontWeight: 500,
                fontSize: "0.9rem",
                padding: "8px 14px",
                borderRadius: 6,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <span>Tentang Kami</span>
              <i
                className="fas fa-chevron-down"
                style={{
                  fontSize: "0.7rem",
                  transition: "transform 0.25s ease",
                  transform: aboutDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {/* About Dropdown Menu */}
            {aboutDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  paddingTop: 8,
                  zIndex: 1010,
                }}
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <div
                  style={{
                    minWidth: 200,
                    background: "rgba(1, 13, 46, 0.96)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: 8,
                    padding: "6px",
                    boxShadow: "0 18px 40px rgba(0, 0, 0, 0.45)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    animation: "navDropdownFade 0.2s ease forwards",
                  }}
                >
                  {aboutMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => handleNavClick()}
                      className="desktop-dropdown-item"
                      style={{
                        display: "block",
                        padding: "9px 14px",
                        borderRadius: 6,
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "0.88rem",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* 2. Layanan Dropdown (Desktop Only) */}
          {currentConfig.hasServicesDropdown ? (
            <li
              ref={servicesDropdownRef}
              style={{ position: "relative" }}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                onClick={() => {
                  if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                  setServicesDropdownOpen((prev) => !prev);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: servicesDropdownOpen || pathname === "/services" ? "#4A9EF5" : "#fff",
                  background: servicesDropdownOpen ? "rgba(255,255,255,0.06)" : "transparent",
                  border: "none",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  padding: "8px 14px",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <span>Layanan</span>
                <i
                  className="fas fa-chevron-down"
                  style={{
                    fontSize: "0.7rem",
                    transition: "transform 0.25s ease",
                    transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {/* Services Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    paddingTop: 8,
                    zIndex: 1010,
                  }}
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <div
                    style={{
                      minWidth: 220,
                      background: "rgba(1, 13, 46, 0.96)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: 8,
                      padding: "6px",
                      boxShadow: "0 18px 40px rgba(0, 0, 0, 0.45)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      animation: "navDropdownFade 0.2s ease forwards",
                    }}
                  >
                    {servicesMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => handleNavClick()}
                        className="desktop-dropdown-item"
                        style={{
                          display: "block",
                          padding: "9px 14px",
                          borderRadius: 6,
                          textDecoration: "none",
                          fontWeight: 500,
                          fontSize: "0.88rem",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ) : null}

          {/* 3. Main Page Nav Items */}
          {currentConfig.navItems.map((item) => (
            <li key={item.href}>
              {item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  href={item.href}
                  onClick={() => handleNavClick()}
                  className="desktop-nav-link"
                  style={{
                    color: pathname === item.href ? "#4A9EF5" : "#fff",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    padding: "8px 14px",
                    borderRadius: 6,
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className="desktop-nav-link"
                  style={{
                    color: (pathname === "/" && activeSection === item.href.replace(/^\/?#/, "")) || pathname === item.href ? "#4A9EF5" : "#fff",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    padding: "8px 14px",
                    borderRadius: 6,
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          {/* 4. Unit Bisnis Dropdown (Desktop Only) */}
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

            {/* Dropdown Menu Wrapper */}
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
                    minWidth: 200,
                    background: "rgba(1, 13, 46, 0.96)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: 8,
                    padding: "6px",
                    boxShadow: "0 18px 40px rgba(0, 0, 0, 0.45)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    animation: "navDropdownFade 0.2s ease forwards",
                  }}
                >
                  {currentConfig.businessUnits.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className="desktop-dropdown-item"
                      style={{
                        display: "block",
                        padding: "9px 14px",
                        borderRadius: 6,
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "0.88rem",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* 5. CTA Action Button */}
          <li>
            <Link
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
            </Link>
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
          {/* Mobile "Tentang Kami" Group */}
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 8, marginBottom: 4 }}>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", padding: "4px 16px", display: "block" }}>
              Tentang Kami
            </span>
            {aboutMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="mobile-nav-link"
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  padding: "8px 16px",
                  borderRadius: 6,
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile "Layanan" Group */}
          {currentConfig.hasServicesDropdown && (
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 8, marginBottom: 4 }}>
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", padding: "4px 16px", display: "block" }}>
                Layanan
              </span>
              {servicesMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="mobile-nav-link"
                  style={{
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "0.92rem",
                    padding: "7px 16px",
                    borderRadius: 6,
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          {/* Main Navigation Links for Current Page */}
          {currentConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="mobile-nav-link"
              style={{
                color: (pathname === "/" && activeSection === item.href.replace(/^\/?#/, "")) || pathname === item.href ? "#4A9EF5" : "#fff",
                fontWeight: 500,
                fontSize: "1rem",
                padding: "10px 16px",
                borderRadius: 6,
                display: "block",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Business Unit Items Directly Listed on Mobile */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "4px 0", paddingTop: 4, display: "flex", flexDirection: "column", gap: 4 }}>
            {currentConfig.businessUnits.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="mobile-nav-link"
                style={{
                  color: "#4A9EF5",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  padding: "8px 16px",
                  borderRadius: 6,
                  display: "block",
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* CTA Mobile Button */}
          <Link
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
          </Link>
        </div>
      )}
    </nav>
  );
}
