import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function NavbarMain() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-4">
        <NavbarLogo />

        {/* Desktop Links */}
        <div className="hidden lg:flex">
          <NavbarLinks />
        </div>

        <NavbarBtn />

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <NavbarLinks mobile />
      </div>
    </nav>
  );
}

export default NavbarMain;
