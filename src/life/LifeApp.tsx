"use client";

import React, { useState } from "react";
import { POSTS_DATA, LIFE_CATEGORIES } from "./data/lifeData";
import { LightboxState, MediaItem } from "./types";
import { LifeLayout } from "./components/LifeLayout";
import { LifeHeader } from "./components/LifeHeader";
import { LifePosts } from "./components/LifePosts";
import { CategorySection } from "./components/CategorySection";
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
    <LifeLayout>
      {/* 1. Hero: Opening Question -> Quote -> Attribution */}
      <LifeHeader />

      {/* 2. Moments I Cherish: Visual media catalog */}
      <LifePosts
        posts={POSTS_DATA}
        onEnlargeMedia={handleEnlargeMedia}
      />

      {/* 3. Major Life Chapters: FITNESS, ART, READ, WRITE, PHILOSOPHY / IDEAS, TRAVEL, PERSONAL INTERESTS, NOW / CURRENTLY */}
      <div className="flex flex-col gap-2 sm:gap-4">
        {LIFE_CATEGORIES.map((category, idx) => (
          <CategorySection
            key={category.id}
            category={category}
            onEnlargeMedia={handleEnlargeMedia}
            index={idx}
          />
        ))}
      </div>

      {/* 4. Quiet Footer */}
      <LifeFooter />

      {/* Enlarged Media Lightbox Viewer */}
      <MediaLightbox
        state={lightboxState}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </LifeLayout>
  );
}
