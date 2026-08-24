import { Metadata } from "next";
import Link from "next/link";
import { Cpu, ArrowRight, BookOpen, ExternalLink, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/skills";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Skills & Technical Territory | Vaibhav Gupta",
  description: "Evidence-based technical skills inventory and taxonomy extracted across real engineering projects.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>TECHNICAL TERRITORY MAP</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Skills &amp; Technology Inventory
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Evidence-based taxonomy extracted across completed software projects. Technologies with published experience articles feature a subtle hover affordance to read practical engineering lessons under <strong className="text-amber-300 font-semibold">My Experience With…</strong>.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-10">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="p-6 rounded-xl bg-[#131b2e]/60 border border-slate-800/80 space-y-4"
          >
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-100">{cat.title}</h2>
              <p className="text-xs text-slate-400">{cat.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {cat.skills.map((skill) => {
                const projects = PROJECTS.filter((p) => skill.projectsUsedIn.includes(p.id));
                const hasArticle = Boolean(skill.experienceSlug);

                return (
                  <div
                    key={skill.id}
                    className={`p-4 rounded-lg border transition-all flex flex-col justify-between ${
                      hasArticle
                        ? "bg-[#131b2e] border-amber-500/30 hover:border-amber-400 group"
                        : "bg-[#0d1322]/80 border-slate-800/80"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-slate-100 text-sm flex items-center gap-1.5">
                          <span>{skill.name}</span>
                          {skill.isHeadline && (
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          )}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          {skill.articleStatus}
                        </span>
                      </div>

                      {/* Projects used in */}
                      {projects.length > 0 && (
                        <div className="text-[11px] text-slate-400 space-x-1">
                          <span className="font-mono text-slate-500">Evidenced in:</span>
                          {projects.map((p, idx) => (
                            <span key={p.id} className="text-slate-300">
                              {p.title}
                              {idx < projects.length - 1 ? "," : ""}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Affordance link to Experience Article */}
                    {hasArticle ? (
                      <div className="mt-4 pt-2 border-t border-slate-800/80">
                        <Link
                          href={`/my-experience-with/${skill.experienceSlug}`}
                          className="inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors group-hover:translate-x-0.5 duration-150"
                        >
                          <span>Click to read my experience with it</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    ) : (
                      <div className="mt-4 pt-2 border-t border-slate-800/40 text-[10px] text-slate-500 font-mono">
                        Applied capability in project work
                      </div>
                    )}
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
