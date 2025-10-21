import React from "react";

function AboutMeImage() {
  return (
    <div className="relative h-[450px] w-[300px] flex items-center justify-center">
      {/* Glowing background ring */}
      <div className="absolute h-[380px] w-[250px] rounded-[100px] bg-[#15d1e9]/20 blur-2xl -z-10"></div>

      {/* Image */}
      <div
        className="relative h-[450px] w-[300px] rounded-[100px] overflow-hidden border border-[#15d1e9]/40
        shadow-[0_0_25px_#15d1e9aa] transition-all duration-700 hover:scale-105 hover:shadow-[0_0_35px_#15d1e9]"
      >
        <img
          className="h-full w-full object-cover"
          src="/Images/aboutMe.png"
          alt="About Me"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}

export default AboutMeImage;
