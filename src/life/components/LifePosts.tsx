"use client";

import React, { useState } from "react";
import { Camera, ChevronDown } from "lucide-react";
import { LifePost, MediaItem } from "../types";
import { PostCard } from "./PostCard";

interface LifePostsProps {
  posts: LifePost[];
  onEnlargeMedia: (items: MediaItem[], initialIndex: number, title?: string) => void;
}

export function LifePosts({ posts, onEnlargeMedia }: LifePostsProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, posts.length));
  };

  return (
    <section className="mb-14">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-copper" />
          <h2 className="text-xl font-bold tracking-tight text-slate-100 font-sans">
            Posts
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            ({posts.length})
          </span>
        </div>

        <span className="text-xs font-mono text-slate-400">
          Visual Catalog
        </span>
      </div>

      {/* Asymmetric / Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
        {visiblePosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onEnlarge={onEnlargeMedia}
          />
        ))}
      </div>

      {/* Subtle View All / Load More Button */}
      {hasMore && (
        <div className="mt-8 flex justify-center">
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
