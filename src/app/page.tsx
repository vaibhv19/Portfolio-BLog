import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { PROJECTS } from "@/data/projects";
import { WRITING_ARTICLES } from "@/data/writing";
import { EXPERIENCE_WITH_ARTICLES } from "@/data/experienceWith";
import { CERTIFICATIONS } from "@/data/certifications";
import { EXPERIENCE_ENTRIES } from "@/data/experience";
import { EDUCATION_ENTRIES } from "@/data/education";
import { PATENT_RECORDS } from "@/data/patents";

export default function HomePage() {
  // Group projects logically for dense presentation
  const appliedProjects = PROJECTS.filter(
    (p) => p.category === "For Resume" || p.category === "Testing" || p.category === "Training Program"
  );
  const academicProjects = PROJECTS.filter((p) => p.category === "Academic");

  // Selected writing previews
  const recentWriting = WRITING_ARTICLES.slice(0, 3);
  
  // Selected experience with notes
  const experienceNotes = EXPERIENCE_WITH_ARTICLES.slice(0, 6);

  // Featured certs
  const featuredCerts = CERTIFICATIONS.filter((c) => c.featured);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-slate-300">
      {/* 1. PERSONAL INTRODUCTION */}
      <section className="space-y-4 border-b border-slate-800/80 pb-8">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Vaibhav Gupta
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Software Engineer &amp; CS Student at Greater Noida Institute of Technology (B.Tech 2023–2027)
          </p>
        </div>

        <p className="text-sm leading-relaxed text-slate-300 max-w-3xl">
          I build software systems with a focus on distributed architectures, multi-agent AI orchestration, and cloud infrastructure. My work spans high-concurrency Java 21 backends, Python/LangGraph agent frameworks, hybrid RAG retrieval engines (pgvector), WebAssembly browser engines, and production deployments on AWS.
        </p>

        <p className="text-xs text-slate-400 font-serif-editorial italic border-l-2 border-amber-400/80 pl-3 py-0.5">
          &ldquo;A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice.&rdquo;
        </p>

        {/* Compact Profile Links */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
          <a
            href="https://github.com/vaibhv19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>github/vaibhv19</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>linkedin</span>
          </a>
          <span className="text-slate-600">•</span>
          <Link href="/about" className="text-amber-300 hover:underline">
            About Narrative &rarr;
          </Link>
        </div>
      </section>

      {/* 2. MY WORK — APPLIED & INDEPENDENT PROJECTS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
            My Work — Applied Projects &amp; Systems
          </h2>
          <Link href="/projects" className="text-xs font-mono text-amber-300 hover:underline">
            Full Projects Catalog ({PROJECTS.length}) &rarr;
          </Link>
        </div>

        <ul className="space-y-3 text-xs">
          {appliedProjects.map((project) => (
            <li key={project.id} className="space-y-0.5">
              <div className="flex items-baseline gap-2">
                <span className="text-slate-500 font-mono">•</span>
                <span className="font-bold text-slate-100 hover:text-amber-300 transition-colors">
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                      <span>{project.title}</span>
                      <ExternalLink className="w-3 h-3 text-amber-400" />
                    </a>
                  ) : project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                      <span>{project.title}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </span>
                <span className="text-slate-400">—</span>
                <span className="text-slate-300">{project.tagline}</span>
              </div>
              <div className="pl-4 text-[11px] font-mono text-slate-500">
                Tech: {project.techStack.join(" · ")}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. ACADEMIC MILESTONES & COURSEWORK PROJECTS */}
      <section className="space-y-4 pt-4 border-t border-slate-800/60">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
            Academic Systems &amp; Coursework Projects
          </h2>
          <Link href="/education" className="text-xs font-mono text-slate-400 hover:text-slate-200">
            Education Record &rarr;
          </Link>
        </div>

        <ul className="space-y-3 text-xs">
          {academicProjects.map((project) => (
            <li key={project.id} className="space-y-0.5">
              <div className="flex items-baseline gap-2">
                <span className="text-slate-500 font-mono">•</span>
                <span className="font-bold text-slate-100">
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 hover:underline inline-flex items-center gap-1">
                      <span>{project.title}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </span>
                <span className="text-slate-400">—</span>
                <span className="text-slate-300">{project.tagline}</span>
              </div>
              <div className="pl-4 text-[11px] font-mono text-slate-500">
                Tech: {project.techStack.join(" · ")}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. LEARNING & TECHNICAL FOUNDATION */}
      <section className="space-y-3 pt-4 border-t border-slate-800/60">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
            Learning &amp; Technical Foundation
          </h2>
          <Link href="/skills" className="text-xs font-mono text-amber-300 hover:underline">
            Skills Taxonomy &rarr;
          </Link>
        </div>

        <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
          <div>
            <strong className="text-slate-100 font-mono uppercase text-[11px] text-amber-400 mr-2">Backend &amp; Languages:</strong>
            <span>Java 21, Python 3.11+, TypeScript, SQL, Spring Boot, FastAPI, Django REST, WebSockets, REST APIs.</span>
          </div>
          <div>
            <strong className="text-slate-100 font-mono uppercase text-[11px] text-amber-400 mr-2">AI Systems &amp; RAG:</strong>
            <span>LangGraph, Multi-Agent Systems, Hybrid RAG (BM25 + pgvector), Cross-Encoder Reranking, Ollama, Agent Evaluation.</span>
          </div>
          <div>
            <strong className="text-slate-100 font-mono uppercase text-[11px] text-amber-400 mr-2">Systems &amp; DevOps:</strong>
            <span>Consistent Hashing, Virtual Threads, Docker, AWS (EC2/RDS/S3), Nginx, PostgreSQL, Redis, GitHub Actions.</span>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE */}
      <section className="space-y-3 pt-4 border-t border-slate-800/60">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
            Experience &amp; Internships
          </h2>
          <Link href="/experience" className="text-xs font-mono text-slate-400 hover:text-slate-200">
            View Experience &rarr;
          </Link>
        </div>

        <div className="space-y-3">
          {EXPERIENCE_ENTRIES.map((exp) => (
            <div key={exp.id} className="space-y-0.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-100">{exp.role}</span>
                <span className="text-[10px] font-mono text-slate-500">{exp.period}</span>
              </div>
              <div className="text-slate-400">{exp.organization} ({exp.type})</div>
              <p className="text-slate-400 leading-relaxed text-[11px] pt-0.5">{exp.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. RECENT WRITING (Personal Publication List) */}
      <section className="space-y-4 pt-4 border-t border-slate-800/60">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
            Recent Writing &amp; Retrospectives
          </h2>
          <Link href="/writing" className="text-xs font-mono text-amber-300 hover:underline">
            Writing Archive ({WRITING_ARTICLES.length}) &rarr;
          </Link>
        </div>

        <div className="space-y-4">
          {recentWriting.map((article) => (
            <div key={article.slug} className="space-y-1 text-xs">
              <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                <span>{article.date}</span>
                <span>{article.readingTime}</span>
              </div>
              <h3 className="font-bold text-slate-100 hover:text-amber-300 transition-colors text-sm">
                <Link href={`/writing/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="text-slate-300 leading-relaxed text-xs">
                {article.excerpt}
              </p>
              <div>
                <Link href={`/writing/${article.slug}`} className="text-amber-300 hover:underline font-mono text-[11px]">
                  Read Article &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MY EXPERIENCE WITH... */}
      <section className="space-y-3 pt-4 border-t border-slate-800/60">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
            My Experience With… (Technology Notes)
          </h2>
          <Link href="/my-experience-with" className="text-xs font-mono text-amber-300 hover:underline">
            Experience Index &rarr;
          </Link>
        </div>

        <p className="text-xs text-slate-400">
          Practical notes, lessons learned, and trade-offs from working with specific tools and concepts:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {experienceNotes.map((note) => (
            <div key={note.slug} className="py-1 border-b border-slate-800/40 space-y-0.5">
              <Link
                href={`/my-experience-with/${note.slug}`}
                className="font-bold text-slate-200 hover:text-amber-300 transition-colors flex items-center justify-between"
              >
                <span>{note.title}</span>
                <span className="text-[9px] font-mono text-slate-500 uppercase">{note.category}</span>
              </Link>
              <p className="text-[11px] text-slate-400 truncate">{note.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CREDENTIALS & PATENTS (Compact Reference Row) */}
      <section className="pt-4 border-t border-slate-800 text-xs space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px]">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-bold uppercase">Credentials &amp; IP:</span>
            <Link href="/certifications" className="text-slate-300 hover:text-amber-300 underline">
              {featuredCerts.length} Verified Certificates
            </Link>
            <span>·</span>
            <Link href="/intellectual-property" className="text-slate-300 hover:text-amber-300 underline">
              Patent Application 452200-001
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
