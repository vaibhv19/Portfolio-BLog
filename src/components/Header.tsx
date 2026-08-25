"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, BlueskyIcon, XIcon, LeetCodeIcon } from "@/components/BrandIcons";

export function Header() {
  const pathname = usePathname();
  const [drawerMounted, setDrawerMounted] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleOpen = () => {
    setDrawerMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setDrawerVisible(true);
      });
    });
  };

  const handleClose = () => {
    setDrawerVisible(false);
    setTimeout(() => {
      setDrawerMounted(false);
    }, 280);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && drawerMounted) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [drawerMounted]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Writing", href: "/writing" },
    { name: "About", href: "/about" },
    { name: "My Work", href: "/projects" },
    { name: "Technologies", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Education", href: "/education" },
    { name: "Certifications", href: "/certifications" },
    { name: "Patent", href: "/intellectual-property" },
  ];

  return (
    <>
      <header className="w-full pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-4 border-b border-slate-800/80 flex items-center justify-between">
            {/* Left Side: Brand Identity */}
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-copper hover:underline transition-all focus:outline-none font-sans"
            >
              Vaibhav Gupta
            </Link>

            {/* Right Side: Navigation Links & Hamburger Menu */}
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

              <button
                onClick={handleOpen}
                aria-label="Open navigation menu"
                title="Menu"
                className="p-1 text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-over Drawer for Mobile / Compact Navigation */}
      {drawerMounted && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              drawerVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClose}
          />

          {/* Drawer Panel */}
          <div
            className={`relative w-full max-w-xs border-l border-slate-700/60 p-5 sm:p-6 flex flex-col justify-between h-full shadow-2xl z-10 transform-gpu transition-all duration-300 ease-out motion-reduce:transform-none overflow-hidden ${
              drawerVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-6 opacity-0"
            }`}
          >
            {/* Starry Night Drawer Background */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
              <div className="absolute inset-0 bg-[#0a0d14]" />
              <div className="absolute inset-0 w-full h-full transform-gpu scale-105">
                <img
                  src="/images/starry-night-bg.jpg"
                  alt=""
                  className="w-full h-full object-cover filter blur-[10px] sm:blur-[14px] opacity-75"
                />
              </div>
              <div className="absolute inset-0 bg-[#0a0d14]/75" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14]/85 via-[#0a0d14]/50 to-[#0a0d14]/90" />
            </div>

            <div className="relative z-10">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <span className="text-xs font-mono font-bold tracking-wider text-copper uppercase">
                  Navigation
                </span>
                <button
                  onClick={handleClose}
                  aria-label="Close menu"
                  className="p-1 text-slate-400 hover:text-slate-200 focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1 pt-4">
                {navLinks.map((link) => {
                  const targetRoute = link.href.split("#")[0];
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname === targetRoute ||
                        (targetRoute !== "/" && pathname.startsWith(`${targetRoute}/`));

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={handleClose}
                      className={`block py-1 text-xs font-mono transition-colors text-sky-400 ${
                        isActive
                          ? "font-bold underline decoration-sky-400"
                          : "hover:underline"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="relative z-10 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/vaibhv19"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
                >
                  <GithubIcon className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhv19"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
                >
                  <LinkedinIcon className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="https://bsky.app/profile/vaibhv19.bsky.social?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bluesky"
                  title="Bluesky"
                  className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
                >
                  <BlueskyIcon className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="https://x.com/vaibhv_19"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  title="X (Twitter)"
                  className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
                >
                  <XIcon className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="https://leetcode.com/u/vaibhv_19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  title="LeetCode"
                  className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
                >
                  <LeetCodeIcon className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="mailto:gvaibhav.business@gmail.com"
                  aria-label="Email"
                  title="Email"
                  className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
                >
                  <Mail className="w-[18px] h-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
