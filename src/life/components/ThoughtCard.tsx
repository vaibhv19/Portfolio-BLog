"use client";

import React from "react";
import { Calendar, Quote } from "lucide-react";
import { LifeThought, MediaItem } from "../types";
import { MusicPlayerWidget } from "./MusicPlayerWidget";

interface ThoughtCardProps {
  thought: LifeThought;
  playingTrackId: string | null;
  onToggleTrack: (id: string) => void;
  onEnlargeMedia?: (items: MediaItem[], initialIndex: number, title?: string) => void;
}

export function ThoughtCard({
  thought,
  playingTrackId,
  onToggleTrack,
  onEnlargeMedia,
}: ThoughtCardProps) {
  const isPlayingThis = playingTrackId === thought.id;

  const handleImageClick = () => {
    if (thought.image && onEnlargeMedia) {
      onEnlargeMedia(
        [
          {
            id: `thought-${thought.id}`,
            url: thought.image,
            alt: thought.imageAlt || "Thought image",
            caption: thought.content,
            date: thought.date,
          },
        ],
        0,
        thought.tag ? `#${thought.tag}` : "Thought"
      );
    }
  };

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-[#111622] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-sm flex flex-col justify-between relative group">
      {/* Quote Accent & Tag */}
      <div className="flex items-center justify-between mb-3 text-slate-500 text-xs font-mono">
        <div className="flex items-center gap-1.5">
          <Quote className="w-3.5 h-3.5 text-copper/80" />
          {thought.tag && (
            <span className="uppercase tracking-wider text-[11px] text-slate-400">
              {thought.tag}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-slate-500">
          <Calendar className="w-3 h-3" />
          <span>{thought.date}</span>
        </div>
      </div>

      {/* Main Statement Content */}
      <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed mb-1">
        &ldquo;{thought.content}&rdquo;
      </p>

      {/* Optional Thought Image */}
      {thought.image && (
        <div
          onClick={handleImageClick}
          className="mt-4 rounded-xl overflow-hidden max-h-56 cursor-pointer border border-white/10 hover:border-copper/40 transition-all"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thought.image}
            alt={thought.imageAlt || "Attached photo"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Optional Music Attachment */}
      {thought.music && (
        <MusicPlayerWidget
          music={thought.music}
          isPlaying={isPlayingThis}
          onTogglePlay={() => onToggleTrack(thought.id)}
        />
      )}
    </div>
  );
}
