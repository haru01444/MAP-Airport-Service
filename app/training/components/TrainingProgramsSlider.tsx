"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { trainingPrograms, TrainingProgramItem } from "../../data/trainingData";

export default function TrainingProgramsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync with URL hash if provided
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (hash) {
        const found = trainingPrograms.findIndex(
          (p) => p.id === hash || p.slug === hash || p.code.toLowerCase() === hash
        );
        if (found !== -1) {
          setActiveIndex(found);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? trainingPrograms.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === trainingPrograms.length - 1 ? 0 : prev + 1));
  };

  const currentProg = trainingPrograms[activeIndex];

  return (
    <div id="programs-slider-root" style={{ background: "#F8FAFC", position: "relative" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: [
            ".prog-slider-container { max-width: 1200px; margin: 0 auto; padding: 0 24px 80px; }",
            ".prog-tab-floating-card { transform: translateY(-36px); position: relative; z-index: 10; background: #FFFFFF; border-radius: 8px; padding: 16px; box-shadow: 0 10px 30px rgba(0, 31, 91, 0.06); border: 1px solid #E2E8F0; margin-bottom: 24px; }",
            ".prog-tab-fullwidth-container { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; width: 100%; }",
            ".prog-category-btn { width: 100%; display: flex; align-items: center; justify-content: center; text-align: center; padding: 14px 18px; border-radius: 6px; font-size: 0.9rem; font-weight: 600; transition: all 0.2s ease; cursor: pointer; border: 1px solid transparent; }",
            ".prog-category-btn.active { background: #001F5B; color: #FFFFFF; border-color: #001F5B; box-shadow: 0 4px 12px rgba(0, 31, 91, 0.18); font-weight: 700; }",
            ".prog-category-btn.inactive { background: #FFFFFF; color: #475569; border-color: #E2E8F0; }",
            ".prog-category-btn.inactive:hover { background: #F1F5F9; color: #001F5B; border-color: #CBD5E1; }",
            "",
            "/* Slider Main Card */",
            ".prog-slide-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 40px 36px; box-shadow: 0 4px 20px rgba(0,31,91,0.04); display: flex; flex-direction: column; justify-content: space-between; position: relative; }",
            ".prog-hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px; align-items: center; }",
            ".prog-sec-title { font-family: var(--font-poppins); font-size: clamp(2rem, 3.5vw, 2.6rem); font-weight: 900; line-height: 1.15; color: #001F5B; margin-bottom: 16px; text-transform: uppercase; }",
            ".prog-sec-title span { color: inherit; }",
            ".prog-sec-desc { color: #64748B; font-size: 0.98rem; line-height: 1.75; margin-bottom: 24px; }",
            ".prog-img-frame { position: relative; width: 100%; border-radius: 8px; overflow: hidden; box-shadow: 0 16px 40px rgba(0,31,91,0.1); aspect-ratio: 4/3; }",
            "",
            "/* Checklist matching ServicesSlider */",
            ".prog-checklist { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 18px; }",
            ".prog-check-item { display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.9rem; font-weight: 600; line-height: 1.45; }",
            ".prog-check-dot { width: 8px; height: 8px; border-radius: 50%; background: #1967D2; flex-shrink: 0; margin-top: 6px; }",
            "",
            "/* Navigation Controls Bar */",
            ".prog-controls-bar { display: flex; align-items: center; justify-content: space-between; margin-top: 48px; padding-top: 28px; border-top: 1px solid #F1F5F9; flex-wrap: wrap; gap: 16px; }",
            ".prog-nav-btn { display: inline-flex; align-items: center; gap: 10px; padding: 12px 24px; border-radius: 6px; font-family: var(--font-poppins); font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: all 0.2s ease; border: 1px solid #CBD5E1; background: #FFFFFF; color: #001F5B; text-decoration: none; }",
            ".prog-nav-btn:hover { background: #001F5B; color: #FFFFFF; border-color: #001F5B; transform: translateY(-2px); box-shadow: 0 4px 14px rgba(0,31,91,0.15); }",
            "",
            "/* Responsive */",
            "@media (max-width: 900px) {",
            "  .prog-slide-card { padding: 24px 20px !important; }",
            "  .prog-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }",
            "  .prog-checklist { grid-template-columns: 1fr !important; gap: 10px !important; }",
            "  .prog-controls-bar { flex-direction: column !important; align-items: stretch !important; }",
            "  .prog-controls-bar .prog-nav-btn { justify-content: center !important; }",
            "}",
            "@media (max-width: 640px) {",
            "  .prog-tab-fullwidth-container { grid-template-columns: 1fr !important; gap: 8px !important; }",
            "  .prog-category-btn { font-size: 0.82rem !important; padding: 11px 12px !important; }",
            "}",
          ].join("\n"),
        }}
      />

      <div className="prog-slider-container">
        {/* Floating Card for Category Tabs Navigation */}
        <div className="prog-tab-floating-card">
          <div className="prog-tab-fullwidth-container">
            {trainingPrograms.map((prog, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={prog.id}
                  onClick={() => {
                    setActiveIndex(idx);
                    window.history.replaceState(null, "", `#${prog.id}`);
                  }}
                  className={`prog-category-btn ${isActive ? "active" : "inactive"}`}
                >
                  {`${prog.code} • ${prog.title}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Program Slide Card */}
        <div className="prog-slide-card">
          <div className="prog-hero-grid">
            {/* Left Content Column */}
            <div>
              <span
                style={{
                  display: "inline-block",
                  color: currentProg.color,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                {currentProg.code}. {currentProg.tag}
              </span>

              {/* Title */}
              <h2 className="prog-sec-title">
                {currentProg.titleFirst} <span>{currentProg.titleSecond}</span>
              </h2>

              {/* Description */}
              <p className="prog-sec-desc">
                {currentProg.fullDesc || currentProg.desc}
              </p>

              {/* Clean Checklist matching ServicesSlider */}
              <ul className="prog-checklist">
                {currentProg.items.map((item, mIdx) => (
                  <li key={mIdx} className="prog-check-item">
                    <span className="prog-check-dot" style={{ background: currentProg.color }} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image Column */}
            <div>
              <div className="prog-img-frame">
                <Image
                  src={currentProg.imageUrl}
                  alt={currentProg.imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 500px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Navigation Controls Bar */}
          <div className="prog-controls-bar">
            <button
              onClick={handlePrev}
              className="prog-nav-btn"
              aria-label="Program Sebelumnya"
            >
              <i className="fas fa-arrow-left" style={{ color: "#1967D2" }} />
              <span>Program Sebelumnya</span>
            </button>

            <button
              onClick={handleNext}
              className="prog-nav-btn"
              aria-label="Program Berikutnya"
            >
              <span>Program Berikutnya</span>
              <i className="fas fa-arrow-right" style={{ color: "#1967D2" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
