"use client";

import { useState } from "react";
import { Folder, FolderOpen, ChevronRight, ExternalLink, Code2, Sparkles } from "lucide-react";
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
    <div className="rounded-xl bg-[#131b2e]/80 border border-slate-800/80 overflow-hidden transition-all">
      {/* Folder Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[100%] px-5 py-4 flex items-center justify-between bg-slate-900/60 hover:bg-slate-800/60 text-left transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400/50"
      >
        <div className="flex items-center gap-3">
          <ChevronRight
            className={`w-4 h-4 text-amber-400/80 transition-transform duration-200 ${
              isOpen ? "rotate-90 text-amber-400" : ""
            }`}
          />
          {isOpen ? (
            <FolderOpen className="w-5 h-5 text-amber-400" />
          ) : (
            <Folder className="w-5 h-5 text-slate-400" />
          )}
          <span className="font-bold text-slate-100 text-base tracking-wide">
            {categoryName}
          </span>
          <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700/60">
            {projects.length} {projects.length === 1 ? "project" : "projects"}
          </span>
        </div>

        <span className="text-xs text-slate-400 font-mono hidden sm:inline">
          {isOpen ? "Collapse" : "Expand"}
        </span>
      </button>

      {/* Folder Content / Project Cards */}
      {isOpen && (
        <div className="p-5 space-y-4 border-t border-slate-800/60 bg-[#0d1322]/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-5 rounded-lg bg-[#131b2e] border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      {project.featured && (
                        <span className="text-[9px] font-mono bg-amber-500/10 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">
                          FEATURED
                        </span>
                      )}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-1 pt-1 border-t border-slate-800/60">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold text-xs leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-5 space-y-3 pt-3 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-700/60 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs pt-1">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-amber-300 hover:underline"
                      >
                        <span>Live Demo</span>
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
                        <span>Repository</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
