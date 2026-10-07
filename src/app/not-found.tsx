import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 space-y-6 text-slate-300">
      <div className="space-y-3 border-b border-slate-800/80 pb-6">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-copper">
          404 Error
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
          The page you are looking for doesn&apos;t exist, has been moved, or may have been archived.
        </p>
      </div>

      <div className="space-y-4 pt-2">
        <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
          Explore from here:
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-mono">
          <Link
            href="/"
            className="px-3.5 py-2 rounded-sm border border-slate-800 bg-slate-900/40 text-slate-200 hover:text-white hover:border-copper/60 transition-colors"
          >
            &larr; Home
          </Link>
          <Link
            href="/posts"
            className="px-3.5 py-2 rounded-sm border border-slate-800 bg-slate-900/40 text-slate-200 hover:text-white hover:border-copper/60 transition-colors"
          >
            All Posts &rarr;
          </Link>
          <Link
            href="/about"
            className="px-3.5 py-2 rounded-sm border border-slate-800 bg-slate-900/40 text-slate-200 hover:text-white hover:border-copper/60 transition-colors"
          >
            About &rarr;
          </Link>
          <Link
            href="https://mywork.vaibhv19.dev"
            className="px-3.5 py-2 rounded-sm border border-slate-800 bg-slate-900/40 text-slate-200 hover:text-white hover:border-copper/60 transition-colors"
          >
            My Work &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
