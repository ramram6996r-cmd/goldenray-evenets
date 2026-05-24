/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowUpRight, MessageSquare, Plus, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY, COMPANY_DETAILS } from '../data';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<'all' | 'wedding' | 'birthday' | 'babyshower' | 'decor'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Filtered list
  const filteredGallery = useMemo(() => {
    if (activeTab === 'all') return GALLERY;
    return GALLERY.filter((item) => item.category === activeTab);
  }, [activeTab]);

  // Generate WhatsApp prompt for a specific gallery image clicked
  const getWhatsAppGalleryUrl = (item: GalleryItem) => {
    const text = `Hi Golden Ray Events! I was exploring your Bangalore decoration portfolio and fell in love with *"${item.title}"* (${item.category} theme). 

Could we do a similar setup for my upcoming event? Please share pricing and feasibility details. 🌸
Portfolio Reference Link: ${window.location.origin}/#gallery`;
    return `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'wedding', label: 'Weddings & Engagements' },
    { id: 'birthday', label: 'Themed Birthdays' },
    { id: 'babyshower', label: 'Baby Showers' },
    { id: 'decor', label: 'Luxe Floral Accents' },
  ];

  return (
    <section id="gallery" className="py-24 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 text-sm font-mono tracking-widest text-amber-400 uppercase mb-3">
            <Sparkles className="w-4 h-4 fill-amber-400/20" />
            <span>Our Masterpieces</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight">
            Inspired Portfolios Of Recent Gatherings
          </h2>
          <p className="mt-4 text-neutral-400">
            Real photos from premium venues across Bangalore. Touch or hover on any design to book that exact style directly with Mr. Kiran and the Golden Ray design team.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-950 border-amber-400 font-extrabold shadow-md'
                  : 'bg-neutral-950 text-neutral-400 border-neutral-850 hover:border-neutral-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Gallery Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative h-80 bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800/80 cursor-pointer shadow-xl transform transition-transform hover:scale-[1.01]"
              >
                {/* Image background template */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Beautiful vignette shading for tag legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                </div>

                {/* Floating Category tag */}
                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/20 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                  {item.category === 'decor' ? 'accent' : item.category}
                </span>

                {/* Text and Actions panel at the bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end text-left">
                  <h3 className="text-base sm:text-lg font-bold text-white transition-colors group-hover:text-amber-300 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Action hover container */}
                  <div className="mt-3.5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-amber-400 flex items-center gap-1.5 font-bold">
                      <Plus className="w-3.5 h-3.5" />
                      <span>Inspect Design</span>
                    </span>
                    <div className="p-1 px-2.5 bg-amber-400 text-neutral-950 font-bold text-[10px] uppercase rounded-full flex items-center gap-1">
                      <span>Book Slot</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty case helper */}
        {filteredGallery.length === 0 && (
          <div className="py-20 text-center bg-neutral-950 border border-dashed border-neutral-800 rounded-3xl">
            <p className="text-neutral-500 text-sm">No items matching this filter right now.</p>
          </div>
        )}

      </div>

      {/* Lightbox Pop-Up Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            {/* Close trigger overlay */}
            <div className="absolute inset-0" onClick={() => setSelectedItem(null)} />

            {/* Lightbox container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl z-20 flex flex-col md:flex-row max-h-[85vh]"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-30 p-2 text-white bg-black/60 rounded-full hover:bg-neutral-800 focus:outline-none border border-neutral-800 cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image with high quality */}
              <div className="w-full md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[450px]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Information & checkout actions */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-left bg-neutral-900">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                    ⭐ Bangalore decor concept ({selectedItem.category})
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mt-2 leading-tight">
                    {selectedItem.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-350 mt-4 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="mt-6 space-y-3.5">
                    <div className="flex items-center gap-2.5 text-xs text-neutral-400">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      <span>Premium floral density & materials included</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-neutral-400">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      <span>Custom color layouts customizable</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-neutral-400">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      <span>Handled by Senior florists of South Bangalore</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-neutral-800 gap-3 flex flex-col sm:flex-row md:flex-col mt-6">
                  {/* Main instant booking action linked directly to this specific design */}
                  <a
                    href={getWhatsAppGalleryUrl(selectedItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-neutral-950 rounded-xl font-bold text-sm tracking-wide shadow-lg flex items-center justify-center gap-2 text-center transition cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-neutral-950" />
                    <span>Inquire About This Design</span>
                  </a>
                  
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="py-3 px-5 bg-neutral-805 hover:bg-neutral-800 text-neutral-400 rounded-xl font-semibold text-xs border border-neutral-800 transition cursor-pointer text-center"
                  >
                    Back to Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
