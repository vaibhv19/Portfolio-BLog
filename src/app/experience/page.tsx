import { Metadata } from "next";
import { Briefcase, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { EXPERIENCE_ENTRIES } from "@/data/experience";

export const metadata: Metadata = {
  title: "Professional Experience | Vaibhav Gupta",
  description: "Complete record of professional roles, emerging technology internships, and project-based experiential learning programs.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" />
          <span>PROFESSIONAL RECORD</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Professional Experience
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Detailed timeline of internships, experiential learning programs, and professional software engineering roles.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-8">
        {EXPERIENCE_ENTRIES.map((exp) => (
          <div
            key={exp.id}
            className="p-6 sm:p-8 rounded-xl bg-[#131b2e]/70 border border-slate-800 space-y-4 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                  {exp.type}
                </span>
                <h2 className="text-xl font-bold text-slate-100 mt-2">{exp.role}</h2>
                <div className="text-sm font-semibold text-amber-400/90">{exp.organization}</div>
              </div>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{exp.period}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {exp.summary}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">Key Contributions &amp; Achievements</div>
              <ul className="space-y-2">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
