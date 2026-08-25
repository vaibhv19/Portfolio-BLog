import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";
import { GithubContributionGraph } from "@/components/GithubContributionGraph";
import { GithubIcon, LinkedinIcon, BlueskyIcon, XIcon, LeetCodeIcon } from "@/components/BrandIcons";

export const metadata: Metadata = {
  title: "About | Vaibhav Gupta",
  description: "Comprehensive professional narrative covering engineering journey, internships, education, credentials, patent, and achievements.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-8 sm:space-y-10">
      {/* Page Header */}
      <header>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
          About
        </h1>
      </header>

      {/* Hero Narrative & Photograph 2-Column Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Left Column: Personal Photograph */}
        <div className="md:col-span-5 w-full">
          <div className="relative aspect-[3/4] w-full max-w-[320px] sm:max-w-[380px] md:max-w-none mx-auto overflow-hidden rounded-md bg-slate-900/40">
            <Image
              src="/images/WhatsApp Image 2026-08-25 at 4.50.20 AM.jpeg"
              alt="Vaibhav Gupta"
              fill
              className="object-cover object-top transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 42vw"
              priority
            />
          </div>
        </div>

        {/* Right Column: Personal Narrative Flow */}
        <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            I started out writing basic features until I realized that writing code is usually the easy part. Making sure it doesn't fall apart when network boundaries, concurrency, and real-world edge cases enter the picture is where the actual work lives.
          </p>

          <p>
            My focus gradually shifted from standalone scripts to distributed services, containerized sandboxes, and multi-agent AI pipelines. That evolution is something I explore in{" "}
            <Link
              href="/writing/engineering-journey"
              className="text-copper hover:text-copper-hover hover:underline font-medium transition-colors"
            >
              Engineering Journey
            </Link>
            .
          </p>

          <p>
            I prefer defining schemas and system boundaries before writing implementation logic—mostly because planning upfront saves me from pretending every design flaw was an unexpected surprise. Automated tests and meaningful Git history are part of that workflow too, covered in{" "}
            <Link
              href="/writing/how-i-work"
              className="text-copper hover:text-copper-hover hover:underline font-medium transition-colors"
            >
              How I Work
            </Link>
            , while the more personal influences behind how I approach things are explored in{" "}
            <Link
              href="/writing/identity-and-influences"
              className="text-copper hover:text-copper-hover hover:underline font-medium transition-colors"
            >
              Identity &amp; Influences
            </Link>
            .
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-mono pt-1">
            Currently somewhere between Greater Noida and GKP.
          </p>

          {/* Social / Contact Endpoints */}
          <div className="pt-2 flex items-center justify-start gap-5">
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
      </section>

      {/* Building Activity */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase">
          BUILDING ACTIVITY
        </h2>
        <GithubContributionGraph />
      </section>

      {/* Projects */}
      <section className="space-y-3.5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase">
          PROJECTS
        </h2>

        <ul className="space-y-4">
          <li className="space-y-1">
            <div>
              <span className="text-base sm:text-lg font-bold text-slate-100 inline-flex items-baseline gap-2">
                <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold">01.</span>
                <a
                  href="https://github.com/vaibhv19/Phoenix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Phoenix</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-copper" />
                </a>
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              A transparent, self-healing hybrid RAG workspace for technical documentation, with observable retrieval, scoring, reranking, and fallback orchestration.
            </p>
          </li>
          <li className="space-y-1">
            <div>
              <span className="text-base sm:text-lg font-bold text-slate-100 inline-flex items-baseline gap-2">
                <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold">02.</span>
                <a
                  href="https://github.com/vaibhv19/Vigil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Vigil</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-copper" />
                </a>
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              An autonomous AI agent evaluation harness that runs agents in safe, resource-constrained sandboxes and measures what they actually do.
            </p>
          </li>
          <li className="space-y-1">
            <div>
              <span className="text-base sm:text-lg font-bold text-slate-100 inline-flex items-baseline gap-2">
                <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold">03.</span>
                <a
                  href="https://github.com/vaibhv19/Cairn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Cairn</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-copper" />
                </a>
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              A distributed, high-performance in-memory cache service built around deterministic sharding, thread-safe concurrency, and real-time observability.
            </p>
          </li>
        </ul>

        <div className="pt-1">
          <Link
            href="/projects"
            className="text-xs font-mono text-sky-400 hover:text-copper-hover hover:underline inline-block transition-colors"
          >
            View More &rarr;
          </Link>
        </div>
      </section>

      {/* Internships & Training */}
      <section className="space-y-3.5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase">
          INTERNSHIPS &amp; TRAINING
        </h2>

        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-baseline gap-2">
              <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold">01.</span>
              <span>Edunet Foundation &times; AICTE</span>
            </h3>
            <div className="text-xs sm:text-sm font-mono text-slate-400">
              Emerging Technologies Intern
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Completed a four-week internship spanning Agentic AI, Cyber Security, Quantum Computing, and IBM Cloud.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-baseline gap-2">
              <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold">02.</span>
              <span>IBM Collaborative Project-Based Experiential Learning (PBEL)</span>
            </h3>
            <div className="text-xs sm:text-sm font-mono text-slate-400">
              Full Stack Web Development Intern
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Built multiple full-stack web applications through IBM&apos;s project-based experiential learning program.
            </p>
          </div>
        </div>

        <div className="pt-1">
          <Link
            href="/experience"
            className="text-xs font-mono text-sky-400 hover:text-copper-hover hover:underline inline-block transition-colors"
          >
            View More &rarr;
          </Link>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-3.5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase">
          EDUCATION
        </h2>

        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-slate-100">
            Greater Noida Institute of Technology (GNIOT)
          </h3>
          <div className="text-xs sm:text-sm text-slate-300">
            Bachelor of Technology, Computer Science
          </div>
          <div className="text-xs font-mono text-slate-400">
            2023 &ndash; 2027
          </div>
        </div>

        <div className="pt-1">
          <Link
            href="/education"
            className="text-xs font-mono text-sky-400 hover:text-copper-hover hover:underline inline-block transition-colors"
          >
            View More &rarr;
          </Link>
        </div>
      </section>

      {/* Credentials */}
      <section className="space-y-3.5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase">
          CREDENTIALS
        </h2>

        <ul className="space-y-2">
          <li className="flex items-baseline gap-2">
            <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold">01.</span>
            <a
              href="/certificates/IFACET%20IITK.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-100 hover:text-white hover:underline transition-colors inline-flex items-center gap-1.5 text-sm sm:text-base font-medium"
            >
              <span>IIT Kanpur &mdash; Object-Oriented Programming &amp; C++</span>
              <ExternalLink className="w-3.5 h-3.5 text-copper flex-shrink-0" />
            </a>
          </li>
          <li className="flex items-baseline gap-2">
            <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold">02.</span>
            <a
              href="/certificates/The%20Joy%20of%20Computing%20using%20Python.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-100 hover:text-white hover:underline transition-colors inline-flex items-center gap-1.5 text-sm sm:text-base font-medium"
            >
              <span>NPTEL &mdash; The Joy of Computing Using Python</span>
              <ExternalLink className="w-3.5 h-3.5 text-copper flex-shrink-0" />
            </a>
          </li>
          <li className="flex items-baseline gap-2">
            <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold">03.</span>
            <a
              href="/certificates/Certificate%20-%20E%26ICT%20Academy%2C%20IIT%20Kanpur.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-100 hover:text-white hover:underline transition-colors inline-flex items-center gap-1.5 text-sm sm:text-base font-medium"
            >
              <span>E&amp;ICT Academy, IIT Kanpur &mdash; Certification</span>
              <ExternalLink className="w-3.5 h-3.5 text-copper flex-shrink-0" />
            </a>
          </li>
        </ul>

        <div className="pt-1">
          <Link
            href="/certifications"
            className="text-xs font-mono text-sky-400 hover:text-copper-hover hover:underline inline-block transition-colors"
          >
            View More &rarr;
          </Link>
        </div>
      </section>

      {/* Patent */}
      <section className="space-y-3.5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase">
          PATENT
        </h2>

        <div className="flex items-baseline gap-2">
          <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold">01.</span>
          <a
            href="/patent/452200-001%206853%20.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 hover:text-white hover:underline transition-colors inline-flex items-center gap-1.5 text-sm sm:text-base font-medium"
          >
            <span>REAL-TIME ANALYTICS DEVICE FOR E-COMMERCE</span>
            <ExternalLink className="w-3.5 h-3.5 text-copper flex-shrink-0" />
          </a>
        </div>

        <div className="pt-1">
          <Link
            href="/intellectual-property"
            className="text-xs font-mono text-sky-400 hover:text-copper-hover hover:underline inline-block transition-colors"
          >
            View More &rarr;
          </Link>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section id="achievements" className="space-y-3.5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase">
          ACHIEVEMENTS &amp; RECOGNITION
        </h2>

        <ol className="space-y-2 font-mono text-xs sm:text-sm text-slate-400">
          <li className="flex items-start gap-2.5">
            <span className="text-slate-500 font-bold">01.</span>
            <span className="text-slate-200 font-sans text-sm sm:text-base">
              Built 11+ Software Projects Across AI, Distributed Systems &amp; Full-Stack Development
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-slate-500 font-bold">02.</span>
            <span className="text-slate-200 font-sans text-sm sm:text-base">
              Completed 150+ Data Structures &amp; Algorithms Problems
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-slate-500 font-bold">03.</span>
            <span className="text-slate-200 font-sans text-sm sm:text-base">
              Semi-Finalist &mdash; Yukti NIR Startup Challenge Hackathon 2025
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-slate-500 font-bold">04.</span>
            <span className="text-slate-200 font-sans text-sm sm:text-base">
              NPTEL Elite Certification
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-slate-500 font-bold">05.</span>
            <span className="text-slate-200 font-sans text-sm sm:text-base">
              IBM PBEL &mdash; Gold Category Assessment
            </span>
          </li>
        </ol>
      </section>
    </div>
  );
}
