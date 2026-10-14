// // import React from 'react'
// // import myimage from '../assets/photo_2026-10-13_13-47-53.jpg'
 
// // import { FaDownload } from 'react-icons/fa'; 
 
// // import Aboutpage from './Aboutpage';
// // import TechSkillsScreen from './Techskills'
// // import Contactme from './Contactme'
// // const Home = () => {
// //     const googleDriveDownloadLink = "https://drive.google.com/uc?export=download&id=1d5A3DIY8Joq21Wc_OoTvdrC6Bxis66aH";
// //   return (
// //     <div id="home" className='bg-gray-100 min-h-screen min-w-screen   md:py-20 md:px-2 '>
      
// //        <>
            
// //       <section   className="w-full  flex flex-col items-center  justify-center p-3 ">
// //             <div className="w-full md:max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              
               
// //               <div data-aos="fade-up" className="md:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-start">
// //                 <div >
// //                   <div className="w-full h-70 rounded-2xl overflow-hidden bg-gray-100 mb-4">
// //                     <img 
// //                       src={myimage} 
// //                       alt="Asmaa saad" 
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>
// //                   <h3 className="text-xl font-bold text-gray-900">Asmaa saad</h3>
// //                   <p className="text-sm text-gray-500 mt-1">Frontend</p>
// //                 </div>
                 
                 
// //                 <div className='mt-5' >
// //                     <a
// //         href={googleDriveDownloadLink}
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
// //       >
         
// //         <FaDownload className="text-base" />
// //         Download CV
// //       </a>
// //                 </div>
// //                  </div>
               
      
               
// //               <div data-aos="fade-up" className="md:col-span-8 bg-white rounded-3xl p-3 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between">
// //                 <div>
                  
                   
      
                   
// //                   <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight flex flex-wrap items-center gap-3 mb-2 md:mb-4">
// //                     Hi, I'm 
// //                     <span className="inline-block w-9 h-9 rounded-full overflow-hidden align-middle bg-orange-100 border border-orange-200">
// //                       <img 
// //                         src={myimage}
// //                         alt="Avatar" 
// //                         className="w-full h-full object-cover"
// //                       />
// //                     </span>
// //                     Asmaa saad 
// //                   </h1>
      
// //                   <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight m-2 md:mb-4">
// //                     I'm a <span className="text-orange-500 line-height">Frontend Developer</span> <br />
// //                   <h3 className="text-400">   I build High-Performance Websites
// // using React & Next.js</h3>
// //                   </h2>
      
                  
// //                   <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mb-3">
// //                     As a passionate Front-End Developer, I transform complex designs into seamless, high-speed, and accessible web experiences. Let's collaborate to bring your innovative ideas to life with clean, scalable code.
// //                   </p>
// //                 </div>
      
                 
// //                 <div>
// //                   <button className="inline-flex items-center py-2 px-4 gap-3 md:px-6 md:py-3.5 rounded-2xl bg-black text-white font-medium text-sm hover:bg-gray-800 transition-all shadow-md group" >
// //                     concat me
// //                     <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
// //                       →
// //                     </span>
// //                   </button>
// //                 </div>
      
// //               </div>
      
// //             </div>

             
// //             </section>



            
// //                    <Aboutpage/>
// //                     <TechSkillsScreen/>
// //                       <Contactme/>
                    
// //           </>
// //     </div>
// //   )
// // }

// // export default Home


// import React from 'react';
// import myimage from '../assets/photo_2026-10-13_13-21-41-removebg-preview-removebg-preview.png'; // الصورة بدون خلفية
// import { FaDownload, FaEnvelope, FaCode, FaLaptopCode, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
// import Aboutpage from './Aboutpage';
// import TechSkillsScreen from './Techskills';
// import Contactme from './Contactme';

// const Home = () => {
//   const googleDriveDownloadLink = "https://drive.google.com/uc?export=download&id=1d5A3DIY8Joq21Wc_OoTvdrC6Bxis66aH";

//   return (
//     <div id="home" className="bg-gray-100 text-slate-100 min-h-screen min-w-screen relative overflow-hidden font-sans">
//       {/* Navbar Minimalist */}
//       {/* <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-20 relative">
//         <div className="flex items-center gap-2 text-xl font-bold tracking-wider text-amber-500">
//           <FaCode className="text-2xl" />
//           <span>ASMAA</span>
//         </div>
//         <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-slate-300">
//           <a href="#about" className="hover:text-amber-400 transition-colors">About Me</a>
//           <a href="#skills" className="hover:text-amber-400 transition-colors">Tech Skills</a>
//           <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
//           <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Me</a>
//         </div>
//       </nav> */}

//       {/* Main Hero Section */}
//       {/* <section className="relative w-full max-w-7xl mx-auto px-6 pt-8  grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
        
//         {/* Left Column: Text & CTA */}
//         <div className="md:col-span-7 space-y-6 z-10">
//           <div className="text-black text-xs font-bold tracking-widest uppercase">
//             | FRONTEND DEVELOPER |
//           </div>

//           <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-black leading-tight">
//             ASMAA SAAD <br />
//             <span className="text-3xl md:text-5xl text-black font-sans font-normal">Frontend Developer</span>
//           </h1>

//           <p className="text-slate-400 text-sm md:text-base max-w-lg leading-relaxed">
//             I build High-Performance Websites using React & Next.js. Transforming complex designs into seamless, high-speed, and accessible web experiences.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap items-center gap-4 pt-2">
//             <a
//               href={googleDriveDownloadLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md shadow-lg transition-all duration-300"
//             >
//               <FaDownload className="text-sm" />
//               Download CV
//             </a>

//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-amber-400 border border-amber-500/40 hover:border-amber-400 rounded-md transition-all duration-300"
//             >
//               Contact Me
//             </a>
//           </div>

//           {/* Bottom Info Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-slate-800/80 mt-8">
//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-slate-900 border border-slate-800 rounded-full text-orange-500">
//                 <FaEnvelope />
//               </div>
//               <div>
//                 <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Contact Information</div>
//                 <div className="text-xs font-medium text-slate-200">Asmaa Saad</div>
//                 <div className="text-xs text-amber-400/80">asm_saad@email.com</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-slate-900 border border-slate-800 rounded-full text-amber-500">
//                 <FaLaptopCode />
//               </div>
//               <div>
//                 <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Speciality</div>
//                 <div className="text-xs font-medium text-slate-200">React & Next.js</div>
//                 <div className="text-xs text-amber-400/80">Available For Work</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Person Image & Stats */}
//         <div className="md:col-span-5 relative flex justify-center items-end h-full">
          
//           {/* Main Cutout Image */}
//           <div className="relative z-10 max-w-sm md:max-w-md bottom-0 left-2">
//             <img 
//               src={myimage} 
//               alt="Asmaa Saad" 
//               className="w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
//             />
//           </div>

//           {/* Side Floating Stats (Right side like design) */}
//           <div className="absolute right-0 top-1/4 z-20 space-y-6 text-right hidden sm:block">
//             <div className="bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-slate-800 shadow-xl">
//               <div className="text-2xl font-bold text-amber-400">3+</div>
//               <div className="text-[10px] uppercase text-slate-400 tracking-wider">Years Exp.</div>
//             </div>

//             <div className="bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-slate-800 shadow-xl">
//               <div className="text-2xl font-bold text-amber-400">20+</div>
//               <div className="text-[10px] uppercase text-slate-400 tracking-wider">Projects</div>
//             </div>
//           </div>

//           {/* Social Icons Overlay (Bottom Right) */}
//           <div className="absolute bottom-4 right-0 z-20 flex items-center gap-4 text-slate-400 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800">
//             <a href="#" className="hover:text-amber-400 transition-colors"><FaGithub /></a>
//             <a href="#" className="hover:text-amber-400 transition-colors"><FaLinkedin /></a>
//             <a href="#" className="hover:text-amber-400 transition-colors"><FaTwitter /></a>
//           </div>
//         </div>

//       </section>

//       {/* Other Sections */}
//       <Aboutpage />
//       <TechSkillsScreen />
//       <Contactme />
//     </div>
//   );
// };

// export default Home; */}

// import React from 'react';
// import myimage from '../assets/photo_2026-10-13_13-21-41-removebg-preview-removebg-preview.png'; // الصورة بدون خلفية
// import { FaDownload, FaEnvelope, FaCode, FaLaptopCode, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
// import Aboutpage from './Aboutpage';
// import TechSkillsScreen from './Techskills';
// import Contactme from './Contactme';

// const Home = () => {
//   const googleDriveDownloadLink = "https://drive.google.com/uc?export=download&id=1d5A3DIY8Joq21Wc_OoTvdrC6Bxis66aH";

//   return (
//     <>
      
//       {/* Main Hero Section */}
//       <section id="home" className="bg-gray-100 text-slate-100 min-h-screen  overflow-hidden font-sans relative max-w-7xl mx-auto px-6 pt-5  mb-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end z-10">
        
//         {/* Left Column: Text & CTA */}
//         <div className="md:col-span-7 space-y-6 z-10 pb-12">
//           <div className="text-black text-xs font-bold tracking-widest uppercase">
//             | FRONTEND DEVELOPER |
//           </div>

//           <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-black leading-tight">
//             ASMAA SAAD <br />
//             <span className="text-3xl md:text-5xl text-black font-sans font-normal">Frontend Developer</span>
//           </h1>

//           <p className="text-slate-400 text-sm md:text-base max-w-lg leading-relaxed">
//             I build High-Performance Websites using React & Next.js. Transforming complex designs into seamless, high-speed, and accessible web experiences.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap items-center gap-4 pt-2">
//             <a
//               href={googleDriveDownloadLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md shadow-lg transition-all duration-300"
//             >
//               <FaDownload className="text-sm" />
//               Download CV
//             </a>

//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-amber-400 border border-amber-500/40 hover:border-amber-400 rounded-md transition-all duration-300"
//             >
//               Contact Me
//             </a>
//           </div>

//           {/* Bottom Info Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-slate-800/80 mt-8">
//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-slate-900 border border-slate-800 rounded-full text-orange-500">
//                 <FaEnvelope />
//               </div>
//               <div>
//                 <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Contact Information</div>
//                 <div className="text-xs font-medium text-black">Asmaa Saad</div>
//                 <div className="text-xs text-amber-400/80">saadasmaa449.gmail.com</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-slate-900 border border-slate-800 rounded-full text-amber-500">
//                 <FaLaptopCode />
//               </div>
//               <div>
//                 <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Speciality</div>
//                 <div className="text-xs font-medium text-black">React & Next.js</div>
//                 <div className="text-xs text-amber-400/80">Available For Work</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Person Image & Stats (الصورة تبدأ من الأسفل تماماً وتصعد لأعلى) */}
//         <div className="md:col-span-5 relative flex justify-center items-end h-full min-h-[650px]">
          
//           {/* Main Cutout Image */}
//           <div className="absolute bottom-0 z-10 w-full max-w-xs md:max-w-sm flex justify-center">
//             <img 
//               src={myimage} 
//               alt="Asmaa Saad" 
//               className="w-full h-auto object-bottom object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
//             />
//           </div>

//           {/* Side Floating Stats (Right side) */}
//           <div className="absolute right-0 top-1/4 z-20 space-y-6 text-right hidden sm:block">
//             {/* <div className="bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-slate-800 shadow-xl">
//               <div className="text-2xl font-bold text-amber-400">3+</div>
//               <div className="text-[10px] uppercase text-slate-400 tracking-wider">Years Exp.</div>
//             </div> */}

//             <div className="bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-slate-800 shadow-xl">
//               <div className="text-2xl font-bold text-amber-400">2+</div>
//               <div className="text-[10px] uppercase text-slate-400 tracking-wider">Projects</div>
//             </div>
//           </div>

//           {/* Social Icons Overlay (Bottom Right) */}
//           <div className="absolute bottom-4 right-0 z-20 flex items-center gap-4 text-slate-400 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800">
//             <a href="https://www.linkedin.com/in/asmaa-saad-682657324?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-amber-400 transition-colors"><FaGithub /></a>
//             <a href="https://github.com/asmaa77" className="hover:text-amber-400 transition-colors"><FaLinkedin /></a>
             
//           </div>
//         </div>

//       </section>

//       {/* Other Sections */}
//       <Aboutpage />
//       <TechSkillsScreen />
//       <Contactme />
//     </>
//   );
// };

// export default Home;


// import React from 'react';
// import myimage from '../assets/photo_2026-10-13_13-21-41-removebg-preview-removebg-preview.png'; // الصورة بدون خلفية
// import { FaDownload, FaEnvelope, FaLaptopCode, FaGithub, FaLinkedin } from 'react-icons/fa';
// import Aboutpage from './Aboutpage';
// import TechSkillsScreen from './Techskills';
// import Contactme from './Contactme';

// const Home = () => {
//   const googleDriveDownloadLink = "https://drive.google.com/uc?export=download&id=1d5A3DIY8Joq21Wc_OoTvdrC6Bxis66aH";

//   return (
//     <>
//       {/* Main Hero Section */}
//       <section id="home" className="bg-gray-100 text-slate-100 min-h-screen min-w-screen overflow-hidden font-sans relative max-w-7xl mx-auto px-6 pt-2 md:mb-18 mb-6  pb-0 grid grid-cols-1 md:grid-cols-12 gap-8 items-end z-10">
        
//         {/* Left Column: Text & CTA */}
//         <div className="md:col-span-7 space-y-7 z-10 pb-16">
//           <div className="text-black text-xs font-bold tracking-widest uppercase">
//             | FRONTEND DEVELOPER |
//           </div>

//           <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-black leading-tight">
//             ASMAA SAAD <br />
//             <span className="text-3xl md:text-5xl text-black font-sans font-normal">Frontend Developer</span>
//           </h1>

//           <p className="text-gray-500 text-sm md:text-base max-w-lg leading-relaxed">
//             I build High-Performance Websites using React & Next.js. Transforming complex designs into seamless, high-speed, and accessible web experiences.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap items-center gap-4 pt-2">
//             <a
//               href={googleDriveDownloadLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md shadow-lg transition-all duration-300"
//             >
//               <FaDownload className="text-sm" />
//               Download CV
//             </a>

//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-amber-600 border border-amber-500/40 hover:border-amber-400 rounded-md transition-all duration-300"
//             >
//               Contact Me
//             </a>
//           </div>

//           {/* Bottom Info Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-300 mt-6">
//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-white border border-gray-200 rounded-full text-orange-500 shadow-sm">
//                 <FaEnvelope />
//               </div>
//               <div>
//                 <div className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider">Contact Information</div>
//                 <div className="text-xs font-medium text-black">Asmaa Saad</div>
//                 <div className="text-xs text-amber-600">saadasmaa449.gmail.com</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-white border border-gray-200 rounded-full text-amber-500 shadow-sm">
//                 <FaLaptopCode />
//               </div>
//               <div>
//                 <div className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider">Speciality</div>
//                 <div className="text-xs font-medium text-black">React & Next.js</div>
//                 <div className="text-xs text-amber-600">Available For Work</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Person Image & Stats (الصورة مثبتة تماماً في أسفل الحاوية بدون فراغات) */}
//         <div className="md:col-span-5 relative flex justify-center items-end h-full min-h-[500px]">
          
//           {/* Main Cutout Image */}
//           <div className="absolute bottom-0 z-10 w-full max-w-xs md:max-w-md flex justify-center leading-none">
//             <img 
//               src={myimage} 
//               alt="Asmaa Saad" 
//               className="w-full h-auto object-bottom object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] m-0 block"
//             />
//           </div>

//           {/* Side Floating Stats (Right side) */}
           

//           {/* Social Icons Overlay (Bottom Right) */}
//           <div className="absolute bottom-4 right-0 z-20 flex items-center gap-4 text-gray-600 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-sm">
//             <a href="https://github.com/asmaa77" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors"><FaGithub /></a>
//             <a href="https://www.linkedin.com/in/asmaa-saad-682657324" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors"><FaLinkedin /></a>
//           </div>
//         </div>

//       </section>

//       {/* Other Sections */}
//       <Aboutpage />
//       <TechSkillsScreen />
//       <Contactme />
//     </>
//   );
// };

// export default Home;





import React from 'react';
import myimage from '../assets/photo_2026-10-13_13-21-41-removebg-preview-removebg-preview.png'; // الصورة بدون خلفية
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import Aboutpage from './Aboutpage';
import TechSkillsScreen from './Techskills';
import Contactme from './Contactme';

const Home = () => {
  const googleDriveDownloadLink = "https://drive.google.com/uc?export=download&id=1d5A3DIY8Joq21Wc_OoTvdrC6Bxis66aH";

  return (
    <div id="home" className="bg-gray-100 text-stone-200 min-h-screen min-w-screen overflow-hidden font-sans relative">
      
      {/* Main Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end z-10 min-h-screen">
        
        {/* Left Column: Text & CTA */}
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

          {/* Action Buttons */}
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

          {/* Bottom Info Cards */}
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

          
           

          {/* Social Icons Overlay (Bottom Right matching reference) */}
          <div className="absolute bottom-12 right-0 z-20 flex items-center gap-4 text-stone-300 bg-[#261810]/90 backdrop-blur-md px-5 py-3 rounded-full border border-stone-800 shadow-lg">
            <a href="https://github.com/asmaa77" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors"><FaGithub className="text-base" /></a>
            <a href="https://www.linkedin.com/in/asmaa-saad-682657324" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors"><FaLinkedin className="text-base" /></a>
          </div>
        </div>

      </section>

      {/* Other Sections */}
      <Aboutpage />
      <TechSkillsScreen />
      <Contactme />
    </div>
  );
};

export default Home;