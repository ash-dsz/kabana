import React, { useState } from 'react';
import { ArrowRight, Info, Sparkles } from 'lucide-react';
import { images } from '../data/images';
import { menuItems, MenuItem } from '../data/menu';

interface AfghanSpecialtiesProps {
  onSelectDish: (dish: MenuItem) => void;
}

export const AfghanSpecialties: React.FC<AfghanSpecialtiesProps> = ({ onSelectDish }) => {
  const qabuli = menuItems.find((item) => item.id === 'qabuli-palow')!;
  const manto = menuItems.find((item) => item.id === 'manto-main')!;
  const chapli = menuItems.find((item) => item.id === 'chapli-kebab-plate')!;
  const tika = menuItems.find((item) => item.id === 'tika-lamb-kebab')!;

  return (
    <section
      id="afghan-kitchens"
      className="py-16 sm:py-24 lg:py-28 bg-[#1C1C1C] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#A7A29B] block mb-3">
            Traditional Afghan Cuisine
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white font-serif">
            FROM AFGHAN KITCHENS.
          </h2>
          <p className="mt-3 text-base text-[#D8D4CD]/80 max-w-xl">
            Slow-cooked meats, whole spices, hand-pinched dumplings and flame-grilled skewers prepared according to timeless family recipes.
          </p>
        </div>

        {/* Editorial Feature 1: Large Showcase for Qabuli Palow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 pb-16 border-b border-white/10">
          
          {/* Large Image (7/12) */}
          <div className="lg:col-span-7">
            <div
              onClick={() => onSelectDish(qabuli)}
              className="group relative cursor-pointer overflow-hidden rounded-[6px] border border-white/10 bg-[#262626]"
            >
              <div className="aspect-16/10 sm:aspect-16/9 w-full overflow-hidden">
                <img
                  src={images.qabuliPalow.url}
                  alt={qabuli.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase bg-[#111111]/80 text-white backdrop-blur-xs rounded-[3px] border border-white/15">
                  Signature Dish
                </span>
              </div>
            </div>
          </div>

          {/* Text beside it (5/12) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#B49A62]">
                National Heritage
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-[#D8D4CD]">{qabuli.price}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-normal text-white mb-4 font-serif">
              {qabuli.name}
            </h3>

            <p className="text-base text-[#D8D4CD] leading-relaxed mb-6">
              Aromatic sella basmati rice slowly braised with whole cardamom and cumin, topped with fork-tender spiced lamb shank, caramelized carrots, and sweet raisins.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {qabuli.dietary?.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wider px-2 py-0.5 bg-white/10 text-white/90 rounded-[2px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <button
                type="button"
                onClick={() => onSelectDish(qabuli)}
                className="btn-secondary-light group inline-flex items-center text-xs"
              >
                <span>Explore Dish Details</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#menu"
                className="text-xs tracking-wider uppercase text-[#A7A29B] hover:text-white transition-colors"
              >
                View Full Menu
              </a>
            </div>
          </div>

        </div>

        {/* Secondary Showcase: Triad of Manto, Chapli Kebab, and Tika Kebab */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Manto */}
          <div
            onClick={() => onSelectDish(manto)}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative overflow-hidden rounded-[6px] border border-white/10 bg-[#262626] mb-5 aspect-4/3">
              <img
                src={images.manto.url}
                alt={manto.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-medium tracking-wide uppercase px-2 py-1 bg-black/70 text-white rounded-[2px] backdrop-blur-xs">
                  {manto.price}
                </span>
              </div>
            </div>
            <div className="flex items-baseline justify-between mb-1.5">
              <h4 className="text-xl font-normal text-white font-serif group-hover:text-[#D8D4CD] transition-colors">
                Manto Dumplings
              </h4>
            </div>
            <p className="text-sm text-[#A7A29B] leading-relaxed mb-3">
              Steamed pastry parcels filled with spiced beef, layered with yellow split pea sauce and garlic chaka yogurt.
            </p>
            <span className="text-xs font-medium tracking-wider uppercase text-[#D8D4CD] inline-flex items-center group-hover:translate-x-1 transition-transform">
              View Ingredients <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </div>

          {/* Chapli Kebab */}
          <div
            onClick={() => onSelectDish(chapli)}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative overflow-hidden rounded-[6px] border border-white/10 bg-[#262626] mb-5 aspect-4/3">
              <img
                src={images.chapliKebab.url}
                alt={chapli.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-medium tracking-wide uppercase px-2 py-1 bg-black/70 text-white rounded-[2px] backdrop-blur-xs">
                  {chapli.price}
                </span>
              </div>
            </div>
            <div className="flex items-baseline justify-between mb-1.5">
              <h4 className="text-xl font-normal text-white font-serif group-hover:text-[#D8D4CD] transition-colors">
                Chapli Kebab
              </h4>
            </div>
            <p className="text-sm text-[#A7A29B] leading-relaxed mb-3">
              Pan-fried beef patties packed with crushed coriander, pomegranate molasses and green chillies.
            </p>
            <span className="text-xs font-medium tracking-wider uppercase text-[#D8D4CD] inline-flex items-center group-hover:translate-x-1 transition-transform">
              View Ingredients <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </div>

          {/* Tika Kebab */}
          <div
            onClick={() => onSelectDish(tika)}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative overflow-hidden rounded-[6px] border border-white/10 bg-[#262626] mb-5 aspect-4/3">
              <img
                src={images.tikaKebab.url}
                alt={tika.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-medium tracking-wide uppercase px-2 py-1 bg-black/70 text-white rounded-[2px] backdrop-blur-xs">
                  {tika.price}
                </span>
              </div>
            </div>
            <div className="flex items-baseline justify-between mb-1.5">
              <h4 className="text-xl font-normal text-white font-serif group-hover:text-[#D8D4CD] transition-colors">
                Lamb Tika Skewers
              </h4>
            </div>
            <p className="text-sm text-[#A7A29B] leading-relaxed mb-3">
              Marinated tender Australian lamb backstrap skewers flame-grilled over open coals with sumac.
            </p>
            <span className="text-xs font-medium tracking-wider uppercase text-[#D8D4CD] inline-flex items-center group-hover:translate-x-1 transition-transform">
              View Ingredients <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
