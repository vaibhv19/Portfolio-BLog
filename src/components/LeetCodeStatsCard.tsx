"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { LeetCodeIcon } from "@/components/BrandIcons";
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

  const easyPercent = stats.totalSolved > 0
    ? (stats.easySolved / stats.totalSolved) * 100
    : 0;
  const mediumPercent = stats.totalSolved > 0
    ? (stats.mediumSolved / stats.totalSolved) * 100
    : 0;
  const hardPercent = stats.totalSolved > 0
    ? (stats.hardSolved / stats.totalSolved) * 100
    : 0;

  return (
    <div className="border border-slate-800/80 bg-[#0f1420]/60 backdrop-blur-xs rounded-lg p-4 sm:p-5 space-y-4">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/60">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-[#161c2c] border border-slate-800 text-copper">
            <LeetCodeIcon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-2">
              <span>LeetCode Practice</span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live Data
              </span>
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
              Algorithmic problem-solving and data structure implementations.
            </p>
          </div>
        </div>

        <a
          href={`https://leetcode.com/u/${stats.username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-slate-400 hover:text-sky-400 inline-flex items-center gap-1.5 transition-colors self-start sm:self-center"
        >
          <span>@{stats.username}</span>
          <ExternalLink className="w-3 h-3 text-copper" />
        </a>
      </div>

      {/* 2. Main Stats & Progress */}
      {isLoading ? (
        <div className="space-y-3.5 animate-pulse py-2">
          <div className="h-10 bg-slate-800/50 rounded" />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 bg-slate-800/50 rounded" />
            <div className="h-16 bg-slate-800/50 rounded" />
            <div className="h-16 bg-slate-800/50 rounded" />
          </div>
        </div>
      ) : (
        <div className="space-y-3.5">
          {/* Top Level Summary Row */}
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-slate-100">
                {stats.totalSolved}
              </span>
              <span className="text-xs font-mono text-slate-400">
                problems solved
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              {stats.ranking && (
                <div className="flex items-center gap-1">
                  <span>Ranking:</span>
                  <span className="text-slate-200 font-semibold">
                    #{stats.ranking.toLocaleString()}
                  </span>
                </div>
              )}
              {stats.acceptanceRate && (
                <div className="hidden xs:flex items-center gap-1">
                  <span>Accuracy:</span>
                  <span className="text-slate-200 font-semibold">
                    {stats.acceptanceRate}%
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Unified Difficulty Distribution Bar */}
          <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden flex">
            <div
              style={{ width: `${easyPercent}%` }}
              className="bg-emerald-500 transition-all duration-500"
              title={`Easy: ${stats.easySolved} (${Math.round(easyPercent)}%)`}
            />
            <div
              style={{ width: `${mediumPercent}%` }}
              className="bg-amber-500 transition-all duration-500"
              title={`Medium: ${stats.mediumSolved} (${Math.round(mediumPercent)}%)`}
            />
            <div
              style={{ width: `${hardPercent}%` }}
              className="bg-rose-500 transition-all duration-500"
              title={`Hard: ${stats.hardSolved} (${Math.round(hardPercent)}%)`}
            />
          </div>

          {/* 3. Three Difficulty Metric Boxes */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-1">
            {/* Easy Card */}
            <div className="rounded border border-emerald-900/40 bg-emerald-950/20 p-2.5 sm:p-3 space-y-1">
              <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Easy
              </div>
              <div className="text-base sm:text-xl font-bold font-mono text-slate-100">
                {stats.easySolved}
                <span className="text-[11px] sm:text-xs text-slate-400 font-normal ml-1">
                  / {stats.totalEasy}
                </span>
              </div>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500"
                  style={{
                    width: `${Math.min(
                      100,
                      (stats.easySolved / stats.totalEasy) * 100
                    )}%`,
                  }}
                />
              </div>
            </div>

            {/* Medium Card */}
            <div className="rounded border border-amber-900/40 bg-amber-950/20 p-2.5 sm:p-3 space-y-1">
              <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                Medium
              </div>
              <div className="text-base sm:text-xl font-bold font-mono text-slate-100">
                {stats.mediumSolved}
                <span className="text-[11px] sm:text-xs text-slate-400 font-normal ml-1">
                  / {stats.totalMedium}
                </span>
              </div>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500"
                  style={{
                    width: `${Math.min(
                      100,
                      (stats.mediumSolved / stats.totalMedium) * 100
                    )}%`,
                  }}
                />
              </div>
            </div>

            {/* Hard Card */}
            <div className="rounded border border-rose-900/40 bg-rose-950/20 p-2.5 sm:p-3 space-y-1">
              <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                Hard
              </div>
              <div className="text-base sm:text-xl font-bold font-mono text-slate-100">
                {stats.hardSolved}
                <span className="text-[11px] sm:text-xs text-slate-400 font-normal ml-1">
                  / {stats.totalHard}
                </span>
              </div>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-500"
                  style={{
                    width: `${Math.min(
                      100,
                      (stats.hardSolved / stats.totalHard) * 100
                    )}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
