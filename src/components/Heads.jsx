import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Notification from '../pages/Notification'
import img from '../data/brayo6.png'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import axios from 'axios';


const Heads = () => {
  
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
        <nav className='flex items-center justify-between p-4 fixed z-10 w-full top-0 bg-black shadow-lg'>
          <div className='logo-1 '>
           <Link to='/homepage'>
              <div className='logo-1'>
            <a className='text-white  text-2xl font-semibold hover:text-orange-200' href='#'>
            Fast<span className='text-orange-400'>Food</span>
            </a>
          </div>
           </Link>
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
               
    </div>
  )
}

export default Heads
