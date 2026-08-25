import { Metadata } from "next";
import { EDUCATION_ENTRIES } from "@/data/education";

export const metadata: Metadata = {
  title: "Education | Vaibhav Gupta",
  description: "Academic qualifications, degree credentials, and foundational education history.",
};

export default function EducationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-6 text-slate-300">
      {/* Page Header */}
      <div className="space-y-2.5 border-b border-slate-800/80 pb-5">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Education
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Academic qualifications, degree credentials, and foundational education history.
        </p>
      </div>

      {/* Vertical Chronological Timeline */}
      <div className="relative border-l border-slate-800 space-y-10 my-4 ml-1.5 sm:ml-2">
        {EDUCATION_ENTRIES.map((edu) => (
          <div key={edu.id} className="relative pl-6 sm:pl-8 group space-y-3">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-copper ring-4 ring-[#0a0d14] transition-transform duration-200 group-hover:scale-125" />

            {/* Date Header */}
            <div className="text-xs font-mono">
              <time className="font-bold text-copper tracking-wider uppercase">
                {edu.period}
              </time>
            </div>

            {/* Institution Header & Degree/Class */}
            <div className="space-y-0.5">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">
                {edu.institution}
              </h2>
              <div className="text-xs font-semibold text-slate-300 font-mono">
                {edu.degree}
              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}
