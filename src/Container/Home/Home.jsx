import React from 'react'
import Hero from "../../assets/Illustration.png"
const Home = () => {
  return (
    <div className='bg-[#F5F7FA]  ' id="home" >
        <div className='xl:py-[6rem] xl:mt-16 px-[2rem] sm:px-[3rem]   lg:px-[6rem] mx-auto justify-items-center lg:min-h-screen xl:h-screen lg:max-w-screen-2xl md:h-[50vh]  '>
          <div className='  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-9  gap-12  mx-auto justify-items-center content-center'>
            
              <div className='mt-[8rem] md:mt-[10rem]  xl:mt-[12rem]  '>
                
                <h1 className='text-3xl   text-black xl:text-6xl lg:text-5xl font-semibold font-[Inter] xl:leading-[70px] lg:text-[5xl]  mb-4 leading-[38px] md:text-5xl ]  lg:w-full '>Lessons and insights <span className='text-green-500 md-w-3/4 '>from 8 years</span></h1>
                <p className='   text-black text-bold font-normal font-[Inter] mb-10 leading-normal '>Where to grow your business as a photographer: site or social media?</p>
              

              
                <a className='  px-7 py-2 bg-green-500 text-white rounded hover:bg-neutral-400 transition-all duration-100  hover:-translate-y-4'>Register</a>
              
            </div>


            <div className='flex flex-1  self-center md:mt-[8rem] xl:mt-[8rem] '>
                <img src={Hero} alt="" className=' w-[100%] h-[100%]' />

              </div>

          </div>

      
         </div>
          

</div>
  
  )
}

export default Home