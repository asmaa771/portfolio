import React from 'react'
import myimage from '../assets/WhatsApp Image 2026-10-05 at 2.02.51 PM.jpeg'
 
import { FaDownload } from 'react-icons/fa'; 
 
import Aboutpage from './Aboutpage';
import TechSkillsScreen from './Techskills'
import Contactme from './Contactme'
const Home = () => {
    const googleDriveDownloadLink = "https://drive.google.com/uc?export=download&id=1d5A3DIY8Joq21Wc_OoTvdrC6Bxis66aH";
  return (
    <div id="home" className='bg-gray-100 min-h-screen min-w-screen md:py-20 md:px-2 '>
      
       <>
            
      <section   className="w-full  flex flex-col items-center  justify-center p-3 ">
            <div className="w-full md:max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              
               
              <div data-aos="fade-up" className="md:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-start">
                <div >
                  <div className="w-full h-70 rounded-2xl overflow-hidden bg-gray-100 mb-4">
                    <img 
                      src={myimage} 
                      alt="Asmaa saad" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Asmaa saad</h3>
                  <p className="text-sm text-gray-500 mt-1">Frontend</p>
                </div>
                 
                 
                <div className='mt-5' >
                    <a
        href={googleDriveDownloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
      >
         
        <FaDownload className="text-base" />
        Download CV
      </a>
                </div>
                 </div>
               
      
               
              <div data-aos="fade-up" className="md:col-span-8 bg-white rounded-3xl p-3 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  
                   
      
                   
                  <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight flex flex-wrap items-center gap-3 mb-2 md:mb-4">
                    Hi, I'm 
                    <span className="inline-block w-9 h-9 rounded-full overflow-hidden align-middle bg-orange-100 border border-orange-200">
                      <img 
                        src={myimage}
                        alt="Avatar" 
                        className="w-full h-full object-cover"
                      />
                    </span>
                    Asmaa saad 
                  </h1>
      
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight m-2 md:mb-4">
                    I'm a <span className="text-orange-500 line-height">Frontend Developer</span> <br />
                  <h3 className="text-400">   I build High-Performance Websites
using React & Next.js</h3>
                  </h2>
      
                  
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mb-3">
                    As a passionate Front-End Developer, I transform complex designs into seamless, high-speed, and accessible web experiences. Let's collaborate to bring your innovative ideas to life with clean, scalable code.
                  </p>
                </div>
      
                 
                <div>
                  <button className="inline-flex items-center py-2 px-4 gap-3 md:px-6 md:py-3.5 rounded-2xl bg-black text-white font-medium text-sm hover:bg-gray-800 transition-all shadow-md group" >
                    concat me
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
      
              </div>
      
            </div>
            </section>
                   <Aboutpage/>
                    <TechSkillsScreen/>
                      <Contactme/>
                    
          </>
    </div>
  )
}

export default Home
