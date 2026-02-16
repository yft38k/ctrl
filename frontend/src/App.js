import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StarryBackground from './components/StarryBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StepsSection from './components/StepsSection';
import PricingSection from './components/PricingSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-[#020618] text-white overflow-x-hidden">
      <StarryBackground />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <StepsSection />
        <PricingSection />
        <GuaranteeSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
