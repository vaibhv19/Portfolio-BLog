import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllArticleSlugs,
  getTechnologyArticleBySlug,
  getTechnologyNavigation,
  getTier2Navigation,
} from "@/lib/technologyArticles";
import { ArticleFooter } from "@/components/ArticleFooter";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
}

function formatDateDDMMYYYY(dateStr: string) {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

/**
 * Renders markdown-style formatted text with link support.
 * Supports [text](url) links — both internal (/technology/slug) and external (https://...).
 */
function renderFormattedText(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | React.JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, linkText, linkUrl] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    const isExternal = linkUrl.startsWith("http://") || linkUrl.startsWith("https://");
    const isInternal = linkUrl.startsWith("/technology/");

    if (isInternal) {
      // Internal knowledge-web link — append ?from= for Tier 2 back-navigation
      parts.push(
        <Link
          key={matchIndex}
          href={linkUrl}
          className="text-sky-400 hover:underline transition-colors font-semibold"
        >
          {linkText}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={matchIndex}
          href={linkUrl}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-sky-400 hover:underline transition-colors font-semibold"
        >
          {linkText}
        </a>
      );
    }

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getTechnologyArticleBySlug(slug);
  if (!article) return { title: "Technology Article Not Found" };

  return {
    title: `${article.title} | Technology`,
    description: article.excerpt || `Practical experience and engineering notes on ${article.title}.`,
  };
}

export default async function TechnologyArticlePage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { from } = await searchParams;
  const article = getTechnologyArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Navigation based on tier
  let prevArticle: { slug: string; title: string } | null = null;
  let nextArticle: { slug: string; title: string } | null = null;
  let backLink: { slug: string; title: string } | null = null;

  if (article.tier === 1) {
    const nav = getTechnologyNavigation(slug);
    prevArticle = nav.prevArticle;
    nextArticle = nav.nextArticle;
  } else {
    const nav = getTier2Navigation(slug, from);
    backLink = nav.backLink;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-8 text-slate-300">
      {/* Article Header — Matching Writing Post layout */}
      <header className="space-y-3 border-b border-slate-800/80 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 leading-tight">
          {article.title}
        </h1>

        <div className="text-xs font-mono text-slate-400">
          <time dateTime={article.date}>{formatDateDDMMYYYY(article.date)}</time>
        </div>

        {article.excerpt && (
          <p className="text-base sm:text-lg text-slate-300 font-serif-editorial italic border-l-2 border-copper/80 pl-4 py-1 leading-relaxed">
            {article.excerpt}
          </p>
        )}
      </header>

      {/* Article Body — Flexible Markdown Rendering (matching Writing system) */}
      <div className="prose prose-invert max-w-none space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
        {article.content.map((paragraph, index) => {
          // Section heading: ## N / Title
          if (paragraph.startsWith("## ")) {
            return (
              <h2
                key={index}
                className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider border-b border-slate-800/80 pb-2 pt-4"
              >
                {renderFormattedText(paragraph.replace("## ", ""))}
              </h2>
            );
          }
          // Subheading: ### Title
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={index} className="text-lg font-bold text-sky-400 pt-4">
                {renderFormattedText(paragraph.replace("### ", ""))}
              </h3>
            );
          }
          // List items: - item\n- item
          if (paragraph.startsWith("- ")) {
            const listItems = paragraph
              .split("\n- ")
              .map((item) => item.replace(/^- /, "").trim());
            return (
              <ul
                key={index}
                className="list-disc list-inside space-y-1.5 text-slate-300 pl-2"
              >
                {listItems.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {renderFormattedText(item)}
                  </li>
                ))}
              </ul>
            );
          }
          // Regular paragraph
          return (
            <p key={index} className="leading-relaxed text-slate-300">
              {renderFormattedText(paragraph)}
            </p>
          );
        })}
      </div>

      {/* Article Footer — Tier-aware navigation */}
      <ArticleFooter
        articleTitle={article.title}
        articleSlug={article.slug}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
        backLink={backLink}
        basePath="/technology"
      />
    </div>
  );
}
