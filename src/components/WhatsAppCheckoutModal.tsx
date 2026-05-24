/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Calendar, User, MapPin, Sparkles, Send, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS, SERVICES } from '../data';

interface WhatsAppCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export default function WhatsAppCheckoutModal({
  isOpen,
  onClose,
  preselectedServiceId,
}: WhatsAppCheckoutModalProps) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [remarks, setRemarks] = useState('');
  const [serviceId, setServiceId] = useState(preselectedServiceId || 'general');

  // Sync state if prop changes
  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === serviceId);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceTitle = currentService ? currentService.name : 'Custom Event Decoration & Planning Consultation';
    const cleanDate = date ? date : 'To be confirmed';
    const cleanAddress = address ? address : 'Bangalore';

    const textPayload = `👑 *GOLDEN RAY EVENTS - RECEPTION INQUIRY* 👑
----------------------------
🌸 *Event Service:* ${serviceTitle}
📅 *Preferred Date:* ${cleanDate}
📍 *Bangalore Venue:* ${cleanAddress}

👤 *Guest/Host Name:* ${name || 'Prospective Client'}
💬 *Requirements/Remarks:* ${remarks || 'Looking to discuss available packages.'}

----------------------------
Hello Kiran! I selected this configuration on your website. Please check your schedule and details for this booking. ✨`;

    const redirectUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(textPayload)}`;
    
    // Redirect cleanly
    window.open(redirectUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        
        {/* Trigger dismiss on clicking outer background */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative max-w-lg w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl z-10 text-white text-left"
        >
          {/* Header */}
          <div className="p-6 bg-neutral-950 border-b border-neutral-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <MessageSquare className="w-4.5 h-4.5 fill-emerald-500/10" />
              </div>
              <div>
                <h3 className="font-bold text-base font-sans">Book via WhatsApp</h3>
                <span className="text-[10px] text-amber-300 font-mono tracking-widest uppercase">Golden Ray Events</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 px-1.5 text-neutral-400 hover:text-white rounded-lg bg-neutral-900 border border-neutral-850 cursor-pointer"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-4">
            
            {/* Service checklist selector */}
            <div>
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">Selected Decor Service</label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3.5 text-xs text-neutral-200 outline-none focus:border-amber-500"
              >
                <option value="general">✨ Direct consultation & custom inquiry</option>
                {SERVICES.map((ser) => (
                  <option key={ser.id} value={ser.id}>
                    🌺 {ser.name} (Starts ₹{ser.priceStarting.toLocaleString('en-IN')})
                  </option>
                ))}
              </select>
            </div>

            {/* Client Name */}
            <div>
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-amber-500" />
                <span>Your Full Name *</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Gowda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-xs text-neutral-200 placeholder-neutral-550 outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Event Date input */}
              <div>
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>Target Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-xs text-neutral-350 outline-none focus:border-amber-500 font-mono"
                />
              </div>

              {/* Specific Area of Bangalore */}
              <div>
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Venue Area</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Uttarahalli"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-xs text-neutral-200 placeholder-neutral-550 outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Custom specification requirements */}
            <div>
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1.5">Custom specifications / questions</label>
              <textarea
                rows={3}
                placeholder="Prefer certain themes or fresh roses & jasmine? We accommodate personalized flower density styles."
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-xs text-neutral-200 placeholder-neutral-550 outline-none focus:border-amber-500 max-h-32"
              />
            </div>

            {/* Dynamic visual preview panel */}
            <div className="bg-neutral-950 border border-neutral-850 p-3.5 rounded-xl space-y-1">
              <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase font-bold flex items-center gap-1">
                <Bell className="w-3 h-3 text-emerald-400" />
                <span>Redirecting to Golden Ray Events official line</span>
              </span>
              <p className="text-[11px] text-neutral-400 leading-normal">
                Submitting this secure request automatically formats a clean markup proposal for <strong>Mr. Kiran (Founder)</strong> over standard WhatsApp connection so you receive preferential response queues.
              </p>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full py-4 mt-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-700 text-neutral-950 font-black text-sm rounded-xl transition duration-300 shadow-lg flex justify-center items-center gap-2 cursor-pointer leading-none"
            >
              <Send className="w-4.5 h-4.5" />
              <span>Launch Secure WhatsApp Booking</span>
            </button>

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
