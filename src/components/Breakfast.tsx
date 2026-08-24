import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { images } from '../data/images';
import { menuItems, MenuItem } from '../data/menu';

interface BreakfastProps {
  onSelectDish: (dish: MenuItem) => void;
}

export const Breakfast: React.FC<BreakfastProps> = ({ onSelectDish }) => {
  const breakfastItems = menuItems.filter((item) => item.category === 'breakfast_brunch');

  return (
    <section id="breakfast" className="py-16 sm:py-24 lg:py-28 bg-[#F7F6F2] border-b border-[#E1DED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#6F6B65] block mb-3">
            Morning &amp; Midday
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#202020] font-serif">
            START HERE.
          </h2>
          <p className="mt-3 text-base text-[#68645F] max-w-xl">
            From 7:00 AM weekdays, serving specialty Melbourne espresso, free-range poached eggs, and wholesome sourdough dishes.
          </p>
        </div>

        {/* Layout: One large food image (Left) + Clean Menu List (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Large Breakfast Visual (6/12) */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden rounded-[6px] border border-[#E1DED8] bg-[#E1DED8]/20">
              <div className="aspect-4/3 sm:aspect-1/1 w-full overflow-hidden">
                <img
                  src={images.breakfastBenny.url}
                  alt="Melbourne Bacon Benny with poached eggs and hollandaise"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-[#E1DED8]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#6F6B65]">
                      Breakfast Highlight
                    </span>
                    <h4 className="text-lg font-serif text-[#202020]">
                      Bacon Benny on Brioche
                    </h4>
                  </div>
                  <span className="text-sm font-medium text-[#262626]">
                    $22.50
                  </span>
                </div>
                <p className="text-xs text-[#68645F] mt-1">
                  Poached free-range eggs, crispy smoked bacon, house citrus hollandaise &amp; baby spinach.
                </p>
              </div>
            </div>
          </div>

          {/* Clean Menu List beside it (6/12) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            <div className="divide-y divide-[#E1DED8]">
              {breakfastItems.map((dish) => (
                <div
                  key={dish.id}
                  onClick={() => onSelectDish(dish)}
                  className="py-4 first:pt-0 last:pb-0 group cursor-pointer transition-colors"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-base sm:text-lg font-serif font-medium text-[#202020] group-hover:text-[#626B59] transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-sm font-medium text-[#202020] ml-4 shrink-0">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#68645F] mt-1 leading-relaxed">
                    {dish.description}
                  </p>
                  {dish.dietary && (
                    <div className="flex gap-2 mt-2">
                      {dish.dietary.map((d) => (
                        <span
                          key={d}
                          className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 bg-[#E1DED8]/60 text-[#6F6B65] rounded-[2px]"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-[#E1DED8] flex items-center justify-between">
              <a
                href="#menu"
                className="btn-secondary group inline-flex items-center text-xs"
              >
                <span>View Full Breakfast &amp; Brunch Menu</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
