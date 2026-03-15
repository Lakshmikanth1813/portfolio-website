import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="section-padding min-h-screen flex items-center pt-32">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight leading-tight uppercase">
              DHANI LAKSHMI KANTH REDDY
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              Hi, I'm a <span className="text-white font-bold">Full-Stack Developer</span> & <span className="text-brand font-bold">DSA Enthusiast</span>. I specialize in building robust MERN applications and solving complex algorithmic challenges. With a strong foundation in <span className="text-white font-bold">Java, C++, and Python</span>, I focus on creating high-performance web experiences and scalable backend architectures.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-4">
            <div>
              <h3 className="text-3xl font-heading font-bold text-brand mb-2">CSE</h3>
              <p className="text-sm text-gray-400 font-medium">B.Tech Student</p>
            </div>
            <div>
              <h3 className="text-3xl font-heading font-bold text-brand mb-2">3+</h3>
              <p className="text-sm text-gray-400 font-medium">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-heading font-bold text-brand mb-2">7.77</h3>
              <p className="text-sm text-gray-400 font-medium">B.Tech CGPA</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <a href="#projects" className="btn-outline !py-4 px-8">
              VIEW MY WORK
            </a>
            <div className="flex gap-4">
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="btn-outline !border-white/20 !text-white hover:!border-brand hover:!text-brand flex items-center gap-2 !py-4 px-6"
              >
                <FileText size={18} />
                VIEW CV
              </a>
              <a 
                href="/cv.pdf" 
                download="Dhani_Lakshmi_Kanth_Reddy_CV.pdf"
                className="btn-outline !border-white/20 !text-white hover:!border-brand hover:!text-brand flex items-center gap-2 !py-4 px-6"
              >
                <Download size={18} />
                DOWNLOAD
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-4 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/10 w-full max-w-[500px]">
            <img 
              src="/profile-hero.jpeg" 
              alt="Dhani Lakshmi Kanth Reddy" 
              className="w-full h-auto rounded-[1.5rem] object-cover aspect-[3/4]"
              onError={(e) => {
                e.target.src = "https://placehold.co/1000x1300/222/d2f15d?text=ADD+HERO+IMAGE%0A(public/profile-hero.jpeg)";
              }}
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
