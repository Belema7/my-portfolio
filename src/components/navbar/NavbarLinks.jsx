import React, { useState } from "react";
import { Link } from "react-scroll";

const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function NavbarLinks({ mobile = false, scrolled, onLinkClick }) {
  const [active, setActive] = useState("about");
  const [hovered, setHovered] = useState(null);

  const handleClick = (id) => {
    setActive(id);
    onLinkClick?.(id);
  };

  const baseClasses = "relative cursor-pointer transition-all duration-500 font-medium";
  const activeClasses = "text-cyan-400 font-bold drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]";
  const hoverClasses = "hover:text-cyan-400 hover:scale-110";

  return (
    <ul className={`flex ${mobile ? "flex-col gap-10 text-3xl" : "flex-row gap-10 text-lg"}`}>
      {links.map((link, i) => (
        <li
          key={i}
          className="relative"
          onMouseEnter={() => !mobile && setHovered(i)}
          onMouseLeave={() => !mobile && setHovered(null)}
        >
          {mobile ? (
            <button
              onClick={() => handleClick(link.id)}
              className={`${baseClasses} ${active === link.id ? activeClasses : "text-white"} ${hoverClasses} py-3 w-full text-left`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ) : (
            <Link
              to={link.id}
              smooth={true}
              duration={600}
              offset={-90}
              spy={true}
              onSetActive={setActive}
              className={`${baseClasses} ${
                active === link.id
                  ? activeClasses
                  : scrolled
                  ? "text-gray-300"
                  : "text-white"
              } ${hoverClasses} px-2 py-1`}
            >
              {link.name}

              {/* Underline */}
              <span
                className={`absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500 ${
                  active === link.id || hovered === i ? "w-full" : "w-0"
                }`}
              />

              {/* Glow Dot */}
              <span
                className={`absolute -top-2 -right-2 w-2 h-2 bg-cyan-400 rounded-full transition-all duration-300 shadow-lg shadow-cyan-400/50 ${
                  hovered === i ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;