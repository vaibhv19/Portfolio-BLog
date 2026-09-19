import React from "react";

interface LifeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function LifeLayout({ children, className = "" }: LifeLayoutProps) {
  return (
    <div
      className={`min-h-screen w-full bg-[#0a0d14] text-slate-100 flex flex-col justify-between selection:bg-copper/20 selection:text-copper overflow-x-hidden ${className}`}
    >
      {/* Full-Viewport Fluid Content Container */}
      <div className="w-full flex-grow px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {children}
      </div>
    </div>
  );
}
