"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize theme from localStorage or document class
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Close drawer on Escape key
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
              className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 hover:text-amber-300 transition-colors focus:outline-none"
            >
              Vaibhav Gupta
            </Link>

            {/* Right Side: Exact Order -> Theme Toggle, then Hamburger Menu */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle light/dark theme"
                title="Toggle theme"
                className="p-1 text-slate-400 hover:text-amber-300 transition-colors focus:outline-none"
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                title="Menu"
                className="p-1 text-slate-400 hover:text-amber-300 transition-colors focus:outline-none"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Drawer Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-72 max-w-full h-full bg-[#0a0d14] dark:bg-[#0a0d14] border-l border-slate-800 p-6 z-50 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-mono text-xs font-semibold text-slate-300">
                  Navigation Index
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  title="Close"
                  className="p-1 text-slate-400 hover:text-white transition-colors focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-1.5 text-xs font-mono transition-colors ${
                        isActive
                          ? "text-amber-300 font-bold"
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
                  className="hover:text-amber-300 inline-flex items-center gap-0.5"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhv19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 inline-flex items-center gap-0.5"
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
