interface BmtLogoProps {
  variant?: 'full' | 'compact' | 'emblem';
  theme?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export function BmtLogo({
  variant = 'full',
  theme = 'light',
  className = '',
  showTagline = false,
}: BmtLogoProps) {
  const isDark = theme === 'dark';
  const logoSrc = '/BMT01/uploads/logo/logo%20BMT.png';

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={logoSrc}
          alt="Logo BMT Al-Muhajirin"
          className="h-12 w-12 object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Logo BMT Al-Muhajirin"
        className={`${variant === 'compact' ? 'h-12 sm:h-[52px]' : 'h-14 sm:h-16'} max-w-[240px] object-contain`}
      />
      {showTagline && (
        <span className={`ml-3 text-[9px] italic font-serif tracking-wide ${isDark ? 'text-[#F4C542]' : 'text-[#E0A51A]'}`}>
          Berjuang Bersama Ummat Keluar Dari Riba
        </span>
      )}
    </div>
  );
}
