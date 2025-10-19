import React from 'react'
import { Link } from "react-scroll" // Changed to uppercase Link

const links= [
  {link: "About Me", section: "about"},
  {link: "Skills", section: "skills"},
  {link: "Experience", section: "experience"},
  {link: "Projects", section: "projects"},
  {link: "Contact", section: "Contact"},
]

function NavbarLinks() {
  return (
    <ul className='flex gap-6 text-white font-bold text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-[#15d1e9]/30 backdrop-blur-lg lg:bg-black sm:w-full '>
      {links.map((item, index)=>{ // Changed parameter name to avoid conflict
        return (
        <li key={index} className='group'>
          <Link // Changed to uppercase Link component
          to={item.section} // Changed to item.section
          smooth={true}
          spy={true}
          duration={500}
          offset={-130}
          className='cursor-pointer text-white hover:text-[#15d1e9] transition-all duration-500'>{item.link}</Link> {/* Changed to item.link */}
          <div className='mask-auto bg-[#15d1e9] w-0 group-hover:w-full h-[1px] transition-all duration-500 '></div>
        </li>
      )})}
    </ul>
  )
}

export default NavbarLinks