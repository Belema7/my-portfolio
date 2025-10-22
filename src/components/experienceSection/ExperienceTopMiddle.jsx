import React from 'react'

function ExperienceTopMiddle() {
  return (
    <div className='relative'>
      {/* Outer glow */}
      <div className='absolute inset-0 rounded-2xl shadow-[0_0_30px_#15d1e955] -z-10'></div>

      {/* Image */}
      <img
        src="../../public/Images/Exprience.jpg"
        alt="Experience Showcase"
        className='w-[350px] h-auto rounded-2xl object-cover border-2 border-[#15d1e9] hover:scale-105 transition-transform duration-700 ease-in-out'
      />
    </div>
  )
}

export default ExperienceTopMiddle
