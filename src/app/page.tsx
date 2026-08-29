import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, BlueskyIcon, XIcon, ThreadsIcon } from "@/components/BrandIcons";
import { StatusBadge } from "@/components/StatusBadge";
import { WRITING_ARTICLES } from "@/data/writing";

function formatDateDDMMYYYY(dateStr: string) {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

export default function HomePage() {
  // Sort articles by date descending
  const sortedArticles = [...WRITING_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  // Recent Writing — Homepage selection (latest 5 articles preview)
  const recentWriting = sortedArticles.slice(0, 5);

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
                className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
              >
                <GithubIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhv19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
              >
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://bsky.app/profile/vaibhv19.bsky.social?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bluesky"
                title="Bluesky"
                className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
              >
                <BlueskyIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://x.com/vaibhv_19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                title="X (Twitter)"
                className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
              >
                <XIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.threads.com/@vaibhv_19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                title="Threads"
                className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
              >
                <ThreadsIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="mailto:gvaibhav.business@gmail.com"
                aria-label="Email"
                title="Email"
                className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
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
          {recentWriting.map((article) => {
            const articleIndex = sortedArticles.indexOf(article);
            const indexStr = `${sortedArticles.length - articleIndex} /`;
            return (
              <div key={article.slug} className="space-y-1 group">
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:underline transition-all">
                  <Link href={`/writing/${article.slug}`}>
                    {indexStr} {article.title}
                  </Link>
                </h3>
                {"date" in article && article.date && (
                  <div className="font-mono text-xs text-slate-400">
                    <time dateTime={article.date}>{formatDateDDMMYYYY(article.date)}</time>
                  </div>
                )}
                {"excerpt" in article && article.excerpt && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {article.excerpt}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="pt-1">
          <Link href="/writing" className="text-xs font-mono text-sky-400 hover:underline inline-block transition-all">
            All Posts &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

