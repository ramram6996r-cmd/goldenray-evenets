/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../data';

interface HeaderProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export default function Header({ onOpenBookingModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Theme Planner', href: '#builder' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg border-b border-amber-500/20 py-3'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#home" className="flex flex-col">
            <span className="font-sans text-xl sm:text-2xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 flex items-center gap-1.5">
              Golden Ray Events
            </span>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-amber-200/80 -mt-0.5">
              WEDDINGS • BIRTHDAYS • BANGALORE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-sm font-medium text-neutral-300 hover:text-amber-300 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call & WhatsApp Quick Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Rating Indicator */}
            <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full text-xs text-amber-300 mr-2">
              <Star className="w-3.5 h-3.5 fill-amber-300 stroke-amber-300" />
              <span className="font-bold">{COMPANY_DETAILS.rating}</span>
              <span className="text-neutral-400">({COMPANY_DETAILS.reviewsCount} Reviews)</span>
            </div>

            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 p-2 bg-neutral-800 text-amber-300 border border-amber-500/30 rounded-lg hover:bg-neutral-700 transition"
              title="Call Studio"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs font-semibold hidden md:inline">Call Now</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-neutral-950 font-bold rounded-lg text-sm transition-all duration-200 shadow-md shadow-amber-500/10 group"
            >
              <MessageSquare className="w-4 h-4 fill-neutral-950" />
              <span>Book via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Hamburger Menu Toggler */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenBookingModal()}
              className="sm:hidden flex items-center gap-1 p-2 bg-gradient-to-r from-amber-400 to-yellow-400 text-neutral-950 font-bold rounded-lg text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-neutral-950" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-400 hover:text-amber-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 border-amber-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-neutral-950 border-b border-amber-500/30 text-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block font-sans text-base font-semibold text-neutral-300 hover:text-amber-300 px-3 py-2.5 rounded-md hover:bg-neutral-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3 px-3">
                <div className="flex items-center gap-1 text-sm text-neutral-400">
                  <Star className="w-4 h-4 fill-amber-300 stroke-amber-300" />
                  <span className="font-bold text-amber-300">{COMPANY_DETAILS.rating} Outstanding</span>
                  <span>({COMPANY_DETAILS.reviewsCount} Google Reviews)</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                    className="flex justify-center items-center gap-2 py-3 bg-neutral-800 text-amber-300 border border-amber-500/20 rounded-xl font-bold text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenBookingModal();
                    }}
                    className="flex justify-center items-center gap-2 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-950 rounded-xl font-bold text-sm shadow"
                  >
                    <MessageSquare className="w-4 h-4 fill-neutral-950" />
                    <span>WhatsApp Book</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
