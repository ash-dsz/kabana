import React from 'react';
import { MenuItem } from '../data/menu';
import { X, Clock, ShieldCheck, Utensils } from 'lucide-react';
import { businessInfo } from '../data/business';

interface DishModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F6F2] text-[#202020] rounded-[6px] max-w-lg w-full overflow-hidden border border-[#E1DED8] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Dish Image if available */}
        {dish.image && (
          <div className="relative aspect-16/9 w-full overflow-hidden bg-[#262626]">
            <img
              src={dish.image}
              alt={dish.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {dish.isSignature && (
              <span className="absolute bottom-3 left-3 text-[10px] tracking-widest font-semibold uppercase px-2 py-1 bg-black/75 text-[#D8D4CD] rounded-[2px] backdrop-blur-xs">
                Signature House Dish
              </span>
            )}
          </div>
        )}

        <div className="p-6">
          {/* Category & Price */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6F6B65]">
              {dish.category.replace('_', ' ')}
            </span>
            <span className="text-base font-semibold text-[#202020] font-sans">
              {dish.price || 'Market Price'}
            </span>
          </div>

          {/* Dish Name */}
          <h3 className="text-2xl font-serif font-normal text-[#202020] mb-3">
            {dish.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#68645F] leading-relaxed mb-4">
            {dish.description}
          </p>

          {/* Additional details */}
          {dish.details && (
            <div className="mb-4 p-3 bg-white border border-[#E1DED8] rounded-[4px] text-xs text-[#6F6B65] leading-relaxed">
              <span className="font-semibold text-[#202020] block mb-1">Kitchen Note:</span>
              {dish.details}
            </div>
          )}

          {/* Dietary & Service Times */}
          <div className="pt-4 border-t border-[#E1DED8] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-1.5">
              {dish.dietary?.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-[#262626] text-white text-[10px] font-medium uppercase tracking-wider rounded-[2px]"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[#6F6B65] text-[11px] ml-1">
                • 100% Halal
              </span>
            </div>

            {dish.servingTime && (
              <div className="flex items-center text-[11px] text-[#6F6B65]">
                <Clock className="w-3.5 h-3.5 mr-1 text-[#626B59]" />
                <span>{dish.servingTime}</span>
              </div>
            )}
          </div>

          {/* Order / Inquire Button */}
          <div className="mt-6 pt-4 border-t border-[#E1DED8] flex gap-3">
            <a
              href={`tel:${businessInfo.phone}`}
              className="btn-primary w-full text-xs text-center"
            >
              Call To Order Takeaway ({businessInfo.phoneDisplay})
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
