import React from "react";

interface LifeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function LifeLayout({ children, className = "" }: LifeLayoutProps) {
  return (
    <div
      className={`min-h-screen w-full bg-[#090c12] text-slate-100 flex flex-col justify-between selection:bg-copper/20 selection:text-copper overflow-x-hidden relative ${className}`}
    >
      {/* Layered Atmospheric Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Warm Amber Studio Glow Top-Right */}
        <div className="absolute -top-[20%] right-[5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(232,145,58,0.04)_0%,_transparent_70%)] blur-3xl" />
        
        {/* Deep Slate/Indigo Contemplative Aura Center-Left */}
        <div className="absolute top-[40%] -left-[10%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,_rgba(30,41,59,0.18)_0%,_transparent_70%)] blur-3xl" />

        {/* Soft Evening Ambient Glow Bottom */}
        <div className="absolute -bottom-[10%] right-[15%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(232,145,58,0.03)_0%,_transparent_70%)] blur-3xl" />

        {/* Subtle Vignette Edge Mask */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(5,7,11,0.5)_100%)]" />
      </div>

      {/* Full-Viewport Fluid Content Container */}
      <div className="relative z-10 w-full flex-grow px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-4 sm:py-6">
        {children}
      </div>
    </div>
  );
}
