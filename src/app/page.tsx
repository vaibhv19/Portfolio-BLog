import Link from "next/link";
import { ExternalLink, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, LeetCodeIcon } from "@/components/BrandIcons";
import { PROJECTS } from "@/data/projects";
import { WRITING_ARTICLES } from "@/data/writing";
import { EXPERIENCE_WITH_ARTICLES } from "@/data/experienceWith";
import { CERTIFICATIONS } from "@/data/certifications";
import { EXPERIENCE_ENTRIES } from "@/data/experience";
import { EDUCATION_ENTRIES } from "@/data/education";
import { PATENT_RECORDS } from "@/data/patents";

export default function HomePage() {
  // 1. Featured Work — Curated selection of 3 top deployed projects
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  // 2. Projects Preview — 3 representative portfolio samples (separate from Featured)
  const previewProjects = PROJECTS.filter(
    (p) => !p.featured && (p.category === "Testing" || p.category === "Academic")
  ).slice(0, 3);

  // 3. Selected Writing previews (top 2)
  const recentWriting = WRITING_ARTICLES.slice(0, 2);

  // 4. Selected Experience With notes (top 3)
  const experienceNotes = EXPERIENCE_WITH_ARTICLES.slice(0, 3);

  // 5. Featured Certifications preview
  const featuredCerts = CERTIFICATIONS.filter((c) => c.featured).slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 space-y-10 text-slate-300">
      {/* 1. TWO-COLUMN PERSONAL PROFILE HERO */}
      <section className="border-b border-slate-800/80 pb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
          {/* Left Column: Large Circular Neutral Portrait Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-slate-800 bg-[#0f1420] overflow-hidden shadow-lg relative group">
              <img
                src="/avatar-placeholder.svg"
                alt="Vaibhav Gupta - Profile Portrait Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Name, Philosophy Subtitle, & Contact Endpoints */}
          <div className="space-y-3.5 text-center md:text-left flex-1">
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
                Vaibhav Gupta
              </h1>
              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                &ldquo;A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice.&rdquo;
              </p>
            </div>

            {/* Standalone Icon-Only Contact Endpoints */}
            <div className="pt-2 flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://github.com/vaibhv19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="text-slate-400 hover:text-amber-300 transition-colors focus:outline-none"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhv19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-slate-400 hover:text-amber-300 transition-colors focus:outline-none"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/vaibhv_19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                title="X (Twitter)"
                className="text-slate-400 hover:text-amber-300 transition-colors focus:outline-none"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/vaibhv_19/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                title="LeetCode"
                className="text-slate-400 hover:text-amber-300 transition-colors focus:outline-none"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:gvaibhav.business@gmail.com"
                aria-label="Email"
                title="Email"
                className="text-slate-400 hover:text-amber-300 transition-colors focus:outline-none"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED WORK (Curated Selection of 3 Strongest Projects) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
          <h2 className="text-xs font-bold text-slate-100 font-mono uppercase tracking-wider">
            Featured Work
          </h2>
          <span className="text-[10px] font-mono text-slate-500">Curated Deployed Highlights</span>
        </div>

        <ul className="space-y-3 text-xs">
          {featuredProjects.map((project) => (
            <li key={project.id} className="space-y-0.5 border-b border-slate-800/40 pb-2">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-bold text-slate-100">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-300 hover:underline inline-flex items-center gap-1"
                    >
                      <span>{project.title}</span>
                      <ExternalLink className="w-3 h-3 text-amber-400" />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </span>
                <span className="text-[10px] font-mono text-amber-400/90 uppercase">Live Demo</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">{project.tagline}</p>
              <div className="text-[10px] font-mono text-slate-500">
                Tech: {project.techStack.join(" · ")}
              </div>
            </li>
          ))}
        </ul>

        {/* Relocated Bottom CTA */}
        <div className="pt-1">
          <Link href="/projects" className="text-xs font-mono text-amber-300 hover:underline inline-block">
            View All Featured Work &rarr;
          </Link>
        </div>
      </section>

      {/* 3. PROFESSIONAL EXPERIENCE */}
      <section className="space-y-3 pt-2">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-xs font-bold text-slate-100 font-mono uppercase tracking-wider">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-2">
          {EXPERIENCE_ENTRIES.map((exp) => (
            <div key={exp.id} className="space-y-0.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-100">{exp.role}</span>
                <span className="text-[10px] font-mono text-slate-500">{exp.period}</span>
              </div>
              <div className="text-slate-400 text-[11px]">{exp.organization} ({exp.type})</div>
            </div>
          ))}
        </div>

        {/* Relocated Bottom CTA */}
        <div className="pt-1">
          <Link href="/experience" className="text-xs font-mono text-amber-300 hover:underline inline-block">
            View Experience Details &rarr;
          </Link>
        </div>
      </section>

      {/* 4. PROJECTS PORTFOLIO (3 Portfolio Samples — Separate from Featured) */}
      <section className="space-y-3 pt-2">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-xs font-bold text-slate-100 font-mono uppercase tracking-wider">
            Projects Portfolio
          </h2>
        </div>

        <ul className="space-y-2 text-xs">
          {previewProjects.map((project) => (
            <li key={project.id} className="flex items-baseline gap-2">
              <span className="text-slate-500 font-mono">•</span>
              <span className="font-semibold text-slate-200">{project.title}</span>
              <span className="text-slate-500">—</span>
              <span className="text-slate-400 truncate">{project.tagline}</span>
            </li>
          ))}
        </ul>

        {/* Relocated Bottom CTA */}
        <div className="pt-1">
          <Link href="/projects" className="text-xs font-mono text-amber-300 hover:underline inline-block">
            View All Projects ({PROJECTS.length}) &rarr;
          </Link>
        </div>
      </section>

      {/* 5. SKILLS & TECHNICAL FOCUS */}
      <section className="space-y-2 pt-2">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-xs font-bold text-slate-100 font-mono uppercase tracking-wider">
            Technical Focus
          </h2>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          <strong className="text-slate-100 font-mono text-[11px] uppercase text-amber-400 mr-2">Core Stack:</strong>
          Java 21, Python, TypeScript, Spring Boot, FastAPI, LangGraph, Hybrid RAG (pgvector), Docker, AWS (EC2/RDS/S3), Consistent Hashing, Virtual Threads.
        </p>

        {/* Relocated Bottom CTA */}
        <div className="pt-1">
          <Link href="/skills" className="text-xs font-mono text-amber-300 hover:underline inline-block">
            View Skills Taxonomy &rarr;
          </Link>
        </div>
      </section>

      {/* 6. EDUCATION */}
      <section className="space-y-2 pt-2">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-xs font-bold text-slate-100 font-mono uppercase tracking-wider">
            Education
          </h2>
        </div>

        {EDUCATION_ENTRIES.map((edu) => (
          <div key={edu.id} className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-200">{edu.degree} — {edu.institution}</span>
            <span className="text-[10px] font-mono text-slate-500">{edu.period}</span>
          </div>
        ))}

        {/* Relocated Bottom CTA */}
        <div className="pt-1">
          <Link href="/education" className="text-xs font-mono text-slate-300 hover:text-amber-300 transition-colors underline inline-block">
            View Education &rarr;
          </Link>
        </div>
      </section>

      {/* 7. CERTIFICATIONS & INTELLECTUAL PROPERTY */}
      <section className="space-y-2 pt-2 border-t border-slate-800/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px]">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-bold uppercase">Credentials &amp; IP:</span>
            <Link href="/certifications" className="text-slate-300 hover:text-amber-300 underline">
              {featuredCerts.length} Featured Certifications
            </Link>
            <span>·</span>
            <Link href="/intellectual-property" className="text-slate-300 hover:text-amber-300 underline">
              Patent Application 452200-001
            </Link>
          </div>
        </div>
      </section>

      {/* 8. WRITING & EXPERIENCE NOTES */}
      <section className="space-y-3 pt-2 border-t border-slate-800/80">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-xs font-bold text-slate-100 font-mono uppercase tracking-wider">
            Recent Writing &amp; Experience Notes
          </h2>
        </div>

        <div className="space-y-3 text-xs">
          {recentWriting.map((article) => (
            <div key={article.slug} className="space-y-0.5">
              <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                <span>{article.date}</span>
                <span>{article.readingTime}</span>
              </div>
              <h3 className="font-bold text-slate-100 hover:text-amber-300 transition-colors">
                <Link href={`/writing/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="text-slate-400 text-xs">{article.excerpt}</p>
            </div>
          ))}
        </div>

        {/* Relocated Bottom CTAs */}
        <div className="flex items-center gap-4 text-xs font-mono pt-2 border-t border-slate-800/40">
          <Link href="/writing" className="text-amber-300 hover:underline">
            Writing Archive &rarr;
          </Link>
          <Link href="/my-experience-with" className="text-slate-400 hover:text-slate-200">
            Experience Index &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
