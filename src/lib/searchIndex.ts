import { WRITING_ARTICLES } from "@/data/writing";
import { getAllUnifiedArticles } from "./technologyArticles";
import { PROJECTS, TRAINING_PARENTS } from "@/data/projects";

export type SearchResultType = "page" | "post" | "tech" | "project";

export interface SearchDocument {
  id: string;
  title: string;
  type: SearchResultType;
  url: string;
  category?: string;
  tagline?: string;
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
 * 1. Core Page Titles (Home, Writing, About, My Work, Technology)
 * 2. Article Titles (Writing)
 * 3. Technology & Skill Titles (Technology)
 * 4. Project Titles (My Work)
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
      isPage: true,
    },
    {
      id: "page-writing",
      title: "Writing",
      type: "page",
      url: "/writing",
      category: "Page",
      tagline: "Archive of long-form technical essays and engineering retrospectives",
      isPage: true,
    },
    {
      id: "page-about",
      title: "About",
      type: "page",
      url: "/about",
      category: "Page",
      tagline: "Personal narrative, building activity & contact information",
      isPage: true,
    },
    {
      id: "page-projects",
      title: "My Work",
      type: "page",
      url: "/projects",
      category: "Page",
      tagline: "Categorized software systems, frameworks, and architecture repositories",
      isPage: true,
    },
    {
      id: "page-technology",
      title: "Technology",
      type: "page",
      url: "/technology",
      category: "Page",
      tagline: "Structured technology catalog across 8 engineering domains",
      isPage: true,
    }
  );

  // 2. Writing Article Titles
  for (const article of WRITING_ARTICLES) {
    docs.push({
      id: `writing-${article.slug}`,
      title: article.title,
      type: "post",
      url: `/writing/${article.slug}`,
      category: "Writing",
      tagline: article.excerpt,
      isPage: false,
    });
  }

  // 3. Technology & Skill Titles
  const allTechArticles = getAllUnifiedArticles();
  for (const tech of allTechArticles) {
    docs.push({
      id: `tech-${tech.slug}`,
      title: tech.title,
      type: "tech",
      url: `/technology/${tech.slug}`,
      category: tech.tier === 2 ? "Technology Deep-Dive" : tech.category,
      tagline: tech.excerpt || `Engineering notes and practical implementation details for ${tech.title}`,
      isPage: false,
    });
  }

  // 4. Project & Framework Titles
  for (const project of PROJECTS) {
    docs.push({
      id: `project-${project.id}`,
      title: project.title,
      type: "project",
      url: `/projects#${project.id}`,
      category: `My Work · ${project.category}`,
      tagline: project.tagline,
      isPage: false,
    });
  }

  for (const parent of TRAINING_PARENTS) {
    docs.push({
      id: `framework-${parent.id}`,
      title: parent.name,
      type: "project",
      url: `/projects#${parent.id}`,
      category: "Training Framework",
      tagline: parent.description,
      isPage: false,
    });
  }

  return docs;
}
