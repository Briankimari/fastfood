import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Axios from 'axios'

const Pay = () => {
    const [phone, setPhone]=useState() 
    const [amount, setAmount]=useState()

     const payHandler=(event)=>{
        event.preventDefault();
        
        Axios.post("https://fastfood-api.com/token",{
            amount,
            phone,
        }).then((res)=> {
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        })
     };
  return (
    <div className='mt-10 justify-center flex items-center flex-col'>
     <h1 className='text-2xl mb-10 font-semibold'>Pay with <span className='text-green-600 font-bold'>Mpesa</span></h1>
     <form className='flex flex-col space-y-5'>
        <TextField
        placeholder='phone'
        className='bg-slate-100 text-center '
         onChange={(e)=>setPhone(e.target.value)}
        />
         <TextField
        placeholder='amount'
        className='bg-slate-100 text-center '
        onChange={(e)=>setAmount(e.target.value)}
        />
        <button
        onClick={payHandler}
        className='bg-green-600 text-white px-2 py-1 rounded-lg shadow-lg'
        >Pay Now</button>
     </form>
    </div>
  )
}

export default Pay
