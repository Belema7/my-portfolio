import React from 'react'

function SingleExperience({ experience }) {
  return (
    <div className='h-auto w-full md:w-[250px] border-2 border-[#15d1e9] border-dashed rounded-2xl mt-12 p-4 hover:shadow-[0_0_20px_#15d1e955] transition-all duration-500'>
      <p className="font-bold text-[#15d1e9] text-lg">{experience.job}</p>
      <p className="italic">{experience.company}</p>
      <p className="">{experience.date}</p>
      <ul className="list-disc pl-5 mt-2">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  )
}

export default SingleExperience
