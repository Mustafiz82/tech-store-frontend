

import React from 'react';
import MobileNavbar from './MobileNavbar';
import Navbarb from './Hero/Nabvarb';

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50'>
      <div className='md:hidden'>
        <MobileNavbar></MobileNavbar>
      </div>
     <div className='lg:block '>
       <Navbarb></Navbarb>
     </div>
    
    </div>
  );
};

export default Navbar;