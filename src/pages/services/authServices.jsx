import axios from "axios";
import { toast } from "react-toastify";



export const validateEmail = (email) => { 
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await 
    axios.post(
      'https://fastfood-api-bz41.onrender.com/register',
      userData,
      // { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("User Registered successfully"); 
    }
    return response.data;
  } catch (error) { 
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      'https://fastfood-api-bz41.onrender.com/login',
      userData
    );
    if (response.statusText === "OK") {
      toast.success("Login Successful...");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};




// Get Login Status
export const getLoginStatus = async () => {
  try {
    const response = await axios.get('https://fastfood-api-bz41.onrender.com/loggedin');
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
 };
// // Get User Profile
export const getUser = async () => {
   try {
    const response = await axios.get('https://fastfood-api-bz41.onrender.com/getuser');
    return response.data;
   } catch (error) {
     const message =
      (error.response && error.response.data && error.response.data.message) ||
       error.message ||
       error.toString();
     toast.error(message);
   }
 };
// Update Profile
export const updateUser = async (formData) => {
  try {
    const response = await axios.patch(
      'https://fastfood-api-bz41.onrender.com/updateuser',
      formData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};