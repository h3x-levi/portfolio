import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCraftBackground from './components/FloatingCraftBackground';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 font-sans relative">
      <FloatingCraftBackground />
      <Header />
      <main className="flex-grow z-10 relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
