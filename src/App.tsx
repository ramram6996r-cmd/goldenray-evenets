/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import EventBuilder from './components/EventBuilder';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import WhatsAppCheckoutModal from './components/WhatsAppCheckoutModal';
import { Star, MapPin, Phone, Instagram, Clock, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from './data';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setPreselectedServiceId(undefined);
  };

  return (
    <div className="bg-neutral-950 font-sans text-neutral-200 selection:bg-amber-400 selection:text-neutral-950 min-h-screen">
      {/* Sticky Premium Header Menu */}
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Hero Visual Banner Gateway */}
      <main>
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* Dynamic Services Catalog Section */}
        <ServicesSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Interactive Event Style & Budget Estimator Builder */}
        <EventBuilder />

        {/* Lightbox Filterable Showcase Portfolio Gallery */}
        <GallerySection />

        {/* Testimonials social-proof block & local Bangalore SEO FAQs */}
        <ReviewsSection />

        {/* Dynamic inquiry capture form, call hotline & Google Map directions */}
        <ContactSection />
      </main>

      {/* --- Elegant SEO Optimized Business Footer --- */}
      <footer className="bg-neutral-950 border-t border-neutral-850 pt-16 pb-8 text-sm text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left mb-12">
            
            {/* Column 1: Brand & rating badge */}
            <div className="space-y-4">
              <span className="font-display text-2xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
                Golden Ray Events
              </span>
              <p className="text-xs text-neutral-450 leading-relaxed">
                Premium and authentic fresh flower decorators & themed milestone event organizers based in South Bangalore. Catering to royal weddings, baby showers, and kids birthdays.
              </p>
              
              {/* Aggregated reviews */}
              <div className="inline-flex items-center gap-1.5 p-2 bg-neutral-900 border border-neutral-800 rounded-xl">
                <Star className="w-4 h-4 fill-amber-300 stroke-amber-300" />
                <span className="font-bold text-amber-350">{COMPANY_DETAILS.rating} / 5</span>
                <span className="text-xs text-neutral-500">({COMPANY_DETAILS.reviewsCount} + Google Reviews)</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-4">Quick Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#home" className="hover:text-amber-300 transition-colors">Home Intro</a></li>
                <li><a href="#services" className="hover:text-amber-300 transition-colors">Our Wedding & Birthday Services</a></li>
                <li><a href="#builder" className="hover:text-amber-300 transition-colors">Dynamic Cost Calculator</a></li>
                <li><a href="#gallery" className="hover:text-amber-300 transition-colors">Design Gallery Album</a></li>
                <li><a href="#reviews" className="hover:text-amber-300 transition-colors">Client Reviews</a></li>
                <li><a href="#contact" className="hover:text-amber-300 transition-colors">Physical Office Location</a></li>
              </ul>
            </div>

            {/* Column 3: Contact coordinates recap */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-4">Core Hotline</h4>
              <div className="flex items-start gap-2 text-xs text-neutral-350">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="font-mono hover:text-amber-300 transition-colors">
                  {COMPANY_DETAILS.phone} (Mr. Kiran)
                </a>
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-350">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.businessHours}</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-350">
                <Instagram className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={COMPANY_DETAILS.instagram} target="_blank" className="hover:text-amber-300 transition-colors">
                  Instagram Portfolio Feed
                </a>
              </div>
            </div>

            {/* Column 4: Bangalore coverage neighborhoods */}
            <div>
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-4">Locations We Service</h4>
              <p className="text-xs text-neutral-450 leading-relaxed mb-3">
                Serving prestigious venues, layouts, and private homes across:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Ilyas Nagar', 'Uttarahalli', 'Ramaiya Nagar', 'JP Nagar', 'Jayanagar', 'Banashankari', 'Kanakapura Road', 'HSR Layout', 'Koramangala', 'Padmanabhanagar', 'Whitefield'].map((loc) => (
                  <span key={loc} className="text-[10px] bg-neutral-900 border border-neutral-850 px-2 py-0.5 text-neutral-400 rounded-md">
                    {loc}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <hr className="border-neutral-850 my-8" />

          {/* Bottom attribution & credits */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
            <p>
              &copy; {new Date().getFullYear()} Golden Ray Events Bangalore. All decoration rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] text-neutral-600">
              <Sparkles className="w-3.5 h-3.5 text-amber-500/50" />
              <span>Premium Wedding and Birthday Decorators, South Bengaluru, Karnataka 560061</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Comprehensive WhatsApp Booking & Inquiry Slider Overlay */}
      <WhatsAppCheckoutModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        preselectedServiceId={preselectedServiceId}
      />
    </div>
  );
}
