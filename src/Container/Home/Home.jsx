import React from 'react'
import Hero from "../../assets/Illustration.png"
const Home = () => {
  return (
    <div className='bg-[#F5F7FA]  ' id="home" >
        <div className='section__padding mx-auto xl:min-h-screen xl:h-screen lg:max-w-screen-2xl  '>
          <div className=' flex items-center justify-between mt-20 xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse  xl:gap-14  gap-10  mx-auto'>
            
              <div className=' lg:w-1/2 '>
                
                <h1 className='text-4xl mdtext-center text-black xl:text-7xl lg:text-6xl font-semibold font-[Inter] xl:leading-[90px]  mb-4 leading-[36px] md:text-5xl ] md:w-4/5 lg:w-full'>Lessons and insights <span className='text-green-500 md-w-3/4 '>from 8 years</span></h1>
                <p className=' md:w-3/4   text-black text-base font-normal font-[Inter] mb-10 leading-normal '>Where to grow your business as a photographer: site or social media?</p>
              

              
                <a className='  px-7 py-2 bg-green-500 text-white rounded hover:bg-neutral-400 transition-all duration-100  hover:-translate-y-4'>Register</a>
              
            </div>


            <div className='flex flex-1   self-start'>
                <img src={Hero} alt="" className='w-[100%] h-[100%]' />

              </div>

          </div>

      
         </div>
          

</div>
  
  )
}

export default Home