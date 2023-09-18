import React, { useState } from 'react'
import { BsArrowLeft, BsArrowRight,  BsFillBagCheckFill, BsPersonWorkspace} from 'react-icons/bs';
import invest1 from '../data/invest1.png';
import invest2 from '../data/invest2.png';
import invest3 from '../data/invest3.png';
import invest4 from '../data/invest4.png';
import invest5 from '../data/invest5.png';
import mockup from '../data/mockup-2.png';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Header from './Header';
import {RiCustomerService2Line} from 'react-icons/ri';
import Slide from './slider/Slide';
import LineChart from '../pages/charts/LineChart';
import BarChart from '../pages/charts/BarChart';







const Home = () => {

  
  return (
    <div className=' bg-gray-100 h-full w-full  box-border'>
            <div>
              <Header/>
            </div>
        {/* home section */}
        <section id='home' className='p-8'>
          <div className='text-center'>
              <button className=' cursor-auto p-2 rounded-3xl w-72  uppercase text-orange-400 bg-black '>our advantages</button>
              <h2 className='text-2xl mt-4'> Why Choose Us</h2>
          </div>
{/* boxes */}
          <div className='mt-10 md:flex sm:block justify-around items-center gap-8   '>
              <div className='bg-white md:w-96 w-full h-full shadow-xl mb-6  rounded-lg p-6 text-center space-y-4'>
                <button className='bg-black p-6  rounded-full'>
                  <BsFillBagCheckFill size={56} style={{color:'orange'}}/>
                </button>
                <h2>Unique Approach</h2>
                <p className='text-gray-500 text-sm pb-6'>
                  we seamlessly provide free food derively to your door steps.
                </p>
              </div>

                <div className='bg-white md:w-96 w-full h-full mb-6 shadow-xl rounded-lg p-6 text-center space-y-4'>
                <button className='bg-black p-6  rounded-full'>
                  <BsPersonWorkspace size={56} style={{color:'orange'}}/>
                </button>
                <h2>Greate Team</h2>
                <p className='text-gray-500 text-sm pb-6'>
                Our team are always available 24/7 dedicated to serving you.Always awaiting for your call.
                </p>
              </div>

                <div className='bg-white md:w-96 w-full mb-6 h-full shadow-xl rounded-lg p-6 text-center space-y-4'>
                <button className='bg-black p-6  rounded-full'>
                  <RiCustomerService2Line size={56} style={{color:'orange'}}/>
                </button>
                <h2>Clients Offers</h2>
                <p className='text-gray-500 text-sm pb-6'>
                 Clients with over 4 times orders, are always gifted an extra meals.
                </p>
              </div>
          </div>
        
        </section>

        {/* tasks section */}
        <section className='p-8' id='task'>
               <div className='text-center'>
              <button className=' cursor-auto p-2 rounded-3xl w-72  uppercase text-orange-400 bg-black '>Meals For You</button>
              <h2 className='text-2xl mt-6 pb-10'>Most Popular Meals</h2>
          </div>
          {/* connectins */}
          <div >
            <Slide/>
          </div>
                      
      <div className='mt-32 md:p-8 p-0'>
         <h1 className='pb-10  text-center text-2xl font-semibold'>Weekly Summary Graph</h1>
        <div className='2xl:flex block gap-6 2xl:space-y-0 space-y-10   '>
                  
                    <div className='bg-white w-full h-96 md:p-4 p-0 rounded-lg shadow-xl '>
                    <LineChart/>
                    </div>    
                    <div className='bg-white w-full h-96 md:p-4 p-0  rounded-lg shadow-xl '>
                      <BarChart/>
                      </div>          
                </div>
      </div>
         
          
        </section>

        {/*about us  */}
        <div id='about'>
             <section  className='md:p-16 p-6'>
          <div className='bg-white shadow-xl'>
              <div className=' lg:flex block w-full h-full flex-row-reverse'>
              <div className='md:text-left text-center  md:p-32 p-3 space-y-4'>
             
              <button className=' cursor-auto p-2 rounded-3xl w-56  uppercase text-orange-500 bg-black '>about us</button>
               <h2 className='pt-4 font-semibold text-2xl'> We Care For Your Daily Meals</h2>
               <p className='text-gray-600 text-sm'>
                FastFood was founded in 2022 to help customers order their meals online.FastFood offers
                free home-deriverly for their Foods or Drinks.
               </p>
               <p className='flex gap-2'>
                <span className='text-orange-500 text-2xl italic'>66</span>
                <p>
                  Our agency helps brands worldwide to better understand what their customers need and the full
                  picture of how technology work.
                </p>
               </p>
          </div>
          <div className='p-16 rounded-lg'>
            <img className='' src={mockup} alt='team we.freelancer img'/>
          </div>
        
           </div>
          
            <div className='flex flex-wrap justify-around items-center pb-10 bg-gray-200 shadow-sm  p-2'>
          <img className='cursor-pointer ' src={invest1} alt='img'/>
           <img className='cursor-pointer'  src={invest2}/>
        <img className='cursor-pointer'  src={invest3}/>
    
          </div>
          </div>

        
        </section>

        {/* how we work */}
        <section className=' bg-black w-full h-full md:p-24 p-4 text-white '>
          <div className='flex justify-around  '>
            <h1 className='text-2xl'>How We Work</h1>
            <p className='flex gap-2'>
             <button  className='border-1 p-2 rounded-full flex justify-center items-center hover:bg-orange-500'>
               <BsArrowLeft size={27}/>
              </button > 
              <button className='border-1 p-2 rounded-full flex justify-center items-center  bg-orange-500 '>
                  <BsArrowRight size={27}/>
              </button>
              </p>
              </div>
                <div className='p-1  bg-white text-gray-700  w-full  md:flex block justify-between mt-8 rounded-lg h-full'>
                <p className='p-8  border-t-4 hover:border-t-orange-500  space-y-5 hover:bg-fuchsia-300 hover:text-black '>
                  <h1 className='text-4xl font-bold text-yellow-200'>01</h1>
                  <h4 className='text-black hover:text-indigo-500 text-2xl text-medium'>Choose Your Food</h4>
                  <p className='border-r-4 pr-3 '>
                    Choose your favourite meal and give your location as well as your current active phone number. 
                  </p>
                  <button className='flex  hover:bg-orange-500  bg justify-center items-center gap-2 border-1 border-white p-3 text-white rounded-3xl  '>
                    Contact us <BsArrowRight />
                  </button>
                </p>

                  <p className='p-8  border-t-8 hover:border-t-orange-500  space-y-5 hover:bg-fuchsia-300 hover:text-black '>
                   <h1 className='text-4xl font-bold text-yellow-200'>02</h1>
                  <h4 className='text-black hover:text-indigo-500 text-2xl text-medium'>Payments & Receits</h4>
                  <p >
                    After that,You will be redirected to your M-pesa payments method and place your Order.<span className='text-orange-500'>NB:</span>Don't pay untill your order is verified.
                  </p>
                     <button className='flex  hover:bg-orange-500  bg justify-center items-center gap-2 border-1 border-white p-3 text-white rounded-3xl  '>
                    Contact us <BsArrowRight />
                  </button>
                </p>

                   <p className='p-8  border-t-4 hover:border-t-orange-500  space-y-5 hover:bg-fuchsia-300 hover:text-black '>
                  <h1 className='text-4xl font-bold text-yellow-200'>03</h1>
                  <h4 className='text-black hover:text-indigo-500 text-2xl text-medium'>Wait For Delivery</h4>
                  <p className='border-l-4 pl-5'>
                   As soon as you place your order,Check your order Item and check the estimated time given to get your item delivered.
                  </p>
                   <button className='flex      hover:bg-orange-500 bg justify-center items-center gap-2 border-1 border-white p-3 text-white rounded-3xl  '>
                    Contact us <BsArrowRight />
                  </button>
                </p>
              </div>
        </section>
        </div>

        {/* contact us */}
        <section id='contact'>
          <ContactUs/>
        </section>
     
     <div>
      
     </div>
   <div>

   </div>
      
        <div>
          <Footer/>
        </div>

       
     
      
    </div>
  )
}

export default Home
