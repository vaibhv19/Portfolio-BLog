"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const isSearchActive = pathname === "/search";

  return (
    <header className="w-full pt-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-4 border-b border-slate-800/80 flex items-center justify-between">
          {/* Left Side: Brand Identity */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-copper hover:underline transition-all focus:outline-none"
          >
            Vaibhav Gupta
          </Link>

          {/* Right Side: Navigation Links & Search Icon Link */}
          <div className="flex items-center gap-4 sm:gap-5">
            <nav className="flex items-center gap-4 sm:gap-5 font-mono text-xs uppercase tracking-wider">
              <Link
                href="/writing"
                className={`transition-colors focus:outline-none text-sky-400 ${
                  pathname === "/writing" || pathname.startsWith("/writing/")
                    ? "font-bold underline decoration-sky-400"
                    : "hover:underline"
                }`}
              >
                WRITING
              </Link>
              <Link
                href="/about"
                className={`transition-colors focus:outline-none text-sky-400 ${
                  pathname === "/about"
                    ? "font-bold underline decoration-sky-400"
                    : "hover:underline"
                }`}
              >
                ABOUT
              </Link>
            </nav>

            <Link
              href="/search"
              aria-label="Search content and pages"
              title="Search"
              className={`p-1.5 transition-colors focus:outline-none rounded hover:bg-slate-800/60 ${
                isSearchActive
                  ? "text-sky-400"
                  : "text-slate-400 hover:text-sky-400"
              }`}
            >
              <Search className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
