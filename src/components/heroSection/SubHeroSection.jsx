import React from "react";

const skills = ["Fast Learner", "Team Work", "Details Master"];

function SubHeroSection() {
  return (
    <div className="w-full flex flex-wrap justify-center md:justify-around items-center gap-6 py-8 bg-black border-y border-gray-800">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 rounded-full border border-[#00e5ff] text-[#00e5ff] font-medium text-sm md:text-base hover:bg-[#00e5ff]/10 transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export default SubHeroSection;
