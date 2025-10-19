import React from "react";

function HeroText() {
  return (
    <div className="flex-1 flex flex-col justify-center text-center gap-4">
      <h2 className="text-[#00e5ff] uppercase tracking-widest font-semibold text-lg">
        Full-Stack Web Developer
      </h2>
      <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">
        Hello! My name is <br />
        <span className="text-[#00e5ff]">Belema Girma</span>
      </h1>
      <p className="text-gray-300 mt-4 max-w-md mx-auto">
        I'm a full-stack developer passionate about solving real-world problems
        through programming.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="px-6 py-2 rounded-full bg-[#00e5ff] text-black font-semibold hover:bg-[#00b8cc] transition-all duration-300">
          Download CV
        </button>
        <button className="px-6 py-2 rounded-full border border-[#00e5ff] text-[#00e5ff] hover:bg-[#00e5ff]/10 transition-all duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default HeroText;
