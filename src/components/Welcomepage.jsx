import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5"
import { IoLogoGithub } from "react-icons/io5";
 import  { useState, useEffect } from 'react';
const Welcomepage = () => {
const [showIntro, setShowIntro] = useState(true);
    useEffect(() => {
     
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000)

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    { showIntro &&
      <div className="flex flex-col items-center justify-center  h-screen flex-none">
        <div className='icons  text-purple-800 flex gap-2 ' >
 <a data-aos="fade-down" href="https://www.linkedin.com/in/asmaa-saad-682657324?utm_source=share_via&utm_content=profile&utm_medium=member_android"  target="_blank" className=' hover:text-purple-400' ><IoLogoLinkedin size={25}/></a> 
 <a data-aos="fade-down" href="https://github.com/asmaa771" target="_blank" className=' hover:text-purple-400'>< IoLogoGithub size={25}/></a> 
 
        </div>
      <div className="text-center opacity-100 ">
        <p data-aos="fade-right" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide ">
          Welcome To My
        </p>
         <p data-aos="fade-up"  className="text-purple-800 block md:text-6xl font-extrabold tracking-wide sm:text-4xl md:my-2">Portfolio Website
 
          </p>
      </div>
    </div>}
    </>
  )
}

export default Welcomepage
