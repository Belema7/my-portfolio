import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopRight from './ExperienceTopRight'

function ExperienceTop({ isVisible }) {
  return (
    <div className={`flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mt-10 px-4 transition-all duration-1000 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}>
      <ExperienceTopLeft isVisible={isVisible} />
      <ExperienceTopMiddle isVisible={isVisible} />
      <ExperienceTopRight isVisible={isVisible} />
    </div>
  )
}

export default ExperienceTop;