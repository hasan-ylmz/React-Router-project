import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';
import ProfilePage from './Pages/ProfilePage.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';
import ProfilesPage from './Pages/ProfilesPage.jsx';
import './index.css'

const router = createBrowserRouter([{
  path:"/",
  element :<HomePage/>,
  errorElement: <NotFoundPage/>
},
{ 
  path:"/profiles",
  element:<ProfilesPage/>,
  children : [
    { 
      path:"/profiles/:id",
      element : <ProfilePage/>
    }
  ]
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
