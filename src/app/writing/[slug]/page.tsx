import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WRITING_ARTICLES } from "@/data/writing";
import { ArticleFooter } from "@/components/ArticleFooter";
import { getBlogNavigation } from "@/lib/blogNavigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatDateDDMMYYYY(dateStr: string) {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

function renderFormattedText(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, linkText, linkUrl] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    const isExternal = linkUrl.startsWith("http://") || linkUrl.startsWith("https://");

    parts.push(
      <a
        key={matchIndex}
        href={linkUrl}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-copper hover:text-copper-hover hover:underline transition-colors font-semibold"
      >
        {linkText}
      </a>
    );

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
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

  const { nextArticle, prevArticle } = getBlogNavigation(slug);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-8 text-slate-300">
      {/* Article Header */}
      <header className="space-y-3 border-b border-slate-800/80 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 leading-tight">
          {article.title}
        </h1>

        <div className="text-xs font-mono text-slate-400">
          <time dateTime={article.date}>{formatDateDDMMYYYY(article.date)}</time>
        </div>

        <p className="text-base sm:text-lg text-slate-300 font-serif-editorial italic border-l-2 border-copper/80 pl-4 py-1 leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      {/* Article Body */}
      <div className="prose prose-invert max-w-none space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
        {article.content.map((paragraph, index) => {
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={index} className="text-xl sm:text-2xl font-bold text-slate-100 pt-6 border-b border-slate-800/80 pb-2">
                {renderFormattedText(paragraph.replace("## ", ""))}
              </h2>
            );
          }
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={index} className="text-lg font-bold text-sky-400 pt-4">
                {renderFormattedText(paragraph.replace("### ", ""))}
              </h3>
            );
          }
          if (paragraph.startsWith("- ")) {
            const listItems = paragraph.split("\n- ").map((item) => item.replace(/^- /, "").trim());
            return (
              <ul key={index} className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
                {listItems.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {renderFormattedText(item)}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={index} className="leading-relaxed text-slate-300">
              {renderFormattedText(paragraph)}
            </p>
          );
        })}
      </div>

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
