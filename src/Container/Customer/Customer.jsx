import React from 'react'
import  customerImage from "../../assets/customer.png"
import Iconone from "../../assets/Icon1.png"
import Icontwo from "../../assets/Icon2.png"
import Iconthree from "../../assets/Icon3.png"
import Iconfour from "../../assets/Icon4.png"
import Iconfive from "../../assets/Icon5.png"
import Iconsix from "../../assets/Icon6.png"

const Customer = () => {
  return (
    <div className='bg-[#F5F7FA]' id="Testimonial">
      <div className='xl:py-[4rem] xl:mt-16 px-[2rem] sm:px-[3rem]   lg:px-[6rem] max-w-screen-2xl mx-auto my-8 mt-[6rem] py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-items-center content-center gap-10 xl:gap-1'>
      <div className=' flex flex-1 items-start  '>
      <img src={customerImage} alt="" className=''  />
      </div>

       <div className='flex flex-1 flex-col justify-center   '>
         <p className='text-black text-base font-medium font-[Inter] mb-4 leading-normal ' >Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
         <h3 className='text-green-500 lg:text-xl text-[14px] font-semibold font-[Inter] leading-7'>Tim Smith</h3>
         <p className='text-black mt-2 lg:text-base text-[14px] font-normal mb-2 font-[Inter] leading-normal'>British Dragon Boat Racing Association</p>

         <div className='flex mt-[2rem] md:mt-4 lg:mt-[2rem]  justify-between items-center xl:gap-6 gap-[18px] flex-wrap'>
          <img src={Iconone} alt=""  />
          <img src={Icontwo} alt=""  />
          <img src={Iconthree}alt="" />
          <img src={Iconfour} alt="" />
          <img src={Iconfive} alt="" />
          <img src={Iconsix} alt="" />
          <div className='flex'>  <h4 className=' w-48 text-green-500 lg:text-xl text-[14px] font-semibold font-[Inter] leading-7'> Meet All Customer </h4></div>
          <i className="fa-solid fa-arrow-right flex justify-center text-green-500 text-[20px]"></i>
         
          
         </div>
          <div className=' w-36 h-12 px-18  mt-8 py-3.5 bg-green-500 rounded justify-center items-center gap-2.5 inline-flex'>
            <div className='text-center text-white text-base font-medium font-[Inter] leading-normal'>Learn More</div>
          </div>
        
       </div>
       </div>

    </div>

      
    </div>
  )
}

export default Customer