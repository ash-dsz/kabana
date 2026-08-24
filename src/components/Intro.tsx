import React from 'react';
import { businessInfo } from '../data/business';

export const Intro: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F6F2] border-b border-[#E1DED8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Small label */}
        <span className="inline-block text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#6F6B65] mb-4">
          {businessInfo.name}
        </span>

        {/* Large heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#202020] mb-6 font-serif">
          GOOD FOOD, MADE TO BE SHARED.
        </h2>

        {/* Concise body copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#68645F] leading-relaxed max-w-2xl mx-auto">
          From Afghan favourites to familiar café classics, Kabana brings together food, coffee and good company in Narre Warren.
        </p>

        {/* Understated feature markers */}
        <div className="mt-10 pt-8 border-t border-[#E1DED8] flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#6F6B65] font-medium tracking-wide uppercase">
          <span>Traditional Afghan Recipes</span>
          <span className="text-[#A7A29B] hidden sm:inline">•</span>
          <span>Melbourne Espresso</span>
          <span className="text-[#A7A29B] hidden sm:inline">•</span>
          <span>All-Day Brunch</span>
          <span className="text-[#A7A29B] hidden sm:inline">•</span>
          <span>100% Halal</span>
        </div>

      </div>
    </section>
  );
};
