"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects Catalog", href: "/projects" },
    { name: "Skills Taxonomy", href: "/skills" },
    { name: "Technical Writing", href: "/writing" },
    { name: "My Experience With...", href: "/my-experience-with" },
    { name: "About Narrative", href: "/about" },
    { name: "Experience Record", href: "/experience" },
    { name: "Education Record", href: "/education" },
    { name: "Certifications Archive", href: "/certifications" },
    { name: "Patents & IP", href: "/intellectual-property" },
  ];

  return (
    <>
      <header className="w-full pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-4 border-b border-slate-800/80 flex items-center justify-between">
            {/* Left Side: Brand Identity */}
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-copper hover:text-copper-hover transition-colors focus:outline-none font-sans"
            >
              Vaibhav Gupta
            </Link>

            {/* Right Side: Navigation Links & Hamburger Menu */}
            <div className="flex items-center gap-4 sm:gap-5">
              <nav className="flex items-center gap-4 sm:gap-5 font-mono text-xs uppercase tracking-wider">
                <Link
                  href="/writing"
                  className={`transition-colors focus:outline-none ${
                    pathname === "/writing"
                      ? "text-sky-400 font-bold"
                      : "text-slate-400 hover:text-sky-400"
                  }`}
                >
                  WRITING
                </Link>
                <Link
                  href="/about"
                  className={`transition-colors focus:outline-none ${
                    pathname === "/about"
                      ? "text-sky-400 font-bold"
                      : "text-slate-400 hover:text-sky-400"
                  }`}
                >
                  ABOUT
                </Link>
              </nav>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                title="Menu"
                className="p-1 text-slate-400 hover:text-copper transition-colors focus:outline-none"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-over Drawer for Mobile / Compact Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-xs bg-[#0b0f19] border-l border-slate-800 p-6 flex flex-col justify-between h-full shadow-2xl z-10">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                  Navigation
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-1 text-slate-400 hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2 pt-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-1.5 text-xs font-mono transition-colors ${
                        isActive
                          ? "text-copper font-bold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-slate-800 text-[11px] font-mono text-slate-500 space-y-1">
              <div>Vaibhav Gupta — Software Engineer</div>
              <div className="flex items-center gap-3 pt-2 text-slate-400">
                <a
                  href="https://github.com/vaibhv19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-copper inline-flex items-center gap-0.5"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhv19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-copper inline-flex items-center gap-0.5"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
