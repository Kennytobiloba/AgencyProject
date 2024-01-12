import React from 'react'
import frame from "../../assets/frame.png"
const About = () => {
  return (
    <div className='px-4 lg:px-16 max-w-screen-2xl mx-auto my-8' id='Features'>
       <div className='flex justify-between  items-center mx-auto md:w-11/12 flex-col lg:flex-row'>
      <div className='flex flex-1 items-start justify-center'>
      <img src={frame} alt="" className='w-[100%] h-[100%]'  />
      </div>

       <div className='flex flex-1 flex-col '>
        <h1 className='text-neutral-600 mb-8 lg:text-4xl text-3xl font-semibold font-[Inter] leading-10'>The unseen of spending three years at Pixelgrade</h1>
         <p className=' text-neutral-500 text-sm font-normal font-[Inter] leading-6' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <div className=' w-36 h-12 px-18  mt-8 py-3.5 bg-green-500 rounded justify-center items-center gap-2.5 inline-flex'>
            <div className='text-center text-white text-base font-medium font-[Inter] leading-normal'>Learn More</div>
          </div>
        
       </div>
       </div>

    </div>
  )
}

export default About