"use client";

import React, { useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { LightboxState } from "../types";

interface MediaLightboxProps {
  state: LightboxState;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function MediaLightbox({ state, onClose, onNavigate }: MediaLightboxProps) {
  const { isOpen, items, currentIndex, collectionTitle } = state;
  const currentItem = items[currentIndex];

  const touchStartX = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) {
      handlePrev();
    } else if (deltaX < -50) {
      handleNext();
    }
    touchStartX.current = null;
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Container to prevent backdrop click close when clicking media */}
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top bar controls */}
        <div className="w-full flex items-center justify-between pb-3 text-slate-300">
          <div className="flex items-center gap-3">
            {collectionTitle && (
              <span className="font-mono text-xs uppercase tracking-wider text-copper bg-copper/10 px-2.5 py-1 rounded-md border border-copper/20">
                {collectionTitle}
              </span>
            )}
            <span className="font-mono text-xs text-slate-400">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-all cursor-pointer focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Frame & Navigation Arrows */}
        <div className="relative w-full flex items-center justify-center group">
          {/* Previous Button */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 hover:border-copper/40 transition-all cursor-pointer focus:outline-none shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Main Media */}
          <div className="w-full max-h-[68vh] sm:max-h-[72vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/40 border border-white/10 shadow-2xl">
            {currentItem.type === "video" ? (
              <video
                key={currentItem.id}
                src={currentItem.url}
                controls
                autoPlay
                loop
                playsInline
                className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={currentItem.id}
                src={currentItem.url}
                alt={currentItem.alt}
                className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-lg transition-opacity duration-300"
              />
            )}
          </div>

          {/* Next Button */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 hover:border-copper/40 transition-all cursor-pointer focus:outline-none shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Bottom Details Caption */}
        <div className="w-full mt-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-slate-300 text-sm">
          {currentItem.caption ? (
            <p className="font-light text-slate-200">{currentItem.caption}</p>
          ) : (
            <p className="font-light text-slate-400">{currentItem.alt}</p>
          )}

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 shrink-0">
            {currentItem.location && (
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-copper" />
                {currentItem.location}
              </span>
            )}
            {currentItem.date && (
              <span className="flex items-center gap-1 text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {currentItem.date}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
