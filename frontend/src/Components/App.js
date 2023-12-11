import React from 'react'
import Login from './Login.jsx';
import {Routes,Route} from 'react-router'
import Signup from './Signup.jsx';
import OtpSign from './OtpSign.jsx';
import HomePage from './HomePage.jsx';


const App = () => {
  return (
    <div>


    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/otpsignin' element={<OtpSign/>}> </Route>
    </Routes>



    </div>
  )
}

export default App