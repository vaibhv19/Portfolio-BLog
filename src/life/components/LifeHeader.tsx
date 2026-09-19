import React from "react";

export function LifeHeader() {
  return (
    <header className="pt-6 sm:pt-8 mb-10 sm:mb-12 border-t border-white/[0.07]">
      <div className="flex flex-col gap-3 sm:gap-3.5 max-w-4xl">
        {/* 1. LARGE QUESTION (HERO TITLE) */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 font-sans leading-snug">
          Who is Vaibhav as just a Human?
        </h1>

        {/* 2. QUOTE */}
        <p className="text-sm sm:text-base text-slate-300 font-light italic leading-relaxed">
          &ldquo;I think if I do nothing else on the earth than make people a little more loved, then I have served my purpose well.&rdquo;
        </p>

        {/* 3. AUTHOR ATTRIBUTION */}
        <span className="text-xs sm:text-sm font-mono text-slate-400">
          &mdash; Vaibhav Gupta
        </span>
      </div>
    </header>
  );
}
