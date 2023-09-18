import React from 'react'
import './pf.css'
import { Avatar, Box, Button, IconButton, TextField, TextareaAutosize, Tooltip, useMediaQuery } from '@mui/material';
import { AiOutlineArrowLeft,  AiOutlineProfile} from 'react-icons/ai';
import { Link,  useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import DeleteForevorIcon from "@mui/icons-material/DeleteForever"
import { useState } from 'react';





const EditProfile = () => {
 const {id} = useParams();
  const navigate = useNavigate();
 const isNonMobile = useMediaQuery("(min-width:600px)");
 const [userName, setuserName] = useState( '');
 const [currentLocation,setCurrentLocation]=useState('');
 const [aboutMe,setAboutme]=useState('');
 const [profileImg,setProfileImg] = useState({ myImage:''});
  const [postImage,setPostImage] = useState([]);



 useEffect(()=> {    
      getImages();
      getProfileById()
    },[]);
//  create img
 const insertPicture = async (newImage) => {
 try{
  await axios.post("https://fastfood-api-bz41.onrender.com/insert",newImage)
  toast.success("image uploaded")
 } catch(error) {
  console.log(error);
  toast.error("error uploading your image,try later")
 }

 }

// GET IMAGES
const getImages= async (e) => {
  const response = await axios.get("https://fastfood-api-bz41.onrender.com/insert");
  setPostImage(response.data)
}

const handleFileUpload =async (e) => {
  const file= e.target.files[0];
  const base64 = await convertToBase64(file)
  setProfileImg({...profileImg, myImage:base64})
}
 


  
  const avatarStyle={
    width:'150px',
    height:'150px',
    borderBottom:'6px solid orange'
  }

  

const getProfileById= async () => {
    const response = await axios.get('https://fastfood-api-bz41.onrender.com/edit-profile/65032c4b35d2b8bbcaa7c735');
    setuserName( response.data.userName);
    setCurrentLocation( response.data.currentLocation);
    setAboutme( response.data.aboutMe);
    setDescription( response.data.description);
    

}; 
const updateProfile = async (e) => {
    e.preventDefault();

    try {
        await axios.patch('https://fastfood-api-bz41.onrender.com/editprofile/65032c4b35d2b8bbcaa7c735', {
             userName,currentLocation,aboutMe
        });
        toast.success("Profile Updated Successfuly")
        navigate('/profile');
     
    } catch (error) {
        console.log(error);
           toast.error(error.message)
    }
}

// remove profile image
const removeProfile = async (id)=> {
  
  try {
    await axios.delete(`https://fastfood-api-bz41.onrender.com/insert-delete/${id}`);
    toast.success("Photo removed successfuly")
    
  } catch (error) {
    console.log(error);
    
    toast.error("error while deleting..!!,try deleting again")
  }
}

 

    // on scroll
    window.onscroll=()=>{
      let header=document.querySelector('header');

      header.classList.toggle('sticky',window.scrollY >100);
    }
  return (
    <div className='full-form h-full  '>
    <div className='body-1 '>
      <header className='header bg-transparent'>
        <IconButton>
        <Link to='/profile' style={{textDecoration:'none',color:'black'}}>
          <AiOutlineArrowLeft size={35}/>
        </Link>
        </IconButton>
        <h1 className='text-black '> Edit My Profile</h1>
        <h3></h3>
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
        
           
            
          </p>
 <form onSubmit={updateProfile} className='md:p-12 p-2 md:mt-28 mt-32 text-white'>
        <Box className="shadow-2xl bg-white rounded-xl md:p-16 p-4" display='grid' gap='50px' gridTemplateColumns="repeat(4,minmax(0,1fr))" sx={{
          "& > div" : {gridColumn: isNonMobile ? undefined : 'span 4'}
        }}>


          <TextField
          label="Set User Name"
          name='username'
          value={userName}
          onChange={(e)=> setuserName(e.target.value)}
          sx={{gridColumn: 'span 4'}}
          
          />

        
        <Box    sx={{gridColumn: 'span 4'}} className='border-1 w-full border-orange-600 border-dashed text-black hover:border-black p-4'>
           <input
        label="image"
        name='myImage'
        id='file-upload'
        accept=".jpeg,.png,.jpg"
        type='file'
        onChange={(e)=> handleFileUpload(e)}
        className="text-black"
        />
        </Box>
       

          
           <TextField
          label="Enter Current Location"
          type='location'
          name='location'
          value={currentLocation}
          onChange={(e)=> setCurrentLocation(e.target.value)}
          sx={{gridColumn: 'span 4'}}
          />

            <TextareaAutosize
          style={{width:'200%',height:'15vh'}}
          className='p-4  border-1 border-orange-600 hover:border-black  rounded-lg  flex dark:bg-gray-900 text-black  '
          placeholder='Tell us about yourself  '
          name='about'
          value={aboutMe}
          onChange={(e)=>setAboutme(e.target.value)}
          
          sx={{gridColumn: 'span 4'}}
          />

        </Box>
        
        {/* SUBMIT BTN */}
     
     

       {/* edit */}
       
       <button
       className='w-full mt-10 bg-orange-500 p-4 relative bottom-5 uppercase text-2xl font-semibold hover:bg-black'  
       type="submit"
       >
        Save edited
       </button>
    
      </form>
      </div>
     
    </div>
    </div>
  )
}

export default EditProfile;

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

