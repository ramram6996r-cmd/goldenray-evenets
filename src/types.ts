/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'wedding' | 'birthday' | 'babyshower' | 'decor' | 'other';
  iconName: string;
  priceStarting: number;
  features: string[];
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'wedding' | 'birthday' | 'babyshower' | 'anniversary' | 'decor';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  role: string;
  text: string;
  avatar?: string;
  verified: boolean;
}

export interface DynamicQuizOption {
  id: string;
  label: string;
  costModifier: number;
  description?: string;
}

export interface DynamicQuizQuestion {
  id: string;
  title: string;
  subtitle: string;
  options: DynamicQuizOption[];
}

export interface ConceptState {
  eventType: string;
  guestCount: string;
  theme: string;
  stageDecoration: string;
  lightingPreference: string;
  floralsLevel: string;
  cateringAndPlates: string;
  additionalDecorations: string[];
}
