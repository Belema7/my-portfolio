import React, { useState } from "react";

function SingleInfo({ text, Icon, href }) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <div 
      className="flex items-center gap-4 p-4 rounded-2xl border border-transparent bg-gradient-to-r from-gray-800/50 to-gray-900/30 backdrop-blur-sm transition-all duration-500 group cursor-pointer hover:border-[#15d1e9]/40 hover:bg-gradient-to-r hover:from-[#15d1e9]/10 hover:to-[#00e5ff]/5 hover:scale-105 hover:shadow-lg hover:shadow-[#15d1e9]/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`p-3 rounded-xl transition-all duration-500 ${
        hovered 
          ? 'bg-[#15d1e9] scale-110 rotate-3 shadow-lg shadow-[#15d1e9]/40' 
          : 'bg-gray-700/50'
      }`}>
        <Icon className={`text-2xl transition-all duration-500 ${
          hovered ? 'text-white scale-110' : 'text-[#15d1e9]'
        }`} />
      </div>
      
      <p className={`text-lg font-medium transition-all duration-500 ${
        hovered ? 'text-white scale-105 drop-shadow-[0_0_8px_#15d1e9]' : 'text-gray-300'
      }`}>
        {text}
      </p>

      {/* Hover Arrow */}
      <div className={`ml-auto transition-all duration-500 ${
        hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}>
        <span className="text-[#15d1e9] text-xl">→</span>
      </div>

      {/* Pulse Effect */}
      {hovered && (
        <div className="absolute inset-0 rounded-2xl border-2 border-[#15d1e9] animate-pulse opacity-50"></div>
      )}
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block no-underline"
    >
      {content}
    </a>
  ) : (
    content
  );
}

export default SingleInfo;