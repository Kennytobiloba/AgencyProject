import React, { useState } from 'react'
import Logo from "../../assets/Nexcent.png"
import Icon from "../../assets/Icon.png"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
  <p className='relative group' ><a href="#home" className='text-black font-bold'>Home</a>
  <span className="lg:flex hidden   absolute -bottom-1 left-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span>
  </p>


  <p className=' relative group'><a href="#Service" className='hover:text-green-800 text-black font-bold'>Service</a>
    <span className=" lg:flex hidden absolute -bottom-1 left-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span> </p>

   <p className='relative group'><a href="#Features" className='hover:text-green-800 text-black font-bold'>Feature</a>
    <span className="  lg:flex hidden absolute -bottom-1 left-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span></p>


  <p className=' relative group'><a href="#Products" className='hover:text-green-800 text-black font-bold'>Products</a>
   <span className=" lg:flex hidden  absolute -bottom-1 left-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span></p>

     <p className=' relative group'><a href="#Testimonial" className='hover:text-green-800 text-black font-bold'>Testimonial</a><span className="absolute -bottom-1 left-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span></p>


  <p className='relative group'><a href="#Faq" className='hover:text-green-800 text-black font-bold'>FAQ</a>
   <span className=" lg:flex hidden absolute -bottom-1 left-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span></p>

  
  </>
  
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='flex w-full bg-transparent fixed top-0 left-0 right-0 z-10'>
      <div className='w-full bg-white  '>
      <div className='flex justify-between items-center text-base gap-8 py-4 lg:px-[4rem] lg:py-[2rem] px-4 w-full'>
        
        <a href="" className='text-2xl font-semibold flex items-center space-x-3'>
          <img src={Icon} alt="" className='w-10 inline-block' />
          <span className='text-black font-bold'>NEXCENT</span>
        </a>

        <div className='xl:flex lg:hidden space-x-12 hidden'>
          <Menu />
        </div>

        <div className='xl:flex  lg:hidden space-x-12 items-center hidden'>
          <a href="" className='hidden lg:flex items-center text-[#4CAF4F] text-center text-[14px] leading-[22px] text-base font-normal-500 hover:text-gray-500'>Login</a>
          <button className='bg-[#4CAF4F] text-white  xl:py-2 xl:px-4 lg:py-2 lg:px-2  transition-all duration-300 rounded hover:bg-gray-800'>Sign Up</button>
        </div>

        <div className='xl:hidden lg:flex flex'>
          {toggleMenu
            ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
          }

          {toggleMenu && (
            <div className='scale-up-center absolute flex flex-col justify-center text-center px-4 py-7 align-middle top-[70px] w-[100%] right-0 space-y-4 bg-[#4CAF4F] text-white'>
              <Menu />
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
