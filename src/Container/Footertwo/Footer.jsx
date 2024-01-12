import React from 'react'
import Logo from "../../assets/Nexcent.png"
import Icon from "../../assets/Icon.png"

const Footer = () => {
  return (
    <div className='bg-[#263238] relative bottom-0 text-white'>
         <div className='px-4 lg:px-14 max-w-screen-2xl  lg:my-8  lg:py-[6rem]  mx-auto '>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-8 sm:flex sm:justify-between mx-auto'>
               <div className=''>
               <div className='flex flex-1 gap-2 mb-4 mt-8'>
               <img src={Icon} alt="" className=' w-[35px] h-[24px]' />
               <img src={Logo} alt="log" className='w-[111.49px] h-[18px] bg-white'  />  
               </div>
                <p className='text-slate-50 text-sm font-normal font-[Inter] leading-tight'>Copyright © 2020 Nexcent ltd.</p>
                <p className='text-slate-50 mt-2 mb-8 text-sm font-normal font-[Inter] leading-tight'>All rights reserved</p>
                <div className='flex gap-4'>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
                </div>
               </div>

                <div className=''>
                    <h4 className='text-white text-xl font-semibold font-[Inter] leading-7 mb-2'>Company</h4>
                    <div className='flex flex-col gap-2'>
                    <a href="">About us</a>
                    <a href="">Blog</a>
                    <a href="">Contact us</a>
                    <a href="">Pricing</a>
                    <a href="">Testimonials</a>

                    </div>

                </div>

                <div className=' '>
                    <h4 className='text-white text-xl font-semibold font-[Inter] leading-7 mb-2'>Support</h4>
                    <div className='flex flex-col gap-2'>

                    <a href="">Help center</a>
                    <a href="">Terms of service</a>
                    <a href="">Legal</a>
                    <a href=""> Privacy policy</a>
                    <a href="">Status</a>
                    </div>
                </div>

                <div className=' '>
                  <h4 className='text-white text-xl font-semibold font-[Inter] leading-7 mb-2'>Stay up to date</h4>
                  <input type="text" placeholder=' your email address' className='opacity-20  mt-8 bg-white rounded-lg text-sm font-normal font-[Inter] leading-tight' />
                </div>

            </div>

        </div>



    </div>
  )
}

export default Footer