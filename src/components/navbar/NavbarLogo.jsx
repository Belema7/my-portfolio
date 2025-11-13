import React, { useState } from "react";

function NavbarLogo({ scrolled }) {
  const [hovered, setHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer transition-all duration-500 hover:scale-105"
    >
      <h1 className={`font-bold text-3xl tracking-wide transition-all duration-500 ${
        scrolled ? 'text-white' : 'text-white'
      }`}>
        <span className={`bg-gradient-to-r from-[#00e5ff] to-[#00b8cc] bg-clip-text text-transparent transition-all duration-500 ${
          hovered ? 'drop-shadow-[0_0_15px_#00e5ff]' : ''
        }`}>
          Belema
        </span>
        <span className={`transition-all duration-500 ${
          hovered ? 'text-[#00e5ff]' : scrolled ? 'text-gray-300' : 'text-white'
        }`}>
          {" "}Girma
        </span>
      </h1>

      {/* Subtle Pulse Effect on Hover */}
      {hovered && (
        <div className="absolute -inset-2 rounded-lg bg-[#00e5ff]/10 animate-pulse"></div>
      )}
    </button>
  );
}

export default NavbarLogo;