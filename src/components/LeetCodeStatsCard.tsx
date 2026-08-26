"use client";

import { useEffect, useState } from "react";
import {
  LeetCodeStatsData,
  DEFAULT_LEETCODE_USERNAME,
  getFallbackLeetCodeStats,
} from "@/lib/leetcode";

export function LeetCodeStatsCard() {
  const [data, setData] = useState<LeetCodeStatsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const res = await fetch("/api/leetcode-stats");
        if (res.ok) {
          const json: LeetCodeStatsData = await res.json();
          if (isMounted && json && typeof json.totalSolved === "number") {
            setData(json);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to fetch LeetCode statistics:", err);
      }

      if (isMounted) {
        // Fallback gracefully to snapshot
        setData(getFallbackLeetCodeStats(DEFAULT_LEETCODE_USERNAME));
        setIsLoading(false);
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const stats = data || getFallbackLeetCodeStats(DEFAULT_LEETCODE_USERNAME);

  return (
    <div className="space-y-3 py-2">
      {/* Dynamic Rank Subtitle */}
      <div>
        <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
          {isLoading
            ? "Fetching LeetCode rank..."
            : stats.ranking
            ? `Rank: ${stats.ranking.toLocaleString()}`
            : null}
        </p>
      </div>

      {/* Metrics Row */}
      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-1 animate-pulse">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="border-l-2 border-slate-800/80 pl-3 py-1 space-y-1"
            >
              <div className="h-6 w-12 bg-slate-800/60" />
              <div className="h-3 w-16 bg-slate-800/40" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-1">
          {/* Total Solved */}
          <div className="border-l-2 border-copper pl-3 py-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100">
              {stats.totalSolved}
            </div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Total Solved
            </div>
          </div>

          {/* Easy */}
          <div className="border-l-2 border-slate-800/80 pl-3 py-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100">
              {stats.easySolved}
            </div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Easy
            </div>
          </div>

          {/* Medium */}
          <div className="border-l-2 border-slate-800/80 pl-3 py-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100">
              {stats.mediumSolved}
            </div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Medium
            </div>
          </div>

          {/* Hard */}
          <div className="border-l-2 border-slate-800/80 pl-3 py-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100">
              {stats.hardSolved}
            </div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Hard
            </div>
          </div>
        </div>
      )}

      {/* Natural Closing Sentence */}
      <p className="text-sm sm:text-base text-slate-200 leading-relaxed pt-2">
        You can inspect my continuous algorithmic practice and problem submissions on{" "}
        <a
          href={`https://leetcode.com/u/${stats.username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-copper hover:text-copper-hover hover:underline transition-colors font-medium"
        >
          LeetCode
        </a>
        .
      </p>
    </div>
  );
}
