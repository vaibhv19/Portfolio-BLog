import { Metadata } from "next";
import { EDUCATION_ENTRIES } from "@/data/education";

export const metadata: Metadata = {
  title: "Education | Vaibhav Gupta",
  description: "Academic history and Computer Science engineering degree credentials.",
};

export default function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
          ACADEMIC RECORD
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Education History
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Higher education degree credentials and core Computer Science &amp; Engineering coursework.
        </p>
      </div>

      {/* Education Entries */}
      <div className="space-y-8">
        {EDUCATION_ENTRIES.map((edu) => (
          <div
            key={edu.id}
            className="border-b border-slate-800/80 pb-8 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400">
                  {edu.status}
                </span>
                <h2 className="text-xl font-bold text-slate-100">{edu.degree}</h2>
                <div className="text-xs font-semibold text-slate-300">{edu.institution}</div>
              </div>
              <span className="text-xs font-mono text-slate-500">{edu.period}</span>
            </div>

            <div className="text-xs text-slate-400 font-mono">
              Specialization: <span className="text-slate-200">{edu.specialization}</span>
            </div>

            <div className="space-y-1.5 pt-2">
              <div className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">Academic Focus &amp; Highlights</div>
              <ul className="space-y-1">
                {edu.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-slate-500 font-mono text-[10px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
