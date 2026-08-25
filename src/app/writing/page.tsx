import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { WRITING_ARTICLES } from "@/data/writing";

export const metadata: Metadata = {
  title: "All Blogs | Vaibhav Gupta",
  description: "Chronological engineering archive exploring project retrospectives, system comparisons, architectural decisions, and learning reflections.",
};

function getMonthYearLabel(dateStr: string) {
  const [year, month] = dateStr.split("-");
  const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];
  const mIndex = parseInt(month, 10) - 1;
  return `${monthNames[mIndex]} ${year}`;
}

function formatDateDDMMYYYY(dateStr: string) {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

export default function WritingArchivePage() {
  const articles = [...WRITING_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-6 text-slate-300">
      {/* Page Header */}
      <div className="space-y-2.5 border-b border-slate-800/80 pb-5">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          All Blogs
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Thoughts on software systems, architectural decisions, experiments, cross-project comparisons, and reflections on the engineering process.
        </p>

        <div className="pt-1">
          <Link
            href="/my-experience-with"
            className="text-xs font-mono text-copper hover:underline transition-all"
          >
            Explore Technology I’ve Worked With &rarr;
          </Link>
        </div>
      </div>

      {/* Chronological Clean Archive List grouped by Month */}
      <div className="space-y-6">
        {articles.map((article, idx) => {
          const indexStr = `${articles.length - idx} /`;
          const currentMonth = article.date.substring(0, 7);
          const prevMonth = idx > 0 ? articles[idx - 1].date.substring(0, 7) : null;
          const isNewMonthGroup = idx === 0 || currentMonth !== prevMonth;

          return (
            <React.Fragment key={article.slug}>
              {isNewMonthGroup && (
                <div className={`space-y-2 ${idx > 0 ? "pt-6" : "pt-2"}`}>
                  <div className="text-xs font-mono font-bold tracking-widest text-slate-400">
                    {getMonthYearLabel(article.date)}
                  </div>
                  <div className="border-b border-slate-800/80" />
                </div>
              )}

              <article className="space-y-1.5 group">
                <h2 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:underline transition-all">
                  <Link href={`/writing/${article.slug}`}>
                    {indexStr} {article.title}
                  </Link>
                </h2>

                <div className="text-xs font-mono text-slate-400">
                  <time dateTime={article.date}>{formatDateDDMMYYYY(article.date)}</time>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
