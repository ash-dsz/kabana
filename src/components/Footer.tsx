import React from 'react';
import { Wordmark } from './Wordmark';
import { businessInfo } from '../data/business';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white border-t border-white/10 py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Wordmark (5/12) */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <Wordmark size="md" theme="light" />
            <p className="text-xs text-[#A7A29B] leading-relaxed max-w-sm">
              Modern Melbourne café and authentic Afghan cuisine in Narre Warren. Specialty coffee, breakfast classics, slow-cooked palow and fresh flame-grilled kebabs.
            </p>
            <div className="pt-2 text-[11px] text-[#A7A29B] tracking-wider uppercase">
              100% Halal Certified Kitchen
            </div>
          </div>

          {/* Quick Links (3/12) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8D4CD]">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Full Menu
                </a>
              </li>
              <li>
                <a href="#afghan-kitchens" className="hover:text-white transition-colors">
                  Afghan Specialties
                </a>
              </li>
              <li>
                <a href="#breakfast" className="hover:text-white transition-colors">
                  Breakfast &amp; Brunch
                </a>
              </li>
              <li>
                <a href="#coffee" className="hover:text-white transition-colors">
                  Coffee &amp; Chai
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-white transition-colors">
                  Visit &amp; Storefront
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Contact (4/12) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-white mb-4">
              Location &amp; Contact
            </h4>
            <div className="space-y-2 text-xs text-[#D8D4CD]">
              <p className="text-white font-medium">
                {businessInfo.address.full}
              </p>
              <p>
                Phone:{' '}
                <a href={`tel:${businessInfo.phone}`} className="hover:text-white underline">
                  {businessInfo.phoneDisplay}
                </a>
              </p>
              <p className="text-[#A7A29B] pt-1">
                Mon–Thu: 7am–4pm • Fri: 7am–9pm • Sat–Sun: 8am–4pm
              </p>
              <div className="pt-2">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-wider uppercase text-[#B49A62] hover:text-white transition-colors underline"
                >
                  Google Maps Directions →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6F6B65] gap-4">
          <div>
            © {new Date().getFullYear()} Kabana Cafe Narre Warren. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center text-[11px] uppercase tracking-wider text-[#A7A29B] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
