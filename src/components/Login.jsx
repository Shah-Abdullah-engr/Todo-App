import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Mybutton from './mybutton';

const login = () => {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[visible,setVisible]=useState(false);
    const navigate= useNavigate();
    
   const handlelogin = (e) => {
    e.preventDefault();
    const rawData=localStorage.getItem("User-data");
    const allUsers =rawData ? JSON.parse(rawData):[];
    const foundUser=allUsers.find(user=>
        user.email.trim()===email.trim()&&user.password.trim()===password.trim());
    if(foundUser){
        const loginToken ={loginID:foundUser.id,loginEmail:foundUser.email,loginPass:foundUser.password};
        localStorage.setItem("Token",JSON.stringify(loginToken));
        alert("Login Successfully");
        navigate("/dashboard");
    }else{
        alert("Wrong Password or Email!! Try Again");
    }
};
         
        // if(savedData && savedData.email ===email && savedData.password ===password){
        //     const loginToken={loginEmail:email,loginPasa:password}
        //     localStorage.setItem("Token",JSON.stringify(loginToken));
              
        //     alert("Login Successfully");
        //     navigate("/dashboard");
            
        // }else{
        //     alert("wrong Email or Password!! try again")
        // }
    
  return (
    <div className='container'>
        <form className='form-card' onSubmit={handlelogin}>
        <h2>Login</h2>
            <div className='input-group'>
                <input type="email" placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='input-group' >
                <input type={visible?"text":"password"} placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className='eye-btn' type='button' onClick={()=>{setVisible(!visible)}}>{visible?"🔒":"👁️"}</button>
            </div>
            
            <Mybutton title={"LoginNow"} type='submit'/>
            
            <p className='footer-text'>Don't have an account? <Link className='link-text' to={"/signup"}>Create Account</Link></p>
        </form>

        </div>
    
  )
}

export default login