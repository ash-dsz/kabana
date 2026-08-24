import React, { useState, useMemo } from 'react';
import { menuCategories, menuItems, MenuItem, MenuCategory } from '../data/menu';
import { Search, Filter, Sparkles, Utensils } from 'lucide-react';

interface MenuProps {
  onSelectDish: (dish: MenuItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ onSelectDish }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter !== 'all') {
        if (!item.dietary || !item.dietary.includes(dietaryFilter as any)) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        return matchesName || matchesDesc;
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-24 lg:py-28 bg-[#F7F6F2] border-b border-[#E1DED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#6F6B65] block mb-2">
            Kabana Cafe
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#202020] font-serif">
            OUR MENU
          </h2>
          <p className="mt-3 text-base text-[#68645F]">
            From fresh morning brunch and specialty espresso to slow-cooked Afghan banquet dishes and flame-grilled kebabs.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="mb-10 space-y-4">
          
          {/* Horizontal Category Navigation */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E1DED8]">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all whitespace-nowrap shrink-0 rounded-[4px] ${
                activeCategory === 'all'
                  ? 'bg-[#262626] text-white shadow-xs'
                  : 'text-[#6F6B65] hover:text-[#202020] hover:bg-[#E1DED8]/40'
              }`}
            >
              All Items
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all whitespace-nowrap shrink-0 rounded-[4px] ${
                  activeCategory === cat.id
                    ? 'bg-[#262626] text-white shadow-xs'
                    : 'text-[#6F6B65] hover:text-[#202020] hover:bg-[#E1DED8]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search and Dietary Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            
            {/* Dietary quick filter */}
            <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto">
              <span className="text-[11px] font-medium uppercase tracking-wider text-[#A7A29B] mr-1 hidden sm:inline">
                Dietary:
              </span>
              {['all', 'Halal', 'GF', 'V', 'DF'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setDietaryFilter(tag)}
                  className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-medium rounded-[3px] transition-colors ${
                    dietaryFilter === tag
                      ? 'bg-[#626B59] text-white'
                      : 'bg-[#E1DED8]/50 text-[#6F6B65] hover:bg-[#E1DED8]'
                  }`}
                >
                  {tag === 'all' ? 'Any' : tag}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#A7A29B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dish, spice, or coffee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-white border border-[#E1DED8] rounded-[4px] text-[#202020] placeholder-[#A7A29B] focus:outline-hidden focus:border-[#262626] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A7A29B] hover:text-[#202020]"
                >
                  Clear
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Traditional Editorial Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectDish(item)}
                className="group cursor-pointer pb-6 border-b border-[#E1DED8] hover:border-[#262626] transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Top Line: Item Name and Price */}
                  <div className="flex items-baseline justify-between mb-1.5">
                    <h3 className="text-lg sm:text-xl font-serif font-normal text-[#202020] group-hover:text-[#626B59] transition-colors flex items-center gap-2">
                      <span>{item.name}</span>
                      {item.isSignature && (
                        <span className="text-[10px] uppercase font-sans tracking-widest px-1.5 py-0.5 bg-[#B49A62]/20 text-[#6F6B65] border border-[#B49A62]/30 rounded-[2px]">
                          Signature
                        </span>
                      )}
                    </h3>
                    <span className="text-sm font-medium text-[#202020] ml-4 shrink-0 font-sans">
                      {item.price || 'Market'}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Dietary Tags & Serving Hours */}
                <div className="mt-3 flex items-center justify-between text-[11px] text-[#6F6B65]">
                  <div className="flex items-center space-x-1.5">
                    {item.dietary?.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 bg-[#E1DED8]/60 rounded-[2px] font-medium uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.servingTime && (
                    <span className="text-[11px] tracking-wider text-[#A7A29B]">
                      {item.servingTime}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-[#E1DED8] rounded-[6px]">
            <Utensils className="w-8 h-8 text-[#A7A29B] mx-auto mb-3" />
            <h3 className="text-lg font-serif text-[#202020]">
              No dishes found
            </h3>
            <p className="text-xs text-[#68645F] mt-1">
              Try adjusting your search terms or dietary filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-4 text-xs font-medium uppercase tracking-wider text-[#262626] underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Note on Dietary and Takeaway */}
        <div className="mt-14 p-6 bg-white border border-[#E1DED8] rounded-[6px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68645F]">
          <div>
            <span className="font-semibold text-[#202020] uppercase tracking-wider block sm:inline mr-2">
              Dietary &amp; Allergies:
            </span>
            <span>All our meats are 100% Halal certified. Please notify our team of any severe allergies or dietary preferences when ordering.</span>
          </div>
          <a
            href={`tel:${menuItems[0] ? '0387903218' : ''}`}
            className="btn-primary text-xs shrink-0"
          >
            Order Takeaway
          </a>
        </div>

      </div>
    </section>
  );
};
