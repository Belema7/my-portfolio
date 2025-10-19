import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function NavbarLinks({ mobile = false }) {
  return (
    <ul
      className={`flex ${
        mobile
          ? "flex-col items-center gap-6 py-6 bg-black/95"
          : "flex-row items-center gap-8"
      } text-white font-medium`}
    >
      {links.map((item, index) => (
        <li key={index} className="group">
          <Link
            to={item.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-[#00A3C9] transition-all duration-300"
          >
            {item.link}
          </Link>
          <div className="bg-[#00A3C9] w-0 group-hover:w-full h-[1px] transition-all duration-300"></div>
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;
