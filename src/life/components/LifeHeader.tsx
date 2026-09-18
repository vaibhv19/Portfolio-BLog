import React from "react";

export function LifeHeader() {
  return (
    <header className="pt-6 sm:pt-10 pb-8 sm:pb-10 border-b border-white/[0.07] mb-8 sm:mb-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-copper animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-copper">
            Personal Space
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 font-sans uppercase">
          JUST ME
        </h1>

        <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
          A few things that make me, me.
        </p>
      </div>
    </header>
  );
}
