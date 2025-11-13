import React, { useState } from "react";

function SingleContactSocial({ Icon, link, label, delay = 0 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit my ${label}`}
      className={`relative text-xl w-12 h-12 flex items-center justify-center rounded-xl border border-[#15d1e9] text-[#15d1e9] transition-all duration-300 overflow-hidden ${
        hovered ? 'bg-[#15d1e9] text-black scale-105' : 'bg-transparent'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Simple Background */}
      <div className={`absolute inset-0 bg-[#15d1e9] transition-all duration-300 ${
        hovered ? 'opacity-100' : 'opacity-0'
      }`}></div>

      {/* Icon */}
      <Icon className="relative z-10 transition-transform duration-300" />

      {/* Simple Tooltip */}
      <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded transition-all duration-300 ${
        hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
      }`}>
        {label}
      </div>
    </a>
  );
}

export default SingleContactSocial;