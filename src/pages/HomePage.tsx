import { ArrowRight, Landmark, HandCoins, Users } from 'lucide-react';
import { PageType, ProductItem, ArticleItem } from '../types';
import { HeroSlider } from '../components/HeroSlider';
import { ARTICLES_DATA } from '../data/cooperativeData';

interface HomePageProps {
  setActivePage: (page: PageType, subSection?: string) => void;
  onOpenMembership: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export function HomePage({ setActivePage, onOpenMembership, onSelectArticle }: HomePageProps) {
  const featuredArticle = ARTICLES_DATA.find((article) => article.isFeatured) ?? ARTICLES_DATA[0];
  const secondaryArticles = ARTICLES_DATA.filter((article) => article.id !== featuredArticle?.id).slice(0, 3);

  return (
    <div className="home-page-active bg-white text-[#24302A]">
      <HeroSlider setActivePage={setActivePage} />

      {featuredArticle && (
        <section className="border-b border-[#DCE5D5] bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-9 flex flex-col gap-3 border-b border-[#D5E0CE] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4D8C28]">Kegiatan</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-[#174D2C] sm:text-4xl">Berita Utama</h2>
              </div>
              <button
                type="button"
                onClick={() => setActivePage('berita')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#174D2C] transition-colors hover:text-[#4D8C28]"
              >
                Lihat semua berita <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-7 lg:grid-cols-12">
              <article
                role="button"
                tabIndex={0}
                onClick={() => onSelectArticle(featuredArticle)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') onSelectArticle(featuredArticle);
                }}
                className="group cursor-pointer text-left lg:col-span-6"
              >
                <div className="overflow-hidden bg-[#EEF3EA]">
                  <img
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    className="aspect-[1.45/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="pt-5">
                  <p className="text-xs font-semibold text-[#718078]">{featuredArticle.category} • {featuredArticle.date}</p>
                  <h3 className="mt-2 max-w-2xl font-serif text-2xl font-semibold leading-tight text-[#174D2C] sm:text-3xl">
                    {featuredArticle.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#66736C]">{featuredArticle.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#174D2C]">
                    Baca selengkapnya <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>

              <div className="divide-y divide-[#D5E0CE] lg:col-span-6">
                {secondaryArticles.map((article) => (
                  <article
                    key={article.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => onSelectArticle(article)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') onSelectArticle(article);
                    }}
                    className="group grid cursor-pointer gap-5 py-5 first:pt-0 last:pb-0 sm:grid-cols-[190px_1fr] lg:grid-cols-[190px_1fr]"
                  >
                    <div className="overflow-hidden bg-[#EEF3EA]">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="aspect-[1.45/1] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="self-center">
                      <p className="text-xs font-semibold text-[#718078]">{article.author} • {article.date}</p>
                      <h3 className="mt-2 font-serif text-xl font-semibold leading-tight text-[#174D2C]">{article.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#66736C]">{article.excerpt}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#174D2C]">
                        Selengkapnya <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#F6F8F2] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 border-b border-[#D5E0CE] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4D8C28]">Layanan Utama</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-[#174D2C] sm:text-4xl">Untuk kebutuhan anggota</h2>
            </div>
            <button type="button" onClick={() => setActivePage('produk-layanan')} className="inline-flex items-center gap-2 text-sm font-semibold text-[#174D2C] hover:text-[#4D8C28]">
              Lihat semua layanan <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="divide-y divide-[#D5E0CE] border-y border-[#D5E0CE]">
            <button type="button" onClick={() => setActivePage('produk-layanan', 'simpanan')} className="group flex w-full items-center gap-6 py-7 text-left">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B9CCAE] bg-white text-[#4D8C28]"><Landmark className="h-5 w-5" /></span>
              <span className="flex-1"><span className="block font-serif text-xl font-semibold text-[#174D2C]">Simpanan</span><span className="mt-1 block text-sm leading-6 text-[#718078]">Pilihan simpanan untuk kebutuhan dan perencanaan anggota.</span></span>
              <ArrowRight className="h-5 w-5 text-[#8AA17F] transition-transform group-hover:translate-x-1" />
            </button>
            <button type="button" onClick={() => setActivePage('produk-layanan', 'pembiayaan')} className="group flex w-full items-center gap-6 py-7 text-left">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B9CCAE] bg-white text-[#4D8C28]"><HandCoins className="h-5 w-5" /></span>
              <span className="flex-1"><span className="block font-serif text-xl font-semibold text-[#174D2C]">Pembiayaan</span><span className="mt-1 block text-sm leading-6 text-[#718078]">Layanan pembiayaan berbasis prinsip koperasi dan syariah.</span></span>
              <ArrowRight className="h-5 w-5 text-[#8AA17F] transition-transform group-hover:translate-x-1" />
            </button>
            <button type="button" onClick={() => setActivePage('keanggotaan')} className="group flex w-full items-center gap-6 py-7 text-left">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B9CCAE] bg-white text-[#4D8C28]"><Users className="h-5 w-5" /></span>
              <span className="flex-1"><span className="block font-serif text-xl font-semibold text-[#174D2C]">Keanggotaan</span><span className="mt-1 block text-sm leading-6 text-[#718078]">Informasi menjadi anggota dan berbagai layanan untuk anggota.</span></span>
              <ArrowRight className="h-5 w-5 text-[#8AA17F] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#174D2C] py-16 text-white lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B7D98E]">Bersama membangun kemandirian</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">Informasi Penting &amp; Event Terbaru</h2>
          </div>
          <button type="button" onClick={onOpenMembership} className="group relative inline-flex shrink-0 items-center justify-center gap-3 border border-[#B7D98E] bg-[#8AC43F] px-7 py-4 text-sm font-bold text-[#123A23] shadow-[0_8px_0_#4D8C28,0_14px_28px_rgba(0,0,0,0.20)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_10px_0_#4D8C28,0_18px_32px_rgba(0,0,0,0.24)] active:translate-y-[3px] active:shadow-[0_3px_0_#4D8C28,0_7px_16px_rgba(0,0,0,0.18)]">
            Menjadi Anggota <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
}
