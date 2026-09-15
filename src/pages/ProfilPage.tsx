import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COOP_INFO } from '../data/cooperativeData';

interface ProfilPageProps {
  onGoToSejarah: () => void;
  onGoToVisiMisi: () => void;
  onOpenMembership: () => void;
}

export function ProfilPage({ onGoToSejarah, onGoToVisiMisi, onOpenMembership }: ProfilPageProps) {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl pb-16 border-b border-[#202522]/10">
          <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-3">
            01 — PROFIL INSTITUSI
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B3D2E] tracking-tight leading-[1.15]">
            Profil KSPPS BMT Al-Muhajirin
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[#6B746F] leading-[1.7] mt-5">
            Lembaga keuangan mikro syariah berbadan hukum koperasi yang tumbuh bersama masyarakat Kabupaten Banggai sejak tahun 1998 dengan mengedepankan prinsip kebersamaan dan anti-riba.
          </p>
        </div>

        {/* Editorial Narrative Grid */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-b border-[#202522]/10">
          <div className="lg:col-span-7 space-y-6 text-[17px] text-[#202522] leading-[1.8]">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B3D2E] leading-snug">
              Dedikasi Seperempat Abad Menopang Ekonomi Kerakyatan di Toili
            </h2>
            <p>
              Koperasi Simpan Pinjam dan Pembiayaan Syariah (KSPPS) BMT Al-Muhajirin didirikan di Kecamatan Toili, Kabupaten Banggai, pada tanggal 14 Agustus 1998 atas inisiatif 26 orang perintis dengan menghimpun modal swadaya awal sebesar Rp8.488.000. Operasional resmi dimulai pada 16 November 1998 di kawasan sentra Pasar Cendana Pura dengan misi mulia mendampingi permodalan para pedagang pasar dan petani setempat agar terbebas dari jerat rentenir.
            </p>
            <p className="text-[#6B746F]">
              Pada tanggal 28 Oktober 2003, lembaga resmi tercatat berbadan hukum melalui SK Kepala Dinas Koperasi dan UKM No. 518/11/BH/DISKOP. Seiring perjalanan waktu, BMT Al-Muhajirin tidak hanya menyediakan jasa keuangan simpan pinjam syariah, tetapi juga mengembangkan unit usaha sektor riil berupa sarana penggilingan padi guna menyerap gabah petani anggota secara adil serta unit arang briket lokal.
            </p>
            <div className="pt-2 flex items-center gap-6">
              <button
                onClick={onGoToSejarah}
                className="text-[15px] font-semibold text-[#0B3D2E] hover:text-[#145A42] inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Pelajari jejak sejarah pendirian</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-[#202522]/12 overflow-hidden bg-[#F7F6F1] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1000&q=85"
                alt="Pelayanan Kantor Koperasi BMT Al-Muhajirin"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-[#6B746F] mt-2 font-serif italic">
              Pelayanan simpanan dan pembiayaan syariah bagi anggota di Kabupaten Banggai.
            </p>
          </div>
        </div>

        {/* Corporate Factsheet / Formal Identity Ledger */}
        <div className="py-16 border-b border-[#202522]/10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-2">
              DATA LEGALITAS & LEMBAGA
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B3D2E]">
              Lembar Fakta Kelembagaan
            </h3>
          </div>

          <div className="border-t border-[#202522]/15 divide-y divide-[#202522]/15 text-sm">
            
            <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 font-semibold text-[#6B746F]">Nama Badan Usaha</div>
              <div className="md:col-span-8 font-serif font-bold text-[#0B3D2E] text-base">
                KSPPS BMT AL-MUHAJIRIN
              </div>
            </div>

            <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 font-semibold text-[#6B746F]">Bentuk & Jenis Usaha</div>
              <div className="md:col-span-8 font-medium text-[#202522]">
                Koperasi Simpan Pinjam dan Pembiayaan Syariah (KSPPS) & Sektor Riil Pertanian
              </div>
            </div>

            <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 font-semibold text-[#6B746F]">Nomor Badan Hukum</div>
              <div className="md:col-span-8 font-bold text-[#0B3D2E]">
                518/11/BH/DISKOP (Tanggal 28 Oktober 2003)
              </div>
            </div>

            <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 font-semibold text-[#6B746F]">Tanggal Pendirian Awal</div>
              <div className="md:col-span-8 font-medium text-[#202522]">
                14 Agustus 1998 (Diresmikan Operasional 16 November 1998)
              </div>
            </div>

            <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 font-semibold text-[#6B746F]">Modal Awal Swadaya</div>
              <div className="md:col-span-8 font-medium text-[#202522]">
                Rp8.488.000 (oleh 26 orang anggota perintis pendiri)
              </div>
            </div>

            <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 font-semibold text-[#6B746F]">Alamat Kantor Pusat</div>
              <div className="md:col-span-8 font-medium text-[#202522]">
                Jl. Ahmad Yani No. 22, Singkoyo, Kec. Toili, Kab. Banggai, Sulawesi Tengah
              </div>
            </div>

            <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 font-semibold text-[#6B746F]">Landasan Kepatuhan Syariah</div>
              <div className="md:col-span-8 font-medium text-[#202522]">
                Dewan Pengawas Syariah (DPS) berpedoman pada Fatwa Dewan Syariah Nasional MUI (DSN-MUI)
              </div>
            </div>

          </div>
        </div>

        {/* Tiga Pilar Usaha */}
        <div className="py-16">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-2">
              FOKUS KEGIATAN
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B3D2E]">
              Tiga Pilar Layanan Utama
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#202522]/15 p-6 bg-[#F7F6F1] space-y-2">
              <span className="text-xs font-bold text-[#145A42] uppercase tracking-wider block">Pilar 01</span>
              <h4 className="font-serif text-xl font-bold text-[#0B3D2E]">Baitut Tamwil (Simpan Pinjam)</h4>
              <p className="text-sm text-[#6B746F] leading-relaxed">
                Menampung simpanan amanah anggota dengan akad Wadi’ah tanpa potongan bulanan serta menyalurkan pembiayaan produktif Murabahah bagi usaha mikro dan pertanian.
              </p>
            </div>

            <div className="border border-[#202522]/15 p-6 bg-[#F7F6F1] space-y-2">
              <span className="text-xs font-bold text-[#145A42] uppercase tracking-wider block">Pilar 02</span>
              <h4 className="font-serif text-xl font-bold text-[#0B3D2E]">Baitul Maal (Sosial & Kebajikan)</h4>
              <p className="text-sm text-[#6B746F] leading-relaxed">
                Mengelola dana zakat, infaq, sedekah, dan wakaf anggota untuk santunan kaum dhuafa serta fasilitas pinjaman kebajikan tanpa margin (Qardhul Hasan).
              </p>
            </div>

            <div className="border border-[#202522]/15 p-6 bg-[#F7F6F1] space-y-2">
              <span className="text-xs font-bold text-[#145A42] uppercase tracking-wider block">Pilar 03</span>
              <h4 className="font-serif text-xl font-bold text-[#0B3D2E]">Unit Sektor Riil (Pertanian & Padi)</h4>
              <p className="text-sm text-[#6B746F] leading-relaxed">
                Mengoperasikan fasilitas mesin penggilingan padi guna menyerap gabah petani dengan harga wajar serta memproduksi briket arang dari limbah pertanian lokal.
              </p>
            </div>
          </div>

          <div className="pt-12 flex items-center justify-between border-t border-[#202522]/10 mt-12">
            <button
              onClick={onGoToVisiMisi}
              className="text-[15px] font-semibold text-[#0B3D2E] hover:text-[#145A42] inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Lihat Visi & Misi Koperasi</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onOpenMembership}
              className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-sm font-semibold px-6 py-2.5 rounded-[2px] transition-colors cursor-pointer"
            >
              Daftar Anggota
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
