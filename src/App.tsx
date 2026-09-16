import { useEffect, useState } from 'react';
import { PageType, ProductItem, ArticleItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSlider } from './components/HeroSlider';
import { MembershipModal } from './components/MembershipModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { HomePage } from './pages/HomePage';
import { SejarahPage } from './pages/SejarahPage';
import { ProfilPage } from './pages/ProfilPage';
import { VisiMisiPage } from './pages/VisiMisiPage';
import { StrukturOrganisasiPage } from './pages/StrukturOrganisasiPage';
import { LegalitasPage } from './pages/LegalitasPage';
import { ProdukLayananPage } from './pages/ProdukLayananPage';
import { KeanggotaanPage } from './pages/KeanggotaanPage';
import { BeritaPage } from './pages/BeritaPage';
import { GaleriPage } from './pages/GaleriPage';
import { KontakPage } from './pages/KontakPage';
import { MessageCircle } from 'lucide-react';

const VALID_PAGES: PageType[] = [
  'beranda', 'profil', 'sejarah', 'visi-misi', 'struktur-organisasi', 'legalitas',
  'produk-layanan', 'keanggotaan', 'berita', 'galeri', 'kontak'
];

function routeFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean).map((part) => decodeURIComponent(part));
  const page = (parts[0] || 'beranda') as PageType;
  return {
    page: VALID_PAGES.includes(page) ? page : 'beranda',
    subSection: parts[1]
  };
}

export default function App() {
  const initialRoute = routeFromHash();
  const [activePage, setActivePage] = useState<PageType>(initialRoute.page);
  const [activeSubTab, setActiveSubTab] = useState<string | undefined>(initialRoute.subSection);

  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const route = routeFromHash();
      setActivePage(route.page);
      setActiveSubTab(route.subSection);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handlePageChange = (page: PageType, subSection?: string) => {
    setActivePage(page);
    setActiveSubTab(subSection);

    const hash = subSection
      ? `#/${page}/${encodeURIComponent(subSection)}`
      : `#/${page}`;

    if (window.location.hash !== hash) {
      window.history.pushState({ page, subSection }, '', hash);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  const handleSelectArticle = (article: ArticleItem | null) => {
    setSelectedArticle(article);
    if (article) {
      handlePageChange('berita', article.category);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#202522] selection:bg-[#0B3D2E] selection:text-white font-sans">
      <Header
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenMembershipModal={() => setIsMembershipModalOpen(true)}
      />

      <main className={activePage === 'beranda' ? 'home-page-active flex-1' : 'flex-1'}>
        {activePage === 'beranda' && (
          <>
            <HeroSlider setActivePage={handlePageChange} />
            <HomePage
              setActivePage={handlePageChange}
              onOpenMembership={() => setIsMembershipModalOpen(true)}
              onSelectProduct={handleSelectProduct}
              onSelectArticle={handleSelectArticle}
            />
          </>
        )}

        {activePage === 'profil' && (
          <ProfilPage
            onGoToSejarah={() => handlePageChange('sejarah')}
            onGoToVisiMisi={() => handlePageChange('visi-misi')}
            onOpenMembership={() => setIsMembershipModalOpen(true)}
          />
        )}

        {activePage === 'sejarah' && (
          <SejarahPage
            onOpenMembership={() => setIsMembershipModalOpen(true)}
            onGoToProfil={() => handlePageChange('profil')}
          />
        )}

        {activePage === 'visi-misi' && (
          <VisiMisiPage onOpenMembership={() => setIsMembershipModalOpen(true)} />
        )}

        {activePage === 'struktur-organisasi' && <StrukturOrganisasiPage />}
        {activePage === 'legalitas' && <LegalitasPage />}

        {activePage === 'produk-layanan' && (
          <ProdukLayananPage
            initialCategory={activeSubTab}
            onSelectProduct={handleSelectProduct}
            onOpenMembership={() => setIsMembershipModalOpen(true)}
          />
        )}

        {activePage === 'keanggotaan' && (
          <KeanggotaanPage
            initialSubTab={activeSubTab}
            onOpenMembership={() => setIsMembershipModalOpen(true)}
          />
        )}

        {activePage === 'berita' && (
          <BeritaPage
            selectedArticle={selectedArticle}
            onSelectArticle={handleSelectArticle}
            onOpenMembership={() => setIsMembershipModalOpen(true)}
          />
        )}

        {activePage === 'galeri' && <GaleriPage />}
        {activePage === 'kontak' && <KontakPage />}
      </main>

      <Footer
        setActivePage={handlePageChange}
        onOpenMembershipModal={() => setIsMembershipModalOpen(true)}
      />

      <MembershipModal
        isOpen={isMembershipModalOpen}
        onClose={() => setIsMembershipModalOpen(false)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenMembership={() => {
          setSelectedProduct(null);
          setIsMembershipModalOpen(true);
        }}
      />

      <a
        id="floating-wa-btn"
        href={`https://wa.me/6281245678901?text=Assalamu'alaikum%20BMT%20Al%20Muhajirin%20Toili,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20koperasi`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#0B3D2E] hover:bg-[#145A42] text-white px-4 py-3 rounded-[4px] shadow-lg flex items-center gap-2 transition-all duration-200 border border-white/20 text-xs font-semibold cursor-pointer"
        aria-label="Konsultasi WhatsApp Koperasi"
      >
        <MessageCircle className="w-4 h-4 text-emerald-300" />
        <span className="hidden sm:inline">Layanan WhatsApp</span>
      </a>
    </div>
  );
}
