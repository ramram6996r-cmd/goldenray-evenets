/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Sparkles, Calendar, Calculator, Check, ShoppingBag, MapPin, MessageSquare, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS, SERVICES } from '../data';

interface ADDON_OPTION {
  id: string;
  name: string;
  price: number;
  description: string;
}

const EVENT_TYPES = [
  { id: 'wedding', label: 'Wedding & Engagement Stage', basePrice: 65000, icon: '👑' },
  { id: 'birthday', label: 'Themed Birthday Party Decor', basePrice: 15000, icon: '🎈' },
  { id: 'babyshower', label: 'Traditional Baby Shower / Seemantha', basePrice: 18000, icon: '🍼' },
  { id: 'anniversary', label: 'Romantic Anniversary Canopy', basePrice: 12000, icon: '💝' },
  { id: 'traditional', label: 'Traditional Puja & Marigold Decor', basePrice: 8000, icon: '🌸' },
];

const SCALES = [
  { id: 'home', label: 'Home Setup / Cozy Garden', labelSub: 'Up to 50 guests', multiplier: 0.9 },
  { id: 'small-hall', label: 'Premium Party Hall / Terrace', labelSub: '50 - 150 guests', multiplier: 1.0 },
  { id: 'grand-hall', label: 'Luxury Banquet Hall / Marriage Mahal', labelSub: '150 - 500 guests', multiplier: 1.5 },
  { id: 'palace', label: 'Grand Palace / Open Stadium Ground', labelSub: '500+ guests', multiplier: 2.3 },
];

const FLORALS = [
  { id: 'standard', label: 'Sophisticated Minimalism', desc: 'Elegant artificial & fresh floral accents with curated rich foliage.', modifier: 0 },
  { id: 'dense', label: 'Heavy Fresh Flower Fillers', desc: 'Dense local marigold, rose petals, jasmine garlands & orchids filler (+₹12,000)', modifier: 12000 },
  { id: 'exotic', label: 'Imperial Imported Carnations', desc: 'Premium lilies, baby-breaths, tulips & customized imported foliage backdrops (+₹35,000)', modifier: 35000 },
];

const ADDONS: ADDON_OPTION[] = [
  { id: 'canopy', name: 'Ambient Fairy Light Canopy', price: 8000, description: 'Warm cascading fairy lighting grid overhead.' },
  { id: 'lens-spot', name: 'Pro LED Wash & Intelligent Sharpies', price: 6000, description: 'DMX programmed stage lighting & colorful spot beams.' },
  { id: 'gate', name: 'Grand Entrance Pathway Arch', price: 10000, description: 'Lined with elegant floor pillars & hanging lights.' },
  { id: 'smoke', name: 'Symphony Dry Ice Heavy Smoke Effect', price: 5000, description: 'Ideal for bridal entry cloud walk effect.' },
  { id: 'glowing-letters', name: 'LED Alphabet / Neon Monogram Signs', price: 3500, description: 'Personalized glowing names on acrylic frames.' },
  { id: 'photobooth', name: 'Interactive Photo Station Backdrop', price: 8500, description: 'Extra independent decorated corner for selfies.' },
];

export default function EventBuilder() {
  const [eventType, setEventType] = useState('wedding');
  const [scale, setScale] = useState('small-hall');
  const [floral, setFloral] = useState('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['gate']);
  const [userDate, setUserDate] = useState('');
  const [userCustomDetails, setUserCustomDetails] = useState('');

  // Handle addon multi-select
  const toggleAddon = (id: string) => {
    setSelectedAddons((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((aId) => aId !== id)
        : [...prevSelected, id]
    );
  };

  // Derive final price instantly - avoids any useEffect bug
  const derivedPrice = useMemo(() => {
    const baseVal = EVENT_TYPES.find((et) => et.id === eventType)?.basePrice || 15000;
    const currentScale = SCALES.find((sc) => sc.id === scale) || SCALES[1];
    const floralAddVal = FLORALS.find((fl) => fl.id === floral)?.modifier || 0;
    
    const addonsTotal = ADDONS.reduce((acc, currentAddon) => {
      if (selectedAddons.includes(currentAddon.id)) {
        return acc + currentAddon.price;
      }
      return acc;
    }, 0);

    const subTotal = (baseVal * currentScale.multiplier) + floralAddVal + addonsTotal;
    return Math.round(subTotal);
  }, [eventType, scale, floral, selectedAddons]);

  // Construct WhatsApp checkout message body
  const whatsappUrl = useMemo(() => {
    const eventName = EVENT_TYPES.find((et) => et.id === eventType)?.label || eventType;
    const scaleDetails = SCALES.find((sc) => sc.id === scale);
    const floralName = FLORALS.find((fl) => fl.id === floral)?.label;
    const addonNames = ADDONS.filter((ad) => selectedAddons.includes(ad.id))
      .map((ad) => `• ${ad.name} (₹${ad.price.toLocaleString('en-IN')})`)
      .join('\n');

    const formattedMessage = `✨ *GOLDEN RAY EVENTS - BOOKING PROPOSAL* ✨
-----------------------------
📍 *Bangalore Wedding & Birthday Decorators*

📅 *Target Date:* ${userDate || 'Not specified yet'}
🎈 *Decor Service:* ${eventName}
🏢 *Venue Scale:* ${scaleDetails?.label} (${scaleDetails?.labelSub})
🌸 *Floral Style:* ${floralName}

🛒 *Customized Add-ons Selected:*
${addonNames || 'None selected'}

💬 *Custom Requirements:*
${userCustomDetails || 'No additional custom specs.'}

-----------------------------
💰 *Dynamic Budget Estimate:* ₹${derivedPrice.toLocaleString('en-IN')} onwards
*(Final rate subject to site assessment and specific date availability)*

Please let me know if this decor slot is available! 🌸`;

    return `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
  }, [eventType, scale, floral, selectedAddons, userDate, userCustomDetails, derivedPrice]);

  return (
    <section id="builder" className="py-24 bg-neutral-950 font-sans text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 p-1 px-3 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-300 font-mono tracking-widest uppercase mb-4">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Interactive Designer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight">
            Design Your Concept & Estimate Budget
          </h2>
          <p className="mt-4 text-neutral-400">
            Select your color palettes, event tier, and luxury items. Your custom estimate updates live with real-time Bangalore logistics factored. Inquire instantly on WhatsApp!
          </p>
        </div>

        {/* Builder Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form options (Cols 1-7) */}
          <div className="lg:col-span-7 bg-neutral-900/60 p-6 sm:p-8 rounded-3xl border border-neutral-800/80 shadow-lg space-y-8">
            
            {/* Step 1: Event Theme Selection */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 flex items-center justify-center bg-amber-500/20 text-amber-300 rounded-full text-xs font-mono font-bold">1</span>
                <label className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">Select Celebration Type</label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {EVENT_TYPES.map((et) => (
                  <button
                    key={et.id}
                    onClick={() => setEventType(et.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      eventType === et.id
                        ? 'border-amber-400 bg-amber-500/10 text-white'
                        : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:border-neutral-750 hover:text-neutral-200'
                    }`}
                  >
                    <span className="text-2xl block mb-1.5">{et.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold line-clamp-2">{et.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale and Venue size */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 flex items-center justify-center bg-amber-500/20 text-amber-300 rounded-full text-xs font-mono font-bold">2</span>
                <label className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">Venue Size & Scale</label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCALES.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setScale(sc.id)}
                    className={`flex flex-col justify-center p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      scale === sc.id
                        ? 'border-amber-400 bg-amber-500/10 text-white'
                        : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:border-neutral-750'
                    }`}
                  >
                    <span className="text-sm font-bold text-white group-hover:text-amber-300">{sc.label}</span>
                    <span className="text-xs text-neutral-400 mt-1">{sc.labelSub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Florals Grade */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 flex items-center justify-center bg-amber-500/20 text-amber-300 rounded-full text-xs font-mono font-bold">3</span>
                <label className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">Flower Arrangement & Density</label>
              </div>
              <div className="space-y-3">
                {FLORALS.map((fl) => (
                  <button
                    key={fl.id}
                    onClick={() => setFloral(fl.id)}
                    className={`w-full flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      floral === fl.id
                        ? 'border-amber-400 bg-amber-500/10'
                        : 'border-neutral-800 bg-neutral-950/40 hover:border-neutral-750'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${floral === fl.id ? 'border-amber-400 text-amber-400' : 'border-neutral-600'}`}>
                        {floral === fl.id && <div className="w-2.5 h-2.5 bg-amber-400 rounded-full" />}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">{fl.label}</span>
                      <span className="text-xs text-neutral-400 mt-1 block">{fl.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Luxury Extras - Addons Multi-Select */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 flex items-center justify-center bg-amber-500/20 text-amber-300 rounded-full text-xs font-mono font-bold">4</span>
                <label className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">Add-ons & Technical Enhancements</label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ADDONS.map((ad) => {
                  const isChecked = selectedAddons.includes(ad.id);
                  return (
                    <button
                      key={ad.id}
                      onClick={() => toggleAddon(ad.id)}
                      className={`flex flex-col p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? 'border-amber-400 bg-amber-500/10'
                          : 'border-neutral-800 bg-neutral-950/40 hover:border-neutral-750'
                      }`}
                    >
                      <div className="flex justify-between items-start w-full">
                        <span className="text-sm font-bold text-white line-clamp-1">{ad.name}</span>
                        <span className="text-xs font-semibold font-mono text-amber-300 ml-1.5 shrink-0">+₹{ad.price.toLocaleString('en-IN')}</span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 leading-normal line-clamp-2">{ad.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Extra context variables */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
              <div>
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">Preferred Event Date</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <Calendar className="w-4 h-4 text-amber-400" />
                  </span>
                  <input
                    type="date"
                    value={userDate}
                    onChange={(e) => setUserDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 pl-10 focus:outline-none focus:border-amber-500 text-sm font-mono text-white"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">Venue or Custom Notes</label>
                <input
                  type="text"
                  placeholder="e.g. Samrudhi Enclave, Indoor hall..."
                  value={userCustomDetails}
                  onChange={(e) => setUserCustomDetails(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 text-sm text-neutral-200 placeholder-neutral-550"
                />
              </div>
            </div>

          </div>

          {/* Pricing Receipt Summary Block (Cols 8-12) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            
            <div className="bg-neutral-900 border-2 border-amber-500/20 shadow-2xl rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              {/* Subtle background golden ray graphic */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

              {/* Company Logo representation */}
              <div className="flex flex-col items-center text-center pb-6 border-b border-neutral-800 relative z-10">
                <h3 className="font-sans font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 text-lg">
                  Golden Ray Events
                </h3>
                <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase mt-0.5">Decor Concept Summary</span>
              </div>

              {/* Receipt Details and items list */}
              <div className="my-6 space-y-4 relative z-10 text-sm">
                
                {/* Event Type row */}
                <div className="flex justify-between items-start gap-4">
                  <span className="text-neutral-400">Selected Event</span>
                  <span className="font-bold text-white text-right">
                    {EVENT_TYPES.find((et) => et.id === eventType)?.label}
                  </span>
                </div>

                {/* Scale row */}
                <div className="flex justify-between items-start gap-4">
                  <span className="text-neutral-400">Venue Scale</span>
                  <span className="font-semibold text-neutral-200 text-right">
                    {SCALES.find((sc) => sc.id === scale)?.label}
                  </span>
                </div>

                {/* Florals row */}
                <div className="flex justify-between items-start gap-4">
                  <span className="text-neutral-400">Floral Grade</span>
                  <span className="font-semibold text-neutral-200 text-right">
                    {FLORALS.find((fl) => fl.id === floral)?.label}
                  </span>
                </div>

                {/* Addons summary block */}
                {selectedAddons.length > 0 && (
                  <div className="pt-3 border-t border-neutral-800/60">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-2">Enhancements Included:</span>
                    <div className="space-y-1.5 pl-2 max-h-32 overflow-y-auto custom-scrollbar">
                      {ADDONS.filter((ad) => selectedAddons.includes(ad.id)).map((ad) => (
                        <div key={ad.id} className="flex justify-between text-xs">
                          <span className="text-neutral-300">✓ {ad.name}</span>
                          <span className="font-mono text-neutral-400">₹{ad.price.toLocaleString('en-IN')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Logistics marker */}
                <div className="p-3 bg-neutral-950/80 rounded-xl flex items-start gap-2.5 text-xs text-neutral-400 border border-neutral-800">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Logistics and setup calculated for <strong>Greater Bengaluru</strong> region on local standard calendar slots.</span>
                </div>

              </div>

              {/* Total display with gorgeous formatting */}
              <div className="pt-6 border-t border-neutral-800 text-center relative z-10">
                <span className="text-xs text-neutral-500 font-bold uppercase tracking-widest block mb-1">Estimated Setup Value</span>
                <span className="text-3xl sm:text-4xl font-mono font-black text-amber-300">
                  ₹{derivedPrice.toLocaleString('en-IN')}
                  <span className="text-sm font-medium font-sans text-neutral-400"> *</span>
                </span>
                <span className="text-[10px] text-neutral-500 block mt-2 italic leading-normal">
                  *Excluding governmental taxes and direct florist market peak day surging.
                </span>
              </div>

              {/* Big WhatsApp CTA */}
              <div className="mt-8 relative z-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-to-r from-amber-400 via-yellow-450 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-neutral-950 font-extrabold text-base rounded-xl transition duration-300 shadow-md flex justify-center items-center gap-2.5 cursor-pointer leading-none"
                >
                  <MessageSquare className="w-5 h-5 fill-neutral-950" />
                  <span>Export Concept to WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Quick trust FAQ line */}
            <div className="bg-neutral-900/40 border border-neutral-850 p-4 rounded-xl flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-neutral-400 leading-normal">
                <strong>Why consult over WhatsApp?</strong> Over 90% of custom decoration requires direct design tailoring and specific venue clearance checks. Redirection passes this precise configuration directly to Kiran & the team, so you receive an accurate booking confirmation quickly.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
