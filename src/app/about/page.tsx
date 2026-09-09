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
            I started out writing basic features until I realized that writing code is usually the easy part. Making sure it doesn't fall apart when network boundaries, concurrency, and real-world edge cases enter the picture is where the actual work lives.
          </p>

          <p>
            My focus gradually shifted from standalone scripts to distributed services, containerized sandboxes, and multi-agent AI pipelines. That evolution is something I explore in{" "}
            <Link
              href="/writing/engineering-journey"
              className="text-copper hover:underline font-medium transition-all"
            >
              Engineering Journey
            </Link>
            .
          </p>

          <p>
            I prefer defining schemas and system boundaries before writing implementation logic—mostly because planning upfront saves me from pretending every design flaw was an unexpected surprise. Automated tests and meaningful Git history are part of that workflow too, covered in{" "}
            <Link
              href="/writing/how-i-work"
              className="text-copper hover:underline font-medium transition-all"
            >
              How I Work
            </Link>
            , while the more personal influences behind how I approach things are explored in{" "}
            <Link
              href="/writing/identity-and-influences"
              className="text-copper hover:underline font-medium transition-all"
            >
              Identity &amp; Influences
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Building Activity */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase">
          BUILDING ACTIVITY
        </h2>
        <GithubContributionGraph />
      </section>

      {/* Get In Touch */}
      <section className="min-h-[75vh] flex flex-col justify-start pt-2 sm:pt-4 pb-16 sm:pb-20 space-y-3.5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase">
          GET IN TOUCH
        </h2>

        <ContactForm />

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
          If you&apos;d like to connect or have questions about my work, feel free to reach out through any of the links below or send a message directly.
        </p>

        {/* Location / Sign-off */}
        <p className="text-xs sm:text-sm text-slate-400 font-mono pt-2">
          Currently somewhere between Greater Noida and GKP.
        </p>
      </section>
    </div>
  );
}
