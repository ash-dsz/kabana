import React from 'react';
import { images } from '../data/images';
import { Coffee as CoffeeIcon, Sparkles } from 'lucide-react';

export const Coffee: React.FC = () => {
  return (
    <section id="coffee" className="py-16 sm:py-24 bg-[#1C1C1C] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Area (Left on Desktop, 5/12) */}
          <div className="lg:col-span-5">
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#A7A29B] block mb-3">
              Cafe Rituals
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mb-6 font-serif">
              COFFEE. CHAI.
              <br />
              TAKE YOUR TIME.
            </h2>

            <p className="text-base text-[#D8D4CD] leading-relaxed mb-6">
              Melbourne espresso roasted to perfection, poured alongside slow-brewed Afghan chai steeped with cracked green cardamom and saffron strands.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start space-x-3">
                <CoffeeIcon className="w-4 h-4 text-[#B49A62] mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white">
                    Melbourne Specialty Coffee
                  </h4>
                  <p className="text-xs text-[#A7A29B] mt-0.5">
                    Espresso, Flat White, Batch Brew, Cold Drip, Oat &amp; Almond milk options.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Sparkles className="w-4 h-4 text-[#B49A62] mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white">
                    Traditional Cardamom &amp; Saffron Chai
                  </h4>
                  <p className="text-xs text-[#A7A29B] mt-0.5">
                    Infused with whole fragrant spices, served piping hot in traditional glassware.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#menu"
                className="btn-secondary-light text-xs inline-flex items-center"
              >
                Explore Drinks Menu →
              </a>
            </div>

          </div>

          {/* Atmospheric Images (Right on Desktop, 7/12) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative group overflow-hidden rounded-[6px] border border-white/10 aspect-4/5 bg-[#262626]">
              <img
                src={images.coffeeFlatWhite.url}
                alt="Melbourne Flat White with latte art"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 inset-x-3 bg-black/60 backdrop-blur-xs p-2.5 rounded-[3px] text-center">
                <span className="text-[11px] font-medium tracking-wider uppercase text-white/90">
                  Melbourne Espresso
                </span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-[6px] border border-white/10 aspect-4/5 bg-[#262626] mt-6 sm:mt-10">
              <img
                src={images.afghanChai.url}
                alt="Afghan Cardamom and Saffron Chai"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 inset-x-3 bg-black/60 backdrop-blur-xs p-2.5 rounded-[3px] text-center">
                <span className="text-[11px] font-medium tracking-wider uppercase text-white/90">
                  Cardamom Saffron Chai
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
