import React, { useState } from 'react'

function ExperienceTopRight({ isVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`xl:w-[25%] lg:w-[30%] border border-[#15d1e9] p-6 rounded-2xl transition-all duration-1000 backdrop-blur-md ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
    } ${
      hovered 
        ? 'shadow-[0_0_35px_#15d1e955] bg-white/60 scale-105' 
        : 'shadow-[0_0_20px_#15d1e933] bg-white/50'
    }`} 
    style={{ transitionDelay: '600ms' }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <p className='text-lg leading-relaxed text-center text-gray-800 font-medium'>
        "I'm passionate about creating clean, scalable, and responsive web experiences
        that focus on usability, performance, and visual clarity. Every project is
        an opportunity to learn, grow, and deliver meaningful solutions."
      </p>

      {/* Quote Marks */}
      <div className="absolute top-2 left-4 text-2xl text-[#15d1e9] opacity-60">"</div>
      <div className="absolute bottom-2 right-4 text-2xl text-[#15d1e9] opacity-60">"</div>
    </div>
  )
}

export default ExperienceTopRight;