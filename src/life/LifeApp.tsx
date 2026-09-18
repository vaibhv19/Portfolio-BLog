"use client";

import React, { useState } from "react";
import { HIGHLIGHTS_DATA, POSTS_DATA, THOUGHTS_DATA } from "./data/lifeData";
import { LightboxState, MediaItem } from "./types";
import { LifeHeader } from "./components/LifeHeader";
import { LifeHighlights } from "./components/LifeHighlights";
import { LifePosts } from "./components/LifePosts";
import { LifeThoughts } from "./components/LifeThoughts";
import { LifeFooter } from "./components/LifeFooter";
import { MediaLightbox } from "./components/MediaLightbox";

export default function LifeApp() {
  const [lightboxState, setLightboxState] = useState<LightboxState>({
    isOpen: false,
    items: [],
    currentIndex: 0,
    collectionTitle: undefined,
  });

  const handleEnlargeMedia = (
    items: MediaItem[],
    initialIndex: number = 0,
    collectionTitle?: string
  ) => {
    setLightboxState({
      isOpen: true,
      items,
      currentIndex: initialIndex,
      collectionTitle,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setLightboxState((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col justify-between selection:bg-copper/20 selection:text-copper overflow-x-hidden">
      {/* Central Viewport Middle-Column */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        {/* Header / Intro */}
        <LifeHeader />

        {/* 1. Highlights: Single-row horizontal shelf carousel */}
        <LifeHighlights
          collections={HIGHLIGHTS_DATA}
          onEnlargeMedia={handleEnlargeMedia}
        />

        {/* 2. Posts: Multi-row visual catalog */}
        <LifePosts
          posts={POSTS_DATA}
          onEnlargeMedia={handleEnlargeMedia}
        />

        {/* 3. Thoughts: Threads-inspired short statements */}
        <LifeThoughts
          thoughts={THOUGHTS_DATA}
          onEnlargeMedia={handleEnlargeMedia}
        />

        {/* 4. Footer */}
        <LifeFooter />
      </div>

      {/* SPA Enlarged Media Lightbox Viewer */}
      <MediaLightbox
        state={lightboxState}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
