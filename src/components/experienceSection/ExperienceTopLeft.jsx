import React from 'react'
import ExperienceInfo from './ExperienceInfo'

function ExperienceTopLeft() {
  return (
    <div className='flex flex-col gap-6 w-[300px] text-center'>
      {/* Title */}
      <p id='experienceYear' className='text-[#15d1e9] font-bold uppercase text-3xl'>
        Since 2023
      </p>

      {/* Stats */}
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number='3' text='Years' />
        <p className='font-bold text-6xl text-gray-400'>-</p>
        <ExperienceInfo number='23' text='Websites' />
      </div>

      {/* Description */}
      <p className='text-lg'>
        With three years of experience working as a front-end developer, I’ve built
        and contributed to multiple responsive and user-focused projects.
      </p>
    </div>
  )
}

export default ExperienceTopLeft
