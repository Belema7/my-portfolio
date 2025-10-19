import React from 'react';

function NavbarLogo() {
  return (
    <div>
      {/* This heading is for md and larger screens */}
      <h1 className='text-white text-2xl hidden md:block'>Belema Girma</h1>
      {/* This heading is for small screens only */}
      <h1 id='logo' className='text-white font-extrabold text-4xl block md:hidden'>Belema</h1>
    </div>
  );
}

export default NavbarLogo;