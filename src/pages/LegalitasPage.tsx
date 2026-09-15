import { CheckCircle2, FileText } from 'lucide-react';
import { LEGAL_DOCS } from '../data/cooperativeData';

export function LegalitasPage() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl pb-16 border-b border-[#202522]/10">
          <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-3">
            LEGALITAS & KEPATUHAN HUKUM
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B3D2E] tracking-tight leading-[1.15]">
            Legalitas BMT Al-Muhajirin
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[#6B746F] leading-[1.7] mt-5">
            Kepastian hukum dan status perizinan resmi KSPPS BMT Al-Muhajirin berdasarkan perundang-undangan Republik Indonesia.
          </p>
        </div>

        {/* Primary Legal Highlight Box */}
        <div className="py-12 border-b border-[#202522]/10">
          <div className="bg-[#F7F6F1] border border-[#202522]/15 p-8 max-w-4xl space-y-6">
            <span className="text-xs font-bold text-[#145A42] tracking-[0.15em] uppercase block">
              STATUS BADAN HUKUM UTAMA
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-baseline">
              <div>
                <span className="text-xs text-[#6B746F] uppercase tracking-wider block">Nomor Badan Hukum:</span>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3D2E]">
                  518/11/BH/DISKOP
                </span>
              </div>
              <div>
                <span className="text-xs text-[#6B746F] uppercase tracking-wider block">Tanggal Pengesahan Resmi:</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#202522]">
                  28 Oktober 2003
                </span>
              </div>
            </div>

            <p className="text-sm text-[#6B746F] leading-relaxed pt-2 border-t border-[#202522]/10">
              Diterbitkan dan disahkan oleh Dinas Koperasi dan Usaha Kecil Menengah Kabupaten Banggai, menetapkan BMT Al-Muhajirin sebagai entitas badan hukum koperasi yang sah dan diakui negara.
            </p>
          </div>
        </div>

        {/* Legal Register / Institutional Ledger */}
        <div className="py-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-2">
              DAFTAR KETETAPAN HUKUM & IZIN
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B3D2E]">
              Dokumen Perizinan & Regulasi
            </h2>
          </div>

          <div className="border-t border-[#202522]/15 divide-y divide-[#202522]/15">
            {LEGAL_DOCS.map((doc) => (
              <div key={doc.id} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                <div className="md:col-span-4">
                  <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block mb-1">
                    {doc.issuer}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0B3D2E]">
                    {doc.title}
                  </h3>
                  <div className="text-xs text-[#6B746F] mt-1">
                    Ketetapan: {doc.dateIssued}
                  </div>
                </div>

                <div className="md:col-span-5">
                  <p className="text-[15px] text-[#6B746F] leading-[1.7]">
                    {doc.description}
                  </p>
                </div>

                <div className="md:col-span-3 md:text-right">
                  <div className="inline-block bg-[#F7F6F1] border border-[#202522]/10 px-4 py-2 font-mono text-xs font-bold text-[#202522]">
                    {doc.regNumber}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Framework Kepatuhan Syariah */}
        <div className="py-16 border-t border-[#202522]/10 bg-[#F7F6F1] p-8 space-y-6">
          <div className="max-w-4xl space-y-3">
            <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block">
              PENGAWASAN SYARIAH
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B3D2E]">
              Komitmen Kepatuhan Prinsip Syariah Tanpa Riba
            </h3>
            <p className="text-[16px] text-[#6B746F] leading-[1.75]">
              Operasional KSPPS BMT Al-Muhajirin berpegang teguh pada fatwa Dewan Syariah Nasional Majelis Ulama Indonesia (DSN-MUI). Dewan Pengawas Syariah (DPS) melakukan pengawasan berkelanjutan terhadap seluruh akad, perputaran dana, dan produk simpanan guna memastikan tidak terdapat unsur riba, maysir, maupun gharar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#202522]/10 text-sm">
            <div className="space-y-1">
              <div className="font-serif font-bold text-[#0B3D2E] text-base">Rujukan Fatwa DSN-MUI</div>
              <p className="text-xs text-[#6B746F] leading-relaxed">Seluruh akad jual beli (Murabahah), titipan (Wadi’ah), dan investasi (Mudharabah) sesuai kaidah standar nasional.</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif font-bold text-[#0B3D2E] text-base">Pemeriksaan Syariah Berkala</div>
              <p className="text-xs text-[#6B746F] leading-relaxed">Pengawasan langsung terhadap formulir, sistem kas, dan transaksi riil di lapangan.</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif font-bold text-[#0B3D2E] text-base">Laporan dalam RAT</div>
              <p className="text-xs text-[#6B746F] leading-relaxed">DPS membacakan laporan kepatuhan syariah secara resmi dalam forum Rapat Anggota Tahunan.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
