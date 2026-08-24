import React, { useState, useEffect } from 'react';
import { Wordmark } from './Wordmark';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { businessInfo } from '../data/business';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Our Food', href: '#afghan-kitchens' },
    { label: 'Breakfast', href: '#breakfast' },
    { label: 'Coffee', href: '#coffee' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          scrolled
            ? 'bg-[#F7F6F2]/95 backdrop-blur-sm border-b border-[#E3E0DA]'
            : 'bg-[#F7F6F2] border-b border-[#E3E0DA]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center group py-1"
            aria-label="Kabana Cafe Homepage"
          >
            <Wordmark size="md" theme="dark" />
          </a>

          {/* Zone 2: Navigation Links (single-line, 1-2 words) */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] lg:text-[13px] font-medium tracking-[0.12em] text-[#202020] hover:text-[#111111] uppercase transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a
              href={`tel:${businessInfo.phone}`}
              className="hidden lg:inline-flex items-center text-[12px] tracking-[0.08em] font-medium text-[#6F6B65] hover:text-[#202020] transition-colors whitespace-nowrap"
              title="Call Kabana Cafe"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              <span>{businessInfo.phoneDisplay}</span>
            </a>

            <a
              href="#menu"
              className="btn-primary text-xs"
            >
              View Menu
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#202020] rounded hover:bg-[#E1DED8]/50 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-18 sm:top-20 left-0 right-0 bg-[#F7F6F2] border-b border-[#E1DED8] px-6 py-8 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-5 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base tracking-[0.14em] font-medium text-[#202020] uppercase py-1 hover:text-[#000]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#E1DED8] flex flex-col items-center space-y-3">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="inline-flex items-center text-sm font-medium text-[#6F6B65]"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {businessInfo.phoneDisplay}
                </a>
                <span className="text-xs tracking-wider text-[#6F6B65] uppercase">
                  58 Victor Cres, Narre Warren
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
