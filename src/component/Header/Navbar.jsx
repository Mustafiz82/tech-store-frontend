

import React from 'react';
import MobileNavbar from './MobileNavbar';
import Navbarb from './Hero/Nabvarb';

const Navbar = () => {
  return (
    <div>
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