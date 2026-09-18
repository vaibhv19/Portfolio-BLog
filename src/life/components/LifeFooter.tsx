import React from "react";

export function LifeFooter() {
  return (
    <footer className="pt-8 pb-14 border-t border-white/[0.06] text-center">
      <div className="flex flex-col items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-copper/60" />
        <p className="text-xs sm:text-sm text-slate-400 font-light">
          Just Me &middot; Moments, thoughts &amp; fleeting fragments
        </p>
        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
          Vaibhav Gupta
        </span>
      </div>
    </footer>
  );
}
