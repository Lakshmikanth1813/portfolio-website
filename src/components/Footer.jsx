import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-transparent pt-10 pb-20 border-t border-white/5 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo/Name */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-black text-white tracking-widest uppercase">
              Dhani Lakshmi Kanth Reddy
            </h2>
            <div className="h-[2px] w-20 bg-brand mx-auto mt-4"></div>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full max-w-4xl">
             <motion.a 
               href="mailto:lakshmikanthreddy481@gmail.com"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass-panel !p-8 group hover:border-brand/40 transition-all flex items-center gap-6"
             >
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all">
                   <Mail size={24} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-1">Email Me</p>
                   <p className="text-white font-bold text-sm md:text-base break-all">lakshmikanthreddy481@gmail.com</p>
                </div>
             </motion.a>

             <motion.a 
               href="tel:+917207193592"
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass-panel !p-8 group hover:border-brand/40 transition-all flex items-center gap-6"
             >
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all">
                   <Phone size={24} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-1">Call Me</p>
                   <p className="text-white font-bold text-lg">+91 7207193592</p>
                </div>
             </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8 mb-16">
            <a 
              href="https://www.linkedin.com/in/dhani-reddy-lakshmi-kanth-reddy-33a511298/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-brand group-hover:text-brand hover:bg-brand/5 transition-all">
                <Linkedin size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white">LinkedIn</span>
            </a>

            <a 
              href="https://github.com/Lakshmikanth1813" 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-brand group-hover:text-brand hover:bg-brand/5 transition-all">
                <Github size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white">GitHub</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:text-black hover:border-brand transition-all mb-8 shadow-2xl"
          >
            <ArrowUp size={20} />
          </button>

          {/* Bottom Credits */}
          <div className="pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
             <p>© 2026 Dhani Lakshmi Kanth Reddy. All Rights Reserved.</p>
             <p>Built with <span className="text-brand">MERN Stack</span> & Premium Aesthetics</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
