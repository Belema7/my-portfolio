import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

function ContactMeRight({ isVisible }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-12 md:gap-16">
      <div className={`relative w-full max-w-3xl mx-auto transition-all duration-500 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`} style={{ transitionDelay: '200ms' }}>
        {/* Reduced Background Glow */}
        <div className="absolute inset-0 rounded-3xl bg-[#15d1e9]/20 blur-lg -z-10"></div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Email Image with Reduced Animation */}
          <div className={`relative transition-all duration-500 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="absolute inset-0 rounded-2xl bg-[#15d1e9]/30 blur-md -z-10"></div>
            <img
              src="/Images/gmail.png"
              alt="Email illustration"
              className="relative z-10 w-60 h-60 md:w-80 md:h-80 object-contain rounded-2xl shadow-xl shadow-[#15d1e9]/30 border-2 border-[#15d1e9]/40 transition-all duration-300 hover:scale-105"
            />
          </div>
          
          {/* Contact Info */}
          <div className="flex-1 min-w-[280px]">
            <ContactInfo isVisible={isVisible} />
          </div>
        </div>
      </div>

      <ContactSocial isVisible={isVisible} />
    </div>
  );
}

export default ContactMeRight;