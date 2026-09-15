import { useState } from 'react';
import { COOP_INFO } from '../data/cooperativeData';

export function FinancialCalculator({ onOpenMembership }: { onOpenMembership: () => void }) {
  const [calcType, setCalcType] = useState<'pembiayaan' | 'simpanan'>('pembiayaan');

  // Pembiayaan State
  const [loanAmount, setLoanAmount] = useState<number>(10000000);
  const [tenorMonths, setTenorMonths] = useState<number>(12);
  const annualMarginRate = 0.085; // 8.5% p.a. equivalent margin syariah

  // Simpanan State
  const [depositAmount, setDepositAmount] = useState<number>(25000000);
  const [depositMonths, setDepositMonths] = useState<number>(12);
  const annualProfitSharingRatio = 0.072; // 7.2% p.a. equivalent projected bagi hasil

  // Calculations
  const totalMargin = loanAmount * annualMarginRate * (tenorMonths / 12);
  const totalRepayment = loanAmount + totalMargin;
  const monthlyInstallment = Math.round(totalRepayment / tenorMonths);

  const totalDepositReturn = depositAmount * annualProfitSharingRatio * (depositMonths / 12);
  const monthlyDepositReturn = Math.round(totalDepositReturn / depositMonths);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="bg-[#F7F7F3] border border-[#202522]/15 rounded-[4px] p-6 sm:p-8">
      {/* Header & Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#202522]/10">
        <div>
          <h3 className="font-bold text-[#0B3D2E] text-lg">Simulasi Finansial Mandiri</h3>
          <p className="text-xs text-[#6B746F]">Estimasi angsuran pembiayaan usaha atau proyeksi bagi hasil simpanan berjangka</p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex border border-[#202522]/15 bg-white rounded-[4px] p-0.5">
          <button
            onClick={() => setCalcType('pembiayaan')}
            className={`px-4 py-2 text-xs font-semibold rounded-[2px] transition-colors cursor-pointer ${
              calcType === 'pembiayaan'
                ? 'bg-[#0B3D2E] text-white'
                : 'text-[#202522] hover:bg-[#F7F7F3]'
            }`}
          >
            Pembiayaan Murabahah
          </button>
          <button
            onClick={() => setCalcType('simpanan')}
            className={`px-4 py-2 text-xs font-semibold rounded-[2px] transition-colors cursor-pointer ${
              calcType === 'simpanan'
                ? 'bg-[#0B3D2E] text-white'
                : 'text-[#202522] hover:bg-[#F7F7F3]'
            }`}
          >
            Simpanan Mudharabah
          </button>
        </div>
      </div>

      {/* Calculator Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
        
        {/* Sliders Input */}
        <div className="lg:col-span-7 space-y-6">
          {calcType === 'pembiayaan' ? (
            <>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#202522]">
                    Nilai Pembiayaan Modal
                  </label>
                  <span className="font-mono text-base font-bold text-[#0B3D2E]">
                    {formatRupiah(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={2000000}
                  max={100000000}
                  step={1000000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-[#0B3D2E] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#6B746F] mt-1">
                  <span>Rp 2.000.000</span>
                  <span>Rp 100.000.000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#202522]">
                    Jangka Waktu (Tenor)
                  </label>
                  <span className="font-mono text-base font-bold text-[#0B3D2E]">
                    {tenorMonths} Bulan
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[6, 12, 24, 36].map((months) => (
                    <button
                      key={months}
                      type="button"
                      onClick={() => setTenorMonths(months)}
                      className={`py-2 text-xs font-medium rounded-[4px] border cursor-pointer ${
                        tenorMonths === months
                          ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                          : 'bg-white text-[#202522] border-[#202522]/15 hover:bg-slate-50'
                      }`}
                    >
                      {months} Bln
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#6B746F] leading-relaxed pt-2">
                * Estimasi menggunakan margin murabahah setara 8.5% per tahun tetap (flat). Realisasi margin disepakati saat akad musyawarah.
              </p>
            </>
          ) : (
            <>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#202522]">
                    Nominal Penempatan Simpanan
                  </label>
                  <span className="font-mono text-base font-bold text-[#0B3D2E]">
                    {formatRupiah(depositAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000000}
                  max={500000000}
                  step={5000000}
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(Number(e.target.value))}
                  className="w-full accent-[#0B3D2E] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#6B746F] mt-1">
                  <span>Rp 5.000.000</span>
                  <span>Rp 500.000.000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#202522]">
                    Jangka Waktu Simpanan Berjangka
                  </label>
                  <span className="font-mono text-base font-bold text-[#0B3D2E]">
                    {depositMonths} Bulan
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 12, 24].map((months) => (
                    <button
                      key={months}
                      type="button"
                      onClick={() => setDepositMonths(months)}
                      className={`py-2 text-xs font-medium rounded-[4px] border cursor-pointer ${
                        depositMonths === months
                          ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                          : 'bg-white text-[#202522] border-[#202522]/15 hover:bg-slate-50'
                      }`}
                    >
                      {months} Bln
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#6B746F] leading-relaxed pt-2">
                * Estimasi bagi hasil mengacu pada rata-rata historis nisbah bagi hasil usaha riil koperasi setara 7.2% per tahun.
              </p>
            </>
          )}
        </div>

        {/* Output Panel: Formal Ledger Look */}
        <div className="lg:col-span-5 bg-white border border-[#202522]/15 rounded-[4px] p-6 space-y-5">
          <div className="text-xs font-bold uppercase tracking-wider text-[#145A42] border-b border-[#202522]/10 pb-2">
            Ringkasan Hasil Perhitungan
          </div>

          {calcType === 'pembiayaan' ? (
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[#6B746F] block">Estimasi Angsuran / Bulan:</span>
                <span className="font-mono text-2xl font-bold text-[#0B3D2E] block mt-1">
                  {formatRupiah(monthlyInstallment)}
                </span>
              </div>

              <div className="border-t border-[#202522]/10 pt-3 space-y-2 text-[#202522]">
                <div className="flex justify-between">
                  <span>Pokok Pembiayaan:</span>
                  <span className="font-mono font-medium">{formatRupiah(loanAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Margin Bagi Hasil:</span>
                  <span className="font-mono font-medium">{formatRupiah(totalMargin)}</span>
                </div>
                <div className="flex justify-between font-bold text-sm border-t border-[#202522]/10 pt-2 text-[#0B3D2E]">
                  <span>Total Pengembalian:</span>
                  <span className="font-mono">{formatRupiah(totalRepayment)}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[#6B746F] block">Estimasi Bagi Hasil / Bulan:</span>
                <span className="font-mono text-2xl font-bold text-[#0B3D2E] block mt-1">
                  {formatRupiah(monthlyDepositReturn)}
                </span>
              </div>

              <div className="border-t border-[#202522]/10 pt-3 space-y-2 text-[#202522]">
                <div className="flex justify-between">
                  <span>Pokok Simpanan:</span>
                  <span className="font-mono font-medium">{formatRupiah(depositAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimasi Total Bagi Hasil:</span>
                  <span className="font-mono font-medium">{formatRupiah(totalDepositReturn)}</span>
                </div>
                <div className="flex justify-between font-bold text-sm border-t border-[#202522]/10 pt-2 text-[#0B3D2E]">
                  <span>Estimasi Saldo Akhir:</span>
                  <span className="font-mono">{formatRupiah(depositAmount + totalDepositReturn)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={onOpenMembership}
              className="w-full bg-[#0B3D2E] hover:bg-[#145A42] text-white text-xs font-semibold py-2.5 rounded-[4px] transition-colors cursor-pointer text-center block"
            >
              Ajukan Permohonan Sekarang
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
