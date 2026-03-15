import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Training from './components/Training';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CosmosBackground from './components/CosmosBackground';

function App() {
  return (
    <div className="min-h-screen text-gray-300 relative">
      <CosmosBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Projects />
        <Training />
        <Certificates />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
