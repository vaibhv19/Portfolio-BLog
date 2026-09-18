"use client";

import React, { useState, useEffect, useRef } from "react";
import { Maximize2, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { HighlightCollection, MediaItem } from "../types";

interface HighlightCardProps {
  collection: HighlightCollection;
  onEnlarge: (items: MediaItem[], initialIndex: number, title: string) => void;
}

export function HighlightCard({ collection, onEnlarge }: HighlightCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalItems = collection.items.length;

  // Autoplay progression (every 4s)
  useEffect(() => {
    if (totalItems <= 1 || isPaused || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalItems, isPaused, isHovered]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const togglePause = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPaused((prev) => !prev);
  };

  const handleOpenLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEnlarge(collection.items, currentIndex, collection.title);
  };

  // Touch handlers for swiping between media
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) {
      handlePrev();
    } else if (deltaX < -40) {
      handleNext();
    }
    touchStartX.current = null;
  };

  const currentMedia = collection.items[currentIndex] || collection.items[0];

  return (
    <div
      className="group relative flex-shrink-0 w-[190px] sm:w-[210px] h-[270px] sm:h-[290px] rounded-2xl overflow-hidden bg-[#111622] border border-white/[0.08] hover:border-copper/40 transition-all duration-300 select-none shadow-md flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image with subtle zoom on hover */}
      <div
        className="absolute inset-0 z-0 cursor-pointer overflow-hidden"
        onClick={handleOpenLightbox}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={currentMedia.id}
          src={currentMedia.url}
          alt={currentMedia.alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Top Segmented Story Indicators */}
      <div className="relative z-10 pt-3 px-3 w-full flex items-center gap-1.5 pointer-events-none">
        {collection.items.map((item, idx) => (
          <div
            key={item.id}
            className="flex-1 h-1 rounded-full overflow-hidden bg-white/25"
          >
            <div
              className={`h-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-copper w-full"
                  : idx < currentIndex
                  ? "bg-white/80 w-full"
                  : "w-0"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Subtle Controls Overlay (Visible on Hover / Active) */}
      <div className="relative z-10 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white border border-white/10 transition-all cursor-pointer focus:outline-none"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={togglePause}
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white border border-white/10 transition-all cursor-pointer focus:outline-none"
          >
            {isPaused ? <Play className="w-3 h-3 text-copper" /> : <Pause className="w-3 h-3" />}
          </button>

          <button
            type="button"
            onClick={handleOpenLightbox}
            aria-label="Enlarge media"
            title="View enlarged"
            className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white border border-white/10 transition-all cursor-pointer focus:outline-none"
          >
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white border border-white/10 transition-all cursor-pointer focus:outline-none"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom Title & Details */}
      <div
        className="relative z-10 p-3.5 cursor-pointer"
        onClick={handleOpenLightbox}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-100 group-hover:text-copper transition-colors">
              [ {collection.title} ]
            </span>
          </div>

          <span className="font-mono text-[10px] text-slate-400 bg-black/40 px-1.5 py-0.5 rounded border border-white/10">
            {currentIndex + 1}/{totalItems}
          </span>
        </div>

        {collection.subtitle && (
          <p className="text-[11px] text-slate-300 font-light mt-0.5 truncate">
            {collection.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
