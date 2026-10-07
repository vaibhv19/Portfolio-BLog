import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GithubContributionGraph } from "@/components/GithubContributionGraph";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About | Vaibhav Gupta",
  description: "Comprehensive professional narrative covering engineering journey, background, and building activity.",
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
          <div className="relative aspect-[3/4] w-full max-w-[320px] sm:max-w-[380px] md:max-w-none mx-auto overflow-hidden rounded-md bg-slate-900/40 border border-slate-800/80 transition-transform duration-300 ease-out hover:scale-[1.02]">
            <Image
              src="/images/WhatsApp Image 2026-08-25 at 4.50.20 AM.jpeg"
              alt="Vaibhav Gupta"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 42vw"
              priority
            />
          </div>
        </div>

        {/* Right Column: Personal Narrative Flow */}
        <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            I&apos;ve built everything from simple websites like{" "}
            <a
              href="https://1nfinity.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 underline hover:text-slate-100 font-medium transition-colors"
            >
              1nfinity.online
            </a>{" "}
            to systems like{" "}
            <a
              href="https://github.com/vaibhv19/Phoenix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 underline hover:text-slate-100 font-medium transition-colors"
            >
              Phoenix
            </a>
            , where I explored hybrid RAG and retrieval systems, and{" "}
            <a
              href="https://github.com/vaibhv19/Conclave"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 underline hover:text-slate-100 font-medium transition-colors"
            >
              Conclave
            </a>
            , where I experimented with multi-model AI orchestration.
          </p>

          <p>
            I&apos;ve been coding since 2019 and studying computer science formally since 2023. Over the years, I&apos;ve watched the industry change with the rise of AI, and I&apos;ve tried to evolve with it, learning new tools, ideas, and ways of building along the way.
          </p>

          <p>
            I live in Greater Noida, IN.
          </p>
          <p>
            I&apos;m looking for opportunities to collaborate, learn, and build something new.
          </p>

          <p>
            Outside engineering, I spend time with art, books, design, and fitness. Some of the things that have shaped how I think are collected in{" "}
            <Link
              href="/posts/identity-and-influences"
              className="text-slate-300 underline hover:text-slate-100 font-medium transition-colors"
            >
              Identity &amp; Influences
            </Link>
            .
          </p>

          <p>
            That&apos;s pretty much it. I build, learn, break things, and do it again.
          </p>
        </div>
      </section>

      {/* Building Activity */}
      <section className="space-y-3">
        <h2 id="building-activity" className="text-xl sm:text-2xl font-bold text-slate-100 uppercase scroll-mt-20">
          BUILDING ACTIVITY
        </h2>
        <GithubContributionGraph />
      </section>

      {/* Get In Touch */}
      <section className="min-h-[75vh] flex flex-col justify-start pt-2 sm:pt-4 pb-24 sm:pb-32 space-y-3.5">
        <h2 id="get-in-touch" className="text-xl sm:text-2xl font-bold text-slate-100 uppercase scroll-mt-20">
          GET IN TOUCH
        </h2>

        <ContactForm />

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
          If you&apos;d like to connect or have questions about my work, feel free to reach out through any of the links below or send a message directly.
        </p>

        {/* Discovery Hint */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
          Try This: Replace `/about` with `/life` in the URL to go somewhere else.
        </p>
      </section>
    </div>
  );
}
