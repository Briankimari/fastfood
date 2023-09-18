import React from 'react'
import { BsArrowUp } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='text-center bg-gray-950 w-full  p-4 sm:flex block items-center justify-center shadow-2xl border-t-2  bottom-0'>
     <h2 className='text-white font-semibold  p-4'>
       &copy;  2023 FastFood. Privacy Policy
        </h2>
        <button className='relative  ml-auto text-white hover:text-black bg-orange-600 p-1 hover:bg-orange-200 rounded-lg '>
         <a href='#'>
          <BsArrowUp  size={30}/> 
          </a> 
        </button>
    </div>
  )
}

export default Footer
