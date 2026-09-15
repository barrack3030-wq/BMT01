import { X, ArrowRight } from 'lucide-react';
import { ProductItem } from '../types';
import { COOP_INFO } from '../data/cooperativeData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenMembership: () => void;
}

export function ProductDetailModal({ product, onClose, onOpenMembership }: ProductDetailModalProps) {
  if (!product) return null;

  const handleWhatsAppConsult = () => {
    const text = encodeURIComponent(`Assalamu'alaikum, saya ingin berkonsultasi mengenai produk: ${product.name} di BMT Al Muhajirin Toili.`);
    window.open(`https://wa.me/62${COOP_INFO.headOffice.whatsapp.replace(/[^0-9]/g, '').slice(1)}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-[6px] max-w-2xl w-full border border-[#202522]/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B3D2E] text-white p-6 relative">
          <button
            id="close-product-detail-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5 text-xs text-emerald-300 font-semibold uppercase tracking-wider">
            <span>Kategori: {product.category}</span>
            {product.akad && (
              <>
                <span>•</span>
                <span>Akad Syariah: {product.akad}</span>
              </>
            )}
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white">{product.name}</h3>
          <p className="text-xs text-white/80 mt-1">{product.shortDesc}</p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 text-sm text-[#202522] max-h-[70vh] overflow-y-auto">
          
          <div>
            <h4 className="font-bold text-[#0B3D2E] text-base mb-2">Penjelasan Produk</h4>
            <p className="text-[#6B746F] leading-relaxed text-sm">
              {product.fullDesc || product.shortDesc}
            </p>
          </div>

          {product.targetUser && (
            <div className="bg-[#F7F7F3] p-4 rounded-[4px] border border-[#202522]/10 text-xs">
              <span className="font-bold text-[#202522] block mb-1">Peruntukan / Sasaran:</span>
              <span className="text-[#6B746F]">{product.targetUser}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            {/* Keunggulan */}
            <div className="border border-[#202522]/15 p-4 rounded-[4px]">
              <h5 className="font-bold text-[#0B3D2E] text-xs uppercase tracking-wider mb-3">
                Keunggulan & Manfaat
              </h5>
              <ul className="space-y-2 text-xs text-[#6B746F]">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#0B3D2E] font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Persyaratan */}
            <div className="border border-[#202522]/15 p-4 rounded-[4px]">
              <h5 className="font-bold text-[#0B3D2E] text-xs uppercase tracking-wider mb-3">
                Dokumen Persyaratan
              </h5>
              <ul className="space-y-2 text-xs text-[#6B746F]">
                {product.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#0B3D2E] font-bold">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#F7F7F3] border-t border-[#202522]/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <button
            onClick={handleWhatsAppConsult}
            className="text-xs font-semibold text-[#0B3D2E] hover:underline cursor-pointer"
          >
            Konsultasi via WhatsApp Resmi →
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-xs text-[#6B746F] hover:text-[#202522] px-4 py-2 cursor-pointer"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenMembership();
              }}
              className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-xs font-semibold px-5 py-2.5 rounded-[4px] transition-colors cursor-pointer"
            >
              Daftar Sebagai Anggota
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
