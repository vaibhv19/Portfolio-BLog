import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { PROJECTS } from "@/data/projects";
import { SKILL_CATEGORIES } from "@/data/skills";
import { WRITING_ARTICLES } from "@/data/writing";
import { EXPERIENCE_WITH_ARTICLES } from "@/data/experienceWith";
import { CERTIFICATIONS } from "@/data/certifications";
import { EXPERIENCE_ENTRIES } from "@/data/experience";
import { EDUCATION_ENTRIES } from "@/data/education";
import { PATENT_RECORDS } from "@/data/patents";

export default function HomePage() {
  // 1. Curated Featured Projects (Live Deployed Experiences)
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  
  // 2. Complete Projects Collection Overview / Preview
  const previewProjects = PROJECTS.filter((p) => p.homepagePreview);
  
  // 3. Featured Certificates (NPTEL, E&ICT Academy)
  const featuredCertificates = CERTIFICATIONS.filter((c) => c.featured).sort(
    (a, b) => (a.homeOrder || 99) - (b.homeOrder || 99)
  );

  // 4. Regular Writing Previews ONLY (Excludes My Experience With...)
  const writingPreviews = WRITING_ARTICLES.slice(0, 3);

  // 5. My Experience With... Previews
  const experienceWithPreviews = EXPERIENCE_WITH_ARTICLES.slice(0, 4);

  return (
    <div className="space-y-16 py-10">
      {/* SECTION 1: HERO / INTRODUCTION */}
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
            Technical Writing &rarr;
          </Link>
          <Link
            href="/about"
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            About Narrative &rarr;
          </Link>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
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
                <span>Read Editorial Narrative &amp; GitHub Activity &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 pt-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              PRACTICAL CREDIBILITY
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Professional Experience</h2>
          </div>
          <Link href="/experience" className="text-xs font-mono text-amber-300 hover:underline">
            View All Experience &rarr;
          </Link>
        </div>
        <div className="space-y-4">
          {EXPERIENCE_ENTRIES.map((exp) => (
            <div key={exp.id} className="space-y-1 text-xs border-b border-slate-800/40 pb-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200">{exp.role}</span>
                <span className="text-[10px] font-mono text-slate-500">{exp.period}</span>
              </div>
              <div className="text-slate-400 font-medium">{exp.organization}</div>
              <p className="text-slate-400 leading-relaxed pt-1">{exp.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: FEATURED (Curated Strongest Work) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6 border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              CURATED SELECTION
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Featured Work</h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            A curated selection of the strongest work featuring live interactive demonstrations or production cloud deployments.
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

      {/* SECTION 5: PROJECTS (Complete Project Portfolio Preview) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              COMPLETE COLLECTION PREVIEW
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Projects Portfolio</h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono text-amber-300 hover:underline"
          >
            View Full Projects Catalog &rarr;
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

      {/* SECTION 6: SKILLS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 pt-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              TECHNICAL AREAS
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Skills &amp; Capabilities</h2>
          </div>
          <Link
            href="/skills"
            className="text-xs font-mono text-amber-300 hover:underline"
          >
            View Skills Taxonomy &rarr;
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

      {/* SECTION 7: EDUCATION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 pt-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              ACADEMIC BACKGROUND
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Education</h2>
          </div>
          <Link href="/education" className="text-xs font-mono text-amber-300 hover:underline">
            View Education Details &rarr;
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
      </section>

      {/* SECTION 8: CERTIFICATIONS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 pt-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              VERIFIED CREDENTIALS
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Certifications</h2>
          </div>
          <Link
            href="/certifications"
            className="text-xs font-mono text-amber-300 hover:underline"
          >
            View All Certifications &rarr;
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

      {/* SECTION 9: INTELLECTUAL PROPERTY / PATENTS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 px-6 border border-slate-800">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase text-amber-400">
              INTELLECTUAL PROPERTY / PATENTS
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
            View Patent Record &rarr;
          </Link>
        </div>
      </section>

      {/* SECTION 10: WRITING (Regular Articles ONLY) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              REGULAR ARTICLES &amp; RETROSPECTIVES
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Writing</h2>
          </div>
          <Link
            href="/writing"
            className="text-xs font-mono text-amber-300 hover:underline"
          >
            View Writing Archive &rarr;
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
                  Continue Reading &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11: MY EXPERIENCE WITH... */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              SEPARATE EXPERIENCE CONTENT SYSTEM
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">My Experience With…</h2>
          </div>
          <Link
            href="/my-experience-with"
            className="text-xs font-mono text-amber-300 hover:underline"
          >
            View Experience Index &rarr;
          </Link>
        </div>

        <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
          Practical experience, lessons learned, and engineering trade-offs gained while working with specific tools, frameworks, and concepts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {experienceWithPreviews.map((article) => (
            <div key={article.slug} className="py-3 border-b border-slate-800/60 space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <Link
                  href={`/my-experience-with/${article.slug}`}
                  className="font-bold text-slate-100 hover:text-amber-300 transition-colors"
                >
                  {article.title}
                </Link>
                <span className="text-[10px] font-mono text-slate-500 uppercase">{article.category}</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{article.summary}</p>
              <div className="pt-1">
                <Link
                  href={`/my-experience-with/${article.slug}`}
                  className="text-xs font-mono text-amber-300 hover:underline text-[11px]"
                >
                  Read Experience Breakdown &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
