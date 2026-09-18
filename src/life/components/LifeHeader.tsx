import React from "react";

export function LifeHeader() {
  return (
    <header className="pt-8 pb-10 border-b border-white/[0.07] mb-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-copper animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-copper">
            Personal Space
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-100 font-sans">
          Just Me
        </h1>
        
        <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed mt-1">
          A few things that make me, me.
        </p>
      </div>
    </header>
  );
}
