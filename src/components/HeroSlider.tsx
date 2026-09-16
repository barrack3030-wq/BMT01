import { ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface HeroSliderProps {
  setActivePage: (page: PageType, subSection?: string) => void;
}

export function HeroSlider({ setActivePage }: HeroSliderProps) {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#08752F] text-white">
      <div className="relative z-10 flex min-h-[calc(100vh-72px)] items-center justify-center px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-white/95">
            <span className="h-2 w-2 rounded-full bg-[#D4E63D]" />
            <span>BMT AL-MUHAJIRIN</span>
          </div>

          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Membangun Kemandirian
            <span className="block">Ekonomi Ummat</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            Berjuang bersama anggota untuk membangun ekonomi yang lebih mandiri melalui layanan koperasi berbasis prinsip syariah.
          </p>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setActivePage('profil')}
              className="group inline-flex min-w-[210px] items-center justify-center gap-3 border border-white bg-white px-8 py-4 text-sm font-bold text-[#08752F] shadow-[0_6px_0_rgba(0,0,0,0.18),0_14px_28px_rgba(0,0,0,0.16)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#F5F8E8] hover:shadow-[0_8px_0_rgba(0,0,0,0.18),0_18px_32px_rgba(0,0,0,0.18)] active:translate-y-[2px] active:shadow-[0_2px_0_rgba(0,0,0,0.18),0_8px_16px_rgba(0,0,0,0.14)]"
            >
              <span>Kenal Lebih Dekat</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
