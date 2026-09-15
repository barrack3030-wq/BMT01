import { useState } from 'react';
import { GalleryItem } from '../types';
import { GALLERY_DATA } from '../data/cooperativeData';
import { LightboxModal } from '../components/LightboxModal';

export function GaleriPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Rhythm: 1 large, 2 small, 1 large, 2 small
  const item1 = GALLERY_DATA[0];
  const item2 = GALLERY_DATA[1];
  const item3 = GALLERY_DATA[2];
  const item4 = GALLERY_DATA[3];
  const item5 = GALLERY_DATA[4];
  const item6 = GALLERY_DATA[5];
  const remaining = GALLERY_DATA.slice(6);

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl pb-16 border-b border-[#202522]/10">
          <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-3">
            08 — ARSIP VISUAL
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B3D2E] tracking-tight leading-[1.15]">
            Galeri Kegiatan & Dokumentasi
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[#6B746F] leading-[1.7] mt-5">
            Dokumentasi visual pelayanan kantor kas, rapat anggota tahunan, aktivitas pedagang pasar binaan, serta unit usaha penggilingan padi di Toili.
          </p>
        </div>

        {/* Editorial Gallery Rhythm:
            1 Foto Besar
            2 Foto Berdampingan
            1 Foto Besar
            2 Foto Berdampingan
        */}
        <div className="py-16 space-y-16">
          
          {/* 1 Foto Besar */}
          {item1 && (
            <div 
              onClick={() => setSelectedItem(item1)}
              className="group cursor-pointer space-y-3"
            >
              <div className="border border-[#202522]/12 overflow-hidden bg-[#F7F6F1]">
                <img
                  src={item1.imageUrl}
                  alt={item1.title}
                  className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm border-b border-[#202522]/10 pb-3">
                <span className="font-serif font-bold text-lg text-[#202522] group-hover:text-[#0B3D2E] transition-colors">{item1.title}</span>
                <span className="text-xs text-[#6B746F]">{item1.category} • {item1.date}</span>
              </div>
            </div>
          )}

          {/* 2 Foto Berdampingan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {item2 && (
              <div 
                onClick={() => setSelectedItem(item2)}
                className="group cursor-pointer space-y-3"
              >
                <div className="border border-[#202522]/12 overflow-hidden bg-[#F7F6F1]">
                  <img
                    src={item2.imageUrl}
                    alt={item2.title}
                    className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm border-b border-[#202522]/10 pb-2">
                  <span className="font-serif font-bold text-[#202522] group-hover:text-[#0B3D2E] transition-colors">{item2.title}</span>
                  <span className="text-xs text-[#6B746F]">{item2.category} • {item2.date}</span>
                </div>
              </div>
            )}

            {item3 && (
              <div 
                onClick={() => setSelectedItem(item3)}
                className="group cursor-pointer space-y-3"
              >
                <div className="border border-[#202522]/12 overflow-hidden bg-[#F7F6F1]">
                  <img
                    src={item3.imageUrl}
                    alt={item3.title}
                    className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm border-b border-[#202522]/10 pb-2">
                  <span className="font-serif font-bold text-[#202522] group-hover:text-[#0B3D2E] transition-colors">{item3.title}</span>
                  <span className="text-xs text-[#6B746F]">{item3.category} • {item3.date}</span>
                </div>
              </div>
            )}
          </div>

          {/* 1 Foto Besar */}
          {item4 && (
            <div 
              onClick={() => setSelectedItem(item4)}
              className="group cursor-pointer space-y-3"
            >
              <div className="border border-[#202522]/12 overflow-hidden bg-[#F7F6F1]">
                <img
                  src={item4.imageUrl}
                  alt={item4.title}
                  className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm border-b border-[#202522]/10 pb-3">
                <span className="font-serif font-bold text-lg text-[#202522] group-hover:text-[#0B3D2E] transition-colors">{item4.title}</span>
                <span className="text-xs text-[#6B746F]">{item4.category} • {item4.date}</span>
              </div>
            </div>
          )}

          {/* 2 Foto Berdampingan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {item5 && (
              <div 
                onClick={() => setSelectedItem(item5)}
                className="group cursor-pointer space-y-3"
              >
                <div className="border border-[#202522]/12 overflow-hidden bg-[#F7F6F1]">
                  <img
                    src={item5.imageUrl}
                    alt={item5.title}
                    className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm border-b border-[#202522]/10 pb-2">
                  <span className="font-serif font-bold text-[#202522] group-hover:text-[#0B3D2E] transition-colors">{item5.title}</span>
                  <span className="text-xs text-[#6B746F]">{item5.category} • {item5.date}</span>
                </div>
              </div>
            )}

            {item6 && (
              <div 
                onClick={() => setSelectedItem(item6)}
                className="group cursor-pointer space-y-3"
              >
                <div className="border border-[#202522]/12 overflow-hidden bg-[#F7F6F1]">
                  <img
                    src={item6.imageUrl}
                    alt={item6.title}
                    className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm border-b border-[#202522]/10 pb-2">
                  <span className="font-serif font-bold text-[#202522] group-hover:text-[#0B3D2E] transition-colors">{item6.title}</span>
                  <span className="text-xs text-[#6B746F]">{item6.category} • {item6.date}</span>
                </div>
              </div>
            )}
          </div>

          {/* Remaining Photos in 3-column simple grid */}
          {remaining.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {remaining.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer space-y-2"
                >
                  <div className="border border-[#202522]/12 overflow-hidden bg-[#F7F6F1]">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-xs text-[#202522] font-medium group-hover:text-[#0B3D2E]">{item.title}</div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <LightboxModal 
          item={selectedItem} 
          items={GALLERY_DATA}
          onClose={() => setSelectedItem(null)} 
          onSelect={(item) => setSelectedItem(item)}
        />
      )}
    </div>
  );
}
