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
  hasAboutDropdown?: boolean;
  aboutTitle?: string;
  aboutHref?: string;
  aboutMenuItems?: DropdownItem[];
  hasServicesDropdown?: boolean;
  hasProgramsDropdown?: boolean;
  hasFacilitiesDropdown?: boolean;
  cta: {
    href: string;
    label: string;
    gradient: string;
    textColor?: string;
  };
}

// --- Main Airport Services Dropdowns ---
const mainAboutMenuItems: DropdownItem[] = [
  { title: "Tentang Perusahaan", href: "/about#about-company" },
  { title: "Perjalanan Kami", href: "/about#milestone" },
  { title: "Klien & Layanan", href: "/about#clients-portfolio" },
];

const mainServicesMenuItems: DropdownItem[] = [
  { title: "Ground Handling", href: "/services#ground-handling" },
  { title: "Passenger & Ancillary", href: "/services#passenger-services" },
  { title: "Ramp Side Service", href: "/services#ramp-services" },
  { title: "Aircraft & Cabin Cleaning", href: "/services#cabin-cleaning" },
  { title: "Equipment Rental (GSE)", href: "/services#equipment-rental" },
  { title: "Outsourcing Staff", href: "/services#outsourcing-staff" },
  { title: "Airport Shuttle Advertising", href: "/advertising" },
  { title: "MAP Training Center", href: "/training" },
];

// --- MAP Training Center Dropdowns ---
const trainingAboutMenuItems: DropdownItem[] = [
  { title: "Profil MAP Training Center", href: "/training/about" },
  { title: "Lisensi & Sertifikasi Hubud", href: "/training#sertifikat" },
  { title: "Keunggulan Diklat", href: "/training#programs" },
];

const trainingProgramsMenuItems: DropdownItem[] = [
  { title: "Aircraft Maintenance (AMC)", href: "/training/programs/aircraft" },
  { title: "Ground Support Equipment (GSE)", href: "/training/programs/gse" },
  { title: "Aviation Security (AVSEC)", href: "/training/programs/avsec" },
  { title: "Pramugari & Pramugara", href: "/training/programs/pramugari" },
  { title: "Semua Program Pelatihan", href: "/training/programs" },
];

const trainingFacilitiesMenuItems: DropdownItem[] = [
  { title: "Perpustakaan & Ruang Baca", href: "/training/facilities#perpustakaan" },
  { title: "Ruang Kelas Multimedia", href: "/training/facilities#ruang-kelas" },
  { title: "Ruang Kantor Administrasi", href: "/training/facilities#ruang-kantor-1" },
  { title: "Lounge & Rapat Instruktur", href: "/training/facilities#ruang-kantor-2" },
  { title: "Asrama Peserta (Dormitory)", href: "/training/facilities#asrama" },
  { title: "Mushola Kampus", href: "/training/facilities#mushola" },
  { title: "Lihat Semua Fasilitas", href: "/training/facilities" },
];

// --- Navigation Configurations ---
const homeNavConfig: PageNavConfig = {
  hasAboutDropdown: true,
  aboutTitle: "Tentang Kami",
  aboutHref: "/about",
  aboutMenuItems: mainAboutMenuItems,
  hasServicesDropdown: true,
  navItems: [
    { href: "/news", label: "Berita" },
    { href: "/training", label: "Karir" },
  ],
  cta: {
    href: "/#contact",
    label: "Kontak",
    gradient: "linear-gradient(135deg, #1967D2, #4A9EF5)",
    textColor: "#fff",
  },
};

const trainingNavConfig: PageNavConfig = {
  hasAboutDropdown: true,
  aboutTitle: "Tentang Kami",
  aboutHref: "/training/about",
  aboutMenuItems: trainingAboutMenuItems,
  hasProgramsDropdown: true,
  hasFacilitiesDropdown: true,
  navItems: [
    { href: "/training", label: "Beranda" },
  ],
  cta: {
    href: "/training#contact-training",
    label: "Pendaftaran",
    gradient: "linear-gradient(135deg, #F5A623, #e8941f)",
    textColor: "#001F5B",
  },
};

const navConfigs: Record<string, PageNavConfig> = {
  "/": homeNavConfig,
  "/about": homeNavConfig,
  "/services": homeNavConfig,
  "/news": homeNavConfig,
  "/advertising": {
    hasAboutDropdown: true,
    aboutTitle: "Tentang Kami",
    aboutHref: "/about",
    aboutMenuItems: mainAboutMenuItems,
    hasServicesDropdown: false,
    navItems: [
      { href: "#about-shuttle", label: "Tentang Shuttle" },
      { href: "#fleet", label: "Armada" },
      { href: "#media-options", label: "Pilihan Media" },
      { href: "#rates", label: "Tarif & Paket" },
      { href: "#ideal-for", label: "Target Industri" },
      { href: "/news", label: "Berita" },
      { href: "/training", label: "Karir" },
    ],
    cta: {
      href: "#contact-section",
      label: "Hubungi Sales",
      gradient: "linear-gradient(135deg, #1967D2, #4A9EF5)",
      textColor: "#fff",
    },
  },
  "/training": trainingNavConfig,
  "/training/about": trainingNavConfig,
  "/training/programs": trainingNavConfig,
  "/training/program": trainingNavConfig,
  "/training/facilities": trainingNavConfig,
  "/training/fasilitas": trainingNavConfig,
};

export default function Navbar() {
  const pathname = usePathname();
  const [isTrainingSubdomain, setIsTrainingSubdomain] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const host = window.location.hostname;
      if (host.startsWith("trainingcenter.") || host.startsWith("training.")) {
        setIsTrainingSubdomain(true);
      }
    }
  }, []);

  const isTrainingPage = pathname.startsWith("/training") || isTrainingSubdomain;
  const currentConfig = navConfigs[pathname] || (isTrainingPage ? trainingNavConfig : homeNavConfig);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [facilitiesDropdownOpen, setFacilitiesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const aboutDropdownRef = useRef<HTMLLIElement>(null);
  const servicesDropdownRef = useRef<HTMLLIElement>(null);
  const programsDropdownRef = useRef<HTMLLIElement>(null);
  const facilitiesDropdownRef = useRef<HTMLLIElement>(null);

  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const programsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const facilitiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (programsDropdownRef.current && !programsDropdownRef.current.contains(event.target as Node)) {
        setProgramsDropdownOpen(false);
      }
      if (facilitiesDropdownRef.current && !facilitiesDropdownRef.current.contains(event.target as Node)) {
        setFacilitiesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutDropdownOpen(true);
  };
  const handleAboutMouseLeave = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    aboutTimeoutRef.current = setTimeout(() => setAboutDropdownOpen(false), 200);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };
  const handleServicesMouseLeave = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    servicesTimeoutRef.current = setTimeout(() => setServicesDropdownOpen(false), 200);
  };

  const handleProgramsMouseEnter = () => {
    if (programsTimeoutRef.current) clearTimeout(programsTimeoutRef.current);
    setProgramsDropdownOpen(true);
  };
  const handleProgramsMouseLeave = () => {
    if (programsTimeoutRef.current) clearTimeout(programsTimeoutRef.current);
    programsTimeoutRef.current = setTimeout(() => setProgramsDropdownOpen(false), 200);
  };

  const handleFacilitiesMouseEnter = () => {
    if (facilitiesTimeoutRef.current) clearTimeout(facilitiesTimeoutRef.current);
    setFacilitiesDropdownOpen(true);
  };
  const handleFacilitiesMouseLeave = () => {
    if (facilitiesTimeoutRef.current) clearTimeout(facilitiesTimeoutRef.current);
    facilitiesTimeoutRef.current = setTimeout(() => setFacilitiesDropdownOpen(false), 200);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
    setProgramsDropdownOpen(false);
    setFacilitiesDropdownOpen(false);
  };

  const handleMainPageClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleNavClick();
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    let targetHash = "";
    if (href.startsWith("#")) {
      targetHash = href;
    } else if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (path === pathname || (path === "" && pathname === "/")) {
        targetHash = `#${hash}`;
      }
    }

    if (targetHash) {
      const target = document.querySelector(targetHash);
      if (target) {
        e.preventDefault();
        const offsetTop = (target as HTMLElement).offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
    handleNavClick();
  };

  const logoHref = isTrainingSubdomain ? "/" : (isTrainingPage ? "/training" : "/");
  const aboutMenuItemsToUse = currentConfig.aboutMenuItems || mainAboutMenuItems;
  const aboutTitleToUse = currentConfig.aboutTitle || "Tentang Kami";
  const aboutHrefToUse = currentConfig.aboutHref || "/about";
  const activeAccentColor = isTrainingPage ? "#F5A623" : "#4A9EF5";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.35s ease",
        background: scrolled ? "rgba(1, 13, 46, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: scrolled ? "0 8px 30px rgba(0, 0, 0, 0.35)" : "none",
        padding: scrolled ? "12px 0" : "18px 0",
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
        <Link href={logoHref} onClick={() => handleNavClick()}>
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
            ".desktop-dropdown-item { color: rgba(255, 255, 255, 0.9) !important; }",
            `.desktop-dropdown-item:hover { background: rgba(255, 255, 255, 0.12) !important; color: ${activeAccentColor} !important; }`,
            `.desktop-nav-link:hover { color: ${activeAccentColor} !important; }`,
            `.mobile-nav-link:hover { color: ${activeAccentColor} !important; }`,
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

        {/* Desktop Nav: Order is 1. Tentang Kami, 2. Layanan / Program / Fasilitas, 3. Berita & Karir / NavItems, 4. CTA */}
        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            listStyle: "none",
            gap: 6,
            alignItems: "center",
          }}
        >
          {/* 1. Tentang Kami Dropdown */}
          {currentConfig.hasAboutDropdown !== false && (
            <li
              ref={aboutDropdownRef}
              style={{ position: "relative" }}
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <Link
                href={aboutHrefToUse}
                onClick={(e) => handleMainPageClick(e, aboutHrefToUse)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: aboutDropdownOpen || pathname === aboutHrefToUse ? activeAccentColor : "#FFFFFF",
                  background: aboutDropdownOpen ? "rgba(255, 255, 255, 0.1)" : "transparent",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  padding: "8px 14px",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
              >
                <span>{aboutTitleToUse}</span>
                <i
                  className="fas fa-chevron-down"
                  style={{
                    fontSize: "0.7rem",
                    transition: "transform 0.25s ease",
                    transform: aboutDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </Link>

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
                      minWidth: 220,
                      background: "rgba(1, 13, 46, 0.96)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 8,
                      padding: "6px",
                      boxShadow: "0 14px 36px rgba(0, 0, 0, 0.4)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      animation: "navDropdownFade 0.2s ease forwards",
                    }}
                  >
                    {aboutMenuItemsToUse.map((item) => (
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
          )}

          {/* 2. Layanan Dropdown (Airport Services) */}
          {currentConfig.hasServicesDropdown ? (
            <li
              ref={servicesDropdownRef}
              style={{ position: "relative" }}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <Link
                href="/services"
                onClick={(e) => handleMainPageClick(e, "/services")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: servicesDropdownOpen || pathname === "/services" ? activeAccentColor : "#FFFFFF",
                  background: servicesDropdownOpen ? "rgba(255, 255, 255, 0.1)" : "transparent",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  padding: "8px 14px",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textDecoration: "none",
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
              </Link>

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
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 8,
                      padding: "6px",
                      boxShadow: "0 14px 36px rgba(0, 0, 0, 0.4)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      animation: "navDropdownFade 0.2s ease forwards",
                    }}
                  >
                    {mainServicesMenuItems.map((item) => (
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

          {/* 3. Program Pelatihan Dropdown (MAP Training Center) */}
          {currentConfig.hasProgramsDropdown ? (
            <li
              ref={programsDropdownRef}
              style={{ position: "relative" }}
              onMouseEnter={handleProgramsMouseEnter}
              onMouseLeave={handleProgramsMouseLeave}
            >
              <Link
                href="/training/programs"
                onClick={(e) => handleMainPageClick(e, "/training/programs")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: programsDropdownOpen || pathname.startsWith("/training/programs") ? activeAccentColor : "#FFFFFF",
                  background: programsDropdownOpen ? "rgba(255, 255, 255, 0.1)" : "transparent",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  padding: "8px 14px",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
              >
                <span>Program Pelatihan</span>
                <i
                  className="fas fa-chevron-down"
                  style={{
                    fontSize: "0.7rem",
                    transition: "transform 0.25s ease",
                    transform: programsDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </Link>

              {programsDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    paddingTop: 8,
                    zIndex: 1010,
                  }}
                  onMouseEnter={handleProgramsMouseEnter}
                  onMouseLeave={handleProgramsMouseLeave}
                >
                  <div
                    style={{
                      minWidth: 240,
                      background: "rgba(1, 13, 46, 0.96)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 8,
                      padding: "6px",
                      boxShadow: "0 14px 36px rgba(0, 0, 0, 0.4)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      animation: "navDropdownFade 0.2s ease forwards",
                    }}
                  >
                    {trainingProgramsMenuItems.map((item) => (
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

          {/* 4. Fasilitas Dropdown (MAP Training Center) */}
          {currentConfig.hasFacilitiesDropdown ? (
            <li
              ref={facilitiesDropdownRef}
              style={{ position: "relative" }}
              onMouseEnter={handleFacilitiesMouseEnter}
              onMouseLeave={handleFacilitiesMouseLeave}
            >
              <Link
                href="/training/facilities"
                onClick={(e) => handleMainPageClick(e, "/training/facilities")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: facilitiesDropdownOpen || pathname.startsWith("/training/facilities") ? activeAccentColor : "#FFFFFF",
                  background: facilitiesDropdownOpen ? "rgba(255, 255, 255, 0.1)" : "transparent",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  padding: "8px 14px",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
              >
                <span>Fasilitas</span>
                <i
                  className="fas fa-chevron-down"
                  style={{
                    fontSize: "0.7rem",
                    transition: "transform 0.25s ease",
                    transform: facilitiesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </Link>

              {facilitiesDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    paddingTop: 8,
                    zIndex: 1010,
                  }}
                  onMouseEnter={handleFacilitiesMouseEnter}
                  onMouseLeave={handleFacilitiesMouseLeave}
                >
                  <div
                    style={{
                      minWidth: 230,
                      background: "rgba(1, 13, 46, 0.96)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 8,
                      padding: "6px",
                      boxShadow: "0 14px 36px rgba(0, 0, 0, 0.4)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      animation: "navDropdownFade 0.2s ease forwards",
                    }}
                  >
                    {trainingFacilitiesMenuItems.map((item) => (
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

          {/* 5. Nav Items (Berita, Karir, Beranda, etc.) */}
          {currentConfig.navItems.map((item) => (
            <li key={item.href}>
              {item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  href={item.href}
                  onClick={() => handleNavClick()}
                  className="desktop-nav-link"
                  style={{
                    color: pathname === item.href ? activeAccentColor : "#FFFFFF",
                    fontWeight: 600,
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
                    color: (pathname === "/" && activeSection === item.href.replace(/^\/?#/, "")) || pathname === item.href ? activeAccentColor : "#FFFFFF",
                    fontWeight: 600,
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

          {/* 6. CTA Action Button */}
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
                background: "#FFFFFF",
                borderRadius: 2,
                transition: "all 0.3s",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
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
            background: "#010D2E",
            padding: "20px 24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            maxHeight: "calc(100vh - 80px)",
            overflowY: "auto",
            borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 16px 36px rgba(0, 0, 0, 0.4)",
          }}
          className="md:hidden"
        >
          {/* Mobile "Tentang Kami" Group */}
          {currentConfig.hasAboutDropdown !== false && (
            <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: 8, marginBottom: 4 }}>
              <Link
                href={aboutHrefToUse}
                onClick={(e) => handleMainPageClick(e, aboutHrefToUse)}
                style={{
                  color: activeAccentColor,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "6px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration: "none",
                }}
              >
                <span>{aboutTitleToUse}</span>
                <i className="fas fa-arrow-right" style={{ fontSize: "0.7rem", opacity: 0.8 }} />
              </Link>
              {aboutMenuItemsToUse.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="mobile-nav-link"
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    padding: "8px 16px 8px 24px",
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

          {/* Mobile "Layanan" Group (Airport Services) */}
          {currentConfig.hasServicesDropdown && (
            <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: 8, marginBottom: 4 }}>
              <Link
                href="/services"
                onClick={(e) => handleMainPageClick(e, "/services")}
                style={{
                  color: activeAccentColor,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "6px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration: "none",
                }}
              >
                <span>Layanan</span>
                <i className="fas fa-arrow-right" style={{ fontSize: "0.7rem", opacity: 0.8 }} />
              </Link>
              {mainServicesMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="mobile-nav-link"
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontWeight: 500,
                    fontSize: "0.92rem",
                    padding: "7px 16px 7px 24px",
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

          {/* Mobile "Program Pelatihan" Group (MAP Training Center) */}
          {currentConfig.hasProgramsDropdown && (
            <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: 8, marginBottom: 4 }}>
              <Link
                href="/training/programs"
                onClick={(e) => handleMainPageClick(e, "/training/programs")}
                style={{
                  color: activeAccentColor,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "6px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration: "none",
                }}
              >
                <span>Program Pelatihan</span>
                <i className="fas fa-arrow-right" style={{ fontSize: "0.7rem", opacity: 0.8 }} />
              </Link>
              {trainingProgramsMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="mobile-nav-link"
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontWeight: 500,
                    fontSize: "0.92rem",
                    padding: "7px 16px 7px 24px",
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

          {/* Mobile "Fasilitas" Group (MAP Training Center) */}
          {currentConfig.hasFacilitiesDropdown && (
            <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: 8, marginBottom: 4 }}>
              <Link
                href="/training/facilities"
                onClick={(e) => handleMainPageClick(e, "/training/facilities")}
                style={{
                  color: activeAccentColor,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "6px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration: "none",
                }}
              >
                <span>Fasilitas</span>
                <i className="fas fa-arrow-right" style={{ fontSize: "0.7rem", opacity: 0.8 }} />
              </Link>
              {trainingFacilitiesMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="mobile-nav-link"
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontWeight: 500,
                    fontSize: "0.92rem",
                    padding: "7px 16px 7px 24px",
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

          {/* Simple Navigation Links for Current Page */}
          {currentConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="mobile-nav-link"
              style={{
                color: (pathname === "/" && activeSection === item.href.replace(/^\/?#/, "")) || pathname === item.href ? activeAccentColor : "#FFFFFF",
                fontWeight: 600,
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
