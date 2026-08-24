import React from 'react';
import { UtensilsCrossed, Phone, Navigation } from 'lucide-react';
import { businessInfo } from '../data/business';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1C1C1C] border-t border-white/10 px-4 py-2.5 sm:hidden flex items-center justify-between gap-3 shadow-lg">
      <a
        href="#menu"
        className="flex-1 h-10 bg-white text-[#202020] text-xs font-semibold tracking-wider uppercase rounded-[4px] flex items-center justify-center space-x-1.5 active:scale-98 transition-transform"
      >
        <UtensilsCrossed className="w-3.5 h-3.5" />
        <span>View Menu</span>
      </a>

      <a
        href={`tel:${businessInfo.phone}`}
        className="h-10 px-4 bg-[#262626] text-white text-xs font-medium tracking-wider uppercase rounded-[4px] border border-white/10 flex items-center justify-center active:scale-98 transition-transform"
        aria-label="Call Kabana Cafe"
      >
        <Phone className="w-4 h-4" />
      </a>

      <a
        href={businessInfo.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 px-4 bg-[#262626] text-white text-xs font-medium tracking-wider uppercase rounded-[4px] border border-white/10 flex items-center justify-center active:scale-98 transition-transform"
        aria-label="Directions to Kabana Cafe"
      >
        <Navigation className="w-4 h-4" />
      </a>
    </div>
  );
};
