import React from 'react';


// Import styles
import './styles/globals.css';
import './styles/components.css';
import './styles/animations.css';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';

import EarlyAdopters from './components/sections/EarlyAdopters';
import Community from './components/sections/Community';
import Footer from './components/layout/Footer';

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    scrollToSection('early');
  };

  return (
    <div className="App">
      <Header onCtaClick={handleCtaClick} />
     
      <main>
        <Hero onCtaClick={handleCtaClick} />
       <Features/>
        {/* <QRSection /> */}
        <EarlyAdopters />
        {/* <Community />  */}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;