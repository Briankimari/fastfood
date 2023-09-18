import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Box,Typography,useTheme,useMediaQuery, TextField,Button} from '@mui/material';
import axios from 'axios'
import { toast } from 'react-toastify';
import { loginUser, validateEmail } from '../../pages/services/authServices';
import { useDispatch } from 'react-redux';
import { SET_LOGIN, SET_NAME } from '../../pages/redux/features/authSlice';
import Loader from '../../loader/Loader';


const initialState = {
  email: "",
  password: "",
};



const LoginForm = () => {
  const dispatch = useDispatch();
  const { palette} = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;
  const navigate=useNavigate();
  const [error, setError] = useState(null)
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  // log in
  const login = async (e)=>{
    e.preventDefault();
    try {
      await axios.post("https://fastfood-api-bz41.onrender.com/login", {
        email,password
      })
    } catch (error) {
     setError(error.response.data.message)
    }

    if (!email || !password) {
      return toast.error("all fields are required");
    } 

    if(!validateEmail(email)) {
      return toast.error("invalid email")
    }

    const userData = {
      email,
      password
    };
    setIsLoading(true);
    try {
      const data =await loginUser(userData);
      console.log(data);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/homepage");
      setIsLoading(false);
    } catch (error) {
     setError(error.response.data.message)
    }
  }

  

  return (
    <div className=''>
   {isLoading && <Loader/>}
    <form onSubmit={login}>
         {error && <p className='text-red-500'>{error}</p>}
       <Box display="grid" gap="50px" gridTemplateColumns="repeat(4,minmax(0,1fr))"
     sx={{"& > div":{gridColumn: isNonMobile ? undefined : 'span 4'}}}>
            
              <TextField label="Email"
              required  
            type="email"
            onChange={handleInputChange}
            name='email'
            value={email}
             sx={{gridColumn:'span 4'}}
            />

             <TextField label="Password"
             required
            type='password'
            onChange={handleInputChange}
            name='password'
            value={password}
            sx={{gridColumn:'span 4'}}
            />
            
        </Box>
         <Box>
         
            <button 
            className='w-full p-4 mt-10 text-white hover:bg-gray-300 bg-orange-600 rounded-lg'
            type="submit"

         >
                    LOGIN
            </button>
             
            <Link to='/register'>
             <Typography 
                    className='pt-10'
                      sx={{
                textDecoration:'underline',color:palette.primary.main,
                "&:hover":{
                    cursor: "pointer",
                    color: palette.primary.light,

                }
            }}>
              
                    Don't have an account? Register here.
             
           
           
            </Typography>
            </Link>
             
           
        </Box>
        
        
    </form>
   </div>
  );
}

export default LoginForm;
