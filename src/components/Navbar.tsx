"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, Award, Briefcase, GraduationCap, ShieldCheck, Cpu } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mainNavItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Writing", href: "/writing" },
    { name: "About", href: "/about" },
  ];

  const moreNavItems = [
    { name: "Experience", href: "/experience", icon: Briefcase, desc: "Professional roles & internships" },
    { name: "Education", href: "/education", icon: GraduationCap, desc: "Academic degree & credentials" },
    { name: "Certifications", href: "/certifications", icon: Award, desc: "Verified course certificates" },
    { name: "My Experience With...", href: "/my-experience-with", icon: Cpu, desc: "Technology & tool index" },
    { name: "Patents & IP", href: "/intellectual-property", icon: ShieldCheck, desc: "Intellectual property record" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400/50 rounded-md px-1 py-0.5"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400/20 to-blue-600/30 border border-amber-500/40 flex items-center justify-center font-bold text-amber-300 group-hover:border-amber-400 transition-colors">
            VG
          </div>
          <div>
            <span className="font-semibold text-slate-100 group-hover:text-amber-300 transition-colors tracking-wide text-sm sm:text-base">
              VAIBHAV GUPTA
            </span>
            <span className="block text-[10px] text-slate-400 font-mono tracking-wider uppercase">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "text-amber-300 bg-amber-500/10 border border-amber-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
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
              className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors focus:outline-none"
              aria-expanded={dropdownOpen}
            >
              <span>Explore</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-amber-300" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-lg bg-[#131b2e] border border-slate-700/80 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800/80 mb-1">
                  Professional Sections
                </div>
                {moreNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-start gap-3 px-3 py-2 text-xs hover:bg-slate-800/70 transition-colors ${
                        isActive ? "text-amber-300 bg-amber-500/10" : "text-slate-300"
                      }`}
                    >
                      <Icon className="w-4 h-4 mt-0.5 text-amber-400/80 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-slate-200">{item.name}</div>
                        <div className="text-[10px] text-slate-400">{item.desc}</div>
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
            className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0f17] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? "text-amber-300 bg-amber-500/10 border border-amber-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80">
            <div className="px-3 py-1 text-xs font-mono uppercase text-slate-400">
              More Sections
            </div>
            <div className="mt-1 grid grid-cols-1 gap-1">
              {moreNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-300 hover:text-amber-300 hover:bg-slate-800"
                >
                  <item.icon className="w-4 h-4 text-amber-400/80" />
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
