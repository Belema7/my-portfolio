import React from 'react'

function ExperienceInfo({ number, text, isVisible, delay = 0 }) {
  return (
    <div className={`flex flex-col justify-center items-center transition-all duration-1000 ${
      isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
    }`} style={{ transitionDelay: `${delay}ms` }}>
      <p className='font-bold text-6xl text-[#15d1e9] drop-shadow-[0_0_10px_#15d1e955]'>
        {number}
      </p>
      <p className='font-semibold text-gray-400 uppercase -mt-2 tracking-wide'>
        {text}
      </p>
    </div>
  )
}

export default ExperienceInfo;