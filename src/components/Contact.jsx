import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/meerlvny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Auto-dismiss success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        // Auto-dismiss error message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('error');
      // Auto-dismiss error message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding min-h-screen flex items-center">
      <div className="container-custom relative">
        {/* Status Toast */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-brand text-black font-black px-8 py-4 rounded-2xl shadow-2xl uppercase tracking-widest text-xs"
            >
              Message Sent Successfully! 🚀
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Group */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-dark-lighter rounded-[2rem] p-4 overflow-hidden w-full max-w-md mx-auto relative z-0">
              <img
                src="/profile-contact.jpeg"
                alt="Connect with Lakshmi Kanth"
                className="w-full h-auto rounded-[1.5rem] object-cover aspect-[4/5] opacity-90"
                onError={(e) => {
                  e.target.src = "https://placehold.co/1000x1250/222/d2f15d?text=ADD+CONTACT+IMAGE%0A(public/profile-contact.jpeg)";
                }}
              />
            </div>
            {/* Floating Hand Wave */}
            <motion.div
              animate={{ rotate: [0, 15, -10, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
              className="absolute bottom-10 -left-6 md:left-4 z-10 w-24 h-24 bg-brand rounded-full flex items-center justify-center shadow-xl shadow-brand/20 border-4 border-dark"
            >
              <span className="text-4xl text-black">👋</span>
            </motion.div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-8 rounded-full overflow-hidden bg-brand inline-block">
                  <img src="/profile-hero.jpeg" alt="avatar" onError={(e) => e.target.src = "https://placehold.co/40x40/d2f15d/000?text=LR"} />
                </span>
                <span className="glass-panel !py-1 !px-3 !rounded-full text-xs text-white">Available for work <span className="inline-block w-1.5 h-1.5 bg-brand rounded-full ml-1"></span></span>
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-bold mb-4">LET'S WORK TOGETHER</h2>
              <p className="text-gray-400 leading-relaxed text-lg max-w-lg">
                Let's build something impactful together—whether it's your brand, your website, or your next big idea.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-brand text-sm font-medium block">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    placeholder="Lakshmi Kanth"
                    onChange={handleChange}
                    className="w-full bg-white/5 backdrop-blur-md border border-gray-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-brand text-sm font-medium block">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    placeholder="lakshmikanthreddy481@gmail.com"
                    onChange={handleChange}
                    className="w-full bg-white/5 backdrop-blur-md border border-gray-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-brand text-sm font-medium block">What Can I Help You With?</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  placeholder="Hello, I'd like to enquire about..."
                  rows="4"
                  onChange={handleChange}
                  className="w-full bg-white/5 backdrop-blur-md border border-gray-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-outline !rounded-t-3xl !rounded-bl-3xl !rounded-br-sm !py-4 hover:!bg-brand hover:!text-black group w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'SENDING...' : 'SUBMIT'}
                <span className="group-hover:translate-x-1 transition-transform inline-block ml-2">→</span>
              </button>

              {status === 'error' && <p className="text-red-400 text-xs font-bold uppercase tracking-widest mt-4">Something went wrong. Please try again.</p>}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
