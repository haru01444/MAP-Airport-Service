"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export interface HeroSlideImage {
  desktop: string;
  mobile: string;
  alt: string;
}

interface HeroBgSliderProps {
  images?: HeroSlideImage[];
  intervalMs?: number;
  overlayGradient?: string;
}

export const defaultHeroImages: HeroSlideImage[] = [
  {
    desktop: "/hero-1.png",
    mobile: "/hero-1-mob.png",
    alt: "Ground Handling Operations",
  },
  {
    desktop: "/hero-2.jpeg",
    mobile: "/hero-2-mob.jpeg",
    alt: "Aviation Apron & Ground Services",
  },
  {
    desktop: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=85",
    mobile: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1080&q=85",
    alt: "Aircraft Flight & Operations",
  },
  {
    desktop: "/about-map-operations-v2.jpeg",
    mobile: "/services-ramp-agent.jpg",
    alt: "MAP Ground Support Equipment & Crew",
  },
];

export default function HeroBgSlider({
  images = defaultHeroImages,
  intervalMs = 5000,
  overlayGradient = "linear-gradient(180deg, rgba(1, 13, 46, 0.82) 0%, rgba(13, 36, 97, 0.65) 50%, rgba(1, 13, 46, 0.90) 100%)",
}: HeroBgSliderProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images, intervalMs]);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      <style dangerouslySetInnerHTML={{
        __html: [
          ".bg-slide-desktop { display: block !important; width: 100% !important; height: 100% !important; }",
          ".bg-slide-mobile { display: none !important; width: 100% !important; height: 100% !important; }",
          "@media (max-width: 768px) {",
          "  .bg-slide-desktop { display: none !important; }",
          "  .bg-slide-mobile { display: block !important; }",
          "}"
        ].join('\n')
      }} />

      {images.map((img, idx) => {
        const isActive = idx === currentIdx;
        return (
          <div
            key={idx}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1.02)" : "scale(1.08)",
              transition: "opacity 1.4s ease-in-out, transform 6s cubic-bezier(0.25, 1, 0.5, 1)",
              zIndex: isActive ? 1 : 0,
            }}
          >
            {/* Desktop Image */}
            <div className="bg-slide-desktop" style={{ position: "absolute", inset: 0 }}>
              <Image
                src={img.desktop}
                alt={img.alt}
                fill
                priority={idx === 0}
                style={{ objectFit: "cover", objectPosition: "center center" }}
                sizes="100vw"
              />
            </div>

            {/* Mobile Image */}
            <div className="bg-slide-mobile" style={{ position: "absolute", inset: 0 }}>
              <Image
                src={img.mobile}
                alt={img.alt + " Mobile"}
                fill
                priority={idx === 0}
                style={{ objectFit: "cover", objectPosition: "center center" }}
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* Dark Overlay Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: overlayGradient,
          zIndex: 2,
        }}
      />
    </div>
  );
}
