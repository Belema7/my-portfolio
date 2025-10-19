import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn() {
  return (
    <button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-[#00e5ff] font-semibold border border-[#00e5ff] hover:bg-[#00e5ff]/10 hover:shadow-[0_0_15px_#00e5ff] transition-all duration-300">
      Hire Me <LuArrowDownRight className="text-[#00e5ff]" />
    </button>
  );
}

export default NavbarBtn;
