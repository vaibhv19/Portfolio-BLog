import { WRITING_ARTICLES, WritingArticle } from "@/data/writing";

export interface BlogNavigationResult {
  nextArticle: WritingArticle | null;
  prevArticle: WritingArticle | null;
}

export function getBlogNavigation(currentSlug: string): BlogNavigationResult {
  const sortedArticles = [...WRITING_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const currentIndex = sortedArticles.findIndex((a) => a.slug === currentSlug);

  if (currentIndex === -1) {
    return { nextArticle: null, prevArticle: null };
  }

  // Next Post is chronologically newer (closer to index 0)
  const nextArticle = currentIndex > 0 ? sortedArticles[currentIndex - 1] : null;

  // Previous Post is chronologically older (further from index 0)
  const prevArticle =
    currentIndex < sortedArticles.length - 1 ? sortedArticles[currentIndex + 1] : null;

  return { nextArticle, prevArticle };
}
