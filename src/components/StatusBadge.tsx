"use client";

import { useState } from "react";
import { Coffee } from "lucide-react";

export function StatusBadge() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="absolute bottom-0 right-0 sm:bottom-0.5 sm:right-0.5 z-20 flex items-center justify-end"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <button
        type="button"
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-label="Status: Overdosed on caffeine."
        className="group relative flex items-center h-7 sm:h-7.5 rounded-full border border-slate-800 bg-[#111622] hover:border-slate-700/80 transition-all duration-300 ease-out motion-reduce:transition-none focus:outline-none focus-visible:ring-1 focus-visible:ring-slate-400/50 p-1.5 cursor-pointer text-slate-400 hover:text-slate-300 shadow-sm"
      >
        {/* Muted monochrome coffee icon */}
        <Coffee className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-300 flex-shrink-0 transition-colors" />

        {/* Smooth horizontal expanding text label */}
        <span
          className={`inline-flex items-center overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${
            isExpanded
              ? "max-w-[180px] opacity-100 ml-1.5 mr-0.5"
              : "max-w-0 opacity-0 ml-0 mr-0"
          }`}
        >
          <span className="text-[11px] font-mono whitespace-nowrap text-slate-300 tracking-tight">
            Overdosed on caffeine.
          </span>
        </span>
      </button>
    </div>
  );
}
