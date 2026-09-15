import { CheckCircle2 } from 'lucide-react';

export function StrukturOrganisasiPage() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl pb-16 border-b border-[#202522]/10">
          <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-3">
            06 — TATA KELOLA & PENGURUS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B3D2E] tracking-tight leading-[1.15]">
            Struktur Organisasi BMT Al-Muhajirin
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[#6B746F] leading-[1.7] mt-5">
            Bagan tata kelola dan hierarki pertanggungjawaban kelembagaan KSPPS BMT Al-Muhajirin Toili.
          </p>
        </div>

        {/* Institutional Flow Chart */}
        <div className="py-20 max-w-4xl mx-auto">
          
          <div className="flex flex-col items-center text-center">
            
            {/* Level 0: RAPAT ANGGOTA TAHUNAN (RAT) */}
            <div className="w-full max-w-lg border border-[#0B3D2E] bg-[#F7F6F1] p-6 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                  Kedaulatan Tertinggi Koperasi
                </span>
                <span className="text-[11px] font-serif italic text-[#6B746F]">Seluruh Anggota Sah</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B3D2E] mt-1">
                Rapat Anggota Tahunan (RAT)
              </h2>
              <p className="text-xs text-[#6B746F] mt-2 leading-relaxed border-t border-[#202522]/10 pt-2">
                Pemegang kekuasaan tertinggi koperasi yang menetapkan Anggaran Dasar, pedoman kerja, serta mengesahkan laporan pertanggungjawaban Pengurus dan Pengawas.
              </p>
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-[1px] h-10 bg-[#202522]/20 my-1"></div>

            {/* Level 1: PENGAWAS & DEWAN PENGAWAS SYARIAH */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              
              <div className="border border-[#202522]/20 bg-white p-6 text-left space-y-2">
                <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                  Kepatuhan Syariah
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B3D2E]">
                  Dewan Pengawas Syariah (DPS)
                </h3>
                <div className="text-xs text-[#202522] space-y-1 pt-1 border-t border-[#202522]/10">
                  <p className="font-medium">Ketua DPS: <span className="text-[#6B746F]">[Nama Ketua DPS Terpilih]</span></p>
                  <p className="font-medium">Anggota DPS: <span className="text-[#6B746F]">[Nama Anggota DPS - Rekomendasi DSN-MUI]</span></p>
                </div>
                <p className="text-xs text-[#6B746F] pt-1 leading-relaxed">
                  Memastikan seluruh transaksi, produk, dan akad simpan pinjam senantiasa sesuai dengan fatwa Dewan Syariah Nasional (DSN-MUI).
                </p>
              </div>

              <div className="border border-[#202522]/20 bg-white p-6 text-left space-y-2">
                <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                  Pengawasan Tata Kelola
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B3D2E]">
                  Badan Pengawas Operasional
                </h3>
                <div className="text-xs text-[#202522] space-y-1 pt-1 border-t border-[#202522]/10">
                  <p className="font-medium">Ketua Pengawas: <span className="text-[#6B746F]">[Nama Ketua Pengawas]</span></p>
                  <p className="font-medium">Anggota Pengawas: <span className="text-[#6B746F]">[Nama Anggota Pengawas Internal]</span></p>
                </div>
                <p className="text-xs text-[#6B746F] pt-1 leading-relaxed">
                  Mengawasi jalannya roda organisasi, memeriksa laporan pembukuan keuangan, dan memastikan hak-hak anggota terlindungi.
                </p>
              </div>

            </div>

            {/* Connecting Vertical Line */}
            <div className="w-[1px] h-10 bg-[#202522]/20 my-1"></div>

            {/* Level 2: DEWAN PENGURUS */}
            <div className="w-full max-w-2xl border border-[#0B3D2E] bg-[#F7F6F1] p-6 text-left space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                  Pimpinan Kebijakan
                </span>
                <span className="text-xs text-[#6B746F]">Periode Mandat 2023 - 2028</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B3D2E]">
                Dewan Pengurus Koperasi
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-[#202522]/10">
                <div>
                  <span className="text-xs font-bold text-[#145A42] uppercase block">Ketua Pengurus</span>
                  <p className="text-sm font-semibold text-[#202522] mt-0.5">[Nama Ketua Pengurus]</p>
                  <p className="text-xs text-[#6B746F]">Arah Strategis & Kelembagaan</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#145A42] uppercase block">Sekretaris</span>
                  <p className="text-sm font-semibold text-[#202522] mt-0.5">[Nama Sekretaris]</p>
                  <p className="text-xs text-[#6B746F]">Administrasi & Keanggotaan</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#145A42] uppercase block">Bendahara</span>
                  <p className="text-sm font-semibold text-[#202522] mt-0.5">[Nama Bendahara]</p>
                  <p className="text-xs text-[#6B746F]">Likuiditas & Keuangan</p>
                </div>
              </div>
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-[1px] h-10 bg-[#202522]/20 my-1"></div>

            {/* Level 3: MANAJEMEN OPERASIONAL */}
            <div className="w-full max-w-lg border border-[#202522]/20 bg-white p-6 text-left space-y-2">
              <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                Eksekutif Pelaksana Profesional
              </span>
              <h3 className="font-serif text-xl font-bold text-[#0B3D2E]">
                Manajer Operasional & Pembiayaan
              </h3>
              <p className="text-xs text-[#202522] font-medium">[Nama Manajer Operasional Profesional]</p>
              <p className="text-xs text-[#6B746F] leading-relaxed pt-1 border-t border-[#202522]/10">
                Memimpin operasional harian, analis kelayakan pembiayaan mikro, penagihan, teknologi informasi, dan pelayanan nasabah di kantor cabang.
              </p>
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-[1px] h-10 bg-[#202522]/20 my-1"></div>

            {/* Level 4: UNIT LAYANAN & SEKTOR RIIL */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl">
              
              <div className="border border-[#202522]/15 bg-white p-4 text-left">
                <div className="text-xs font-bold text-[#0B3D2E] uppercase">Unit Simpan Pinjam</div>
                <div className="text-sm font-semibold text-[#202522] mt-1">[Nama Staf Unit Simpanan]</div>
                <p className="text-xs text-[#6B746F] mt-1">Layanan teller, kas keliling, dan jemput bola ke pasar Cendanapura & Tirtakencana.</p>
              </div>

              <div className="border border-[#202522]/15 bg-white p-4 text-left">
                <div className="text-xs font-bold text-[#0B3D2E] uppercase">Unit Pembiayaan Mikro</div>
                <div className="text-sm font-semibold text-[#202522] mt-1">[Nama Staf Analis Mikro]</div>
                <p className="text-xs text-[#6B746F] mt-1">Survei kelayakan, akad murabahah, dan pendampingan UMKM serta petani binaan.</p>
              </div>

              <div className="border border-[#202522]/15 bg-white p-4 text-left">
                <div className="text-xs font-bold text-[#0B3D2E] uppercase">Unit Sektor Riil</div>
                <div className="text-sm font-semibold text-[#202522] mt-1">[Nama Kepala Unit Usaha Padi]</div>
                <p className="text-xs text-[#6B746F] mt-1">Pengoperasian sarana penggilingan padi dan produksi briket arang di dataran Toili.</p>
              </div>

            </div>

          </div>

        </div>

        {/* Institutional Governance Principles */}
        <div className="pt-16 border-t border-[#202522]/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#145A42]" />
              <h4 className="font-serif font-bold text-lg text-[#0B3D2E]">Akuntabilitas Terbuka</h4>
            </div>
            <p className="text-sm text-[#6B746F] leading-relaxed">
              Seluruh laporan keuangan diaudit secara berkala dan dilaporkan secara jujur dalam forum Rapat Anggota Tahunan sebagai bukti keterbukaan.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#145A42]" />
              <h4 className="font-serif font-bold text-lg text-[#0B3D2E]">Kepatuhan Syariat Murni</h4>
            </div>
            <p className="text-sm text-[#6B746F] leading-relaxed">
              Dewan Pengawas Syariah melakukan telaah berkala terhadap portofolio pembiayaan untuk memastikan keabsahan akad dan kebersihan dari riba.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#145A42]" />
              <h4 className="font-serif font-bold text-lg text-[#0B3D2E]">Pelayanan Berkeadilan</h4>
            </div>
            <p className="text-sm text-[#6B746F] leading-relaxed">
              Setiap anggota berhak atas pelayanan setara, pembagian SHU yang adil, serta perlindungan simpanan sesuai prinsip kebersamaan koperasi.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
