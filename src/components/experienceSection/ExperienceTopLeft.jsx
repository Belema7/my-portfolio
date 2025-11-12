import React from 'react'
import ExperienceInfo from './ExperienceInfo'

function ExperienceTopLeft({ isVisible }) {
  return (
    <div className={`flex flex-col gap-6 w-[300px] text-center transition-all duration-1000 ${
      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
    }`}>
      {/* Title */}
      <p className='text-[#15d1e9] font-bold uppercase text-3xl drop-shadow-[0_0_10px_#15d1e9]'>
        Since 2023
      </p>

      {/* Stats */}
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number='3' text='Years' isVisible={isVisible} delay={200} />
        <p className={`font-bold text-6xl text-gray-400 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>-</p>
        <ExperienceInfo number='23' text='Websites' isVisible={isVisible} delay={400} />
      </div>

      {/* Description */}
      <p className={`text-lg text-gray-300 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`} style={{ transitionDelay: '600ms' }}>
        With three years of experience working as a front-end developer, I've built
        and contributed to multiple responsive and user-focused projects.
      </p>
    </div>
  )
}

export default ExperienceTopLeft;