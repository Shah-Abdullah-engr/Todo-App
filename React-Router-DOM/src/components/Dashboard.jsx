import React, { useCallback, useEffect, useState,useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Mybutton from './mybutton';
import './dashboard.css'

const Dasboard = () => {
  const navigate=useNavigate();
  const [user,setUser]=useState([]);
  const [search,setSearch]=useState("");
  useEffect(() => {
    const data=JSON.parse(localStorage.getItem("User-data"))|| [];
    console.log("Storage se ye mila:", data);
    setUser(data);
  }, []);
  const deleteUser =useCallback((emailtoDelete)=>{
    const allData = JSON.parse(localStorage.getItem("User-data")) || [];
        
       
        const updatedList = allData.filter(u => u.email !== emailtoDelete);
        
        
        localStorage.setItem("User-data", JSON.stringify(updatedList));
        setUser(updatedList);
        
        alert("User Deleted ");
    }, [user]);
  
  

  
  const filterUser=useMemo(() =>{
    return user.filter((user)=>
      user.email.toLowerCase().includes(search.toLowerCase()) || user.name.toLowerCase().includes(search.toLowerCase()))
  },[search,user]);
  
  const handleLogin=()=>{
    localStorage.removeItem("Token");
    navigate("/");
  }

  return (
    <div className='dashboard-container'>
            <div className='header'>
            <h1>Welcome To Dashboard page</h1>
            
            <Mybutton title={"Logout"} onClick={handleLogin}/>        
            </div>
            <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Search by name or email..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="table-wrapper">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterUser.length > 0 ? (
                            filterUser.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button 
                                            className="delete-btn" 
                                            onClick={() => deleteUser(user.email)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" className="no-data">No users found matching your search.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Dasboard