import React from "react";

function Avatar() {
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
      {/* Neon glow background */}
      <div className="absolute inset-0 rounded-[2rem] bg-[#15d1e9]/20 blur-2xl -z-10"></div>

      {/* Avatar Image */}
      <div
        className="w-64 h-64 md:w-72 md:h-72 rounded-[2rem] overflow-hidden border border-[#15d1e9]/40
        shadow-[0_0_25px_#15d1e9aa] transition-all duration-700 hover:scale-105 hover:shadow-[0_0_40px_#15d1e9]"
      >
        <img
          src="../../Images/Me.jpg"
          alt="Belema Girma"
          className="w-full h-full object-cover"
        />
        {/* Subtle dark overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}

export default Avatar;
