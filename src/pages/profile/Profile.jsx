import React from 'react'
import './pf.css'
import { Avatar, Box,  IconButton, TextField, TextareaAutosize, Tooltip, useMediaQuery } from '@mui/material';
import { AiOutlineArrowLeft, AiOutlineEdit, AiOutlineProfile} from 'react-icons/ai';
import { Link,  useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import DeleteForevorIcon from "@mui/icons-material/DeleteForever"
import { useState } from 'react';
import Loader from '../../loader/Loader';
import TextLoader from '../../loader/TextLoader';



const Profile = () => {
  const navigate = useNavigate();
 const isNonMobile = useMediaQuery("(min-width:600px)");
 const [userName, setuserName] = useState( '');
 const [profile, setProfiles] = useState( []);
 const [currentLocation,setCurrentLocation]=useState('');
 const [aboutMe,setAboutme]=useState('');
 const [profileImg,setProfileImg] = useState({ myImage:''});
  const [postImage,setPostImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoad, setIsLoad] = useState(true)



 useEffect(()=> { 
      getImages();
        getProfile();
        getProfileById();
    },[]);
//  create img
 const insertPicture = async (newImage) => {
 try{
  await axios.post("https://fastfood-api.com/insert",newImage)
  setIsLoading(true)
  toast.success("image uploaded")
  setIsLoading(false)
 } catch(error) {
  console.log(error);
  toast.error("error uploading your image,try later")
 }

 }

//  save profile
const saveProfile=async (e) => {
  e.preventDefault()
  insertPicture(profileImg)
  
  toast.success('image uploaded')

}

// get profile
const getProfile=async (e) => {
  const response = await axios.get("https://fastfood-api.com/edited-profile");
  setProfiles(response.data)
};

// GET IMAGES
const getImages= async (e) => {
  const response = await axios.get("https://fastfood-api.com/insert");
  setPostImage(response.data)
}

const handleFileUpload =async (e) => {
  const file= e.target.files[0];
  const base64 = await convertToBase64(file)
  setProfileImg({...profileImg, myImage:base64})
}
 

const getProfileById= async () => {
    const response = await axios.get('https://fastfood-api.com/edit-profile/6504aa313ab5ff3e0fc809ab');
    setuserName( response.data.userName);
    setCurrentLocation( response.data.currentLocation);
    setAboutme( response.data.aboutMe);
    setDescription( response.data.description);
    

}; 
const updateProfile = async (e) => {
    

    try {
        await axios.patch('https://fastfood-api.com/editprofile/6504aa313ab5ff3e0fc809ab', {
             userName,currentLocation,aboutMe
        });
        setIsLoading(true)
        toast.success("Profile Updated Successfuly")
        setIsLoading(false)
     
    } catch (error) {
        console.log(error);
           toast.error(error.message)
    }
}

// remove profile image
const removeProfile = async (id)=> {
  
  try {
    await axios.delete(`https://fastfood-api.com/insert-delete/${id}`);
    toast.success("Photo removed successfuly")
   
  } catch (error) {
    console.log(error);
    
    toast.error("error while deleting..!!,try deleting again")
  }
}

 


  
  const avatarStyle={
    width:'150px',
    height:'150px',
    borderBottom:'6px solid orange'
  }
 

    // on scroll
    window.onscroll=()=>{
      let header=document.querySelector('header');

      header.classList.toggle('sticky',window.scrollY >100);
    }
  return (
    <div className='full-form h-full  ' style={{height:'110vh'}}>
      {isLoading && <Loader/>}
    <div className='body-1 '>
      <header className='header bg-transparent'>
        <IconButton>
        <Link to='/homepage' style={{textDecoration:'none',color:'black'}}>
          <AiOutlineArrowLeft size={20}/>
        </Link>
        </IconButton>
        <h2 className='text-black md:text-xl text-xm font-semibold'>Edit My Profile</h2>
      <h1></h1>
      </header>
      <div className='state '>
        
       
        
      </div>
      {/* edit profile */}
     

      {/* edit form */}
      <div className=' md:p-8 p-2 bg-gray-200 shadow-2xl rounded-xl ' style={{borderTop:'2px solid orange'}}>
         <p className='part-1 md:mt-30 mt-24'>
         {/* get image */}
         {postImage.map((upload)=>(
           <div className='flex justify-center '>
            
                <Avatar src={upload.myImage} alt={<AiOutlineProfile size={55}/>} style={avatarStyle} />
                   <Tooltip title={<span className='text-xl text-orange-500'>remove image</span>}>
                    <button className='relative top-20 ml-2 text-orange-600' onClick={()=> removeProfile(upload._id)}>
                    <DeleteForevorIcon/>
                  </button>
                     
                </Tooltip>
                     
                </div>
         ))}
               {/* names */}
               <div>
              
                  <div>
                      
                     {profile.map((view)=>(
                   
            <div className='text-center space-y-3 '>
              <div className=' mt-4 uppercase text-xl font-semibold'>{view.userName}.</div>
                <p>{view.aboutMe}</p>
              <p>{view.currentLocation}</p>
            
              </div>
                     
          ))}
                  </div>
              
              
               </div>
         
       
            
          </p>

<div className='md:p-12 p-4 md:mt-52 mt-72 text-white shadow-2xl bg-white rounded-xl '>

      <Box    sx={{gridColumn: 'span 4'}} className='border-1 w-full mb-10   bg-white border-orange-600 border-dashed text-black hover:border-black p-3 rounded-lg '>
           <form onSubmit={saveProfile} >
               <input
        label="image"
        name='myImage'
        id='file-upload'
        accept=".jpeg,.png,.jpg"
        type='file'
        onChange={(e)=> handleFileUpload(e)}
        className="text-black"
        
        />
        <button type='submit' className='flex ml-auto bg-orange-500 font-bold rounded-lg p-2 hover:bg-black  text-white'>save img</button>
        </form>
                
        </Box>

          
 <form onSubmit={updateProfile} >
        <Box className="" display='grid' gap='50px' gridTemplateColumns="repeat(4,minmax(0,1fr))" sx={{
          "& > div" : {gridColumn: isNonMobile ? undefined : 'span 4'}
        }}>
          <TextField
          label="Set User Name"
          name='username'
          value={userName}
          required
          onChange={(e)=> setuserName(e.target.value)}
          sx={{gridColumn: 'span 4'}}
          />

      
           <TextField
          label="Enter Current Location"
          type='location'
          name='location'
          value={currentLocation}
          onChange={(e)=> setCurrentLocation(e.target.value)}
          sx={{gridColumn: 'span 4'}}
          required
          />

            <TextareaAutosize
        style={{height:'16vh',width:'150px'}}
          className='p-4  h-56 border-1 border-orange-600 hover:border-black  rounded-lg  flex dark:bg-gray-900 text-black  '
          placeholder='Tell us about yourself  '
          name='about'
          value={aboutMe}
          onChange={(e)=>setAboutme(e.target.value)}
          required
          
          />

        </Box>
        
        
     
       
       {/* edit */}
       
       <button
    
       className='w-full bg-orange-500 p-4 mt-8  uppercase md:text-2xl text-xm font-semibold hover:bg-black'  
              
       >
        Save edited
       </button>
    
      </form>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Profile;

// convert image to base64


function convertToBase64(file){
  return new Promise((resolve,reject) => {
      const fileReader= new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=> {
        resolve(fileReader.result)
      };
      fileReader.onerror =(error) => {
        reject(error)
      }
  })
}

