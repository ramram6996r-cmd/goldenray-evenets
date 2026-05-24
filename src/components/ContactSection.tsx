/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram, Send, Star, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../data';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [eventCategory, setEventCategory] = useState('wedding');
  const [venue, setVenue] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Address helper link directions
  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Golden+Ray+Events+Samrudhi+Enclave+107+1st+Cross+Ramaiya+Nagar+Ilyas+Nagar+Bangalore`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phoneNumber) {
      alert("Please provide at least Name and Phone number");
      return;
    }

    // Prepare beautiful WhatsApp lead capture string
    const textMessage = `✨ *GOLDEN RAY EVENTS - INQUIRY FORM* ✨
-----------------------------
👤 *Client Name:* ${name}
📞 *Contact Phone:* ${phoneNumber}
🎈 *Event Chosen:* ${eventCategory.toUpperCase()}
📍 *Celebration Venue:* ${venue || 'Bangalore (To be decided)'}
📅 *Event Date:* ${eventDate || 'TBD'}

💬 *Custom Requirements:*
${notes || 'No extra notes.'}

-----------------------------
Dear Mr. Kiran, Please check your slot availability for this configuration. Thank you!`;

    const inquiryUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    
    // Redirect
    window.open(inquiryUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900 border-t border-neutral-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-bold">GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight mt-2">
            Let's Craft Your Dream Stage
          </h2>
          <p className="text-sm text-neutral-400 mt-4 leading-normal">
            Reach out directly for customized layout drawings, fresh flower supply details, or to book a free physical venue site estimation anywhere in Bangalore.
          </p>
        </div>

        {/* Info & Form double columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Address Details & Map Marker (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Quick action profile card */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/25 text-amber-400 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base leading-none">Golden Ray Events</h4>
                  <span className="text-xs text-neutral-500 font-mono mt-1.5 block">Premium Decor & Mandaps</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3 p-3 bg-neutral-900 hover:bg-neutral-850 rounded-xl transition group"
                >
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">Direct Phone Call</span>
                    <span className="text-sm font-semibold text-neutral-205">{COMPANY_DETAILS.phone}</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hi!%20Interested%20in%20Golden%20Ray%20Events%20decorations.`}
                  target="_blank"
                  className="flex items-start gap-3 p-3 bg-neutral-900 hover:bg-neutral-850 rounded-xl transition group"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 fill-emerald-500/10 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">Direct WhatsApp Chat</span>
                    <span className="text-sm font-semibold text-emerald-305">Chat with Mr. Kiran</span>
                  </div>
                </a>

                {/* Opening hours */}
                <div className="flex items-start gap-3 p-3 bg-neutral-900 rounded-xl">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">Studio Hours</span>
                    <span className="text-sm font-semibold text-neutral-300">{COMPANY_DETAILS.businessHours}</span>
                  </div>
                </div>

                {/* Instagram anchor node */}
                <a
                  href={COMPANY_DETAILS.instagram}
                  target="_blank"
                  className="flex items-start gap-3 p-3 bg-neutral-900 hover:bg-neutral-850 rounded-xl transition group"
                >
                  <Instagram className="w-5 h-5 text-pink-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">Instagram Coordinates</span>
                    <span className="text-xs text-neutral-300 line-clamp-1">View Live Decor Stories</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Address and directions mockup */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-neutral-500 uppercase tracking-widest font-mono">Location Address</h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-1">
                    {COMPANY_DETAILS.address}
                  </p>
                </div>
              </div>

              {/* Minimalist interactive map canvas frame linking to directions */}
              <div className="relative h-44 w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden mt-2 group">
                {/* Simple vector grid map visual aesthetic representation */}
                <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center p-4 text-center">
                  <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                  <MapPin className="w-8 h-8 text-amber-400 animate-bounce mb-2" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Golden Ray Office Finder</span>
                  <span className="text-[10px] text-neutral-550 mt-1">Ilyas Nagar, Near Ramaiya Nagar Arch</span>
                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="px-4 py-2 bg-amber-400 text-neutral-950 text-xs font-extrabold rounded-lg flex items-center gap-1.5">
                      <span>Get Navigation Directions</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Custom consultation form (Cols 6-12) */}
          <div className="lg:col-span-7 bg-neutral-950/60 p-6 sm:p-8 rounded-3xl border border-neutral-800 text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-2">
              Book a Free Design Consultation
            </h3>
            <p className="text-xs text-neutral-450 leading-relaxed mb-6">
              Fill your target dates and theme ideas. Your form exports smoothly directly into WhatsApp so you don't lose any configuration.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full name input */}
              <div>
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2"> Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-400 text-white placeholder-neutral-550"
                />
              </div>

              {/* Whatsapp/Phone number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2"> WhatsApp Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-400 text-white placeholder-neutral-550"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">Celebration Type</label>
                  <select
                    value={eventCategory}
                    onChange={(e) => setEventCategory(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-400 text-neutral-300"
                  >
                    <option value="wedding">Wedding & Engagement</option>
                    <option value="birthday">Themed Birthday party</option>
                    <option value="babyshower">Baby Shower / Seemantha</option>
                    <option value="anniversary">Anniversary Canopy</option>
                    <option value="griha-pravesha">Traditional Puja / Griha Pravesha</option>
                    <option value="other">Custom Decoration</option>
                  </select>
                </div>
              </div>

              {/* Venue details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">Venue Address (In Bangalore)</label>
                  <input
                    type="text"
                    placeholder="e.g. Uttarahalli or specific Hall name"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-400 text-white placeholder-neutral-550"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">Wedding / Event Date</label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-400 text-neutral-400 font-mono"
                  />
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">Additional Custom Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Tell us if you prefer fresh flowers or artificial theme, stages size, specific color choices... (e.g., Pink & White orchids, yellow marigold strings)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-400 text-white placeholder-neutral-550 max-h-40"
                />
              </div>

              {/* Notification helper */}
              <div className="flex items-center gap-2 p-3 bg-amber-500/5 rounded-xl border border-amber-500/10 text-[11px] text-amber-250">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
                <span>Redirects to secure WhatsApp chat. No private customer credentials are stored on unauthorized databases.</span>
              </div>

              {/* Action submission trigger */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-400 via-yellow-450 to-amber-500 hover:from-amber-500 hover:to-amber-650 text-neutral-950 font-extrabold text-base rounded-xl transition duration-300 shadow-lg shadow-amber-500/10 flex justify-center items-center gap-2.5 cursor-pointer leading-none"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Export to WhatsApp</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
