import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Router, RouterProvider } from 'react-router-dom'
import { routing } from './routes/Routes'
 
 
 
function App() {
   
useEffect(() => {
    AOS.init({
      duration: 500,     
      once: true,         
      easing: 'ease-out',
    });
  }, []);
  return (
    <>  
    <RouterProvider router={routing}/> 
        
    </>
  )
}

export default App
