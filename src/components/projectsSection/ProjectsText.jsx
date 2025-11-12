import React from "react";

function ProjectsText({ isVisible }) {
  return (
    <div className={`flex flex-col items-center text-center transition-all duration-1000 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <h2 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6 drop-shadow-[0_0_15px_#22d3ee]">
        Projects
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
        Here are some of my featured projects showcasing my skills in full-stack development 
        and creating responsive, modern web solutions.
      </p>
      
      {/* Animated Underline */}
      <div className={`w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-8 transition-all duration-1000 delay-500 ${
        isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
      }`}></div>
    </div>
  );
}

export default ProjectsText;