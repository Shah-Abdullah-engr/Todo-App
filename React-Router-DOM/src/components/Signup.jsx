
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Mybutton from './mybutton';


const Signup = () => {
  const navigate = useNavigate();
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const handleSignup = (e) => {
    e.preventDefault();
    const newUSer={name,email,password};
    console.log("New USer Registered",newUSer);

    alert('Account Created!');
    navigate("/");
  };

  return (
    <div className="container">
      <form className="form-card" onSubmit={handleSignup}>
        <h2>Create Account</h2>
        <input type="text" placeholder="Full Name" onChange={(e)=>{setName(e.target.value)}}required />
        <input type="email" placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}} required />
        <input type="password" placeholder="Password"onChange={(e)=>{setPassword(e.target.value)}} required />
        
        <Mybutton title={"Signup"} type='submit'/>
        
        <p className="footer-text">
          Already have an account? <Link className="link-text" to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default Signup;