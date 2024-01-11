import React from 'react'
import Hero from "../../assets/illustration.png"
const Home = () => {
  return (
    <div className='bg-[#F5F7FA] ' id="home">
        <div className='lg:py-[8rem] lg:px-[4rem] py-[2rem] px-[2rem] md:py-[4rem] md:px-[8rem] max-w-screen-2xl mx-auto min-h-screen h-screen max-auto '>
          <div className='flex lg:justify-between lg:flex-row flex-col gap-12 items-start mx-auto'>
            
              <div className='flex-1 flex lg:justify-center items-start   flex-col mr-[5rem] md:w-11/12 '>
                <h1 className='text-[64px]text-neutral-600 lg:text-6xl text-4xl font-semibold font-[Inter] lg:leading-[74px] mb-4 leading-[44px] md:text-5xl ]'>Lessons and insights <span className='text-green-500 '>from 8 years</span></h1>
                <p className='  text-neutral-500 text-base font-normal font-[Inter] mb-10 leading-normal '>Where to grow your business as a photographer: site or social media?</p>

                <div className='w-32 h-12 px-8 py-3.5 bg-green-500 rounded justify-center items-center gap-2.5 inline-flex'>
                <div className='text-center text-white text-base font-medium font-[Inter] leading-normal'>Register</div>
              </div>
            </div>


            <div className='flex flex-1 justify-center align-sub'>
                <img src={Hero} alt="" className='w-[100%] h-[100%]' />

              </div>

          </div>

      
         </div>
          

</div>
  
  )
}

export default Home