"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { Project } from "@/data/projects";

interface CategoryFolderProps {
  categoryName: string;
  projects: Project[];
  defaultOpen?: boolean;
}

export function CategoryFolder({ categoryName, projects, defaultOpen = true }: CategoryFolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (projects.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Editorial Category Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 border-b border-slate-800 hover:border-slate-700 text-left transition-colors focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <ChevronRight
            className={`w-4 h-4 text-amber-400 transition-transform duration-150 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
          <span className="font-mono uppercase tracking-widest text-xs font-bold text-slate-200">
            {categoryName}
          </span>
          <span className="text-[10px] font-mono text-slate-500">
            ({projects.length})
          </span>
        </div>

        <span className="text-[11px] text-slate-500 font-mono">
          {isOpen ? "Hide" : "Show"}
        </span>
      </button>

      {/* Editorial Numbered Project List */}
      {isOpen && (
        <div className="space-y-6 pt-2">
          {projects.map((project, idx) => {
            const indexStr = (idx + 1).toString().padStart(2, "0");
            return (
              <div
                key={project.id}
                className="group border-b border-slate-800/60 pb-6 space-y-3"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  {/* Left Number & Title */}
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-semibold text-amber-400/80 pt-1">
                      {indexStr}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="text-[9px] font-mono uppercase bg-amber-400/10 text-amber-300 px-1.5 py-0.5 border border-amber-400/20">
                            LIVE DEMO
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right Links */}
                  <div className="flex items-center gap-3 text-xs font-mono shrink-0 pt-1 md:pt-0">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-amber-300 hover:underline"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Extended Description & Highlights */}
                <div className="pl-8 space-y-2">
                  <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-1 pt-1">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="text-[11px] text-slate-300 flex items-start gap-2">
                          <span className="text-slate-500 font-mono text-[10px]">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Inline Metadata */}
                  <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-mono text-slate-500">
                    <span className="text-slate-400 font-semibold">Tech:</span>
                    <span>{project.techStack.join(" · ")}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
