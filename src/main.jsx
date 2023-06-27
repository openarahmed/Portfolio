import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './Component/Blog/Blog.jsx';
import Home from './Component/Home.jsx';
import Contact from './Component/Contact/Contact.jsx';
import AboutMeDetails from './Component/AboutMe/AboutMeDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: 'aboutMe',
        element: <AboutMeDetails></AboutMeDetails>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
