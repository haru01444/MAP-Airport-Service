"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=85",
    alt: "Aircraft Maintenance Training",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=85",
    alt: "GSE Operations Training",
  },
  {
    src: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=800&q=85",
    alt: "Aviation Security Training",
  },
  {
    src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=800&q=85",
    alt: "Cabin Crew Training",
  }
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="hero-image-hover"
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.2)",
        transform: "rotate(-2deg)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {images.map((img, index) => (
        <div
          key={img.src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: index === currentIndex ? 1 : 0,
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(1,13,46,0.95) 0%, rgba(1,13,46,0.2) 60%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* Content Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 32,
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(245,166,35,0.9)",
            color: "#001F5B",
            padding: "4px 12px",
            borderRadius: 6,
            fontSize: "0.75rem",
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          Angkatan 2026
        </div>
        <h3
          style={{
            color: "#fff",
            fontFamily: "var(--font-poppins)",
            fontSize: "1.3rem",
            fontWeight: 700,
            marginBottom: 8,
            lineHeight: 1.3,
          }}
        >
          Masa Depan Karir Aviasi Dimulai di Sini
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.85rem",
            lineHeight: 1.5,
            marginBottom: 16,
          }}
        >
          Praktek langsung bersama ahlinya.
        </p>

        {/* Indicators */}
        <div style={{ display: "flex", gap: 8 }}>
          {images.map((_, idx) => (
            <div
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              style={{
                width: idx === currentIndex ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: idx === currentIndex ? "#F5A623" : "rgba(255,255,255,0.3)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
