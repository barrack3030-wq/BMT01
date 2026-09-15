import { useState } from 'react';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { ArticleItem } from '../types';
import { ARTICLES_DATA } from '../data/cooperativeData';

interface BeritaPageProps {
  selectedArticle: ArticleItem | null;
  onSelectArticle: (article: ArticleItem | null) => void;
  onOpenMembership: () => void;
}

export function BeritaPage({ selectedArticle, onSelectArticle, onOpenMembership }: BeritaPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    return article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Single Article Reader View
  if (selectedArticle) {
    return (
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
          
          <button
            onClick={() => onSelectArticle(null)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3D2E] hover:text-[#145A42] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Warta BMT Al-Muhajirin</span>
          </button>

          <header className="space-y-4 border-b border-[#202522]/10 pb-8">
            <div className="text-xs text-[#6B746F] font-semibold tracking-wider uppercase">
              {selectedArticle.date} • {selectedArticle.category} • Oleh {selectedArticle.author}
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B3D2E] tracking-tight leading-snug">
              {selectedArticle.title}
            </h1>
          </header>

          <div className="border border-[#202522]/12 overflow-hidden bg-[#F7F6F1]">
            <img
              src={selectedArticle.imageUrl}
              alt={selectedArticle.title}
              className="w-full h-[380px] sm:h-[460px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="max-w-none text-[17px] text-[#202522] leading-[1.8] space-y-6">
            <p className="font-semibold text-lg text-[#0B3D2E] leading-relaxed font-serif">
              {selectedArticle.excerpt}
            </p>
            {selectedArticle.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="pt-12 border-t border-[#202522]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={() => onSelectArticle(null)}
              className="text-sm font-semibold text-[#0B3D2E] hover:underline"
            >
              ← Kembali ke Indeks Warta
            </button>
            <button
              onClick={onOpenMembership}
              className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-sm font-semibold px-6 py-2.5 rounded-[2px]"
            >
              Menjadi Anggota
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Article Listing View: Simple Grid, Muted Date, Editorial Style
  const featured = filteredArticles[0];
  const remaining = filteredArticles.slice(1);

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-[#202522]/10 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-3">
              07 — WARTA & PUBLIKASI
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B3D2E] tracking-tight leading-[1.15]">
              Warta & Agenda Koperasi
            </h1>
            <p className="text-[18px] sm:text-[19px] text-[#6B746F] leading-[1.7] mt-5">
              Informasi resmi terkait perkembangan kelembagaan, Rapat Anggota Tahunan (RAT), serta edukasi keuangan syariah bagi anggota BMT Al-Muhajirin.
            </p>
          </div>

          <div className="w-full md:w-72 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari berita atau pengumuman..."
              className="w-full bg-[#F7F6F1] border border-[#202522]/20 px-3.5 py-2.5 text-sm text-[#202522] placeholder:text-[#6B746F] focus:outline-none focus:border-[#0B3D2E]"
            />
          </div>
        </div>

        {/* Featured Article */}
        {featured && (
          <div className="py-16 border-b border-[#202522]/10">
            <div 
              onClick={() => onSelectArticle(featured)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group cursor-pointer"
            >
              <div className="lg:col-span-7 border border-[#202522]/12 overflow-hidden bg-[#F7F6F1]">
                <img
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs text-[#6B746F] font-semibold tracking-wider uppercase">
                  {featured.date} • {featured.category}
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#202522] group-hover:text-[#0B3D2E] transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-[16px] text-[#6B746F] leading-[1.75]">
                  {featured.excerpt}
                </p>
                <div className="pt-2 text-sm font-semibold text-[#0B3D2E] inline-flex items-center gap-1.5">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Article Rows with Thin Dividers */}
        <div className="py-12 border-b border-[#202522]/10 divide-y divide-[#202522]/15">
          {remaining.map((article) => (
            <div 
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group cursor-pointer hover:bg-[#F7F6F1]/40 px-2 -mx-2 transition-colors"
            >
              <div className="md:col-span-3">
                <span className="text-xs font-semibold text-[#6B746F] uppercase tracking-wider block">
                  {article.date}
                </span>
                <span className="text-xs text-[#145A42] font-semibold block mt-0.5">
                  {article.category}
                </span>
              </div>

              <div className="md:col-span-7 space-y-1">
                <h3 className="font-serif text-xl font-bold text-[#202522] group-hover:text-[#0B3D2E] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[#6B746F] line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="md:col-span-2 md:text-right">
                <span className="text-sm font-semibold text-[#0B3D2E] group-hover:text-[#145A42] inline-flex items-center gap-1">
                  <span>Baca</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
