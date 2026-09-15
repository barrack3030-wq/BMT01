import { ArrowRight } from 'lucide-react';

interface VisiMisiPageProps {
  onOpenMembership: () => void;
}

export function VisiMisiPage({ onOpenMembership }: VisiMisiPageProps) {
  const missions = [
    {
      num: '01',
      title: 'Pelayanan Keuangan Berbasis Syariah Tanpa Riba',
      desc: 'Menyelenggarakan penghimpunan dana simpanan dan penyaluran pembiayaan yang memegang teguh kaidah syariat Islam, bersih dari riba, gharar, dan maysir.'
    },
    {
      num: '02',
      title: 'Pemberdayaan Pelaku Usaha Mikro dan Pedagang Pasar',
      desc: 'Mendampingi serta memperkuat permodalan pedagang pasar tradisional, petani, dan perintis UMKM agar mandiri secara ekonomi dan terlindungi dari rentenir.'
    },
    {
      num: '03',
      title: 'Penguatan Ketahanan Pangan Melalui Unit Sektor Riil',
      desc: 'Mengembangkan unit usaha penggilingan padi dan produk briket lokal untuk menciptakan nilai tambah langsung bagi hasil panen anggota dan masyarakat Toili.'
    },
    {
      num: '04',
      title: 'Tata Kelola Transparan dan Kesejahteraan Anggota',
      desc: 'Menjalankan manajemen akuntansi dan pelaporan yang akuntabel, pengawasan syariah yang ketat, serta membagikan Sisa Hasil Usaha (SHU) secara adil.'
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl pb-16 border-b border-[#202522]/10">
          <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-3">
            03 — PANDUAN & LANDASAN KERJA
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B3D2E] tracking-tight leading-[1.15]">
            Visi & Misi BMT Al-Muhajirin
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[#6B746F] leading-[1.7] mt-5">
            Arah strategis dan komitmen kelembagaan dalam mewujudkan kemandirian ekonomi ummat di Toili dan Kabupaten Banggai.
          </p>
        </div>

        {/* VISI: Large Serif Statement */}
        <div className="py-20 border-b border-[#202522]/10">
          <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-6">
            VISI KOPERASI
          </span>
          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0B3D2E] leading-[1.25] tracking-tight max-w-4xl">
            “Berjuang bersama ummat menuju kemandirian ekonomi.”
          </blockquote>
          <p className="text-[17px] text-[#6B746F] leading-[1.8] max-w-3xl mt-6">
            Menjadi lembaga keuangan syariah berbasis koperasi yang mandiri, amanah, profesional, dan memberikan kemaslahatan nyata bagi peningkatan taraf hidup anggota serta masyarakat luas.
          </p>
        </div>

        {/* MISI: Numbered Statements with Dividers */}
        <div className="py-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-3">
              MISI KOPERASI
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E] tracking-tight leading-[1.2]">
              Empat Pilar Komitmen Pelayanan
            </h2>
          </div>

          <div className="border-t border-[#202522]/15 divide-y divide-[#202522]/15">
            {missions.map((misi) => (
              <div key={misi.num} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E] tracking-tight">
                    {misi.num}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl font-bold text-[#202522] leading-snug">
                    {misi.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-[16px] text-[#6B746F] leading-[1.75]">
                    {misi.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-16 border-t border-[#202522]/10 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-xl font-bold text-[#0B3D2E]">Wujudkan Kemandirian Bersama Kami</h4>
              <p className="text-sm text-[#6B746F] mt-1">Bergabunglah sebagai anggota dan nikmati layanan keuangan syariah tanpa riba.</p>
            </div>
            <button
              onClick={onOpenMembership}
              className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-sm font-semibold px-6 py-3 rounded-[2px] transition-colors cursor-pointer"
            >
              Menjadi Anggota
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
