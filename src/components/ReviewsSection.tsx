/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, MessageSquare, CheckCircle2, Award, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS, COMPANY_DETAILS, SEO_ACCORDION_DATA } from '../data';

export default function ReviewsSection() {
  const googleSearchReviewsUrl = `https://www.google.com/search?q=Golden+Ray+Events+Wedding+and+Birthday+Party+Decorators+Bangalore+Reviews`;

  return (
    <section id="reviews" className="py-24 bg-neutral-950 text-white border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-1.5 p-1 px-3 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-300 font-mono tracking-widest uppercase mb-4 w-fit">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Customer Satisfaction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight">
              What Celebrants Say in Bangalore
            </h2>
            <p className="mt-4 text-neutral-400 leading-relaxed max-w-2xl">
              Honorable Bangalore households and grooms place their absolute trust in Golden Ray Events to color their milestone memories. Read through our pristine Google listings.
            </p>
          </div>

          {/* Big Scorecard Widget (Right Column) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-around gap-6 relative overflow-hidden shadow-2xl">
            {/* Ambient gold glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-400/10 rounded-full blur-2.5xl pointer-events-none" />

            <div className="text-center sm:text-left">
              <span className="text-5xl sm:text-6xl font-sans font-black text-amber-300 block">4.9</span>
              <div className="flex items-center justify-center sm:justify-start gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-300 stroke-amber-300" />
                ))}
              </div>
              <span className="text-xs text-neutral-400 block mt-2.5 uppercase tracking-widest font-mono">
                91+ VERIFIED GOOGLE SERVICES
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-20 bg-neutral-800" />

            <div className="text-center sm:text-left space-y-2">
              <div className="flex items-center gap-2 text-xs text-neutral-350">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>100% Reliable Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-350">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>Budget friendly options</span>
              </div>
              <a
                href={googleSearchReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-bold hover:underline"
              >
                <span>Verify Google Reviews</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900 border border-neutral-800/80 rounded-2xl p-6 relative flex flex-col justify-between transition hover:border-amber-500/25 shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-white text-base leading-tight">{review.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded-md font-mono uppercase font-bold">
                        {review.role}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-mono tracking-wider">
                        {review.date}
                      </span>
                    </div>
                  </div>
                  {/* Verified flag marker */}
                  {review.verified && (
                    <div className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[10px] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Client</span>
                    </div>
                  )}
                </div>

                {/* Rating Stars row */}
                <div className="flex gap-0.5 mb-3.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-350 stroke-amber-350" />
                  ))}
                </div>

                {/* Body paragraph */}
                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Verified Bangalore Location badge */}
              <div className="mt-5 pt-4 border-t border-neutral-850 flex items-center justify-between text-neutral-500 text-xs">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500/60" />
                  <span>Bangalore Area Service</span>
                </span>
                <span className="font-mono text-[10px]">Google Review Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Custom SEO Accordion Integration Section --- */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-neutral-850">
          <div className="text-center mb-10">
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-bold">HELPFUL ADVICE</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans mt-2">
              Frequently Asked From Our Brides & Birthday Hosts
            </h3>
            <p className="text-sm text-neutral-400 mt-2 max-w-xl mx-auto">
              Planning events around South Bangalore (Uttarahalli, Ilyas Nagar, Ramaiya Nagar, etc.)? Here is custom decorator advice.
            </p>
          </div>

          <div className="space-y-4">
            {SEO_ACCORDION_DATA.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="bg-neutral-900/60 border border-neutral-850 rounded-2xl p-5 sm:p-6 text-left hover:border-amber-500/15 transition-all text-sm"
              >
                <h4 className="font-bold text-base text-white leading-normal flex items-start gap-2.5">
                  <span className="text-amber-400 font-mono text-xs mt-1 shrink-0">Q.</span>
                  <span>{faq.question}</span>
                </h4>
                <p className="text-neutral-400 mt-3 pl-5 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
