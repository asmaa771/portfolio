  import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FiSend, FiArrowRight } from "react-icons/fi";
 
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactme = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = 'service_pl2rfiz';
    const TEMPLATE_ID = 'template_ty4p2qe';
    const PUBLIC_KEY = '9U0_CCOSjQpYt7JOR';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((result) => {
          setLoading(false);
           
          toast.success("Message sent successfully! 🎉", {
            position: "top-right",
            autoClose: 3000,
          });
          setFormData({ name: '', email: '', message: '' });
      }, (error) => {
          setLoading(false);
           
          toast.error("Failed to send message, please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
      });
  };

  return (
    <section id="contact"    className="bg-gray-100 min-h-screen py-4 px-6 md:px-16 font-sans text-gray-900">
      
      
      <ToastContainer />

      <div className="max-w-6xl mx-auto space-y-12">
        
        
        <div data-aos="fade-up" className="text-center space-y-3 max-w-xl mx-auto">
           
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6">
            Contact us
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Helping businesses standout with brand identity packaging that captivates and converts effectively.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          
          <div data-aos="fade-up" className="lg:col-span-5 bg-white border border-gray-200 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <a href="tel:+201100485476" className="block text-2xl md:text-3xl font-extrabold hover:text-orange-500 transition-colors">
                +20 1100485476
              </a>
              <a href="mailto:Saadasmaa449@gmail.com" className="block text-xl md:text-2xl font-bold text-gray-800 hover:text-orange-500 transition-colors break-all">
                Saadasmaa449@gmail.com
              </a>
              <p className="text-gray-500 text-sm leading-relaxed">
                I'm Asmaa, a passionate Frontend Developer with a love for creating visually stunning and user-friendly digital experiences.
              </p>
              <div>
                <a 
                  href="tel:+201000000000"
                  className="inline-flex items-center justify-between gap-4 px-6 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-neutral-800 transition-all shadow-md group cursor-pointer"
                >
                  <span>Book a Free Call</span>
                  <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <FiArrowRight size={16} />
                  </span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-gray-100 text-gray-600">
               
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

           
          <div data-aos="fade-up" className="lg:col-span-7 bg-white border border-gray-200 p-8 rounded-3xl shadow-sm">
            <div className="mb-6 space-y-1">
              <h3 className="text-2xl font-bold">Send Us a Message</h3>
              <p className="text-gray-500 text-sm">
                Use our convenient contact form to reach out with questions, feedback, or collaboration inquiries.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-black transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-black transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-black transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-neutral-800 transition-colors shadow-md cursor-pointer disabled:opacity-50"
              >
                <FiSend size={16} /> {loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contactme;