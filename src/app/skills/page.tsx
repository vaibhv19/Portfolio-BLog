import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/skills";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Skills & Technical Territory | Vaibhav Gupta",
  description: "Evidence-based technical skills inventory and taxonomy extracted across real engineering projects.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
          TECHNICAL TAXONOMY
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Skills &amp; Territory Map
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Grouped technical capabilities extracted across completed software projects. Click technologies with published articles to read practical engineering lessons under <strong className="text-amber-300 font-normal">My Experience With…</strong>.
        </p>
      </div>

      {/* Grouped Technical Typography */}
      <div className="space-y-10">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.id} className="space-y-4 border-b border-slate-800/60 pb-8">
            <div>
              <h2 className="text-base font-bold text-slate-100 font-mono uppercase tracking-wider">
                {cat.title}
              </h2>
              <p className="text-xs text-slate-500">{cat.description}</p>
            </div>

            <div className="pt-2 divide-y divide-slate-800/40">
              {cat.skills.map((skill) => {
                const projects = PROJECTS.filter((p) => skill.projectsUsedIn.includes(p.id));
                const hasArticle = Boolean(skill.experienceSlug);

                return (
                  <div
                    key={skill.id}
                    className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        {hasArticle ? (
                          <Link
                            href={`/my-experience-with/${skill.experienceSlug}`}
                            className="font-bold text-slate-100 hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
                          >
                            <span>{skill.name}</span>
                            <ArrowRight className="w-3 h-3 text-amber-400" />
                          </Link>
                        ) : (
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                        )}
                        {skill.isHeadline && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        )}
                      </div>

                      {projects.length > 0 && (
                        <div className="text-[11px] text-slate-500 font-mono">
                          Evidenced in: {projects.map((p) => p.title).join(" · ")}
                        </div>
                      )}
                    </div>

                    <div className="text-[10px] font-mono text-slate-500 self-start sm:self-auto">
                      {hasArticle ? (
                        <Link
                          href={`/my-experience-with/${skill.experienceSlug}`}
                          className="text-amber-300 hover:underline"
                        >
                          Read Experience Article →
                        </Link>
                      ) : (
                        <span>Project Evidence</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
