import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Notification from '../pages/Notification'
import img from '../data/brayo6.png'
import Menu from './Menu'
import { IoMdArrowDropdown } from 'react-icons/io'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import axios from 'axios';
 



const Navbar = () => {
 
  const [postImage,setPostImage] = useState([]);

  

 useEffect(()=> { 
      getImages();
      
    },[]);

// GET IMAGES
const getImages= async (e) => {
  const response = await axios.get("fastfood-api/insert");
  setPostImage(response.data)
}
 

  return (
    <div>
        <nav className='flex items-center justify-between p-4 fixed z-10 w-full top-0 bg-black shadow-2xl'>
          <div className='logo-1'>
            <a className='text-white  text-2xl font-semibold hover:text-orange-200' href='#'>
            Fast<span className='text-orange-400'>Food</span>
            </a>
          </div>

          <div className='text-white flex md:gap-10 gap-5 navs-a'>
            <a  className='text-lg font-semibold hover:text-orange-400' href='#home'>Home</a>
            <a className='text-lg font-semibold hover:text-orange-400' href='#task'>Order</a>
            <a className='text-lg font-semibold hover:text-orange-400' href='#about'>About Us</a>
            <a className='text-lg font-semibold hover:text-orange-400' href='#contact'>Contact Us</a>
            
          </div>
        
          <div className='flex items-center gap-4'>
             <IconButton>
               <Notification/>
               </IconButton>
            <Badge overlap='circular' anchorOrigin={{
              vertical:'bottom',
              horizontal:'right'
            }} 
            badgeContent={<div style={{width:10,height:10,backgroundColor:'#3af73a',borderRadius:'50%'}}/>}>
              <Link to='/profile'>
              
           
            {postImage.map((upload)=>(
           <div className=' '>
                <Avatar src={upload.myImage}  />
                  
                     
                </div>
         ))}
        
              </Link>

            </Badge>
              <Menu/>
          </div>
        </nav>
        {/* drop downs */}
        <Box  mt='4.5rem' className='bg-gray-200 view  shadow-2xl border-2 p-4' >
          <div className='full-1 flex justify-center items-center '>
                    {/* writing */}
          <div className='dropdown pl-8 '> 
          <p className='hover:text-orange-800 flex items-center gap-2 font-semibold text-sm hover:border-b-4 border-orange-500' > Popular Food <IoMdArrowDropdown size={16} /></p>
          <div className='dropdown-content  w-96  p-8 bg-white   shadow-2xl '>
           <div className='flex gap-20'>
               <p className='block'>
               <a href='/order'>chips</a>
               <a href='/order'>Chicken</a>
               <a href='/order'>Pilau miji</a>
                  <a href='/order'>Piza</a>
           </p>
           </div>
           

            
              
              
          </div>

          </div>
            {/* design */}
            <div className='dropdown pl-8 '> 
          <p className='hover:text-orange-800 flex items-center gap-2 font-semibold text-sm hover:border-b-4 border-orange-500' > Available Foods <IoMdArrowDropdown size={16} /></p>
         
          <div className='dropdown-content  w-96  p-8 bg-white   shadow-2xl '>
           <div className='flex gap-20'>
               <p className='block'>
               <a href='/available'>Chips Chicken</a>
               <a href='/available'>Chips Masala</a>
               <a href='/available'>Chapati</a>
                  <a href='/available'>Smokies</a>
           </p>
           </div>
           

            
              
              
          </div>

          </div>
          {/* Design */}
             <div className='dropdown pl-8'> 
          <p className='hover:text-orange-800 flex items-center gap-2 font-semibold  text-sm hover:border-b-4 border-orange-500' >Tradational Foods <IoMdArrowDropdown size={16} /></p>
            <div className='dropdown-content  w-96  p-8 bg-white   shadow-2xl '>
           <div className='flex gap-20'>
               <p className='block'>
               <a href='/new'>Mokimo</a>
               <a href='/new'>Githeri</a>
               <a href='/new'>Arrow Roots</a>
                  <a href='/new'>Casava</a>
           </p>
           </div>
           

            
              
              
          </div>

          </div>
     
          {/* Business */}
              <div className='dropdown pl-8'> 
          <p className='hover:text-orange-800 flex items-center gap-2 font-semibold text-sm hover:border-b-4 border-orange-500' > Drinks <IoMdArrowDropdown size={16} /></p>
            <div className='dropdown-content  w-96  p-8 bg-white   shadow-2xl '>
           <div className='flex gap-20'>
               <p className='block'>
               <a href='/drinks'>Black Coffee</a>
               <a href='/drinks'>Fresh Milk</a>
               <a href='/drinks'>Coffee</a>
                  <a href='/drinks'>Porrige</a>
           </p>
           </div>
           

            
              
              
          </div>

          </div>
          {/* music&video */}
      
          {/* marketing branding */}
              <div className='dropdown pl-8'> 
          <p className='hover:text-orange-800 flex items-center gap-2 font-semibold text-sm hover:border-b-4 border-orange-500' > Meat <IoMdArrowDropdown size={16} /></p>
         <div className='dropdown-content  w-96  p-8 bg-white   shadow-2xl '>
           <div className='flex gap-20'>
               <p className='block'>
               <a href='/meats'>choma</a>
               <a href='/meats'>pork</a>
               <a href='/meats'>chicken</a>
                  <a href='/meats'>beef</a>
           </p>
           </div>
           

            
              
              
          </div>
          </div>
          {/* social media */}
          
          </div>
  
        </Box>

         <Box  mt='4.5rem' className='bg-gray-200 view-1  shadow-2xl absolute w-full z-10 top-0' >
            <p className=''>
              <Dropdown/>
              </p>
         </Box>
    </div>
  )
}

export default Navbar
