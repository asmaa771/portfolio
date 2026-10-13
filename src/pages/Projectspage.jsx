        

import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/WhatsApp Image 2026-10-07 at 4.45.40 PM.jpeg'
 
export const projectsData = [
  {
    id: 'Modern E-Commerce Store',
    title: 'Warda E-Commerce Platform',
    category: 'E-commerce / Online Store / Web Application',
    image:image ,
    description: 'A modern, responsive e-commerce web application featuring a product catalog, advanced filtering, dynamic shopping cart management with local storage persistence, and form validation.',
    services: 'Web Development & Frontend Architecture',
     codeUrl: 'https://github.com/asmaa771/warda.git',
    liveUrl: 'https://warda-qpic-gray.vercel.app/',
    process: [
      ' Built product-focused, fully responsive layouts with clean navigation and modern UI components.',
      'Implemented dynamic state management for the shopping cart with local storage persistence.',
      'Integrated robust form validation and schema handling for user inputs.'
    ],
    result: 'Delivered a high-performance, fully functional, and visually appealing e-commerce interface with seamless user interactions and a polished user experience.'
  },
   
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="bg-gray-100 min-h-screen md:py-20 py-8 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
         
        <div className=" mb-16">
          <span className="text-orange-500  font-semibold border border-gray-200 bg-white px-4 py-2 rounded-full shadow-sm text-sm uppercase tracking-wider">
            My Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
            My Latest Projects
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
               
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              
              <div className="overflow-hidden bg-neutral-900 h-64 md:h-80 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;