import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Mybutton from './mybutton';

const login = () => {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigate= useNavigate();
    const handlelogin=(e)=>{
        e.preventDefault();
        
        if(
            email==="hashmiabdullah@gmail.com" && password==="12343"){
            alert("Welcome back");
            navigate("/dashboard")
        }else{
            alert("Wrong Email or Password");
        }
    }
  return (
    <div className='container'>
        <form className='form-card' onSubmit={handlelogin}>
        <h2>Login</h2>
            <div className='input-group'>
                <input type="email" placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='input-group'>
                <input type="paswword" placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <Mybutton title={"LoginNow"} type='submit'/>
            <button>LoginNow</button>
            <p className='footer-text'>Don't have an account? <Link className='link-text' to={"/signup"}>Create Account</Link></p>
        </form>

        </div>
    
  )
}

export default login