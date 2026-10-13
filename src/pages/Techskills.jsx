 import React from 'react';
import { FaReact, FaJs, FaServer, FaCode, FaAward, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";
  
 
const servicesAndSkills = [
  {
    name: 'API Integration & Handling',
    description: 'Connecting front-end applications with RESTful APIs & third-party services seamlessly.',
    icon: <TbApi size={28} className="text-blue-500" />,
  },
  {
    name: 'Component & UI Development',
    description: 'Building reusable, modern, and interactive UI components tailored to design requirements.',
    icon: <FaCode size={28} className="text-orange-500" />,
  },
  {
    name: 'React.js & Next.js',
    description: 'Building interactive user interfaces with Server-Side Rendering & App Router.',
    icon: <FaReact size={28} className="text-cyan-500" />,
  },
  {
    name: 'JavaScript (ES6+)',
    description: 'Modern asynchronous programming, DOM manipulation, and robust web logic.',
    icon: <FaJs size={28} className="text-yellow-400" />,
  },
  {
    name: 'Tailwind CSS & Responsive UI',
    description: 'Utility-first modern UI design, adaptive layouts, and clean user experiences.',
    icon: <SiTailwindcss size={28} className="text-teal-400" />,
  },
  {
    name: 'State Management & Forms',
    description: 'Managing global application state with Zustand/Context API and form validation.',
    icon: <FaServer size={28} className="text-purple-500" />,
  },
];

export default function TechSkillsScreen() {
  
  const certificateImage = "https://drive.google.com/file/d/15pqHN2LH7JbDnBvNVpPGcBasBGe0pvUA/view?usp=sharing"; 

  return (
    <div id="skills" className="bg-gray-100 min-h-screen font-sans relative selection:bg-orange-500 selection:text-white pb-20">
      
      {/* Main Section: Services & Skills */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-4  md:pt-20">
         <div className="flex items-center justify-start mb-6">
        <span className="text-orange-500 font-semibold border border-gray-200 bg-white px-4 py-2 rounded-2xl shadow-sm text-sm uppercase tracking-wider">
          services
        </span>
      </div>
        {/* Section Header & Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Titles & Subtitle */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3" data-aos="fade-up">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-xs tracking-[0.2em] font-semibold text-orange-500 uppercase">
                SERVICES & EXPERTISE
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif text-neutral-900 leading-tight mb-4" data-aos="fade-up">
              Front-End Services & Stack.
            </h1>
            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed mb-6"  data-aos="fade-up">
              Delivering specialized front-end solutions, seamless API integrations, and high-performance user interfaces.
            </p>
            
            <div data-aos="fade-up" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100/80 text-orange-600 text-[11px] font-medium shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              6 Core Services & Tech Stack
            </div>
          </div>

          {/* Right Column: Skills & Services Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {servicesAndSkills.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-5 flex flex-col justify-between shadow-2xs border border-neutral-200/80 hover:shadow-md hover:border-orange-200 transition-all cursor-pointer group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-neutral-50 flex items-center justify-center mb-3 group-hover:bg-orange-50 transition-colors border border-neutral-100">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-1 group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-medium text-neutral-400 group-hover:text-neutral-700">
                  <span>Learn More</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </section>

      {/* Certification Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="border-t border-neutral-200 pt-16">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-3">
              <FaAward size={14} className="text-blue-600" />
              ACCREDITED CREDENTIAL
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-2">
              Professional Certification
            </h2>
            <p className="text-neutral-500 text-xs md:text-sm max-w-md">
              Officially certified in advanced front-end web development practices and hands-on training.
            </p>
          </div>

           
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-130 mx-auto bg-white rounded-2xl p-6 md:p-9 border border-neutral-200/90 shadow-xs hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              
              <div className="md:col-span-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      Instant Software Solutions
                    </span>
                    <span className="text-[11px] text-neutral-400 font-mono">14/09/2026</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">
                    Front End Diploma (130 Hours)
                  </h3>

                  <p className="text-neutral-500 text-xs md:text-sm leading-relaxed mb-4">
                    Awarded to <span className="font-semibold text-neutral-800">Asmaa Saad Mohamed</span> upon successfully completing 130 hours of intensive professional front-end training and practical applications.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                    <FaCheckCircle size={13} />
                    Verified Credential
                  </div>

                  <a 
                    href={certificateImage}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-medium hover:bg-blue-600 transition-colors shadow-2xs"
                  >
                    <span>Open Certificate</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}