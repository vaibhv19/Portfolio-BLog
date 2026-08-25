import { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { EXPERIENCE_ENTRIES } from "@/data/experience";

export const metadata: Metadata = {
  title: "Internships & Training | Vaibhav Gupta",
  description: "Complete record of professional roles, emerging technology internships, and project-based experiential learning programs.",
};

function renderInlineHyperlinks(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | React.JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, linkText, linkUrl] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    parts.push(
      <a
        key={matchIndex}
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-400 font-semibold hover:underline transition-none inline-flex items-baseline"
      >
        {linkText}
      </a>
    );

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-6 text-slate-300">
      {/* Page Header */}
      <div className="space-y-2.5 border-b border-slate-800/80 pb-5">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Internships &amp; Training
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Detailed timeline of internships, experiential learning programs, and professional software engineering roles.
        </p>
      </div>

      {/* Vertical Chronological Timeline */}
      <div className="relative border-l border-slate-800 space-y-10 my-4 ml-1.5 sm:ml-2">
        {EXPERIENCE_ENTRIES.map((exp) => (
          <div key={exp.id} className="relative pl-6 sm:pl-8 group space-y-3">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-copper ring-4 ring-[#0a0d14] transition-transform duration-200 group-hover:scale-125" />

            {/* Date Header */}
            <div className="text-xs font-mono">
              <time className="font-bold text-copper tracking-wider uppercase">
                {exp.period}
              </time>
            </div>

            {/* Role Header & Organization */}
            <div className="space-y-0.5">
              <h2 className="text-lg sm:text-xl font-bold">
                {exp.githubUrl ? (
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 hover:underline transition-none inline-flex items-center gap-2"
                  >
                    <span>{exp.role}</span>
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-copper flex-shrink-0" />
                  </a>
                ) : (
                  <span className="text-slate-100">{exp.role}</span>
                )}
              </h2>
              <div className="text-xs font-semibold text-slate-300 font-mono">
                {exp.organization}
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono italic">
              {renderInlineHyperlinks(exp.summary)}
            </p>

            {/* Key Contributions & Tech Stack */}
            <div className="space-y-2.5 pt-1 pl-4 sm:pl-6 border-l-2 border-slate-800/80">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
                Key Contributions
              </div>
              <ul className="space-y-1.5">
                {exp.highlights.map((item, hIdx) => (
                  <li
                    key={hIdx}
                    className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="text-copper/80 font-mono text-xs select-none pt-0.5 flex-shrink-0">
                      —
                    </span>
                    <span className="flex-1 min-w-0">
                      {renderInlineHyperlinks(item)}
                    </span>
                  </li>
                ))}
              </ul>

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="pt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-mono text-slate-500">
                  <span className="text-slate-400 font-semibold">Tech:</span>
                  <span>{exp.technologies.join(" · ")}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
