import Link from "next/link";
import { Mail, ShieldCheck, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export function Footer() {
  return (
    <footer className="mt-auto bg-[#080c14] border-t border-slate-800/80 pt-12 pb-8 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-100 text-sm tracking-wide">VAIBHAV GUPTA</span>
              <span className="text-amber-400/80 font-mono text-[10px] bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                ENGINEERING × DISCIPLINE × ART
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice. Built with Next.js, TypeScript &amp; Tailwind CSS.
            </p>
            <div className="text-[11px] text-slate-400 pt-1">
              Quiet philosophical grounding &amp; continuous learning.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <div className="font-mono uppercase text-[10px] tracking-wider text-slate-300">Core Navigation</div>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/" className="hover:text-amber-300 transition-colors">Home</Link></li>
              <li><Link href="/projects" className="hover:text-amber-300 transition-colors">Projects Catalog</Link></li>
              <li><Link href="/skills" className="hover:text-amber-300 transition-colors">Skills &amp; Taxonomy</Link></li>
              <li><Link href="/writing" className="hover:text-amber-300 transition-colors">Regular Writing</Link></li>
              <li><Link href="/my-experience-with" className="hover:text-amber-300 transition-colors">My Experience With...</Link></li>
              <li><Link href="/about" className="hover:text-amber-300 transition-colors">About &amp; Narrative</Link></li>
            </ul>
          </div>

          {/* Col 3: Records */}
          <div className="space-y-2">
            <div className="font-mono uppercase text-[10px] tracking-wider text-slate-300">Professional Records</div>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/experience" className="hover:text-amber-300 transition-colors">Experience</Link></li>
              <li><Link href="/education" className="hover:text-amber-300 transition-colors">Education</Link></li>
              <li><Link href="/certifications" className="hover:text-amber-300 transition-colors">Certifications &amp; Credentials</Link></li>
              <li><Link href="/intellectual-property" className="hover:text-amber-300 transition-colors">Patents &amp; IP</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} Vaibhav Gupta. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/vaibhv19" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
