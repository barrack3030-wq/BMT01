import { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Play } from 'lucide-react';
import { PageType, ProductItem, ArticleItem } from '../types';
import { ARTICLES_DATA, GALLERY_DATA, LEGAL_DOCS } from '../data/cooperativeData';

interface HomePageProps {
  setActivePage: (page: PageType, subSection?: string) => void;
  onOpenMembership: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export function HomePage({ 
  setActivePage, 
  onOpenMembership, 
  onSelectArticle 
}: HomePageProps) {
  const [galleryCategory, setGalleryCategory] = useState<'Foto' | 'Video'>('Foto');
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const featuredArticle = ARTICLES_DATA[0];
  const sideArticles = ARTICLES_DATA.slice(1, 3);

  // Gallery items selection
  const photoGallery = [
    {
      id: 'h-gal-1',
      title: 'Pelayanan Kantor Kas di Sentra Pasar Tradisional',
      subtitle: 'Kompleks Pasar Cendana Pura, Toili',
      category: 'Foto',
      aspect: 'col-span-12 md:col-span-8 h-[380px]',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=85'
    },
    {
      id: 'h-gal-2',
      title: 'Kemitraan Usaha Mikro Pedagang Pasar',
      subtitle: 'Pembiayaan Murabahah tanpa riba',
      category: 'Foto',
      aspect: 'col-span-12 md:col-span-4 h-[380px]',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85'
    },
    {
      id: 'h-gal-3',
      title: 'Fasilitas Penggilingan Padi Koperasi',
      subtitle: 'Unit Sektor Riil Menopang Petani Toili',
      category: 'Foto',
      aspect: 'col-span-12 md:col-span-5 h-[340px]',
      imageUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=900&q=85'
    },
    {
      id: 'h-gal-4',
      title: 'Rapat Anggota Tahunan & Musyawarah Pengurus',
      subtitle: 'Kedaulatan tertinggi ada di tangan anggota',
      category: 'Foto',
      aspect: 'col-span-12 md:col-span-7 h-[340px]',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85'
    }
  ];

  const videoGallery = [
    {
      id: 'v-1',
      title: 'Profil Dokumenter BMT Al-Muhajirin: 25 Tahun Melayani Ummat di Toili',
      subtitle: 'Kilas balik perjalanan dari Pasar Cendanapura hingga kini',
      duration: '08:45',
      category: 'Video',
      aspect: 'col-span-12 md:col-span-7 h-[360px]',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85',
      videoUrl: 'https://www.youtube.com'
    },
    {
      id: 'v-2',
      title: 'Kisah Pedagang Pasar Cendana Pura Bangkit Tanpa Riba',
      subtitle: 'Testimoni kemitraan pembiayaan syariah modal usaha',
      duration: '05:12',
      category: 'Video',
      aspect: 'col-span-12 md:col-span-5 h-[360px]',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85',
      videoUrl: 'https://www.youtube.com'
    }
  ];

  return (
    <div className="bg-white text-[#202522]">
      
      {/* ==================================================
          5. HOMEPAGE HERO
          Eyebrow: BMT AL-MUHAJIRIN
          Headline: "Membangun Kemandirian Ekonomi Ummat"
          Supporting text: "Berjuang bersama anggota untuk membangun ekonomi yang lebih mandiri melalui layanan keuangan berbasis koperasi dan prinsip syariah."
          Primary CTA: "Kenal Lebih Dekat"
          Secondary CTA: "Menjadi Anggota"
          ONE strong authentic-looking photograph: Indonesian cooperative/market environment
         ================================================== */}
      <section className="bg-[#F7F6F1] border-b border-[#202522]/10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Text & Actions */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1D7656]"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase">
                  BMT AL-MUHAJIRIN
                </span>
                <span className="text-xs text-[#6B746F] font-serif italic">
                  • Berjuang Bersama Ummat Keluar Dari Riba
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#0B3D2E] leading-[1.12] tracking-tight">
                Membangun Kemandirian Ekonomi Ummat
              </h1>

              <p className="text-[18px] sm:text-[19px] text-[#6B746F] leading-[1.7] max-w-xl">
                Berjuang bersama anggota untuk membangun ekonomi yang lebih mandiri melalui layanan keuangan berbasis koperasi dan prinsip syariah.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  id="hero-primary-cta"
                  onClick={() => setActivePage('profil')}
                  className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-[15px] font-semibold px-7 py-3.5 rounded-[2px] transition-colors duration-150 cursor-pointer shadow-none tracking-wide text-center inline-flex items-center justify-center gap-2 border border-[#0B3D2E]"
                >
                  <span>Kenal Lebih Dekat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={onOpenMembership}
                  className="border border-[#0B3D2E] text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white text-[15px] font-semibold px-7 py-3.5 rounded-[2px] transition-colors duration-150 cursor-pointer tracking-wide text-center"
                >
                  Menjadi Anggota
                </button>
              </div>

              <div className="pt-2 text-xs text-[#6B746F] flex items-center gap-4 border-t border-[#202522]/10">
                <span>Berdiri sejak 1998 di Toili</span>
                <span>•</span>
                <span>Badan Hukum No. 518/11/BH/DISKOP</span>
              </div>
            </div>

            {/* Right: ONE strong authentic photograph */}
            <div className="lg:col-span-5">
              <div className="border border-[#202522]/12 overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=85"
                  alt="Pelayanan Nyata Koperasi BMT Al-Muhajirin di Toili"
                  className="w-full h-[430px] lg:h-[520px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-white border-t border-[#202522]/10 text-xs text-[#6B746F] flex items-center justify-between">
                  <span>Pelayanan Keuangan Syariah Anggota</span>
                  <span className="font-medium text-[#145A42]">Toili, Kab. Banggai</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          6. TRUST / INSTITUTIONAL INTRODUCTION
          Large statement: "Tumbuh bersama anggota sejak 1998."
          Editorial paragraph.
          Display important facts using typography rather than cards:
          1998 — Tahun Berdiri
          26 — Anggota Pendiri
          Rp8,488,000 — Modal Awal
         ================================================== */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#202522]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-[#202522]/10">
            <div className="lg:col-span-6">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0B3D2E] leading-[1.2] tracking-tight">
                Tumbuh bersama anggota sejak 1998.
              </h2>
            </div>
            <div className="lg:col-span-6 space-y-4 text-[17px] text-[#202522] leading-[1.8]">
              <p>
                KSU Syariah BMT Al-Muhajirin didirikan dari kesadaran bersama masyarakat Toili akan pentingnya lembaga keuangan mikro berbasis syariah yang terpercaya, mandiri, dan berpihak kepada para pedagang kecil serta petani lokal.
              </p>
              <p className="text-[#6B746F]">
                Dengan semangat tolong-menolong (ta'awun) dan prinsip keadilan tanpa riba, koperasi terus bertransformasi memberikan manfaat nyata dalam peningkatan kesejahteraan keluarga anggota di Kabupaten Banggai.
              </p>
            </div>
          </div>

          {/* Typography-driven statistics (No colorful cards!) */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
            <div className="space-y-1">
              <div className="font-serif text-5xl sm:text-6xl font-bold text-[#0B3D2E] tracking-tight">
                1998
              </div>
              <div className="text-sm font-bold tracking-wider text-[#145A42] uppercase">
                Tahun Berdiri
              </div>
              <p className="text-xs text-[#6B746F] leading-relaxed pt-1">
                Dirintis oleh para tokoh masyarakat Toili pada 14 Agustus 1998.
              </p>
            </div>

            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[#202522]/10 pt-6 sm:pt-0 sm:pl-8">
              <div className="font-serif text-5xl sm:text-6xl font-bold text-[#0B3D2E] tracking-tight">
                26
              </div>
              <div className="text-sm font-bold tracking-wider text-[#145A42] uppercase">
                Anggota Pendiri
              </div>
              <p className="text-xs text-[#6B746F] leading-relaxed pt-1">
                Diprakarsai 26 orang perintis berjiwa gotong royong dan kemandirian.
              </p>
            </div>

            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[#202522]/10 pt-6 sm:pt-0 sm:pl-8">
              <div className="font-serif text-4xl sm:text-5xl lg:text-[46px] font-bold text-[#0B3D2E] tracking-tight">
                Rp8.488.000
              </div>
              <div className="text-sm font-bold tracking-wider text-[#145A42] uppercase">
                Modal Awal
              </div>
              <p className="text-xs text-[#6B746F] leading-relaxed pt-1">
                Iuran modal perdana yang kini telah bertumbuh menjadi aset puluhan miliar.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          7. ABOUT SECTION
          Section label: 01 — TENTANG KAMI
          Headline: "Lebih dari sekadar lembaga keuangan."
          Two-column editorial layout: Left: large photograph. Right: professional description.
          CTA: "Selengkapnya Tentang Kami →"
         ================================================== */}
      <section className="bg-[#F7F6F1] py-24 lg:py-32 border-b border-[#202522]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Large authentic photograph */}
            <div className="lg:col-span-6">
              <div className="border border-[#202522]/12 overflow-hidden bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                  alt="Aktivitas Komunikasi dan Kebersamaan Anggota BMT Al-Muhajirin"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs text-[#6B746F] mt-2.5 font-serif italic">
                Kebersamaan dan silaturahmi berkala antara pengurus, pengawas, dan anggota koperasi.
              </div>
            </div>

            {/* Right: Professional description */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase block">
                01 — TENTANG KAMI
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B3D2E] leading-[1.2] tracking-tight">
                Lebih dari sekadar lembaga keuangan.
              </h2>

              <div className="space-y-4 text-[17px] text-[#202522] leading-[1.8]">
                <p>
                  BMT Al-Muhajirin merupakan organisasi keuangan koperasi yang dimiliki, dikelola, dan dimanfaatkan oleh para anggotanya. Lembaga ini hadir bukan sekadar sebagai tempat menyimpan atau meminjam dana, melainkan sebagai wadah perjuangan ekonomi ummat untuk membebaskan masyarakat dari praktik riba.
                </p>
                <p className="text-[#6B746F]">
                  Melalui dua pilar utama—Baitut Tamwil (pengembangan usaha produktif dan investasi anggota) serta Baitul Maal (pengelolaan kebajikan sosial)—kami berkomitmen menyalurkan keberkahan syariah hingga ke pelosok pedesaan di Toili dan Kabupaten Banggai.
                </p>
              </div>

              <div className="pt-2">
                <button
                  id="about-learn-more-btn"
                  onClick={() => setActivePage('profil')}
                  className="text-[15px] font-semibold text-[#0B3D2E] hover:text-[#145A42] transition-colors inline-flex items-center gap-2 cursor-pointer group"
                >
                  <span>Selengkapnya Tentang Kami</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          8. HISTORY SECTION
          Section label: 02 — SEJARAH
          Headline: "Perjalanan yang dimulai dari semangat kebersamaan."
          Elegant vertical timeline (No timeline cards!).
          Years, thin vertical line, editorial text.
          Historical facts accurately presented.
         ================================================== */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#202522]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase block mb-3">
              02 — SEJARAH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B3D2E] tracking-tight leading-[1.2]">
              Perjalanan yang dimulai dari semangat kebersamaan.
            </h2>
            <p className="text-[17px] text-[#6B746F] leading-[1.7] mt-4">
              Napak tilas pendirian dan perkembangan KSU Syariah BMT Al-Muhajirin dari pasar tradisional hingga menjadi pilar ekonomi syariah di Sulawesi Tengah.
            </p>
          </div>

          {/* Clean Vertical Timeline with Thin Line & Editorial Text (No Cards!) */}
          <div className="relative border-l border-[#202522]/15 pl-8 sm:pl-12 ml-2 sm:ml-4 space-y-14">
            
            {/* 14 Agustus 1998 - Pendirian */}
            <div className="relative space-y-2">
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0B3D2E] border-4 border-white"></div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">14 Agustus 1998</div>
              <div className="text-xs font-bold text-[#145A42] tracking-wider uppercase">Musyawarah Pendirian Lembaga</div>
              <h3 className="text-xl font-bold text-[#202522]">Lahirnya BMT Al-Muhajirin</h3>
              <p className="text-[16px] text-[#6B746F] leading-[1.75] max-w-3xl">
                BMT Al-Muhajirin resmi didirikan pada 14 Agustus 1998 atas inisiatif 26 orang tokoh masyarakat dan perintis di Toili dengan menghimpun modal awal sebesar Rp8.488.000, bermaksud menyediakan permodalan halal tanpa bunga.
              </p>
            </div>

            {/* 16 November 1998 - Operasional Perdana */}
            <div className="relative space-y-2">
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0B3D2E] border-4 border-white"></div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">16 November 1998</div>
              <div className="text-xs font-bold text-[#145A42] tracking-wider uppercase">Peresmian Kantor Pertama</div>
              <h3 className="text-xl font-bold text-[#202522]">Mulai Beroperasi di Kompleks Pasar Cendana Pura</h3>
              <p className="text-[16px] text-[#6B746F] leading-[1.75] max-w-3xl">
                Operasional resmi diresmikan pada 16 November 1998. Kantor pertama berlokasi di Jl. Kompleks Pasar Cendana Pura, Kecamatan Toili, Kabupaten Banggai. Pada masa awal, pembiayaan terutama disalurkan untuk menopang pedagang kecil di kawasan Pasar Cendanapura dan Pasar Tirtakencana.
              </p>
            </div>

            {/* 28 Oktober 2003 - Badan Hukum */}
            <div className="relative space-y-2">
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0B3D2E] border-4 border-white"></div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">28 Oktober 2003</div>
              <div className="text-xs font-bold text-[#145A42] tracking-wider uppercase">Pengesahan Status Hukum Koperasi</div>
              <h3 className="text-xl font-bold text-[#202522]">Pencatatan Badan Hukum Resmi No. 518/11/BH/DISKOP</h3>
              <p className="text-[16px] text-[#6B746F] leading-[1.75] max-w-3xl">
                Status badan hukum resmi tercatat dengan nomor registrasi 518/11/BH/DISKOP tertanggal 28 Oktober 2003 oleh Dinas Koperasi dan UKM, memberikan kepastian legalitas dan perlindungan penuh bagi anggota.
              </p>
            </div>

            {/* Perkembangan & Diversifikasi */}
            <div className="relative space-y-2">
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0B3D2E] border-4 border-white"></div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">Perkembangan & Kini</div>
              <div className="text-xs font-bold text-[#145A42] tracking-wider uppercase">Ekspansi Jaringan & Sektor Riil</div>
              <h3 className="text-xl font-bold text-[#202522]">Pembukaan Cabang & Unit Penggilingan Padi</h3>
              <p className="text-[16px] text-[#6B746F] leading-[1.75] max-w-3xl">
                Seiring waktu, BMT Al-Muhajirin memperluas kantor kas dan jangkauan layanan ke seluruh pelosok Kabupaten Banggai. Aktivitas usaha pun merambah ke unit usaha pendukung di sektor riil, termasuk pengoperasian fasilitas penggilingan padi untuk menyerap gabah petani serta pengolahan limbah arang briket ramah lingkungan.
              </p>
            </div>

          </div>

          <div className="pt-12 pl-2 sm:pl-4">
            <button
              onClick={() => setActivePage('sejarah')}
              className="text-[15px] font-semibold text-[#0B3D2E] hover:text-[#145A42] transition-colors inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Baca Rincian Sejarah Lembaga</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* ==================================================
          9. VISION & MISSION
          Section label: 03 — VISI & MISI
          Large serif statement: "Berjuang bersama ummat menuju kemandirian ekonomi."
          VISI followed by actual vision content.
          MISI numbered statements: 01, 02, 03, 04.
          Typography and dividers instead of cards.
         ================================================== */}
      <section className="bg-[#F7F6F1] py-24 lg:py-32 border-b border-[#202522]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-4xl mb-16 space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase block">
              03 — VISI & MISI
            </span>
            <blockquote className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0B3D2E] leading-[1.2] tracking-tight">
              “Berjuang bersama ummat menuju kemandirian ekonomi.”
            </blockquote>
          </div>

          {/* VISI Presentation */}
          <div className="py-10 border-t border-[#202522]/15 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase">
                VISI KOPERASI
              </span>
            </div>
            <div className="md:col-span-9">
              <p className="font-serif text-2xl sm:text-3xl text-[#0B3D2E] font-medium leading-snug">
                Menjadi lembaga keuangan syariah berbasis koperasi yang mandiri, amanah, profesional, dan memberikan kemaslahatan nyata bagi peningkatan taraf hidup anggota serta ummat.
              </p>
            </div>
          </div>

          {/* MISI Presentation: Numbered Statements 01 - 04 (No Cards!) */}
          <div className="pt-10 border-t border-[#202522]/15">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase block">
                MISI KOPERASI
              </span>
            </div>

            <div className="divide-y divide-[#202522]/15">
              
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="md:col-span-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">01</span>
                </div>
                <div className="md:col-span-10 space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#202522]">
                    Pelayanan Keuangan Berbasis Syariah Tanpa Riba
                  </h3>
                  <p className="text-[16px] text-[#6B746F] leading-[1.75]">
                    Menyelenggarakan penghimpunan dana simpanan dan penyaluran pembiayaan yang memegang teguh kaidah syariat Islam, bersih dari riba, gharar, dan maysir.
                  </p>
                </div>
              </div>

              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="md:col-span-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">02</span>
                </div>
                <div className="md:col-span-10 space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#202522]">
                    Pemberdayaan Pelaku Usaha Mikro dan Pedagang Pasar
                  </h3>
                  <p className="text-[16px] text-[#6B746F] leading-[1.75]">
                    Mendampingi serta memperkuat permodalan pedagang pasar tradisional, petani, dan perintis UMKM agar mandiri secara ekonomi dan terlindungi dari rentenir.
                  </p>
                </div>
              </div>

              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="md:col-span-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">03</span>
                </div>
                <div className="md:col-span-10 space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#202522]">
                    Penguatan Ketahanan Pangan Melalui Unit Sektor Riil
                  </h3>
                  <p className="text-[16px] text-[#6B746F] leading-[1.75]">
                    Mengembangkan unit usaha penggilingan padi dan produk briket lokal untuk menciptakan nilai tambah langsung bagi hasil panen anggota dan masyarakat Toili.
                  </p>
                </div>
              </div>

              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="md:col-span-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">04</span>
                </div>
                <div className="md:col-span-10 space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#202522]">
                    Tata Kelola Transparan dan Kesejahteraan Anggota
                  </h3>
                  <p className="text-[16px] text-[#6B746F] leading-[1.75]">
                    Menjalankan manajemen akuntansi dan pelaporan yang akuntabel, pengawasan syariah yang ketat, serta membagikan Sisa Hasil Usaha (SHU) secara adil.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          10. PRODUCTS & SERVICES
          Section label: 04 — PRODUK & LAYANAN
          Headline: "Layanan yang tumbuh bersama kebutuhan anggota."
          Clean horizontal rows:
          01 Simpanan
          02 Pembiayaan
          03 Layanan Anggota
          04 Produk Unggulan
          Separated by thin horizontal line.
         ================================================== */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#202522]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase block mb-3">
              04 — PRODUK & LAYANAN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B3D2E] tracking-tight leading-[1.2]">
              Layanan yang tumbuh bersama kebutuhan anggota.
            </h2>
          </div>

          {/* Clean Horizontal Rows with Thin Dividers (No Cards!) */}
          <div className="border-t border-[#202522]/15 divide-y divide-[#202522]/15">
            
            {/* 01 Simpanan */}
            <div className="py-9 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-[#F7F6F1]/50 transition-colors px-2 -mx-2">
              <div className="md:col-span-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#145A42]">01</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold text-[#0B3D2E] group-hover:text-[#145A42] transition-colors">
                  Simpanan
                </h3>
                <span className="text-xs font-medium text-[#6B746F]">Akad Wadi’ah & Mudharabah</span>
              </div>
              <div className="md:col-span-5">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Simpanan sukarela titipan amanah yang bebas biaya administrasi bulanan, serta simpanan berjangka dengan bagi hasil kompetitif yang halal dan barokah.
                </p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <button
                  onClick={() => setActivePage('produk-layanan', 'simpanan')}
                  className="text-sm font-semibold text-[#0B3D2E] hover:text-[#145A42] inline-flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <span>Lihat Rincian</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 02 Pembiayaan */}
            <div className="py-9 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-[#F7F6F1]/50 transition-colors px-2 -mx-2">
              <div className="md:col-span-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#145A42]">02</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold text-[#0B3D2E] group-hover:text-[#145A42] transition-colors">
                  Pembiayaan
                </h3>
                <span className="text-xs font-medium text-[#6B746F]">Akad Murabahah & Salam</span>
              </div>
              <div className="md:col-span-5">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Solusi permodalan pengadaan barang dagangan pasar, modal musim tanam padi bagi petani, dengan skema jual beli transparan tanpa bunga berlipat.
                </p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <button
                  onClick={() => setActivePage('produk-layanan', 'pembiayaan')}
                  className="text-sm font-semibold text-[#0B3D2E] hover:text-[#145A42] inline-flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <span>Lihat Rincian</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 03 Layanan Anggota */}
            <div className="py-9 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-[#F7F6F1]/50 transition-colors px-2 -mx-2">
              <div className="md:col-span-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#145A42]">03</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold text-[#0B3D2E] group-hover:text-[#145A42] transition-colors">
                  Layanan Anggota
                </h3>
                <span className="text-xs font-medium text-[#6B746F]">Kas Keliling & Sektor Riil</span>
              </div>
              <div className="md:col-span-5">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Layanan jemput bola transaksi ke lapak pedagang pasar tradisional, fasilitas unit penggilingan padi, dan kemudahan pembayaran tagihan harian (PPOB).
                </p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <button
                  onClick={() => setActivePage('produk-layanan', 'layanan')}
                  className="text-sm font-semibold text-[#0B3D2E] hover:text-[#145A42] inline-flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <span>Lihat Rincian</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 04 Produk Unggulan */}
            <div className="py-9 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-[#F7F6F1]/50 transition-colors px-2 -mx-2">
              <div className="md:col-span-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#145A42]">04</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold text-[#0B3D2E] group-hover:text-[#145A42] transition-colors">
                  Produk Unggulan
                </h3>
                <span className="text-xs font-medium text-[#6B746F]">Simpanan Qurban & Pinjaman Kebajikan</span>
              </div>
              <div className="md:col-span-5">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Program tabungan ibadah berkala dan fasilitas pinjaman kebajikan tanpa margin (Qardhul Hasan) dari dana sosial baitul maal bagi anggota yang membutuhkan.
                </p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <button
                  onClick={() => setActivePage('produk-layanan', 'unggulan')}
                  className="text-sm font-semibold text-[#0B3D2E] hover:text-[#145A42] inline-flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <span>Lihat Rincian</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          <div className="pt-10">
            <button
              onClick={() => setActivePage('produk-layanan')}
              className="text-[15px] font-semibold text-[#0B3D2E] hover:text-[#145A42] transition-colors inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Jelajahi Seluruh Produk & Layanan</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* ==================================================
          11. MEMBERSHIP
          Section label: 05 — KEANGGOTAAN
          Headline: "Menjadi bagian dari gerakan ekonomi bersama."
          Numbered process:
          01 Pahami persyaratan
          02 Lengkapi dokumen
          03 Ajukan keanggotaan
          04 Mulai menjadi bagian dari BMT Al-Muhajirin
          Large numbers and typography (No generic 4 cards!).
          CTA: "Pelajari Cara Bergabung →"
         ================================================== */}
      <section className="bg-[#F7F6F1] py-24 lg:py-32 border-b border-[#202522]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase block mb-3">
              05 — KEANGGOTAAN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B3D2E] tracking-tight leading-[1.2]">
              Menjadi bagian dari gerakan ekonomi bersama.
            </h2>
            <p className="text-[17px] text-[#6B746F] leading-[1.7] mt-4">
              Setiap anggota adalah pemilik yang sah, memiliki hak suara dalam musyawarah, dan berhak atas pembagian sisa hasil usaha secara adil dan transparan.
            </p>
          </div>

          {/* Numbered Process 01 to 04 with generous typography and dividers */}
          <div className="border-t border-[#202522]/15 divide-y divide-[#202522]/15">
            
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">01</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-bold text-[#202522]">Pahami persyaratan</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Warga Negara Indonesia, berakal sehat, berdomisili atau memiliki aktivitas usaha di wilayah Kabupaten Banggai, dan menyepakati Anggaran Dasar Koperasi.
                </p>
              </div>
            </div>

            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">02</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-bold text-[#202522]">Lengkapi dokumen</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Menyiapkan salinan Kartu Tanda Penduduk (KTP) yang sah, Kartu Keluarga (KK), serta pas foto untuk pengisian buku anggota resmi.
                </p>
              </div>
            </div>

            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">03</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-bold text-[#202522]">Ajukan keanggotaan</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Mengisi formulir permohonan keanggotaan secara daring atau langsung di kantor cabang terdekat, disertai setoran Simpanan Pokok dan Simpanan Wajib awal.
                </p>
              </div>
            </div>

            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">04</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-bold text-[#202522]">Mulai menjadi bagian dari BMT Al-Muhajirin</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Menerima nomor anggota resmi dan buku tabungan. Anda langsung berhak menikmati seluruh layanan simpanan syariah, pengajuan pembiayaan, dan pembagian SHU tahunan.
                </p>
              </div>
            </div>

          </div>

          <div className="pt-10 flex flex-col sm:flex-row sm:items-center gap-6">
            <button
              onClick={() => setActivePage('keanggotaan')}
              className="text-[15px] font-semibold text-[#0B3D2E] hover:text-[#145A42] transition-colors inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Pelajari Cara Bergabung</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onOpenMembership}
              className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-sm font-semibold px-6 py-2.5 rounded-[2px] transition-colors cursor-pointer w-fit"
            >
              Daftar Sekarang
            </button>
          </div>

        </div>
      </section>

      {/* ==================================================
          12. ORGANIZATION
          Section label: 06 — STRUKTUR ORGANISASI
          Formal organizational hierarchy, clean lines, typography, subtle borders.
          Avoid large profile cards with circular portraits.
         ================================================== */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#202522]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase block mb-3">
              06 — STRUKTUR ORGANISASI
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B3D2E] tracking-tight leading-[1.2]">
              Tata Kelola Kelembagaan yang Terstruktur & Akuntabel
            </h2>
            <p className="text-[17px] text-[#6B746F] leading-[1.7] mt-4">
              Pemisahan tugas yang tegas antara kedaulatan Rapat Anggota, pengawasan syariah, kepengurusan amanah, serta manajemen pelaksana profesional.
            </p>
          </div>

          {/* Institutional Hierarchy Diagram with clean lines and typography */}
          <div className="space-y-8">
            
            {/* Tier 1: RAT (Rapat Anggota Tahunan) */}
            <div className="border border-[#202522]/15 p-6 bg-[#F7F6F1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                  Kekuasaan Tertinggi Koperasi
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                  Rapat Anggota Tahunan (RAT)
                </h3>
              </div>
              <p className="text-xs text-[#6B746F] sm:max-w-md sm:text-right">
                Forum pemegang kedaulatan tertinggi yang menetapkan kebijakan umum, anggaran dasar, serta menerima pertanggungjawaban tahunan.
              </p>
            </div>

            {/* Tier 2: Two Parallel Pillars (Pengawas Syariah & Pengawas Operasional) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="border border-[#202522]/15 p-6 space-y-3">
                <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                  Kepatuhan Syariat
                </span>
                <h4 className="font-serif text-xl font-bold text-[#0B3D2E]">
                  Dewan Pengawas Syariah (DPS)
                </h4>
                <div className="text-sm text-[#202522] space-y-1">
                  <p className="font-semibold text-xs text-[#6B746F] uppercase">Ketua & Anggota DPS:</p>
                  <p className="font-medium">[Nama Ketua Dewan Pengawas Syariah]</p>
                  <p className="font-medium text-xs text-[#6B746F]">[Nama Anggota DPS - Rekomendasi DSN-MUI]</p>
                </div>
                <p className="text-xs text-[#6B746F] leading-relaxed pt-1">
                  Memastikan seluruh transaksi, akad pembiayaan, dan produk simpanan senantiasa sesuai kaidah fiqih muamalah Islam.
                </p>
              </div>

              <div className="border border-[#202522]/15 p-6 space-y-3">
                <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                  Pengawasan Tata Kelola
                </span>
                <h4 className="font-serif text-xl font-bold text-[#0B3D2E]">
                  Badan Pengawas Operasional
                </h4>
                <div className="text-sm text-[#202522] space-y-1">
                  <p className="font-semibold text-xs text-[#6B746F] uppercase">Pengawas Koperasi:</p>
                  <p className="font-medium">[Nama Ketua Pengawas Operasional]</p>
                  <p className="font-medium text-xs text-[#6B746F]">[Nama Anggota Pengawas Internal]</p>
                </div>
                <p className="text-xs text-[#6B746F] leading-relaxed pt-1">
                  Melakukan audit berkala, mengawasi kepatuhan tata kelola, dan melindungi hak-hak seluruh anggota koperasi.
                </p>
              </div>

            </div>

            {/* Tier 3: Pengurus Harian */}
            <div className="border border-[#202522]/15 p-6 space-y-4">
              <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                Pimpinan Kebijakan & Kepengurusan
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                Dewan Pengurus Koperasi
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-[#202522]/10">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#145A42] uppercase">Ketua Pengurus</span>
                  <p className="font-medium text-sm text-[#202522]">[Nama Ketua Pengurus]</p>
                  <p className="text-xs text-[#6B746F]">Periode Kepengurusan Resmi 2023 - 2028</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#145A42] uppercase">Sekretaris</span>
                  <p className="font-medium text-sm text-[#202522]">[Nama Sekretaris Pengurus]</p>
                  <p className="text-xs text-[#6B746F]">Administrasi & Legalitas Keanggotaan</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#145A42] uppercase">Bendahara</span>
                  <p className="font-medium text-sm text-[#202522]">[Nama Bendahara Pengurus]</p>
                  <p className="text-xs text-[#6B746F]">Perbendaharaan & Likuiditas Dana</p>
                </div>
              </div>
            </div>

            {/* Tier 4: Manajemen Pelaksana & Unit Usaha */}
            <div className="border border-[#202522]/15 p-6 bg-[#F7F6F1] space-y-3">
              <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                Manajemen Operasional & Eksekutif
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#202522]">
                <div>
                  <span className="font-semibold block text-xs text-[#6B746F] uppercase">Operasional & Kas:</span>
                  <span className="font-medium">[Nama Manajer Operasional]</span>
                </div>
                <div>
                  <span className="font-semibold block text-xs text-[#6B746F] uppercase">Sektor Riil & Padi:</span>
                  <span className="font-medium">[Nama Kepala Unit Usaha Riil]</span>
                </div>
                <div>
                  <span className="font-semibold block text-xs text-[#6B746F] uppercase">Jaringan Cabang Toili:</span>
                  <span className="font-medium">[Nama Kepala Cabang & Kas Lapangan]</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8">
            <button
              onClick={() => setActivePage('struktur-organisasi')}
              className="text-[15px] font-semibold text-[#0B3D2E] hover:text-[#145A42] transition-colors inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Lihat Detail Tata Kelola Organisasi</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* ==================================================
          13. NEWS & INFORMATION
          Section label: 07 — INFORMASI
          ONE large featured article + TWO smaller articles.
          Authentic photography, publication date, category, headline, excerpt.
          CTA: "Lihat Semua Informasi →"
         ================================================== */}
      <section className="bg-[#F7F6F1] py-24 lg:py-32 border-b border-[#202522]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase block mb-3">
                07 — INFORMASI
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B3D2E] tracking-tight leading-[1.2]">
                Warta, Edukasi & Pengumuman Koperasi
              </h2>
            </div>
            <button
              onClick={() => setActivePage('berita')}
              className="text-[15px] font-semibold text-[#0B3D2E] hover:text-[#145A42] transition-colors inline-flex items-center gap-1.5 cursor-pointer py-1"
            >
              <span>Lihat Semua Informasi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Layout: ONE large featured article + TWO smaller articles */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Large Featured Article */}
            <div
              onClick={() => onSelectArticle(featuredArticle)}
              className="lg:col-span-7 bg-white border border-[#202522]/12 overflow-hidden group cursor-pointer"
            >
              <div className="h-64 sm:h-80 overflow-hidden bg-slate-100">
                <img
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs text-[#6B746F] font-medium flex items-center gap-3">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span className="text-[#145A42] font-semibold">{featuredArticle.category}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#202522] group-hover:text-[#0B3D2E] transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>
                <p className="text-[16px] text-[#6B746F] leading-[1.75] line-clamp-2">
                  {featuredArticle.excerpt}
                </p>
                <div className="pt-2 text-sm font-semibold text-[#0B3D2E] inline-flex items-center gap-1">
                  <span>Baca selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* TWO Smaller Articles */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              {sideArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => onSelectArticle(art)}
                  className="bg-white border border-[#202522]/12 p-6 space-y-3 group cursor-pointer hover:border-[#0B3D2E]/40 transition-colors"
                >
                  <div className="text-xs text-[#6B746F] font-medium flex items-center gap-2">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span className="text-[#145A42] font-semibold">{art.category}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#202522] group-hover:text-[#0B3D2E] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-sm text-[#6B746F] leading-relaxed line-clamp-2">
                    {art.excerpt}
                  </p>
                  <div className="pt-1 text-xs font-semibold text-[#0B3D2E] inline-flex items-center gap-1">
                    <span>Baca artikel</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          14. GALLERY
          Section label: GALERI
          Large photography, asymmetric masonry layout, natural image ratios, minimal borders.
          Categories: Foto, Video
         ================================================== */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#202522]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase block mb-3">
                GALERI DOKUMENTASI
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B3D2E] tracking-tight leading-[1.2]">
                Dokumentasi Kegiatan & Pengabdian
              </h2>
            </div>

            {/* Category Toggle: Foto / Video */}
            <div className="inline-flex border border-[#202522]/20 p-1 bg-[#F7F6F1]">
              <button
                onClick={() => setGalleryCategory('Foto')}
                className={`px-5 py-1.5 text-xs font-semibold cursor-pointer transition-colors ${
                  galleryCategory === 'Foto'
                    ? 'bg-[#0B3D2E] text-white'
                    : 'text-[#202522] hover:text-[#0B3D2E]'
                }`}
              >
                Foto Dokumentasi
              </button>
              <button
                onClick={() => setGalleryCategory('Video')}
                className={`px-5 py-1.5 text-xs font-semibold cursor-pointer transition-colors ${
                  galleryCategory === 'Video'
                    ? 'bg-[#0B3D2E] text-white'
                    : 'text-[#202522] hover:text-[#0B3D2E]'
                }`}
              >
                Video Liputan
              </button>
            </div>
          </div>

          {/* Asymmetric Masonry Gallery */}
          {galleryCategory === 'Foto' ? (
            <div className="grid grid-cols-12 gap-6">
              {photoGallery.map((item) => (
                <div
                  key={item.id}
                  className={`${item.aspect} border border-[#202522]/12 overflow-hidden relative group bg-[#F7F6F1]`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/90 via-[#0B3D2E]/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                    <span className="text-[11px] font-bold tracking-wider text-[#B69A5A] uppercase">
                      {item.subtitle}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-6">
              {videoGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveVideoModal(item.title)}
                  className={`${item.aspect} border border-[#202522]/12 overflow-hidden relative group bg-[#0B3D2E] cursor-pointer`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#0B3D2E]/80 text-white flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0B3D2E] to-transparent text-white space-y-1">
                    <span className="text-xs text-[#B69A5A] font-semibold tracking-wider uppercase">
                      Durasi {item.duration} • {item.subtitle}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pt-10 flex items-center justify-between">
            <button
              onClick={() => setActivePage('galeri')}
              className="text-[15px] font-semibold text-[#0B3D2E] hover:text-[#145A42] transition-colors inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Buka Seluruh Arsip Galeri</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <span className="text-xs text-[#6B746F]">Dokumentasi resmi BMT Al-Muhajirin Toili</span>
          </div>

        </div>
      </section>

      {/* ==================================================
          15. LEGALITY / CREDIBILITY
          Section label: LEGALITAS
          Display official legal information in a restrained format.
          Nomor Badan Hukum: 518/11/BH/DISKOP
          Tanggal: 28 Oktober 2003
         ================================================== */}
      <section className="bg-[#F7F6F1] py-20 lg:py-28 border-b border-[#202522]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold tracking-[0.2em] text-[#145A42] uppercase block">
                LEGALITAS & PERIZINAN
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E] tracking-tight leading-[1.2]">
                Kepastian Hukum & Kepatuhan Regulasi
              </h2>
              <p className="text-[16px] text-[#6B746F] leading-[1.75]">
                KSU Syariah BMT Al-Muhajirin beroperasi secara sah berdasarkan hukum Republik Indonesia dan diawasi oleh instansi yang berwenang di bidang perkoperasian dan syariat Islam.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActivePage('legalitas')}
                  className="text-sm font-semibold text-[#0B3D2E] hover:text-[#145A42] inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Lihat Dokumen Perizinan Lengkap</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Restrained Institutional Legal Specs */}
            <div className="lg:col-span-7 bg-white border border-[#202522]/12 p-8 divide-y divide-[#202522]/10 shadow-sm">
              
              <div className="pb-5 space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#145A42]" />
                  <span className="text-xs font-bold text-[#145A42] uppercase tracking-wider">
                    Nomor Badan Hukum Koperasi
                  </span>
                </div>
                <div className="font-serif text-2xl font-bold text-[#0B3D2E] pt-1">
                  518/11/BH/DISKOP
                </div>
                <p className="text-xs text-[#6B746F]">
                  Tanggal Pengesahan: <strong className="text-[#202522]">28 Oktober 2003</strong> oleh Dinas Koperasi dan UKM Kabupaten Banggai.
                </p>
              </div>

              <div className="py-5 space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#145A42]" />
                  <span className="text-xs font-bold text-[#145A42] uppercase tracking-wider">
                    Bentuk Usaha & Kategori
                  </span>
                </div>
                <div className="text-lg font-bold text-[#202522]">
                  Koperasi Simpan Pinjam dan Pembiayaan Syariah (KSPPS)
                </div>
                <p className="text-xs text-[#6B746F]">
                  Menaungi unit usaha Baitut Tamwil, Baitul Maal, dan Unit Sektor Riil Pertanian.
                </p>
              </div>

              <div className="pt-5 space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#145A42]" />
                  <span className="text-xs font-bold text-[#145A42] uppercase tracking-wider">
                    Kepatuhan Syariat & Pengawasan
                  </span>
                </div>
                <div className="text-lg font-bold text-[#202522]">
                  Rekomendasi Dewan Pengawas Syariah (DPS)
                </div>
                <p className="text-xs text-[#6B746F]">
                  Memenuhi fatwa Dewan Syariah Nasional Majelis Ulama Indonesia (DSN-MUI).
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          16. FINAL CTA
          Dark forest green background (#0B3D2E).
          Headline: "Berjuang bersama untuk masa depan ekonomi yang lebih mandiri."
          Supporting text: "Kenali BMT Al-Muhajirin dan temukan layanan yang sesuai dengan kebutuhan Anda."
          Button: "Menjadi Anggota"
          Secondary text link: "Hubungi Kami →"
         ================================================== */}
      <section className="bg-[#0B3D2E] text-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-7">
          
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="w-2 h-2 rounded-full bg-[#B69A5A]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#B69A5A] uppercase">
              BMT AL-MUHAJIRIN
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2]">
            Berjuang bersama untuk masa depan ekonomi yang lebih mandiri.
          </h2>

          <p className="text-[17px] sm:text-[19px] text-[#F7F6F1]/80 leading-[1.75] max-w-2xl mx-auto">
            Kenali BMT Al-Muhajirin dan temukan layanan yang sesuai dengan kebutuhan Anda.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-center gap-6">
            <button
              id="final-cta-membership-btn"
              onClick={onOpenMembership}
              className="bg-white text-[#0B3D2E] hover:bg-[#F7F6F1] text-[15px] font-bold px-8 py-3.5 rounded-[2px] transition-colors duration-150 cursor-pointer shadow-none tracking-wide"
            >
              Menjadi Anggota
            </button>

            <button
              id="final-cta-contact-btn"
              onClick={() => setActivePage('kontak')}
              className="text-[15px] font-semibold text-white/90 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer py-2 group"
            >
              <span>Hubungi Kami</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="pt-6 text-xs text-[#F7F6F1]/50 font-serif italic">
            "Berjuang Bersama Ummat Keluar Dari Riba" • Toili, Kabupaten Banggai
          </div>

        </div>
      </section>

      {/* Video Modal Placeholder */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full p-6 space-y-4 border border-[#202522]/20">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-[#0B3D2E]">
                {activeVideoModal}
              </h3>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="text-sm font-semibold text-[#6B746F] hover:text-[#202522] cursor-pointer"
              >
                Tutup
              </button>
            </div>
            <div className="h-64 bg-slate-100 flex flex-col items-center justify-center text-center p-6 text-[#6B746F] border border-dashed border-[#202522]/20">
              <Play className="w-12 h-12 text-[#0B3D2E] mb-2" />
              <p className="text-sm font-medium text-[#202522]">Video Liputan Dokumenter</p>
              <p className="text-xs text-[#6B746F] mt-1">Dokumentasi resmi arsip kegiatan BMT Al-Muhajirin Toili.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
