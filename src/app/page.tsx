import Link from "next/link";
import { ArrowRight, ExternalLink, ChevronRight, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { PROJECTS } from "@/data/projects";
import { SKILL_CATEGORIES } from "@/data/skills";
import { WRITING_ARTICLES } from "@/data/writing";
import { CERTIFICATIONS } from "@/data/certifications";
import { EXPERIENCE_ENTRIES } from "@/data/experience";
import { EDUCATION_ENTRIES } from "@/data/education";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const previewProjects = PROJECTS.filter((p) => p.homepagePreview);
  const featuredCertificates = CERTIFICATIONS.filter((c) => c.featured).sort(
    (a, b) => (a.homeOrder || 99) - (b.homeOrder || 99)
  );
  const writingPreviews = WRITING_ARTICLES.slice(0, 3);

  return (
    <div className="space-y-16 py-10">
      {/* 1. Hero Section — Typographic & Confident */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        <div className="text-xs font-mono tracking-widest text-slate-500 uppercase">
          VAIBHAV GUPTA — SOFTWARE ENGINEER
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-[1.15] max-w-4xl">
          Building distributed systems, AI agent platforms &amp; cloud architecture with engineering discipline.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-serif-editorial italic border-l-2 border-amber-400/80 pl-4 py-1 leading-relaxed max-w-3xl">
          &ldquo;A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice.&rdquo;
        </p>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Specializing in distributed cache systems (Java/Python), autonomous AI agent orchestration (LangGraph, Spring AI), hybrid RAG retrieval pipelines (pgvector), and full-stack cloud deployments on AWS.
        </p>

        <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-bold text-amber-300 hover:underline"
          >
            <span>Projects Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/writing"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Technical Writing →
          </Link>
          <Link
            href="/about"
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            About Narrative →
          </Link>
        </div>
      </section>

      {/* 2. Editorial About Excerpt */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
            PHILOSOPHY &amp; APPROACH
          </div>
          <div className="md:col-span-3 space-y-3">
            <h2 className="text-lg font-bold text-slate-100">
              Engineering × Expression × Discipline
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              Software engineering is the primary communication layer of my work. Personality and approach are quietly shaped by artistic craft (composition and original texture), fitness (repetition, strength, and controlled intensity), and philosophical grounding in continuous practice.
            </p>
            <div className="pt-1">
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-xs font-mono text-amber-300 hover:underline"
              >
                <span>Read Editorial Narrative &amp; GitHub Activity →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects (Deployed Experiences) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6 border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              01 / FEATURED WORK
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Live Deployed Experiences</h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Projects featuring live interactive demonstrations or production cloud deployments.
          </p>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group border-b border-slate-800/60 pb-6 space-y-3"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-amber-400/80">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[9px] font-mono uppercase text-amber-300 bg-amber-400/10 px-1.5 py-0.5 border border-amber-400/20">
                      LIVE DEMO
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono shrink-0 pt-1 md:pt-0">
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
                      <span>Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-500 pl-8">
                Tech: {project.techStack.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Projects Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              02 / CATALOG PREVIEW
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Core Engineering Systems</h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono text-amber-300 hover:underline"
          >
            View Full Catalog →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 border-l-2 border-slate-800 space-y-2"
            >
              <div className="text-[10px] font-mono text-slate-500 uppercase">{project.category}</div>
              <h3 className="text-base font-bold text-slate-100">{project.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{project.tagline}</p>
              <div className="pt-2 text-[10px] font-mono text-slate-500">
                {project.techStack.slice(0, 3).join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Experience & Education Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-800/80">
        {/* Experience Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-base font-bold text-slate-100 font-mono uppercase">Experience</h2>
            <Link href="/experience" className="text-xs font-mono text-amber-300 hover:underline">
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {EXPERIENCE_ENTRIES.map((exp) => (
              <div key={exp.id} className="space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-200">{exp.role}</span>
                  <span className="text-[10px] font-mono text-slate-500">{exp.period}</span>
                </div>
                <div className="text-slate-400 font-medium">{exp.organization}</div>
                <p className="text-slate-400 leading-relaxed pt-1">{exp.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-base font-bold text-slate-100 font-mono uppercase">Education</h2>
            <Link href="/education" className="text-xs font-mono text-amber-300 hover:underline">
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {EDUCATION_ENTRIES.map((edu) => (
              <div key={edu.id} className="space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-200">{edu.degree}</span>
                  <span className="text-[10px] font-mono text-slate-500">{edu.period}</span>
                </div>
                <div className="text-slate-400 font-medium">{edu.institution}</div>
                <div className="text-slate-400 font-mono text-[11px] pt-1">
                  Specialization: {edu.specialization}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Skills Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 pt-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              03 / TECHNICAL TERRITORY
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Primary Capabilities</h2>
          </div>
          <Link
            href="/skills"
            className="text-xs font-mono text-amber-300 hover:underline"
          >
            View Skills Taxonomy →
          </Link>
        </div>

        <div className="pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl space-y-2">
          <div>
            <strong className="text-slate-100 font-semibold font-mono text-xs uppercase text-amber-400/90 mr-2">Backend &amp; Distributed:</strong>
            <span>Java · Spring Boot · Python · FastAPI · Consistent Hashing · Virtual Threads</span>
          </div>
          <div>
            <strong className="text-slate-100 font-semibold font-mono text-xs uppercase text-amber-400/90 mr-2">AI Systems &amp; RAG:</strong>
            <span>LangGraph · Hybrid RAG · pgvector · Multi-Agent Orchestration · Agent Evaluation</span>
          </div>
          <div>
            <strong className="text-slate-100 font-semibold font-mono text-xs uppercase text-amber-400/90 mr-2">Frontend &amp; Infrastructure:</strong>
            <span>TypeScript · React · Next.js · Docker · AWS (EC2/RDS/S3) · WebAssembly</span>
          </div>
        </div>
      </section>

      {/* 7. Certifications Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 pt-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              04 / CREDENTIALS
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Featured Certifications</h2>
          </div>
          <Link
            href="/certifications"
            className="text-xs font-mono text-amber-300 hover:underline"
          >
            View All Certifications →
          </Link>
        </div>

        <div className="divide-y divide-slate-800/60 pt-2">
          {featuredCertificates.map((cert) => (
            <div key={cert.id} className="py-3 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <a
                  href={cert.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-slate-100 hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>{cert.title}</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
                <div className="text-[11px] text-slate-400">{cert.issuer}</div>
              </div>
              <span className="text-[10px] font-mono text-slate-500">{cert.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Regular Writing Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              05 / TECHNICAL WRITING
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Articles &amp; Retrospectives</h2>
          </div>
          <Link
            href="/writing"
            className="text-xs font-mono text-amber-300 hover:underline"
          >
            View All Writing →
          </Link>
        </div>

        <div className="space-y-6">
          {writingPreviews.map((article) => (
            <div
              key={article.slug}
              className="border-b border-slate-800/60 pb-6 space-y-2"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{article.date}</span>
                <span>{article.readingTime}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 hover:text-amber-300 transition-colors">
                <Link href={`/writing/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                {article.excerpt}
              </p>
              <div className="pt-1">
                <Link
                  href={`/writing/${article.slug}`}
                  className="text-xs font-mono text-amber-300 hover:underline"
                >
                  Continue Reading →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Intellectual Property / Patent Presence */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 px-6 border border-slate-800">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase text-amber-400">
              INTELLECTUAL PROPERTY
            </div>
            <h3 className="text-sm font-bold text-slate-100">
              Patent Application 452200-001 6853
            </h3>
            <p className="text-xs text-slate-400">
              Registered design patent document covering technical software systems and architectural specifications.
            </p>
          </div>
          <Link
            href="/intellectual-property"
            className="text-xs font-mono text-amber-300 hover:underline shrink-0"
          >
            View Patent Record →
          </Link>
        </div>
      </section>
    </div>
  );
}
