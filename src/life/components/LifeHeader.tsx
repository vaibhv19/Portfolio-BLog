import React from "react";

export function LifeHeader() {
  return (
    <header className="pt-8 sm:pt-12 mb-12 sm:mb-16 border-t border-white/[0.08]">
      <div className="flex flex-col gap-3.5 sm:gap-4 max-w-4xl">
        {/* 1. LARGE QUESTION (HERO OPENING STATEMENT) */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 font-sans leading-tight">
          Who is Vaibhav as just a Human?
        </h1>

        {/* 2. INTIMATE QUOTE */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-300/90 font-light italic leading-relaxed">
          &ldquo;I think if I do nothing else on the earth than make people a little more loved, then I have served my purpose well.&rdquo;
        </p>

        {/* 3. AUTHOR ATTRIBUTION */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-xs sm:text-sm font-mono text-slate-400/90 tracking-wide">
            &mdash; vaibhav gupta
          </span>
        </div>
      </div>
    </header>
  );
}
