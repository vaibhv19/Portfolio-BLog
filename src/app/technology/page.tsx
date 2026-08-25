import { Metadata } from "next";
import { TECHNOLOGY_CATEGORIES } from "@/data/technologyInventory";
import { TechnologyCategoryFolder } from "@/components/TechnologyCategoryFolder";

export const metadata: Metadata = {
  title: "Technology | Vaibhav Gupta",
  description: "Practical engineering experience, lessons learned, challenges, and project usage notes across individual tools and engineering concepts.",
};

export default function TechnologyIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-6 text-slate-300">
      {/* Page Header matching Writing & My Work structure */}
      <div className="space-y-2.5 border-b border-slate-800/80 pb-5">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Technology I've Worked With
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Click any technology title to explore my experience, practical work, and lessons learned with it.
        </p>
      </div>

      {/* Categorized Technology Folders */}
      <div className="space-y-8 pt-2">
        {TECHNOLOGY_CATEGORIES.map((category) => (
            <TechnologyCategoryFolder
              key={category.id}
              category={category}
              defaultOpen={true}
            />
        ))}
      </div>
    </div>
  );
}
