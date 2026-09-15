import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PageType } from '../types';
import { BmtLogo } from './BmtLogo';

interface HeaderProps {
  activePage: PageType;
  setActivePage: (page: PageType, subSection?: string) => void;
  onOpenMembershipModal: () => void;
}

export function Header({ activePage, setActivePage, onOpenMembershipModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (page: PageType, subSection?: string) => {
    setActivePage(page, subSection);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSection(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isTentangActive = ['profil', 'sejarah', 'visi-misi', 'struktur-organisasi', 'legalitas'].includes(activePage);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-[#202522]/10 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      {/* Top subtle bar with institution notice & tagline */}
      <div className="hidden lg:block bg-[#F7F6F1] border-b border-[#202522]/5 text-xs py-1 px-8 text-[#6B746F]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-serif italic text-[#145A42] tracking-wide">
            "Berjuang Bersama Ummat Keluar Dari Riba"
          </span>
          <div className="flex items-center gap-6 text-[11px] font-medium text-[#202522]/70">
            <span>Badan Hukum No. 518/11/BH/DISKOP (2003)</span>
            <span>•</span>
            <span>Toili, Kabupaten Banggai, Sulawesi Tengah</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: BMT Al-Muhajirin Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('beranda')}
          className="flex items-center text-left focus:outline-none cursor-pointer group"
          aria-label="Kembali ke Beranda BMT Al-Muhajirin"
        >
          <BmtLogo variant="compact" />
        </button>

        {/* Desktop Navigation: Horizontal, Refined, Dropdowns */}
        <nav className="hidden lg:flex items-center gap-6 text-[14.5px] font-medium text-[#202522]">
          
          {/* BERANDA */}
          <button
            id="nav-beranda-btn"
            onClick={() => handleNavClick('beranda')}
            className={`py-2 transition-colors cursor-pointer ${
              activePage === 'beranda'
                ? 'text-[#0B3D2E] font-semibold border-b-2 border-[#0B3D2E]'
                : 'text-[#202522] hover:text-[#0B3D2E]'
            }`}
          >
            Beranda
          </button>

          {/* TENTANG KAMI */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('tentang')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-tentang-kami-btn"
              onClick={() => handleNavClick('profil')}
              className={`flex items-center gap-1 py-2 transition-colors cursor-pointer ${
                isTentangActive
                  ? 'text-[#0B3D2E] font-semibold border-b-2 border-[#0B3D2E]'
                  : 'text-[#202522] hover:text-[#0B3D2E]'
              }`}
            >
              <span>Tentang Kami</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'tentang' ? 'rotate-180 text-[#0B3D2E]' : 'text-[#6B746F]'}`} />
            </button>

            {activeDropdown === 'tentang' && (
              <div className="absolute left-0 top-full pt-1.5 w-56 z-50 animate-in fade-in duration-100">
                <div className="bg-white border border-[#202522]/12 shadow-[0_10px_25px_rgba(0,0,0,0.08)] py-2">
                  <button
                    id="subnav-profil-btn"
                    onClick={() => handleNavClick('profil')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Profil Koperasi
                  </button>
                  <button
                    id="subnav-sejarah-btn"
                    onClick={() => handleNavClick('sejarah')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Sejarah
                  </button>
                  <button
                    id="subnav-visi-misi-btn"
                    onClick={() => handleNavClick('visi-misi')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Visi & Misi
                  </button>
                  <button
                    id="subnav-struktur-btn"
                    onClick={() => handleNavClick('struktur-organisasi')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Struktur Organisasi
                  </button>
                  <button
                    id="subnav-legalitas-btn"
                    onClick={() => handleNavClick('legalitas')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Legalitas
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* PRODUK & LAYANAN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('produk')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-produk-layanan-btn"
              onClick={() => handleNavClick('produk-layanan')}
              className={`flex items-center gap-1 py-2 transition-colors cursor-pointer ${
                activePage === 'produk-layanan'
                  ? 'text-[#0B3D2E] font-semibold border-b-2 border-[#0B3D2E]'
                  : 'text-[#202522] hover:text-[#0B3D2E]'
              }`}
            >
              <span>Produk & Layanan</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'produk' ? 'rotate-180 text-[#0B3D2E]' : 'text-[#6B746F]'}`} />
            </button>

            {activeDropdown === 'produk' && (
              <div className="absolute left-0 top-full pt-1.5 w-56 z-50 animate-in fade-in duration-100">
                <div className="bg-white border border-[#202522]/12 shadow-[0_10px_25px_rgba(0,0,0,0.08)] py-2">
                  <button
                    id="subnav-simpanan-btn"
                    onClick={() => handleNavClick('produk-layanan', 'simpanan')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Simpanan
                  </button>
                  <button
                    id="subnav-pembiayaan-btn"
                    onClick={() => handleNavClick('produk-layanan', 'pembiayaan')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Pembiayaan
                  </button>
                  <button
                    id="subnav-layanan-anggota-btn"
                    onClick={() => handleNavClick('produk-layanan', 'layanan')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Layanan Anggota
                  </button>
                  <button
                    id="subnav-produk-unggulan-btn"
                    onClick={() => handleNavClick('produk-layanan', 'unggulan')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Produk Unggulan
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* KEANGGOTAAN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('keanggotaan')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-keanggotaan-btn"
              onClick={() => handleNavClick('keanggotaan')}
              className={`flex items-center gap-1 py-2 transition-colors cursor-pointer ${
                activePage === 'keanggotaan'
                  ? 'text-[#0B3D2E] font-semibold border-b-2 border-[#0B3D2E]'
                  : 'text-[#202522] hover:text-[#0B3D2E]'
              }`}
            >
              <span>Keanggotaan</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'keanggotaan' ? 'rotate-180 text-[#0B3D2E]' : 'text-[#6B746F]'}`} />
            </button>

            {activeDropdown === 'keanggotaan' && (
              <div className="absolute left-0 top-full pt-1.5 w-60 z-50 animate-in fade-in duration-100">
                <div className="bg-white border border-[#202522]/12 shadow-[0_10px_25px_rgba(0,0,0,0.08)] py-2">
                  <button
                    id="subnav-syarat-btn"
                    onClick={() => handleNavClick('keanggotaan', 'syarat')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Syarat Keanggotaan
                  </button>
                  <button
                    id="subnav-cara-bergabung-btn"
                    onClick={() => handleNavClick('keanggotaan', 'cara-bergabung')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Cara Bergabung
                  </button>
                  <button
                    id="subnav-hak-kewajiban-btn"
                    onClick={() => handleNavClick('keanggotaan', 'hak-kewajiban')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Hak & Kewajiban Anggota
                  </button>
                  <button
                    id="subnav-info-anggota-btn"
                    onClick={() => handleNavClick('keanggotaan', 'informasi')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Informasi Anggota
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* INFORMASI */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('informasi')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-informasi-btn"
              onClick={() => handleNavClick('berita')}
              className={`flex items-center gap-1 py-2 transition-colors cursor-pointer ${
                activePage === 'berita'
                  ? 'text-[#0B3D2E] font-semibold border-b-2 border-[#0B3D2E]'
                  : 'text-[#202522] hover:text-[#0B3D2E]'
              }`}
            >
              <span>Informasi</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'informasi' ? 'rotate-180 text-[#0B3D2E]' : 'text-[#6B746F]'}`} />
            </button>

            {activeDropdown === 'informasi' && (
              <div className="absolute left-0 top-full pt-1.5 w-52 z-50 animate-in fade-in duration-100">
                <div className="bg-white border border-[#202522]/12 shadow-[0_10px_25px_rgba(0,0,0,0.08)] py-2">
                  <button
                    id="subnav-berita-koperasi-btn"
                    onClick={() => handleNavClick('berita', 'Berita')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Berita Koperasi
                  </button>
                  <button
                    id="subnav-artikel-btn"
                    onClick={() => handleNavClick('berita', 'Artikel')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Artikel
                  </button>
                  <button
                    id="subnav-kegiatan-btn"
                    onClick={() => handleNavClick('berita', 'Kegiatan')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Kegiatan
                  </button>
                  <button
                    id="subnav-pengumuman-btn"
                    onClick={() => handleNavClick('berita', 'Pengumuman')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Pengumuman
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* GALERI */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('galeri')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-galeri-btn"
              onClick={() => handleNavClick('galeri')}
              className={`flex items-center gap-1 py-2 transition-colors cursor-pointer ${
                activePage === 'galeri'
                  ? 'text-[#0B3D2E] font-semibold border-b-2 border-[#0B3D2E]'
                  : 'text-[#202522] hover:text-[#0B3D2E]'
              }`}
            >
              <span>Galeri</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'galeri' ? 'rotate-180 text-[#0B3D2E]' : 'text-[#6B746F]'}`} />
            </button>

            {activeDropdown === 'galeri' && (
              <div className="absolute left-0 top-full pt-1.5 w-44 z-50 animate-in fade-in duration-100">
                <div className="bg-white border border-[#202522]/12 shadow-[0_10px_25px_rgba(0,0,0,0.08)] py-2">
                  <button
                    id="subnav-galeri-foto-btn"
                    onClick={() => handleNavClick('galeri', 'Foto')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Foto
                  </button>
                  <button
                    id="subnav-galeri-video-btn"
                    onClick={() => handleNavClick('galeri', 'Video')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#202522] hover:bg-[#F7F6F1] hover:text-[#0B3D2E] transition-colors block"
                  >
                    Video
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* KONTAK */}
          <button
            id="nav-kontak-btn"
            onClick={() => handleNavClick('kontak')}
            className={`py-2 transition-colors cursor-pointer ${
              activePage === 'kontak'
                ? 'text-[#0B3D2E] font-semibold border-b-2 border-[#0B3D2E]'
                : 'text-[#202522] hover:text-[#0B3D2E]'
            }`}
          >
            Kontak
          </button>

        </nav>

        {/* Primary Navigation CTA */}
        <div className="hidden lg:flex items-center">
          <button
            id="header-cta-membership-btn"
            onClick={onOpenMembershipModal}
            className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-[14px] font-semibold px-5 py-2.5 rounded-[2px] transition-colors duration-150 cursor-pointer tracking-wide border border-[#0B3D2E]"
          >
            Menjadi Anggota
          </button>
        </div>

        {/* Mobile Actions: CTA + Hamburger */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <button
            id="mobile-header-cta-btn"
            onClick={onOpenMembershipModal}
            className="text-xs bg-[#0B3D2E] text-white px-3 py-2 rounded-[2px] font-semibold"
          >
            Daftar
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka Menu"
            className="p-2 text-[#202522] hover:text-[#0B3D2E] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Structured Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#202522]/15 px-6 py-5 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col divide-y divide-[#202522]/10 text-[15px] font-medium text-[#202522]">
            
            {/* Beranda */}
            <div className="py-2.5">
              <button
                onClick={() => handleNavClick('beranda')}
                className={`w-full text-left ${activePage === 'beranda' ? 'text-[#0B3D2E] font-bold' : ''}`}
              >
                Beranda
              </button>
            </div>

            {/* Tentang Kami (Accordion) */}
            <div className="py-2.5">
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'tentang' ? null : 'tentang')}
                className="w-full flex items-center justify-between text-left"
              >
                <span className={isTentangActive ? 'text-[#0B3D2E] font-bold' : ''}>Tentang Kami</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'tentang' ? 'rotate-180 text-[#0B3D2E]' : 'text-[#6B746F]'}`} />
              </button>
              {mobileExpandedSection === 'tentang' && (
                <div className="pl-4 pt-2 space-y-2 text-sm text-[#6B746F]">
                  <button onClick={() => handleNavClick('profil')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Profil Koperasi
                  </button>
                  <button onClick={() => handleNavClick('sejarah')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Sejarah
                  </button>
                  <button onClick={() => handleNavClick('visi-misi')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Visi & Misi
                  </button>
                  <button onClick={() => handleNavClick('struktur-organisasi')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Struktur Organisasi
                  </button>
                  <button onClick={() => handleNavClick('legalitas')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Legalitas
                  </button>
                </div>
              )}
            </div>

            {/* Produk & Layanan (Accordion) */}
            <div className="py-2.5">
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'produk' ? null : 'produk')}
                className="w-full flex items-center justify-between text-left"
              >
                <span className={activePage === 'produk-layanan' ? 'text-[#0B3D2E] font-bold' : ''}>Produk & Layanan</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'produk' ? 'rotate-180 text-[#0B3D2E]' : 'text-[#6B746F]'}`} />
              </button>
              {mobileExpandedSection === 'produk' && (
                <div className="pl-4 pt-2 space-y-2 text-sm text-[#6B746F]">
                  <button onClick={() => handleNavClick('produk-layanan', 'simpanan')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Simpanan
                  </button>
                  <button onClick={() => handleNavClick('produk-layanan', 'pembiayaan')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Pembiayaan
                  </button>
                  <button onClick={() => handleNavClick('produk-layanan', 'layanan')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Layanan Anggota
                  </button>
                  <button onClick={() => handleNavClick('produk-layanan', 'unggulan')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Produk Unggulan
                  </button>
                </div>
              )}
            </div>

            {/* Keanggotaan (Accordion) */}
            <div className="py-2.5">
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'keanggotaan' ? null : 'keanggotaan')}
                className="w-full flex items-center justify-between text-left"
              >
                <span className={activePage === 'keanggotaan' ? 'text-[#0B3D2E] font-bold' : ''}>Keanggotaan</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'keanggotaan' ? 'rotate-180 text-[#0B3D2E]' : 'text-[#6B746F]'}`} />
              </button>
              {mobileExpandedSection === 'keanggotaan' && (
                <div className="pl-4 pt-2 space-y-2 text-sm text-[#6B746F]">
                  <button onClick={() => handleNavClick('keanggotaan', 'syarat')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Syarat Keanggotaan
                  </button>
                  <button onClick={() => handleNavClick('keanggotaan', 'cara-bergabung')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Cara Bergabung
                  </button>
                  <button onClick={() => handleNavClick('keanggotaan', 'hak-kewajiban')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Hak & Kewajiban Anggota
                  </button>
                  <button onClick={() => handleNavClick('keanggotaan', 'informasi')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Informasi Anggota
                  </button>
                </div>
              )}
            </div>

            {/* Informasi (Accordion) */}
            <div className="py-2.5">
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'informasi' ? null : 'informasi')}
                className="w-full flex items-center justify-between text-left"
              >
                <span className={activePage === 'berita' ? 'text-[#0B3D2E] font-bold' : ''}>Informasi</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'informasi' ? 'rotate-180 text-[#0B3D2E]' : 'text-[#6B746F]'}`} />
              </button>
              {mobileExpandedSection === 'informasi' && (
                <div className="pl-4 pt-2 space-y-2 text-sm text-[#6B746F]">
                  <button onClick={() => handleNavClick('berita', 'Berita')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Berita Koperasi
                  </button>
                  <button onClick={() => handleNavClick('berita', 'Artikel')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Artikel
                  </button>
                  <button onClick={() => handleNavClick('berita', 'Kegiatan')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Kegiatan
                  </button>
                  <button onClick={() => handleNavClick('berita', 'Pengumuman')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Pengumuman
                  </button>
                </div>
              )}
            </div>

            {/* Galeri (Accordion) */}
            <div className="py-2.5">
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'galeri' ? null : 'galeri')}
                className="w-full flex items-center justify-between text-left"
              >
                <span className={activePage === 'galeri' ? 'text-[#0B3D2E] font-bold' : ''}>Galeri</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'galeri' ? 'rotate-180 text-[#0B3D2E]' : 'text-[#6B746F]'}`} />
              </button>
              {mobileExpandedSection === 'galeri' && (
                <div className="pl-4 pt-2 space-y-2 text-sm text-[#6B746F]">
                  <button onClick={() => handleNavClick('galeri', 'Foto')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Foto
                  </button>
                  <button onClick={() => handleNavClick('galeri', 'Video')} className="block w-full text-left py-1 hover:text-[#0B3D2E]">
                    Video
                  </button>
                </div>
              )}
            </div>

            {/* Kontak */}
            <div className="py-2.5">
              <button
                onClick={() => handleNavClick('kontak')}
                className={`w-full text-left ${activePage === 'kontak' ? 'text-[#0B3D2E] font-bold' : ''}`}
              >
                Kontak
              </button>
            </div>

            {/* Tombol Menjadi Anggota */}
            <div className="pt-4 pb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMembershipModal();
                }}
                className="w-full bg-[#0B3D2E] text-white py-3 rounded-[2px] font-semibold text-center text-sm"
              >
                Menjadi Anggota
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
