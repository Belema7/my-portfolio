import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

function HeroMain() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-around items-center px-6 md:px-16 pt-28 bg-black">
        {/* className='flex flex-col md:flex-row max-w-[1200px] mx-auto justify-center items-center px-4' */}
      <HeroText />
      <HeroPic />
    </section>
  );
}

export default HeroMain;
