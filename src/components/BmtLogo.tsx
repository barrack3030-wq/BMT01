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
  const logoSrc = '/BMT01/uploads/logo/logo%20(3).png';

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="BMT Al-Muhajirin"
        className={variant === 'emblem' ? 'h-11 w-11 object-contain' : 'h-12 w-auto max-w-[240px] object-contain sm:h-14'}
      />
    </div>
  );
}
