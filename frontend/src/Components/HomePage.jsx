import React,{useEffect} from 'react'
import { Container, Button } from '@mui/material';
import '../Assets/Signupform.css'
import img1 from '../Assets/arxena-icon.png'
import { useNavigate } from 'react-router';
import {supabase} from '../Auth/app.js'
import { useState } from 'react';



const HomePage = () => {
 const[userData,setUserData]=useState(''); 

  useEffect(() => {
      
 async function getData(){
  const { data: { user } } = await supabase.auth.getUser();
  console.log(user);
  setUserData(user.email)
  return user;
 }
 if(!getData()){
  navigator('/login')
 }
    
  }, []);
  
  
  const navigator=useNavigate();

  function logout(){
    navigator('/login')
  }
  

  
  return (
    <div className='signup-form'>
        <Container>
            <div className='signup-form1'>
            <img height={200} width={200} src={img1} alt="" />
            <h2>This is homepage</h2>
            <h2>welcome {userData}</h2>
            <Button variant='contained'color="error" onClick={logout}>Logout</Button>
            </div>
           
        </Container>


    </div>
  )
}

export default HomePage