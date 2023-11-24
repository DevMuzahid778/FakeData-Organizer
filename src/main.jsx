import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import the React Router DOM
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Layout/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import UserDetails from './Component/UserDetails/UserDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path: "users/:userId",
        element: <UserDetails />,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
