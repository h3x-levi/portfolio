
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Page = 'home' | 'experience' | 'projects' | 'certifications' | 'contact';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');

  const renderPage = () => {
    switch (activePage) {
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero setActivePage={setActivePage} />
            <About />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow container mx-auto px-6 md:px-12 lg:px-20 mt-24">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
