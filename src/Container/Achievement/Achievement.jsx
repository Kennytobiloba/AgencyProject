import React from 'react'
import ICONONE from "../../assets/ICONONE.png"
import ICONTWO from "../../assets/ICONTWO.png"
import ICONTHREE from "../../assets/ICONTHREE.png"

const Achievement = () => {
  return (
    <div className=' bg-[#F5F7FA] ' id="Products">
      <div className='px-4 lg:py-14 max-w-screen-2xl mt-20 mx-auto my-14 flex justify-around lg:flex-row flex-col gap-8'>
     <div className=''>
        <h1 className='text-neutral-600 mb-2 lg:text-4xl text-3xl font-semibold font-[Inter] leading-10'> Helping a local   <br /> <span className='text-green-500 lg:text-4xl text-3xl font-semibold font-[Inter] leading-10'> business reinvent itself</span>  </h1>
        
        <p className='text-zinc-900 text-base font-normal font-[Inter] leading-normal'>We reached here with our hard work and dedication</p>
        </div>


        <div className='grid grid-cols-2 gap-8'>
          <div className='flex gap-4'>
          <div className='flex items-center'>
            <img src={ICONTHREE} alt="" />
          </div>
          <div>
          <h4 className='text-neutral-600 lg:text-3xl text-1xl font-bold font-[Inter] leading-9'>46,328</h4>
          <p className='text-neutral-500 text-base font-normal font-[Inter] leading-normal'>Clubs</p>
          </div>
          </div>
          <div className='flex gap-4'>
          <div className='flex items-center'>
            <img src={ICONTWO} alt="" />
          </div>
          <div>
          <h4 className='text-neutral-600 lg:text-3xl text-1xl font-bold font-[Inter] leading-9'>828,867</h4>
          <p className='text-neutral-500 text-base font-normal font-[Inter] leading-normal'>Event Bookings</p>
          </div>
          </div>
          <div className='flex gap-4'>
          <div className='flex items-center'>
            <img src={ICONONE} alt="" />
          </div>
          <div>
          <h4 className='text-neutral-600 lg:text-3xl text-1xl font-bold font-[Inter] leading-9'>2,245,341</h4>
          <p className='text-neutral-500 text-base font-normal font-[Inter] leading-normal'>Members</p>
          </div>
          </div>
          <div className='flex gap-4'>
          <div className='flex items-center'>
            <img src={ICONTHREE} alt="" />
          </div>
          <div>
          <h4 className='text-neutral-600 lg:text-3xl text-1xl font-bold font-[Inter] leading-9'>1,926,436</h4>
          <p className='text-neutral-500 text-base font-normal font-[Inter] leading-normal'>Payments</p>
          </div>
          </div>

            
        </div>
        </div>


    </div>
  )
}

export default Achievement