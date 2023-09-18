import { Collapse, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'

const Dropdown = () => {
    const [open,setOpen] =useState(false);
    const handleClick=()=>{
        setOpen(!open)
    }
  return (
    <div>
      <List >
        <ListItem  disablePadding>
            <ListItemButton onClick={handleClick}>
                <ListItemText sx={{color:'purple'}}  primary="Browse By Category" />
                {open ? <ExpandLess /> : <ExpandMore/>}
            </ListItemButton>
             </ListItem>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' className='mui-list' disablePadding >
                    <a href='/order'>
                <ListItemButton className='hidden-content'>
               <ListItemText className='hover:text-orange-500' primary="Popular meals" />
                 
                </ListItemButton>
                </a>

                 <a href='/available'>
                <ListItemButton>
                <ListItemText className='hover:text-orange-500' primary="Available meals"/>  
                 </ListItemButton> 
                </a>

                  <a href='/new'>
                 <ListItemButton>
                 <ListItemText className='hover:text-orange-500' primary="New meals"/>
                  </ListItemButton> 
                 </a>

                  <a href='/drinks'>
                  <ListItemButton>
                  <ListItemText className='hover:text-orange-500' primary="Drinks"/>   
                  </ListItemButton> 
                 </a>
                
                   <a href='/meats'>
                 <ListItemButton>
                   <ListItemText className='hover:text-orange-500' primary="Meats"/>
                 </ListItemButton> 
                </a>
               
                </List>            
            </Collapse>
       
      </List>
    </div>
  )
}

export default Dropdown
