import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
function SingleContactSocial({ Icon, link, label, delay = 0 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit my ${label}`}
      className={`relative text-2xl w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-[#15d1e9] text-[#15d1e9] transition-all duration-500 overflow-hidden group hover:scale-110 hover:shadow-2xl hover:shadow-[#15d1e9]/40 ${
        hovered ? 'bg-[#15d1e9] text-black' : 'bg-transparent'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        animation: `bounce 2s ease-in-out ${delay}ms infinite`
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-linear-to-br from-[#15d1e9] to-[#00e5ff] transition-all duration-500 ${
        hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}></div>

      {/* Icon */}
      <Icon className="relative z-10 transition-transform duration-500 group-hover:scale-110" />

      {/* Hover Tooltip */}
      <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md transition-all duration-300 ${
        hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        {label}
        {/* Tooltip Arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>

      {/* Floating Particles */}
      {hovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{
                top: `${20 + i * 20}%`,
                left: `${10 + i * 30}%`,
                animation: `float 1.5s ease-in-out ${i * 0.2}s infinite`
              }}
            ></div>
          ))}
        </>
      )}
    </a>
  );
}

export default SingleContactSocial;