import React from 'react';
import { ArrowRight, MapPin, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/business';
import { Wordmark } from './Wordmark';

export const Storefront: React.FC = () => {
  return (
    <section id="visit" className="py-16 sm:py-24 lg:py-28 bg-[#F7F6F2] border-b border-[#E1DED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#6F6B65] block mb-3">
            Physical Location
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#202020] font-serif">
            COME TO KABANA.
          </h2>
          <p className="mt-3 text-base text-[#68645F] max-w-xl">
            Located in the Victor Crescent commercial precinct in Narre Warren, featuring modern architecture, floor-to-ceiling glass and outdoor seating.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Architectural Storefront Presentation (7/12) */}
          <div className="lg:col-span-7">
            <div className="relative group overflow-hidden rounded-[6px] border border-[#262626]/20 bg-[#1C1C1C] shadow-xs">
              
              {/* Storefront Architectural Graphic / Canvas Rendering */}
              <div className="relative bg-[#1C1C1C] overflow-hidden p-6 sm:p-10 text-white min-h-[340px] sm:min-h-[420px] flex flex-col justify-between">
                
                {/* Storefront Upper Structure / Glass Facade */}
                <div className="w-full bg-[#2A3439]/40 border-b border-white/10 rounded-t-[4px] p-4 relative overflow-hidden backdrop-blur-xs">
                  <div className="grid grid-cols-4 gap-2 opacity-40">
                    <div className="h-12 border-r border-white/20"></div>
                    <div className="h-12 border-r border-white/20"></div>
                    <div className="h-12 border-r border-white/20"></div>
                    <div className="h-12"></div>
                  </div>
                </div>

                {/* Primary Fascia Banner with KABANA CAFE Signage */}
                <div className="w-full my-6 py-8 sm:py-12 px-6 bg-[#262626] border-y-2 border-[#111111] shadow-2xl flex flex-col items-center justify-center relative">
                  <div className="absolute top-2 left-4 flex items-center space-x-1.5 opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-white/70">58 VICTOR CRES</span>
                  </div>
                  
                  {/* Clean white signage matching the physical storefront */}
                  <Wordmark size="lg" theme="light" />

                  <div className="mt-3 text-[10px] tracking-[0.26em] uppercase text-[#A7A29B] font-light">
                    NARRE WARREN • VICTORIA
                  </div>
                </div>

                {/* Lower Level: Glass Doors with Etched Bands & Concrete Stone Pillars */}
                <div className="grid grid-cols-12 gap-3 items-end">
                  {/* Left Stone Pillar */}
                  <div className="col-span-2 sm:col-span-2 h-28 bg-[#33312E] border border-white/10 rounded-[2px] p-2 flex flex-col justify-between">
                    <span className="text-[8px] uppercase tracking-wider text-white/50">Stone 01</span>
                    <div className="h-0.5 w-full bg-white/20"></div>
                  </div>

                  {/* Center Glass Entrance */}
                  <div className="col-span-8 sm:col-span-8 h-28 bg-[#202528]/80 border border-white/20 rounded-[2px] p-3 flex flex-col justify-between relative overflow-hidden">
                    <div className="w-full text-center py-1 bg-white/5 border-y border-white/10 text-[9px] tracking-[0.24em] text-white/70 uppercase">
                      KABANA CAFE • TRADING HOURS
                    </div>
                    <div className="flex justify-between items-end text-[9px] text-white/60">
                      <span>Mon–Thu: 7am–4pm</span>
                      <span>Fri: 7am–9pm</span>
                      <span>Sat–Sun: 8am–4pm</span>
                    </div>
                  </div>

                  {/* Right Stone Pillar */}
                  <div className="col-span-2 sm:col-span-2 h-28 bg-[#33312E] border border-white/10 rounded-[2px] p-2 flex flex-col justify-between">
                    <span className="text-[8px] uppercase tracking-wider text-white/50">Stone 02</span>
                    <div className="h-0.5 w-full bg-white/20"></div>
                  </div>
                </div>

              </div>

              {/* Architectural Caption */}
              <div className="p-4 bg-[#111111] text-white flex items-center justify-between text-xs">
                <span className="font-mono tracking-wider text-[#A7A29B] text-[11px] uppercase">
                  Kabana Cafe • Storefront Architecture
                </span>
                <span className="text-[11px] text-white/80">
                  58 Victor Cres, Narre Warren
                </span>
              </div>

            </div>
          </div>

          {/* Details beside it (5/12) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="mb-2">
              <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#626B59]">
                Find The Storefront
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#202020] mb-4">
              58 Victor Cres
              <br />
              Narre Warren VIC 3805
            </h3>

            <p className="text-base text-[#68645F] leading-relaxed mb-6">
              Just off the Monash Freeway (M1) and minutes from Westfield Fountain Gate. Enjoy relaxed indoor dining with floor-to-ceiling natural light or grab a coffee at our outdoor tables.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center text-xs text-[#202020] font-medium space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#626B59]" />
                <span>Plenty of free on-site precinct parking</span>
              </div>
              <div className="flex items-center text-xs text-[#202020] font-medium space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#626B59]" />
                <span>Full wheelchair and pram access</span>
              </div>
              <div className="flex items-center text-xs text-[#202020] font-medium space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#626B59]" />
                <span>Indoor &amp; covered outdoor alfresco seating</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <span>View On Map</span>
                <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </a>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=58+Victor+Cres+Narre+Warren+VIC+3805`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center text-xs"
              >
                <Navigation className="w-3.5 h-3.5 mr-1.5" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
