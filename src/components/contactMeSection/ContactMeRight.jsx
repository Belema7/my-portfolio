import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

function ContactMeRight({ isVisible }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-12 md:gap-16">
      <div className={`relative w-full max-w-3xl mx-auto transition-all duration-1000 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
      }`} style={{ transitionDelay: '300ms' }}>
        {/* Enhanced Background Glow */}
        <div className="absolute inset-0 rounded-3xl bg-[#15d1e9]/20 blur-2xl -z-10 animate-pulse"></div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Animated Email Image - PERFECT MEDIUM SIZE */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'scale-100 rotate-0 opacity-100' : 'scale-75 rotate-12 opacity-0'
          }`} style={{ transitionDelay: '500ms' }}>
            <div className="absolute inset-0 rounded-2xl bg-[#15d1e9]/30 blur-lg -z-10"></div>
            <img
              src="/Images/gmail.png"
              alt="Email illustration"
              className="relative z-10 w-70 h-70 md:w-85 md:h-85 object-contain rounded-2xl shadow-2xl shadow-[#15d1e9]/30 border-2 border-[#15d1e9]/40 transition-all duration-500 hover:scale-105 hover:shadow-[#15d1e9]/50"
            />
            
            {/* Floating Animation */}
            <div 
              className="absolute -top-3 -right-3 w-10 h-10 bg-[#15d1e9] rounded-full flex items-center justify-center animate-bounce shadow-lg"
              style={{ animationDelay: '1s' }}
            >
              <span className="text-white text-base">✉️</span>
            </div>

            {/* Additional Floating Element */}
            <div 
              className="absolute -bottom-3 -left-3 w-8 h-8 bg-[#15d1e9] rounded-full flex items-center justify-center animate-bounce shadow-lg"
              style={{ animationDelay: '1.5s' }}
            >
              <span className="text-white text-sm">📧</span>
            </div>
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