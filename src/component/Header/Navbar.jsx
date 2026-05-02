

import React from 'react';
import MobileNavbar from './MobileNavbar';

import NavbarDesk from './Hero/NavbarDesk';

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50'>
      <div className='md:hidden'>
        <MobileNavbar></MobileNavbar>
      </div>
     <div className='lg:block '>
      <NavbarDesk></NavbarDesk>
     </div>
    
    </div>
  );
};

export default Navbar;