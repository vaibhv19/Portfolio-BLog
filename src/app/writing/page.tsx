import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight, Cpu, Sparkles } from "lucide-react";
import { WRITING_ARTICLES } from "@/data/writing";

export const metadata: Metadata = {
  title: "Technical Writing & Retrospectives | Vaibhav Gupta",
  description: "Chronological engineering archive exploring project retrospectives, system comparisons, architectural decisions, and learning reflections.",
};

export default function WritingArchivePage() {
  // Sort articles chronologically by date descending
  const articles = [...WRITING_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <FileText className="w-3.5 h-3.5" />
          <span>CHRONOLOGICAL WRITING ARCHIVE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Technical Writing &amp; Retrospectives
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Thoughts on software systems, architectural decisions, experiments, cross-project comparisons, and reflections on the engineering process.
        </p>

        {/* Mandatory Navigation Link to My Experience With... near top */}
        <div className="pt-2">
          <Link
            href="/my-experience-with"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-medium transition-colors"
          >
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Read My Experience With… Index →</span>
          </Link>
        </div>
      </div>

      {/* Chronological Article List */}
      <div className="space-y-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="p-6 sm:p-8 rounded-xl bg-[#131b2e]/60 border border-slate-800/80 hover:border-amber-500/40 transition-all space-y-4 group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <time dateTime={article.date}>{article.date}</time>
              <span>{article.readingTime}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
              <Link href={`/writing/${article.slug}`}>{article.title}</Link>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="pt-2">
              <Link
                href={`/writing/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors"
              >
                <span>Continue Reading →</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
