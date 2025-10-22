import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopRight from './ExperienceTopRight'
import ExperienceTopMiddle from './ExperienceTopMiddle'

function ExperienceTop() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mt-10 px-4">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  )
}

export default ExperienceTop
