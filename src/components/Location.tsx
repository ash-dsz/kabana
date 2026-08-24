import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Car, Shield } from 'lucide-react';
import { businessInfo } from '../data/business';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#F7F6F2] border-b border-[#E1DED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#6F6B65] block mb-3">
            Hours &amp; Location
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#202020] font-serif">
            FIND US.
          </h2>
          <p className="mt-3 text-base text-[#68645F] max-w-xl">
            We look forward to welcoming you at 58 Victor Crescent in Narre Warren.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Details & Hours (5/12) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Address */}
            <div className="p-6 bg-white border border-[#E1DED8] rounded-[6px]">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-[#626B59] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-lg font-serif text-[#202020]">
                    Kabana Cafe Narre Warren
                  </h3>
                  <p className="text-sm text-[#68645F] mt-1">
                    58 Victor Cres
                    <br />
                    Narre Warren VIC 3805
                  </p>
                  <span className="text-xs text-[#A7A29B] mt-1 block">
                    (Close to Westfield Fountain Gate &amp; M1)
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1DED8] flex flex-wrap gap-3">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="btn-primary text-xs inline-flex items-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  <span>Call {businessInfo.phoneDisplay}</span>
                </a>

                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs inline-flex items-center"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 ml-1.5" />
                </a>
              </div>
            </div>

            {/* Trading Hours */}
            <div className="p-6 bg-white border border-[#E1DED8] rounded-[6px]">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-4 h-4 text-[#626B59]" />
                <h3 className="text-sm font-semibold tracking-wider uppercase text-[#202020]">
                  Trading Hours
                </h3>
              </div>

              <div className="divide-y divide-[#E1DED8]">
                {businessInfo.hours.map((h, idx) => (
                  <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex justify-between items-center text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-[#202020] block">
                        {h.period}
                      </span>
                      {h.note && (
                        <span className="text-[11px] text-[#A7A29B] block">
                          {h.note}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[#202020] ml-4 shrink-0 font-medium">
                      {h.times}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E1DED8] text-[11px] text-[#A7A29B]">
                Closed on Good Friday &amp; Christmas Day.
              </div>
            </div>

          </div>

          {/* Map Representation (7/12) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[6px] border border-[#E1DED8] bg-white overflow-hidden shadow-xs">
              
              {/* Map Canvas Visual */}
              <div className="h-96 sm:h-[460px] w-full bg-[#EAE8E2] relative flex flex-col items-center justify-center p-6 text-center">
                
                {/* Visual Street Grid Representation */}
                <div className="absolute inset-0 opacity-40">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(#A7A29B 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}></div>
                </div>

                {/* Road overlays */}
                <div className="absolute top-1/2 left-0 right-0 h-10 bg-[#D8D4CD]/80 -translate-y-1/2 border-y border-[#A7A29B]/40 flex items-center justify-center">
                  <span className="text-[11px] font-mono tracking-widest text-[#6F6B65] uppercase">
                    VICTOR CRESCENT (NARRE WARREN)
                  </span>
                </div>

                <div className="absolute top-0 bottom-0 right-1/4 w-12 bg-[#D8D4CD]/60 border-x border-[#A7A29B]/40 flex items-center justify-center">
                  <span className="text-[9px] font-mono tracking-widest text-[#6F6B65] uppercase rotate-90 whitespace-nowrap">
                    MONASH FWY (M1) ACCESS
                  </span>
                </div>

                {/* Pin Card */}
                <div className="relative z-10 bg-[#262626] text-white p-6 rounded-[6px] shadow-lg max-w-sm border border-white/20">
                  <div className="w-10 h-10 rounded-full bg-[#626B59] flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-serif mb-1">
                    Kabana Cafe
                  </h4>
                  <p className="text-xs text-[#D8D4CD] mb-4">
                    58 Victor Cres, Narre Warren VIC 3805
                  </p>
                  <a
                    href={businessInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-light text-xs inline-flex items-center"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-1.5" />
                  </a>
                </div>

              </div>

              {/* Precinct Perks */}
              <div className="p-4 bg-[#F7F6F2] border-t border-[#E1DED8] flex flex-wrap items-center justify-between text-xs text-[#6F6B65] gap-3">
                <span className="flex items-center">
                  <Car className="w-4 h-4 mr-1.5 text-[#626B59]" /> Free On-Site Parking Available
                </span>
                <span className="flex items-center">
                  <Shield className="w-4 h-4 mr-1.5 text-[#626B59]" /> 100% Halal Kitchen
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
