import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Users from "./Component/Users/Users";
import UserDetails from "./Component/UserDetails/UserDetails";




const router = createBrowserRouter([
  // {
  //   path:'/',
  //   element: <div>hello form reat router</div>
  // },
  // {
  //   path:'/about',
  //   element: <div>i am in the abaout page</div>
  // },
  {
    path:'/',
    element: <Home></Home>,
   children:[
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/contact',
      element:<Contact></Contact>
    },
    {
      path:'/Users',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    },
    {
      path:'/user/:userId',
      loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element:<UserDetails></UserDetails>
    },
   ]
  },
  
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>
);
