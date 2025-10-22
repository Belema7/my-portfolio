import React from 'react'

function ExperienceInfo({ number, text }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='font-bold text-6xl text-[#15d1e9] drop-shadow-[0_0_10px_#15d1e955]'>
        {number}
      </p>
      <p className='font-semibold text-gray-700 uppercase -mt-2 tracking-wide'>
        {text}
      </p>
    </div>
  )
}

export default ExperienceInfo
