import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import AllExperience from "./AllExperience";

function ExperienceMain() {
  return (
    <section
      id="experience"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <ExperienceText />

        {/* Top Section */}
        <div className="mt-12">
          <ExperienceTop />
        </div>

        {/* Divider Line (neon cyan glow) */}
        <div className="w-full h-1px my-16 bg-cyan-400/40 rounded-full shadow-[0_0_12px_#00ffff50]"></div>

        {/* Experience Timeline / Boxes */}
        <AllExperience />
      </div>

      {/* Subtle Glow Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[180px] rounded-full -z-10"></div>
    </section>
  );
}

export default ExperienceMain;
