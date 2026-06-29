import React from 'react';

interface PrestigeLogoProps {
  className?: string;
  showText?: boolean;
  textPosition?: 'right' | 'bottom';
  variant?: 'light' | 'dark';
}

export default function PrestigeLogo({
  className = '',
  showText = true,
  textPosition = 'right',
  variant = 'dark',
}: PrestigeLogoProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 ${textPosition === 'bottom' ? 'flex-col text-center' : 'flex-row'}`}>
      {/* Simple, bold PP text */}
      <span
        className={`font-serif font-extrabold tracking-tighter text-3xl md:text-4xl select-none leading-none bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent`}
      >
        PP
      </span>

      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif text-lg md:text-xl font-bold tracking-widest leading-none ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            PRESTIGE
          </span>
          <span
            className={`font-sans text-[9px] md:text-[10px] font-semibold tracking-[0.25em] mt-1 uppercase ${
              isDark ? 'text-amber-400' : 'text-amber-600'
            }`}
          >
            Plastering & Rendering
          </span>
        </div>
      )}
    </div>
  );
}

