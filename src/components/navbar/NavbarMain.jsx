import React, { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function NavbarMain() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('nav')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-[#00e5ff]/20 shadow-2xl shadow-[#00e5ff]/10' 
        : 'bg-transparent backdrop-blur-md border-b border-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-4">
        <NavbarLogo scrolled={scrolled} />

        {/* Desktop Links */}
        <div className="hidden lg:flex">
          <NavbarLinks scrolled={scrolled} />
        </div>

        <NavbarBtn scrolled={scrolled} />

        {/* Mobile Menu Button */}
        <button
          className={`text-2xl lg:hidden transition-all duration-300 ${
            scrolled ? 'text-[#00e5ff]' : 'text-white'
          } hover:scale-110 hover:text-[#00e5ff]`}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen 
            ? "max-h-120 bg-black" 
            : "max-h-0 opacity-0"
        }`}
      >
        <NavbarLinks mobile scrolled={scrolled} />
        
        {/* Mobile Hire Me Button */}
        <div className="flex justify-center pb-6 pt-4">
          <button 
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 rounded-full text-[#00e5ff] font-semibold border-2 border-[#00e5ff] hover:bg-[#00e5ff] hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00e5ff]"
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default NavbarMain;