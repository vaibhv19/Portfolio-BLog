import { Metadata } from "next";
import { PROJECTS, Project } from "@/data/projects";
import { CategoryFolder } from "@/components/CategoryFolder";

export const metadata: Metadata = {
  title: "Projects Catalog | Vaibhav Gupta",
  description: "Complete engineering project catalog organized by category: Resume, Academic, Testing QA, Training Program, and Miscellaneous.",
};

export default function ProjectsPage() {
  const categories: Project['category'][] = [
    "For Resume",
    "Academic",
    "Testing",
    "Training Program",
    "Miscellaneous",
    "Archived"
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
          ENGINEERING CATALOG
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Complete Projects Index
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Comprehensive engineering project inventory organized in an editorial index hierarchy across domain categories. Includes full-stack production platforms, distributed caching systems, WebAssembly engine runtimes, and AI agent evaluation frameworks.
        </p>
      </div>

      {/* Subfolder Categories */}
      <div className="space-y-10">
        {categories.map((cat) => {
          const categoryProjects = PROJECTS.filter((p) => p.category === cat);
          if (categoryProjects.length === 0) return null;

          return (
            <CategoryFolder
              key={cat}
              categoryName={cat}
              projects={categoryProjects}
              defaultOpen={cat === "For Resume" || cat === "Academic" || cat === "Testing"}
            />
          );
        })}
      </div>
    </div>
  );
}
