import React, { useState, useEffect, useRef } from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

function AboutMeMain() {
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
      id='about'
      className='flex flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-center items-center text-white relative overflow-hidden'
    >
      {/* Background Animated Elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#15d1e9]/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#15d1e9]/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <AboutMeText isVisible={isVisible} />
      <AboutMeImage isVisible={isVisible} />
    </section>
  )
}

export default AboutMeMain;