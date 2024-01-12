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
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id="Service">
            <div className='text-center my-12'>
                <h1 className=' text-neutral-600 text-4xl font-semibold mb-6 font-[Inter] leading-10'>Our Client </h1>
                <p className='text-center text-neutral-500 text-base font-normal font-[Inter] leading-normal'>We have been working with some Fortune 500+ clients</p>
        
            </div>
            <div className='flex  justify-between items-center gap-8 flex-wrap'>
             <img src={Iconone} alt="" />
             <img src={Icontwo} alt="" />
             <img src={Iconthree} alt="" />
             <img src={Iconfour} alt="" />
             <img src={Iconfive} alt="" />
             <img src={Iconsix} alt="" />
             <img src={Iconseven} alt="" />
             <img src={Iconeight} alt="" />
            </div>


             <div className='text-center mt-20  px-8 flex flex-col item-center md:w-1/2 mx-auto '>
            <h1 className='text-center   text-neutral-600 text-4xl font-semibold font-[Inter] leading-10'>Manage your entire community in a single system</h1>
            <p className=' text-center text-neutral-500 text-base font-normal font-[Inter] mt-5 leading-normal'>Who is Nextcent suitable for?</p>
            </div>
           

           <div className='mt-14 mb-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
            <div className='px-4 py-8 mb-2 mt-2 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow-xl cursor-pointer'>
              <img src={people} alt="" className='w-14 h-14 mx-auto rounded-tl-3xl' />
              <h2 className='text-center text-neutral-600 text-3xl font-bold font-[Inter] leading-9'>Membership Organisations</h2>
              <p className=' mt-4 text-center text-neutral-500 text-sm font-normal font-[Inter] leading-tight'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className='px-4 py-8 mb-2 mt-2 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow-xl cursor-pointer'>
              <img src={house} alt="" className='w-14 h-14 mx-auto rounded-tl-3xl' />
              <h2 className='text-center text-neutral-600 text-3xl font-bold font-[Inter] leading-9'>National Associations</h2>
              <p className=' mt-4 text-center text-neutral-500 text-sm font-normal font-[Inter] leading-tight'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className='px-4 py-8 mb-2 mt-2 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow-xl cursor-pointer'>
              <img src={hand} alt="" className='w-14 h-14 mx-auto rounded-tl-3xl' />
              <h2 className='text-center text-neutral-600 text-3xl font-bold font-[Inter] leading-9'>Clubs And Groups</h2>
              <p className=' mt-4 text-center text-neutral-500 text-sm font-normal font-[Inter] leading-tight'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>




          <div>
            
          </div>



            
           </div>

        </div>
        
    </div>
  )
}

export default Service