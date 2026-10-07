"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full pt-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-4 border-b border-slate-800/80 flex items-center justify-between">
          {/* Left Side: Brand Identity */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-copper transition-all focus:outline-none"
          >
            Vaibhav Gupta
          </Link>

          {/* Right Side: Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-5 font-mono text-xs uppercase tracking-wider">
            <Link
              href="/posts"
              className={`transition-colors focus:outline-none text-sky-400 ${
                pathname === "/posts" || pathname.startsWith("/posts/")
                  ? "font-bold underline decoration-sky-400"
                  : "hover:underline"
              }`}
            >
              POSTS
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
            <Link
              href="https://mywork.vaibhv19.dev"
              className="transition-colors focus:outline-none text-sky-400 hover:underline"
            >
              MY WORK
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
