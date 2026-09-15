import { useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { COOP_INFO, OFFICE_BRANCHES } from '../data/cooperativeData';

export function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    subject: 'Konsultasi Simpanan',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl pb-16 border-b border-[#202522]/10">
          <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-3">
            09 — JARINGAN KANTOR & KONTAK
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B3D2E] tracking-tight leading-[1.15]">
            Kantor Layanan & Kontak
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[#6B746F] leading-[1.7] mt-5">
            Informasi alamat kantor operasional, jam layanan kas, kontak resmi pengurus, dan saluran korespondensi BMT Al-Muhajirin di Kabupaten Banggai.
          </p>
        </div>

        {/* Main Grid: Left Directory, Right Formal Correspondence Form */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Formal Directory */}
          <div className="lg:col-span-6 space-y-12">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                KANTOR PUSAT OPERASIONAL
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#0B3D2E]">
                BMT Al-Muhajirin Toili
              </h2>
              
              <div className="border-t border-[#202522]/10 divide-y divide-[#202522]/10 text-sm">
                <div className="py-4 grid grid-cols-3 gap-4 items-start">
                  <span className="font-semibold text-[#6B746F]">Alamat</span>
                  <span className="col-span-2 text-[#202522] leading-relaxed">
                    Jl. Ahmad Yani No. 22, Singkoyo, Kec. Toili, Kab. Banggai, Sulawesi Tengah 94765
                  </span>
                </div>
                <div className="py-4 grid grid-cols-3 gap-4">
                  <span className="font-semibold text-[#6B746F]">Telepon</span>
                  <span className="col-span-2 font-medium text-[#202522]">{COOP_INFO.headOffice.phone}</span>
                </div>
                <div className="py-4 grid grid-cols-3 gap-4">
                  <span className="font-semibold text-[#6B746F]">WhatsApp Resmi</span>
                  <span className="col-span-2 font-medium text-[#202522]">{COOP_INFO.headOffice.whatsapp}</span>
                </div>
                <div className="py-4 grid grid-cols-3 gap-4">
                  <span className="font-semibold text-[#6B746F]">Pos-el (Email)</span>
                  <span className="col-span-2 font-medium text-[#202522]">{COOP_INFO.headOffice.email}</span>
                </div>
                <div className="py-4 grid grid-cols-3 gap-4">
                  <span className="font-semibold text-[#6B746F]">Jam Operasional</span>
                  <span className="col-span-2 text-[#202522] leading-relaxed">
                    Senin – Jumat: 08.00 – 16.00 WITA<br />
                    Sabtu: 08.00 – 12.00 WITA<br />
                    Minggu & Hari Libur Nasional: Tutup
                  </span>
                </div>
              </div>
            </div>

            {/* Jaringan Kantor Cabang & Unit Usaha Sektor Riil */}
            <div className="space-y-4 pt-4">
              <span className="text-xs font-bold text-[#145A42] tracking-wider uppercase block">
                CABANG / KAS & UNIT SEKTOR RIIL
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                Jaringan Cabang & Fasilitas Produksi
              </h3>
              
              <div className="border-t border-[#202522]/15 divide-y divide-[#202522]/15 text-xs">
                {OFFICE_BRANCHES.map((branch) => (
                  <div key={branch.id} className="py-4 space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="font-serif font-bold text-base text-[#202522]">{branch.name}</div>
                      <div className="font-mono text-[#0B3D2E] font-medium">{branch.phone}</div>
                    </div>
                    <div className="text-[#6B746F] text-xs">{branch.address}</div>
                    <div className="text-[#145A42] font-semibold text-[11px] uppercase tracking-wider">{branch.type}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Formal Contact Form */}
          <div className="lg:col-span-6 bg-[#F7F6F1] border border-[#202522]/15 p-8 sm:p-10 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#145A42] uppercase tracking-wider block mb-1">
                KORESPONDENSI RESMI
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0B3D2E]">
                Hubungi Pengurus & Customer Service
              </h3>
              <p className="text-sm text-[#6B746F] mt-2 leading-relaxed">
                Silakan sampaikan permohonan informasi keanggotaan, pembukaan rekening, atau pertanyaan umum seputar BMT Al-Muhajirin.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white border border-[#0B3D2E] p-6 space-y-3">
                <div className="flex items-center gap-2 text-base font-serif font-bold text-[#0B3D2E]">
                  <CheckCircle2 className="w-5 h-5 text-[#145A42]" />
                  <span>Pesan Telah Diterima</span>
                </div>
                <p className="text-sm text-[#6B746F] leading-relaxed">
                  Terima kasih atas komunikasi Anda. Petugas layanan keanggotaan kami akan meninjau pesan Anda dan segera menghubungi pada jam operasional kerja.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phoneOrEmail: '', subject: 'Konsultasi Simpanan', message: '' });
                  }}
                  className="text-xs font-semibold text-[#0B3D2E] underline pt-2 block cursor-pointer"
                >
                  Kirim korespondensi lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#202522] mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Bpk. Ahmad Hidayat"
                    className="w-full bg-white border border-[#202522]/20 px-3.5 py-2.5 text-sm text-[#202522] focus:outline-none focus:border-[#0B3D2E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#202522] mb-1.5">
                    Nomor WhatsApp / Pos-el *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phoneOrEmail}
                    onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                    placeholder="0812-xxxx-xxxx atau nama@email.com"
                    className="w-full bg-white border border-[#202522]/20 px-3.5 py-2.5 text-sm text-[#202522] focus:outline-none focus:border-[#0B3D2E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#202522] mb-1.5">
                    Topik Keperluan
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-[#202522]/20 px-3.5 py-2.5 text-sm text-[#202522] focus:outline-none focus:border-[#0B3D2E]"
                  >
                    <option value="Konsultasi Simpanan">Konsultasi Simpanan Syariah</option>
                    <option value="Pengajuan Pembiayaan">Pengajuan Pembiayaan Usaha / Tani</option>
                    <option value="Pendaftaran Anggota">Pendaftaran Anggota Baru</option>
                    <option value="Layanan Sektor Riil">Layanan Penggilingan Padi & Briket</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#202522] mb-1.5">
                    Isi Pesan *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pertanyaan atau kebutuhan layanan Anda..."
                    className="w-full bg-white border border-[#202522]/20 px-3.5 py-2.5 text-sm text-[#202522] focus:outline-none focus:border-[#0B3D2E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B3D2E] hover:bg-[#145A42] text-white text-sm font-semibold py-3 transition-colors cursor-pointer"
                >
                  Kirim Pesan Resmi
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
