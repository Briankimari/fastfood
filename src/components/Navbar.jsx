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
  const response = await axios.get("https://fastfood-api-bz41.onrender.com/insert");
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
               
               <Link to='/order'>chips</Link>
               <Link to='/oreder'>chicken</Link>
               <Link to='/order'>Pilau miji</Link>
                  <Link to='/order'>Piza</Link>
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
               <Link to='/available'>Chips Chicken</Link>
               <Link to='/available'>Chips Masala</Link>
               <Link to='/available'>Chapati</Link>
                  <Link href='/available'>Smokies</Link>
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
               <Link to='/new'>Mokimo</Link>
               <Link to='/new'>Githeri</Link>
               <Link to='/new'>Arrow Roots</Link>
                  <Link to='/new'>Casava</Link>
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
               <Link to='/drinks'>Black Coffee</Link>
               <Link href='/drinks'>Fresh Milk</Link>
               <Link to='/drinks'>Coffee</Link>
                  <Link to='/drinks'>Porrige</Link>
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
               <Link to='/meats'>choma</Link>
               <Link to='/meats'>pork</Link>
               <Link to='/meats'>chicken</Link>
                  <Link to='/meats'>beef</Link>
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
