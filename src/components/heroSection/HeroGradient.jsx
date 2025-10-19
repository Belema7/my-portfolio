import React from "react";

function HeroGradient() {
  return (
    <div>
      {/* Subtle white glow shadows */}
      <div className="absolute top-20 right-20 -z-10 w-64 h-64 rounded-full bg-white/5 blur-3xl animate-pulse"></div>
      <div className="absolute top-0 left-0 -z-10 w-80 h-80 rounded-full bg-white/10 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 -z-10 w-56 h-56 rounded-full bg-white/5 blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-10 -z-10 w-72 h-72 rounded-full bg-white/10 blur-2xl opacity-50 animate-pulse"></div>
    </div>
  );
}

export default HeroGradient;
