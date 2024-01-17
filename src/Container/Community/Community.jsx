import React from 'react'
import blogone from "../../assets/blogone.png"
import blogtwo from "../../assets/blogtwo.png"
import blogthree from "../../assets/blog3.png"

const Community = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 section__padding  '>
        <div className='text-center  gap-10 justify-between '>
            <h1 className='text-center text-black lg:text-4xl text-2xl font-semibold font-[Inter] lg:leading-10 leading-8 mb-4'>Caring is the new marketing</h1>
            <p className='  text-center text-text lg:text-base text-[14px] font-normal font-[Inter] leading-normal lg:w-2/3  mx-auto'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>


        <div className='' >
          <div className='grid lg:grid-cols-3 py-[6rem] md:grid-cols-2 grid-cols-1 justify-between items-center gap-8'>
           <div className='mx-auto relative mb-12 cursor-pointer'>
             
             <img src={blogone} alt="" className='w-[100%] h-[100%]' />
            
             <div className='text-center px-2 py-4 bg-white shadow-lg md:w-3/4 mx-auto  absolute left-0 right-0 -bottom-8 rounded-md'>
              <h4 className='text-center text-black text-xl font-semibold font-[Inter] leading-7'>Creating Streamlined Safeguarding Processes with OneRen</h4>
              <div className='flex gap-2 items-center justify-center'>
                <a href="" className='text-green-500'>Readmore</a>
                <i className="fa-solid fa-arrow-right flex justify-center items-center text-green-500 text-[20px]"></i>
              </div>
             </div>
           </div>
           <div className='mx-auto relative mb-12 cursor-pointer'>
             <img src={blogtwo} alt="" />
             <div className='text-center px-2 py-4 bg-white shadow-lg md:w-3/4 mx-auto  absolute left-0 right-0 -bottom-8 rounded-md'>
              <h4 className='text-center text-black text-xl font-semibold font-[Inter] leading-7'>Creating Streamlined Safeguarding Processes with OneRen</h4>
              <div className='flex justify-center  items-center gap-2'>
                <a href="" className='text-green-500'>Readmore</a>
                <i className="fa-solid fa-arrow-right flex justify-center text-green-500 text-[20px]"></i>
              </div>
             </div>

           </div>
           <div className='mx-auto relative mb-12 cursor-pointer'>
             <img src={blogthree} alt="" />
             <div className='text-center px-2 py-4 bg-white shadow-lg md:w-3/4 mx-auto  absolute left-0 right-0 -bottom-8 rounded-md'>
              <h4 className='text-center text-black text-xl font-semibold font-[Inter] leading-7'>Creating Streamlined Safeguarding Processes with OneRen</h4>
              <div className='flex justify-center  items-center gap-2'>
                <a href="" className='text-green'>Readmore</a>
                <i className="fa-solid fa-arrow-right flex justify-center text-green-500 text-[20px]"></i>
              </div>
             </div>
           </div>
          </div>

        </div>

    </div>
  )
}

export default Community