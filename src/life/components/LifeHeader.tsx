import React from "react";

export function LifeHeader() {
  return (
    <header className="pt-6 sm:pt-10 pb-8 sm:pb-10 border-b border-white/[0.07] mb-8 sm:mb-10">
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 font-sans uppercase">
          VAIBHAV GUPTA
        </h1>

        <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
          A scrapbook, coded instead.
        </p>
      </div>
    </header>
  );
}
