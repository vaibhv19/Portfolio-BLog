"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { Project, ParentFramework } from "@/data/projects";

interface CategoryFolderProps {
  categoryName: string;
  projects: Project[];
  parents?: ParentFramework[];
  defaultOpen?: boolean;
}

function renderFormattedDescription(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
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
        className="text-sky-400 hover:underline font-semibold transition-colors"
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

export function CategoryFolder({
  categoryName,
  projects,
  parents,
  defaultOpen = true,
}: CategoryFolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (projects.length === 0) return null;

  const renderProjectItem = (project: Project, idx: number) => {
    const indexStr = `${idx + 1} /`;
    return (
      <div
        key={project.id}
        className="group border-b border-slate-800/60 pb-6 space-y-3 last:border-b-0 last:pb-0"
      >
        {/* Project Header Row: Repository Title Link with Sequence Number */}
        <div className="space-y-1 min-w-0 flex-1">
          <h3 className="text-lg font-bold">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-100 hover:underline transition-all inline-flex items-center gap-2"
            >
              <span>{indexStr} {project.title}</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-copper flex-shrink-0" />
            </a>
          </h3>
          {project.tagline && (
            <p className="text-xs text-slate-300 leading-relaxed font-mono italic">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Technical Bullet Points & Tech Stack */}
        <div className="pl-8 space-y-2.5">
          {project.bullets && project.bullets.length > 0 && (
            <ul className="space-y-1.5">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5">
                  <span className="text-copper/80 font-mono text-xs select-none pt-0.5 flex-shrink-0">—</span>
                  <span className="flex-1 min-w-0">{renderFormattedDescription(bullet)}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="pt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-mono text-slate-500">
              <span className="text-slate-400 font-semibold">Tech:</span>
              <span>{project.techStack.join(" · ")}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Editorial Category Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2.5 py-2.5 border-b border-slate-800 hover:border-slate-700 text-left transition-colors focus:outline-none group"
      >
        <ChevronRight
          className={`w-4 h-4 text-copper transition-transform duration-150 flex-shrink-0 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
        <span className="font-mono uppercase tracking-widest text-xs font-bold text-slate-200 group-hover:text-slate-100 transition-colors">
          {categoryName}
        </span>
      </button>

      {/* Numbered / Nested Project List */}
      {isOpen && (
        <div className="space-y-6 pt-2">
          {parents && parents.length > 0 ? (
            // Group by parent framework
            <div className="space-y-8">
              {parents.map((parent) => {
                const childProjects = projects.filter(
                  (p) => p.parentFrameworkId === parent.id
                );
                if (childProjects.length === 0) return null;

                return (
                  <div key={parent.id} className="space-y-5 border-l-2 border-slate-800/80 pl-4 py-1">
                    {/* Parent Framework Header */}
                    <div className="space-y-1 pb-2 border-b border-slate-800/40">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider">
                          {parent.githubUrl ? (
                            <a
                              href={parent.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-100 hover:underline transition-all inline-flex items-center gap-1.5"
                            >
                              <span>FRAMEWORK: {parent.name}</span>
                              <ExternalLink className="w-3.5 h-3.5 text-copper flex-shrink-0" />
                            </a>
                          ) : (
                            <span className="text-slate-100">FRAMEWORK: {parent.name}</span>
                          )}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-mono">
                        {parent.description}
                      </p>
                    </div>

                    {/* Associated Child Projects */}
                    <div className="space-y-6 pl-1">
                      {childProjects.map((project, idx) =>
                        renderProjectItem(project, idx)
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Flat project list for non-parent categories
            projects.map((project, idx) => renderProjectItem(project, idx))
          )}
        </div>
      )}
    </div>
  );
}
