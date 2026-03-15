import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Github, CheckCircle2, Code2 } from 'lucide-react';

const projectsList = [
  {
    id: 1,
    title: 'IP GAME LEARNING PLATFORM',
    category: 'MERN + Razorpay',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'JWT', 'OAuth 2.0'],
    shortDesc: 'Production-ready learning platform with premium modules and payment integration.',
    fullDesc: [
      'Engineered a production-ready learning platform with free and premium modules, delivering a responsive and intuitive user experience using modern React and Tailwind UI patterns.',
      'Implemented secure authentication and payments, including Google OAuth 2.0, JWT-based login, bcrypt password hashing, and Razorpay integration with server-side payment verification.',
      'Developed engagement-driven features such as quizzes, daily challenges, and automated email notifications.',
      'Optimized API performance using React Query and efficient MongoDB queries for faster data retrieval.'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    link: 'https://github.com/Lakshmikanth1813/IP-Heroess'
  },
  {
    id: 2,
    title: 'RESUME SHORTLISTING APP',
    category: 'MERN + NLP Flask',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Flask', 'Python', 'NLP'],
    shortDesc: 'Intelligent AI resume-screening system built with MERN and Flask.',
    fullDesc: [
      'Developed an intelligent resume-screening system enabling accurate extraction of skills from PDF and DOCX resumes.',
      'Built a seamless MERN-based interface that allows users to upload resumes and view extracted skills instantly with a clean React UI.',
      'Optimized backend routing and asynchronous operations, resulting in a 35% faster processing workflow.',
      'Integrated PyPDF2 and python-docx for reliable multi-format text extraction and automated parsing pipelines.'
    ],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop',
    link: 'https://github.com/Lakshmikanth1813/Resume-Shortlisting-App'
  },
  {
    id: 3,
    title: 'CARBON FOOTPRINT TRACKER',
    category: 'React & Node.js',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
    shortDesc: 'Application analyzing activities to generate carbon emission insights.',
    fullDesc: [
      'Built and optimized MERN-based APIs and data models, improving system performance by 30% and reducing response delays by 25%.',
      'Designed a carbon footprint engine that analyzes transport, electricity, food, and waste activity data, generating personalized insights with 85% calculation accuracy.',
      'Developed and deployed a responsive React interface with real-time dashboards and clean UI interactions, resulting in a 90% user satisfaction score.'
    ],
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop',
    link: 'https://github.com/Lakshmikanth1813/Carbon-Footprint-Tracker'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
             <div className="h-[2px] w-12 bg-brand"></div>
             <span className="text-brand font-black text-xs uppercase tracking-[0.5em]">Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 text-white uppercase tracking-tighter">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A showcase of my full-stack engineering capabilities, featuring production-grade applications with complex integrations.
          </p>
        </motion.div>

        {/* Updated Grid for ONE ROW on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={project.id} 
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl flex flex-col p-6">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>
                
                {/* Arrow Button */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-brand rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 shadow-2xl z-20">
                  <ArrowUpRight size={24} className="text-black" />
                </div>

                {/* Content info */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-black rounded-full uppercase tracking-widest border border-brand/20">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-black text-white mb-4 uppercase tracking-tighter leading-none">
                    {project.title}
                  </h3>
                  
                  {/* Tech Stack Previews */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[9px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[9px] font-bold text-brand uppercase tracking-widest">+ {project.techStack.length - 4} More</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-2xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col no-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-brand text-black rounded-full flex items-center justify-center hover:bg-white transition-all z-[120] shadow-2xl border-4 border-black"
              >
                <X size={32} />
              </button>

              <div className="h-48 md:h-80 relative overflow-hidden shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
              </div>

              <div className="p-8 md:p-16 -mt-24 relative z-10">
                 <div className="mb-12">
                   <div className="flex items-center gap-3 mb-6">
                      <Code2 className="text-brand" size={24} />
                      <span className="text-brand font-black text-sm uppercase tracking-[0.4em]">Project Analysis</span>
                   </div>
                   <h3 className="text-4xl md:text-6xl font-heading font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
                      {selectedProject.title}
                   </h3>
                   
                   {/* Full Tech Stack Tags */}
                   <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/70 text-xs font-bold uppercase tracking-widest hover:border-brand/40 transition-colors">
                          {tech}
                        </span>
                      ))}
                   </div>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12 pt-12 border-t border-white/10">
                    <div className="lg:col-span-2 space-y-8">
                       <h4 className="text-white font-black text-xl uppercase tracking-widest flex items-center gap-3">
                         <div className="w-8 h-[2px] bg-brand"></div>
                         Core Contributions
                       </h4>
                       <ul className="space-y-6">
                         {selectedProject.fullDesc.map((bullet, idx) => (
                           <motion.li 
                             initial={{ opacity: 0, x: -20 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ delay: 0.2 + (idx * 0.1) }}
                             key={idx} 
                             className="flex items-start gap-4 text-gray-400 text-lg leading-relaxed"
                           >
                             <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0 shadow-[0_0_10px_#d2f15d]"></div>
                             <span>{bullet}</span>
                           </motion.li>
                         ))}
                       </ul>
                    </div>

                    <div className="lg:col-span-1 space-y-8">
                       <div className="glass-panel !p-8 bg-white/[0.02] border-brand/20">
                          <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-6">Live Links</h4>
                          <a 
                            href={selectedProject.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-5 bg-brand text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl group"
                          >
                            <Github size={20} className="group-hover:scale-110 transition-transform" /> 
                            Repository
                          </a>
                          <p className="text-[10px] text-white/30 text-center mt-6 uppercase tracking-widest font-bold">Public Source Code</p>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
