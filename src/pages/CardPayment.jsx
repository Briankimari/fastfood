import React from 'react'
import { Box,  TextField, useMediaQuery } from '@mui/material';

const CardPayment = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <div className='mt-8'>
      <form className='md:p-8 p-4 border-4 rounded-lg'>
         <Box  display='grid' gap='50px' gridTemplateColumns="repeat(4,minmax(0,1fr))" sx={{
          "& > div" : {gridColumn: isNonMobile ? undefined : 'span 4'}
        }}>
          <TextField
          label="Card Number"
          name='cardNumber'
          sx={{gridColumn: 'span 4'}}
          required
          
          />

             <TextField
          label="Name on card"
          name='cardName'
          sx={{gridColumn: 'span 4'}}
           required
          />

             <TextField
          type='date'
          name='cardNumber'
          sx={{gridColumn: 'span 2'}}
           required
          />
             <TextField
             type='number'
          label="CVV"
          name='cardNumber'
          sx={{gridColumn: 'span 2'}}
           required
          />

        </Box>
        <div>
           <label className='flex items-center gap-2 mt-5 font-semibold text-purple-600'>
            <input
                type='checkBox'
                className='h-8 w-8'
            />
            Save card
           </label>
        </div>
        <div className=''>
             <button className=' bg-orange-500 hover:drop-shadow-2xl uppercae p-6  ml-auto flex items-center h-16 mt-6 text-xl shadow-xl rounded-lg text-white' type='submit'>pay now</button>
         </div>
      </form>
    </div>
  )
}

export default CardPayment
