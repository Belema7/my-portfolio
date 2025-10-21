import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3 },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "React Js", icon: FaReact },
  { name: "Redux", icon: SiRedux },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "NodeJs", icon: FaNodeJs },
  { name: "Python", icon: FaPython },
]

function AllSkills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-20 mt-10">
  {skills.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center gap-2 hover:-translate-y-2 transition-all duration-500"
    >
      <div className="p-6 rounded-full border border-[#15d1e9]/50 bg-[#0a0a0a] shadow-[0_0_15px_#15d1e933] hover:shadow-[0_0_25px_#15d1e9aa] transition-all duration-500">
        <item.icon className="text-6xl text-[#15d1e9]" />
      </div>
      <p className="font-semibold text-gray-200 text-lg">{item.name}</p>
    </div>
  ))}
</div>

  )
}

export default AllSkills
