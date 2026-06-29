import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import PrestigeLogo from './PrestigeLogo';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md py-4 border-b border-amber-500/20 shadow-lg shadow-black/45'
            : 'bg-gradient-to-b from-slate-950/80 to-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center">
              <PrestigeLogo className="h-10 w-10 md:h-12 md:w-12" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-slate-300 hover:text-amber-400 font-medium text-sm tracking-wider uppercase transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Direct Call Button */}
              <a
                href="tel:+447926893063"
                className="flex items-center gap-2 text-white hover:text-amber-400 border border-slate-800 hover:border-amber-500/50 bg-slate-950/40 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
              >
                <Phone className="h-4 w-4 text-amber-500" />
                <span>+44 7926 893063</span>
              </a>

              {/* Quote Request CTA */}
              <button
                onClick={onOpenQuote}
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold px-5 py-2 rounded-lg text-sm tracking-wider uppercase shadow-md shadow-amber-500/10 hover:shadow-amber-500/25 transition-all duration-300 cursor-pointer"
              >
                Free Quote
              </button>
            </div>

            {/* Mobile Burger Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:+447926893063"
                className="p-2 text-amber-500 border border-slate-800 rounded-lg hover:border-amber-500/30"
                title="Call Now"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-amber-400 rounded-lg focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-slate-950 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '0px' }}
      >
        {/* Background Decorative Gold Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col h-full pt-24 px-6 pb-8 justify-between">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold">
              Navigation Menu
            </span>
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-2xl font-serif font-semibold text-white hover:text-amber-400 transition-colors py-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-px bg-slate-800/80" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 block">
              Direct Contact
            </span>
            <div className="grid grid-cols-1 gap-3">
              <a
                href="tel:+447926893063"
                className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-800 text-white font-semibold py-3.5 rounded-xl hover:border-amber-500/30 transition-colors"
              >
                <Phone className="h-4 w-4 text-amber-500" />
                <span>+44 7926 893063</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-extrabold py-3.5 rounded-xl text-center uppercase tracking-wider text-sm shadow-lg shadow-amber-500/10"
              >
                <Calendar className="h-4 w-4" />
                <span>Request Free Quote</span>
              </button>
            </div>
            
            <p className="text-[10px] text-slate-500 text-center mt-4">
              Prestige Plastering & Rendering • Wigan, UK
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
