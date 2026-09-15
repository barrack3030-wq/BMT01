import { useState } from 'react';
import type { FormEvent } from 'react';
import { X, ArrowRight, Loader2 } from 'lucide-react';
import { COOP_INFO } from '../data/cooperativeData';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MembershipModal({ isOpen, onClose }: MembershipModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    nik: '',
    phone: '',
    email: '',
    address: '',
    job: '',
    branchTarget: 'Kantor Pusat Singkoyo (Toili)',
    initialSimpanan: '100000',
    wajibSimpanan: '20000',
    agreeTerms: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 1000);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-[6px] max-w-xl w-full border border-[#202522]/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header: Deep Forest Green */}
        <div className="bg-[#0B3D2E] text-white p-6 relative">
          <button
            id="close-membership-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
            Formulir Permohonan Resmi
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white mt-1">
            Pendaftaran Keanggotaan Koperasi
          </h3>
          <p className="text-xs text-white/70 mt-1">
            {COOP_INFO.fullName} • No. Badan Hukum: {COOP_INFO.legalNumber}
          </p>

          {/* Stepper indicator: Formal Tabs */}
          <div className="flex items-center gap-3 mt-4 text-xs font-medium border-t border-white/10 pt-3">
            <span className={`px-2.5 py-1 rounded-[2px] ${step === 1 ? 'bg-white text-[#0B3D2E] font-bold' : 'text-white/60'}`}>
              1. Ketentuan Simpanan
            </span>
            <span className="text-white/40">/</span>
            <span className={`px-2.5 py-1 rounded-[2px] ${step === 2 ? 'bg-white text-[#0B3D2E] font-bold' : 'text-white/60'}`}>
              2. Data Pemohon
            </span>
            <span className="text-white/40">/</span>
            <span className={`px-2.5 py-1 rounded-[2px] ${step === 3 ? 'bg-white text-[#0B3D2E] font-bold' : 'text-white/60'}`}>
              3. Konfirmasi
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          
          {/* STEP 1: Ketentuan Simpanan & AD/ART */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="space-y-2">
                <h4 className="font-bold text-base text-[#202522]">
                  Kewajiban Pokok Calon Anggota
                </h4>
                <p className="text-xs text-[#6B746F] leading-relaxed">
                  Sesuai ketentuan Anggaran Dasar KSU Syariah BMT Al Muhajirin, setiap pemohon keanggotaan wajib menyetujui setoran awal permodalan koperasi:
                </p>
              </div>

              <div className="border border-[#202522]/15 divide-y divide-[#202522]/15 rounded-[4px] text-xs">
                <div className="p-3.5 flex justify-between items-center bg-[#F7F7F3]">
                  <div>
                    <span className="font-bold text-[#202522] block">Simpanan Pokok (Sekali seumur hidup)</span>
                    <span className="text-[#6B746F]">Bukti kepemilikan modal sendiri koperasi</span>
                  </div>
                  <span className="font-mono font-bold text-[#0B3D2E] text-sm">Rp 100.000</span>
                </div>

                <div className="p-3.5 flex justify-between items-center bg-white">
                  <div>
                    <span className="font-bold text-[#202522] block">Simpanan Wajib (Per bulan)</span>
                    <span className="text-[#6B746F]">Penyertaan modal rutin dasar SHU</span>
                  </div>
                  <span className="font-mono font-bold text-[#0B3D2E] text-sm">Mulai Rp 10.000</span>
                </div>
              </div>

              <div className="border border-[#202522]/10 bg-[#F7F7F3] p-3.5 rounded-[4px] text-xs text-[#6B746F] leading-relaxed">
                <strong>Catatan:</strong> Setoran simpanan dapat dibayarkan secara tunai di kantor pelayanan terdekat atau melalui transfer rekening resmi kas koperasi setelah formulir diverifikasi.
              </div>

              <label className="flex items-start gap-2.5 text-xs text-[#202522] cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="mt-0.5 rounded border-[#202522]/30 text-[#0B3D2E] focus:ring-[#0B3D2E]"
                />
                <span className="leading-normal">
                  Saya menyatakan telah membaca, memahami, dan bersedia mematuhi Anggaran Dasar & Anggaran Rumah Tangga (AD/ART) serta prinsip syariah BMT Al Muhajirin.
                </span>
              </label>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  disabled={!formData.agreeTerms}
                  onClick={() => setStep(2)}
                  className={`text-sm font-semibold px-6 py-2.5 rounded-[4px] transition-colors cursor-pointer ${
                    formData.agreeTerms 
                      ? 'bg-[#0B3D2E] hover:bg-[#145A42] text-white' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Lanjut ke Formulir Data Diri
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Data Pemohon Form */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#202522] mb-1">
                    Nama Lengkap (Sesuai KTP) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Contoh: Ahmad Sulaiman"
                    className="w-full bg-[#F7F7F3] border border-[#202522]/15 rounded-[4px] px-3 py-2 text-xs text-[#202522] focus:outline-none focus:border-[#0B3D2E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#202522] mb-1">
                    Nomor Induk Kependudukan (NIK) *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={16}
                    value={formData.nik}
                    onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                    placeholder="16 Digit Nomor KTP"
                    className="w-full bg-[#F7F7F3] border border-[#202522]/15 rounded-[4px] px-3 py-2 text-xs text-[#202522] focus:outline-none focus:border-[#0B3D2E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#202522] mb-1">
                    Nomor WhatsApp / HP Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full bg-[#F7F7F3] border border-[#202522]/15 rounded-[4px] px-3 py-2 text-xs text-[#202522] focus:outline-none focus:border-[#0B3D2E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#202522] mb-1">
                    Pekerjaan / Bidang Usaha *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.job}
                    onChange={(e) => setFormData({ ...formData, job: e.target.value })}
                    placeholder="Petani / Pedagang Pasar / Pegawai"
                    className="w-full bg-[#F7F7F3] border border-[#202522]/15 rounded-[4px] px-3 py-2 text-xs text-[#202522] focus:outline-none focus:border-[#0B3D2E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#202522] mb-1">
                  Alamat Lengkap Domisili *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Desa / Kelurahan, RT/RW, Kecamatan di Kab. Banggai"
                  className="w-full bg-[#F7F7F3] border border-[#202522]/15 rounded-[4px] px-3 py-2 text-xs text-[#202522] focus:outline-none focus:border-[#0B3D2E]"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#202522] mb-1">
                  Pilihan Kantor Pelayanan *
                </label>
                <select
                  value={formData.branchTarget}
                  onChange={(e) => setFormData({ ...formData, branchTarget: e.target.value })}
                  className="w-full bg-[#F7F7F3] border border-[#202522]/15 rounded-[4px] px-3 py-2 text-xs text-[#202522] focus:outline-none focus:border-[#0B3D2E]"
                >
                  <option value="Kantor Pusat Singkoyo (Toili)">Kantor Pusat Singkoyo (Jl. Ahmad Yani No. 22)</option>
                  <option value="Kantor Kas Pasar Cendana Pura">Kantor Kas Pasar Cendana Pura (Toili)</option>
                  <option value="Kantor Kas Moilong">Kantor Kas Moilong</option>
                  <option value="Kantor Kas Toili Barat">Kantor Kas Toili Barat</option>
                </select>
              </div>

              <div className="pt-3 flex justify-between items-center border-t border-[#202522]/10">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-[#6B746F] hover:text-[#202522] cursor-pointer"
                >
                  ← Kembali
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-xs font-semibold px-6 py-2.5 rounded-[4px] transition-colors cursor-pointer flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Memproses Pendaftaran...</span>
                    </>
                  ) : (
                    <span>Kirim Formulir Pendaftaran</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Sukses Konfirmasi */}
          {step === 3 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-[#0B3D2E] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h4 className="text-xl font-bold text-[#0B3D2E]">
                Permohonan Keanggotaan Terkirim
              </h4>
              <p className="text-xs text-[#6B746F] max-w-md mx-auto leading-relaxed">
                Data pendaftaran Anda atas nama <strong>{formData.fullName}</strong> telah diterima oleh bagian keanggotaan {COOP_INFO.fullName}.
              </p>
              <div className="bg-[#F7F7F3] border border-[#202522]/15 p-4 rounded-[4px] text-xs text-left max-w-md mx-auto space-y-1.5">
                <div className="font-bold text-[#202522]">Langkah Selanjutnya:</div>
                <p className="text-[#6B746F]">• Petugas kami akan menghubungi nomor WhatsApp Anda dalam 1x24 jam kerja.</p>
                <p className="text-[#6B746F]">• Anda dapat datang ke {formData.branchTarget} dengan membawa KTP asli untuk penyerahan Buku Keanggotaan resmi.</p>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-xs font-semibold px-6 py-2.5 rounded-[4px] transition-colors cursor-pointer"
                >
                  Tutup dan Kembali ke Website
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
