import React from 'react'
import frame from "../../assets/frame.png"
const About = () => {
  return (
    <div className='xl:py-[1rem] xl:mt-16 px-[2rem] sm:px-[3rem]   lg:px-[10rem]  max-w-screen-2xl mx-auto ' id='Features'>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-items-center content-center'>
      <div className='flex flex-1  self-center  '>
      <img src={frame} alt="" className='w-[100%] h-[100%]'  />
      </div>


       <div className='flex flex-1 flex-col justify-center '>
        <h1 className='text-black mb-8 lg:text-3xl text-2xl font-semibold font-[Inter] lg:leading-10 leading-8'>The unseen of spending three years at Pixelgrade</h1>
         <p className=' text-black lg:text-sm text-[14px] font-normal font-[Inter] leading-6' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <div className=' w-36 h-12 px-18  mt-8 py-3.5 bg-green-500 rounded justify-center items-center gap-2.5 inline-flex'>
            <div className='text-center text-white text-base font-medium font-[Inter] leading-normal    rounded hover:bg-neutral-400 transition-all duration-100  hover:-translate-y-4'>Learn More</div>
          </div>
        
       </div>

       </div>

    </div>
  )
}

export default About