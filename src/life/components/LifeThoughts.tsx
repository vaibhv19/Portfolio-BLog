"use client";

import React, { useState } from "react";
import { MessageSquareText } from "lucide-react";
import { LifeThought, MediaItem } from "../types";
import { ThoughtCard } from "./ThoughtCard";

interface LifeThoughtsProps {
  thoughts: LifeThought[];
  onEnlargeMedia: (items: MediaItem[], initialIndex: number, title?: string) => void;
}

export function LifeThoughts({ thoughts, onEnlargeMedia }: LifeThoughtsProps) {
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);

  const handleToggleTrack = (id: string) => {
    setPlayingTrackId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mb-12 sm:mb-14">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <MessageSquareText className="w-4 h-4 text-copper" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 font-sans">
              Thoughts
            </h2>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              ({thoughts.length})
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
            Short-form personal statements &amp; reflections.
          </p>
        </div>

        <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
          Fragments
        </span>
      </div>

      {/* Vertical Stack of Thought Cards */}
      <div className="flex flex-col gap-3.5 sm:gap-4">
        {thoughts.map((thought) => (
          <ThoughtCard
            key={thought.id}
            thought={thought}
            playingTrackId={playingTrackId}
            onToggleTrack={handleToggleTrack}
            onEnlargeMedia={onEnlargeMedia}
          />
        ))}
      </div>
    </section>
  );
}
