

// import React, { useState, useEffect } from 'react';
// import { NavLink, useLocation, useNavigate, Outlet } from 'react-router-dom';
// import { HiMenu, HiX } from 'react-icons/hi';
// import { FaDownload, FaEnvelope, FaCode, FaLaptopCode, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
// const Navbar = ({ setIsLoading }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   // const [activeSection, setActiveSection] = useState('home');
//   // const location = useLocation();
//   // const navigate = useNavigate();

//   // const isHomePage = location.pathname === '/';

  
//   // useEffect(() => {
//   //   if (!isHomePage) return;

//   //   const sections = document.querySelectorAll('section[id], div[id]');
//   //   const handleScroll = () => {
//   //     const scrollPosition = window.scrollY + 200;

//   //     sections.forEach((section) => {
//   //       const sectionTop = section.offsetTop;
//   //       const sectionHeight = section.offsetHeight;
//   //       const sectionId = section.getAttribute('id');

//   //       if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//   //         setActiveSection(sectionId);
//   //       }
//   //     });
//   //   };

//   //   window.addEventListener('scroll', handleScroll);
//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, [isHomePage]);

//   // const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

   
//   // const handleHomeClick = (e) => {
//   //   e.preventDefault();
//   //   closeMenu();

//   //   if (setIsLoading) {
//   //     setIsLoading(true);
//   //     setTimeout(() => {
//   //       setIsLoading(false);
//   //     }, 800);  
//   //   }

//   //   if (!isHomePage) {
//   //     navigate('/');
//   //   } else {
//   //     window.scrollTo({ top: 0, behavior: 'smooth' });
//   //   }
//   // };

//   // const handleSectionClick = (sectionId) => {
//   //   closeMenu();
//   //   if (isHomePage) {
//   //     const element = document.getElementById(sectionId);
//   //     if (element) {
//   //       element.scrollIntoView({ behavior: 'smooth' });
//   //     }
//   //   } else {
//   //     navigate('/', { state: { scrollTo: sectionId } });
//   //   }
//   // };

//   // const isLinkActive = (path, sectionId) => {
//   //   if (isHomePage) {
//   //     return activeSection === sectionId;
//   //   }
//   //   return location.pathname === path;
//   // };

//   // const getLinkStyle = (path, sectionId) => {
//   //   return isLinkActive(path, sectionId)
//   //     ? 'transition-colors text-orange-500 font-semibold'
//   //     : 'transition-colors text-gray-500 hover:text-orange-500';
//   // };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* <header className="sticky top-0 z-50 w-full flex justify-center py-4 px-4 bg-gray-100/80 backdrop-blur-md">
//         <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white rounded-full shadow-md border border-gray-100 relative">
          
//           <NavLink to="/" onClick={handleHomeClick} className="text-xl font-bold text-gray-900 tracking-tight hover:text-orange-500 transition-colors">
//             Asmaa saad
//           </NavLink>

           
//           <div className="hidden md:flex items-center gap-8 font-medium">
//             <a href="/" onClick={handleHomeClick} className={getLinkStyle('/', 'home')}>
//               Home
//             </a>  
//             <a href="#about" onClick={(e) => { e.preventDefault(); handleSectionClick('about'); }} className={getLinkStyle('/about', 'about')}>
//               About
//             </a>  
//             <a href="#skills" onClick={(e) => { e.preventDefault(); handleSectionClick('skills'); }} className={getLinkStyle('/techskills', 'skills')}>
//               Services
//             </a>  
            
             
//             <NavLink 
//               to="/projects" 
//               onClick={closeMenu}
//               className={({ isActive }) => isActive ? "transition-colors text-orange-500 font-semibold" : "transition-colors text-gray-500 hover:text-orange-500"}
//             >
//               Projects
//             </NavLink>  
//           </div>

//           {/* زر التواصل */}
//           {/* <div className="hidden md:block">
//             <a 
//               href="#contact" 
//               onClick={(e) => { e.preventDefault(); handleSectionClick('contact'); }}
//               className={`inline-block px-6 py-2.5 text-sm font-semibold border rounded-full shadow-sm transition-all ${
//                 isLinkActive('/contact', 'contact')
//                   ? "text-orange-500 border-orange-500 bg-orange-50" 
//                   : "text-gray-900 bg-white border-gray-200 hover:bg-gray-50 hover:shadow"
//               }`}
//             >
//               Contact me
//             </a>
//           </div>

           
//           <div className="md:hidden flex items-center">
//             <button 
//               onClick={toggleMenu}
//               className="p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
//             >
//               {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//             </button>
//           </div>

         
//           {isOpen && (
//             <div className="absolute top-16 left-0 right-0 bg-white border border-gray-100 rounded-3xl p-6 shadow-xl flex flex-col gap-4 text-center md:hidden z-50">
//               <a href="/" onClick={handleHomeClick} className={isHomePage && activeSection === 'home' ? "text-orange-500 font-bold py-2" : "text-gray-600 py-2"}>Home</a>
//               <a href="#about" onClick={(e) => { e.preventDefault(); handleSectionClick('about'); }} className={isHomePage && activeSection === 'about' ? "text-orange-500 font-bold py-2" : "text-gray-600 py-2"}>About</a>
//               <a href="#skills" onClick={(e) => { e.preventDefault(); handleSectionClick('skills'); }} className={isHomePage && activeSection === 'skills' ? "text-orange-500 font-bold py-2" : "text-gray-600 py-2"}>Services</a>
              
//               <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500 font-bold py-2" : "text-gray-600 py-2"}>
//                 Projects
//               </NavLink>

//               <a href="#contact" onClick={(e) => { e.preventDefault(); handleSectionClick('contact'); }} className="mt-2 block w-full py-3 text-center font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-md">Contact me</a>
//             </div>
//           )}

//         </nav>
//       </header> */} 
// <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-20 relative">
//         <div className="flex items-center gap-2 text-xl font-bold tracking-wider text-amber-500">
//           <FaCode className="text-2xl" />
//           <span>ASMAA</span>
//         </div>
        
//         <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-slate-300">
//           <a href="#id" className="hover:text-amber-400 transition-colors">Home</a>
//           <a href="#about" className="hover:text-amber-400 transition-colors">About Me</a>
//           <a href="#skills" className="hover:text-amber-400 transition-colors">Tech Skills</a>
//             <NavLink to="/projects"  onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500 font-bold py-2" : "text-gray-600 py-2"}>
//                 Projects
//               </NavLink>
//           <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Me</a>
//         </div>
//       </nav>
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // دالة للتعامل مع الانتقال للأقسام بسلاسة حتى لو كنا في صفحة أخرى
  const handleSectionClick = (sectionId) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 text-slate-100  w-full max-w-7xl">
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center  top-0 left-0 right-0  sticky justify-between z-50 ">
        <div className="flex items-center gap-2 text-xl font-bold tracking-wider text-amber-500 cursor-pointer" onClick={() => navigate('/')}>
          <FaCode className="text-2xl" />
          <span>ASMAA</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-slate-300">
          <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer">
            Home
          </button>
          <button onClick={() => handleSectionClick('about')} className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer">
            About Me
          </button>
          <button onClick={() => handleSectionClick('skills')} className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer">
            Tech Skills
          </button>
          <NavLink 
            to="/projects" 
            onClick={closeMenu} 
            className={({ isActive }) => isActive ? "text-amber-400 font-bold transition-colors" : "hover:text-amber-400 transition-colors"}
          >
            Projects
          </NavLink>
          <button onClick={() => handleSectionClick('contact')} className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer">
            Contact Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full text-slate-300 hover:bg-slate-800 focus:outline-none transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-20 left-6 right-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-center md:hidden z-50">
            <button onClick={() => { navigate('/'); closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-black hover:text-amber-400 py-2 font-medium">Home</button>
            <button onClick={() => handleSectionClick('about')} className="text-black hover:text-amber-400 py-2 font-medium">About Me</button>
            <button onClick={() => handleSectionClick('skills')} className="text-black hover:text-amber-400 py-2 font-medium">services</button>
            <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? "text-amber-400 font-bold py-2" : "text-black py-2"}>
              Projects
            </NavLink>
            <button onClick={() => handleSectionClick('contact')} className="text-black hover:text-amber-400 py-2 font-medium">Contact Me</button>
          </div>
        )}
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;