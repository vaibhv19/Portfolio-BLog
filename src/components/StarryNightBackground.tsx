"use client";

export function StarryNightBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none"
    >
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#0a0d14]" />

      {/* Starry Night painting layer with soft blur */}
      <div className="absolute inset-0 w-full h-full transform-gpu scale-105">
        <img
          src="/images/starry-night-bg.jpg"
          alt=""
          className="w-full h-full object-cover filter blur-[10px] sm:blur-[14px] opacity-75"
        />
      </div>

      {/* Darker overlay mask tint for rich contrast and deep dark aesthetic */}
      <div className="absolute inset-0 bg-[#0a0d14]/78 sm:bg-[#0a0d14]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14]/85 via-[#0a0d14]/40 to-[#0a0d14]/90" />
    </div>
  );
}
