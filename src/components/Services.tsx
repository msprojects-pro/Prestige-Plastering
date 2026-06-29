import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Layers,
  Flame,
  Home,
  Hammer,
  RotateCw,
  Paintbrush,
  Truck,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

export default function Services({ onOpenQuoteWithService }: ServicesProps) {
  const services: Service[] = [
    {
      id: 'silicone-krend',
      title: 'Silicone & K-Rend Render Systems',
      description: 'Ultra-modern, self-cleaning thin-coat silicone & colored K-Rend systems that let your walls breathe while locking out wet weather.',
      iconName: 'Sparkles',
      longDescription: 'Our premier external coating. We apply high-specification polymer mesh basecoats followed by colored premium silicone render. It is completely UV stable, self-cleaning, flexible (prevents cracking), and available in 30+ pre-tinted colors so you never need to paint again.',
      features: ['Self-cleaning technology', 'No painting required ever', 'Flexible acrylic mesh base', 'Waterproof & highly breathable'],
    },
    {
      id: 'traditional-modern',
      title: 'Traditional & Modern Rendering',
      description: 'Heavy-duty traditional sand and cement rendering, polymer modified mortars, and stylish scratch renders for older or contemporary walls.',
      iconName: 'Layers',
      longDescription: 'From traditional lime rendering for period stone terraces in Wigan to scratch-finish monocouche systems, we deliver solid, perfectly plumb external plastering. Every job is reinforced at corners and stress lines to prevent structural stress lines.',
      features: ['Monocouche scratch finish', 'Traditional lime rendering', 'Corner mesh reinforcement', 'Damp-proof water barrier'],
    },
    {
      id: 'full-plastering',
      title: 'Full Plastering (Float & Skim)',
      description: 'Immaculate interior plastering, from plasterboard dot & dab lining to full wet-backing float and mirror-smooth skimming finish.',
      iconName: 'Flame',
      longDescription: 'We specialize in multi-coat interior plastering. Whether we are floating sand/cement backing coats onto masonry, applying dot & dab adhesive plasterboards, or skimming over old partitions, our final finish is polished like glass and perfectly ready for painting.',
      features: ['Dot & Dab board adhesive', 'Float & multi-coat skimming', 'Mirror-smooth gloss finish', 'Acoustic fire-proofing boards'],
    },
    {
      id: 'hmo-renovations',
      title: 'HMO Builds & Full Renovations',
      description: 'Turnkey plastering and rendering for multi-occupancy properties. Quick turnarounds, rigid building control, and acoustic compliance.',
      iconName: 'Home',
      longDescription: 'We are Wigan’s choice plasterers for HMO landlords. We handle complete firewall partitions, soundproof boarding, acoustic underlays, suspended ceilings, and strict fire-safety compliance plastering to help you pass building control inspection instantly.',
      features: ['Acoustic sound insulation', 'Part-E sound compliance', 'Double-layer fireboarding', 'Fast-track landlord turnarounds'],
    },
    {
      id: 'refurbishments',
      title: 'Property Refurbishments',
      description: 'Restoring old, damaged, or uneven walls back to modern structural standards. Structural cracking remediation and plaster rehab.',
      iconName: 'Hammer',
      longDescription: 'Older properties in Lancashire require specialized repair. We stitch structural cracks using helical stainless steel bars, install mesh reinforcement, and skin old crumbly masonry with modern fiber-mesh backing systems for maximum lifetime reinforcement.',
      features: ['Helical structural stitching', 'Fibre-mesh wall bracing', 'Period plaster preservation', 'Uneven wall leveling'],
    },
    {
      id: 'repairs-upgrades',
      title: 'Repairs & Upgrades',
      description: 'Efficient repair services for local homeowners: water damage repair, ceiling plasterboard replacements, and Artex flattening.',
      iconName: 'RotateCw',
      longDescription: 'Got an outdated textured Artex ceiling or damp patches from a historical leak? We carry out absolute flattening. We treat water staining, replace sagging boards, skim Artex down, and apply damp seals to prepare your walls for clean painting.',
      features: ['Complete Artex flattening', 'Sagging plasterboard fixes', 'Leak stain damp treatment', 'Clean, mess-free repairs'],
    },
    {
      id: 'masonry-painting',
      title: 'Masonry Painting',
      description: 'High-durability external masonry coating using premium elastomeric weatherproof paint systems designed for northern climates.',
      iconName: 'Paintbrush',
      longDescription: 'For clients with traditional render seeking a visual upgrade, we apply advanced elastomeric masonry paints. These paints contract and expand with thermal shifts, completely resisting flaking, fungal growth, and driving rain.',
      features: ['Elastomeric flexible paint', 'Anti-fungal & mould seal', 'Durable weather resistance', 'Full scaffolding prep included'],
    },
    {
      id: 'scaffolding-skips',
      title: 'Scaffolding & Skips Included',
      description: 'Complete turnkey logistics. We arrange all safety scaffolding, pavement street permits, and prompt skip waste removal.',
      iconName: 'Truck',
      longDescription: 'Never worry about organizing scaffolding or licensing. We coordinate all access rigs, pavement licenses with Wigan council, and skip removals. Our projects are fully self-contained, safe, and entirely taken care of from start to finish.',
      features: ['Full rig safety compliance', 'Council pavement permit logging', 'Prompt skip drop & swap', 'Clean site guarantee'],
    },
  ];

  // Helper function to map string names to Lucide icon components
  const renderIcon = (name: string) => {
    const iconClass = "h-6 w-6 text-amber-400";
    switch (name) {
      case 'Sparkles': return <Sparkles className={iconClass} />;
      case 'Layers': return <Layers className={iconClass} />;
      case 'Flame': return <Flame className={iconClass} />;
      case 'Home': return <Home className={iconClass} />;
      case 'Hammer': return <Hammer className={iconClass} />;
      case 'RotateCw': return <RotateCw className={iconClass} />;
      case 'Paintbrush': return <Paintbrush className={iconClass} />;
      case 'Truck': return <Truck className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-900 border-t border-slate-950 relative">
      {/* Visual Ambient glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-amber-500 font-bold block">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Elite Plastering & Rendering Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-300 rounded mx-auto" />
          <p className="text-slate-400 text-sm md:text-base pt-2">
            Providing homeowners and property developers with flawless finishes. We handle all logistics including scaffolding, permitting, and cleanup.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex flex-col justify-between h-full bg-slate-950 hover:bg-slate-900 border border-slate-800/85 hover:border-amber-500/35 p-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Top ambient color edge */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-amber-400 transition-all rounded-t-2xl" />

              <div className="space-y-4">
                {/* Icon box */}
                <div className="h-12 w-12 rounded-xl bg-slate-900 group-hover:bg-amber-500/10 border border-slate-800 group-hover:border-amber-500/30 flex items-center justify-center transition-all">
                  {renderIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                {/* Service Brief */}
                <p className="text-slate-400 text-xs leading-relaxed">
                  {service.description}
                </p>

                {/* Feature Bullet Checklist */}
                <ul className="space-y-1.5 pt-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                      <div className="h-1 w-1 bg-amber-500 rounded-full" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-slate-900">
                <button
                  onClick={() => onOpenQuoteWithService(service.title)}
                  className="flex items-center justify-between w-full text-left group/btn text-xs text-amber-500 hover:text-amber-400 font-bold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="h-4 w-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Reassurance Notice */}
        <div className="mt-12 bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="h-10 w-10 rounded-full bg-red-500/15 flex items-center justify-center text-red-400 shrink-0">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Unregulated Damp Warnings?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Cracked or blown rendering allows rain to penetrate bricks, causing internal black mould. Act early to preserve wall cavities.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenQuoteWithService('Silicone & K-Rend Render Systems')}
            className="w-full md:w-auto bg-slate-900 border border-amber-500/40 hover:border-amber-400 text-amber-400 font-bold px-6 py-3 rounded-lg text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Request Site Inspection
          </button>
        </div>

      </div>
    </section>
  );
}
