import { PageType } from '../types';
import { BmtLogo } from './BmtLogo';

interface FooterProps {
  setActivePage: (page: PageType, subSection?: string) => void;
  onOpenMembershipModal: () => void;
}

export function Footer({ setActivePage }: FooterProps) {
  const handleNav = (page: PageType, sub?: string) => {
    setActivePage(page, sub);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B3D2E] text-white pt-16 pb-10 border-t border-[#145A42] lg:pt-18 lg:pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-4 space-y-4">
            <BmtLogo variant="full" theme="dark" showTagline={false} />
            <p className="text-[#B69A5A] font-serif italic text-sm tracking-wide pt-1">
              "Berjuang Bersama Ummat Keluar Dari Riba"
            </p>
            <p className="text-[#F7F6F1]/75 text-[14.5px] leading-[1.7] max-w-sm">
              Koperasi Simpan Pinjam dan Pembiayaan Syariah (KSPPS) yang didirikan pada tahun 1998 di Toili, Kabupaten Banggai. Berlandaskan tata kelola syariah yang amanah, transparan, dan berorientasi pada kemandirian ekonomi ummat.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase">Navigasi</h4>
            <ul className="space-y-2.5 text-sm text-[#F7F6F1]/75">
              <li><button onClick={() => handleNav('beranda')} className="hover:text-white transition-colors cursor-pointer text-left">Beranda</button></li>
              <li><button onClick={() => handleNav('profil')} className="hover:text-white transition-colors cursor-pointer text-left">Profil Koperasi</button></li>
              <li><button onClick={() => handleNav('sejarah')} className="hover:text-white transition-colors cursor-pointer text-left">Sejarah</button></li>
              <li><button onClick={() => handleNav('visi-misi')} className="hover:text-white transition-colors cursor-pointer text-left">Visi &amp; Misi</button></li>
              <li><button onClick={() => handleNav('struktur-organisasi')} className="hover:text-white transition-colors cursor-pointer text-left">Struktur Organisasi</button></li>
              <li><button onClick={() => handleNav('legalitas')} className="hover:text-white transition-colors cursor-pointer text-left">Legalitas</button></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase">Produk &amp; Layanan</h4>
            <ul className="space-y-2.5 text-sm text-[#F7F6F1]/75">
              <li><button onClick={() => handleNav('produk-layanan', 'simpanan')} className="hover:text-white transition-colors cursor-pointer text-left">Simpanan</button></li>
              <li><button onClick={() => handleNav('produk-layanan', 'pembiayaan')} className="hover:text-white transition-colors cursor-pointer text-left">Pembiayaan</button></li>
              <li><button onClick={() => handleNav('produk-layanan', 'layanan')} className="hover:text-white transition-colors cursor-pointer text-left">Layanan Anggota</button></li>
              <li><button onClick={() => handleNav('produk-layanan', 'unggulan')} className="hover:text-white transition-colors cursor-pointer text-left">Produk Unggulan</button></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase">Kantor Pusat</h4>
            <div className="space-y-2 text-sm text-[#F7F6F1]/75 leading-relaxed">
              <p className="text-white font-medium">KSPPS BMT AL-MUHAJIRIN</p>
              <p>Jl. Ahmad Yani No. 22, Singkoyo, Kec. Toili, Kabupaten Banggai, Sulawesi Tengah</p>
              <p className="text-white">Telp: (0453) 210088</p>
              <p>WhatsApp: 0812-4290-8899</p>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-[#F7F6F1]/65 space-y-1">
              <p className="font-semibold text-[#B69A5A]">Informasi Legalitas:</p>
              <p>Badan Hukum: 518/11/BH/DISKOP</p>
              <p>Tanggal: 28 Oktober 2003</p>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#F7F6F1]/60">
          <p>© 2026 BMT Al-Muhajirin. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('legalitas')} className="hover:text-white transition-colors cursor-pointer">Kepatuhan Syariat</button>
            <span>•</span>
            <button onClick={() => handleNav('keanggotaan')} className="hover:text-white transition-colors cursor-pointer">Tata Tertib Anggota</button>
            <span>•</span>
            <button onClick={() => handleNav('kontak')} className="hover:text-white transition-colors cursor-pointer">Kontak Layanan</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
