import React, { useState, useEffect, useRef } from "react";
import ContactMeRight from "./ContactMeRight";

function ContactMeMain() {
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
      id="contact"
      className="max-w-[1200px] mx-auto mt-[100px] px-6 py-16 text-white relative overflow-hidden"
    >
      {/* Reduced Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#15d1e9]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#15d1e9]/5 rounded-full blur-xl"></div>

      <h2 className={`text-5xl md:text-6xl font-bold text-[#15d1e9] mb-12 text-center transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        Contact Me
      </h2>

      <div className={`relative flex flex-col lg:flex-row gap-12 bg-gradient-to-br from-[#0d0d0d] to-[#151515] border-2 border-[#15d1e9]/30 p-8 md:p-12 rounded-3xl shadow-2xl shadow-[#15d1e9]/20 overflow-hidden transition-all duration-500 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Reduced Background Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#15d1e9]/10 to-[#00e5ff]/5 blur-lg -z-10"></div>

        <ContactMeRight isVisible={isVisible} />
      </div>
    </section>
  );
}

export default ContactMeMain;