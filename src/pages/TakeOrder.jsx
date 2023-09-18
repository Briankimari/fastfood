 import React, { useState } from 'react';
import {  Box,  Dialog, DialogActions, DialogContent, DialogTitle, IconButton,  TextField  } from '@mui/material'
import {styled  } from '@mui/material/styles'
import PropTypes from 'prop-types'
import {  useMediaQuery } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';

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


export default function TakeOrder() {
  const [open,setOpen] =useState(false);
    const navigate= useNavigate();
   const isNonMobile = useMediaQuery("(min-width:600px)");
   const [idNumber,setIdnumber] =useState('');
   const [phoneNumber,setPhoneNumber] = useState('');
   const [country,setCountry] = useState('town');
   const [postalAddress,setPostalAddress] = useState('');
   const [agree,setAgree] = useState('');
   const [isLoading,setIsLoading] = useState(false)


  //  save order to db
  const saveOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.post("fastfood-api/purchase",{
        idNumber,phoneNumber,country,postalAddress,agree
      });
      setIsLoading(true)
      toast.success("pay to complete your order");
      
      navigate('/account')
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const handleClickOpen=()=> {
    setOpen(true)
  }
  
  const handleClose=()=> {
    setOpen(false)
  }
  


  return (
    <div>
      
         <Box>
     
     <button onClick={handleClickOpen} className='bg-orange-600 text-white w-28 p-3  rounded-xl shadow-xl hover:drop-shadow-2xl flex items-center justify-center gap-2'>
            Order Now
          </button>
   
     
      </Box>
    
      <DialogBox 
      onClose={handleClose}  open={open}>
          {isLoading && <Loader/>}
      <DialogTitleModal  id="customized-dialog-title" onClose={handleClose}>
         <h1 className='text-2xl text-black font-bold'>Take Order</h1>
      </DialogTitleModal>
        <form onSubmit={saveOrder}>
          
      <DialogContent dividers>
  
        <Box  display='grid' gap='40px' gridTemplateColumns="repeat(4,minmax(0,1fr))" sx={{
          "& > div" : {gridColumn: isNonMobile ? undefined : 'span 4'}
        }}>
            <TextField
          label="Id number"
          name='idNumber'
          value={idNumber}
          onChange={(e)=> setIdnumber(e.target.value)}
          sx={{gridColumn: 'span 2'}}
          required
         
          />

          <TextField
          label="Phone number"
          name='phoneNumber'
          value={phoneNumber}
          onChange={(e)=> setPhoneNumber(e.target.value)}
          sx={{gridColumn: 'span 2'}}
          required
         
          />

           <select value={country} onChange={(e)=> setCountry(e.target.value)} required className='border-gray-300 border-1 p-2 hover:border-blue-500 h-16 rounded-lg' style={{gridColumn:'span 4'}}>
            <option className='text-lg bg-black  text-orange-400' value='town' disabled>select your nearest Town</option>
            <option className='text-lg' value='nairobi'>Nairobi</option>
            <option className='text-lg' value='nyeri' >Nyeri</option>
           <option className='text-lg' value='nakuru'>Nakuru</option>
          <option className='text-lg' value='kisumu'>Kisumu</option>
          <option className='text-lg' value='mombasa'>Mombasa</option>
          <option className='text-lg' value='machakos'>Machakos</option>
          <option className='text-lg' value='meru'>Meru</option>
          <option className='text-lg' value='eldoret'>Eldoret</option>
               
          </select> 
         

             <TextField
             type='text'
          label="Postal Address"
          name='postalAddress'
          value={postalAddress}
          onChange={(e)=> setPostalAddress(e.target.value)}
          sx={{gridColumn: 'span 4'}}
         required
        
        />

            
           
     

        </Box>
        <div className='flex items-center gap-3  mt-4 '>
             <input name='agree' value={agree} onChange={(e)=> setAgree(e.target.value)} type='checkbox' className='h-10 w-6' required/>
             <p className='text-sm italic'>I agree to all terms & conditions of this order & payment Reversal.</p>
        </div>
          
     
      </DialogContent>
 
      <DialogActions>
        <div  className='bg-orange-500 p-4 rounded-lg text-white uppercase text-center text-xl w-full hover:bg-gray-400'>
         <button type='submit' autoFocus >
         submit
      </button>
        </div>
     
      </DialogActions>
      </form>
      </DialogBox>
    </div>
  );
}







