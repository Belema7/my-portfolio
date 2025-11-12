import React, { useState, useEffect, useRef } from "react";

const skills = [
  { 
    name: "Fast Learner", 
    emoji: "🚀",
    description: "Quickly adapt to new technologies and frameworks"
  },
  { 
    name: "Team Work", 
    emoji: "👥",
    description: "Collaborate effectively in team environments"
  },
  { 
    name: "Details Master", 
    emoji: "🎯",
    description: "Meticulous attention to code quality and user experience"
  }
];

function SubHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="w-full relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black border-y border-[#00e5ff]/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#00e5ff]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#00e5ff]/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00e5ff]/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative flex flex-wrap justify-center items-center gap-4 md:gap-8 py-12 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Main Skill Badge */}
            <div
              className={`
                relative flex items-center gap-3 px-6 py-4 rounded-2xl border-2 
                bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm
                transition-all duration-500 transform overflow-hidden
                ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
                ${hoveredSkill === index 
                  ? 'border-[#00e5ff] scale-105 shadow-[0_0_30px_#00e5ff33] bg-[#00e5ff]/5' 
                  : 'border-[#00e5ff]/30 hover:border-[#00e5ff]/60'
                }
              `}
              style={{
                transitionDelay: `${index * 200}ms`,
                animation: hoveredSkill === index ? 'pulse 2s ease-in-out infinite' : 'none'
              }}
            >
              {/* Animated Background Glow */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#00b8cc] transition-all duration-500 ${
                  hoveredSkill === index ? 'opacity-10' : 'opacity-0'
                }`}
              ></div>

              {/* Floating Emoji */}
              <span 
                className={`
                  text-2xl transition-all duration-500 transform
                  ${hoveredSkill === index 
                    ? 'scale-125 rotate-12 drop-shadow-[0_0_10px_#00e5ff]' 
                    : 'group-hover:scale-110'
                  }
                `}
                style={{
                  animation: hoveredSkill === index ? 'bounce 1s ease-in-out infinite' : 'none'
                }}
              >
                {skill.emoji}
              </span>

              {/* Skill Text */}
              <div className="relative z-10">
                <span 
                  className={`
                    font-semibold text-sm md:text-base transition-all duration-300
                    ${hoveredSkill === index 
                      ? 'text-white drop-shadow-[0_0_8px_#00e5ff]' 
                      : 'text-[#00e5ff]'
                    }
                  `}
                >
                  {skill.name}
                </span>
              </div>

              {/* Hover Tooltip */}
              <div 
                className={`
                  absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 
                  px-3 py-2 bg-gray-800 border border-[#00e5ff]/30 rounded-lg
                  text-xs text-gray-300 whitespace-nowrap transition-all duration-300
                  backdrop-blur-sm
                  ${hoveredSkill === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-2 pointer-events-none'
                  }
                `}
              >
                {skill.description}
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>

              {/* Particle Effects */}
              {hoveredSkill === index && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-[#00e5ff] rounded-full opacity-70"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: `${10 + i * 30}%`,
                        animation: `float 2s ease-in-out ${i * 0.3}s infinite`
                      }}
                    ></div>
                  ))}
                </>
              )}
            </div>

            {/* Connecting Lines (Desktop only) */}
            {index < skills.length - 1 && (
              <div 
                className={`
                  hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 
                  transition-all duration-500
                  ${isVisible ? 'opacity-100' : 'opacity-0'}
                  ${hoveredSkill === index || hoveredSkill === index + 1
                    ? 'bg-[#00e5ff] scale-x-150' 
                    : 'bg-[#00e5ff]/30'
                  }
                `}
                style={{ transitionDelay: `${index * 200 + 100}ms` }}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Animated Progress Bar */}
      <div 
        className={`
          absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent
          transition-all duration-1000
          ${isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'}
        `}
        style={{
          background: 'linear-gradient(90deg, transparent, #00e5ff, transparent)',
          boxShadow: '0 0 20px #00e5ff'
        }}
      ></div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-8px) scale(1.1);
            opacity: 1;
          }
        }
        @keyframes bounce {
          0%, 100% { 
            transform: translateY(0) scale(1.1);
          }
          50% { 
            transform: translateY(-5px) scale(1.2);
          }
        }
        @keyframes pulse {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(0, 229, 255, 0.2);
          }
          50% { 
            box-shadow: 0 0 40px rgba(0, 229, 255, 0.4);
          }
        }
      `}</style>
    </div>
  );
}

export default SubHeroSection;