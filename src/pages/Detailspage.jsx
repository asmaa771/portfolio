 import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from './Projectspage';
import { GoArrowLeft } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub} from 'react-icons/fa';

const   Detailspage= () => {
  const { id } = useParams();
  const navigate = useNavigate();

   
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Project not found</h2>
        <button 
          onClick={() => navigate(-1)} 
          className="px-6 py-2 bg-black text-white rounded-full font-medium"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen py-6 md:py-16 px-6 md:px-24 font-sans text-gray-900">
      <div className="max-w-5xl mx-auto space-y-12">
        
 
        <div>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-semibold bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <GoArrowLeft size={18} /> Back to Projects
          </button>
        </div>

        
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {project.title}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {project.description}
          </p>
          
           
          <div className="pt-2 flex gap-3">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors shadow-md"
            >
              Visit Website <FiArrowUpRight size={18} />
            </a>
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors shadow-md"
            >
                Code <FaGithub size={18} />
            </a>
          </div>
        </div>

         
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-gray-200">
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-1">Services</span>
            <span className="font-semibold text-gray-800">{project.services}</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-1">Category</span>
            <span className="font-semibold text-gray-800">{project.categoryType || project.category}</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-1">Client</span>
            <span className="font-semibold text-gray-800">{project.client}</span>
          </div>
        </div>

         
        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-neutral-900 h-[350px] sm:h-[500px]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

         
        <div className="max-w-3xl space-y-8 pt-6">
          
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">Process:</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-600">
              {project.process.map((step, index) => (
                <li key={index} className="leading-relaxed">{step}</li>
              ))}
            </ul>
          </div>

           
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight">Result:</h3>
            <p className="text-gray-600 leading-relaxed">
              {project.result}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Detailspage;
