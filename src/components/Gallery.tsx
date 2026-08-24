import React from 'react';
import { images } from '../data/images';

export const Gallery: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#1C1C1C] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div>
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#A7A29B] block mb-2">
              Atmosphere &amp; Plating
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white font-serif">
              MOMENTS AT KABANA
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A7A29B] max-w-sm mt-3 md:mt-0">
            Freshly pulled espresso shots, simmering saffron rice, and vibrant morning gatherings in Narre Warren.
          </p>
        </div>

        {/* Asymmetric Editorial Gallery Grid (4–5 images) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Row 1: Left Large (7/12), Right Small (5/12) */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-[6px] border border-white/10 aspect-16/10 bg-[#262626]">
            <img
              src={images.diningTable.url}
              alt="Shared Afghan feast table at Kabana Cafe"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-[3px]">
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/90">
                Shared Dining Table
              </span>
            </div>
          </div>

          <div className="md:col-span-5 relative group overflow-hidden rounded-[6px] border border-white/10 aspect-16/10 md:aspect-auto bg-[#262626]">
            <img
              src={images.avocadoSmash.url}
              alt="Avocado & Feta Smash with heirloom tomatoes"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-[3px]">
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/90">
                Avocado &amp; Feta Smash
              </span>
            </div>
          </div>

          {/* Row 2: Left Small (5/12), Right Large (7/12) */}
          <div className="md:col-span-5 relative group overflow-hidden rounded-[6px] border border-white/10 aspect-16/10 md:aspect-auto bg-[#262626]">
            <img
              src={images.cafeInterior.url}
              alt="Natural light interior seating at Kabana Cafe"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-[3px]">
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/90">
                Contemporary Space
              </span>
            </div>
          </div>

          <div className="md:col-span-7 relative group overflow-hidden rounded-[6px] border border-white/10 aspect-16/10 bg-[#262626]">
            <img
              src={images.bolani.url}
              alt="Crispy Bolani flatbread with mint yogurt"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-[3px]">
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/90">
                Handcrafted Bolani Flatbread
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
