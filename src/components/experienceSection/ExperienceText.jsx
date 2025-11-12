import React from 'react'

function ExperienceText({ isVisible }) {
  return (
    <div className={`flex flex-col items-center mt-[100px] text-center transition-all duration-1000 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <h2 className="text-5xl md:text-6xl font-bold text-[#15d1e9] drop-shadow-[0_0_15px_#15d1e9aa] mb-10 relative">
        Experience
        {/* Animated Underline */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#15d1e9] transition-all duration-1000 delay-500 ${
          isVisible ? 'w-48' : 'w-0'
        }`}></div>
      </h2>
    </div>
  )
}

export default ExperienceText;