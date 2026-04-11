import React from 'react';

const Footer = () => {
    return (
       <div className='bg-black mt-10 w-full h-[520px]'>
         <div className="max-w-7xl  mx-auto px-4" >
            <div className='flex mt-10 justify-between items-center'>
                <div className='text-white'>
                    <h1 className='text-4xl '>Sign Up To Our Newsletter.</h1>
                    <p>Be the first to hear about the latest offers.</p>
                </div>
                <div>
                  <div className='flex justify-center items-center'>
                        <div className=" bg-white gap-2 border rounded-xl px-3 py-2 w-full max-w-sm">
                               
                                  <div>
                                    <input
                                    type="text"
                                    placeholder=" Your email"
                                    className="outline-none bg-transparent   w-full text-sm"
                                  />
                                  </div>
                                 
                                </div>
                                <div className='pl-4'>
                                     <button className='bg-blue-700 text-white w-32 rounded-4xl h-12'>Subscribe</button>
                                 </div>
                  </div>
                            
                </div>
            </div>
            <div className='flex justify-between  mt-10'>
                <div className='text-white'>
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
                <div className='text-white'>
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
                <div className='text-white'>
                     
                    <h4 className='text-gray-400'>Desktop PCs</h4>
                    <p>Custom PCs</p>
                    <p>Servers</p>
                    <p>MSI All-In-One PCs</p>
                    <p>HP/Compaq PCs</p>
                    <p>ASUS PCs</p>
                    <p>Tecs PCs</p>

                </div>
                <div className='text-white'>
                    <h4 className='text-gray-400'>Laptops</h4>
                    <p>Evryday Use Notebooks</p>
                    <p>MSI Workstation Series</p>
                    <p>MSI Prestige Series</p>
                    <p>Tablets and Pads</p>
                    <p>Netbooks</p>
                    <p>Infinity Gaming Notebooks</p>
                </div>
                  <div className='text-white'>
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
                <div className='flex gap-1'>
                     <img src="./footer-img/paypal/payment-methods/light/paypal.png " alt="" />
                     <img src="./footer-img/visa/payment-methods/light/visa.png" alt="" />
                     <img src="./footer-img/visa1/payment-methods/light/maestro.png " alt="" />
                     <img src="./footer-img/discover1/payment-methods/light/discover.png " alt="" />
                     <img src="./footer-img/american/payment-methods/light/american-express.png " alt="" />

                </div>
                <div>
                    <p className='text-white'>Copyright &copy; 2020 Shop Pty. Ltd.</p>
                </div>
                </div>
               

            </div>
            
        </div>
       </div>
    );
};

export default Footer;