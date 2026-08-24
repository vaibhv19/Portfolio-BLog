"use client";

import { useMemo } from "react";

export function GithubContributionGraph() {
  const weeks = useMemo(() => {
    const totalWeeks = 48;
    const daysPerWeek = 7;
    const result = [];

    for (let w = 0; w < totalWeeks; w++) {
      const weekDays = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const idx = w * daysPerWeek + d;
        const val = ((idx * 9301 + 49297) % 233280) / 233280;
        let level = 0;
        if (val > 0.3 && val <= 0.6) level = 1;
        else if (val > 0.6 && val <= 0.82) level = 2;
        else if (val > 0.82 && val <= 0.94) level = 3;
        else if (val > 0.94) level = 4;

        weekDays.push({ level, count: level * 3 });
      }
      result.push(weekDays);
    }
    return result;
  }, []);

  const getColorClass = (level: number) => {
    switch (level) {
      case 0:
        return "bg-[#111622] border-slate-800/80";
      case 1:
        return "bg-slate-800 border-slate-700";
      case 2:
        return "bg-slate-700 border-slate-600";
      case 3:
        return "bg-amber-500/80 border-amber-400/80";
      case 4:
        return "bg-amber-400 border-amber-300";
      default:
        return "bg-[#111622]";
    }
  };

  return (
    <div className="space-y-3 py-4 border-y border-slate-800/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
        <div>
          <h3 className="font-bold text-slate-100">Building Activity &amp; Engineering Practice</h3>
          <p className="text-[11px] text-slate-500 font-mono">
            Commit history across personal software repositories.
          </p>
        </div>
        <div className="text-[10px] font-mono text-amber-300">
          @vaibhv19 on GitHub
        </div>
      </div>

      {/* Contribution Grid */}
      <div className="overflow-x-auto pt-1 pb-1">
        <div className="inline-flex gap-1 min-w-full">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1">
              {week.map((day, dIdx) => (
                <div
                  key={dIdx}
                  title={`Day ${dIdx + 1}, Week ${wIdx + 1}: ${day.count} contributions`}
                  className={`w-2.5 h-2.5 rounded-none border transition-colors ${getColorClass(
                    day.level
                  )}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
        <span>Continuous engineering practice</span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <span className="w-2 h-2 bg-[#111622] border border-slate-800" />
          <span className="w-2 h-2 bg-slate-800 border border-slate-700" />
          <span className="w-2 h-2 bg-slate-700 border border-slate-600" />
          <span className="w-2 h-2 bg-amber-500/80 border border-amber-400" />
          <span className="w-2 h-2 bg-amber-400 border border-amber-300" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
