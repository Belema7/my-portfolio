import React, { useState } from "react";

function HeroText({ isVisible }) {
  const [cvHovered, setCvHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = "/path/to/your-cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Belema_Girma_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle contact email
  const handleContactMe = () => {
    window.location.href = "mailto:belemagirma8@gmail.com";
  };

  // Text animation parts
  const titleParts = [
    "Hello! My name is",
    <br key="break" />,
    <span key="name" className="text-[#00e5ff]">Belema Girma</span>
  ];

  return (
    <div className="flex-1 flex flex-col justify-center text-center md:text-left gap-6">
      {/* Animated Title */}
      <div className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h2 className="text-[#00e5ff] uppercase tracking-widest font-semibold text-lg mb-4 drop-shadow-[0_0_8px_#00e5ff]">
          Full-Stack Web Developer
        </h2>
        
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          {titleParts.map((part, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {part}
            </span>
          ))}
        </h1>
      </div>

      {/* Animated Description */}
      <div className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`} style={{ transitionDelay: '600ms' }}>
        <p className="text-gray-300 mt-4 max-w-md mx-auto md:mx-0 text-lg leading-relaxed">
          I'm a full-stack developer passionate about solving real-world problems
          through programming.
        </p>
      </div>

      {/* Animated Call-to-Action Buttons */}
      <div className={`flex justify-center md:justify-start gap-6 mt-8 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`} style={{ transitionDelay: '800ms' }}>
        {/* Download CV Button */}
        <button 
          onClick={handleDownloadCV}
          onMouseEnter={() => setCvHovered(true)}
          onMouseLeave={() => setCvHovered(false)}
          className="relative px-8 py-3 rounded-full bg-[#00e5ff] text-black font-semibold transition-all duration-500 overflow-hidden group hover:scale-105 hover:shadow-[0_0_25px_#00e5ff]"
        >
          {/* Animated Background */}
          <div className={`absolute inset-0 bg-gradient-to-r from-white to-[#00e5ff] transition-all duration-500 ${
            cvHovered ? 'opacity-20' : 'opacity-0'
          }`}></div>
          
          <span className="relative z-10 flex items-center gap-2">
            Download CV
            <span className={`transition-transform duration-300 ${
              cvHovered ? 'translate-y-0' : 'translate-y-6 opacity-0'
            }`}>📄</span>
          </span>
          
          {/* Ripple Effect */}
          <div className={`absolute inset-0 rounded-full bg-white transition-all duration-700 ${
            cvHovered ? 'scale-150 opacity-0' : 'scale-0 opacity-0'
          }`}></div>
        </button>

        {/* Contact Me Button */}
        <button 
          onClick={handleContactMe}
          onMouseEnter={() => setContactHovered(true)}
          onMouseLeave={() => setContactHovered(false)}
          className="relative px-3 py-3 rounded-full border-2 border-[#00e5ff] text-[#00e5ff] font-semibold transition-all duration-500 overflow-hidden group hover:scale-105 hover:bg-[#00e5ff]/10 hover:shadow-[0_0_20px_#00e5ff]"
        >
          {/* Animated Background */}
          <div className={`absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#00b8cc] transition-all duration-500 ${
            contactHovered ? 'opacity-10' : 'opacity-0'
          }`}></div>
          
          <span className="relative z-10 flex items-center gap-2">
            Contact Me
            <span className={`transition-all duration-300 ${
              contactHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}>✉️</span>
          </span>
          
          {/* Moving Border Effect */}
          <div className={`absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#00e5ff] to-[#00b8cc] transition-all duration-1000 ${
            contactHovered ? 'opacity-30 blur-[1px]' : 'opacity-0'
          }`}></div>
        </button>
      </div>

      
    </div>
  );
}

export default HeroText;