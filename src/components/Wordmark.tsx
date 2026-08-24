import React from 'react';

interface WordmarkProps {
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const Wordmark: React.FC<WordmarkProps> = ({
  theme = 'dark',
  size = 'md',
  showSubtitle = false,
  className = '',
}) => {
  const isLight = theme === 'light';

  // Size styling maps
  const sizeStyles = {
    sm: {
      title: 'text-[15px] tracking-[0.24em] font-semibold',
      sub: 'text-[9px] tracking-[0.26em] font-medium mt-[1px]',
      line: 'w-full h-[1px]',
      location: 'text-[9px] tracking-[0.2em]',
    },
    md: {
      title: 'text-[19px] sm:text-[21px] tracking-[0.22em] font-medium',
      sub: 'text-[11px] sm:text-[12px] tracking-[0.26em] font-light mt-[2px]',
      line: 'w-full h-[1px]',
      location: 'text-[10px] tracking-[0.16em]',
    },
    lg: {
      title: 'text-[28px] sm:text-[34px] tracking-[0.22em] font-normal',
      sub: 'text-[14px] sm:text-[17px] tracking-[0.26em] font-light mt-[3px]',
      line: 'w-full h-[1px]',
      location: 'text-[11px] sm:text-[12px] tracking-[0.18em]',
    },
    xl: {
      title: 'text-[36px] sm:text-[48px] md:text-[56px] tracking-[0.24em] font-light',
      sub: 'text-[18px] sm:text-[24px] md:text-[28px] tracking-[0.28em] font-light mt-[4px]',
      line: 'w-full h-[1px]',
      location: 'text-[12px] sm:text-[13px] tracking-[0.2em]',
    },
  };

  const current = sizeStyles[size];

  return (
    <div className={`inline-flex flex-col items-center select-none text-center ${className}`}>
      {/* Primary Wordmark matching the physical storefront sign */}
      <div className="flex flex-col items-center">
        <span
          className={`leading-none font-sans uppercase ${current.title} ${
            isLight ? 'text-white' : 'text-[#202020]'
          }`}
          style={{ letterSpacing: '0.22em' }}
        >
          KABANA
        </span>
        <div
          className={`${current.line} ${
            isLight ? 'bg-white/40' : 'bg-[#202020]/30'
          } my-[3px]`}
        />
        <span
          className={`leading-none font-sans uppercase ${current.sub} ${
            isLight ? 'text-white/90' : 'text-[#333333]'
          }`}
          style={{ letterSpacing: '0.28em' }}
        >
          CAFE
        </span>
      </div>

      {showSubtitle && (
        <span
          className={`mt-2 uppercase ${current.location} ${
            isLight ? 'text-[#D8D4CD]' : 'text-[#6F6B65]'
          }`}
        >
          NARRE WARREN
        </span>
      )}
    </div>
  );
};
