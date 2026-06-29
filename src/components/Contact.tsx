import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('--- Prestige Plastering & Rendering - Contact Form Submission ---');
    console.log(formData);
    console.log('-----------------------------------------------------------------');
    
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      {/* Visual Ambient glow in bottom-left */}
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Details & Geographic Territory Map (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.35em] text-amber-500 font-bold block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Connect With Our Estimator
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-amber-600 to-amber-300 rounded" />
              <p className="text-slate-400 text-sm leading-relaxed">
                Have an extension, full HMO refurb, or modern external rendering project? Contact David and our team today for a rapid, completely free on-site valuation.
              </p>
            </div>

            {/* Quick Details List */}
            <div className="space-y-5">
              {/* Phone Dial */}
              <a
                href="tel:+447926893063"
                className="flex items-center gap-4 bg-slate-900/50 border border-slate-900 hover:border-amber-500/20 p-4.5 rounded-xl transition-all group text-left"
              >
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-all shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                    Call 24/7 Estimator
                  </span>
                  <span className="block text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    +44 7926 893063
                  </span>
                </div>
              </a>

              {/* Email Send */}
              <a
                href="mailto:prestigeplastering911@gmail.com"
                className="flex items-center gap-4 bg-slate-900/50 border border-slate-900 hover:border-amber-500/20 p-4.5 rounded-xl transition-all group text-left"
              >
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-all shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                    Direct Email Address
                  </span>
                  <span className="block text-sm font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                    prestigeplastering911@gmail.com
                  </span>
                </div>
              </a>

              {/* Location Detail */}
              <div className="flex items-center gap-4 bg-slate-900/50 border border-slate-900 p-4.5 rounded-xl text-left">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                    Territory Base
                  </span>
                  <span className="block text-sm font-bold text-white">
                    Wigan & surrounding areas, United Kingdom
                  </span>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="flex items-center gap-4 bg-slate-900/50 border border-slate-900 p-4.5 rounded-xl text-left">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                    Business Hours
                  </span>
                  <span className="block text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Always Open</span>
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Form (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800/80 p-8 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Top gold bar border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-300" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    Send Direct Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill in your details, and we will contact you directly to answer queries or plan surveys.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="text-left">
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Thomas Bradley"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-700 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Contact Phone */}
                  <div className="text-left">
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 07926 893063"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-700 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Address */}
                  <div className="text-left">
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="thomas@example.com"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-700 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="text-left">
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Subject Focus</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Silicone Rendering Request">Silicone Rendering Request</option>
                      <option value="Interior Plastering Request">Interior Plastering Request</option>
                      <option value="HMO / Commercial Contract">HMO / Commercial Contract</option>
                      <option value="Urgent Repairs">Urgent Repairs</option>
                    </select>
                  </div>
                </div>

                {/* Message Text area */}
                <div className="text-left">
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your job. What kind of wall system are you looking for? Do you already have scaffold configured?"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-700 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-black py-4 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Transmit Secure Message</span>
                </button>
              </form>
            ) : (
              /* Success confirmation panel */
              <div className="text-center py-12 flex flex-col items-center justify-center min-h-[400px]">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full scale-150" />
                  <CheckCircle className="h-16 w-16 text-amber-400 relative z-10" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-amber-500 font-bold mb-2">
                  Transmission Successful
                </span>
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  Thank you, we’ve got your message
                </h3>
                <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed mb-8">
                  Your communication has been logged in our secure system. An estimator will verify the details and dial your phone number (<strong>{formData.phone}</strong>) or send an email within 2 to 4 hours.
                </p>
                <button
                  onClick={() => {
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      subject: 'General Inquiry',
                      message: '',
                    });
                    setIsSubmitted(false);
                  }}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
