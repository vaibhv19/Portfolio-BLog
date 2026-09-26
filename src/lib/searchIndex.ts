import { WRITING_ARTICLES } from "@/data/writing";

export type SearchResultType = "page" | "post";

export interface SearchDocument {
  id: string;
  title: string;
  type: SearchResultType;
  url: string;
  category?: string;
  tagline?: string;
  searchableContent?: string;
  isPage: boolean;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Builds a search index containing strictly:
 * 1. Core Page Titles (Home, Writing, About)
 * 2. Article Titles, Excerpts, and Content Keywords (Writing)
 */
export function buildSearchIndex(): SearchDocument[] {
  const docs: SearchDocument[] = [];

  // 1. Core Pages
  docs.push(
    {
      id: "page-home",
      title: "Home",
      type: "page",
      url: "/",
      category: "Page",
      tagline: "Personal portfolio, software architecture & systems writing",
      searchableContent: "portfolio software architecture systems engineering distributed",
      isPage: true,
    },
    {
      id: "page-writing",
      title: "Writing",
      type: "page",
      url: "/writing",
      category: "Page",
      tagline: "Archive of long-form technical essays and engineering retrospectives",
      searchableContent: "writing blog essays articles architecture retrospectives",
      isPage: true,
    },
    {
      id: "page-about",
      title: "About",
      type: "page",
      url: "/about",
      category: "Page",
      tagline: "Personal narrative, building activity & contact information",
      searchableContent: "about bio contact background story experience",
      isPage: true,
    }
  );

  // 2. Writing Article Titles, Excerpts & Content
  for (const article of WRITING_ARTICLES) {
    const rawContent = (article.content || [])
      .join(" ")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .slice(0, 4000);

    docs.push({
      id: `writing-${article.slug}`,
      title: article.title,
      type: "post",
      url: `/writing/${article.slug}`,
      category: "Writing",
      tagline: article.excerpt,
      searchableContent: `${article.title} ${article.excerpt} ${rawContent}`,
      isPage: false,
    });
  }

  return docs;
}
