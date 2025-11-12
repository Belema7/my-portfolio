import React, { useState } from 'react'

function SingleExperience({ experience, index, isVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`relative h-auto w-full lg:w-[280px] border-2 border-[#15d1e9] rounded-2xl mt-8 p-6 transition-all duration-500 overflow-hidden group ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        boxShadow: hovered ? '0 0 30px #15d1e955, inset 0 0 20px rgba(21, 209, 233, 0.1)' : '0 0 15px rgba(21, 209, 233, 0.2)',
        borderStyle: hovered ? 'solid' : 'dashed',
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated Background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-gray-900 to-black transition-all duration-500 ${
          hovered ? 'opacity-100' : 'opacity-90'
        }`}
      ></div>

      {/* Hover Glow Effect */}
      <div 
        className={`absolute inset-0 bg-[#15d1e9] transition-all duration-500 ${
          hovered ? 'opacity-5' : 'opacity-0'
        }`}
      ></div>

      {/* Icon */}
      <div 
        className="relative z-10 text-3xl mb-4 transition-transform duration-500"
        style={{
          transform: hovered ? 'scale(1.2) rotate(5deg)' : 'scale(1)'
        }}
      >
        {experience.icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="font-bold text-[#15d1e9] text-xl mb-2 drop-shadow-[0_0_8px_#15d1e9]">
          {experience.job}
        </p>
        <p className="italic text-gray-400 mb-1">{experience.company}</p>
        <p className="text-gray-300 mb-4 font-medium">{experience.date}</p>
        <ul className="space-y-2">
          {experience.responsibilities.map((resp, respIndex) => (
            <li 
              key={respIndex}
              className="text-gray-300 text-sm leading-relaxed transition-all duration-300"
              style={{
                transform: hovered ? 'translateX(5px)' : 'translateX(0)'
              }}
            >
              • {resp}
            </li>
          ))}
        </ul>
      </div>

      {/* Floating Particles */}
      {hovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#15d1e9] rounded-full opacity-60"
              style={{
                top: `${20 + i * 25}%`,
                right: `${10 + i * 15}%`,
                animation: `float 2s ease-in-out ${i * 0.3}s infinite`
              }}
            ></div>
          ))}
        </>
      )}
    </div>
  )
}

export default SingleExperience;