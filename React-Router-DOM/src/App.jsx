import React from 'react'
import{createBrowserRouter, RouterProvider}from'react-router-dom';
import Login from './components/login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import "./components/App.css"
const App = () => {
  const router=createBrowserRouter(
    [
      {
        path:"/",
        element:<Login/>
      },
      {
       path:"/signup",
        element:<Signup/> 
      },
      {
        path:"/dashboard",
        element: <Dashboard/>},
    ]


  );
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App