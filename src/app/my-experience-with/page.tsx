import { Metadata } from "next";
import Link from "next/link";
import { Cpu, ArrowRight, BookOpen, Layers } from "lucide-react";
import { EXPERIENCE_WITH_ARTICLES } from "@/data/experienceWith";

export const metadata: Metadata = {
  title: "My Experience With… | Technology & Concept Index",
  description: "Practical engineering experience, lessons learned, challenges, and project usage notes across individual tools and engineering concepts.",
};

export default function ExperienceWithIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>SEPARATE EXPERIENCE SYSTEM</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          My Experience With… Index
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          A dedicated repository documenting practical lessons, trade-offs, challenges, and engineering decisions gained while working with specific technologies, frameworks, and core engineering concepts.
        </p>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERIENCE_WITH_ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/my-experience-with/${article.slug}`}
            className="flex flex-col justify-between p-6 rounded-xl bg-[#131b2e]/80 border border-slate-800 hover:border-amber-500/40 transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                  {article.category}
                </span>
                <span className="text-xs text-slate-500 font-mono">Article</span>
              </div>
              <h2 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                {article.title}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-amber-300 font-medium">
              <span>Read Experience Breakdown</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
