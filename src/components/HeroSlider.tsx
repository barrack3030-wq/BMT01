import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PageType } from '../types';

interface HeroSliderProps {
  setActivePage: (page: PageType, subSection?: string) => void;
}

const slides = [
  { image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=88', alt: 'Gedung dan lingkungan kantor' },
  { image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=88', alt: 'Lingkungan pelayanan profesional' },
  { image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=88', alt: 'Aktivitas dan kebersamaan anggota' },
];

export function HeroSlider({ setActivePage }: HeroSliderProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#06451F] text-white">
      {slides.map((slide, index) => (
        <div key={slide.image} className={`absolute inset-0 transition-opacity duration-1000 ${index === active ? 'opacity-100' : 'opacity-0'}`} aria-hidden={index !== active}>
          <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
        </div>
      ))}

      {/* Refined green brand wash: keep the BMT identity while revealing more photographic detail. */}
      <div className="absolute inset-0 bg-[#06451F]/50 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[#06451F]/25" />

      <div className="relative z-10 flex min-h-[calc(100vh-72px)] items-center justify-center px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-white">BMT AL-MUHAJIRIN</p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Membangun Kemandirian
            <span className="block">Ekonomi Ummat</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">
            Berjuang bersama anggota untuk membangun ekonomi yang lebih mandiri melalui layanan keuangan berbasis koperasi dan prinsip syariah.
          </p>
          <div className="mt-9 flex justify-center">
            <button
              type="button"
              onClick={() => setActivePage('profil')}
              className="group inline-flex min-w-[205px] items-center justify-center gap-3 rounded-[4px] border border-white/60 bg-white px-8 py-4 text-sm font-bold text-[#06451F] shadow-[0_7px_18px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#F4F8E8] hover:shadow-[0_10px_24px_rgba(0,0,0,0.28)] active:translate-y-[2px]"
            >
              Kenal Lebih Dekat <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="mt-10 flex justify-center gap-2" aria-label="Pilihan foto hero">
            {slides.map((slide, index) => (
              <button key={slide.image} type="button" onClick={() => setActive(index)} aria-label={`Tampilkan foto ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === active ? 'w-10 bg-white' : 'w-5 bg-white/45 hover:bg-white/75'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
