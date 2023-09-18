import React from 'react'
import Heads from '../components/Heads'
import { AiOutlineCreditCard, AiOutlineDollar } from 'react-icons/ai'
import CardPayment from './CardPayment'
import MpesaPay from './MpesaPay'
import { TextField } from '@mui/material'

const Account = () => {
  return (
    <div className='  bg-gray-200 h-full w-full' >
      <Heads/>
      <div className=' mt-20 md:p-10 p-4'>
        <div className='bg-white rounded-lg md:p-10 p-4 '>
            <h1 className='md:text-3xl text-2xl font-bold pb-8'>Payment Methods</h1>
            <div className=' bg-gray-200 border-4 border-white p-1 rounded-lg'>
                <div className='md:flex flex  gap-6 mt-6 items-center rounded-lg md:p-8 p-2'>
          <button className='bg-orange-400 p-4 rounded-lg shadow-xl hover:drop-shadow-2xl'>
                <AiOutlineDollar size={40} style={{color:'black'}}/>
          </button>
      
          <h6 className='block text-xl font'>Make an order
            <p className='text-sm text-gray-500'>You can only do 5 orders per day</p>
          </h6>
         
        </div>
        <div className='md:p-10 p-2  text-gray-700'>
          <h1 className='p-2'>Pay Order</h1>
       <TextField
       label='Selected Order '
       className='w-full p-4 text-orange-500'
       
       />
       
          <div className='flex items-center justify-between p-4 mt-16'>
            <p>Items total</p>
            <p>1</p>
          </div>
           <div className='flex items-center justify-between p-4 mt-2'>
            <p>Total</p>
            <p className='text-xl text-gray-400 font-bold'>calculating...</p>
          </div>
        </div>
        {/* payment method */}
        <div className=' bg-gray-100 md:p-10 border-2'>
          <h1 className='text-xl font-bold'>Select your payment method</h1>
          <p className='bg-orange-200 shadow-xl p-4 rounded-lg text-xl text-purple-800 font-bold mt-8 '>
            <h2 className='flex items-center gap-4'><AiOutlineCreditCard size={30}/> New Card</h2>

          </p>
          <p className='text-sm mt-4 font-semibold'>we.connect accepts all visa,Mpesa & Equity pay.</p>
          <div>
            <CardPayment/>
          </div>
          {/* m-pesa */}
          <div>
            <MpesaPay/>
          </div>
        </div>
        
       </div>
            
      
        </div>
      
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Account
