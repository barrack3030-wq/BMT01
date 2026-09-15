import type { MouseEvent } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export function LightboxModal({ item, items, onClose, onSelect }: LightboxModalProps) {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    const prevIdx = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    onSelect(items[prevIdx]);
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    const nextIdx = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    onSelect(items[nextIdx]);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#202522] border border-white/10 rounded-[6px] overflow-hidden shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-lightbox-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container with Prev/Next Navigation */}
        <div className="relative bg-black flex items-center justify-center min-h-[340px] sm:min-h-[460px] max-h-[70vh]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          <button
            id="lightbox-prev-btn"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#0B3D2E] text-white p-2.5 rounded transition-colors cursor-pointer"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            id="lightbox-next-btn"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#0B3D2E] text-white p-2.5 rounded transition-colors cursor-pointer"
            aria-label="Foto Berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption & Metadata */}
        <div className="p-6 bg-[#161B18] border-t border-white/10">
          <div className="flex flex-wrap items-center gap-3 mb-2 text-xs">
            <span className="text-emerald-400 font-semibold tracking-wider uppercase">
              {item.category}
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/60">
              {item.date}
            </span>
            <span className="text-white/40 ml-auto font-mono text-[11px]">
              Dokumentasi {currentIndex + 1} / {items.length}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{item.title}</h3>
          <p className="text-xs text-white/70 mt-1.5 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
