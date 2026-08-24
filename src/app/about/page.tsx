import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GithubContributionGraph } from "@/components/GithubContributionGraph";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export const metadata: Metadata = {
  title: "About & Editorial Narrative | Vaibhav Gupta",
  description: "Editorial narrative exploring engineering progression, working philosophy, identity, and building consistency.",
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
        <p className="text-base sm:text-lg text-slate-300 font-serif-editorial italic leading-relaxed border-l-2 border-amber-400/80 pl-4 py-1">
          &ldquo;A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice.&rdquo;
        </p>
      </header>

      {/* 2. Editorial Story Flow */}
      <article className="space-y-12 text-sm sm:text-base text-slate-300 leading-relaxed">
        {/* Engineering Journey */}
        <section className="space-y-3">
          <div className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">
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
          <div className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">
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
              <strong className="text-slate-100 font-semibold font-mono text-xs text-amber-300">1. Plan before building:</strong>
              <p className="text-slate-400">Define architectural constraints, schemas, and data boundaries before touching implementation logic.</p>
            </div>
            <div className="space-y-0.5">
              <strong className="text-slate-100 font-semibold font-mono text-xs text-amber-300">2. Verify before completion:</strong>
              <p className="text-slate-400">Never rely on superficial syntax fixes; run automated unit tests, integration stress tests, and production builds.</p>
            </div>
            <div className="space-y-0.5">
              <strong className="text-slate-100 font-semibold font-mono text-xs text-amber-300">3. Version control as part of work:</strong>
              <p className="text-slate-400">Write meaningful git commit histories that document structural boundaries clearly.</p>
            </div>
            <div className="space-y-0.5">
              <strong className="text-slate-100 font-semibold font-mono text-xs text-amber-300">4. Systems thinking:</strong>
              <p className="text-slate-400">Account for operational concerns, logging, container sandboxing, and graceful fallback handling.</p>
            </div>
          </div>
        </section>

        {/* The Person Behind the Engineering */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">
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
                Inspired by Vincent van Gogh&apos;s expressive energy, deep midnight tones, and warm gold accents. Interface design is approached with composition and visual craft.
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
          <div className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">
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
              href="https://github.com/vaibhv19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Profile</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
