import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface HeroSliderProps {
  setActivePage: (page: PageType, subSection?: string) => void;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=88',
    alt: 'Tampilan depan dan lingkungan kantor',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=88',
    alt: 'Lingkungan kerja koperasi yang profesional',
  },
  {
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=88',
    alt: 'Aktivitas pelayanan dan kebersamaan anggota',
  },
];

export function HeroSlider({ setActivePage }: HeroSliderProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#075126] text-white">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === active ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={index !== active}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}

      {/* Brand-colored cinematic overlay */}
      <div className="absolute inset-0 bg-[#063D1D]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#063D1D]/35 via-[#075126]/45 to-[#042A16]/70" />

      {/* Centered institutional hero */}
      <div className="relative z-10 flex min-h-[calc(100vh-72px)] items-center justify-center px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white">
            <span className="h-2 w-2 rounded-full bg-[#B4D334] shadow-[0_0_0_4px_rgba(180,211,52,0.18)]" />
            <span>BMT AL-MUHAJIRIN</span>
          </div>

          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Membangun Kemandirian
            <span className="block">Ekonomi Ummat</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            Berjuang bersama anggota untuk membangun ekonomi yang lebih mandiri melalui layanan keuangan berbasis koperasi dan prinsip syariah.
          </p>

          {/* Premium dimensional CTA */}
          <div className="mt-10 flex justify-center">
            <button
              id="hero-primary-cta"
              onClick={() => setActivePage('profil')}
              className="group relative inline-flex min-w-[205px] items-center justify-center gap-3 rounded-[4px] border border-[#CBE66A]/70 bg-gradient-to-b from-[#A8D63D] to-[#79B52C] px-8 py-4 text-sm font-bold text-[#063D1D] shadow-[0_3px_0_#4C831D,0_12px_28px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#B7E34C] hover:to-[#86C936] hover:shadow-[0_4px_0_#4C831D,0_16px_34px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.6)] active:translate-y-[2px] active:shadow-[0_1px_0_#4C831D,0_7px_16px_rgba(0,0,0,0.22)]"
            >
              <span>Kenal Lebih Dekat</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2" aria-label="Pilihan foto hero">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Tampilkan foto ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === active ? 'w-11 bg-[#B4D334] shadow-[0_0_8px_rgba(180,211,52,0.45)]' : 'w-5 bg-white/45 hover:bg-white/75'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 sm:flex">
        <ArrowDown className="h-3.5 w-3.5" />
        Jelajahi
      </div>
    </section>
  );
}
