 
import React from 'react';
import myimage from '../assets/photo_2026-10-13_13-21-41-removebg-preview-removebg-preview.png'; // الصورة بدون خلفية
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import Aboutpage from './Aboutpage';
import TechSkillsScreen from './Techskills';
import Contactme from './Contactme';

const Home = () => {
  const googleDriveDownloadLink = "https://drive.google.com/file/d/11CYAxF0YfS1o8KQGyNe2_yWS4yLM-mgi/view?usp=sharing";

  return (
    <div id="home" className="bg-gray-100 text-stone-200 min-h-screen min-w-screen overflow-hidden font-sans relative">
      
      
      <section className="relative max-w-7xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end z-10 min-h-screen">
        
         
        <div className="md:col-span-7 space-y-6 z-10 pb-8 md:pb-16">
          <div className="text-black text-xs font-bold tracking-[0.25em] uppercase">
            | ASMAA SAAD |
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-orange-500 leading-[1.15]">
            Frontend <br />
            <span className="text-3xl md:text-5xl font-sans font-normal text-black">React & Next.js Developer</span>
          </h1>

          <p className="text-black text-sm md:text-base max-w-lg leading-relaxed">
             I build High-Performance Websites using React & Next.js. Transforming complex designs into seamless, high-speed, and accessible web experiences.
          </p>

          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={googleDriveDownloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-orange-500 hover:bg-orange-200 rounded-md shadow-lg transition-all duration-300"
            >
              <FaDownload className="text-sm" />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-orange-500 border border-[#d4af37]/40 hover:border-orange-500 rounded-md transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

           
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-stone-800 mt-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#261810] border border-stone-800 rounded-full text-[#d4af37]">
                <FaEnvelope />
              </div>
              <div>
                <div className="text-[10px] uppercase font-semibold text-stone-400 tracking-wider">CONTACT INFORMATION</div>
                <div className="text-xs font-medium text-black">Asmaa Saad</div>
                <div className="text-xs text-[#d4af37]">saadasmaa449.gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#261810] border border-stone-800 rounded-full text-[#d4af37]">
                <FaLinkedin />
              </div>
              <div>
                <div className="text-[10px] uppercase font-semibold text-stone-400 tracking-wider">PROFESSIONAL PROFILE</div>
                <div className="text-xs font-medium text-black">React & Next.js</div>
                <div className="text-xs text-[#d4af37]">Available For Work</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Person Image, Stats & Socials */}
        <div className="md:col-span-5 relative flex justify-center items-end h-full min-h-[500px]">
          
          {/* Main Cutout Image */}
          <div className="absolute bottom-8 z-10 w-full max-w-xs md:max-w-md flex justify-center leading-none">
            <img 
              src={myimage} 
              alt="Asmaa Saad" 
              className="w-full h-auto object-bottom object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] m-0 block"
            />
          </div>

          
           
 
          <div className="absolute bottom-12 right-0 z-20 flex items-center gap-4 text-stone-300 bg-[#261810]/90 backdrop-blur-md px-5 py-3 rounded-full border border-stone-800 shadow-lg">
            <a href="https://github.com/asmaa77" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors"><FaGithub className="text-base" /></a>
            <a href="https://www.linkedin.com/in/asmaa-saad-682657324" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors"><FaLinkedin className="text-base" /></a>
          </div>
        </div>

      </section>

       
      <Aboutpage />
      <TechSkillsScreen />
      <Contactme />
    </div>
  );
};

export default Home;