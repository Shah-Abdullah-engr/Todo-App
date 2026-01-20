import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Mybutton from './mybutton';


const Dasboard = () => {
  const navigate=useNavigate();
  const handleLogin=()=>{
    localStorage.removeItem("Token");
    navigate("/");
  }

  return (
    <div>
    <h1>Welcome To Dashboard page</h1>
    
    <Mybutton title={"Logout"} onClick={handleLogin}/>
    
    </div>
  )
}

export default Dasboard