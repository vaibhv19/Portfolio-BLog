"use client";

import React, { useState } from "react";
import { Camera, ChevronDown, ArrowUpRight } from "lucide-react";
import { LifePost, MediaItem } from "../types";
import { PostCard } from "./PostCard";

interface LifePostsProps {
  posts: LifePost[];
  onEnlargeMedia: (items: MediaItem[], initialIndex: number, title?: string) => void;
}

export function LifePosts({ posts, onEnlargeMedia }: LifePostsProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const displayedPosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, posts.length));
  };

  // Structured Editorial Layout (Deterministic Reference Composition)
  const post1 = displayedPosts[0]; // Large Vertical Left
  const post2 = displayedPosts[1]; // Column 2 Top
  const post3 = displayedPosts[2]; // Column 3 Top
  const post4 = displayedPosts[3]; // Column 2 Bottom
  const post5 = displayedPosts[4]; // Column 3 Middle
  const post6 = displayedPosts[5]; // Column 3 Bottom
  const subsequentPosts = displayedPosts.slice(6);

  return (
    <section className="mb-12 sm:mb-14">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-copper" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 font-sans">
              Posts
            </h2>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              ({posts.length})
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
            A visual log of things I see, make, explore, and experience.
          </p>
        </div>

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

      {/* Main Editorial Composition */}
      <div className="flex flex-col gap-3.5 sm:gap-4">
        {/* The Exact 3-Column Asymmetric Cluster */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
          {/* Column 1 (Left): POST 1 - Large Vertical Featured */}
          {post1 && (
            <div className="md:col-span-5 flex flex-col">
              <PostCard
                post={post1}
                onEnlarge={onEnlargeMedia}
                variant="hero-vertical"
                className="h-full"
              />
            </div>
          )}

          {/* Column 2 (Middle): POST 2 (top) + POST 4 (bottom) */}
          <div className="md:col-span-3 sm:col-span-6 flex flex-col gap-3.5 sm:gap-4 justify-between">
            {post2 && (
              <PostCard
                post={post2}
                onEnlarge={onEnlargeMedia}
                variant="compact"
                className="flex-1"
                imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
              />
            )}
            {post4 && (
              <PostCard
                post={post4}
                onEnlarge={onEnlargeMedia}
                variant="compact"
                className="flex-1"
                imageAspectClass="aspect-[4/3] sm:aspect-[16/10]"
              />
            )}
          </div>

          {/* Column 3 (Right): POST 3 (top) + POST 5 (middle) + POST 6 (bottom) */}
          <div className="md:col-span-4 sm:col-span-6 flex flex-col gap-3.5 sm:gap-4 justify-between">
            {post3 && (
              <PostCard
                post={post3}
                onEnlarge={onEnlargeMedia}
                variant="subtle"
                className="flex-1"
                imageAspectClass="aspect-[16/9]"
              />
            )}
            {post5 && (
              <PostCard
                post={post5}
                onEnlarge={onEnlargeMedia}
                variant="subtle"
                className="flex-1"
                imageAspectClass="aspect-[16/9]"
              />
            )}
            {post6 && (
              <PostCard
                post={post6}
                onEnlarge={onEnlargeMedia}
                variant="subtle"
                className="flex-1"
                imageAspectClass="aspect-[16/9]"
              />
            )}
          </div>
        </div>

        {/* Additional Multi-Row Posts (if expanded) */}
        {subsequentPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 items-stretch pt-2">
            {subsequentPosts.map((post) => (
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
