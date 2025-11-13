import React, { useState } from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function NavbarLinks({ mobile = false, scrolled }) {
  const [activeLink, setActiveLink] = useState("about");
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <ul
      className={`flex ${
        mobile
          ? "flex-col items-center gap-8 py-8"
          : "flex-row items-center gap-10"
      } font-medium`}
    >
      {links.map((item, index) => (
        <li 
          key={index} 
          className="relative group"
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Link
            to={item.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-100}
            onSetActive={() => setActiveLink(item.section)}
            className={`cursor-pointer transition-all duration-500 relative ${
              mobile 
                ? 'text-2xl py-3' 
                : 'text-lg'
            } ${
              activeLink === item.section
                ? 'text-[#00e5ff] font-bold drop-shadow-[0_0_10px_#00e5ff]'
                : scrolled
                  ? 'text-gray-300 hover:text-[#00e5ff]'
                  : 'text-white hover:text-[#00e5ff]'
            } hover:scale-110`}
          >
            {item.link}

            {/* Animated Underline */}
            <div 
              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00e5ff] to-[#00b8cc] transition-all duration-500 ${
                activeLink === item.section || hoveredLink === index
                  ? 'w-full opacity-100' 
                  : 'w-0 opacity-0'
              } ${
                mobile ? '-bottom-2' : '-bottom-1'
              }`}
            ></div>

            {/* Hover Dot */}
            <div 
              className={`absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#00e5ff] rounded-full transition-all duration-300 ${
                hoveredLink === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            ></div>
          </Link>

          {/* Hover Glow Effect (Desktop only) */}
          {!mobile && (
            <div 
              className={`absolute inset-0 rounded-lg bg-[#00e5ff] transition-all duration-500 ${
                hoveredLink === index ? 'opacity-10 blur-md scale-110' : 'opacity-0 scale-100'
              }`}
            ></div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;