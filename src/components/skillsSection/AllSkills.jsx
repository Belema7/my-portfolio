import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";

const skills = [
  { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
  { name: "React Js", icon: FaReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Node Js", icon: FaNodeJs, color: "#339933" },
  { name: "Express Js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: DiMongodb, color: "#47A248" },
  { name: "Tailwind", icon: RiTailwindCssFill, color: "#06B6D4" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
];

function AllSkills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div id="skills-section" className="w-full">
      {/* Enhanced Desktop Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-10">
          {skills.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div
                className={`
                  relative overflow-hidden p-6 rounded-2xl border-2 transition-all duration-500
                  ${activeSkill === index 
                    ? 'border-[#15d1e9] scale-105 shadow-2xl' 
                    : 'border-gray-800 hover:border-[#15d1e9]/50'
                  }
                  bg-gradient-to-br from-gray-900 to-black
                  hover:shadow-[0_0_30px_rgba(21,209,233,0.3)]
                `}
                style={{
                  transform: `translateY(${activeSkill === index ? '-8px' : '0px'})`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {/* Animated Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${item.color}20, transparent 70%)`
                  }}
                />
                
                {/* Icon Container */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                        p-4 rounded-xl transition-all duration-500
                        ${activeSkill === index 
                          ? 'scale-110 rotate-3' 
                          : 'group-hover:scale-105'
                        }
                      `}
                      style={{
                        backgroundColor: activeSkill === index ? `${item.color}15` : 'rgba(255,255,255,0.05)',
                        border: `2px solid ${activeSkill === index ? item.color : 'transparent'}`
                      }}
                    >
                      <item.icon 
                        className="text-4xl transition-all duration-500"
                        style={{ 
                          color: activeSkill === index ? item.color : '#15d1e9',
                          filter: activeSkill === index ? `drop-shadow(0 0 10px ${item.color}40)` : 'none'
                        }}
                      />
                    </div>
                    
                    {/* Skill Name */}
                    <div className="text-left">
                      <h3 
                        className="font-bold text-lg transition-colors duration-500"
                        style={{ 
                          color: activeSkill === index ? item.color : '#FFFFFF'
                        }}
                      >
                        {item.name}
                      </h3>
                      <div 
                        className="h-1 rounded-full mt-2 transition-all duration-500 origin-left"
                        style={{
                          width: activeSkill === index ? '100%' : '0%',
                          backgroundColor: item.color
                        }}
                      />
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div
                    className={`
                      transform transition-all duration-500
                      ${activeSkill === index ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                    `}
                    style={{ color: item.color }}
                  >
                    →
                  </div>
                </div>

                {/* Pulse Effect */}
                {activeSkill === index && (
                  <div 
                    className="absolute inset-0 rounded-2xl animate-pulse"
                    style={{
                      boxShadow: `0 0 0 2px ${item.color}40`,
                      animation: 'pulse 2s infinite'
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Mobile Layout */}
      <div className="md:hidden mt-8">
        <div className="grid grid-cols-1 gap-3">
          {skills.map((item, index) => (
            <div
              key={index}
              className={`
                flex items-center justify-between p-4 rounded-xl
                border-2 border-gray-800 bg-gradient-to-r from-gray-900 to-black
                transition-all duration-500 transform
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                active:scale-95 active:bg-gray-800
              `}
              style={{
                transitionDelay: `${isVisible ? index * 100 : 0}ms`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
              onTouchStart={() => setActiveSkill(index)}
              onTouchEnd={() => setActiveSkill(null)}
            >
              {/* Left side - Icon and Name */}
              <div className="flex items-center gap-4 flex-1">
                <div
                  className="p-3 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: activeSkill === index ? `${item.color}15` : 'rgba(255,255,255,0.05)',
                    border: `2px solid ${activeSkill === index ? item.color : 'transparent'}`
                  }}
                >
                  <item.icon 
                    className="text-2xl transition-all duration-300"
                    style={{ 
                      color: activeSkill === index ? item.color : '#15d1e9'
                    }}
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-white text-base">{item.name}</h3>
                  <div 
                    className="h-1 rounded-full mt-1 transition-all duration-500 origin-left"
                    style={{
                      width: activeSkill === index ? '100%' : '0%',
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </div>

              {/* Right side - Tech Badge */}
              <div
                className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300"
                style={{
                  backgroundColor: activeSkill === index ? `${item.color}20` : 'rgba(255,255,255,0.1)',
                  color: activeSkill === index ? item.color : '#9CA3AF',
                  border: `1px solid ${activeSkill === index ? item.color : 'transparent'}`
                }}
              >
                Tech
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .group:hover .skill-icon {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </div>
  );
}

export default AllSkills;