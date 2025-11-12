import React, { useState } from "react";

function AboutMeText({ isVisible }) {
  const [hovered, setHovered] = useState(false);

  // Split text into animated parts
  const textParts = [
    "Hello! My name is",
    <span key="name" className="font-semibold text-[#15d1e9]">Belema Girma</span>,
    "I'm a",
    <span key="role" className="font-semibold text-white">full-stack web developer</span>,
    "who loves building",
    <span key="clean" className="text-[#15d1e9] font-semibold">clean</span>,
    "and",
    <span key="responsive" className="text-[#15d1e9] font-semibold">responsive</span>,
    "user interfaces. My goal is to design smooth and consistent user experiences that look great on any device."
  ];

  // Function to scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
      {/* Animated Heading */}
      <div 
        className={`transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-[#15d1e9] mb-6 tracking-wide drop-shadow-[0_0_10px_#15d1e9] relative">
          About Me
          {/* Animated Underline */}
          <div 
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#15d1e9] to-transparent transition-all duration-1000 ${
              isVisible ? 'w-full' : 'w-0'
            }`}
          ></div>
        </h2>
      </div>

      {/* Staggered Paragraph Text */}
      <div className="text-gray-300 text-lg leading-relaxed mb-6">
        {textParts.map((part, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-500 ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-8 opacity-0'
            }`}
            style={{ 
              transitionDelay: `${index * 100 + 500}ms`,
              animation: isVisible ? 'pulse 0.5s ease-in-out' : 'none'
            }}
          >
            {part}{' '}
          </span>
        ))}
      </div>

      {/* Enhanced Animated Button */}
      <div 
        className={`transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} 
        style={{ transitionDelay: '1200ms' }}
      >
        <button
          onClick={scrollToProjects}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative border border-[#15d1e9] text-[#15d1e9] rounded-full py-3 px-8 text-lg font-medium
          mt-6 transition-all duration-500 overflow-hidden group cursor-pointer self-center md:self-start
          hover:bg-[#15d1e9]/10 hover:scale-105"
          style={{
            boxShadow: hovered 
              ? '0 0 25px #15d1e9, inset 0 0 20px rgba(21, 209, 233, 0.1)'
              : '0 0 15px rgba(21, 209, 233, 0.3)'
          }}
        >
          {/* Animated Background */}
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-[#15d1e9] to-[#0ea5e9] transition-all duration-500 ${
              hovered ? 'opacity-10' : 'opacity-0'
            }`}
          ></div>
          
          {/* Button Text */}
          <span className="relative z-10 transition-all duration-300">
            View Projects
          </span>
          
          {/* Moving Border Effect */}
          <div 
            className={`absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#15d1e9] to-[#0ea5e9] transition-all duration-1000 ${
              hovered ? 'opacity-30 blur-[2px]' : 'opacity-0'
            }`}
          ></div>

          {/* Ripple Effect */}
          <div 
            className={`absolute inset-0 rounded-full bg-[#15d1e9] transition-all duration-700 ${
              hovered ? 'scale-150 opacity-0' : 'scale-0 opacity-0'
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
}

export default AboutMeText;