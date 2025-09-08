import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnerLogos from './components/PartnerLogos';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PartnerLogos />
    </div>
  );
};

export default App;