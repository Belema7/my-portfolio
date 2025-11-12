import React, { useState, useEffect, useRef } from "react";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import AllExperience from "./AllExperience";

function ExperienceMain() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <ExperienceText isVisible={isVisible} />

        {/* Top Section */}
        <div className="mt-12">
          <ExperienceTop isVisible={isVisible} />
        </div>

        {/* Animated Divider Line */}
        <div 
          className={`w-full h-px my-16 bg-gradient-to-r from-transparent via-[#15d1e9] to-transparent rounded-full transition-all duration-1000 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
          style={{
            boxShadow: '0 0 20px #15d1e9',
          }}
        ></div>

        {/* Experience Timeline / Boxes */}
        <AllExperience isVisible={isVisible} />
      </div>

      {/* Animated Glow Background Effects */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[180px] rounded-full -z-10 transition-all duration-2000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}></div>
      
      {/* Additional Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-[#15d1e9] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-[#15d1e9] rounded-full opacity-40 animate-pulse delay-1000"></div>
    </section>
  );
}

export default ExperienceMain;