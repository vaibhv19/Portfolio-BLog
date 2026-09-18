"use client";

import React from "react";
import { Maximize2, Layers } from "lucide-react";
import { LifePost, MediaItem } from "../types";

interface PostCardProps {
  post: LifePost;
  onEnlarge: (items: MediaItem[], initialIndex: number, title?: string) => void;
  variant?: "hero-vertical" | "compact" | "subtle" | "default";
  className?: string;
  imageAspectClass?: string;
}

export function PostCard({
  post,
  onEnlarge,
  variant = "default",
  className = "",
  imageAspectClass,
}: PostCardProps) {
  const primaryMedia = post.media[0];

  const handleOpen = () => {
    if (post.media.length > 0) {
      // Enrich media items with post caption and date if not already present
      const enrichedMedia: MediaItem[] = post.media.map((item) => ({
        ...item,
        caption: item.caption || post.caption,
        date: item.date || post.date,
      }));
      onEnlarge(enrichedMedia, 0, post.title || post.tags?.[0] || "Post");
    }
  };

  // Determine aspect ratio class
  const getImageAspect = () => {
    if (imageAspectClass) return imageAspectClass;
    if (variant === "hero-vertical") {
      return "aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] min-h-[300px] sm:min-h-[420px]";
    }
    if (variant === "compact") {
      return "aspect-[4/3] sm:aspect-[16/10]";
    }
    if (variant === "subtle") {
      return "aspect-[16/9]";
    }
    switch (post.aspectRatio) {
      case "tall":
        return "aspect-[3/4]";
      case "portrait":
        return "aspect-[4/5]";
      case "landscape":
        return "aspect-[16/10]";
      case "square":
      default:
        return "aspect-square";
    }
  };

  if (!primaryMedia) return null;

  return (
    <article
      onClick={handleOpen}
      className={`group relative rounded-2xl overflow-hidden bg-[#111622] border border-white/[0.08] hover:border-copper/40 transition-all duration-300 shadow-md cursor-pointer select-none ${className}`}
    >
      {/* Visual Media Frame */}
      <div className={`relative w-full ${getImageAspect()} overflow-hidden bg-black/40`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={primaryMedia.url}
          alt={primaryMedia.alt || post.title || "Visual post"}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Minimal Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Multi-item Carousel Badge */}
        {post.media.length > 1 && (
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-white/90 font-mono text-[10px] border border-white/10">
            <Layers className="w-3 h-3 text-copper" />
            <span>1/{post.media.length}</span>
          </div>
        )}

        {/* Hover Action Overlay: Optional subtle title & expand icon */}
        <div className="absolute inset-0 p-3 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="flex justify-end">
            <div className="p-1.5 rounded-full bg-black/70 backdrop-blur-sm text-white/90 border border-white/10 shadow-sm">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>

          {post.title && (
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-100 truncate drop-shadow-md">
                {post.title}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
