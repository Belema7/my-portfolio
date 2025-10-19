import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarMain() {
  // We want the menu to be closed by default, so we set the initial state to false.
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='fixed left-[50%] -translate-x-[50%] z-20 w-full mt-2'>
      <div className='max-w-[1300px] mx-auto px-4 flex justify-between items-center'>
        
        {/* Main Navigation Container */}
        <div className='flex justify-between w-full bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-[#fb9718]'>
          <NavbarLogo/>
          
          {/* Main links container: Hidden by default and only shown on large screens. */}
          {/* On small screens, it will be conditionally shown based on the menuOpen state. */}
          <div className={`${menuOpen ? 'block' : 'hidden'} lg:block`}>
            <NavbarLinks/>
          </div>
            <NavbarBtn/>

          {/* Hamburger menu button container: Hidden on large screens. */}
           <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-[#fb9718] '>

          <button onClick={toggleMenu}>
              <GiHamburgerMenu/>
          </button>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarMain;
