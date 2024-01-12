import React, { useState } from 'react'
import Logo from "../../assets/Nexcent.png"
import Icon from "../../assets/Icon.png"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
  <p ><a href="#home" className=''>Home</a></p>
            <p><a href="#Service">Service</a></p>
            <p><a href="#Features">Feature</a></p>
            <p><a href="#Products">Products</a></p>
            <p><a href="#Testimonial">Testimonial</a></p>
            <p><a href="#Faq">FAQ</a></p>
  
  </>
  
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='flex  relative w-full ' >
       <div className='lg:px-16 lg:py-8 p-4 flex justify-between  w-full lg:bg-white  bg-transparent'>
       <div className='flex flex-1'>
            <img src={Icon} alt="" className=' w-[35px] h-[24px]' />
            <img src={Logo} alt="log" className='w-[111.49px] h-[20.662px]'  />  
        </div>
        <div className=' lg:flex hidden flex-1 gap-4 text-[#18191f] text-[16px]  font-inter text-base font-normal leading-6  '>
          
        <Menu/>
            
        </div>
        <div className='  lg:flex space-x-12 items-center hidden'>
            <button className='  hidden lg:flex  items-center text-[#4CAF4F] text-center text-[14px] leading-[22px]  text-base font-normal-500'>login</button>
            <button className=' bg-[#4CAF4F] text-white py-2 px-4 rounded-md '>Sign Up</button>
        </div>

      <div className='lg:hidden flex'>
       {
          toggleMenu 
          ? <RiCloseLine  size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line  size={27} onClick={() => setToggleMenu(true)}/>

        } 
         {

         toggleMenu && (
          <div className=' scale-up-center absolute flex flex-col justify-center text-center px-4 py-7  align-middle  top-[70px] w-[100%]  right-0 space-y-4  bg-[#4CAF4F] text-white'>
           <Menu/>
          </div>
         )
         }
      </div>


       </div>
    </div>
  )
}

export default Navbar