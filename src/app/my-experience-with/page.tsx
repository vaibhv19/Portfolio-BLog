import { Metadata } from "next";
import Link from "next/link";
import { EXPERIENCE_WITH_ARTICLES } from "@/data/experienceWith";

export const metadata: Metadata = {
  title: "My Experience With… | Technology & Concept Index",
  description: "Practical engineering experience, lessons learned, challenges, and project usage notes across individual tools and engineering concepts.",
};

export default function ExperienceWithIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
          EXPERIENCE SYSTEM INDEX
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          My Experience With…
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          A dedicated repository documenting practical lessons, trade-offs, challenges, and engineering decisions gained while working with specific technologies, frameworks, and core engineering concepts.
        </p>
      </div>

      {/* Editorial Index List */}
      <div className="divide-y divide-slate-800/60">
        {EXPERIENCE_WITH_ARTICLES.map((article, idx) => {
          const indexStr = `${idx + 1} /`;
          return (
            <div key={article.slug} className="py-5 space-y-2 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-baseline gap-3">
                  <h2 className="text-lg font-bold text-slate-100 group-hover:underline transition-all">
                    <Link href={`/my-experience-with/${article.slug}`}>
                      {indexStr} {article.title}
                    </Link>
                  </h2>
                </div>
                <span className="text-[10px] font-mono uppercase text-slate-500">{article.category}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl pl-7">
                {article.summary}
              </p>
              <div className="pl-7 pt-1">
                <Link
                  href={`/my-experience-with/${article.slug}`}
                  className="text-xs font-mono text-amber-300 hover:underline"
                >
                  Read Experience Breakdown →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
