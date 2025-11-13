import React, { useState, useEffect, useRef } from "react";
import ContactMeRight from "./ContactMeRight";

function ContactMeMain() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="max-w-[1200px] mx-auto px-6 py-24 text-white relative"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2e]/50 to-transparent pointer-events-none"></div>

      <h2
        className={`text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#15d1e9] to-[#00e5ff] drop-shadow-lg transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        Get In Touch
      </h2>

      <div
        className={`relative bg-[#0f1a24]/60 backdrop-blur-xl border border-[#15d1e9]/30 rounded-3xl p-10 md:p-16 shadow-2xl shadow-[#15d1e9]/10 transition-all duration-1200 delay-200 ${
          isVisible ? "scale-100 opacity-100" : "scale-98 opacity-0"
        }`}
      >
        {/* Minimal Inner Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#15d1e9]/5 to-transparent blur-3xl"></div>

        <ContactMeRight isVisible={isVisible} />
      </div>
    </section>
  );
}

export default ContactMeMain;