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
      {/* Background Animated Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#15d1e9]/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#15d1e9]/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#15d1e9]/3 rounded-full blur-3xl animate-pulse delay-500"></div>

      <h2 className={`text-5xl md:text-6xl font-bold text-[#15d1e9] mb-12 text-center transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        Contact Me
      </h2>

      <div className={`relative flex flex-col lg:flex-row gap-12 bg-gradient-to-br from-[#0d0d0d] to-[#151515] border-2 border-[#15d1e9]/30 p-8 md:p-12 rounded-3xl shadow-2xl shadow-[#15d1e9]/20 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Animated Background Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#15d1e9]/10 to-[#00e5ff]/5 blur-xl -z-10"></div>
        
        {/* Animated Border Pulse */}
        <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#15d1e9] to-[#00e5ff] transition-all duration-2000 ${
          isVisible ? 'opacity-10 blur-md scale-105' : 'opacity-0 blur-0 scale-100'
        }`}></div>

        <ContactMeRight isVisible={isVisible} />
      </div>

      {/* Floating Contact Elements */}
      <div className="absolute -top-5 -right-5 w-10 h-10 bg-[#15d1e9] rounded-full flex items-center justify-center animate-bounce">
        <span className="text-white text-sm">📧</span>
      </div>
      <div className="absolute -bottom-5 -left-5 w-8 h-8 bg-[#15d1e9] rounded-full flex items-center justify-center animate-bounce delay-1000">
        <span className="text-white text-xs">💬</span>
      </div>
    </section>
  );
}

export default ContactMeMain;