/**
 * Kabana Cafe — Official Website Concept
 * Narre Warren, Victoria, Australia
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { AfghanSpecialties } from './components/AfghanSpecialties';
import { Breakfast } from './components/Breakfast';
import { Coffee } from './components/Coffee';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Storefront } from './components/Storefront';
import { Reviews } from './components/Reviews';
import { Hospitality } from './components/Hospitality';
import { Location } from './components/Location';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { DishModal } from './components/DishModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { MenuItem } from './data/menu';

export default function App() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#202020] flex flex-col antialiased selection:bg-[#262626] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* 1. Food-First Hero */}
        <Hero />

        {/* 2. Short Editorial Intro */}
        <Intro />

        {/* 3. Dark Contrast: Signature Afghan Dishes */}
        <AfghanSpecialties onSelectDish={(dish) => setSelectedDish(dish)} />

        {/* 4. Light Contrast: Melbourne Breakfast & Brunch */}
        <Breakfast onSelectDish={(dish) => setSelectedDish(dish)} />

        {/* 5. Dark Contrast: Specialty Coffee & Spiced Cardamom Saffron Chai */}
        <Coffee />

        {/* 6. Asymmetric Plating & Atmosphere Gallery */}
        <Gallery />

        {/* 7. Full Restaurant Menu with Dietary Filter & Search */}
        <Menu onSelectDish={(dish) => setSelectedDish(dish)} />

        {/* 8. Actual Storefront Architectural Section */}
        <Storefront />

        {/* 9. Understated 4.8★ Google Reviews */}
        <Reviews />

        {/* 10. Warm Hospitality */}
        <Hospitality />

        {/* 11. Location, Trading Hours & Practical Directions */}
        <Location />

        {/* 12. Charcoal Final Call to Action */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dish Detail Modal */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />

      {/* Mobile Quick Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
