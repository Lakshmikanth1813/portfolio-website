import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, MapPin, Binary, CheckCircle2, Award, X, ExternalLink, GraduationCap } from 'lucide-react';

const trainingData = {
  name: 'Cipher Schools',
  role: 'Full Stack Development Using MERN Stack',
  date: "Jun '24 – Jul '24",
  location: "Edtech Company | Online Training",
  description: 'Completed a comprehensive industry-level training program focused on architecting and optimizing production-grade MERN applications.',
  bullets: [
    'Built and optimized RESTful APIs using Node.js and Express, improving response time by 20%.',
    'Deployed multiple full-stack apps with MongoDB, Express, React, Node.js.',
    'Achieved 25% boost in front-end performance via Redux/Context optimization.'
  ],
  certificateImage: '/certificate-cipher-schools.png' // Updated to .png extension!
};

const Training = () => {
  const [showCert, setShowCert] = useState(false);

  return (
    <section id="training" className="py-24 relative overflow-hidden bg-transparent">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter text-white">
            TRAINING
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glossy Border Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 via-brand/20 to-white/20 rounded-[2.5rem] blur-[1px] group-hover:blur-[2px] transition-all duration-500 opacity-50 group-hover:opacity-100"></div>
            
            <div className="relative bg-white/[0.03] backdrop-blur-[24px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Info Side */}
                <div className="md:col-span-4 bg-white/[0.04] p-10 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 relative">
                  {/* Subtle highlight */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand to-transparent opacity-30"></div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-brand text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                      <GraduationCap size={16} />
                      <span>Skill Mastery</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-heading font-black text-white mb-4 uppercase leading-[0.9] tracking-tighter">
                      Learning<br/><span className="text-brand">Path</span>
                    </h3>
                    <div className="mt-10 space-y-4">
                      <div className="flex items-center gap-3 text-white/70 text-xs font-bold uppercase tracking-widest bg-white/5 py-2 px-4 rounded-full border border-white/5 inline-flex">
                        <Calendar size={14} className="text-brand" />
                        {trainingData.date}
                      </div>
                      <div className="flex items-center gap-3 text-white/50 text-[10px] font-medium uppercase tracking-[0.2em] px-4">
                        <MapPin size={12} className="text-brand/50" />
                        {trainingData.location}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 md:mt-0">
                    <button 
                      onClick={() => setShowCert(true)}
                      className="group/btn flex items-center justify-center gap-3 w-full py-5 bg-brand text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(210,241,93,0.3)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
                    >
                      <Award size={20} className="group-hover/btn:scale-110 transition-transform" />
                      View Certificate
                    </button>
                    <p className="text-white/20 text-[9px] text-center mt-4 uppercase tracking-[0.3em] font-bold">Encrypted Credentials</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:col-span-8 p-10 lg:p-16 relative">
                   {/* Background large text */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">MERN</div>
                   
                   <div className="relative z-10">
                      <div className="mb-10">
                        <h4 className="text-3xl font-heading font-black text-white mb-2 uppercase tracking-tighter">
                          {trainingData.name}
                        </h4>
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-12 bg-brand/50"></div>
                           <p className="text-brand font-black text-sm uppercase tracking-widest leading-none pt-0.5">
                              {trainingData.role}
                           </p>
                        </div>
                      </div>

                      <div className="space-y-5">
                         {trainingData.bullets.map((bullet, i) => (
                           <motion.div 
                             initial={{ opacity: 0, x: 20 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: i * 0.15 }}
                             key={i}
                             className="flex items-start gap-5 p-5 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-brand/40 hover:bg-white/[0.05] transition-all duration-500 group/item shadow-xl"
                           >
                             <div className="shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 group-hover/item:bg-brand group-hover/item:text-black transition-all">
                                <CheckCircle2 size={20} />
                             </div>
                             <p className="text-white/70 text-base leading-relaxed font-medium">
                               {bullet}
                             </p>
                           </motion.div>
                         ))}
                      </div>
                   </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-black/95 backdrop-blur-[30px]"
            onClick={() => setShowCert(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl flex flex-col items-center"
            >
              <button 
                onClick={() => setShowCert(false)}
                className="fixed top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-brand text-black rounded-full flex items-center justify-center hover:bg-white transition-all z-[110] shadow-2xl border-4 border-dark"
              >
                <X size={32} />
              </button>
              
              <div className="w-full rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-8 border-white/10 bg-white p-1">
                 <img 
                   src={trainingData.certificateImage} 
                   alt={`${trainingData.name} Certificate`} 
                   className="w-full h-auto object-contain max-h-[75vh]"
                   onError={(e) => {
                     e.target.src = "https://placehold.co/1200x800/222/d2f15d?text=ADD+YOUR+CERTIFICATE+IMAGE%0A(Place+it+in+public+folder)";
                   }}
                 />
              </div>
              <div className="mt-8 text-center">
                <p className="text-white font-black text-sm uppercase tracking-[0.5em]">CERTIFICATE OF COMPLETION</p>
                <p className="text-brand text-xs mt-2 font-bold opacity-80 uppercase tracking-widest">Cipher Schools India • Industrial Training 2024</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Training;
