import React, { useState, useEffect, useRef } from 'react'

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
]

function FooterMain() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="relative px-6 mt-24 bg-gradient-to-t from-black to-gray-900/50 overflow-hidden"
    >
      {/* Background Animated Elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#15d1e9]/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#15d1e9]/3 rounded-full blur-xl animate-pulse delay-1000"></div>

      {/* Animated Divider Line */}
      <div 
        className={`w-full h-px bg-gradient-to-r from-transparent via-[#15d1e9] to-transparent transition-all duration-1000 ${
          isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}
        style={{
          boxShadow: '0 0 20px #15d1e9'
        }}
      ></div>

      {/* Footer Main Section */}
      <div className={`max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center mt-8 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Name with Animation */}
        <div className={`mb-6 md:mb-0 transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`}>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#15d1e9] to-[#00e5ff] bg-clip-text text-transparent drop-shadow-[0_0_10px_#15d1e9]">
            Belema Girma
          </p>
          <p className="text-sm text-gray-500 mt-2 text-center md:text-left">
            Full-Stack Developer
          </p>
        </div>

        {/* Navigation Links with Enhanced Animations */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-400">
          {links.map((item, index) => (
            <li 
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <button
                onClick={() => scrollToSection(item.section)}
                className={`relative text-lg font-medium transition-all duration-500 cursor-pointer group ${
                  hoveredLink === index 
                    ? 'text-[#15d1e9] scale-110 drop-shadow-[0_0_8px_#15d1e9]' 
                    : 'hover:text-white'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {item.link}
                
                {/* Animated Underline */}
                <div 
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#15d1e9] to-[#00e5ff] transition-all duration-500 group-hover:w-full ${
                    hoveredLink === index ? 'w-full' : ''
                  }`}
                ></div>

                {/* Hover Dot */}
                <div 
                  className={`absolute -top-1 -right-1 w-1 h-1 bg-[#15d1e9] rounded-full transition-all duration-300 ${
                    hoveredLink === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                ></div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Enhanced Copyright Section */}
      <div className={`max-w-[1200px] mx-auto text-center md:text-right mt-8 mb-12 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`} style={{ transitionDelay: '600ms' }}>
        <p className="text-sm text-gray-500 mb-2">
          Crafted with passion and modern technologies
        </p>
        <p className="text-sm text-gray-600 flex items-center justify-center md:justify-end gap-2">
          <span>© 2025 Belema Girma</span>
          <span className="text-[#15d1e9]">•</span>
          <span>All Rights Reserved</span>
          <span className="text-[#15d1e9]">•</span>
          <span>Made with 💙 & React</span>
        </p>

        {/* Floating Tech Icons */}
        <div className="flex justify-center md:justify-end gap-3 mt-4">
          {['⚛️', '🚀', '🎨', '⚡'].map((icon, index) => (
            <span
              key={index}
              className="text-sm opacity-60 transition-all duration-500 hover:opacity-100 hover:scale-110 hover:text-[#15d1e9]"
              style={{
                animation: `float 3s ease-in-out ${index * 0.5}s infinite`
              }}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <div className={`fixed bottom-8 right-8 transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-gradient-to-br from-[#15d1e9] to-[#00e5ff] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#15d1e9]/40 transition-all duration-500 hover:scale-110 hover:shadow-[#15d1e9]/60 hover:rotate-12"
          aria-label="Back to top"
        >
          <span className="text-lg font-bold">↑</span>
          {/* Pulse Effect */}
          <div className="absolute inset-0 rounded-full border-2 border-[#15d1e9] animate-ping opacity-20"></div>
        </button>
      </div>

      {/* Inline CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </footer>
  )
}

export default FooterMain