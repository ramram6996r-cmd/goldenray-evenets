/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, GalleryItem, Testimonial } from './types';

export const COMPANY_DETAILS = {
  name: 'Golden Ray Events',
  tagline: 'Premier Wedding and Birthday Party Decorators in Bangalore',
  rating: 4.9,
  reviewsCount: 91,
  phone: '073488 99971',
  whatsappNumber: '917348899971', // Standard international direct number
  address: 'Samrudhi Enclave, 107, 1st Cross Rd, Ramaiya Nagar, Ilyas Nagar, Uttarahalli Hobli, Bengaluru, Karnataka 560061',
  instagram: 'https://www.instagram.com/p/DTAy_DcE4Mc/',
  businessHours: '10:00 AM - 9:00 PM (Everyday)',
  email: 'goldenrayevents@gmail.com',
};

export const SERVICES: Service[] = [
  {
    id: 'wedding-decor',
    name: 'Royal Wedding & Engagement Decor',
    description: 'Transforming wedding stages and mandaps in Bangalore into breathtaking royal sanctuaries. Handcrafted fresh floral backdrops, luxurious upholstery, crystal chandeliers, and customized entryway layouts.',
    category: 'wedding',
    iconName: 'Crown',
    priceStarting: 75000,
    features: [
      'Authentic fresh flower mandap designs (Marigold, Jasmine, Roses, Orchids)',
      'High-end entrance archway and driveway styling',
      'Ambient LED, up-lighting, and warm fairy light backdrops',
      'Premium seating, VIP stages, and dining hall decoration'
    ]
  },
  {
    id: 'birthday-decor',
    name: 'Themed Birthday Party Decor',
    description: 'Magical children and milestone birthday parties. High-quality double-ring balloon arches, custom cardboard cutouts, personalized neon signage, and premium thematic dessert table stations.',
    category: 'birthday',
    iconName: 'Cake',
    priceStarting: 15000,
    features: [
      'Multi-color pastel & metallic balloon sculpture garlands',
      'Thematic flex/acrylic background boards with LED neon text',
      'Custom character cutouts (Jungle, Space, Princess, Superhero)',
      'Interactive photo booth walls or red carpet entry setup'
    ]
  },
  {
    id: 'baby-shower',
    name: 'Bespoke Baby Shower Decor',
    description: 'Dreamy, joyous, and elegant baby shower setups (Seemantha / Valakaapu / Godh Bharai). We weave traditional and modern styles together using soft color tones, lovely swing rentals, and flowery accents.',
    category: 'babyshower',
    iconName: 'Baby',
    priceStarting: 18000,
    features: [
      'Traditional wooden/floral swing decoration',
      'Bespoke pink, blue, or gender-neutral pastel floral structures',
      'Shubh Seemantha typography, traditional brass pots & lamps decoration',
      'Custom photo-op backdrop with artificial or fresh blooms'
    ]
  },
  {
    id: 'anniversary-decor',
    name: 'Romantic Anniversary Setups',
    description: 'Surprise your partner or celebrate your silver/golden milestone with candlelit romantic dinner backdrops, floral paths, acoustic canopies, or large glowing monograms.',
    category: 'decor',
    iconName: 'Heart',
    priceStarting: 12000,
    features: [
      'Romantic garden canopy grids or room decoration elements',
      'Premium artificial flower walls or rose petal ground runners',
      'Illuminated numbers (e.g., "25 YEARS", "50", "I LOVE YOU")',
      'Classy helium balloon ceilings and private dining setups'
    ]
  },
  {
    id: 'traditional-flowers',
    name: 'Exquisite Flower Decoration',
    description: 'Traditional South Indian fresh flower decorators. Perfect for Housewarming (Griha Pravesha), Puja events, festivals (Ganesha Chaturthi, Diwali) with authentic mango leaf torans and marigold strings.',
    category: 'decor',
    iconName: 'Flower',
    priceStarting: 8000,
    features: [
      'Freshly sourced premium Bengaluru local marigolds, jasmine, and roses',
      'Authentic banana leaf pillars and traditional background drapes',
      'Ganesha/Puja alcove framing and vibrant entrance hanging garlands',
      'Intricate floral kolam/rangoli designs near the threshold'
    ]
  },
  {
    id: 'bridal-show',
    name: 'Bridal Show & Engagement Management',
    description: 'Full-service management including backdrop setups, welcome counters, guest seating coordination, and thematic walk-in tunnels for pre-wedding and post-wedding festivities.',
    category: 'other',
    iconName: 'Sparkles',
    priceStarting: 35000,
    features: [
      'Thematic aisle walk-ways lined with flower baskets and standees',
      'Bespoke ring-exchange pedestal backdrops',
      'Dedicated photography backgrounds with elegant lounge seating',
      'Coordinated color motifs for drapes, carpets, and floral stands'
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    title: 'Imperial Golden Wedding Stage',
    category: 'wedding',
    description: 'Luxurious Bengaluru wedding stage featuring grand dynamic lighting, ivory drapes, and over 1000 fresh white lilies and roses.'
  },
  {
    id: 'g2',
    image: 'https://images.unsplash.com/photo-1545232979-8bf34eb9757b?auto=format&fit=crop&w=800&q=80',
    title: 'Floral Canopy Pathway',
    category: 'wedding',
    description: 'A romantic entrance archway meticulously lined with hanging wisterias, jasmine strands, and ambient crystal tea-lights.'
  },
  {
    id: 'g3',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    title: 'Dreamy Pastel Birthday Arch',
    category: 'birthday',
    description: 'Modern premium birthday decoration with cascading pastel balloons, personalized golden neon lettering, and acrylic flower drums.'
  },
  {
    id: 'g4',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    title: 'Royal Safari Kids Theme',
    category: 'birthday',
    description: 'A bespoke kids animal theme layout with life-sized jungle installations, organic balloon vines, and multi-tier cake platform.'
  },
  {
    id: 'g5',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    title: 'Traditional Cradle & Swing Ceremony',
    category: 'babyshower',
    description: 'Warm seating arranged around an ornate wooden swing beautifully adorned with red roses, baby-breath, and cascading greens.'
  },
  {
    id: 'g6',
    image: 'https://images.unsplash.com/photo-1507504038482-762103743ec5?auto=format&fit=crop&w=800&q=80',
    title: 'Golden Glow Seemantha Stage',
    category: 'babyshower',
    description: 'Elegant yellow and gold traditional background setup for Bangalore Seemantha ceremony with fresh marigolds and brass lamps.'
  },
  {
    id: 'g7',
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=800&q=80',
    title: 'Blossom Backdrop Panel',
    category: 'decor',
    description: 'Highly detailed dense flower wall comprised of premium pink hydrangeas and cream roses, optimized for photobooths.'
  },
  {
    id: 'g8',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    title: 'Silver Anniversary Romantic Arch',
    category: 'anniversary',
    description: 'Minimalist star lit geometric arch framework matching deep red roses, perfect for backyard or terrace celebrations in Bengaluru.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Anirudh Srinivas',
    rating: 5,
    date: 'April 2026',
    role: 'Groom',
    text: 'Golden Ray Events made our wedding stage decoration absolutely flawless. The premium fresh jasmine and lilies looked royal, and the lighting perfectly accentuated the photography. They delivered on time at Samrudhi and honored all our custom requirements. Highly recommended for Bangalore weddings!',
    verified: true
  },
  {
    id: 't2',
    name: 'Priyanka Gowda',
    rating: 5,
    date: 'February 2026',
    role: 'Mother',
    text: 'We booked them for our daughter\'s 1st birthday decoration with a Disney theme. The double-ring pastel balloon garland and neon setup were so pretty. Kids loved it, and the photo quality was stellar. Setting up the plan over WhatsApp was incredibly seamless and professional.',
    verified: true
  },
  {
    id: 't3',
    name: 'Rohan Deshmukh',
    rating: 5,
    date: 'May 2026',
    role: 'Host',
    text: 'Excellent service for traditional Seemantha function. Absolute perfection in traditional marigold garlands and brass lamps decoration. Mr. Kiran from Golden Ray was highly responsive and cooperative on short notice. Transparent pricing structure without hidden costs.',
    verified: true
  },
  {
    id: 't4',
    name: 'Meghana R. Reddy',
    rating: 5,
    date: 'March 2026',
    role: 'Bride',
    text: 'Beautiful floral stage decor for our engagement ceremony! Extremely professional crew. They arrived early, paid high attention to minor details in backdrop symmetry, and left the venue immaculate. 4.9 or 5 stars is completely well deserved.',
    verified: true
  }
];

export const SEO_ACCORDION_DATA = [
  {
    question: 'How do I choose the best event decorator in Bangalore?',
    answer: 'When choosing an event decorator in Bangalore, look for high reviews (like Golden Ray Events\' 4.9 rating with 91+ reviews), clear portfolios of real weddings/birthdays, responsiveness via WhatsApp, and familiarity with top venues around Ilyas Nagar, Uttarahalli, South Bangalore, and JP Nagar.'
  },
  {
    question: 'What is the starting price for wedding stage decoration in Bangalore?',
    answer: 'At Golden Ray Events, our basic elegant wedding setups start around ₹35,000, while prime custom fresh flower grand mandaps and royal receptions start from ₹75,000 upwards, depending on flower variety and stage dimensions. We provide custom quotations over WhatsApp in minutes!'
  },
  {
    question: 'Can you customize birthday party decorations according to a specific cartoon or theme?',
    answer: 'Absolutely! We specialize in custom themes including Cocomelon, Space Explorer, Disney Princess, Boss Baby, Vintage Pastel Carousel, and Jungle Safari. We set up high-end mock installations, personal cutout standees, and color-matched balloon arcs.'
  },
  {
    question: 'Do you offer fresh flower decoration for traditional Bangalore housewarmings & Pujas?',
    answer: 'Yes, we provide authentic South Indian flower decoration for Griha Pravesha, Ganesha Chaturthi, Varalakshmi Puja, and other auspicious events using fresh-cut Bangalore marigolds (yellow/orange), jasmines, mango leaves, and beautiful traditional wooden backdrops.'
  }
];
