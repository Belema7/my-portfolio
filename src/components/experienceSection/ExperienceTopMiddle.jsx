import React, { useState } from 'react'

function ExperienceTopMiddle({ isVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`relative transition-all duration-1000 ${
      isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-12'
    }`} style={{ transitionDelay: '400ms' }}>
      {/* Outer glow */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
        hovered ? 'shadow-[0_0_50px_#15d1e9] scale-105' : 'shadow-[0_0_30px_#15d1e955]'
      } -z-10`}></div>

      {/* Image */}
      <img
        src="../../public/Images/Exprience.jpg"
        alt="Experience Showcase"
        className={`w-[350px] h-auto rounded-2xl object-cover border-2 border-[#15d1e9] transition-all duration-700 ease-in-out ${
          hovered ? 'scale-105 brightness-110' : 'scale-100'
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />

      {/* Floating Elements */}
      <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#15d1e9] rounded-full flex items-center justify-center animate-bounce">
        <span className="text-white text-sm">⭐</span>
      </div>
    </div>
  )
}

export default ExperienceTopMiddle;