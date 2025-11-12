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
      {/* ENHANCED DESKTOP LAYOUT - Premium Design */}
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

      {/* MOBILE LAYOUT - Original Circle Design (Improved) */}
      <div className="md:hidden">
        <div className="grid grid-cols-3 gap-8 mt-8">
          {skills.map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center justify-center gap-3 
                transition-all duration-500 transform
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                active:scale-95
              `}
              style={{
                transitionDelay: `${isVisible ? index * 100 : 0}ms`
              }}
            >
              {/* Circle Icon Container */}
              <div 
                className="
                  p-5 rounded-full border-2 border-[#15d1e9]/50 
                  bg-[#0a0a0a] shadow-[0_0_20px_#15d1e933] 
                  hover:shadow-[0_0_30px_#15d1e9aa] 
                  transition-all duration-500
                  active:scale-105
                "
                onTouchStart={() => setActiveSkill(index)}
                onTouchEnd={() => setActiveSkill(null)}
              >
                <item.icon 
                  className="text-4xl transition-all duration-300"
                  style={{ 
                    color: activeSkill === index ? item.color : '#15d1e9',
                    transform: activeSkill === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
              </div>
              
              {/* Skill Name */}
              <p 
                className="font-semibold text-gray-200 text-sm text-center transition-colors duration-300"
                style={{
                  color: activeSkill === index ? item.color : '#e5e7eb'
                }}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllSkills;