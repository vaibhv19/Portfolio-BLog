import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { WRITING_ARTICLES } from "@/data/writing";
import { PROJECTS } from "@/data/projects";
import { Comments } from "@/components/Comments";

import { ArticleFooter } from "@/components/ArticleFooter";

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
  const currentIndex = WRITING_ARTICLES.findIndex((a) => a.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const article = WRITING_ARTICLES[currentIndex];
  const relatedProjects = PROJECTS.filter((p) => article.relatedProjects?.includes(p.id));

  const prevArticle =
    currentIndex < WRITING_ARTICLES.length - 1
      ? WRITING_ARTICLES[currentIndex + 1]
      : null;

  const nextArticle = currentIndex > 0 ? WRITING_ARTICLES[currentIndex - 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back link */}
      <div>
        <Link
          href="/writing"
          className="text-xs font-mono text-slate-400 hover:text-slate-100 transition-colors inline-flex items-center gap-1"
        >
          <ArrowLeft className="w-3 h-3" />
          <span>Back to Writing Archive</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-800 pb-6">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500">
          <time dateTime={article.date}>{article.date}</time>
          <span>{article.readingTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 leading-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-serif-editorial italic border-l-2 border-amber-400/80 pl-4 py-1 leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      {/* Article Body */}
      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="pt-6 border-t border-slate-800 space-y-3">
          <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
            RELATED PROJECTS &amp; EVIDENCE
          </div>
          <div className="space-y-3">
            {relatedProjects.map((proj) => (
              <div key={proj.id} className="py-2 border-b border-slate-800/40 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-100">{proj.title}</span>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:underline text-[11px] font-mono inline-flex items-center gap-1"
                    >
                      <span>Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <p className="text-slate-400">{proj.tagline}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Comments Area */}
      <Comments articleSlug={article.slug} />

      {/* Blog Detail Footer */}
      <ArticleFooter
        articleTitle={article.title}
        articleSlug={article.slug}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
      />
    </div>
  );
}
