import React from 'react'
import logo from '../data/food.jpg'
import order from '../data/order.png'
import bg from '../data/man.png'

const ContactUs = () => { 
  return (
    <div className='md:p-10 p-4 '>
      
      <div className=' bg-white p-8'>
     
           <div className=' flex flex-wrap justify-around items-center text-center'>
            <img src={order} width={250} alt='image'/>
           <div className=' text-gray-600 ' >
       <img src={logo} width={280}  className='cursor-pointer  ' alt='Logo'/>
        <p>We provide quality Food </p>
        <p>and delivered to your door steps .</p> 
        <p className='text-pink-500'>subscribe to get daily notifications.</p>
      
      </div>
       <img src={bg} width={250} alt='image'/>
    
      
      </div>
      {/* navigations */}
   <div className=' md:flex block  justify-around mt-10  sm:text-left text-center space-y-6'>
        <div className='space-y-4'>
          <h1 className='text-xl font-semibold'>Navigation</h1>
            <p className='text-red flex flex-col space-y-2'>
          <a className=' hover:text-orange-500' href=''>Subscribe</a>
         <a className=' hover:text-orange-500' href=''> Our Meals</a>
          <a className=' hover:text-orange-500' href=''>Privacy Policy</a>
         <a className=' hover:text-orange-500' href=''>Your Orders</a>
          <a className=' hover:text-orange-500' href=''>Our Partners</a>
         <a className=' hover:text-orange-500' href=''>FAQ</a>
        </p>
        </div>
              
         <div className='space-y-4'>
          <h1 className='text-xl font-semibold '>Contacts</h1>
            <p className='text-red flex flex-col space-y-2'>
          <a className=' hover:text-orange-500' href='mailto:briankim7587@gmail.com'>info@getfastfood.org</a>
         <a className=' hover:text-orange-500' href='tel:0743810773'>+254743810773</a>
          <a className=' hover:text-orange-500' href='tel:0102435157'>
            0102435127
          </a> 

        </p>
        <a href='mailto:briankim7587@gmail.com'>
            <button className='bg-orange-500 ml-2 rounded-3xl hover:text-black hover:bg-gray-200  p-4 text-sm  text-white  mt-6 shadow-xl hover:drop-shadow-2xl'>
          SUBSCRIBE
        </button>
        </a>
        
        </div>
      </div>
      </div>
   

     
    </div> 
  )
}

export default ContactUs
