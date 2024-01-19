import React from 'react'
import Logo from "../../assets/Nexcent.png"
import Icon from "../../assets/Icon.png"
const Footerthree = () => {
  return (
    <div  id="#Faq">

<footer
   className="  bg-[#263238] text-center dark:bg-neutral-600 lg:text-left">
  <div className="xl:py-[8rem] pt-[4rem] xl:mt-16 px-[2rem] sm:px-[3rem]   lg:px-[10rem]">
    <div className="grid place-items-center md:grid-cols-3 lg:grid-cols-4 gap-10 ">
      
      <div className="mb-[2rem]">
      <div className='flex flex-1 gap-2 mb-4 mt-8'>
               <img src={Icon} alt="" className=' w-[35px] h-[24px]' />
               <img src={Logo} alt="log" className='w-[111.49px] h-[18px] bg-white'  />  
               </div>

        

        <p className='text-slate-50 text-sm font-normal font-[Inter] leading-tight'>Copyright © 2020 Nexcent ltd.</p>
                <p className='text-slate-50 mt-2 mb-8 text-sm font-normal font-[Inter] leading-tight'>All rights reserved</p>
                <div className='flex gap-4'>
                <i className="fa-brands fa-instagram text-white"></i>
                <i className="fa-brands fa-instagram text-white"></i>
                <i className="fa-brands fa-twitter text-white"></i>
                <i className="fa-brands fa-youtube text-white"></i>
                <i className="fa-brands fa-instagram text-white"></i>
                </div>
    
      </div>

      
      <div className="">
        <h5
          className="mb-2.5 text-white text-xl font-semibold font-[Inter] leading-7">
          Company
        </h5>

        
        <div className='flex flex-col gap-2 text-white'>
                    <a href="">About us</a>
                    <a href="">Blog</a>
                    <a href="">Contact us</a>
                    <a href="">Pricing</a>
                    <a href="">Testimonials</a>

                    </div>
           
        
      </div>

    
      <div className="">
      <div className="">
        <h5
          className="mb-2.5 text-white text-xl font-semibold font-[Inter] leading-7">
          Company
        </h5>

        
        <div className='flex flex-col gap-2 text-white'>
        <a href="">Help center</a>
                    <a href="">Terms of service</a>
                    <a href="">Legal</a>
                    <a href=""> Privacy policy</a>
                    <a href="">Status</a>

                    </div>
           
        
      </div>

    
      </div>

      
      <div >
      <div className="mb-12">
        <h5
          className="mb-2.5 text-white text-xl font-semibold font-[Inter] leading-7">
          Company
        </h5>

        
        <input type="text" placeholder=' your email address' className='opacity-20  mt-8 bg-white rounded-lg text-sm font-normal font-[Inter] leading-tight' />
           
        
      </div>
       
      </div>
    </div>
  </div>

  
 
</footer>



    </div>
  )
}

export default Footerthree