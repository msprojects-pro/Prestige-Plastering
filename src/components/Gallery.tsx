import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ZoomIn, Eye, X, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Project } from '../types';
import heroHouse from '../assets/images/prestige_hero_house_1782707050855.jpg';
import interiorPlaster from '../assets/images/prestige_interior_plaster_1782707071311.jpg';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Rendering' | 'Plastering' | 'Refurbishment'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | 'Rendering' | 'Plastering' | 'Refurbishment')[] = [
    'All',
    'Rendering',
    'Plastering',
    'Refurbishment',
  ];

  const projects: Project[] = [
    {
      id: 'proj1',
      title: 'Monocouche K-Rend Silicone Rendering',
      category: 'Rendering',
      description: 'Full exterior modernization of a detached house in Standish, Wigan using Polar White self-cleaning silicone rendering systems.',
      image: heroHouse,
    },
    {
      id: 'proj2',
      title: 'Mirror-Smooth Living Room Skimming',
      category: 'Plastering',
      description: 'Flawless multi-coat plaster skimming over historic uneven brickwork with modern gold-accent ambient wall fixtures.',
      image: interiorPlaster,
    },
    {
      id: 'proj3',
      title: 'HMO Multi-Unit Fireboarding & Soundproofing',
      category: 'Refurbishment',
      description: 'Complete double-layered fireboarding, acoustic sound insulation, and partition skim for a 6-bed HMO conversion near Wigan Wallgate.',
      image: 'https://picsum.photos/seed/hmo/800/600',
    },
    {
      id: 'proj4',
      title: 'Siliconized Colored Render Upgrade',
      category: 'Rendering',
      description: 'Full scaffolding, crack-stitching, and graphite grey modern rendering applied onto an extension in Orrell, Wigan.',
      image: 'https://picsum.photos/seed/exterior2/800/600',
    },
    {
      id: 'proj5',
      title: 'Complete Artex Smoothing & Hallway Skim',
      category: 'Plastering',
      description: 'Scraping and bonding historical stippled Artex ceilings in Pemberton to create a flat modern polished plaster ceiling.',
      image: 'https://picsum.photos/seed/interior3/800/600',
    },
    {
      id: 'proj6',
      title: 'Victorian House Structural Plaster Rehab',
      category: 'Refurbishment',
      description: 'Helical stainless steel stitch bar installation and wet-wall float backing restoration in Aspull, Wigan.',
      image: 'https://picsum.photos/seed/rehab/800/600',
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-slate-950 relative border-t border-slate-900">
      {/* Background Ornaments */}
      <div className="absolute bottom-12 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-amber-500 font-bold block">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Showcase of Prestige Craftsmanship
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-300 rounded mx-auto" />
          <p className="text-slate-400 text-sm md:text-base pt-2">
            Explore authentic photo evidence of our rendering and plastering transformations. Every project is fully engineered for longevity.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 bg-slate-900/50 p-1.5 rounded-xl border border-slate-800/80 max-w-xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-widest px-4 py-2.5 rounded-lg font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-500/5 hover:border-amber-500/25 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glassmorphic zoom icon trigger overlay */}
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <Eye className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Category Tag overlay */}
                  <span className="absolute top-4 left-4 bg-slate-950/95 border border-amber-500/30 text-[9px] uppercase tracking-widest text-amber-400 font-extrabold px-3 py-1 rounded-full backdrop-blur-sm shadow">
                    {project.category}
                  </span>
                </div>

                {/* Info Section */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Viewer Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm"
              />

              {/* Lightbox Content Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-slate-900 border border-amber-500/20 max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image Panel (Left/Top) */}
                <div className="lg:col-span-8 bg-slate-950 flex items-center justify-center relative min-h-[300px] md:min-h-[450px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-h-[70vh] w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Left Navigation Arrow */}
                  <button
                    onClick={handlePrevProject}
                    className="absolute left-4 p-2 rounded-full bg-slate-900/60 hover:bg-amber-500 text-white hover:text-slate-950 transition-all border border-slate-800"
                    aria-label="Previous project"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>

                  {/* Right Navigation Arrow */}
                  <button
                    onClick={handleNextProject}
                    className="absolute right-4 p-2 rounded-full bg-slate-900/60 hover:bg-amber-500 text-white hover:text-slate-950 transition-all border border-slate-800"
                    aria-label="Next project"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Info Drawer Panel (Right/Bottom) */}
                <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between bg-slate-900 text-left border-t lg:border-t-0 lg:border-l border-slate-800">
                  {/* Close Lightbox */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="space-y-6 pt-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold block mb-1">
                        Project Detail
                      </span>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                        {selectedProject.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white leading-tight">
                      {selectedProject.title}
                    </h3>

                    <p className="text-slate-300 text-xs leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="space-y-2.5 pt-4">
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 block font-bold">
                        Pillars Applied
                      </span>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="h-4 w-4 text-amber-500 shrink-0" />
                        <span>Flawless plumb leveling</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="h-4 w-4 text-amber-500 shrink-0" />
                        <span>Anti-crack fiber mesh base</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="h-4 w-4 text-amber-500 shrink-0" />
                        <span>Sill & window frame seal protection</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 lg:pt-0">
                    <a
                      href="tel:+447926893063"
                      className="block w-full text-center bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-amber-500/5"
                    >
                      Book Free Valuation
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
