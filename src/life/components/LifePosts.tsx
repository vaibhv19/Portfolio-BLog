"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { LifePost, MediaItem } from "../types";
import { PostCard } from "./PostCard";

interface LifePostsProps {
  posts: LifePost[];
  onEnlargeMedia: (items: MediaItem[], initialIndex: number, title?: string) => void;
}

export function LifePosts({ posts, onEnlargeMedia }: LifePostsProps) {
  const [visibleCount, setVisibleCount] = useState(22);

  const displayedPosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, posts.length));
  };

  // Row 1 (BIG LEFT): 1 Large Left + up to 5 Stacked Columns on Right
  const r1Large = displayedPosts[0];
  const r1Stack1Top = displayedPosts[1];
  const r1Stack1Btm = displayedPosts[2];
  const r1Stack2Top = displayedPosts[3];
  const r1Stack2Btm = displayedPosts[4];
  const r1Stack3Top = displayedPosts[5];
  const r1Stack3Btm = displayedPosts[6];
  const r1Stack4Top = displayedPosts[7];
  const r1Stack4Btm = displayedPosts[8];
  const r1Stack5Top = displayedPosts[9];
  const r1Stack5Btm = displayedPosts[10];

  // Row 2 (BIG RIGHT - MIRROR): up to 5 Stacked Columns on Left + 1 Large Right
  const r2Stack5Top = displayedPosts[11];
  const r2Stack5Btm = displayedPosts[12];
  const r2Stack4Top = displayedPosts[13];
  const r2Stack4Btm = displayedPosts[14];
  const r2Stack3Top = displayedPosts[15];
  const r2Stack3Btm = displayedPosts[16];
  const r2Stack1Top = displayedPosts[17] || displayedPosts[7];
  const r2Stack1Btm = displayedPosts[18] || displayedPosts[8];
  const r2Stack2Top = displayedPosts[19] || displayedPosts[9];
  const r2Stack2Btm = displayedPosts[20] || displayedPosts[10];
  const r2Large = displayedPosts[21] || displayedPosts[0];

  const remainingPosts = displayedPosts.slice(22);

  return (
    <section className="mb-14 sm:mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5 pb-2 border-b border-white/[0.06]">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 font-sans">
          Moments I Cherish
        </h2>

        {hasMore && (
          <button
            type="button"
            onClick={handleShowMore}
            className="hidden sm:flex items-center gap-1 text-xs font-mono text-copper hover:text-copper/80 transition-colors focus:outline-none cursor-pointer"
          >
            <span>View all</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Main Alternating Composition: BIG LEFT → BIG RIGHT with progressive density */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* ROW 1: BIG LEFT + PROGRESSIVE SMALL RIGHT */}
        {r1Large && (
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
            {/* Left: Large Featured Image */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex flex-col">
              <PostCard
                post={r1Large}
                onEnlarge={onEnlargeMedia}
                variant="hero-vertical"
                className="h-full"
                imageAspectClass="aspect-[3/4] sm:aspect-[4/5] min-h-[260px] sm:min-h-[320px]"
              />
            </div>

            {/* Right: Small Stack Column 1 */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex flex-col gap-3.5 sm:gap-4 justify-between">
              {r1Stack1Top && (
                <PostCard
                  post={r1Stack1Top}
                  onEnlarge={onEnlargeMedia}
                  variant="compact"
                  className="flex-1"
                  imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                />
              )}
              {r1Stack1Btm && (
                <PostCard
                  post={r1Stack1Btm}
                  onEnlarge={onEnlargeMedia}
                  variant="compact"
                  className="flex-1"
                  imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                />
              )}
            </div>

            {/* Right: Small Stack Column 2 */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex flex-col gap-3.5 sm:gap-4 justify-between">
              {r1Stack2Top && (
                <PostCard
                  post={r1Stack2Top}
                  onEnlarge={onEnlargeMedia}
                  variant="compact"
                  className="flex-1"
                  imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                />
              )}
              {r1Stack2Btm && (
                <PostCard
                  post={r1Stack2Btm}
                  onEnlarge={onEnlargeMedia}
                  variant="compact"
                  className="flex-1"
                  imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                />
              )}
            </div>

            {/* Right: Small Stack Column 3 (Revealed on lg: 1024px+) */}
            {(r1Stack3Top || r1Stack3Btm) && (
              <div className="hidden lg:flex lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex-col gap-3.5 sm:gap-4 justify-between">
                {r1Stack3Top && (
                  <PostCard
                    post={r1Stack3Top}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
                {r1Stack3Btm && (
                  <PostCard
                    post={r1Stack3Btm}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
              </div>
            )}

            {/* Right: Small Stack Column 4 (Revealed on xl: 1280px+) */}
            {(r1Stack4Top || r1Stack4Btm) && (
              <div className="hidden xl:flex xl:col-span-2 2xl:col-span-2 flex-col gap-3.5 sm:gap-4 justify-between">
                {r1Stack4Top && (
                  <PostCard
                    post={r1Stack4Top}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
                {r1Stack4Btm && (
                  <PostCard
                    post={r1Stack4Btm}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
              </div>
            )}

            {/* Right: Small Stack Column 5 (Revealed on 2xl: 1536px+) */}
            {(r1Stack5Top || r1Stack5Btm) && (
              <div className="hidden 2xl:flex 2xl:col-span-2 flex-col gap-3.5 sm:gap-4 justify-between">
                {r1Stack5Top && (
                  <PostCard
                    post={r1Stack5Top}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
                {r1Stack5Btm && (
                  <PostCard
                    post={r1Stack5Btm}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
              </div>
            )}
          </div>
        )}

        {/* ROW 2: PROGRESSIVE SMALL LEFT + BIG RIGHT (HORIZONTAL MIRROR) */}
        {r2Large && (
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-3.5 sm:gap-4 items-stretch pt-2">
            {/* Left: Small Stack Column 5 (Revealed on 2xl: 1536px+) */}
            {(r2Stack5Top || r2Stack5Btm) && (
              <div className="hidden 2xl:flex 2xl:col-span-2 flex-col gap-3.5 sm:gap-4 justify-between">
                {r2Stack5Top && (
                  <PostCard
                    post={r2Stack5Top}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
                {r2Stack5Btm && (
                  <PostCard
                    post={r2Stack5Btm}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
              </div>
            )}

            {/* Left: Small Stack Column 4 (Revealed on xl: 1280px+) */}
            {(r2Stack4Top || r2Stack4Btm) && (
              <div className="hidden xl:flex xl:col-span-2 2xl:col-span-2 flex-col gap-3.5 sm:gap-4 justify-between">
                {r2Stack4Top && (
                  <PostCard
                    post={r2Stack4Top}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
                {r2Stack4Btm && (
                  <PostCard
                    post={r2Stack4Btm}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
              </div>
            )}

            {/* Left: Small Stack Column 3 (Revealed on lg: 1024px+) */}
            {(r2Stack3Top || r2Stack3Btm) && (
              <div className="hidden lg:flex lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex-col gap-3.5 sm:gap-4 justify-between">
                {r2Stack3Top && (
                  <PostCard
                    post={r2Stack3Top}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
                {r2Stack3Btm && (
                  <PostCard
                    post={r2Stack3Btm}
                    onEnlarge={onEnlargeMedia}
                    variant="compact"
                    className="flex-1"
                    imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                  />
                )}
              </div>
            )}

            {/* Left: Small Stack Column 1 */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex flex-col gap-3.5 sm:gap-4 justify-between">
              {r2Stack1Top && (
                <PostCard
                  post={r2Stack1Top}
                  onEnlarge={onEnlargeMedia}
                  variant="compact"
                  className="flex-1"
                  imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                />
              )}
              {r2Stack1Btm && (
                <PostCard
                  post={r2Stack1Btm}
                  onEnlarge={onEnlargeMedia}
                  variant="compact"
                  className="flex-1"
                  imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                />
              )}
            </div>

            {/* Left: Small Stack Column 2 */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex flex-col gap-3.5 sm:gap-4 justify-between">
              {r2Stack2Top && (
                <PostCard
                  post={r2Stack2Top}
                  onEnlarge={onEnlargeMedia}
                  variant="compact"
                  className="flex-1"
                  imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                />
              )}
              {r2Stack2Btm && (
                <PostCard
                  post={r2Stack2Btm}
                  onEnlarge={onEnlargeMedia}
                  variant="compact"
                  className="flex-1"
                  imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
                />
              )}
            </div>

            {/* Right: Large Featured Image */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex flex-col">
              <PostCard
                post={r2Large}
                onEnlarge={onEnlargeMedia}
                variant="hero-vertical"
                className="h-full"
                imageAspectClass="aspect-[3/4] sm:aspect-[4/5] min-h-[260px] sm:min-h-[320px]"
              />
            </div>
          </div>
        )}

        {/* Subsequent Repeating Grid if extra posts exist beyond the 2 primary rows */}
        {remainingPosts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4 items-stretch pt-2">
            {remainingPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onEnlarge={onEnlargeMedia}
                variant="default"
                className="h-full"
              />
            ))}
          </div>
        )}
      </div>

      {/* Mobile/Tablet Load More Button */}
      {hasMore && (
        <div className="mt-8 flex justify-center sm:hidden">
          <button
            type="button"
            onClick={handleShowMore}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111622] hover:bg-[#161d2d] text-slate-300 hover:text-white border border-white/10 hover:border-copper/40 transition-all text-xs font-mono tracking-wider uppercase cursor-pointer focus:outline-none"
          >
            <span>Load More Entries</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </section>
  );
}
