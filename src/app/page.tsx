import Link from "next/link";
import { 
  ArrowRight, ExternalLink, Code2, Cpu, Shield, Sparkles, Terminal, 
  Award, Briefcase, GraduationCap, FileText, ChevronRight, Layers, Lock, ShieldCheck 
} from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SKILL_CATEGORIES } from "@/data/skills";
import { WRITING_ARTICLES } from "@/data/writing";
import { CERTIFICATIONS } from "@/data/certifications";
import { EXPERIENCE_ENTRIES } from "@/data/experience";
import { EDUCATION_ENTRIES } from "@/data/education";
import { PATENT_RECORDS } from "@/data/patents";

export default function HomePage() {
  // Filter content according to strict planning rules
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const previewProjects = PROJECTS.filter((p) => p.homepagePreview);
  const featuredCertificates = CERTIFICATIONS.filter((c) => c.featured).sort(
    (a, b) => (a.homeOrder || 99) - (b.homeOrder || 99)
  );
  // ONLY 2-3 regular writing articles (never My Experience With...)
  const writingPreviews = WRITING_ARTICLES.slice(0, 3);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-12 border-b border-slate-800/60 bg-grid-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SOFTWARE ENGINEER & BUILDER</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-tight max-w-4xl">
            Building distributed systems, AI agent platforms &amp; cloud architecture with engineering precision.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-serif-editorial leading-relaxed max-w-3xl border-l-2 border-amber-500/50 pl-4 py-1 italic">
            &ldquo;A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice.&rdquo;
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Specializing in distributed cache systems (Java/Python), autonomous AI agent orchestration (LangGraph, Spring AI), hybrid RAG retrieval pipelines (pgvector), and full-stack cloud deployments on AWS.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/10"
            >
              <span>Explore Projects Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/80 font-medium text-sm transition-colors"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Read Technical Writing</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 text-sm transition-colors"
            >
              <span>About Narrative</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. About Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-xl bg-[#131b2e] border border-slate-800/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400/90 font-semibold">
                ABOUT PREVIEW
              </span>
              <span className="text-xs text-slate-500 font-mono">Philosophy &amp; Discipline</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
              Engineering × Expression × Discipline
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
              Software engineering is the primary communication layer of my work. Personality and approach are quietly shaped by artistic craft (composition and original texture), fitness (repetition, strength, and controlled intensity), and philosophical grounding in continuous practice.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors"
              >
                <span>Read Complete Editorial Narrative &amp; GitHub Activity</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects (Live Deployed Projects) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              FEATURED WORK
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Live Deployed Experiences</h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Projects specifically featuring live interactive demonstrations or production cloud deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-xl bg-[#131b2e]/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-200 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                    LIVE DEMO
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{project.category}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 space-y-4 pt-4 border-t border-slate-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] bg-slate-800/90 text-slate-300 px-2 py-0.5 rounded border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs pt-1">
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
                      <span>Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Projects Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              ENGINEERING CATALOG PREVIEW
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Core Engineering Systems</h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors"
          >
            <span>View All Projects →</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-xl bg-[#131b2e]/60 border border-slate-800/80 hover:border-slate-700 transition-all"
            >
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400">{project.category}</div>
                <h3 className="text-base font-semibold text-slate-100">{project.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{project.tagline}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-mono">
                  {project.techStack.slice(0, 3).join(" • ")}
                </span>
                <Link
                  href="/projects"
                  className="text-amber-300 hover:underline flex items-center gap-1 text-xs font-medium"
                >
                  <span>Catalog</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Experience & Education Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience Preview */}
        <div className="space-y-4 p-6 rounded-xl bg-[#131b2e]/70 border border-slate-800/80">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <h2 className="text-lg font-bold text-slate-100">Experience Preview</h2>
            </div>
            <Link href="/experience" className="text-xs text-amber-300 hover:underline">
              View All Experience →
            </Link>
          </div>
          <div className="space-y-4">
            {EXPERIENCE_ENTRIES.map((exp) => (
              <div key={exp.id} className="space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">{exp.role}</span>
                  <span className="text-[10px] font-mono text-slate-400">{exp.period}</span>
                </div>
                <div className="text-amber-400/90 font-medium">{exp.organization}</div>
                <p className="text-slate-400 leading-relaxed pt-1">{exp.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Preview */}
        <div className="space-y-4 p-6 rounded-xl bg-[#131b2e]/70 border border-slate-800/80">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <h2 className="text-lg font-bold text-slate-100">Education Preview</h2>
            </div>
            <Link href="/education" className="text-xs text-amber-300 hover:underline">
              View All Education →
            </Link>
          </div>
          <div className="space-y-4">
            {EDUCATION_ENTRIES.map((edu) => (
              <div key={edu.id} className="space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">{edu.degree}</span>
                  <span className="text-[10px] font-mono text-slate-400">{edu.period}</span>
                </div>
                <div className="text-amber-400/90 font-medium">{edu.institution}</div>
                <div className="text-slate-300 font-mono text-[11px] pt-1">
                  Specialization: {edu.specialization}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Skills Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              TECHNICAL TERRITORY
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Skills &amp; Technologies</h2>
          </div>
          <Link
            href="/skills"
            className="inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors"
          >
            <span>View All Skills →</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { name: "Java", category: "Languages", link: "/my-experience-with/java" },
            { name: "Python", category: "Languages", link: "/my-experience-with/python" },
            { name: "TypeScript", category: "Languages", link: "/my-experience-with/typescript" },
            { name: "Spring Boot", category: "Backend", link: "/my-experience-with/spring-boot" },
            { name: "FastAPI", category: "Backend", link: "/my-experience-with/fastapi" },
            { name: "React", category: "Frontend", link: "/my-experience-with/react" },
            { name: "Next.js", category: "Frontend", link: "/my-experience-with/nextjs" },
            { name: "LangGraph", category: "AI Systems", link: "/my-experience-with/langgraph" },
            { name: "pgvector", category: "Data", link: "/my-experience-with/postgresql" },
            { name: "Consistent Hashing", category: "Systems", link: "/my-experience-with/consistent-hashing" },
            { name: "Virtual Threads", category: "Systems", link: "/my-experience-with/virtual-threads" },
            { name: "Docker", category: "DevOps", link: "/my-experience-with/docker" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="p-3 rounded-lg bg-[#131b2e]/90 border border-slate-800 hover:border-amber-500/40 text-center transition-all group"
            >
              <div className="text-xs font-semibold text-slate-200 group-hover:text-amber-300 transition-colors">
                {item.name}
              </div>
              <div className="text-[9px] font-mono text-slate-400 mt-1">
                {item.category}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Certifications Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              CREDENTIALS PREVIEW
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Featured Certifications</h2>
          </div>
          <Link
            href="/certifications"
            className="inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors"
          >
            <span>View All Certifications →</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCertificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#131b2e]/70 border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                    {cert.recognition || "Verified"}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cert.year}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs text-slate-400">{cert.issuer}</div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-amber-300 font-medium flex items-center gap-1">
                <span>Open Original PDF</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 8. Regular Writing Preview (Strict rule: NO My Experience With...) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              TECHNICAL WRITING
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">Articles &amp; Retrospectives</h2>
          </div>
          <Link
            href="/writing"
            className="inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors"
          >
            <span>View All Writing →</span>
          </Link>
        </div>

        <div className="space-y-4">
          {writingPreviews.map((article) => (
            <div
              key={article.slug}
              className="p-6 rounded-xl bg-[#131b2e]/60 border border-slate-800/80 hover:border-slate-700 transition-all space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{article.date}</span>
                <span>{article.readingTime}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 hover:text-amber-300 transition-colors">
                <Link href={`/writing/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                {article.excerpt}
              </p>
              <div>
                <Link
                  href={`/writing/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <span>Continue Reading →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Intellectual Property / Patent Presence */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/5 via-[#131b2e] to-blue-600/5 border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase text-amber-400 font-semibold">
                INTELLECTUAL PROPERTY
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-100">
              Patent Application 452200-001 6853
            </h3>
            <p className="text-xs text-slate-400">
              Registered design patent record covering technical software systems and architectural specifications.
            </p>
          </div>
          <Link
            href="/intellectual-property"
            className="px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-medium transition-colors whitespace-nowrap"
          >
            View Patent Record →
          </Link>
        </div>
      </section>
    </div>
  );
}
