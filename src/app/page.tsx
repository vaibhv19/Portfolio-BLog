import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, BlueskyIcon, XIcon, LeetCodeIcon } from "@/components/BrandIcons";
import { StatusBadge } from "@/components/StatusBadge";
import { PROJECTS } from "@/data/projects";
import { WRITING_ARTICLES } from "@/data/writing";

export default function HomePage() {
  // 1. Featured Work — Curated selection of featured projects
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  // 2. Recent Writing — Homepage selection (latest 5 articles preview)
  const recentWriting = WRITING_ARTICLES.slice(0, 5);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-7 text-slate-300">
      {/* 1. TWO-COLUMN PERSONAL PROFILE HERO */}
      <section className="border-b border-slate-800/80 pb-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
          {/* Left Column: Large Circular Neutral Portrait */}
          <div className="flex-shrink-0 relative">
            <Link
              href="/about"
              aria-label="View About Vaibhav Gupta"
              title="About Vaibhav Gupta"
              className="block rounded-full focus:outline-none focus:ring-2 focus:ring-copper/50 transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
            >
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-slate-800 bg-[#0f1420] overflow-hidden shadow-lg">
                <img
                  src="/profile-avatar.jpeg"
                  alt="Vaibhav Gupta - Profile Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <StatusBadge />
          </div>

          {/* Right Column: Name, Philosophy Subtitle, & Contact Endpoints */}
          <div className="space-y-3.5 text-center md:text-left flex-1 md:pt-2.5">
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-100 font-sans inline-flex items-center justify-center md:justify-start gap-2">
                <span>Hi, I&apos;m @Vaibhv19</span>
                <Link
                  href="/about"
                  aria-label="About Vaibhav"
                  title="About Vaibhav"
                  className="inline-flex items-center text-copper hover:text-copper-hover transition-colors focus:outline-none"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </h1>
              <p className="text-sm sm:text-base font-mono text-slate-300 leading-relaxed">
                &ldquo;A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice.&rdquo;
              </p>
            </div>

            {/* Standalone Icon-Only Contact Endpoints */}
            <div className="pt-2.5 flex items-center justify-center md:justify-start gap-5">
              <a
                href="https://github.com/vaibhv19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="text-slate-400 hover:text-copper-hover transition-colors focus:outline-none"
              >
                <GithubIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhv19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-slate-400 hover:text-copper-hover transition-colors focus:outline-none"
              >
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://bsky.app/profile/vaibhv19.bsky.social?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bluesky"
                title="Bluesky"
                className="text-slate-400 hover:text-copper-hover transition-colors focus:outline-none"
              >
                <BlueskyIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://x.com/vaibhv_19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                title="X (Twitter)"
                className="text-slate-400 hover:text-copper-hover transition-colors focus:outline-none"
              >
                <XIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://leetcode.com/u/vaibhv_19/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                title="LeetCode"
                className="text-slate-400 hover:text-copper-hover transition-colors focus:outline-none"
              >
                <LeetCodeIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="mailto:gvaibhav.business@gmail.com"
                aria-label="Email"
                title="Email"
                className="text-slate-400 hover:text-copper-hover transition-colors focus:outline-none"
              >
                <Mail className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RECENT */}
      <section className="space-y-3.5">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-sm font-bold text-copper font-mono uppercase tracking-wider">
            Recent
          </h2>
        </div>

        <div className="space-y-4">
          {recentWriting.map((article) => (
            <div key={article.slug} className="space-y-1 group">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-copper-hover transition-colors">
                <Link href={`/writing/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>
              {"date" in article && article.date && (
                <div className="font-mono text-xs text-slate-400">
                  {article.date}
                </div>
              )}
              {"excerpt" in article && article.excerpt && (
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {article.excerpt}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-1">
          <Link href="/writing" className="text-xs font-mono text-sky-400 hover:text-copper-hover hover:underline inline-block transition-colors">
            All Posts &rarr;
          </Link>
        </div>
      </section>

      {/* 3. FEATURED */}
      <section className="space-y-3.5 pt-1">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-sm font-bold text-copper font-mono uppercase tracking-wider">
            Featured
          </h2>
        </div>

        <ul className="space-y-4">
          {featuredProjects.map((project) => (
            <li key={project.id} className="space-y-1 group border-b border-slate-800/40 pb-3.5 last:border-b-0 last:pb-0">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-copper-hover transition-colors">
                {project.githubUrl || project.demoUrl ? (
                  <a
                    href={project.githubUrl || project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    <span>{project.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-copper" />
                  </a>
                ) : (
                  <span>{project.title}</span>
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.tagline}</p>
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="pt-1">
          <Link href="/projects" className="text-xs font-mono text-sky-400 hover:text-copper-hover hover:underline inline-block transition-colors">
            View More &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
