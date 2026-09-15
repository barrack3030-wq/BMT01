import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface HeroSliderProps {
  setActivePage: (page: PageType, subSection?: string) => void;
}

// Temporary editorial images. Replace these URLs with the real front-of-office
// photos of BMT Al-Muhajirin once the office photos are added to the repository.
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
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#0B3D2E] text-white">
      {/* Full-screen photo slider */}
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

      {/* Calm institutional overlay: keeps the photograph visible while making text readable */}
      <div className="absolute inset-0 bg-[#06281f]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06281f]/75 via-[#06281f]/35 to-[#06281f]/20" />

      {/* Centered hero content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B69A5A]" />
            <span>BMT AL-MUHAJIRIN</span>
          </div>

          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Membangun Kemandirian
            <span className="block">Ekonomi Ummat</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            Berjuang bersama anggota untuk membangun ekonomi yang lebih mandiri melalui layanan keuangan berbasis koperasi dan prinsip syariah.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              id="hero-primary-cta"
              onClick={() => setActivePage('profil')}
              className="inline-flex items-center justify-center gap-2 border border-white bg-white px-7 py-3.5 text-sm font-semibold text-[#0B3D2E] transition-colors hover:bg-white/90"
            >
              Kenal Lebih Dekat
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2" aria-label="Pilihan foto hero">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Tampilkan foto ${index + 1}`}
                className={`h-1 transition-all duration-300 ${index === active ? 'w-10 bg-white' : 'w-5 bg-white/45 hover:bg-white/70'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:flex">
        <ArrowDown className="h-3.5 w-3.5" />
        Jelajahi
      </div>
    </section>
  );
}
