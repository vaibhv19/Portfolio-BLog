"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LifeCategory, MediaItem } from "../types";

interface CategorySectionProps {
  category: LifeCategory;
  onEnlargeMedia: (items: MediaItem[], initialIndex: number, title?: string) => void;
  index?: number;
}

export function CategorySection({ category, onEnlargeMedia }: CategorySectionProps) {
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

  return (
    <section
      className="mb-14 sm:mb-18 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Title: ONLY the section name */}
      <div className="mb-4 pb-2 border-b border-white/[0.06]">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 font-sans uppercase">
          {category.title}
        </h2>
      </div>

      {/* Netflix-style 3-Image Horizontal Content Row */}
      <div className="relative group/carousel overflow-hidden rounded-2xl">
        {/* Sliding Track */}
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(-1 * ${currentIndex} * (100% + var(--slide-gap, 1rem)) / var(--visible-cols, 6)))`,
            transition: isTransitioning
              ? "transform 600ms cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
          }}
          className="flex gap-3.5 sm:gap-4 [--visible-cols:2] sm:[--visible-cols:4] lg:[--visible-cols:6] [--slide-gap:0.875rem] sm:[--slide-gap:1rem] will-change-transform py-0.5"
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => handleOpenItem(idx)}
              className="w-[calc((100%-0.875rem)/2)] sm:w-[calc((100%-3*1rem)/4)] lg:w-[calc((100%-5*1rem)/6)] shrink-0 group relative rounded-2xl overflow-hidden bg-[#111622] border border-white/[0.08] hover:border-copper/40 transition-colors duration-300 shadow-md cursor-pointer"
            >
              {/* Equal-sized portrait visual preview (3:4 aspect ratio) */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-black/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.url}
                  alt={item.alt || category.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Manual Left Navigation Control */}
        <button
          type="button"
          onClick={handleManualPrev}
          aria-label="Previous image"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-slate-200 hover:text-white hover:border-copper/50 hover:bg-black/90 flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 shadow-lg z-10 cursor-pointer focus:outline-none focus:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Manual Right Navigation Control */}
        <button
          type="button"
          onClick={handleManualNext}
          aria-label="Next image"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-slate-200 hover:text-white hover:border-copper/50 hover:bg-black/90 flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 shadow-lg z-10 cursor-pointer focus:outline-none focus:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
