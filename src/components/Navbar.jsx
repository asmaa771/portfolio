
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
        
         
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-black">
          <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer">
            Home
          </button>
          <button onClick={() => handleSectionClick('about')} className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer">
            About Me
          </button>
          <button onClick={() => handleSectionClick('skills')} className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer">
            services
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

       
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full text-slate-300 hover:bg-slate-800 focus:outline-none transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

         
        {isOpen && (
          <div className="absolute top-20 left-6 right-6 bg-gray-100 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-center md:hidden z-50">
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