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

  return (
    <div className="space-y-3 py-2">
      {/* Section Subtitle */}
      <div>
        <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
          {isLoading
            ? "Fetching GitHub contribution calendar..."
            : `${totalContributions.toLocaleString()} contributions across personal software repositories.`}
        </p>
      </div>

      {/* Contribution Grid */}
      <div className="overflow-x-auto pt-1 pb-1">
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
          <div className="inline-flex gap-1 min-w-full">
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

      {/* Legend */}
      <div className="flex items-center justify-end text-[10px] font-mono text-slate-500 pt-1">
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

      {/* Natural Closing Sentence */}
      <p className="text-sm sm:text-base text-slate-200 leading-relaxed pt-3">
        You can read{" "}
        <Link
          href="/writing/why-i-chose-to-become-an-engineer"
          className="text-copper hover:text-copper-hover hover:underline transition-colors font-medium"
        >
          why I chose to become an engineer
        </Link>
        , then follow what I’m building on{" "}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-copper hover:text-copper-hover hover:underline transition-colors font-medium"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
