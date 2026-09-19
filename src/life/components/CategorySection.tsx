"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LifeCategory, MediaItem } from "../types";

interface CategorySectionProps {
  category: LifeCategory;
  onEnlargeMedia: (items: MediaItem[], initialIndex: number, title?: string) => void;
  index: number;
}

export function CategorySection({ category, onEnlargeMedia, index }: CategorySectionProps) {
  const items = category.items;
  const numItems = items.length;

  // Tripled items array for smooth infinite sliding
  const duplicatedItems = [...items, ...items, ...items];

  // Start in the middle copy so we can slide in either direction seamlessly
  const [currentIndex, setCurrentIndex] = useState(numItems);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Automatic 5-second cycle advancing by ONE image per step
  useEffect(() => {
    if (isHovered || numItems <= 1) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [handleNext, isHovered, numItems]);

  // Seamless infinite loop boundary handler on transition end
  const handleTransitionEnd = () => {
    if (currentIndex >= numItems * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - numItems);
    } else if (currentIndex < numItems) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + numItems);
    }
  };

  // Re-enable transitions after instant boundary reset
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const handleManualNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    handleNext();
  };

  const handleManualPrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    handlePrev();
  };

  const handleOpenItem = (duplicatedIdx: number) => {
    const originalIdx = duplicatedIdx % numItems;
    onEnlargeMedia(items, originalIdx, category.title);
  };

  // Chapter numeral (01, 02, 03...)
  const chapterNumber = String(index + 1).padStart(2, "0");

  // Editorial title styling tailored to each chapter's spirit
  const getHeadingStyle = () => {
    switch (category.slug) {
      case "fitness":
        return "tracking-wider font-semibold text-slate-100";
      case "art":
        return "tracking-wide font-medium italic text-slate-100";
      case "read":
        return "tracking-normal font-serif font-normal italic text-slate-200";
      case "write":
        return "tracking-tight font-mono font-medium text-slate-100";
      case "philosophy":
        return "tracking-widest font-light text-slate-200";
      case "travel":
        return "tracking-wide font-medium text-slate-100";
      case "interests":
        return "tracking-normal font-medium text-slate-100";
      case "now":
        return "tracking-wide font-medium text-slate-100";
      default:
        return "tracking-tight font-bold text-slate-100";
    }
  };

  return (
    <section
      className="mb-18 sm:mb-24 select-none relative group/section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Chapter Marker & Title Line */}
      <div className="flex items-baseline justify-between mb-5 pb-3 border-b border-white/[0.07] relative">
        <div className="flex items-baseline gap-3.5 sm:gap-5">
          {/* Subtle Chapter Numeral */}
          <span className="text-[10px] sm:text-xs font-mono text-slate-500/80 tracking-widest uppercase">
            {chapterNumber}
          </span>

          {/* Chapter Title */}
          <h2 className={`text-lg sm:text-xl lg:text-2xl uppercase ${getHeadingStyle()}`}>
            {category.title}
          </h2>

          {/* Subtle Live Indicator on "NOW" */}
          {category.slug === "now" && (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-copper/10 border border-copper/20 text-[10px] font-mono text-copper/90">
              <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
              <span>live</span>
            </span>
          )}
        </div>

        {/* Quiet Minimal Navigation Arrows */}
        <div className="flex items-center gap-1.5 opacity-60 group-hover/section:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={handleManualPrev}
            aria-label={`Previous ${category.title} image`}
            className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-copper/40 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleManualNext}
            aria-label={`Next ${category.title} image`}
            className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-copper/40 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Visual Journal Row: 3 Portrait Previews */}
      <div className="relative overflow-hidden rounded-2xl">
        {/* Sliding Track */}
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(-1 * ${currentIndex} * (100% + var(--slide-gap, 1rem)) / var(--visible-cols, 3)))`,
            transition: isTransitioning
              ? "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)"
              : "none",
          }}
          className="flex gap-3 sm:gap-3.5 lg:gap-4 [--visible-cols:1.2] sm:[--visible-cols:2] md:[--visible-cols:3] [--slide-gap:0.75rem] sm:[--slide-gap:0.875rem] lg:[--slide-gap:1rem] will-change-transform py-1"
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => handleOpenItem(idx)}
              className="w-[calc((100%-0.75rem)/1.2)] sm:w-[calc((100%-0.875rem)/2)] md:w-[calc((100%-2*1rem)/3)] shrink-0 group relative rounded-xl overflow-hidden bg-[#10141f] border border-white/[0.08] hover:border-copper/40 transition-all duration-500 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              {/* Compact Portrait Physical Frame (3:4 aspect ratio) */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-black/50">
                {item.type === "video" ? (
                  <video
                    src={item.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={item.url}
                    alt={item.alt || category.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                {/* Subtle Analog Tone Vignette & Edge Luminance */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-40 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-xl pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
