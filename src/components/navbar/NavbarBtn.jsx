import React, { useState } from "react";
import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn({ scrolled }) {
  const [hovered, setHovered] = useState(false);

  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <button 
      onClick={handleHireMe}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 transition-all duration-500 overflow-hidden relative group ${
        scrolled 
          ? 'border-[#00e5ff] text-[#00e5ff] hover:bg-[#00e5ff] hover:text-black' 
          : 'border-white text-white hover:border-[#00e5ff] hover:text-[#00e5ff]'
      } hover:scale-105 hover:shadow-[0_0_25px_#00e5ff]`}
    >
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#00b8cc] transition-all duration-500 ${
        hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}></div>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        Hire Me 
        <LuArrowDownRight className={`transition-all duration-500 ${
          hovered ? 'rotate-0 scale-110' : '-rotate-45'
        }`} />
      </span>

      {/* Pulse Effect */}
      {hovered && (
        <div className="absolute inset-0 rounded-full border-2 border-[#00e5ff] animate-ping opacity-30"></div>
      )}
    </button>
  );
}

export default NavbarBtn;