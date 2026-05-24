/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Crown, Cake, Baby, Heart, Flower, Sparkles, Check, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';

interface ServicesSectionProps {
  onOpenBookingModal: (preselectedServiceId: string) => void;
}

const iconMap: Record<string, any> = {
  Crown: Crown,
  Cake: Cake,
  Baby: Baby,
  Heart: Heart,
  Flower: Flower,
  Sparkles: Sparkles,
};

export default function ServicesSection({ onOpenBookingModal }: ServicesSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-1 text-sm font-mono tracking-widest text-amber-400 uppercase mb-3"
          >
            <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            <span>Our Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans"
          >
            Bespoke Event Decors Built to Inspire
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-neutral-400"
          >
            From dense fresh marigold structures inside home altars to grand custom-lit wedding stages, our expert artists bring pristine aesthetics to every Bangalore venue.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                id={`service-card-${service.id}`}
                className="relative bg-neutral-950 rounded-2xl border border-neutral-800 p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 group hover:border-amber-500/35 hover:-translate-y-1.5 shadow-xl"
              >
                {/* Glowing subtle circular highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-2xl group-hover:from-amber-500/15 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Icon & Category Indicator */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400 group-hover:bg-amber-400 group-hover:text-neutral-950 transition-colors duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-full group-hover:text-amber-300 transition-colors">
                      {service.category === 'decor' ? 'decoration' : service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <hr className="border-neutral-800 mb-6" />

                  {/* Features Bullet points */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer details & Action */}
                <div className="mt-auto">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="text-xs text-neutral-500 font-mono tracking-wider font-semibold">STARTING PRICE</span>
                    <span className="text-xl font-mono font-bold text-amber-200">
                      ₹{service.priceStarting.toLocaleString('en-IN')}{' '}
                      <span className="text-xs text-neutral-500 font-light font-sans">Onwards</span>
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBookingModal(service.id)}
                    className="w-full py-3 bg-neutral-900 text-amber-300 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-yellow-500 group-hover:text-neutral-950 border border-amber-500/30 font-bold text-sm rounded-xl transition-all duration-300 flex justify-center items-center gap-2"
                  >
                    <span>Check Options & Consult</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
