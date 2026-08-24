import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ExternalLink, Tag } from "lucide-react";
import { WRITING_ARTICLES } from "@/data/writing";
import { PROJECTS } from "@/data/projects";
import { Comments } from "@/components/Comments";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return WRITING_ARTICLES.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = WRITING_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Technical Writing`,
    description: article.excerpt,
  };
}

export default async function WritingArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = WRITING_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related projects if specified
  const relatedProjects = PROJECTS.filter((p) => article.relatedProjects?.includes(p.id));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Back to Writing archive */}
      <div>
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Writing Archive</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-800 pb-8">
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <time dateTime={article.date}>{article.date}</time>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.readingTime}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-serif-editorial italic border-l-2 border-amber-500/50 pl-4 py-1 leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      {/* Article Body */}
      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Related Projects Section if applicable */}
      {relatedProjects.length > 0 && (
        <section className="p-6 rounded-xl bg-[#131b2e]/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider font-mono">
              RELATED PROJECTS &amp; EVIDENCE
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map((proj) => (
              <div key={proj.id} className="p-4 rounded-lg bg-[#0d1322] border border-slate-800 space-y-1 text-xs">
                <div className="font-bold text-slate-100">{proj.title}</div>
                <p className="text-slate-400">{proj.tagline}</p>
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-300 hover:underline pt-2 text-[11px]"
                  >
                    <span>Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Comments Area */}
      <Comments articleSlug={article.slug} />
    </div>
  );
}
