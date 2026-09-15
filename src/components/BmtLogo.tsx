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

  // Brand palette taken from the supplied BMT Al-Muhajirin logo.
  const deepGreen = '#0A6B35';
  const darkGreen = '#075126';
  const brightGreen = '#8BCB35';
  const lime = '#B4D334';
  const gold = '#E0A51A';
  const textPrimary = isDark ? '#FFFFFF' : darkGreen;

  const Emblem = ({ size = 44 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-sm"
      aria-label="Logo Lambang BMT Al-Muhajirin"
    >
      <path d="M50 5 L93 50 L50 95 L7 50 Z" fill={brightGreen} stroke={gold} strokeWidth="2" />
      <path d="M50 12 L86 50 L50 88 L14 50 Z" fill={deepGreen} stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="50" cy="50" r="30" fill={darkGreen} stroke={gold} strokeWidth="2" />
      <path d="M33 66 V38 H42 V53 L50 44 L58 53 V38 H67 V66 H58 V54 L50 63 L42 54 V66 Z" fill="#FFFFFF" />
      <path d="M43 31 L50 22 L57 31" stroke={lime} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="73" r="3" fill={gold} />
    </svg>
  );

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <Emblem size={46} />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Emblem size={variant === 'compact' ? 48 : 52} />
      <div className="flex flex-col text-left leading-none">
        <span
          className="font-serif font-bold tracking-tight text-[19px] sm:text-[21px]"
          style={{ color: textPrimary }}
        >
          BMT AL-MUHAJIRIN
        </span>
        <span
          className="mt-1 text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase"
          style={{ color: isDark ? '#B4D334' : deepGreen }}
        >
          KOPERASI SIMPAN PINJAM SYARIAH
        </span>
        {showTagline && (
          <span
            className="mt-1 text-[9px] italic font-serif tracking-wide"
            style={{ color: isDark ? '#F4C542' : gold }}
          >
            Berjuang Bersama Ummat Keluar Dari Riba
          </span>
        )}
      </div>
    </div>
  );
}
