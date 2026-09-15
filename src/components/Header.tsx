import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PageType } from '../types';
import { BmtLogo } from './BmtLogo';

interface HeaderProps {
  activePage: PageType;
  setActivePage: (page: PageType, subSection?: string) => void;
  onOpenMembershipModal?: () => void;
}

type DropdownKey = 'tentang' | 'produk' | 'keanggotaan' | 'informasi' | 'galeri';

export function Header({ activePage, setActivePage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(null);

  const go = (page: PageType, subSection?: string) => {
    setActivePage(page, subSection);
    setActiveDropdown(null);
    setMobileExpanded(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobile = (key: DropdownKey) => {
    setMobileExpanded((current) => current === key ? null : key);
  };

  const isTentangActive = ['profil', 'sejarah', 'visi-misi', 'struktur-organisasi', 'legalitas'].includes(activePage);

  const dropdowns: Record<DropdownKey, { label: string; page: PageType; items: { label: string; sub?: string; page?: PageType }[] }> = {
    tentang: {
      label: 'Tentang Kami',
      page: 'profil',
      items: [
        { label: 'Profil Koperasi', page: 'profil' },
        { label: 'Sejarah', page: 'sejarah' },
        { label: 'Visi & Misi', page: 'visi-misi' },
        { label: 'Struktur Organisasi', page: 'struktur-organisasi' },
        { label: 'Legalitas', page: 'legalitas' },
      ],
    },
    produk: {
      label: 'Produk & Layanan',
      page: 'produk-layanan',
      items: [
        { label: 'Simpanan', page: 'produk-layanan', sub: 'simpanan' },
        { label: 'Pembiayaan', page: 'produk-layanan', sub: 'pembiayaan' },
        { label: 'Layanan Anggota', page: 'produk-layanan', sub: 'layanan' },
        { label: 'Produk Unggulan', page: 'produk-layanan', sub: 'unggulan' },
      ],
    },
    keanggotaan: {
      label: 'Keanggotaan',
      page: 'keanggotaan',
      items: [
        { label: 'Syarat Keanggotaan', page: 'keanggotaan', sub: 'syarat' },
        { label: 'Cara Bergabung', page: 'keanggotaan', sub: 'cara-bergabung' },
        { label: 'Hak & Kewajiban Anggota', page: 'keanggotaan', sub: 'hak-kewajiban' },
        { label: 'Informasi Anggota', page: 'keanggotaan', sub: 'informasi' },
      ],
    },
    informasi: {
      label: 'Informasi',
      page: 'berita',
      items: [
        { label: 'Berita Koperasi', page: 'berita', sub: 'Berita' },
        { label: 'Artikel', page: 'berita', sub: 'Artikel' },
        { label: 'Kegiatan', page: 'berita', sub: 'Kegiatan' },
        { label: 'Pengumuman', page: 'berita', sub: 'Pengumuman' },
      ],
    },
    galeri: {
      label: 'Galeri',
      page: 'galeri',
      items: [
        { label: 'Foto', page: 'galeri' },
        { label: 'Video', page: 'galeri' },
      ],
    },
  };

  const activeFor = (key: DropdownKey) => {
    if (key === 'tentang') return isTentangActive;
    if (key === 'produk') return activePage === 'produk-layanan';
    if (key === 'keanggotaan') return activePage === 'keanggotaan';
    if (key === 'informasi') return activePage === 'berita';
    return activePage === 'galeri';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#202522]/10 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-8 px-5 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => go('beranda')}
          className="shrink-0 border-0 bg-transparent p-0 text-left"
          aria-label="Kembali ke Beranda BMT Al-Muhajirin"
        >
          <BmtLogo variant="compact" />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden min-w-0 flex-1 items-center justify-end lg:flex" aria-label="Navigasi utama">
          <div className="flex items-center gap-5 xl:gap-7">
            <button
              type="button"
              onClick={() => go('beranda')}
              className={`whitespace-nowrap border-b-2 border-transparent bg-transparent py-2 text-sm font-medium transition-colors ${activePage === 'beranda' ? 'border-[#0B3D2E] text-[#0B3D2E]' : 'text-[#202522] hover:text-[#0B3D2E]'}`}
            >
              Beranda
            </button>

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
                  >
                    {menu.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>

                  {activeDropdown === key && (
                    <div className="absolute left-0 top-full w-60 pt-2">
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

            {/* Contact is intentionally the last item: logo → menu → contact. */}
            <button
              type="button"
              onClick={() => go('kontak')}
              className={`whitespace-nowrap border-b-2 border-transparent bg-transparent py-2 text-sm font-medium transition-colors ${activePage === 'kontak' ? 'border-[#0B3D2E] text-[#0B3D2E]' : 'text-[#202522] hover:text-[#0B3D2E]'}`}
            >
              Kontak
            </button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center border border-[#202522]/15 bg-white text-[#0B3D2E] lg:hidden"
          aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[#202522]/10 bg-white lg:hidden">
          <nav className="mx-auto max-w-[1440px] px-5 py-3" aria-label="Navigasi mobile">
            <button type="button" onClick={() => go('beranda')} className="w-full border-b border-[#202522]/8 py-3 text-left text-sm font-medium text-[#202522]">
              Beranda
            </button>

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

            <button type="button" onClick={() => go('kontak')} className="w-full py-3 text-left text-sm font-medium text-[#202522]">
              Kontak
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
