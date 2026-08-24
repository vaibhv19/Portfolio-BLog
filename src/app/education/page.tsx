import { Metadata } from "next";
import { GraduationCap, Calendar, CheckCircle2, BookOpen } from "lucide-react";
import { EDUCATION_ENTRIES } from "@/data/education";

export const metadata: Metadata = {
  title: "Education | Vaibhav Gupta",
  description: "Academic history and Computer Science engineering degree credentials.",
};

export default function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMIC RECORD</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Education History
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Higher education degree credentials and core Computer Science &amp; Engineering coursework.
        </p>
      </div>

      {/* Education Entries */}
      <div className="space-y-6">
        {EDUCATION_ENTRIES.map((edu) => (
          <div
            key={edu.id}
            className="p-6 sm:p-8 rounded-xl bg-[#131b2e]/70 border border-slate-800 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                  {edu.status}
                </span>
                <h2 className="text-xl font-bold text-slate-100 mt-2">{edu.degree}</h2>
                <div className="text-sm font-semibold text-amber-400/90">{edu.institution}</div>
              </div>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{edu.period}</span>
              </div>
            </div>

            <div className="text-xs text-slate-300 font-mono">
              Specialization: <span className="text-slate-100 font-semibold">{edu.specialization}</span>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800/60">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">Academic Focus &amp; Highlights</div>
              <ul className="space-y-2">
                {edu.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
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
