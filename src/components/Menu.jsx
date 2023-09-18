import React, { useState } from 'react'
import { Box, Button, CssBaseline, Drawer, IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import {AiFillForward, AiOutlineMenuUnfold } from 'react-icons/ai'

const menubar=[
    {
        id:1,
        name:'Edit Profile',
        path:'/profile'
    }, 
    {
        id:2,
        name:'Place Order',
        path:'/order'
    },
    {
        id:3,
        name:'Payments',
        path:'/account'
    },
    
    {
        id:4,
        name:'Report Issue',
        path:'/report'
    },
      {
        id:5,
        name:'Sign Out',
        path:'/'
    }
];

export default function Menu() {
    const navigate= useNavigate();
    const [open,setOpen]=useState()
    
const sideBar=()=>(
    <div style={{width:280}} onClick={()=>setOpen(false)} >
        <h1 className='text-2xl mt-4 pb-10 font-semibold text-center'>Brian Bandi</h1>
        {menubar.map((text)=> (
            <ListItem  key={text.id} onClick={()=> navigate(text.path)} >
                <ListItemButton style={{borderBottom:'2px solid orange'}} >
                    <ListItemText  primary={text.name} />
                </ListItemButton>
                
            </ListItem>
        ))}
      
    </div>
)
  return (
    <div>
        <CssBaseline/>
        <div>
            <IconButton sx={{marginTop:''}} aria-label='Menu' color='inherit' edge="start" onClick={()=>setOpen(true)}> 
                <AiOutlineMenuUnfold style={{color:'white'}} size={35} />
            </IconButton>
        </div>
        {/* drawer */}
        <Box>
            <Drawer PaperProps={{
                sx:{
                    marginTop:10.6,
                    height:'100vh',
                    background:'#000000',
                    color:'white',
                    borderTopLeftRadius:'35px',
                    
                    
                }
            }} 
             open={open} 
            onClose={()=>setOpen(false)} 
            anchor='right'>
                {sideBar()}

            </Drawer>
        </Box>
      
    </div>
  )
}




