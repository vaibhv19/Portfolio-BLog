import { Metadata } from "next";
import { FolderGit2, Sparkles, Filter } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { CategoryFolder } from "@/components/CategoryFolder";

export const metadata: Metadata = {
  title: "Projects Catalog | Vaibhav Gupta",
  description: "Complete engineering project catalog organized by category: Resume, Academic, Testing QA, Training Program, and Miscellaneous.",
};

export default function ProjectsPage() {
  // Group projects by category
  const categories: Project['category'][] = [
    "For Resume",
    "Academic",
    "Testing",
    "Training Program",
    "Miscellaneous",
    "Archived"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>ENGINEERING BODY OF WORK</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Complete Projects Catalog
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Comprehensive project repository organized in a subfolder-style hierarchy across engineering domain categories. Includes full-stack production platforms, distributed caching systems, WebAssembly engine runtimes, and AI agent evaluation frameworks.
        </p>
      </div>

      {/* Subfolder Categories */}
      <div className="space-y-6">
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
