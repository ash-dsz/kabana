import React from 'react';
import { reviewsData } from '../data/reviews';
import { Star, CheckCircle } from 'lucide-react';
import { businessInfo } from '../data/business';

export const Reviews: React.FC = () => {
  const mainReview = reviewsData[0];
  const supportingReviews = reviewsData.slice(1);

  return (
    <section className="py-16 sm:py-24 bg-[#1C1C1C] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Understated Header with Real Google Metrics */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#A7A29B] block mb-2">
              Guest Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white font-serif">
              WORD IN THE NEIGHBOURHOOD
            </h2>
          </div>

          {/* Understated Rating Badge */}
          <div className="mt-4 md:mt-0 flex items-center space-x-3 bg-white/5 px-4 py-2.5 rounded-[4px] border border-white/10">
            <div className="flex items-center text-[#B49A62]">
              <Star className="w-4 h-4 fill-current" />
              <span className="ml-1.5 font-sans font-semibold text-white text-base">
                {businessInfo.googleRating}
              </span>
            </div>
            <span className="text-white/30">•</span>
            <div className="text-xs text-[#D8D4CD] uppercase tracking-wider font-medium">
              <span>{businessInfo.reviewCount}+ Reviews on Google</span>
            </div>
          </div>
        </div>

        {/* Reviews Layout: 1 Large Feature Review (Left) + 2 Supporting (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Review (7/12) */}
          <div className="lg:col-span-7 bg-[#262626] p-8 sm:p-10 rounded-[6px] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-1 text-[#B49A62] mb-6">
                {[...Array(mainReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl font-serif text-white leading-relaxed mb-6">
                &ldquo;{mainReview.text}&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="block text-sm font-medium text-white">
                  {mainReview.author}
                </span>
                <span className="text-xs text-[#A7A29B]">
                  Ordered: {mainReview.highlightDish}
                </span>
              </div>
              <div className="flex items-center text-[11px] text-[#A7A29B]">
                <CheckCircle className="w-3.5 h-3.5 text-[#626B59] mr-1" />
                <span>{mainReview.source}</span>
              </div>
            </div>
          </div>

          {/* 2 Supporting Reviews (5/12) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {supportingReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#262626]/70 p-6 rounded-[6px] border border-white/10 flex flex-col justify-between flex-1"
              >
                <div>
                  <div className="flex items-center space-x-1 text-[#B49A62] mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#D8D4CD] leading-relaxed mb-4">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-medium text-white">
                    {rev.author}
                  </span>
                  <span className="text-[#A7A29B] text-[11px]">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
