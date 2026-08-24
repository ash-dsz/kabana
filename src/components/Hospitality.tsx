import React from 'react';
import { images } from '../data/images';

export const Hospitality: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F6F2] border-b border-[#E1DED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          
          <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#6F6B65] block mb-3">
            Hospitality
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#202020] mb-6 font-serif">
            COME FOR THE FOOD.
            <br />
            STAY FOR THE COMPANY.
          </h2>

          <p className="text-base sm:text-lg text-[#68645F] leading-relaxed max-w-xl mx-auto mb-10">
            Breakfast with friends, a quick coffee, or dinner around the table — Kabana is made for lingering.
          </p>

          <div className="relative group overflow-hidden rounded-[6px] border border-[#E1DED8] aspect-21/9 max-w-4xl mx-auto bg-[#E1DED8]">
            <img
              src={images.diningTable.url}
              alt="People sharing coffee and food at Kabana Cafe"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
