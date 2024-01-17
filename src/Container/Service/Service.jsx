import React from 'react'
import Iconone from "../../assets/Icon1.png"
import Icontwo from "../../assets/Icon2.png"
import Iconthree from "../../assets/Icon3.png"
import Iconfour from "../../assets/Icon4.png"
import Iconfive from "../../assets/Icon5.png"
import Iconsix from "../../assets/Icon6.png"
import Iconseven from "../../assets/Icon7.png"
import Iconeight from "../../assets/Icon8.png"
import hand from "../../assets/hands.png"
import people from "../../assets/people.png"
import house from "../../assets/house.png"


const Service = () => {
  return (
    <div>
        <div className='section__padding  max-w-screen-2xl mx-auto mt-[2rem]' id="Service">
            <div className='text-center my-12 mx-auto'>
                <h1 className=' text-black   text-2xl lg:text-5xl font-semibold  mb-4 font-[Inter] leading-10'>Our Client </h1>
                <p className='text-center text-black text-[14px] lg:text-[16px] font-bold font-[Inter] leading-normal'>We have been working with some Fortune 500+ clients</p>
        
            </div>
            <div className='flex mt-2  justify-between items-center gap-4 lg:gap-8  flex-wrap'>
             <img src={Iconone} alt="" />
             <img src={Icontwo} alt="" />
             <img src={Iconthree} alt="" />
             <img src={Iconfour} alt="" />
             <img src={Iconfive} alt="" />
             <img src={Iconsix} alt="" />
             <img src={Iconseven} alt="" />
             <img src={Iconeight} alt="" />
            </div>


             <div className='text-center mt-20  lg:px-8 flex flex-col item-center  mx-auto '>
            <h1 className='text-center   text-black lg:text-4xl  text-[24px] font-semibold font-[Inter] lg:leading-10 leading-7'>Manage your entire community in a single system</h1>
            <p className=' text-center text-black text-[16px] font-bold font-[Inter] mt-8 leading-normal'>Who is Nextcent suitable for?</p>
            </div>
           

           <div className='mt-20 mb-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
            <div className='px-4 py-8 mb-2 mt-2 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow-xl cursor-pointer'>
              <img src={people} alt="" className='lg:w-14 lg:h-14  w-10 h-10 mx-auto rounded-tl-3xl' />
              <h2 className='text-center text-black lg:text-3xl text-1xl font-bold font-[Inter] lg:leading-9 leading-4'>Membership Organisations</h2>
              <p className=' mt-4 text-center text-black text-[14px] lg:text-[16px] font-normal font-[Inter] leading-tight'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>

            <div className='px-4 py-8 mb-2 mt-2 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow-xl cursor-pointer'>
              <img src={house} alt="" className='lg:w-14 lg:h-14  w-10 h-10  mx-auto rounded-tl-3xl' />
              <h2 className='text-center text-black lg:text-3xl text-1xl font-bold font-[Inter] lg:leading-9 leading-4  '>National Associations</h2>
              <p className=' lg:mt-4 mt-2 text-center text-black text-[14px] lg:text-[16px] font-normal font-[Inter] leading-tight'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>

            <div className='px-4 py-8 mb-2 mt-2 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow-xl cursor-pointer'>
              <img src={hand} alt="" className='lg:w-14 lg:h-14  w-10 h-10  mx-auto rounded-tl-3xl' />
              <h2 className='text-center text-black lg:text-3xl text-1xl font-bold font-[Inter] lg:leading-9 leading-4'>Clubs And Groups</h2>
              <p className=' lg:mt-4  mt-2 text-center text-black text-[14px] lg:text-[16px] font-normal font-[Inter] leading-tight'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>




          <div>
            
          </div>



            
           </div>

        </div>
        
    </div>
  )
}

export default Service