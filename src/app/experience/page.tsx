import { Metadata } from "next";
import { EXPERIENCE_ENTRIES } from "@/data/experience";

export const metadata: Metadata = {
  title: "Professional Experience | Vaibhav Gupta",
  description: "Complete record of professional roles, emerging technology internships, and project-based experiential learning programs.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
          PROFESSIONAL RECORD
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Professional Experience
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Detailed timeline of internships, experiential learning programs, and professional software engineering roles.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-10">
        {EXPERIENCE_ENTRIES.map((exp) => (
          <div
            key={exp.id}
            className="border-b border-slate-800/80 pb-8 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400">
                  {exp.type}
                </span>
                <h2 className="text-xl font-bold text-slate-100">{exp.role}</h2>
                <div className="text-xs font-semibold text-slate-300">{exp.organization}</div>
              </div>
              <span className="text-xs font-mono text-slate-500">{exp.period}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {exp.summary}
            </p>

            <div className="space-y-1.5 pt-2">
              <div className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">Key Contributions</div>
              <ul className="space-y-1">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-slate-500 font-mono text-[10px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 text-[10px] font-mono text-slate-500">
              Tech: {exp.technologies.join(" · ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
