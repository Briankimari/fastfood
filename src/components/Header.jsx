import React from 'react'
import {AiFillForward } from 'react-icons/ai'
import Navbar from './Navbar'
import {FiPhoneCall} from 'react-icons/fi'


const Header = () => {
  return (
    <div>
         <div className=' h-full nav-item  w-full'>
             <Navbar/>
     
        <div className='text-white text-left p-10 mt-32 space-y-1 ml-20 we-1'>
          <div className='flex relative right-16 gap-6 '>
             <button className='border-2 w-10 h-10 flex items-center justify-center
             rounded-lg bg-transparent shadow-xl hover:drop-shadow-2xl'><AiFillForward size={30}/> </button>
              <p className='text-4xl font-semibold '>
            Filling your tummy  </p>
          </div>
         
         <div className='we-1'>
            <p className='text-4xl font-semibold'>on time is what </p>
          <p className='text-2xl '>
             we care about
          </p>
          <p className='text-xl'>Whatever you want,Whenever you want it</p>
           </div>
                 
        </div>
       <div className='ml-28 text-white text-lg font-semibold pb-16 we-2'>
          <p>At FastFood,we provide affordable food deliverly</p>
          <p> make your day fabulous with our </p>

          <div>
          <span className='text-orange-600'>Tasty,hot, and hygienic  food</span>
          </div>
          <a href='tel:0743810773'>
          <div className='flex items-center cursor-pointer gap-2 bg-orange-600 w-32 h-12 mt-6 justify-center rounded-2xl'>
                 <FiPhoneCall className='text-blue-300' size={30}/>
                <p className='text-sm'>Call us</p>
              </div>
               </a>
        </div>
        
        </div>

    </div>
  )
}

export default Header
