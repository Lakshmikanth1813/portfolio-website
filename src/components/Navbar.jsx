import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="container-custom flex items-center justify-between px-4">
        {/* Logo area */}
        <div className="flex items-center gap-3 glass-panel !rounded-full !py-2 !px-4">
          <div className="w-8 h-8 rounded-full bg-brand overflow-hidden">
            <img 
              src="/profile-hero.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover" 
              onError={(e) => {
                e.target.src = "https://placehold.co/100/d2f15d/000?text=LR";
              }}
            />
          </div>
          <span className="text-white text-sm font-medium pr-2">Available for work <span className="inline-block w-2 h-2 rounded-full bg-brand ml-1"></span></span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 glass-panel !rounded-full !py-3 !px-8 text-nowrap">
          {['Home', 'About', 'Expertise', 'Projects', 'Training', 'Certs', 'Edu'].map((item) => (
            <a 
              key={item} 
              href={`#${item === 'Home' ? 'top' : item === 'Expertise' ? 'services' : item === 'Certs' ? 'certificates' : item === 'Edu' ? 'education' : item.toLowerCase()}`} 
              className="text-gray-300 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="ml-4 bg-white text-dark px-5 py-2 rounded-full font-medium text-xs hover:bg-gray-200 transition-colors uppercase tracking-wider">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
