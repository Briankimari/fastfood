import { Box } from '@mui/material'
import React, { useState } from 'react'

const Image = () => {
  const [profileImg,setProfileImg] = useState({ myImage:''});


    //  create img
 const insertPicture = async (newImage) => {
 try{
  await axios.post("http://localhost:5000/insert",newImage)
  toast.success("image uploaded")
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


const handleFileUpload =async (e) => {
  const file= e.target.files[0];
  const base64 = await convertToBase64(file)
  setProfileImg({...profileImg, myImage:base64})
}

  return (
    <div>
        
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
                
        
    </div>
  )
}

export default Image

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