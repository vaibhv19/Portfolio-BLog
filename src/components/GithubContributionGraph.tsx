"use client";

import { useMemo } from "react";

export function GithubContributionGraph() {
  // Generate sample structured contribution data matching the Van Gogh midnight theme palette
  const weeks = useMemo(() => {
    const totalWeeks = 48;
    const daysPerWeek = 7;
    const result = [];

    // Seed pseudo-random reproducible pattern representing consistent building
    let seed = 42;
    const pseudoRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let w = 0; w < totalWeeks; w++) {
      const weekDays = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const val = pseudoRandom();
        let level = 0;
        if (val > 0.3 && val <= 0.6) level = 1; // Deep blue / low
        else if (val > 0.6 && val <= 0.82) level = 2; // Cobalt / medium
        else if (val > 0.82 && val <= 0.94) level = 3; // Starlight / high
        else if (val > 0.94) level = 4; // Gold / peak

        weekDays.push({ level, count: level * 3 });
      }
      result.push(weekDays);
    }
    return result;
  }, []);

  const getColorClass = (level: number) => {
    switch (level) {
      case 0:
        return "bg-[#0f172a] border-slate-800/60"; // Midnight no activity
      case 1:
        return "bg-blue-900/60 border-blue-800/40"; // Low activity
      case 2:
        return "bg-blue-600/80 border-blue-500/50"; // Cobalt medium
      case 3:
        return "bg-amber-400/80 border-amber-300/60"; // Starlight high
      case 4:
        return "bg-amber-300 border-amber-200 shadow-sm shadow-amber-300/50"; // Peak Gold
      default:
        return "bg-[#0f172a]";
    }
  };

  return (
    <div className="p-6 rounded-xl bg-[#131b2e]/80 border border-slate-800/80 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="font-bold text-slate-100 text-base">Building Activity &amp; Consistency</h3>
          <p className="text-xs text-slate-400">
            GitHub contribution commits representing long-term engineering practice.
          </p>
        </div>
        <div className="text-xs font-mono text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
          vaibhv19 on GitHub
        </div>
      </div>

      {/* Contribution Grid */}
      <div className="overflow-x-auto pt-2 pb-1">
        <div className="inline-flex gap-1.5 min-w-full">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1.5">
              {week.map((day, dIdx) => (
                <div
                  key={dIdx}
                  title={`Day ${dIdx + 1}, Week ${wIdx + 1}: ${day.count} contributions`}
                  className={`w-3 h-3 rounded-sm border transition-colors ${getColorClass(
                    day.level
                  )}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-[10px] font-mono text-slate-400">
        <div>Continuous building habit</div>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <span className="w-2.5 h-2.5 rounded-sm bg-[#0f172a] border border-slate-800" />
          <span className="w-2.5 h-2.5 rounded-sm bg-blue-900/60 border border-blue-800" />
          <span className="w-2.5 h-2.5 rounded-sm bg-blue-600/80 border border-blue-500" />
          <span className="w-2.5 h-2.5 rounded-sm bg-amber-400/80 border border-amber-300" />
          <span className="w-2.5 h-2.5 rounded-sm bg-amber-300 border border-amber-200" />
          <span>More (Gold)</span>
        </div>
      </div>
    </div>
  );
}
