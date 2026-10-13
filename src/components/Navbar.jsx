

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = ({ setIsLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  
  useEffect(() => {
    if (!isHomePage) return;

    const sections = document.querySelectorAll('section[id], div[id]');
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

   
  const handleHomeClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (setIsLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);  
    }

    if (!isHomePage) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSectionClick = (sectionId) => {
    closeMenu();
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const isLinkActive = (path, sectionId) => {
    if (isHomePage) {
      return activeSection === sectionId;
    }
    return location.pathname === path;
  };

  const getLinkStyle = (path, sectionId) => {
    return isLinkActive(path, sectionId)
      ? 'transition-colors text-orange-500 font-semibold'
      : 'transition-colors text-gray-500 hover:text-orange-500';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50 w-full flex justify-center py-4 px-4 bg-gray-100/80 backdrop-blur-md">
        <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white rounded-full shadow-md border border-gray-100 relative">
          
          <NavLink to="/" onClick={handleHomeClick} className="text-xl font-bold text-gray-900 tracking-tight hover:text-orange-500 transition-colors">
            Asmaa saad
          </NavLink>

           
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="/" onClick={handleHomeClick} className={getLinkStyle('/', 'home')}>
              Home
            </a>  
            <a href="#about" onClick={(e) => { e.preventDefault(); handleSectionClick('about'); }} className={getLinkStyle('/about', 'about')}>
              About
            </a>  
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleSectionClick('skills'); }} className={getLinkStyle('/techskills', 'skills')}>
              Services
            </a>  
            
             
            <NavLink 
              to="/projects" 
              onClick={closeMenu}
              className={({ isActive }) => isActive ? "transition-colors text-orange-500 font-semibold" : "transition-colors text-gray-500 hover:text-orange-500"}
            >
              Projects
            </NavLink>  
          </div>

          {/* زر التواصل */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleSectionClick('contact'); }}
              className={`inline-block px-6 py-2.5 text-sm font-semibold border rounded-full shadow-sm transition-all ${
                isLinkActive('/contact', 'contact')
                  ? "text-orange-500 border-orange-500 bg-orange-50" 
                  : "text-gray-900 bg-white border-gray-200 hover:bg-gray-50 hover:shadow"
              }`}
            >
              Contact me
            </a>
          </div>

           
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

         
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white border border-gray-100 rounded-3xl p-6 shadow-xl flex flex-col gap-4 text-center md:hidden z-50">
              <a href="/" onClick={handleHomeClick} className={isHomePage && activeSection === 'home' ? "text-orange-500 font-bold py-2" : "text-gray-600 py-2"}>Home</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleSectionClick('about'); }} className={isHomePage && activeSection === 'about' ? "text-orange-500 font-bold py-2" : "text-gray-600 py-2"}>About</a>
              <a href="#skills" onClick={(e) => { e.preventDefault(); handleSectionClick('skills'); }} className={isHomePage && activeSection === 'skills' ? "text-orange-500 font-bold py-2" : "text-gray-600 py-2"}>Services</a>
              
              <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500 font-bold py-2" : "text-gray-600 py-2"}>
                Projects
              </NavLink>

              <a href="#contact" onClick={(e) => { e.preventDefault(); handleSectionClick('contact'); }} className="mt-2 block w-full py-3 text-center font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-md">Contact me</a>
            </div>
          )}

        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;