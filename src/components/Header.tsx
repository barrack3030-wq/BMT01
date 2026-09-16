import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PageType } from '../types';
import { BmtLogo } from './BmtLogo';

interface HeaderProps {
  activePage: PageType;
  setActivePage: (page: PageType, subSection?: string) => void;
  onOpenMembershipModal?: () => void;
}

type DropdownKey = 'tentang' | 'produk' | 'keanggotaan' | 'informasi';

export function Header({ activePage, setActivePage, onOpenMembershipModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(null);

  const go = (page: PageType, subSection?: string) => {
    setActivePage(page, subSection);
    setActiveDropdown(null);
    setMobileExpanded(null);
    setMobileMenuOpen(false);
  };

  const toggleMobile = (key: DropdownKey) => {
    setMobileExpanded((current) => current === key ? null : key);
  };

  const dropdowns: Record<DropdownKey, { label: string; page: PageType; items: { label: string; sub?: string; page?: PageType }[] }> = {
    tentang: {
      label: 'Tentang Kami',
      page: 'profil',
      items: [
        { label: 'Profil Koperasi', page: 'profil' },
        { label: 'Sejarah', page: 'sejarah' },
        { label: 'Visi & Misi', page: 'visi-misi' },
        { label: 'Struktur & Legalitas', page: 'struktur-organisasi' },
      ],
    },
    produk: {
      label: 'Produk & Layanan',
      page: 'produk-layanan',
      items: [
        { label: 'Simpanan', page: 'produk-layanan', sub: 'simpanan' },
        { label: 'Pembiayaan', page: 'produk-layanan', sub: 'pembiayaan' },
        { label: 'Layanan Anggota', page: 'produk-layanan', sub: 'layanan' },
      ],
    },
    keanggotaan: {
      label: 'Keanggotaan',
      page: 'keanggotaan',
      items: [
        { label: 'Syarat & Cara Bergabung', page: 'keanggotaan', sub: 'syarat' },
        { label: 'Hak & Kewajiban', page: 'keanggotaan', sub: 'hak-kewajiban' },
        { label: 'Informasi Anggota', page: 'keanggotaan', sub: 'informasi' },
      ],
    },
    informasi: {
      label: 'Informasi',
      page: 'berita',
      items: [
        { label: 'Berita Koperasi', page: 'berita', sub: 'Berita' },
        { label: 'Kegiatan', page: 'berita', sub: 'Kegiatan' },
        { label: 'Pengumuman', page: 'berita', sub: 'Pengumuman' },
        { label: 'Kontak', page: 'kontak' },
      ],
    },
  };

  const activeFor = (key: DropdownKey) => {
    if (key === 'tentang') return ['profil', 'sejarah', 'visi-misi', 'struktur-organisasi', 'legalitas'].includes(activePage);
    if (key === 'produk') return activePage === 'produk-layanan';
    if (key === 'keanggotaan') return activePage === 'keanggotaan';
    return ['berita', 'kontak'].includes(activePage);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#202522]/10 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-8 px-5 lg:px-8">
        <button
          type="button"
          onClick={() => go('beranda')}
          className="shrink-0 border-0 bg-transparent p-0 text-left lg:ml-[88px]"
          aria-label="Kembali ke Beranda BMT Al-Muhajirin"
        >
          <BmtLogo variant="compact" />
        </button>

        <nav className="hidden min-w-0 flex-1 items-center justify-end lg:flex" aria-label="Navigasi utama">
          <div className="flex items-center gap-5 xl:gap-7">
            {(Object.keys(dropdowns) as DropdownKey[]).map((key) => {
              const menu = dropdowns[key];
              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => go(menu.page)}
                    className={`flex items-center gap-1 whitespace-nowrap border-b-2 border-transparent bg-transparent py-2 text-sm font-medium transition-colors ${activeFor(key) ? 'border-[#0B3D2E] text-[#0B3D2E]' : 'text-[#202522] hover:text-[#0B3D2E]'}`}
                    aria-haspopup="menu"
                    aria-expanded={activeDropdown === key}
                  >
                    {menu.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>

                  {activeDropdown === key && (
                    <div className="absolute left-0 top-full z-[70] w-60 pt-2">
                      <div className="border border-[#202522]/10 bg-white py-2 shadow-[0_14px_30px_rgba(0,0,0,0.10)]">
                        {menu.items.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => go(item.page || menu.page, item.sub)}
                            className="block w-full px-4 py-2.5 text-left text-sm text-[#202522] transition-colors hover:bg-[#F7F6F1] hover:text-[#0B3D2E]"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <button
              type="button"
              onClick={() => onOpenMembershipModal?.()}
              className="whitespace-nowrap bg-[#0B3D2E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#145A42]"
            >
              Daftar Sekarang
            </button>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center border border-[#202522]/15 bg-white text-[#0B3D2E] lg:hidden"
          aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="relative z-[60] border-t border-[#202522]/10 bg-white lg:hidden">
          <nav className="mx-auto max-w-[1440px] px-5 py-3" aria-label="Navigasi mobile">
            {(Object.keys(dropdowns) as DropdownKey[]).map((key) => {
              const menu = dropdowns[key];
              return (
                <div key={key} className="border-b border-[#202522]/8">
                  <button
                    type="button"
                    onClick={() => toggleMobile(key)}
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-[#202522]"
                  >
                    {menu.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === key ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === key && (
                    <div className="pb-2 pl-3">
                      {menu.items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => go(item.page || menu.page, item.sub)}
                          className="block w-full py-2 text-left text-sm text-[#68716C]"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <button
              type="button"
              onClick={() => onOpenMembershipModal?.()}
              className="mt-4 w-full bg-[#0B3D2E] px-5 py-3 text-left text-sm font-semibold text-white"
            >
              Daftar Sekarang
            </button>
          </nav>
        </div>
      )}

      {activePage === 'beranda' && (
        <div className="overflow-hidden border-y border-[#C9A93A]/70 bg-[#E8D28A] text-[#174D2C] py-1 sm:py-1.5">
          <marquee direction="left" scrollamount="3" className="block text-[11.5px] sm:text-[12px] font-medium tracking-wide leading-snug">
            Informasi Terbaru &nbsp; • &nbsp; Pendaftaran anggota BMT Al-Muhajirin tetap dibuka &nbsp; • &nbsp; Pantau informasi layanan dan kegiatan terbaru BMT Al-Muhajirin di halaman Informasi
          </marquee>
        </div>
      )}
    </header>
  );
}
