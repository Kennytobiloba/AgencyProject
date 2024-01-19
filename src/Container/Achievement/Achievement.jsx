import React from 'react'
import ICONONE from "../../assets/ICONONE.png"
import ICONTWO from "../../assets/ICONTWO.png"
import ICONTHREE from "../../assets/ICONTHREE.png"

const Achievement = () => {
  return (
    <div className=' bg-[#F5F7FA] ' id="Products">
    <div className=' pb-[4rem]   xl:py-[6rem] xl:mt-16 px-[2rem] sm:px-[3rem]  lg:px-[2rem] max-w-screen-2xl mt-20 mx-auto my-14 flex justify-around lg:flex-row flex-col gap-8'>
    <div className=' mt-[4rem] '>
        <h1 className='text-black mb-2 lg:text-4xl text-2xl font-semibold font-[Inter] lg:leading-10 leading-8 '> Helping a local   <br /> <span className='text-green-600 lg:text-4xl text-2xl font-semibold font-[Inter] lg:leading-10 leading-6'> business reinvent itself</span>  </h1>
        
        <p className='text-black lg:text-base text-[14px] font-bold font-[Inter] leading-normal'>We reached here with our hard work and dedication</p>
        </div>


        <div className='grid grid-cols-2 gap-8'>
          <div className='flex gap-4'>
          <div className='flex items-center'>
            <img src={ICONTHREE} alt="" className='' />
          </div>
          <div>
          <h4 className='text-black lg:text-3xl text-1xl font-bold font-[Inter] leading-9'>46,328</h4>
          <p className='text-black lg:text-base text-[14px]  font-bold font-[Inter] leading-normal'>Clubs</p>
          </div>
          </div>
          <div className='flex gap-4'>
          <div className='flex items-center'>
            <img src={ICONTWO} alt="" />
          </div>
          <div>
          <h4 className='text-black lg:text-3xl text-1xl font-bold font-[Inter] leading-9'>828,867</h4>
          <p className='text-black Lg:text-base text-[14px] font-bold font-[Inter] leading-normal'>Event Bookings</p>
          </div>
          </div>
          <div className='flex gap-4'>
          <div className='flex items-center'>
            <img src={ICONONE} alt="" />
          </div>
          <div>
          <h4 className='text-black lg:text-3xl text-1xl font-bold font-[Inter] leading-9'>2,245,341</h4>
          <p className='text-black lg:text-base text-[14px] font-bold font-[Inter] leading-normal'>Members</p>
          </div>
          </div>
          <div className='flex gap-4'>
          <div className='flex items-center'>
            <img src={ICONTHREE} alt="" />
          </div>
          <div>
          <h4 className='text-black lg:text-3xl text-1xl font-bold font-[Inter] leading-9'>1,926,436</h4>
          <p className='text-black lg:text-base text-[14px] font-bold font-[Inter] leading-normal'>Payments</p>
          </div>
          </div>

            
        </div>
        </div>


    </div>
  )
}

export default Achievement