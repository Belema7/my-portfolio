import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

function AboutMeMain() {
  return (
    <section
      id='about'
      className='flex flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-center items-center text-white'
    >
      <AboutMeText />
      <AboutMeImage />
    </section>
  )
}

export default AboutMeMain
