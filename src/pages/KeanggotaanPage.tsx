import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COOP_INFO, FAQS_DATA } from '../data/cooperativeData';

interface KeanggotaanPageProps {
  initialSubTab?: string;
  onOpenMembership: () => void;
}

export function KeanggotaanPage({ initialSubTab, onOpenMembership }: KeanggotaanPageProps) {
  const [activeTab, setActiveTab] = useState<string>(initialSubTab || 'syarat');

  useEffect(() => {
    if (initialSubTab) {
      setActiveTab(initialSubTab);
    }
  }, [initialSubTab]);

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl pb-16 border-b border-[#202522]/10">
          <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-3">
            05 — KEANGGOTAAN KOPERASI
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B3D2E] tracking-tight leading-[1.15]">
            Menjadi Bagian dari BMT Al-Muhajirin
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[#6B746F] leading-[1.7] mt-5">
            Setiap anggota adalah pemilik berhak setara, menikmati pembagian sisa hasil usaha secara adil, dan bersama-sama membangun kemandirian ekonomi ummat.
          </p>
        </div>

        {/* Sub-Navigation Tabs: Syarat Keanggotaan, Cara Bergabung, Hak & Kewajiban, Informasi Anggota */}
        <div className="py-8 flex flex-wrap items-center gap-2 sm:gap-3 border-b border-[#202522]/10 text-sm">
          <button
            onClick={() => setActiveTab('syarat')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer border ${
              activeTab === 'syarat'
                ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                : 'bg-white text-[#202522] border-[#202522]/20 hover:border-[#0B3D2E]'
            }`}
          >
            Syarat Keanggotaan
          </button>

          <button
            onClick={() => setActiveTab('cara-bergabung')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer border ${
              activeTab === 'cara-bergabung'
                ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                : 'bg-white text-[#202522] border-[#202522]/20 hover:border-[#0B3D2E]'
            }`}
          >
            Cara Bergabung
          </button>

          <button
            onClick={() => setActiveTab('hak-kewajiban')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer border ${
              activeTab === 'hak-kewajiban'
                ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                : 'bg-white text-[#202522] border-[#202522]/20 hover:border-[#0B3D2E]'
            }`}
          >
            Hak & Kewajiban
          </button>

          <button
            onClick={() => setActiveTab('informasi')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer border ${
              activeTab === 'informasi'
                ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                : 'bg-white text-[#202522] border-[#202522]/20 hover:border-[#0B3D2E]'
            }`}
          >
            Informasi Anggota
          </button>
        </div>

        {/* 4-Step Process Overview */}
        <div className="py-16 border-b border-[#202522]/10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-2">
              ALUR BERGABUNG
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0B3D2E]">
              Empat Langkah Menjadi Anggota Sah
            </h2>
          </div>

          <div className="border-t border-[#202522]/15 divide-y divide-[#202522]/15">
            <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">01</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg font-bold text-[#202522]">Pahami persyaratan</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Warga Negara Indonesia, berakal sehat, berdomisili atau beraktivitas ekonomi di kawasan Kabupaten Banggai, dan memiliki niat saling tolong-menolong dalam kemaslahatan ekonomi syariah.
                </p>
              </div>
            </div>

            <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">02</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg font-bold text-[#202522]">Lengkapi dokumen</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Menyiapkan salinan Kartu Tanda Penduduk (KTP), Kartu Keluarga (KK), dan informasi rekening bank atau kontak yang aktif.
                </p>
              </div>
            </div>

            <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">03</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg font-bold text-[#202522]">Ajukan keanggotaan</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Mengisi formulir online melalui website atau datang ke kantor kas, disertai setoran Simpanan Pokok (Rp100.000 sekali seumur hidup) dan Simpanan Wajib awal (mulai Rp10.000/bulan).
                </p>
              </div>
            </div>

            <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">04</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg font-bold text-[#202522]">Mulai menjadi bagian dari BMT Al-Muhajirin</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[16px] text-[#6B746F] leading-[1.7]">
                  Menerima Nomor Induk Anggota resmi dan buku tabungan simpanan. Anda langsung dapat menikmati seluruh fasilitas pembiayaan, layanan jemput kas, dan pembagian SHU tahunan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Simpanan Pokok & Wajib Ledger Table */}
        <div className="py-16 border-b border-[#202522]/10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-2">
              KEWAJIBAN PERMODALAN
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B3D2E]">
              Ketentuan Simpanan Anggota
            </h3>
          </div>

          <div className="border-t border-[#202522]/15 divide-y divide-[#202522]/15 text-sm">
            
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
              <div className="md:col-span-4 font-serif font-bold text-[#202522] text-lg">
                Simpanan Pokok
              </div>
              <div className="md:col-span-5 text-[#6B746F] leading-relaxed">
                Dibayarkan satu kali saat pendaftaran awal sebagai bukti kepemilikan modal sendiri koperasi. Tidak dapat ditarik kembali selama masih berstatus anggota aktif.
              </div>
              <div className="md:col-span-3 md:text-right font-mono text-base font-bold text-[#0B3D2E]">
                Rp 100.000,- (Sekali)
              </div>
            </div>

            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
              <div className="md:col-span-4 font-serif font-bold text-[#202522] text-lg">
                Simpanan Wajib
              </div>
              <div className="md:col-span-5 text-[#6B746F] leading-relaxed">
                Iuran rutin bulanan untuk memperkuat likuiditas usaha bersama. Menjadi salah satu dasar perhitungan pembagian SHU jasa modal tahunan.
              </div>
              <div className="md:col-span-3 md:text-right font-mono text-base font-bold text-[#0B3D2E]">
                Mulai Rp 10.000,- / bulan
              </div>
            </div>

            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
              <div className="md:col-span-4 font-serif font-bold text-[#202522] text-lg">
                Simpanan Sukarela (Wadi’ah)
              </div>
              <div className="md:col-span-5 text-[#6B746F] leading-relaxed">
                Tabungan harian bebas biaya administrasi bulanan yang dapat disetor dan ditarik sewaktu-waktu oleh anggota sesuai kebutuhan.
              </div>
              <div className="md:col-span-3 md:text-right font-mono text-base font-bold text-[#0B3D2E]">
                Fleksibel & Aman
              </div>
            </div>

          </div>
        </div>

        {/* Hak & Kewajiban Editorial Block */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-[#202522]/10">
          <div className="border border-[#202522]/15 p-8 bg-[#F7F6F1] space-y-4">
            <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
              HAK ANGGOTA
            </span>
            <h4 className="font-serif text-2xl font-bold text-[#0B3D2E]">Hak Konstitusional Anggota</h4>
            <ul className="space-y-3 text-sm text-[#202522]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#145A42] shrink-0 mt-0.5" />
                <span>Menghadiri, menyatakan pendapat, dan memberikan satu suara dalam Rapat Anggota Tahunan (RAT).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#145A42] shrink-0 mt-0.5" />
                <span>Memilih dan/atau dipilih menjadi Pengurus atau Pengawas Koperasi.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#145A42] shrink-0 mt-0.5" />
                <span>Memperoleh pembagian Sisa Hasil Usaha (SHU) tahunan secara adil dan proporsional.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#145A42] shrink-0 mt-0.5" />
                <span>Mendapatkan pelayanan simpanan, pengajuan pembiayaan modal usaha, serta fasilitas sektor riil.</span>
              </li>
            </ul>
          </div>

          <div className="border border-[#202522]/15 p-8 bg-[#F7F6F1] space-y-4">
            <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
              KEWAJIBAN ANGGOTA
            </span>
            <h4 className="font-serif text-2xl font-bold text-[#0B3D2E]">Kewajiban Pokok Anggota</h4>
            <ul className="space-y-3 text-sm text-[#202522]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#145A42] shrink-0 mt-0.5" />
                <span>Mematuhi Anggaran Dasar, Anggaran Rumah Tangga (AD/ART), dan keputusan Rapat Anggota.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#145A42] shrink-0 mt-0.5" />
                <span>Membayar Simpanan Pokok dan melunasi Simpanan Wajib sesuai kesepakatan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#145A42] shrink-0 mt-0.5" />
                <span>Menjaga nama baik dan integritas lembaga koperasi di tengah masyarakat.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#145A42] shrink-0 mt-0.5" />
                <span>Berpartisipasi aktif dalam kegiatan usaha koperasi dan musyawarah keanggotaan.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA & Membership Application Trigger */}
        <div className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl font-bold text-[#0B3D2E]">Bergabunglah Bersama Ribuan Anggota Lainnya</h4>
            <p className="text-sm text-[#6B746F] mt-1">Daftar sekarang secara mudah melalui formulir online atau kantor kas terdekat.</p>
          </div>
          <button
            onClick={onOpenMembership}
            className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-sm font-semibold px-7 py-3 rounded-[2px] transition-colors cursor-pointer"
          >
            Formulir Pendaftaran Anggota
          </button>
        </div>

      </div>
    </div>
  );
}
