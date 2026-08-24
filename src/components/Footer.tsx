import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, LeetCodeIcon } from "@/components/BrandIcons";

export function Footer() {
  return (
    <footer className="w-full mt-auto py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Side: Portfolio Source Code Link */}
          <a
            href="https://github.com/vaibhv19/Portfolio-BLog?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors focus:outline-none no-underline"
          >
            You can make this too &rarr;
          </a>

          {/* Right Side: Hero Social & Contact Endpoints */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/vaibhv19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="text-slate-400 hover:text-copper-hover transition-colors focus:outline-none"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhv19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="text-slate-400 hover:text-copper-hover transition-colors focus:outline-none"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://x.com/vaibhv_19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              title="X (Twitter)"
              className="text-slate-400 hover:text-copper-hover transition-colors focus:outline-none"
            >
              <XIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://leetcode.com/u/vaibhv_19/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              title="LeetCode"
              className="text-slate-400 hover:text-copper-hover transition-colors focus:outline-none"
            >
              <LeetCodeIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="mailto:gvaibhav.business@gmail.com"
              aria-label="Email"
              title="Email"
              className="text-slate-400 hover:text-copper-hover transition-colors focus:outline-none"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
