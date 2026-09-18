"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { HighlightCollection, MediaItem } from "../types";
import { HighlightCard } from "./HighlightCard";

interface LifeHighlightsProps {
  collections: HighlightCollection[];
  onEnlargeMedia: (items: MediaItem[], initialIndex: number, collectionTitle: string) => void;
}

export function LifeHighlights({ collections, onEnlargeMedia }: LifeHighlightsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll, collections]);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollOffset = direction === "left" ? -380 : 380;
    el.scrollBy({ left: scrollOffset, behavior: "smooth" });
  };

  return (
    <section className="mb-14">
      {/* Section Header with Left/Right Shelf Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-copper" />
          <h2 className="text-xl font-bold tracking-tight text-slate-100 font-sans">
            Highlights
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            ({collections.length})
          </span>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll highlights left"
            className={`p-1.5 rounded-lg border transition-all cursor-pointer focus:outline-none ${
              canScrollLeft
                ? "bg-[#111622] text-slate-200 border-white/10 hover:border-copper/40 hover:text-white"
                : "bg-transparent text-slate-600 border-transparent cursor-not-allowed opacity-40"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            disabled={!canScrollRight}
            aria-label="Scroll highlights right"
            className={`p-1.5 rounded-lg border transition-all cursor-pointer focus:outline-none ${
              canScrollRight
                ? "bg-[#111622] text-slate-200 border-white/10 hover:border-copper/40 hover:text-white"
                : "bg-transparent text-slate-600 border-transparent cursor-not-allowed opacity-40"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Shelf */}
      <div className="relative -mx-4 sm:mx-0">
        <div
          ref={scrollContainerRef}
          className="flex gap-3.5 overflow-x-auto px-4 sm:px-0 pb-4 pt-1 scroll-smooth select-none focus:outline-none no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {collections.map((collection) => (
            <HighlightCard
              key={collection.id}
              collection={collection}
              onEnlarge={onEnlargeMedia}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
