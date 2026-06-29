import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCall from './components/FloatingCall';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenQuote = () => {
    setSelectedService('');
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden antialiased">
      {/* Decorative Golden Ambient Backplates */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-screen pointer-events-none -z-10 overflow-hidden">
        {/* Top subtle golden light */}
        <div className="absolute top-0 left-1/4 w-[50vw] h-[30vh] bg-gradient-to-b from-amber-500/5 to-transparent blur-[120px]" />
      </div>

      {/* Sticky Header Navigation */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Page Blocks */}
      <main>
        {/* 1. Hero Showcase Block */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 2. About & Authority Block */}
        <About />

        {/* 3. Core Services Grid Block */}
        <Services onOpenQuoteWithService={handleOpenQuoteWithService} />

        {/* 4. Portfolio Works Grid Block */}
        <Gallery />

        {/* 5. Client Testimonials Slider/Grid Block */}
        <Testimonials />

        {/* 6. Contact Form & SVG Mapping Block */}
        <Contact />
      </main>

      {/* Footer Navigation & Suburbs Directory Block */}
      <Footer />

      {/* Mobile Persistent Hot Dial Action Link */}
      <FloatingCall />

      {/* Multi-step Premium Quote Builder Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
