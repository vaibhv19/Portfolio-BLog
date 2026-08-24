import Link from "next/link";
import { Mail, ShieldCheck, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800/80 pt-10 pb-8 text-slate-400 text-xs bg-[#080a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/60">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-100 text-sm tracking-tight">VAIBHAV GUPTA</span>
              <span className="text-[10px] font-mono text-slate-500">
                • SOFTWARE ENGINEER
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              A serious engineer whose work is presented with the eye of an artist and the discipline of consistent practice. Built with Next.js, TypeScript &amp; Tailwind CSS.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-1.5">
            <div className="font-mono uppercase text-[10px] tracking-widest text-slate-500">Navigation</div>
            <ul className="space-y-1 text-xs">
              <li><Link href="/" className="hover:text-slate-200 transition-colors">Home</Link></li>
              <li><Link href="/projects" className="hover:text-slate-200 transition-colors">Projects Catalog</Link></li>
              <li><Link href="/skills" className="hover:text-slate-200 transition-colors">Skills &amp; Taxonomy</Link></li>
              <li><Link href="/writing" className="hover:text-slate-200 transition-colors">Technical Writing</Link></li>
              <li><Link href="/my-experience-with" className="hover:text-slate-200 transition-colors">My Experience With...</Link></li>
              <li><Link href="/about" className="hover:text-slate-200 transition-colors">About &amp; Narrative</Link></li>
            </ul>
          </div>

          {/* Col 3: Records */}
          <div className="space-y-1.5">
            <div className="font-mono uppercase text-[10px] tracking-widest text-slate-500">Records</div>
            <ul className="space-y-1 text-xs">
              <li><Link href="/experience" className="hover:text-slate-200 transition-colors">Experience</Link></li>
              <li><Link href="/education" className="hover:text-slate-200 transition-colors">Education</Link></li>
              <li><Link href="/certifications" className="hover:text-slate-200 transition-colors">Certifications</Link></li>
              <li><Link href="/intellectual-property" className="hover:text-slate-200 transition-colors">Patents &amp; IP</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Vaibhav Gupta. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/vaibhv19" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-slate-200 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-600" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-slate-200 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
