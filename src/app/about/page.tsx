import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { GithubContributionGraph } from "@/components/GithubContributionGraph";

export const metadata: Metadata = {
  title: "About & Professional Narrative | Vaibhav Gupta",
  description: "Comprehensive professional narrative covering engineering journey, internships, education, technologies, credentials, patent, and achievements.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Introduction Header */}
      <header className="space-y-4 border-b border-slate-800 pb-6">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
          EDITORIAL NARRATIVE
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          About Vaibhav Gupta
        </h1>
        <p className="text-base sm:text-lg text-slate-300 font-serif-editorial italic leading-relaxed border-l-2 border-sky-400/80 pl-4 py-1">
          &ldquo;A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice.&rdquo;
        </p>
      </header>

      {/* 1. About / Personal Narrative Story Flow */}
      <article className="space-y-12 text-sm sm:text-base text-slate-300 leading-relaxed">
        {/* Engineering Journey */}
        <section className="space-y-3">
          <div className="text-xs font-mono uppercase text-sky-400 tracking-wider font-bold">
            01 / ENGINEERING JOURNEY
          </div>
          <h2 className="text-xl font-bold text-slate-100">
            From Code Snippets to Systems Thinking
          </h2>
          <p>
            My engineering journey evolved from writing simple client-side features toward thinking deeply about distributed systems, background concurrency models, and multi-agent AI architecture.
          </p>
          <p>
            Early work taught me how to write functional code. But real growth occurred when I learned to treat applications as interconnected systems—where architecture comes before implementation, system boundaries must be explicitly isolated, and verification is part of the work rather than an afterthought.
          </p>
          <div className="pt-2 font-mono text-xs text-slate-400 border-l-2 border-slate-700 pl-3">
            Write Code &rarr; Learn to Build &rarr; Think About Architecture &rarr; Plan Systems &rarr; Verify Work &rarr; Follow Engineering Discipline
          </div>
        </section>

        {/* How I Work */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="text-xs font-mono uppercase text-sky-400 tracking-wider font-bold">
            02 / HOW I WORK
          </div>
          <h2 className="text-xl font-bold text-slate-100">
            Engineering Workflow &amp; Discipline
          </h2>
          <p>
            I follow a structured engineering workflow that prioritizes clarity, planning, and clean version control:
          </p>
          <div className="space-y-3 pt-2 text-xs">
            <div className="space-y-0.5">
              <strong className="text-slate-100 font-semibold font-mono text-xs text-sky-300">1. Plan before building:</strong>
              <p className="text-slate-400">Define architectural constraints, schemas, and data boundaries before touching implementation logic.</p>
            </div>
            <div className="space-y-0.5">
              <strong className="text-slate-100 font-semibold font-mono text-xs text-sky-300">2. Verify before completion:</strong>
              <p className="text-slate-400">Never rely on superficial syntax fixes; run automated unit tests, integration stress tests, and production builds.</p>
            </div>
            <div className="space-y-0.5">
              <strong className="text-slate-100 font-semibold font-mono text-xs text-sky-300">3. Version control as part of work:</strong>
              <p className="text-slate-400">Write meaningful git commit histories that document structural boundaries clearly.</p>
            </div>
            <div className="space-y-0.5">
              <strong className="text-slate-100 font-semibold font-mono text-xs text-sky-300">4. Systems thinking:</strong>
              <p className="text-slate-400">Account for operational concerns, logging, container sandboxing, and graceful fallback handling.</p>
            </div>
          </div>
        </section>

        {/* Identity & Influences */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="text-xs font-mono uppercase text-sky-400 tracking-wider font-bold">
            03 / IDENTITY &amp; INFLUENCES
          </div>
          <h2 className="text-xl font-bold text-slate-100">
            Art, Fitness &amp; Philosophy
          </h2>
          <p>
            The portfolio&apos;s personality is quietly influenced by several personal pillars:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="space-y-1">
              <div className="font-bold text-slate-100">Art &amp; Composition</div>
              <p className="text-slate-400 leading-relaxed">
                Inspired by Vincent van Gogh&apos;s expressive energy, deep midnight tones, and subtle sky-blue accents. Interface design is approached with composition and visual craft.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-bold text-slate-100">Fitness &amp; Energy</div>
              <p className="text-slate-400 leading-relaxed">
                Fitness brings controlled intensity, repetition, progression, and the mental discipline required to tackle complex engineering tasks consistently.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-bold text-slate-100">The Bhagavad Gita</div>
              <p className="text-slate-400 leading-relaxed">
                Quiet philosophical grounding in focus on action, dedication to effort, and mastery through continuous practice without distraction.
              </p>
            </div>
          </div>
        </section>

        {/* Building Activity */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="text-xs font-mono uppercase text-sky-400 tracking-wider font-bold">
            04 / BUILDING ACTIVITY
          </div>
          <GithubContributionGraph />
        </section>

        {/* Connect Section */}
        <section className="space-y-3 pt-6 border-t border-slate-800">
          <h2 className="text-base font-bold text-slate-100 font-mono uppercase">Connect &amp; Collaborate</h2>
          <p className="text-xs text-slate-400">
            Open to engineering discussions, distributed system architecture inquiries, and software development collaborations.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono pt-1">
            <a
              href="mailto:gvaibhav.business@gmail.com"
              className="text-sky-300 hover:underline inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>gvaibhav.business@gmail.com</span>
            </a>
            <a
              href="https://github.com/vaibhv19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhv19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </article>

      {/* 2. INTERNSHIPS & TRAINING */}
      <section className="space-y-3.5 pt-4">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-sm font-bold text-copper font-mono uppercase tracking-wider">
            Internships &amp; Training
          </h2>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-sky-400">
              Edunet Foundation &times; AICTE
            </h3>
            <div className="text-xs sm:text-sm font-mono text-slate-400">
              Emerging Technologies Intern
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Completed a four-week internship spanning Agentic AI, Cyber Security, Quantum Computing, and IBM Cloud.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-sky-400">
              IBM Collaborative Project-Based Experiential Learning (PBEL)
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
            className="text-xs font-mono text-stone-400 hover:text-copper-hover hover:underline inline-block transition-colors"
          >
            View More &rarr;
          </Link>
        </div>
      </section>

      {/* 3. EDUCATION */}
      <section className="space-y-3.5 pt-4">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-sm font-bold text-copper font-mono uppercase tracking-wider">
            Education
          </h2>
        </div>

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
            className="text-xs font-mono text-stone-400 hover:text-copper-hover hover:underline inline-block transition-colors"
          >
            View More &rarr;
          </Link>
        </div>
      </section>

      {/* 4. TECHNOLOGIES */}
      <section className="space-y-3 pt-4">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-sm font-bold text-copper font-mono uppercase tracking-wider">
            Technologies
          </h2>
        </div>

        <div className="space-y-1.5 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            <strong className="text-sky-400 font-mono text-xs sm:text-sm uppercase mr-2">Languages:</strong>
            Java, Python, TypeScript, SQL
          </p>
          <p>
            <strong className="text-sky-400 font-mono text-xs sm:text-sm uppercase mr-2">Backend:</strong>
            Spring Boot, FastAPI, Django, REST APIs
          </p>
          <p>
            <strong className="text-sky-400 font-mono text-xs sm:text-sm uppercase mr-2">Frontend:</strong>
            React, TypeScript, Tailwind CSS
          </p>
          <p>
            <strong className="text-sky-400 font-mono text-xs sm:text-sm uppercase mr-2">AI &amp; Agent Systems:</strong>
            LangGraph, Hybrid RAG, pgvector, LLM Integration
          </p>
          <p>
            <strong className="text-sky-400 font-mono text-xs sm:text-sm uppercase mr-2">Data &amp; Infrastructure:</strong>
            PostgreSQL, MongoDB, Docker, AWS
          </p>
          <p>
            <strong className="text-sky-400 font-mono text-xs sm:text-sm uppercase mr-2">Systems &amp; Concurrency:</strong>
            Virtual Threads, Consistent Hashing, Multithreading
          </p>
        </div>
      </section>

      {/* 5. PROJECTS */}
      <section className="space-y-3.5 pt-4">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-sm font-bold text-copper font-mono uppercase tracking-wider">
            Projects
          </h2>
        </div>

        <ul className="space-y-4">
          <li className="space-y-1">
            <div>
              <span className="text-base sm:text-lg font-bold text-sky-400">
                <a
                  href="https://github.com/vaibhv19/Phoenix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 hover:underline inline-flex items-center gap-1.5"
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
              <span className="text-base sm:text-lg font-bold text-sky-400">
                <a
                  href="https://github.com/vaibhv19/Vigil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 hover:underline inline-flex items-center gap-1.5"
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
              <span className="text-base sm:text-lg font-bold text-sky-400">
                <a
                  href="https://github.com/vaibhv19/Cairn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 hover:underline inline-flex items-center gap-1.5"
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
            className="text-xs font-mono text-stone-400 hover:text-copper-hover hover:underline inline-block transition-colors"
          >
            View More &rarr;
          </Link>
        </div>
      </section>

      {/* 5. CREDENTIALS */}
      <section className="space-y-3.5 pt-4">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-sm font-bold text-copper font-mono uppercase tracking-wider">
            Credentials
          </h2>
        </div>

        <ul className="space-y-2">
          <li>
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
          <li>
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
          <li>
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
            className="text-xs font-mono text-stone-400 hover:text-copper-hover hover:underline inline-block transition-colors"
          >
            View More &rarr;
          </Link>
        </div>
      </section>

      {/* 6. PATENT */}
      <section className="space-y-3.5 pt-4">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-sm font-bold text-copper font-mono uppercase tracking-wider">
            Patent
          </h2>
        </div>

        <div>
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
            className="text-xs font-mono text-stone-400 hover:text-copper-hover hover:underline inline-block transition-colors"
          >
            View More &rarr;
          </Link>
        </div>
      </section>

      {/* 7. ACHIEVEMENTS & RECOGNITION */}
      <section id="achievements" className="space-y-3.5 pt-4">
        <div className="border-b border-slate-800 pb-1.5">
          <h2 className="text-sm font-bold text-copper font-mono uppercase tracking-wider">
            Achievements &amp; Recognition
          </h2>
        </div>

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
