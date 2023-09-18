 import React, { useState } from 'react';
import { Badge, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton,  Typography,  } from '@mui/material'
import {styled  } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { NotificationsOutlined} from '@mui/icons-material'

const DialogBox= styled(Dialog)(({theme})=> ({
  '&.MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding:theme.spacing(1),
  },
}))


function DialogTitleModal(props) {
  const {children, onClose, ...other} = props;

  return (
         <DialogTitle sx={{m:0,p:2}} {...other}>
      {children}
      {onClose ? (
        <IconButton aria-label='close' onClick={onClose} sx={{
          position:'absolute', right:8
, top:8, color: (theme)=> theme.palette.grey[500], }}>
        close
        </IconButton>
      ) : null}
    
    </DialogTitle>
   
  );
}
DialogTitleModal.proptoTypes={
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}


export default function Notification() {
  const [open,setOpen] =useState(false);

  const handleClickOpen=()=> {
    setOpen(true)
  }
  
  const handleClose=()=> {
    setOpen(false)
  }
  return (
    <div>
         <Box>
     
     <span onClick={handleClickOpen} style={{cursor:'pointer'}}>
        <Badge badgeContent={2 } color='primary'>
          
             <NotificationsOutlined  color='action' style={{fontSize:'30px',color:'white'}}/>
          
         
        </Badge>
     </span>
   
     
      </Box>
      
      <DialogBox 
      onClose={handleClose}  open={open}>
      <DialogTitleModal id="customized-dialog-title" onClose={handleClose}>
         New Message
      </DialogTitleModal>
      <DialogContent dividers>
     <Typography gutterBottom sx={{display:'flex',alignContent:'center', justifyContent:'space-between'}}>
      <h1 className=' font-bold text-orange-300'>Brian Bandi</h1>
       <p className='text-sm text-gray-300'>2mins ago</p>
     </Typography>
     
      <Typography gutterBottom>
      <p className='text-sm '>
        You have new message
        </p>  
     </Typography>
      <Typography gutterBottom>
     <p >
      Thenkie,you have successfully created your account,Please make your
      first order to activate free derively services.
      </p> 
     </Typography>
      </DialogContent>

      <DialogActions>
      <button autoFocus onClick={handleClose} className='text-orange-600 bg-black rounded-lg uppercase shadow-xl p-2'>
      Mark as Read
      </button>
      </DialogActions>
      </DialogBox>
    </div>
  );
}







