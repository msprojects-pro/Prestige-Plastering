import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import interiorPlaster from '../assets/images/prestige_interior_plaster_1782707071311.jpg';

export default function About() {
  const values = [
    {
      title: '40+ Years of Mastery',
      description: 'Our team comprises elite craftsmen who have perfected traditional plastering and advanced rendering over decades of hands-on practice in the UK.',
    },
    {
      title: 'Fully Insured & Accredited',
      description: 'We hold comprehensive public liability insurance, ensuring total peace of mind for residential homeowners, landlords, and commercial contractors alike.',
    },
    {
      title: 'Flawless Mess-Free Work',
      description: 'We protect all windows, driveways, gardens, and trim before work begins. We clean up completely, leaving your property in pristine condition.',
    },
  ];

  const coverageAreas = [
    'Wigan Central', 'Standish', 'Orrell', 'Appley Bridge', 'Shevington', 
    'Ashton-in-Makerfield', 'Hindley', 'Pemberton', 'Aspull', 'Leigh & Beyond'
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Background Ornaments */}
      <div className="absolute top-1/2 -left-64 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Layered Images */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl"
            >
              {/* Gold outer shining aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent pointer-events-none" />
              
              <img
                src={interiorPlaster}
                alt="Flawless skimming interior work"
                className="w-full h-auto object-cover aspect-[4/3] filter brightness-95"
                referrerPolicy="no-referrer"
              />
              
              {/* Experience Stamp */}
              <div className="absolute bottom-6 right-6 bg-slate-900/95 border border-amber-500/30 p-4 rounded-xl backdrop-blur-sm shadow-xl flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-lg font-bold text-white font-serif leading-tight">40+ Years</span>
                  <span className="block text-[10px] uppercase tracking-widest text-amber-500 font-bold">Combined Experience</span>
                </div>
              </div>
            </motion.div>

            {/* Behind Background Frame Accent */}
            <div className="absolute -inset-4 border border-dashed border-amber-500/10 rounded-2xl -z-10 transform translate-x-3 translate-y-3" />
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.35em] text-amber-500 font-bold block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Setting the Standard in Plastering & Rendering
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-amber-600 to-amber-300 rounded" />
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              At <strong>Prestige Plastering & Rendering</strong>, we deliver unrivaled residential and commercial finishes throughout Wigan and surrounding regions. We specialize in exterior silicone render systems, high-quality traditional rendering, flawless interior skimming, property refurbishments, and complete HMO conversions. 
            </p>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Our business was founded on a simple philosophy: never compromise on quality. By combining decades of hands-on expertise with state-of-the-art polymer rendering systems, we guarantee high-durability coatings that defend against damp while elevating the visual elegance of your property.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {values.map((val) => (
                <div key={val.title} className="space-y-2 bg-slate-900/40 border border-slate-900 p-4 rounded-xl">
                  <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{val.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>

            {/* Area Covered & CTA */}
            <div className="pt-4 border-t border-slate-900 space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Areas We Cover:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coverageAreas.map((area) => (
                  <span
                    key={area}
                    className="text-[11px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full hover:border-amber-500/20 hover:text-white transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
