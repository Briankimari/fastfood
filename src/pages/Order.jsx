import React from 'react'
import Heads from '../components/Heads'
import { ListItemButton } from '@mui/material'
import {  BsWhatsapp } from 'react-icons/bs'
import { TabStyle } from './TabStyle'
import { useLocation, useNavigate } from 'react-router-dom'

function Order (){
  const classes= TabStyle()
  const location= useLocation();
    const navigate=useNavigate();

  
const menubar=[
    {
        id:1,
        name:'Most Popular',
        path:'/order'
    }, 
    {
        id:2,
        name:'Available',
        path:'/available'
    },
    {
        id:3,
        name:'New Meals',
        path:'/new'
    },
    
    {
        id:4,
        name:'Drinks ',
        path:'/drinks'
    },
     {
        id:5,
        name:'Meats ',
        path:'/meats'
    }
];
  return (
    <div className='bg-gray-100 w-full h-full'>
      <Heads/>
     <div className='order-bg text-white text-2xl md:p-16 p-2 text-center space-y-4  md:space-y-8 '>
       <h1>Make Your Order Seated at your home</h1>
       <p className='text-xl'>Fast Food makes life easier & comfortable.</p>
      <p className='text-xl'>Let's Get started</p>
      <div className='flex justify-center'>
        <a  href="https://wa.me/25498163231/?text=Hello,Thenkie for reaching me here,now let's talk about the Business" >
      <button className='flex gap-2 text-lg bg-orange-400 p-3 hover:drop-shadow-2xl  rounded-3xl items-center justify-center'>
        Chat us <BsWhatsapp className='text-green-600' size={30}/>
      </button>
        </a>

      </div>
     </div>
     {/* header-items */}
     <div className='bg-gray-300 shadow-xl'>
      <ul className='sm:flex block   sm:ml-16 p-2 gap-2    text-sm  items-center  sm:space-y-0 space-y-4 justify-around  font-semibold'>
        {menubar.map(item=> (
          <li  className={location.pathname === item.path? classes.Active: classes.notActive} onClick={()=> navigate(item.path)} style={{cursor:'pointer'}}  key={item.id}>
            <ListItemButton>{item.name}</ListItemButton>
          </li>
        ))}
      </ul>
     </div>
    </div>
  )
}



export default Order
