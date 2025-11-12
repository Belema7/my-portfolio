import React, { useState, useEffect, useRef } from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

function HeroMain() {
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
      className="min-h-screen flex flex-col md:flex-row justify-around items-center px-6 md:px-16 pt-28 bg-black relative overflow-hidden"
    >
      {/* Animated Background Gradients */}
      <div className="absolute top-20 right-20 -z-10 w-64 h-64 rounded-full bg-[#00e5ff]/10 blur-3xl animate-pulse"></div>
      <div className="absolute top-0 left-0 -z-10 w-80 h-80 rounded-full bg-[#00e5ff]/5 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 -z-10 w-56 h-56 rounded-full bg-[#00e5ff]/10 blur-3xl opacity-50 animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-10 -z-10 w-72 h-72 rounded-full bg-[#00e5ff]/5 blur-2xl opacity-50 animate-pulse delay-500"></div>
      
      <HeroText isVisible={isVisible} />
      <HeroPic isVisible={isVisible} />
    </section>
  );
}

export default HeroMain;