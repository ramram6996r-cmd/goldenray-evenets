/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, MessageSquare, ArrowRight, Heart, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '../data';

interface HeroProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export default function Hero({ onOpenBookingModal }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-20">
      {/* Cinematic Animated Background image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1.02, 1.08, 1.02] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-cover bg-center opacity-40 brightness-75 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80')]"
        />
        {/* Dynamic dark gradient overlays to guarantee pristine readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-transparent to-neutral-950/90" />
      </div>

      {/* Hero Visual Contents */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-16">
        
        {/* Google Reviews Trust Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 via-amber-550/15 to-transparent border border-amber-500/30 px-4 py-1.5 rounded-full mb-6"
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-sans font-medium text-amber-200">
            <span className="font-bold">4.9/5 Rating</span> with 91+ Google Verified Reviews in Bangalore
          </span>
        </motion.div>

        {/* Elegant Title Display */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans max-w-5xl mx-auto leading-tight"
        >
          Bespoke{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-250 to-amber-500">
            Decorations
          </span>{' '}
          For Your Sacred Milestones
        </motion.h1>

        {/* Catchy Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed"
        >
          Celebrate in breathtaking luxury. We craft majestic wedding stages, enchanting custom theme birthdays, traditional cradle swings, and vibrant floral decoration setups in Bangalore.
        </motion.p>

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 flex items-center justify-center gap-1.5 text-xs text-amber-200/80 font-mono tracking-wider uppercase"
        >
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Ilyas Nagar, Uttarahalli Hobli, South Bengaluru</span>
        </motion.div>

        {/* Hero Interactive Commands / CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Main Action WhatsApp checkout */}
          <button
            onClick={() => onOpenBookingModal()}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-450 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-neutral-950 font-extrabold text-base rounded-xl transition duration-300 shadow-lg shadow-amber-500/25 group hover:scale-[1.02]"
          >
            <MessageSquare className="w-5 h-5 fill-neutral-950" />
            <span>Select & Book Decor</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </button>

          {/* Secondary Action Cost/Theme Planner */}
          <a
            href="#builder"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-amber-300 font-bold text-base rounded-xl border border-amber-500/40 hover:border-amber-500/60 transition duration-300 hover:scale-[1.02]"
          >
            <Sparkles className="w-5 h-5" />
            <span>AI Style & Budget Builder</span>
          </a>
        </motion.div>

        {/* Key USPs Grid with luxurious aesthetic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8 border-t border-neutral-800/60"
        >
          <div className="flex flex-col items-center bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 transform hover:translate-y-[-2px] transition-all duration-300">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-300">4.9 ★</span>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-widest font-mono">91+ Rated Decorators</span>
          </div>
          <div className="flex flex-col items-center bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 transform hover:translate-y-[-2px] transition-all duration-300">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-300">100%</span>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-widest font-mono">Real Fresh Flowers</span>
          </div>
          <div className="flex flex-col items-center bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 transform hover:translate-y-[-2px] transition-all duration-300">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-300">Custom</span>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-widest font-mono">Thematic Designs</span>
          </div>
          <div className="flex flex-col items-center bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 transform hover:translate-y-[-2px] transition-all duration-300">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-300">Fast</span>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-widest font-mono">WhatsApp Response</span>
          </div>
        </motion.div>
        
      </div>

      {/* Bottom curved transition indicator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] text-neutral-900 fill-current">
          <path d="M1200 120L0 120L0 0C60 60 240 100 600 100C960 100 1140 60 1200 0L1200 120Z"></path>
        </svg>
      </div>
    </section>
  );
}
