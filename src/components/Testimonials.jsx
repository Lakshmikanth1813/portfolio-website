import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const education = [
  {
    id: 1,
    name: 'Lovely Professional University',
    role: "B.Tech in Computer Science",
    text: 'Currently pursuing Bachelor of Technology in Computer Science and Engineering. Current CGPA: 7.77.',
    date: "Aug '23 – Present",
  },
  {
    id: 3,
    name: 'SR Junior College',
    role: 'Intermediate (MPC)',
    text: 'Completed higher secondary education majoring in Mathematics, Physics, and Chemistry, graduating with a high score of 93.2%.',
    date: "Jun '21 – Apr '23",
  },
  {
    id: 4,
    name: 'Sathyam Techno School',
    role: 'Matriculation',
    text: 'Completed early education, graduating with a perfect score of 100%.',
    date: "Jun '20 – May '21",
  }
];

const Testimonials = () => {
  return (
    <section id="education" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
            <span className="w-8 h-8 rounded-full overflow-hidden bg-brand inline-block">
               <img src="/profile-hero.jpeg" alt="avatar" onError={(e) => e.target.src = "https://placehold.co/40x40/d2f15d/000?text=LR"} />
            </span>
            <span className="glass-panel !py-1 !px-3 !rounded-full text-xs text-white">Available for work <span className="inline-block w-1.5 h-1.5 bg-brand rounded-full ml-1"></span></span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-center lg:text-left uppercase">EDUCATION</h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed text-center lg:text-left">
            My academic background laying the foundation for my software engineering journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, i) => (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               key={edu.id}
               className="glass-panel flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                   <Star size={100} />
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-brand text-xs font-bold mb-4 uppercase tracking-wider">
                    {edu.date}
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed mb-8 relative z-10">
                    {edu.text}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 relative z-10 border-t border-white/10 pt-4 mt-auto">
                  <div>
                    <h4 className="text-white font-bold text-base tracking-wide">{edu.name}</h4>
                    <p className="text-brand font-medium text-xs mt-1">{edu.role}</p>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
