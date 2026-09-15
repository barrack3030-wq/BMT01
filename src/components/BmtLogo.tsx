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

  // Colors based on brand guidelines
  const deepGreen = '#0B3D2E';
  const institutionalGreen = '#145A42';
  const brightGreen = '#1D7656';
  const gold = '#B69A5A';
  const textPrimary = isDark ? '#FFFFFF' : '#0B3D2E';
  const textSecondary = isDark ? '#F7F6F1/80' : '#6B746F';
  const emblemBg = isDark ? '#FFFFFF' : '#0B3D2E';
  const emblemFg = isDark ? '#0B3D2E' : '#FFFFFF';

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
      {/* Outer 8-Point Islamic Star (Rub el Hizb) Background */}
      <g transform="rotate(0 50 50)">
        <rect
          x="12"
          y="12"
          width="76"
          height="76"
          rx="6"
          fill={deepGreen}
          stroke={gold}
          strokeWidth="2"
        />
      </g>
      <g transform="rotate(45 50 50)">
        <rect
          x="12"
          y="12"
          width="76"
          height="76"
          rx="6"
          fill={institutionalGreen}
          stroke={gold}
          strokeWidth="1.5"
          fillOpacity="0.95"
        />
      </g>

      {/* Inner Concentric Circle with Gold Accent Border */}
      <circle cx="50" cy="50" r="34" fill={deepGreen} stroke={gold} strokeWidth="1.75" />
      <circle cx="50" cy="50" r="30" fill={brightGreen} fillOpacity="0.25" stroke={gold} strokeWidth="0.75" strokeDasharray="2 2" />

      {/* Geometric Islamic Star Accent */}
      <path
        d="M50 20 L53 32 L65 35 L55 42 L58 54 L50 47 L42 54 L45 42 L35 35 L47 32 Z"
        fill={gold}
        fillOpacity="0.3"
      />

      {/* Stylized Islamic Crescent & Wheat / Pillar Motif */}
      {/* Left Crescent */}
      <path
        d="M48 27 C36 29 28 40 30 52 C32 64 43 72 55 70 C44 70 36 61 36 50 C36 39 42 30 48 27 Z"
        fill={gold}
      />

      {/* Central Heritage Motif: Letter M in Classic Form & Dome Arch */}
      <path
        d="M42 66 L42 46 L49 56 L56 46 L56 66 L52 66 L52 52 L49 57 L46 52 L46 66 Z"
        fill="#FFFFFF"
      />

      {/* Islamic Arch Pinnacle / Star on top */}
      <polygon
        points="50,23 52,28 57,28 53,31 55,36 50,33 45,36 47,31 43,28 48,28"
        fill={gold}
      />

      {/* Tiny Base Pedestal Line */}
      <line x1="38" y1="69" x2="62" y2="69" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
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
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <Emblem size={variant === 'compact' ? 42 : 46} />
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5">
          <span
            className="font-serif font-bold tracking-tight text-[18px] sm:text-[20px] leading-tight"
            style={{ color: textPrimary }}
          >
            BMT AL-MUHAJIRIN
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase"
            style={{ color: isDark ? '#B69A5A' : '#145A42' }}
          >
            KOPERASI SIMPAN PINJAM SYARIAH
          </span>
          <span className="text-[10px] text-[#B69A5A]">•</span>
          <span
            className="text-[10px] sm:text-[10.5px] font-medium tracking-wider"
            style={{ color: isDark ? 'rgba(247, 246, 241, 0.7)' : '#6B746F' }}
          >
            TOILI, BANGGAI
          </span>
        </div>
        {showTagline && (
          <span
            className="text-[11px] italic font-serif mt-1 tracking-wide"
            style={{ color: isDark ? '#F7F6F1/90' : '#145A42' }}
          >
            "Berjuang Bersama Ummat Keluar Dari Riba"
          </span>
        )}
      </div>
    </div>
  );
}
