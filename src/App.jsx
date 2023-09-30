import React from 'react';
import './App.css'
import {  Route, Routes } from 'react-router-dom';
import Login from './authentication/login/Login';
import RegisterForm from './authentication/login/register/Register';
import Pay from './components/Pay';
import Home from './components/Home';
import Profile from './pages/profile/Profile';
import Account from './pages/Account';
import Report from './pages/Report';
import Navigation from './pages/Navigation';
import Available from './components/ordernavs/Available';
import New from './components/ordernavs/New';
import Drinks from './components/ordernavs/Drinks';
import Meat from './components/ordernavs/Meat';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import EditProfile from './pages/profile/EditProfile';



const App=()=> {

   
  
  return(
    <div >
      <ToastContainer/>
      
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<RegisterForm/>} />
      <Route path='/pay' element={<Pay/>} />
      <Route path='/homepage' element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/account" element={<Account/>} />
      <Route path='/report' element={<Report/>} />
      <Route path='/order' element={<Navigation/>}/>
      <Route path='/available' element={<Available/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/drinks' element={<Drinks/>}/>
      <Route path='/meats' element={<Meat/>} />
      <Route path='/editProfile' element={<EditProfile/> }/>
      </Routes>
    
      
    </div>
  );
};

export default App;


