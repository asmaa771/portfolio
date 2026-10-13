import React from 'react'
import myimage from '../assets/WhatsApp Image 2026-10-05 at 2.02.51 PM.jpeg'
import { IoLogoLinkedin } from "react-icons/io5"
import { FaGithub } from "react-icons/fa";
import { AOS } from 'aos';
const Aboutpage = () => {
  return (
    <>
      
<section className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center p-3" >
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* البطاقة اليسرى (صورة الشخص والاسم) */}
        <div data-aos="fade-right" className="md:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="w-full h-72 rounded-2xl overflow-hidden bg-gray-100 mb-6">
              <img 
                src={myimage} 
                alt="Asmaa saad" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Asmaa saad</h3>
            <p className="text-sm text-gray-500 mt-1">Frontend</p>
          </div>
          
          <div className="flex justify-end mt-4">
            <button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors border border-gray-100">
               <a href="https://www.linkedin.com/in/asmaa-saad-682657324?utm_source=share_via&utm_content=profile&utm_medium=member_android"  target="_blank" ><IoLogoLinkedin size={25}/></a> 
               
               
            </button>
             <button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors border border-gray-100">
               <a href="https://github.com/asmaa771"  target="_blank" ><FaGithub size={25}/></a> 
               
               
            </button>
          </div>
        </div>

        {/* البطاقة اليمنى (الترحيب، النبذة، وزر الحجز) */}
        <div className="md:col-span-8 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            {/* شريط الإشعار العلوي */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium mb-6 border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Only 2 open slots available!
              <span className="text-emerald-900">→</span>
            </div>

            {/* العنوان الرئيسي */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight flex flex-wrap items-center gap-3 mb-4">
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

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              I'm a <span className="text-orange-500">Frontend Developer</span> <br />
              Creating Websites
            </h2>

            {/* الوصف */}
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mb-8">
               hi , I'm a Front-End Developer passionate about building modern, responsive, and user-friendly web interfaces.
I specialize in building web applications using React.js and Next.js, along with JavaScript and Tailwind CSS. I enjoy creating clean, reusable, and interactive UI components while focusing on a smooth user experience.
I'm always learning, improving my skills, and building real-world projects to grow as a Front-End Developer.
            </p>
          </div>

          {/* زر الحجز */}
          <div>
            <button className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-black text-white font-medium text-sm hover:bg-gray-800 transition-all shadow-md group">
              concat me
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

        </div>

      </div>
      </section>
             
                
              
    </>
  )
}

export default Aboutpage
