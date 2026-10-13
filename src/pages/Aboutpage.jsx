 

import React from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Aboutpage = () => {
  const googleDriveDownloadLink = "https://drive.google.com/uc?export=download&id=1d5A3DIY8Joq21Wc_O-TvdrC6Bxis66aH";

  return (
    <section id="about" className="about bg-gray-100 min-w-screen   min-h-screen px-6 md:px-30 md:py-16  py-4 font-sans">
      {/* بادئة العنوان */}
      <div className="flex items-center justify-start mb-6">
        <span className="text-orange-500 font-semibold border border-gray-200 bg-white px-4 py-2 rounded-2xl shadow-sm text-sm uppercase tracking-wider">
          About Me
        </span>
      </div>

      <div className="max-w-7xl  grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* القسم الأيسر: النصوص والنبذة التعريفية */}
        <div data-aos="fade-up" className="lg:col-span-7 flex flex-col justify-between space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
              Hi, I'm a <span className="text-orange-500">Frontend Developer</span>
            </h2>
            
            {/* الوصف */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
              Hi, I'm a Front-End Developer passionate about building modern, responsive, and user-friendly web interfaces. 
              I specialize in building web applications using <span className="text-gray-900 font-semibold">React.js</span> and <span className="text-gray-900 font-semibold">Next.js</span>, along with JavaScript and Tailwind CSS. I enjoy creating clean, reusable, and interactive UI components while focusing on a smooth user experience. 
              I'm always learning, improving my skills, and building real-world projects to grow as a Front-End Developer.
            </p>
          </div>

          {/* قسم التعليم والخبرات والروابط */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-200">
            
            {/* التعليم */}
            <div className="education space-y-3">
              <h3 className="text-gray-900 text-xl font-bold flex items-center gap-2">
                🎓 Education
              </h3>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Cairo Higher Institute for Engineering and Computer Science</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Bachelor’s Degree in Computer Science (B.Sc.)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Frontend Course in Instant Software Solution</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">January 2026 - June 2026</p>
              </div>
            </div>

            {/* الخبرة والروابط */}
            <div className="space-y-6">
              <div className="experience space-y-2">
                <h3 className="text-gray-900 text-xl font-bold flex items-center gap-2">
                  💼 Experience
                </h3>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Intern in Instant Software Solution</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">September 2026 - October 2026</p>
                </div>
              </div>

              {/* الروابط */}
              <div className="links space-y-2">
                <h3 className="text-gray-900 text-lg font-bold">Connect With Me</h3>
                <div className="flex gap-3">
                  <a 
                    href="https://www.linkedin.com/in/asmaa-saad-682657324?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white hover:bg-orange-500 hover:text-white flex items-center justify-center text-gray-700 transition-all shadow-sm border border-gray-200"
                  >
                    <IoLogoLinkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/asmaa771" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white hover:bg-orange-500 hover:text-white flex items-center justify-center text-gray-700 transition-all shadow-sm border border-gray-200"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* القسم الأيمن: البطاقات الإحصائية والمميزات */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col justify-between hover:border-orange-500 shadow-sm transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-orange-500">1+</span>
            <span className="text-sm text-gray-600 mt-4 font-medium">Successful projects completed</span>
          </div>
          
          <div className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col justify-between hover:border-orange-500 shadow-sm transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-orange-500">Clean</span>
            <span className="text-sm text-gray-600 mt-4 font-medium">Writing scalable & clean code</span>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col justify-between hover:border-orange-500 shadow-sm transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-orange-500">100%</span>
            <span className="text-sm text-gray-600 mt-4 font-medium">Responsive & Clean Interfaces</span>
          </div>
          
          <div className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col justify-between hover:border-orange-500 shadow-sm transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-orange-500">Fast</span>
            <span className="text-sm text-gray-600 mt-4 font-medium">Performance & Load Times</span>
          </div>
        </div> 

      </div>       
    </section>     
  );
};

export default Aboutpage;