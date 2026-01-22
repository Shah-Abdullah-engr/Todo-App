
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Mybutton from './mybutton';


const Signup = () => {
  const navigate = useNavigate();
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [confirmpass,setConfirmpass]=useState();
  const [visible,setVisible]=useState();
  const [showpass,setShowpass]=useState();



 const handleSignup = (e) => {
    e.preventDefault();
    const newUser={name,email,password,confirmpass};

    const existingData=localStorage.getItem("User-data");
    let userLists=existingData? JSON.parse(existingData):[];
    if(!Array.isArray(userLists)){
      userLists=[userLists];
    }

    userLists.push(newUser);

    localStorage.setItem("User-data",JSON.stringify(userLists));
    alert("Account Created");
    navigate("/");
};
  return (
    <div className="container">
      <form className="form-card" onSubmit={handleSignup}>
        <h2>Create Account</h2>
        <input type="text" placeholder="Full Name" onChange={(e)=>{setName(e.target.value)}}required />
        <input type="email" placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}} required />
        <div className='input-group'>
        <input type={visible?"text":"password"}  placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required />
         <button className='eye-btn' type='button' onClick={()=>{setVisible(!visible)}}>{visible ? "🔒":"👁️"}</button>
         </div>
         <div className='input-group'>
        <input type={showpass?"text":"password"}  placeholder="Confirm Password"onChange={(e)=>{setConfirmpass(e.target.value)}} required />
        <button className='eye-btn' type='button' onClick={()=>{setShowpass(!showpass)}}>{showpass ? "🔒":"👁️"}</button>
        </div>
        
        <Mybutton title={"Signup"} type='submit'/>
        
        <p className="footer-text">
          Already have an account? <Link className="link-text" to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default Signup;