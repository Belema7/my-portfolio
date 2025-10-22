import React from 'react'

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
]

function FooterMain() {
  return (
    <footer className="px-6 mt-24">
      {/* Divider Line */}
      <div className="w-full h-[1px] bg-[#88e5f0]/50"></div>

      {/* Footer Main Section */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center mt-6">
        <p className="text-2xl md:text-3xl text-[#978580] font-semibold mb-4 md:mb-0">
          Belema Girma
        </p>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-[#978580] text-lg">
          {links.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.section}`}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <p className="max-w-[1200px] mx-auto text-center md:text-right mt-6 mb-10 text-sm text-[#645558]">
        © 2025 Belema | All Rights Reserved.
      </p>
    </footer>
  )
}

export default FooterMain
