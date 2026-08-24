import { Metadata } from "next";
import Link from "next/link";
import { User, Github, Linkedin, Mail, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubContributionGraph } from "@/components/GithubContributionGraph";

export const metadata: Metadata = {
  title: "About & Editorial Narrative | Vaibhav Gupta",
  description: "Editorial narrative exploring engineering progression, working philosophy, identity, and building consistency.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Introduction Header */}
      <header className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <User className="w-3.5 h-3.5" />
          <span>EDITORIAL NARRATIVE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          About Vaibhav Gupta
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 font-serif-editorial italic leading-relaxed border-l-2 border-amber-500/50 pl-4 py-1">
          &ldquo;A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice.&rdquo;
        </p>
      </header>

      {/* 2. Editorial Story Flow */}
      <article className="prose prose-invert max-w-none space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
        {/* Engineering Journey */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <span className="text-amber-400 font-mono text-xs">01 /</span>
            <span>Engineering Journey</span>
          </h2>
          <p>
            My engineering journey evolved from writing simple client-side features toward thinking deeply about distributed systems, background concurrency models, and multi-agent AI architecture.
          </p>
          <p>
            Early work taught me how to write functional code. But real growth occurred when I learned to treat applications as interconnected systems—where architecture comes before implementation, system boundaries must be explicitly isolated, and verification is part of the work rather than an afterthought.
          </p>
          <div className="p-4 rounded-xl bg-[#131b2e]/60 border border-slate-800/80 font-mono text-xs text-amber-300/90">
            Write Code &rarr; Learn to Build &rarr; Think About Architecture &rarr; Plan Systems &rarr; Verify Work &rarr; Follow Engineering Discipline
          </div>
        </section>

        {/* How I Work */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <span className="text-amber-400 font-mono text-xs">02 /</span>
            <span>How I Work</span>
          </h2>
          <p>
            I follow a structured engineering workflow that prioritizes clarity, planning, and clean version control:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 bg-[#131b2e]/60 p-3.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-100 font-semibold">Plan before building:</strong> Define architectural constraints, schemas, and data boundaries before touching implementation logic.
              </div>
            </li>
            <li className="flex items-start gap-3 bg-[#131b2e]/60 p-3.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-100 font-semibold">Verify before declaring completion:</strong> Never rely on superficial syntax fixes; run automated unit tests, integration stress tests, and production builds.
              </div>
            </li>
            <li className="flex items-start gap-3 bg-[#131b2e]/60 p-3.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-100 font-semibold">Version control is part of the work:</strong> Write meaningful git commit histories that document structural boundaries clearly.
              </div>
            </li>
            <li className="flex items-start gap-3 bg-[#131b2e]/60 p-3.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-100 font-semibold">Treat projects as systems:</strong> Account for operational concerns, logging, container sandboxing, and graceful fallback handling.
              </div>
            </li>
          </ul>
        </section>

        {/* The Person Behind the Engineering */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <span className="text-amber-400 font-mono text-xs">03 /</span>
            <span>The Person Behind the Engineering</span>
          </h2>
          <p>
            The portfolio&apos;s personality is quietly influenced by several personal pillars:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#131b2e]/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-slate-100 text-sm text-amber-300">Art &amp; Composition</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Inspired by Vincent van Gogh&apos;s expressive energy, deep midnight tones, and warm gold accents. Interface design is approached with composition and visual craft.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#131b2e]/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-slate-100 text-sm text-amber-300">Fitness &amp; Energy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fitness brings controlled intensity, repetition, progression, and the mental discipline required to tackle complex engineering tasks consistently.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#131b2e]/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-slate-100 text-sm text-amber-300">Bhagavad Gita</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Quiet philosophical grounding in focus on action, dedication to effort, and mastery through continuous practice without distraction.
              </p>
            </div>
          </div>
        </section>

        {/* Building Activity */}
        <section className="space-y-4 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <span className="text-amber-400 font-mono text-xs">04 /</span>
            <span>Building Activity</span>
          </h2>
          <GithubContributionGraph />
        </section>

        {/* Connect Section */}
        <section className="space-y-4 pt-4 border-t border-slate-800">
          <h2 className="text-xl font-bold text-slate-100">Connect &amp; Collaborate</h2>
          <p className="text-xs text-slate-400">
            Open to engineering discussions, distributed system architecture inquiries, and software development collaborations.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://github.com/vaibhv19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#131b2e] hover:bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium transition-colors"
            >
              <Github className="w-4 h-4 text-amber-400" />
              <span>GitHub Profile</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#131b2e] hover:bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium transition-colors"
            >
              <Linkedin className="w-4 h-4 text-amber-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
