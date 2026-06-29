import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import PrestigeLogo from './PrestigeLogo';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const subAreas = [
    'Standish', 'Orrell', 'Appley Bridge', 'Shevington', 'Pemberton',
    'Ashton-in-Makerfield', 'Hindley', 'Aspull', 'Leigh', 'Wigan Town Centre'
  ];

  return (
    <footer className="bg-slate-950 border-t border-amber-500/10 text-slate-400 text-xs">
      {/* Top micro-shimmer line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-left">
          
          {/* Col 1: Brand Pitch (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <PrestigeLogo className="h-10 w-10 md:h-12 md:w-12" />
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Prestige Plastering & Rendering cover all aspects of plastering and rendering, blending traditional craftsmanship with modern technique to deliver smooth, durable, high-quality results in Wigan & surrounding areas.
            </p>

            <div className="flex items-center gap-2.5 text-amber-500 font-semibold bg-slate-900/60 border border-slate-900 px-3.5 py-2.5 rounded-lg max-w-xs">
              <ShieldCheck className="h-4.5 w-4.5 shrink-0" />
              <span className="text-[10px] uppercase tracking-wider">
                Full Liability Insured Plasterer
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) {
                        const top = target.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top, behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Coverage (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Wigan Districts
            </h4>
            <ul className="space-y-2 text-slate-500">
              {subAreas.map((area) => (
                <li key={area} className="hover:text-amber-500/80 cursor-default transition-colors flex items-center gap-1.5">
                  <div className="h-1 w-1 bg-amber-500/40 rounded-full" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Core (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              HQ Connect
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                <a href="tel:+447926893063" className="hover:text-amber-400 transition-colors leading-relaxed font-bold">
                  +44 7926 893063
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                <a href="mailto:prestigeplastering911@gmail.com" className="hover:text-amber-400 transition-colors leading-relaxed truncate">
                  prestigeplastering911@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                <span className="leading-relaxed text-slate-400">
                  Wigan, Lancashire, United Kingdom
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider Line */}
        <div className="h-px bg-slate-900/80 my-10" />

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-slate-500">
            <p className="text-[10px] uppercase tracking-wider">
              © {new Date().getFullYear()} Prestige Plastering & Rendering. All Rights Reserved.
            </p>
            <p className="text-[9px] text-slate-600 flex items-center justify-center sm:justify-start gap-1">
              <span>Delivering smooth standards with traditional craftsmanship.</span>
              <span>• Fully compliant with building control standards.</span>
            </p>
          </div>

          {/* Return to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-amber-500 hover:text-white border border-slate-900 hover:border-amber-500/30 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
          >
            <span>Top of Page</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
