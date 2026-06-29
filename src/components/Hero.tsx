import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Phone, ArrowRight, Award, Star } from 'lucide-react';
import heroHouse from '../assets/images/prestige_hero_house_1782707050855.jpg';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background Image with Parallax-like effect and Gold-to-Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroHouse}
          alt="Premium Rendered House by Prestige"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.35] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        {/* Subtle Gold Dust Radial glow */}
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left 7 Columns) */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* Crown Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm"
            >
              <Award className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-bold tracking-widest text-amber-300 uppercase">
                40+ Years Combined Experience
              </span>
            </motion.div>

            {/* Main Premium Typography H1 */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight"
              >
                Flawless Rendering.<br />
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Smooth Plastering.
                </span><br />
                Elite Craftsmanship.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                We cover all aspects of plastering and rendering in Wigan and surrounding areas.
                Blending traditional expertise with cutting-edge modern systems to deliver smooth, durable, and luxurious finishes.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary: Quote Modal Trigger */}
              <button
                onClick={onOpenQuote}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-black px-8 py-4 rounded-xl text-base uppercase tracking-wider shadow-xl shadow-amber-500/15 hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary: Call Direct */}
              <a
                href="tel:+447926893063"
                className="flex items-center justify-center gap-3 border border-slate-800 hover:border-amber-500/40 bg-slate-950/60 backdrop-blur-md text-white hover:text-amber-400 font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
              >
                <Phone className="h-5 w-5 text-amber-500 animate-pulse" />
                <span>Call +44 7926 893063</span>
              </a>
            </motion.div>

            {/* Reassurance Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 pt-8 border-t border-slate-900/80 max-w-xl"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Fully Insured
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  5-Star Service
                </span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Award className="h-5 w-5 text-amber-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Wigan & Beyond
                </span>
              </div>
            </motion.div>

          </div>

          {/* Golden Floating Card / Quick Estimator Trigger (Right 4 Columns) */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="bg-slate-900/90 border border-amber-500/25 p-6 rounded-2xl backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              {/* Top ambient gold shine */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-300" />
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-amber-500/10 rounded-full blur-xl" />

              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Why Choose Prestige?
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Wigan's premier plastering & rendering contractor, serving residential and commercial properties with extreme attention to detail.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-500/10 text-amber-400 font-bold text-xs shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Premium Materials Only
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      K-Rend silicone, high-grade basecoats, and flawless British plaster skim.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-500/10 text-amber-400 font-bold text-xs shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Mess-Free Guarantee
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Complete protection of paths, glass, windows, and gardens before and during.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-500/10 text-amber-400 font-bold text-xs shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Always Open & Active
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Quick turnarounds on HMO refurbs and local extensions, fully compliant.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full mt-6 bg-slate-950 hover:bg-slate-900 border border-amber-500/30 hover:border-amber-500 text-amber-400 hover:text-white font-semibold py-3 rounded-lg text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
              >
                Estimate Project Cost
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span className="uppercase tracking-[0.25em] text-[10px] text-amber-500/70 font-semibold">
          Explore Services
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-6 bg-amber-500/40 rounded-full flex items-start justify-center p-0.5"
        >
          <div className="w-1 h-1.5 bg-amber-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
