import { Metadata } from "next";
import Link from "next/link";
import { PROJECTS, TRAINING_PARENTS, ProjectCategory } from "@/data/projects";
import { CategoryFolder } from "@/components/CategoryFolder";

export const metadata: Metadata = {
  title: "My Work | Vaibhav Gupta",
  description: "A collection of things I built—some to solve real problems, some to learn how systems actually work, and some because apparently I needed another project.",
};

export default function ProjectsPage() {
  const categories: ProjectCategory[] = [
    "Applied Projects",
    "System Integrity & DevSecOps Guardrails",
    "Academic Milestones — Formal Coursework Projects",
    "Technical Training Frameworks and Practical Modules",
    "Built for No Reason Other Than Wanting To",
    "Retired Explorations and Early Builds Used to Learn System Architecture",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-6 text-slate-300">
      {/* Page Header */}
      <div className="space-y-2.5 border-b border-slate-800/80 pb-5">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          My Work
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          A collection of things I built—some to solve real problems, some to learn how systems actually work, and some because apparently I needed another project.
        </p>

        <div className="pt-1">
          <Link
            href="/technology"
            className="text-xs font-mono text-copper hover:text-copper-hover hover:underline transition-colors"
          >
            Explore Technology I’ve Worked With &rarr;
          </Link>
        </div>
      </div>

      {/* Subfolder Categories */}
      <div className="space-y-10">
        {categories.map((cat) => {
          const categoryProjects = PROJECTS.filter((p) => p.category === cat);
          if (categoryProjects.length === 0) return null;

          const isTrainingCategory =
            cat === "Technical Training Frameworks and Practical Modules";

          return (
            <CategoryFolder
              key={cat}
              categoryName={cat}
              projects={categoryProjects}
              parents={isTrainingCategory ? TRAINING_PARENTS : undefined}
              defaultOpen={
                cat === "Applied Projects" ||
                cat === "System Integrity & DevSecOps Guardrails" ||
                cat === "Academic Milestones — Formal Coursework Projects" ||
                cat === "Technical Training Frameworks and Practical Modules"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
