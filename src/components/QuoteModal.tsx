import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Phone, Mail, MapPin, Calendar, ClipboardList, CheckCircle } from 'lucide-react';
import { QuoteRequest } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultService = '' }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    phone: '',
    email: '',
    serviceType: defaultService || 'Silicone & K-Rend Rendering',
    projectSize: 'Full House (Exterior / Interior)',
    message: '',
    location: '',
    timeframe: 'Within 1 Month',
  });

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    'Silicone & K-Rend Render Systems',
    'Traditional & Modern Rendering',
    'Full Plastering (Float & Skim)',
    'HMO Builds & Full Renovations',
    'Property Refurbishments',
    'Repairs & Upgrades',
    'Masonry Painting',
    'Scaffolding & Skips',
  ];

  const projectSizes = [
    'Small Patching / Repair',
    'Single Wall / Ceiling',
    'Whole Room',
    'Multiple Rooms',
    'Full House (Exterior / Interior)',
    'Commercial HMO / Multi-property',
  ];

  const timeframes = [
    'Immediate / Urgent (< 2 Weeks)',
    'Within 1 Month',
    'Within 2-3 Months',
    'Flexible / Planning Phase',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name || !formData.phone || !formData.email || !formData.location) {
        alert('Please fill out all contact fields to proceed.');
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('--- Prestige Plastering & Rendering - Free Quote Request ---');
    console.log(formData);
    console.log('------------------------------------------------------------');
    
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: defaultService || 'Silicone & K-Rend Rendering',
      projectSize: 'Full House (Exterior / Interior)',
      message: '',
      location: '',
      timeframe: 'Within 1 Month',
    });
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="absolute inset-0 bg-slate-950 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/5 z-10"
          >
            {/* Golden Highlight Border Top */}
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600" />

            {/* Close Button */}
            <button
              onClick={resetForm}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-amber-400 transition-colors rounded-full hover:bg-slate-800"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold">
                    Free Consultation
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    Request a Prestige Quote
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Fill out our brief checklist, and our expert team will analyze your project needs.
                  </p>
                </div>

                {/* Step Indicator */}
                <div className="flex items-center gap-2 mb-8 bg-slate-950/40 p-1.5 rounded-lg border border-slate-800">
                  <div
                    className={`flex-1 text-center py-2 rounded-md text-xs font-semibold transition-all duration-300 ${
                      step === 1 ? 'bg-amber-500 text-slate-950 shadow-md font-bold' : 'text-slate-400'
                    }`}
                  >
                    1. Contact Details
                  </div>
                  <div
                    className={`flex-1 text-center py-2 rounded-md text-xs font-semibold transition-all duration-300 ${
                      step === 2 ? 'bg-amber-500 text-slate-950 shadow-md font-bold' : 'text-slate-400'
                    }`}
                  >
                    2. Project Details
                  </div>
                </div>

                {/* Step Content */}
                {step === 1 ? (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="relative">
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500/70" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Smith"
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500/70" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. 07926 893063"
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="relative">
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500/70" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Location */}
                      <div className="relative">
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Project Location *</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500/70" />
                          <input
                            type="text"
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="Wigan, Standish, Orrell, etc."
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 flex items-center gap-2 cursor-pointer"
                      >
                        Continue to Project Details
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Service Required */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Required Service</label>
                        <div className="relative">
                          <ClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500/70 pointer-events-none" />
                          <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                          >
                            {servicesList.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Project Scale */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Project Size / Scope</label>
                        <div className="relative">
                          <ClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500/70 pointer-events-none" />
                          <select
                            name="projectSize"
                            value={formData.projectSize}
                            onChange={handleInputChange}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                          >
                            {projectSizes.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Timeframe */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Desired Timeframe</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500/70 pointer-events-none" />
                          <select
                            name="timeframe"
                            value={formData.timeframe}
                            onChange={handleInputChange}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                          >
                            {timeframes.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Additional Details Label */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Additional Notes (Optional)</label>
                        <p className="text-[11px] text-slate-500 mt-2">
                          Include details like height of walls, access issues, scaffolding availability, etc.
                        </p>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your project goals. E.g. We require our 3-bed semi-detached rendered in Standish. Needs K-rend polar white silicone..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors cursor-pointer"
                      >
                        ← Back to Contact
                      </button>

                      <button
                        type="submit"
                        className="bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-slate-950 font-extrabold px-8 py-3.5 rounded-lg text-sm shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        Submit Quote Request
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            ) : (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="relative mb-6">
                  {/* Glowing halo behind success check */}
                  <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full scale-150" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                  >
                    <CheckCircle className="h-20 w-20 text-amber-400 relative z-10" />
                  </motion.div>
                </div>

                <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-bold mb-2">
                  Request Confirmed
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  Thank You, {formData.name}
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
                  Your project details have been successfully transmitted to our team. A plastering estimator will review your request and get back to you within 24 hours.
                </p>

                <div className="w-full max-w-md bg-slate-950 border border-slate-800/80 p-4 rounded-xl mb-8 text-left space-y-2.5 text-xs text-slate-400">
                  <div className="flex justify-between border-b border-slate-900 pb-2">
                    <span className="font-semibold text-slate-500">Service:</span>
                    <span className="text-white text-right">{formData.serviceType}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-2">
                    <span className="font-semibold text-slate-500">Scale:</span>
                    <span className="text-white text-right">{formData.projectSize}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-2">
                    <span className="font-semibold text-slate-500">Timeframe:</span>
                    <span className="text-white text-right">{formData.timeframe}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Location:</span>
                    <span className="text-white text-right">{formData.location}</span>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3 rounded-lg text-sm transition-all duration-300 cursor-pointer"
                >
                  Return to Website
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
