import React, { useState } from "react";

function HeroPic({ isVisible }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex-1 flex justify-center items-center mb-10 md:mb-0">
      <div 
        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Multiple Glowing Background Rings */}
        <div className={`absolute inset-0 rounded-[2rem] bg-[#00e5ff]/20 blur-2xl transition-all duration-1000 ${
          isVisible && imageLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}></div>
        
        <div className={`absolute inset-0 rounded-[2rem] bg-[#00e5ff]/10 blur-xl transition-all duration-1000 delay-300 ${
          isVisible && imageLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`} style={{ transform: 'scale(1.1)' }}></div>

        {/* Floating Code Elements */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-[#00e5ff]/30 animate-bounce">
          <span className="text-[#00e5ff] text-sm">{'</>'}</span>
        </div>
        <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-[#00e5ff]/30 animate-bounce delay-500">
          <span className="text-[#00e5ff] text-xs">⚡</span>
        </div>

        {/* Main Avatar Container */}
        <div
          className={`relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden border-2 border-[#00e5ff]/40 transition-all duration-1000 ${
            isVisible && imageLoaded 
              ? 'scale-100 opacity-100 rotate-0 shadow-[0_0_35px_#00e5ffaa]' 
              : 'scale-75 opacity-0 rotate-12'
          } ${
            hovered 
              ? 'scale-105 shadow-[0_0_50px_#00e5ff] -translate-y-2' 
              : 'shadow-[0_0_25px_#00e5ffaa]'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <img
            src="../../Images/Me.jpg"
            alt="Belema Girma - Full Stack Developer"
            className="w-full h-full object-cover transition-transform duration-700"
            onLoad={() => setImageLoaded(true)}
            style={{
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              filter: hovered ? 'brightness(1.1)' : 'brightness(1)'
            }}
          />
          
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 hover:opacity-50"></div>
          
          {/* Animated Shine Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000 ${
            hovered ? 'translate-x-full' : '-translate-x-full'
          }`}></div>
        </div>

        {/* Animated Border Pulse */}
        {hovered && (
          <div 
            className="absolute inset-0 rounded-[2rem] border-2 border-[#00e5ff] animate-pulse"
            style={{
              animation: 'pulse 2s ease-in-out infinite',
              boxShadow: '0 0 30px #00e5ff'
            }}
          ></div>
        )}
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export default HeroPic;