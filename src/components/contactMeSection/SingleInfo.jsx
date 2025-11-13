import React, { useState } from "react";

function SingleInfo({ text, Icon, href }) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <div 
      className="flex items-center gap-4 p-4 rounded-xl border border-transparent bg-gray-800/30 backdrop-blur-sm transition-all duration-300 group cursor-pointer hover:border-[#15d1e9]/40 hover:bg-[#15d1e9]/10 hover:scale-102"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`p-3 rounded-lg transition-all duration-300 ${
        hovered ? 'bg-[#15d1e9] scale-105' : 'bg-gray-700/50'
      }`}>
        <Icon className={`text-xl transition-all duration-300 ${
          hovered ? 'text-white' : 'text-[#15d1e9]'
        }`} />
      </div>
      
      <p className={`text-lg font-medium transition-all duration-300 ${
        hovered ? 'text-white' : 'text-gray-300'
      }`}>
        {text}
      </p>

      {/* Simple Hover Arrow */}
      <div className={`ml-auto transition-all duration-300 ${
        hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
      }`}>
        <span className="text-[#15d1e9] text-lg">→</span>
      </div>
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