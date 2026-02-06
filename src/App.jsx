import React, { Children } from 'react'
import{createBrowserRouter, RouterProvider}from'react-router-dom';
import Login from './components/login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Protected from './components/Protectedroutes';
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
        element: (
        <Protected>
            <Dashboard />
        </Protected>
    )
  }
    ]
    


  );
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App