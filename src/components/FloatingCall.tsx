import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingCall() {
  return (
    <div className="fixed bottom-6 right-6 z-40 lg:hidden">
      {/* Pulse background ripple */}
      <div className="absolute inset-0 bg-amber-500 rounded-full blur-md opacity-75 scale-125 animate-ping" />
      
      <motion.a
        whileTap={{ scale: 0.9 }}
        href="tel:+447926893063"
        className="relative flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 shadow-2xl border border-amber-300/40 cursor-pointer"
        aria-label="Call Estimator Now"
      >
        <Phone className="h-6 w-6 animate-pulse" />
      </motion.a>
    </div>
  );
}
