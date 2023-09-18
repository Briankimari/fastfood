import React from 'react';
import {Box,Typography,useTheme,useMediaQuery} from '@mui/material';
import LoginForm from './LoginForm';



const Login = () => {
  const theme= useTheme();
  const isNonMobileScreens= useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
   <Box width="100%" className='bg-black shadow-md' backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign='center'>
    <Typography 
    fontWeight="bold"
    fontSize="32px"
    color="white"
    >
         <span className='text-orange-500'>Fast</span>Food
    </Typography>
   </Box>
      <Box width={isNonMobileScreens ? "50%" : "93%"} 
      p="2rem" m="10rem auto " borderRadius="1.5rem" 
      backgroundColor={theme.palette.background.alt}
      className="shadow-2xl">
      <Typography fontWeight="500" variant='h5' sx={{mb: "1.5rem"}}>
        <p className='text-xl text-gray-600 font-semibold flex justify-center'>welcome to &#160;<span className="text-orange-600"> FastFood</span></p>
      </Typography>
      <LoginForm/>
      </Box>
   </Box>
  );
}

export default Login;
