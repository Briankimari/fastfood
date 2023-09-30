import { Collapse, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import { Link } from 'react-router-dom';

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
                    <Link to='/order'>
                <ListItemButton className='hidden-content'>
               <ListItemText className='hover:text-orange-500' primary="Popular meals" />
                 
                </ListItemButton>
                </Link>

                 <Link to='/available'>
                <ListItemButton>
                <ListItemText className='hover:text-orange-500' primary="Available meals"/>  
                 </ListItemButton> 
                </Link>

                  <Link to='/new'>
                 <ListItemButton>
                 <ListItemText className='hover:text-orange-500' primary="New meals"/>
                  </ListItemButton> 
                 </Link>

                  <Link to='/drinks'>
                  <ListItemButton>
                  <ListItemText className='hover:text-orange-500' primary="Drinks"/>   
                  </ListItemButton> 
                 </Link>
                
                   <Link to='/meats'>
                 <ListItemButton>
                   <ListItemText className='hover:text-orange-500' primary="Meats"/>
                 </ListItemButton> 
                </Link>
               
                </List>            
            </Collapse>
       
      </List>
    </div>
  )
}

export default Dropdown
