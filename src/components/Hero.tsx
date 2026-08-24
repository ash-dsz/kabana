import React from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { images } from '../data/images';
import { businessInfo } from '../data/business';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 lg:pb-24 overflow-hidden border-b border-[#E1DED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Content Area (Left on Desktop, 5-column or 5/12) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Small Architectural Label */}
            <div className="flex items-center space-x-2.5 mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.16em] uppercase text-[#6F6B65]">
                {businessInfo.name}
              </span>
              <span className="text-[#A7A29B]">•</span>
              <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.16em] uppercase text-[#6F6B65]">
                {businessInfo.subname}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-normal tracking-tight text-[#202020] leading-[1.12] mb-5 sm:mb-6 font-serif">
              AFGHAN FLAVOURS.
              <br />
              <span className="font-light text-[#262626]">MELBOURNE MORNINGS.</span>
            </h1>

            {/* Plain human supporting copy */}
            <p className="text-base sm:text-lg text-[#68645F] leading-relaxed mb-8 max-w-lg">
              {businessInfo.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
              <a
                href="#menu"
                className="btn-primary"
              >
                View Menu
              </a>

              <a
                href="#visit"
                className="btn-secondary group inline-flex items-center"
              >
                <span>Visit Us</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Practical Quick Glance Info */}
            <div className="pt-6 border-t border-[#E1DED8] grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#626B59] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-[#202020]">
                    Location
                  </span>
                  <span className="text-xs text-[#68645F] leading-tight block">
                    58 Victor Cres, Narre Warren
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#626B59] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-[#202020]">
                    Trading Hours
                  </span>
                  <span className="text-xs text-[#68645F] leading-tight block">
                    Mon–Thu 7am–4pm • Fri 7am–9pm
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Large Hero Food Image (~60% width on Desktop, 7/12) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group overflow-hidden rounded-[6px] bg-[#E1DED8]/40 border border-[#E1DED8]">
              <div className="aspect-4/3 sm:aspect-16/10 lg:aspect-16/11 w-full overflow-hidden">
                <img
                  src={images.hero.url}
                  alt={images.hero.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                />
              </div>

              {/* Discreet photo caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 sm:p-5 flex items-end justify-between">
                <div className="text-white">
                  <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#D8D4CD] block mb-0.5">
                    Signature Dish
                  </span>
                  <p className="text-sm font-medium text-white/95">
                    Qabuli Palow with slow-cooked spiced lamb shank
                  </p>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-medium tracking-wider text-white/80 uppercase px-2.5 py-1 bg-black/40 backdrop-blur-xs rounded-[3px] border border-white/10">
                  Halal Certified
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
