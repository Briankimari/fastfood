import React, { useState } from 'react'
import { Box, TextField, useMediaQuery } from '@mui/material'
import {GrSecure} from 'react-icons/gr'
import Axios from 'axios'
import { toast } from 'react-toastify';
import { Link,  useNavigate, useParams } from 'react-router-dom';


const MpesaPay = () => {
     const isNonMobile = useMediaQuery("(min-width:600px)");
     const [phone, setPhone]=useState() 
     const [amount, setAmount]=useState()
     const navigate = useNavigate();

        const payHandler=(event)=>{
        event.preventDefault();
        
        Axios.post("https://fastfood-api-bz41.onrender.com/token",{
            amount,
            phone,
        }).then((res)=> {
          
            console.log(res);
           
          toast.success("please enter your pin on your phone to complete transaction")
             
        }).catch((error)=>{
            console.log(error);
            toast.error("invalid number or id number")
        })
     };

  return (
    <div>
      <div>

    
      <p className='bg-green-500 shadow-xl p-5 rounded-lg text-xl text-white font-bold mt-8 '>
            <h2 className='flex items-center '> M-PESA Payment</h2>

          </p>
           <div className='mt-8'>
      <form className='md:p-8 p-4 border-4 rounded-lg'>
         <Box  display='grid' gap='50px' gridTemplateColumns="repeat(4,minmax(0,1fr))" sx={{
          "& > div" : {gridColumn: isNonMobile ? undefined : 'span 4'}
        }}>
          <TextField
          label="mpesa number"
          name='phone'
         onChange={(e)=>setPhone(e.target.value)}
          sx={{gridColumn: 'span 4'}}
          required
         
          />
             <TextField
          label="ID Number"
          name='idNumber'
          sx={{gridColumn: 'span 4'}}
          required
         
          />

             <TextField
          label="Amount"
          name='amount'
          onChange={(e)=>setAmount(e.target.value)}
          sx={{gridColumn: 'span 4'}}
          required
          />

           

        </Box>
        <div>
           <label className='flex text-sm items-center gap-2 mt-5 font-semibold'>
            <input
                type='checkBox'
                className='h-8 w-8'
                required
            />
          <p className='text-black'>
            i agree to the <span className='text-purple-500'>
                Terms & Condition, Refund and Cancellation Policy,Fees
                </span>
            </p>  
           </label>
        </div>
         <div>
             <button    onClick={payHandler} className=' bg-orange-500 hover:drop-shadow-2xl p-6  ml-auto flex items-center h-16 mt-6 text-xl shadow-xl rounded-lg text-white' type='submit'>pay now</button>
         </div>
      </form>
  
    </div>
    <div className='mt-10'>
      <h1 className='flex items-center gap-2 font-bold uppercase text-sm'><GrSecure  size={30}/> <span>secure payment</span></h1>
      <p className='ml-10 text-gray-600'>Your information is protected by </p>
      <p className='ml-10 text-gray-600'>256 bit SSL encryption.</p>
    </div>
  
  </div>

    </div>
  )
}

export default MpesaPay
