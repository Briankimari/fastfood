import React from 'react'
import chipskuku from '../../data/soda.jpg'
import chipsmasala from '../../data/sprit.jpg'
import choma from '../../data/fwater.webp'
import chapo from '../../data/lite.webp'
import lite2 from '../../data/lite2.webp'
import fish from '../../data/redbul.webp'
import { BsCartCheck, BsCheck } from 'react-icons/bs'
import Order from '../../pages/Order'
import TakeOrder from '../../pages/TakeOrder'

const foodData = [
  {
    id: 1,
    src: chipskuku,
    alt: "photo",
    title: "1.25L Drinks",
   time:'9mins ago',
    sale:' 120'
  },
  {
    id: 2,
    src: chipsmasala,
   alt: "photo",
    title: "2L Soda",
   time:'2hr ago',
    sale:' 200'
  },
   {
    id: 3,
    src: choma,
   alt: "photo",
    title: "Flavour Water",
   time:'57mins ago',
   sale:' 80'
  },

  {
    id: 4,
    src: fish,
   alt: "photo",
    title: "RedBull",
   time:'4mins ago',
    sale:' 200'
  },
   {
    id: 5,
    src: chapo,
   alt: "photo",
    title: "Lagers",
    time:'21mins ago',
    sale:' 340'
  },
     {
    id: 6,
    src: lite2,
   alt: "photo",
    title: "Windhoek Draught",
    time:'21mins ago',
    sale:' 350'
  },



 

];

const Drinks = () => {

  return (
    <div>
      <Order/>
       <h2 className='text-2xl p-8 text-center text-orange-300 font-extrabold'>Drinks for you!!</h2>
      <div className='p-10 grid 2xl:grid-cols-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6'>
       
          {foodData.map((item) => (
            <div key={item.id} className=' bg-orange-200 box-popular p-0 shadow-lg  space-y-2 '>
              <img src={item.src} alt={item.alt} className="img-1" />
            <div className='p-3 space-y-2 flex flex-col'>
                <h2 className='text-xl font-bold text-gray-700'>{item.title}</h2>
                <h2 className='text-gray-800  font-semibold'>Posted:<span className='text-sm text-rose-800'>{item.time}</span></h2>
                 <div>
                    <TakeOrder/>
                 </div>
                
                <p className=' ml-auto text-xl font-extrabold'><span className='text-sm font-light'>Kshs</span>{item.sale}</p>
               
           </div>
       
          <p className='bg-gray-200 p-2 flex items-center justify-between shadow-xl'>
            <h1 className='flex items-center'>Free derively <sup><BsCheck size={20} className='text-green-500'/></sup></h1>
            <BsCartCheck size={20} className='text-orange-500'/>
          </p>
            </div>
          ))}
       
      </div>

      <div className='p-10 grid 2xl:grid-cols-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6'>
       
          {foodData.map((item) => (
            <div key={item.id} className=' bg-orange-200 box-popular p-0 shadow-lg  space-y-2 '>
              <img src={item.src} alt={item.alt} className="img-1" />
            <div className='p-3 space-y-2 flex flex-col'>
                <h2 className='text-xl font-bold text-gray-700'>{item.title}</h2>
                <h2 className='text-gray-800  font-semibold'>Posted:<span className='text-sm text-rose-800'>{item.time}</span></h2>
                 <div>
                   <TakeOrder/>
                 </div>
                
                <p className=' ml-auto text-xl font-extrabold'><span className='text-sm font-light'>Kshs</span>{item.sale}</p>
               
           </div>
       
          <p className='bg-gray-200 p-2 flex items-center justify-between shadow-xl'>
            <h1 className='flex items-center'>Free derively <sup><BsCheck size={20} className='text-green-500'/></sup></h1>
            <BsCartCheck size={20} className='text-orange-500'/>
          </p>
            </div>
          ))}
       
      </div>
    </div> 
  )
}

export default Drinks
