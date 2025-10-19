import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn() {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-[#00A3C9] border flex items-center gap-1 bg-gradient-to-r from-[#00A3C9] to-[#FF8C00] hover:border-[#FF8C00] hover:scale-110 transition-all duration-500 hover:shadow-[0px_0px_20px_0px_rgba(94,205,220,0.5)]'>Hire Me
      <div className='hidden md:block'>
          <LuArrowDownRight/>
      </div>
    </button>
  )
}

export default NavbarBtn
