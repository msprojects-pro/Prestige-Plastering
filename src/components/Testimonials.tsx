import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck, Check } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'David Harrington',
      location: 'Standish, Wigan',
      rating: 5,
      comment: 'Absolutely spectacular. Prestige rendered our entire 4-bed detached house in Polar White K-Rend. They protected every single window and slate path. The finish is flawless, and they left the site cleaner than they found it. Best plasterers in Wigan by miles!',
      date: 'June 2026',
      service: 'K-Rend Silicone Rendering',
    },
    {
      id: 't2',
      name: 'Sarah Jenkins',
      location: 'Orrell, Wigan',
      rating: 5,
      comment: 'Prestige flattened our old stippled Artex ceilings in the living room and hallway. We were worried about the mess, but their dust protection sheet coverage was amazing. The skim is like glass—completely smooth. Highly recommend their interior plastering.',
      date: 'May 2026',
      service: 'Artex Flattening & Skimming',
    },
    {
      id: 't3',
      name: 'Michael Gallagher',
      location: 'Pemberton, Wigan',
      rating: 5,
      comment: 'As a local property developer, I need fast turnarounds. Prestige handled full double-layer fire boarding, soundproofing, and full plastering for my recent 6-bed HMO. Completely passed building control on first inspection. Incredible work and highly reliable.',
      date: 'April 2026',
      service: 'HMO Plastering & Refurbishment',
    },
    {
      id: 't4',
      name: 'Emma Broadbent',
      location: 'Shevington, Wigan',
      rating: 5,
      comment: 'We had a severe leak that stained our landing ceiling. Prestige replaced the water-damaged plasterboards, treated the timber, floated the backcoat, and skimmed it to blend in perfectly. You can’t even see where the repair was. Excellent service.',
      date: 'February 2026',
      service: 'Water Damage Plaster Repair',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-amber-500 font-bold block">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Endorsed by Homeowners & Developers
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-300 rounded mx-auto" />
          <p className="text-slate-400 text-sm md:text-base pt-2">
            Read transparent feedback from local Wigan residents. We are proud of our 100% customer satisfaction track record.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-slate-950 border border-slate-800/80 hover:border-amber-500/20 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote Mark background styling */}
              <Quote className="absolute right-6 top-6 h-12 w-12 text-slate-900/40 group-hover:text-amber-500/5 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* Stars Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-300 text-sm italic leading-relaxed relative z-10">
                  "{test.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-900">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 font-serif font-bold text-lg">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <span>{test.name}</span>
                      <ShieldCheck className="h-3.5 w-3.5 text-amber-400" title="Verified Customer" />
                    </h4>
                    <span className="text-[10px] text-slate-500 block">{test.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                    {test.service}
                  </span>
                  <span className="text-[9px] text-slate-600 block mt-1">{test.date}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Local Guarantee Badge Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-600/10 via-amber-300/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-8 text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-950/45 -z-10" />
          <h3 className="text-xl font-serif font-bold text-white">
            Our 100% Satisfaction Lifetime Guarantee
          </h3>
          <p className="text-slate-300 text-xs max-w-2xl mx-auto leading-relaxed">
            We are so confident in our high-end plastering and rendering craftsmanship that we provide structural finish guarantees. If you ever detect any premature bubbling, mesh slips, or skimming faults, we will rectify it instantly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-[11px] font-bold text-amber-400 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4" /> 100% Fully Insured
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4" /> Free Damp Assessment
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4" /> Transparent Fixed Pricing
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
