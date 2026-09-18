"use client";

import React from "react";
import { Maximize2, Calendar, Tag } from "lucide-react";
import { LifePost, MediaItem } from "../types";

interface PostCardProps {
  post: LifePost;
  onEnlarge: (items: MediaItem[], initialIndex: number, title?: string) => void;
}

export function PostCard({ post, onEnlarge }: PostCardProps) {
  const primaryMedia = post.media[0];

  const handleOpen = () => {
    if (post.media.length > 0) {
      onEnlarge(post.media, 0, post.title || post.tags?.[0] || "Post");
    }
  };

  // Determine aspect ratio class
  const getAspectClass = () => {
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

  return (
    <article
      className={`group relative flex flex-col rounded-2xl overflow-hidden bg-[#111622] border border-white/[0.08] hover:border-copper/40 transition-all duration-300 shadow-md ${
        post.featured ? "sm:col-span-2" : ""
      }`}
    >
      {/* Visual Media Frame */}
      {primaryMedia && (
        <div
          className={`relative w-full ${getAspectClass()} overflow-hidden bg-black/40 cursor-pointer`}
          onClick={handleOpen}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={primaryMedia.url}
            alt={primaryMedia.alt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111622]/90 via-transparent to-black/30 opacity-70 group-hover:opacity-50 transition-opacity" />

          {/* Quick Enlarge Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
            aria-label="Enlarge post photo"
            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-all cursor-pointer focus:outline-none"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          {/* Carousel Badge if multi-media */}
          {post.media.length > 1 && (
            <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/70 text-white font-mono text-[11px] border border-white/10">
              1/{post.media.length}
            </div>
          )}
        </div>
      )}

      {/* Post Content Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          {post.title && (
            <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-1.5 group-hover:text-copper transition-colors">
              {post.title}
            </h3>
          )}

          <p className="text-sm text-slate-300 leading-relaxed font-light mb-3">
            {post.caption}
          </p>
        </div>

        {/* Post Metadata: Tags & Date */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-slate-500" />
            <span>{post.date}</span>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap justify-end">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-slate-400 hover:text-copper transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
