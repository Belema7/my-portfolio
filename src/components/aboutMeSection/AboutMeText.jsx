import React from "react";

function AboutMeText() {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold text-[#15d1e9] mb-6 tracking-wide drop-shadow-[0_0_10px_#15d1e9]">
        About Me
      </h2>

      {/* Paragraph */}
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Hello! My name is{" "}
        <span className="font-semibold text-[#15d1e9]">Belema Girma</span>. <br />
        I’m a <span className="font-semibold">full-stack web developer</span> who
        loves building <span className="text-[#15d1e9] font-semibold">clean</span>{" "}
        and <span className="text-[#15d1e9] font-semibold">responsive</span>{" "}
        user interfaces. My goal is to design smooth and consistent user
        experiences that look great on any device.
      </p>

      {/* Button */}
      <button
        className="border border-[#15d1e9] text-[#15d1e9] rounded-full py-2 px-6 text-lg font-medium
        mt-6 hover:bg-[#15d1e9]/10 transition-all duration-500 hover:shadow-[0_0_15px_#15d1e9aa]
        cursor-pointer self-center md:self-start"
      >
        View Projects
      </button>
    </div>
  );
}

export default AboutMeText;
