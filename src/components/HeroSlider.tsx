import { ArrowDown, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface HeroSliderProps {
  setActivePage: (page: PageType, subSection?: string) => void;
}

export function HeroSlider({ setActivePage }: HeroSliderProps) {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#08752F] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A8135] via-[#08752F] to-[#045521]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.14),transparent_48%)]" />
      <div className="relative z-10 flex min-h-[calc(100vh-72px)] items-center justify-center px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white">
            <span className="h-2 w-2 rounded-full bg-[#D4E63D]" />
            <span>BMT AL-MUHAJIRIN</span>
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Membangun Kemandirian
            <span className="block">Ekonomi Ummat</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            Berjuang bersama anggota untuk membangun ekonomi yang lebih mandiri melalui layanan keuangan berbasis koperasi dan prinsip syariah.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              id="hero-primary-cta"
              onClick={() => setActivePage('profil')}
              className="group relative inline-flex min-w-[205px] items-center justify-center gap-3 rounded-[4px] border border-white/30 bg-white px-8 py-4 text-sm font-bold text-[#075E27] shadow-[0_8px_20px_rgba(0,0,0,0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F5F8E8] hover:shadow-[0_12px_26px_rgba(0,0,0,0.24)] active:translate-y-[2px]"
            >
              <span>Kenal Lebih Dekat</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.16em] text-white/70">
            <span className="h-px w-10 bg-white/30" />
            <span>BERDIRI SEJAK 1998</span>
            <span className="h-px w-10 bg-white/30" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/65 sm:flex">
        <ArrowDown className="h-3.5 w-3.5" />
        Jelajahi
      </div>
    </section>
  );
}
