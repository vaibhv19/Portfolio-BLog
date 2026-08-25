"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, Award, Briefcase, GraduationCap, ShieldCheck, Cpu } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (pathname === "/") return null;

  const mainNavItems = [
    { name: "Home", href: "/" },
    { name: "My Work", href: "/projects" },
    { name: "Technology", href: "/technology" },
    { name: "Writing", href: "/writing" },
    { name: "About", href: "/about" },
  ];

  const moreNavItems = [
    { name: "Experience", href: "/experience", icon: Briefcase, desc: "Roles & internships" },
    { name: "Education", href: "/education", icon: GraduationCap, desc: "Academic record" },
    { name: "Certifications", href: "/certifications", icon: Award, desc: "Verified credentials" },
    { name: "Patents & IP", href: "/intellectual-property", icon: ShieldCheck, desc: "Patent application 452200" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a0d14]/95 backdrop-blur-sm border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-7 h-7 rounded-sm bg-slate-900 border border-slate-700/80 flex items-center justify-center font-mono font-bold text-xs text-sky-400 group-hover:border-sky-400/60 transition-colors">
            VG
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 group-hover:text-sky-300 transition-colors tracking-tight text-sm">
              VAIBHAV GUPTA
            </span>
            <span className="text-[9px] text-slate-500 font-mono tracking-widest uppercase -mt-0.5">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-xs" aria-label="Main Navigation">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors py-1 text-sky-400 ${
                  isActive
                    ? "font-bold underline decoration-sky-400"
                    : "hover:underline"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
              className="flex items-center gap-1 font-medium text-slate-400 hover:text-slate-100 py-1 transition-colors focus:outline-none"
              aria-expanded={dropdownOpen}
            >
              <span>Explore</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${dropdownOpen ? "rotate-180 text-sky-300" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-[#0f1420] border border-slate-800 shadow-xl py-1.5 z-50">
                <div className="px-3 py-1 text-[9px] font-mono uppercase tracking-widest text-slate-500 border-b border-slate-800/80 mb-1">
                  Professional Sections
                </div>
                {moreNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2.5 px-3 py-2 text-xs hover:bg-slate-900 transition-colors ${
                        isActive ? "text-sky-300 bg-slate-900/60" : "text-slate-300"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-sky-400/80 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-slate-200">{item.name}</div>
                        <div className="text-[9px] text-slate-500">{item.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14] border-b border-slate-800 px-4 pt-2 pb-5 space-y-3">
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1.5 text-sm font-medium ${
                  pathname === item.href
                    ? "text-sky-300 font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80">
            <div className="px-1 py-1 text-[10px] font-mono uppercase text-slate-500">
              More Sections
            </div>
            <div className="mt-1 grid grid-cols-1 gap-1">
              {moreNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-1 text-xs text-slate-300 hover:text-sky-300"
                >
                  <item.icon className="w-3.5 h-3.5 text-sky-400/80" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
