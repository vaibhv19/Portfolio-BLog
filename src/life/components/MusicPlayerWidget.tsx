"use client";

import React, { useState } from "react";
import { Play, Pause, Music, Disc } from "lucide-react";
import { MusicAttachment } from "../types";

interface MusicPlayerWidgetProps {
  music: MusicAttachment;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
}

export function MusicPlayerWidget({ music, isPlaying = false, onTogglePlay }: MusicPlayerWidgetProps) {
  const [internalPlaying, setInternalPlaying] = useState(false);

  const playing = onTogglePlay ? isPlaying : internalPlaying;
  const toggle = onTogglePlay || (() => setInternalPlaying((prev) => !prev));

  return (
    <div
      onClick={toggle}
      className={`mt-3.5 flex items-center justify-between p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer select-none ${
        playing
          ? "bg-copper/10 border-copper/40 shadow-sm"
          : "bg-[#0d121c] border-white/[0.08] hover:border-white/20 hover:bg-[#111724]"
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        {/* Album Artwork / Disc */}
        <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-black/60 border border-white/10 flex items-center justify-center">
          {music.albumCover ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={music.albumCover}
              alt={music.title}
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                playing ? "scale-105" : ""
              }`}
            />
          ) : (
            <Disc className={`w-5 h-5 text-slate-400 ${playing ? "animate-spin" : ""}`} />
          )}

          {/* Playing overlay ripple */}
          {playing && (
            <div className="absolute inset-0 bg-copper/20 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-copper animate-ping" />
            </div>
          )}
        </div>

        {/* Track & Artist Info */}
        <div className="min-w-0">
          <p className="text-xs sm:text-sm font-medium text-slate-100 truncate flex items-center gap-1.5">
            <span className={playing ? "text-copper" : "text-slate-100"}>
              {music.title}
            </span>
          </p>
          <p className="text-[11px] sm:text-xs text-slate-400 truncate">
            {music.artist}
          </p>
        </div>
      </div>

      {/* Right Side: Equalizer Waveform & Play Button */}
      <div className="flex items-center gap-3 shrink-0 pl-2">
        {/* Animated equalizer bars when playing */}
        {playing ? (
          <div className="flex items-end gap-[3px] h-4">
            <span className="w-[3px] bg-copper rounded-full h-3 animate-pulse" />
            <span className="w-[3px] bg-copper rounded-full h-4 animate-bounce" />
            <span className="w-[3px] bg-copper rounded-full h-2 animate-pulse" />
            <span className="w-[3px] bg-copper rounded-full h-3.5 animate-bounce" />
          </div>
        ) : (
          music.duration && (
            <span className="font-mono text-[11px] text-slate-500">
              {music.duration}
            </span>
          )
        )}

        {/* Play/Pause Action Icon */}
        <div
          className={`p-1.5 rounded-full transition-colors ${
            playing
              ? "bg-copper text-[#0a0d14]"
              : "bg-white/10 text-slate-200 group-hover:bg-white/20"
          }`}
        >
          {playing ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          )}
        </div>
      </div>
    </div>
  );
}
