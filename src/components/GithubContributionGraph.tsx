"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  GitHubContributionsData,
  DEFAULT_GITHUB_USERNAME,
  getFallbackContributions,
} from "@/lib/github";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function GithubContributionGraph() {
  const [data, setData] = useState<GitHubContributionsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const res = await fetch("/api/github-contributions");
        if (res.ok) {
          const json: GitHubContributionsData = await res.json();
          if (isMounted && json && json.weeks && json.weeks.length > 0) {
            setData(json);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to fetch contribution data from API:", err);
      }

      if (isMounted) {
        // Fallback gracefully without breaking UI
        setData(getFallbackContributions(DEFAULT_GITHUB_USERNAME));
        setIsLoading(false);
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const getColorClass = (level: number) => {
    switch (level) {
      case 0:
        return "bg-[#111622] border-slate-800/80";
      case 1:
        return "bg-[#3A2A1A] border-[#523b24]";
      case 2:
        return "bg-[#70451C] border-[#8c5724]";
      case 3:
        return "bg-[#A86A1E] border-[#c47c23]";
      case 4:
        return "bg-[#D99524] border-[#e8a22a]";
      case 5:
        return "bg-[#F5B32F] border-[#f7c259]";
      default:
        return "bg-[#111622] border-slate-800/80";
    }
  };

  const username = data?.username || DEFAULT_GITHUB_USERNAME;
  const totalContributions = data?.totalContributions || 0;
  const weeks = data?.weeks || [];

  // Calculate month label positions across week columns
  const monthLabels: { month: string; weekIndex: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, wIdx) => {
    const firstDayWithDate = week.find((d) => d && d.date);
    if (firstDayWithDate) {
      const date = new Date(firstDayWithDate.date);
      if (!isNaN(date.getTime())) {
        const month = date.getMonth();
        if (month !== lastMonth) {
          if (
            (monthLabels.length === 0 || wIdx - monthLabels[monthLabels.length - 1].weekIndex >= 2) &&
            wIdx <= weeks.length - 2
          ) {
            monthLabels.push({
              month: date.toLocaleDateString("en-US", { month: "short" }),
              weekIndex: wIdx,
            });
          }
          lastMonth = month;
        }
      }
    }
  });

  return (
    <div className="space-y-2.5">
      {/* Section Subtitle */}
      <div>
        <p className="text-[11px] sm:text-xs text-slate-400 font-mono italic">
          {isLoading
            ? "Fetching GitHub contribution calendar..."
            : `${totalContributions.toLocaleString()} contributions across personal software repositories.`}
        </p>
      </div>

      {/* Contribution Grid with Axis Labels */}
      <div className="overflow-x-auto pt-1 pb-1">
        <div className="inline-block min-w-full">
          {/* Month Labels (Top) */}
          <div className="flex gap-1.5 items-center mb-1 select-none">
            <div className="w-[22px] shrink-0" aria-hidden="true" />
            <div className="relative h-3 w-full">
              {monthLabels.map(({ month, weekIndex }) => (
                <span
                  key={`${month}-${weekIndex}`}
                  className="absolute text-[9px] text-slate-400 font-mono leading-none select-none"
                  style={{ left: `${weekIndex * 14}px` }}
                >
                  {month}
                </span>
              ))}
            </div>
          </div>

          {/* Heatmap Grid Row (Weekday Labels + Day Cells) */}
          <div className="flex gap-1.5 items-start">
            {/* Weekday Labels (Left: Mon, Wed, Fri) */}
            <div className="w-[22px] shrink-0 flex flex-col gap-1 select-none text-right pr-0.5">
              <div className="h-2.5 text-[9px] text-transparent font-mono leading-none select-none" aria-hidden="true">
                Sun
              </div>
              <div className="h-2.5 flex items-center justify-end text-[9px] text-slate-400 font-mono leading-none">
                Mon
              </div>
              <div className="h-2.5 text-[9px] text-transparent font-mono leading-none select-none" aria-hidden="true">
                Tue
              </div>
              <div className="h-2.5 flex items-center justify-end text-[9px] text-slate-400 font-mono leading-none">
                Wed
              </div>
              <div className="h-2.5 text-[9px] text-transparent font-mono leading-none select-none" aria-hidden="true">
                Thu
              </div>
              <div className="h-2.5 flex items-center justify-end text-[9px] text-slate-400 font-mono leading-none">
                Fri
              </div>
              <div className="h-2.5 text-[9px] text-transparent font-mono leading-none select-none" aria-hidden="true">
                Sat
              </div>
            </div>

            {/* Grid Columns */}
            {isLoading ? (
              <div className="flex gap-1 animate-pulse">
                {Array.from({ length: 48 }).map((_, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, dIdx) => (
                      <div
                        key={dIdx}
                        className="w-2.5 h-2.5 bg-[#111622] border border-slate-800/80"
                      />
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="inline-flex gap-1">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        title={`${day.count} contribution${
                          day.count === 1 ? "" : "s"
                        } on ${formatDate(day.date)}`}
                        className={`w-2.5 h-2.5 rounded-none border transition-colors ${getColorClass(
                          day.level
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end text-[10px] font-mono text-slate-500 pt-0.5">
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <span className="w-2 h-2 bg-[#111622] border border-slate-800/80" title="No contributions" />
          <span className="w-2 h-2 bg-[#3A2A1A] border border-[#523b24]" title="1-3 contributions" />
          <span className="w-2 h-2 bg-[#70451C] border border-[#8c5724]" title="4-6 contributions" />
          <span className="w-2 h-2 bg-[#A86A1E] border border-[#c47c23]" title="7-9 contributions" />
          <span className="w-2 h-2 bg-[#D99524] border border-[#e8a22a]" title="10-12 contributions" />
          <span className="w-2 h-2 bg-[#F5B32F] border border-[#f7c259]" title="13+ contributions" />
          <span>More</span>
        </div>
      </div>

      {/* Open Source Note */}
      <p className="text-sm sm:text-base text-slate-200 leading-relaxed pt-1.5">
        All of{" "}
        <Link
          href="/projects"
          className="text-copper hover:text-copper-hover hover:underline transition-colors font-medium"
        >
          my work
        </Link>{" "}
        is released as open source, in case that&apos;s useful to someone else.
      </p>

      {/* Natural Closing Sentence */}
      <p className="text-sm sm:text-base text-slate-200 leading-relaxed pt-1">
        You can read{" "}
        <Link
          href="/writing/why-i-chose-to-become-an-engineer"
          className="text-copper hover:text-copper-hover hover:underline transition-colors font-medium"
        >
          why I chose to become an engineer
        </Link>
        , follow what I’m building on{" "}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-copper hover:text-copper-hover hover:underline transition-colors font-medium"
        >
          GitHub
        </a>
        , and check my algorithmic practice on{" "}
        <a
          href="https://leetcode.com/u/vaibhv_19/"
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
