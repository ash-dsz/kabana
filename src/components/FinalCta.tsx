import React from 'react';
import { ArrowRight, Navigation } from 'lucide-react';
import { businessInfo } from '../data/business';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#262626] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Subtle brass accent label */}
        <span className="inline-block text-[11px] sm:text-[12px] font-medium tracking-[0.22em] uppercase text-[#B49A62] mb-4">
          Kabana Cafe • Narre Warren
        </span>

        {/* Large heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white mb-5 font-serif">
          COME HUNGRY.
        </h2>

        {/* Supporting line */}
        <p className="text-base sm:text-xl text-[#D8D4CD] leading-relaxed max-w-xl mx-auto mb-10">
          Afghan favourites, breakfast and coffee in Narre Warren.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="#menu"
            className="h-12 px-8 bg-white text-[#202020] text-xs font-semibold tracking-[0.12em] uppercase rounded-[4px] hover:bg-[#F7F6F2] transition-colors inline-flex items-center justify-center cursor-pointer"
          >
            View Menu
          </a>

          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-light text-xs inline-flex items-center"
          >
            <Navigation className="w-3.5 h-3.5 mr-2" />
            <span>Get Directions</span>
          </a>
        </div>

      </div>
    </section>
  );
};
