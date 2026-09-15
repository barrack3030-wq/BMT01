import { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { ProductItem, ProductCategory } from '../types';
import { PRODUCTS_DATA } from '../data/cooperativeData';
import { FinancialCalculator } from '../components/FinancialCalculator';

interface ProdukLayananPageProps {
  initialCategory?: string;
  onSelectProduct: (product: ProductItem) => void;
  onOpenMembership: () => void;
}

export function ProdukLayananPage({ 
  initialCategory = 'semua', 
  onSelectProduct, 
  onOpenMembership 
}: ProdukLayananPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredProducts = selectedCategory === 'semua'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => {
        if (selectedCategory === 'simpanan') return p.category === 'simpanan';
        if (selectedCategory === 'pembiayaan') return p.category === 'pembiayaan';
        if (selectedCategory === 'layanan') return p.category === 'layanan';
        if (selectedCategory === 'unggulan') return p.category === 'unggulan';
        return true;
      });

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl pb-16 border-b border-[#202522]/10">
          <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-3">
            04 — PRODUK & LAYANAN SYARIAH
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B3D2E] tracking-tight leading-[1.15]">
            Layanan Keuangan Syariah & Sektor Riil
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[#6B746F] leading-[1.7] mt-5">
            Layanan simpanan amanah, pembiayaan usaha produktif tanpa bunga, serta sarana pengolahan hasil panen untuk kemakmuran bersama anggota di Toili dan sekitarnya.
          </p>
        </div>

        {/* Category Filter: Minimal Tabs */}
        <div className="py-8 flex flex-wrap items-center gap-2 sm:gap-3 border-b border-[#202522]/10 text-sm">
          <button
            onClick={() => setSelectedCategory('semua')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer border ${
              selectedCategory === 'semua'
                ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                : 'bg-white text-[#202522] border-[#202522]/20 hover:border-[#0B3D2E]'
            }`}
          >
            Semua ({PRODUCTS_DATA.length})
          </button>

          <button
            onClick={() => setSelectedCategory('simpanan')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer border ${
              selectedCategory === 'simpanan'
                ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                : 'bg-white text-[#202522] border-[#202522]/20 hover:border-[#0B3D2E]'
            }`}
          >
            Simpanan
          </button>

          <button
            onClick={() => setSelectedCategory('pembiayaan')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer border ${
              selectedCategory === 'pembiayaan'
                ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                : 'bg-white text-[#202522] border-[#202522]/20 hover:border-[#0B3D2E]'
            }`}
          >
            Pembiayaan
          </button>

          <button
            onClick={() => setSelectedCategory('layanan')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer border ${
              selectedCategory === 'layanan'
                ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                : 'bg-white text-[#202522] border-[#202522]/20 hover:border-[#0B3D2E]'
            }`}
          >
            Layanan Anggota
          </button>

          <button
            onClick={() => setSelectedCategory('unggulan')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer border ${
              selectedCategory === 'unggulan'
                ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                : 'bg-white text-[#202522] border-[#202522]/20 hover:border-[#0B3D2E]'
            }`}
          >
            Produk Unggulan
          </button>
        </div>

        {/* Horizontal Editorial Product Rows Separated by Thin Dividers */}
        <div className="py-12 border-b border-[#202522]/15 divide-y divide-[#202522]/15">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-[#F7F6F1]/40 px-2 -mx-2 transition-colors"
            >
              {/* Product Title & Akad */}
              <div className="md:col-span-4 space-y-1">
                <span className="text-xs font-bold text-[#145A42] uppercase tracking-wider block">
                  {product.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0B3D2E] leading-snug">
                  {product.name}
                </h3>
                {product.akad && (
                  <div className="text-xs text-[#6B746F] pt-1">
                    Landasan Akad: <span className="font-semibold text-[#202522]">{product.akad}</span>
                  </div>
                )}
              </div>

              {/* Product Description & Highlights */}
              <div className="md:col-span-6 space-y-3">
                <p className="text-[16px] text-[#6B746F] leading-[1.75]">
                  {product.fullDesc || product.shortDesc}
                </p>
                {product.features && product.features.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {product.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-[#202522] flex items-baseline gap-2">
                        <span className="text-[#0B3D2E] font-bold">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="md:col-span-2 md:text-right pt-2">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="text-sm font-semibold text-[#0B3D2E] hover:text-[#145A42] inline-flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <span>Ketentuan Rinci</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Syariah Financial Calculator */}
        <div className="pt-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-2">
              SIMULASI MANDIRI
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0B3D2E]">
              Kalkulator Estimasi Simpanan & Pembiayaan
            </h2>
            <p className="text-sm text-[#6B746F] mt-2">
              Hitung simulasi bagi hasil simpanan Mudharabah atau estimasi angsuran jual beli Murabahah secara transparan.
            </p>
          </div>

          <FinancialCalculator onOpenMembership={onOpenMembership} />
        </div>

        {/* Bottom CTA Block */}
        <div className="pt-20 border-t border-[#202522]/10 mt-20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl font-bold text-[#0B3D2E]">Siap mengajukan layanan atau membuka simpanan?</h4>
            <p className="text-sm text-[#6B746F] mt-1">Daftarkan diri Anda sebagai anggota BMT Al-Muhajirin hari ini.</p>
          </div>
          <button
            onClick={onOpenMembership}
            className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-sm font-semibold px-6 py-3 rounded-[2px] transition-colors cursor-pointer"
          >
            Daftar Menjadi Anggota
          </button>
        </div>

      </div>
    </div>
  );
}
