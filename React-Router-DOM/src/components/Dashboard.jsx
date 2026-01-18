import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Mybutton from './mybutton';


const Dasboard = () => {
  const[count,setCount]=useState(1);
  const [count2,setCount2]=useState(0);
  useEffect(( )=>{
    setCount(count+1);
    
  },[count2]);
  const navigate=useNavigate();
  const handleLogin=()=>{
    navigate("/");
  }

  return (
    <div>
    <h1>Welcome To Dashboard page</h1>
    <p>{count}</p>
    <button onClick={()=>{setCount2(count2+1)}}>UpdateCount</button>
    <Mybutton title={"Logout"} onClick={handleLogin}/>
    
    </div>
  )
}

export default Dasboard