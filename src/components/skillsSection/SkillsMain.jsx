import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'

function SkillsMain() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-black text-white flex flex-col items-center"
    >
      <div className="max-w-[1200px] px-4 mx-auto text-center">
        <SkillsText />
        <AllSkills />
      </div>
    </section>
  )
}

export default SkillsMain
