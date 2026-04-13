"use client";
import Button from "@/component/button/Button";
import React from 'react';

 const Footer = () => {

     const handleClick = () => {
    alert("Clicked!");
  };
    return (
        <div className='bg-black  w-full h-full'>
         <div className="  my-10  xl:px-40 lg:px-28 sm:px-20 px-5" >
             <div className='lg:flex block mt-10 lg:justify-between lg:items-center'>
                  <div className='text-white sm:text-center'>
                     <h1 className='lg:text-3xl  text-2xl'>Sign Up To Our Newsletter.</h1>
                       <p className='text-gray-400 lg:text-start text-sm'>Be the first to hear about the latest offers.</p>
                  </div>
                 <div className=' '>
                      <div className='flex lg:justify-center lg:items-center   lg:mt-0  mt-3'>
                         <div className=" lg:bg-white  gap-2 lg:border lg:text-gray-600 text-white border-2 border-white rounded-xl  p-1 w-full max-w-sm">
                               
                                   <div>
                                     <input
                                     type="text"
                                     placeholder=" Your email"
                                     className="outline-none  lg:h-9 lg:w-96 h-9 w-46 text-sm "
                                   />
                                   </div>
                                 
                                 </div>
                                 <div className='pl-4'>
                                    <Button text="Subscribe" className="h-12 w-36" onClick={handleClick} />
                                  </div>
                     </div>
                            
                </div>
             </div>
             <div className='lg:flex block text-sm  justify-between   mt-10'>
                 <div className='text-white text-sm md:mt-0 px-4  mt-10'>
                    <h4 className='text-gray-400'>Information</h4>
                     <p>About Us</p>
                     <p>About Zip</p>
                     <p>Privacy Policy</p>
                     <p>Search</p>
                     <p>Terms</p>
                     <p>Orders and Returns</p>
                     <p>Contact Us</p>
                    <p>Advanced Search</p>
                     <p>Newsletter Subscription</p>

                 </div>
                 <div className='text-white text-sm  lg:mt-0 px-4 mt-3'>
                      <h4 className='text-gray-400'>PC Parts</h4>
                     <p>CPUS</p>
                     <p>Add On Cards</p>
                     <p> Hard Drives (Internal)</p>
                     <p>Graphic Cards</p>
                     <p>Cases / Power Supplies / Cooling</p>
                     <p>RAM (Memory)</p>
                     <p>Software</p>
                     <p> Speakers / Headsets</p>
                     <p>Motherboards</p>
                 </div>
                 <div className='text-white text-sm  lg:mt-0 px-4  mt-3'>
                     
                     <h4 className='text-gray-400'>Desktop PCs</h4>
                     <p>Custom PCs</p>
                     <p>Servers</p>
                     <p>MSI All-In-One PCs</p>
                     <p>HP/Compaq PCs</p>
                     <p>ASUS PCs</p>
                     <p>Tecs PCs</p>

                 </div>
                 <div className='text-white text-sm  px-4 lg:mt-0  mt-3'>
                     <h4 className='text-gray-400'>Laptops</h4>
                     <p>Evryday Use Notebooks</p>
                     <p>MSI Workstation Series</p>
                     <p>MSI Prestige Series</p>
                     <p>Tablets and Pads</p>
                     <p>Netbooks</p>
                     <p>Infinity Gaming Notebooks</p>
                 </div>
                   <div className='text-white px-4 text-sm  lg:mt-0  mt-3'>
                     <h4 className='text-gray-400'>Address</h4>
                     <p>Address: 1234 Street Adress City Address, 1234</p>
                     <p>Phones:<span className='text-blue-600'>(00) 1234 5678</span> </p>
                     <p>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
                     <p>Friday: 9:00 AM - 6:00 PM</p>
                     <p>Saturday: 11:00 AM - 5:00 PM</p>
                     <p>E-mail: shop@email.com</p>
                 </div>
             </div>
             <div>
                  <hr className='text-gray-600 mt-10'></hr>
                 <div className='flex mt-10 justify-between items-center'>
                         <div className='flex gap-1'>
                    
                     <img className='w-5 h-auto' src="./footer-img/ant-design_facebook-filled.png " alt="facebook" />
                     <img className='w-5 h-auto' src="./footer-img/ant-design_instagram-filled.png" alt="" />
                 </div>
                 <div className='md:flex hidden gap-3 '>
                      <img src="./footer-img/paypal/payment-methods/light/paypal.png" alt="" />
                      <img src="./footer-img/visa/payment-methods/light/visa.png" alt="" />
                      <img src="./footer-img/visa1/payment-methods/light/maestro.png" alt="" />
                      <img src="./footer-img/discover1/payment-methods/light/discover.png" alt="" />
                      <img src="./footer-img/american/payment-methods/light/american-express.png" alt="" />
                 </div>
                  <div>
                    <p className='text-white text-sm lg:text-gray-400'>Copyright &copy; 2020 Shop Pty. Ltd.</p>
                 </div>
               
                 </div>
               

             </div>
                 <div className='md:hidden mt-3 items-center justify-center flex gap-1'>
                      <img src="./footer-img/paypal/payment-methods/light/paypal.png " alt="" />
                      <img src="./footer-img/visa/payment-methods/light/visa.png" alt="" />
                      <img src="./footer-img/visa1/payment-methods/light/maestro.png " alt="" />
                      <img src="./footer-img/discover1/payment-methods/light/discover.png " alt="" />
                      <img src="./footer-img/american/payment-methods/light/american-express.png " alt="" />
                 </div>
            
         </div>
       </div>
    );
 };

export default Footer;





