import React, { useState } from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

function SingleProject({ name, year, align, image, link, description, tech, index, isVisible }) {
  const isLeft = align === "left";
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      className={`flex flex-col-reverse md:flex-row items-center gap-12 w-full transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      } ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Text Content */}
      <div 
        className={`flex-1 flex flex-col ${isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"} gap-4 transition-all duration-500`}
      >
        <div className={`space-y-3 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
          <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
            {year}
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 drop-shadow-[0_0_10px_#22d3ee55]">
            {name}
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            {description}
          </p>

          {/* Tech Stack */}
          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            {tech.map((techItem, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-800 text-cyan-300 rounded-full text-sm border border-cyan-500/30 transition-all duration-300 hover:bg-cyan-500/20 hover:scale-105"
              >
                {techItem}
              </span>
            ))}
          </div>

          {/* Project Link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 group mt-4 ${
              isLeft ? "md:justify-end" : "md:justify-start"
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span className="text-cyan-400 font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">
              View Live Project
            </span>
            <BiSolidRightTopArrowCircle 
              size={24} 
              className={`text-cyan-400 transition-all duration-300 ${
                hovered ? 'scale-110 rotate-12' : 'scale-100'
              }`}
            />
          </a>
        </div>
      </div>

      {/* Project Image */}
      <div 
        className="flex-1 relative max-w-[600px] max-h-[400px] rounded-2xl overflow-hidden border-2 border-cyan-500/50 group cursor-pointer transition-all duration-500"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          boxShadow: hovered 
            ? '0 0 40px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1)'
            : '0 0 20px rgba(34, 211, 238, 0.2)',
          transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
        }}
      >
        {/* Image Container */}
        <div className={`relative w-full h-64 md:h-80 transition-all duration-700 ${
          imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <img
            className="w-full h-full object-cover transition-transform duration-700"
            src={image}
            alt={`${name} preview`}
            onLoad={() => setImageLoaded(true)}
            style={{
              transform: hovered ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
            hovered ? 'opacity-40' : 'opacity-60'
          }`}></div>
          
          {/* Shine Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000 ${
            hovered ? 'translate-x-full' : '-translate-x-full'
          }`}></div>
        </div>

        {/* Loading State */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Hover Overlay Content */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/50">
              <BiSolidRightTopArrowCircle size={28} className="text-cyan-400" />
            </div>
            <span className="text-white font-semibold text-lg drop-shadow-lg">
              Visit Project
            </span>
          </div>
        </div>

        {/* Corner Accents */}
        <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 transition-all duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
        <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 transition-all duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400 transition-all duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 transition-all duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </article>
  );
}

export default SingleProject;