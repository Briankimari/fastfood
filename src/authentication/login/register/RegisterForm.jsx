import React, { useState } from 'react';
import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Loader from '../../../loader/Loader';
import { registerUser, validateEmail } from '../../../pages/services/authServices';
import { SET_LOGIN, SET_NAME } from '../../../pages/redux/features/authSlice';





const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email:"",
    password: "",
    password2:""
   
     
}

const RegisterForm = () => {

const [error, setError] = useState(null)
const dispatch = useDispatch();
const { palette} = useTheme();
const isNonMobile = useMediaQuery("(min-width:600px)");
const [formData, setformData]= useState(initialValuesRegister);
const {firstName,lastName,email,password,password2} = formData;
const navigate= useNavigate();
const [isLoading,setIsLoading] = useState(false);

   const handleInputChange =(e) => {
    const {name,value} = e.target;
    setformData({ ...formData, [name]: value});
   } 
   
   const register = async (e) => {
    e.preventDefault();
    try {
        await axios.post("https://fastfood-api.com/register",{
            firstName,lastName,email,password
        });
        setIsLoading(true)        
        navigate("/")
        setIsLoading(false)
        
    } catch (error) {
        
    toast.error(error)
         
    }


    if(!firstName || !lastName || !email || !password) {
        return toast.error("All fields are required");

    };
    if (password.length < 6) {
        return toast.error("Password too short,Please input more than 6 characters");
    };
    if (!validateEmail(email)) {
        return toast.error("Please enter a valid email");
    };
    if (password !== password2) {
        return toast.error("Password does not match");
    };
  
     const userData= {
        firstName,
        lastName,
        email,
        password,
    };
      setIsLoading(true);
        try {
            const data = await registerUser(userData);
            await dispatch(SET_LOGIN(true));
            await dispatch(SET_NAME(data.name));
            navigate("/");
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
             toast.error(error)
        }
   

  
};
  return (
    <div>
        
    {isLoading && <Loader/>}
       
       <form onSubmit={register}>
         {error && <p className='text-red-500'>{error}</p>}
        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4,minmax(0,1fr))"
         sx={{"& > div":{gridColumn: isNonMobile ? undefined : 'span 4'}}}>
         <>
          <TextField label="First Name"
               required    
            onChange={handleInputChange}
            name='firstName'
            value={firstName}
                sx={{gridColumn:'span 2'}}
            />

            <TextField label="Last Name"
            required  
            onChange={handleInputChange}
            name='lastName'
            value={lastName}
            sx={{gridColumn:'span 2'}}
            />
            </>

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

             <TextField label="Confirm Password"
            type='password'
            onChange={handleInputChange}
            name='password2'
            value={password2}
           required
            sx={{gridColumn:'span 4'}}
            />
        
        </Box>
   <Box>
              <button 
            className='w-full p-4 mt-10 text-white rounded-lg hover:bg-gray-300 bg-orange-600'
            type="submit"

         >
                    REGISTER
            </button>
                <Link to="/">
                <Typography 
                    className='pt-10'
                      sx={{
                textDecoration:'underline',color:palette.primary.main,
                "&:hover":{
                    cursor: "pointer",
                    color: palette.primary.light,

                }
            }}>
              
                    Don't have an account? Login here.
             
           
           
            </Typography>
            </Link>
        </Box>
       </form>
       

    </div>
  );
}

export default RegisterForm;
