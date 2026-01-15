import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-orange-500 selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Workflow />
      </main>
      <Contact />
    </div>
  );
};

export default App;