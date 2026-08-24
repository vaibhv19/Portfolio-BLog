import { Metadata } from "next";
import Link from "next/link";
import { WRITING_ARTICLES } from "@/data/writing";

export const metadata: Metadata = {
  title: "Technical Writing & Retrospectives | Vaibhav Gupta",
  description: "Chronological engineering archive exploring project retrospectives, system comparisons, architectural decisions, and learning reflections.",
};

export default function WritingArchivePage() {
  const articles = [...WRITING_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
          PUBLICATION ARCHIVE
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Technical Writing &amp; Retrospectives
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Thoughts on software systems, architectural decisions, experiments, cross-project comparisons, and reflections on the engineering process.
        </p>

        <div className="pt-2">
          <Link
            href="/my-experience-with"
            className="text-xs font-mono text-amber-300 hover:underline"
          >
            Read My Experience With… Index →
          </Link>
        </div>
      </div>

      {/* Chronological Clean Archive List */}
      <div className="space-y-8">
        {articles.map((article, idx) => {
          const indexStr = (idx + 1).toString().padStart(2, "0");
          return (
            <article
              key={article.slug}
              className="border-b border-slate-800/60 pb-8 space-y-3 group"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400/80 font-bold">{indexStr}</span>
                  <time dateTime={article.date}>{article.date}</time>
                </div>
                <span>{article.readingTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                <Link href={`/writing/${article.slug}`}>{article.title}</Link>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {article.excerpt}
              </p>

              <div className="pt-1">
                <Link
                  href={`/writing/${article.slug}`}
                  className="text-xs font-mono text-amber-300 hover:underline"
                >
                  Continue Reading →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
