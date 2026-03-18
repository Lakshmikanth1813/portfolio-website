import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Brain, Users, Clock, Zap } from 'lucide-react';

const servicesList = [
  { 
    id: 1, 
    title: 'LANGUAGES & CORE', 
    desc: 'Proficient in foundational programming and core web technologies.',
    skills: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ]
  },
  { 
    id: 2, 
    title: 'FRAMEWORKS & DB', 
    desc: 'Experienced in developing scalable applications using the MERN stack and relational databases.',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    ]
  },
  { 
    id: 3, 
    title: 'TOOLS & PLATFORMS', 
    desc: 'Hands-on experience with development tools and environment setups.',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'XAMPP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    ]
  },
  { 
    id: 4, 
    title: 'SOFT SKILLS', 
    desc: 'Professional strengths that complement my technical capabilities.',
    skills: [
      { name: 'Logical Thinking', icon: <Brain size={24} className="text-brand" /> },
      { name: 'Team Work', icon: <Users size={24} className="text-brand" /> },
      { name: 'Time Management', icon: <Clock size={24} className="text-brand" /> },
      { name: 'Adaptability', icon: <Zap size={24} className="text-brand" /> },
    ]
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(1);

  return (
    <section id="services" className="section-padding bg-transparent overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side */}
          <div className="space-y-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-heading font-bold mb-6"
              >
                MY EXPERTISE
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg max-w-md leading-relaxed mb-12"
              >
                I thrive at the intersection of complex backend logic and pixel-perfect frontend design. Here's my core stack.
              </motion.p>
            </div>

            <div className="space-y-2">
              {servicesList.map((service, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  key={service.id} 
                  className="border-b border-gray-800"
                >
                  <button 
                    onMouseEnter={() => setActiveService(service.id)}
                    onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <h3 className={`text-lg md:text-2xl font-heading transition-colors ${activeService === service.id ? 'text-brand' : 'text-white group-hover:text-brand'}`}>
                      {service.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeService === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-500 group-hover:text-brand"
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-12 space-y-8">
                           <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
                             {service.desc}
                           </p>

                           {/* Skill Icons Grid */}
                           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                              {service.skills.map((skill, si) => (
                                <motion.div 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 + (si * 0.05) }}
                                  key={skill.name}
                                  className="glass-panel !p-4 flex flex-col items-center justify-center gap-3 group/skill hover:border-brand/50 transition-colors"
                                >
                                   {typeof skill.icon === 'string' ? (
                                     <img 
                                       src={skill.icon} 
                                       alt={skill.name} 
                                       className="w-10 h-10 object-contain group-hover/skill:scale-110 transition-transform duration-300" 
                                     />
                                   ) : (
                                     <div className="group-hover/skill:scale-110 transition-transform duration-300">
                                       {skill.icon}
                                     </div>
                                   )}
                                   <span className="text-[10px] font-bold tracking-widest text-gray-500 group-hover/skill:text-brand uppercase transition-colors">
                                     {skill.name}
                                   </span>
                                </motion.div>
                              ))}
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center sticky top-32"
          >
             <div className="relative w-full aspect-square max-w-md">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-brand/10 blur-[120px] rounded-full"></div>
                
                <div className="relative glass-panel !p-0 overflow-hidden rounded-[3rem] border-brand/20 h-full w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Code" 
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-110"
                  />
                  <div className="absolute bottom-10 left-10 z-20">
                     <div className="glass-panel !px-6 !py-4 rounded-2xl flex items-center gap-4">
                        <div className="w-3 h-3 bg-brand rounded-full animate-pulse"></div>
                        <span className="text-white font-bold tracking-wider text-[10px] md:text-sm uppercase">Full Stack • DSA • Programming</span>
                     </div>
                  </div>
                </div>

                {/* Floating Tags */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass-panel !px-5 !py-3 rounded-2xl z-30 border-brand/30"
                >
                  <span className="text-brand font-black italic">MERN</span>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 -left-10 glass-panel !px-5 !py-3 rounded-2xl z-30 border-brand/30"
                >
                  <span className="text-white text-sm font-bold">OPTIMIZATION</span>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
