import React, { useState } from "react";

function AboutMeImage({ isVisible }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="relative h-[450px] w-[300px] flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Multiple Glowing Background Rings */}
      <div 
        className={`absolute h-[380px] w-[250px] rounded-[100px] bg-[#15d1e9]/20 blur-2xl transition-all duration-1000 ${
          isVisible && imageLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      ></div>
      
      {/* Secondary Ring */}
      <div 
        className={`absolute h-[420px] w-[280px] rounded-[100px] bg-[#15d1e9]/10 blur-xl transition-all duration-1000 delay-300 ${
          isVisible && imageLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden rounded-[100px]">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#15d1e9] rounded-full opacity-60"
            style={{
              left: `${20 + i * 20}%`,
              top: `${15 + i * 25}%`,
              animation: hovered 
                ? `float 3s ease-in-out ${i * 0.5}s infinite` 
                : 'none'
            }}
          ></div>
        ))}
      </div>

      {/* Main Image Container */}
      <div
        className={`relative h-[450px] w-[300px] rounded-[100px] overflow-hidden border border-[#15d1e9]/40
        transition-all duration-1000 ${
          isVisible && imageLoaded 
            ? 'scale-100 opacity-100 rotate-0 shadow-[0_0_35px_#15d1e9aa]' 
            : 'scale-75 opacity-0 rotate-12'
        } ${
          hovered 
            ? 'scale-105 shadow-[0_0_50px_#15d1e9] -translate-y-2' 
            : 'shadow-[0_0_25px_#15d1e9aa]'
        }`}
        style={{ 
          transitionDelay: '600ms',
          animation: hovered ? 'pulse 2s ease-in-out infinite' : 'none'
        }}
      >
        <img
          className="h-full w-full object-cover transition-transform duration-700"
          src="/Images/aboutMePicture.png"
          alt="Belema Girma - Full Stack Developer"
          onLoad={() => setImageLoaded(true)}
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            filter: hovered ? 'brightness(1.1)' : 'brightness(1)'
          }}
        />
        
        {/* Enhanced Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 transition-all duration-500 hover:opacity-40"
        ></div>
        
        {/* Shine Effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000 ${
            hovered ? 'translate-x-full' : '-translate-x-full'
          }`}
        ></div>
      </div>

      {/* Floating Tech Icons Around Image */}
      <div 
        className="absolute -top-4 -right-4 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-[#15d1e9]/30 transition-all duration-500"
        style={{
          animation: 'bounce 2s ease-in-out infinite'
        }}
      >
        <span className="text-[#15d1e9] text-lg">⚡</span>
      </div>
      
      <div 
        className="absolute -bottom-4 -left-4 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-[#15d1e9]/30 transition-all duration-500"
        style={{
          animation: 'bounce 2s ease-in-out infinite 0.5s'
        }}
      >
        <span className="text-[#15d1e9] text-sm">🚀</span>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 35px #15d1e9aa; }
          50% { box-shadow: 0 0 45px #15d1e9ff; }
        }
      `}</style>
    </div>
  );
}

export default AboutMeImage;