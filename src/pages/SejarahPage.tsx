import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface SejarahPageProps {
  onOpenMembership: () => void;
  onGoToProfil: () => void;
}

export function SejarahPage({ onOpenMembership, onGoToProfil }: SejarahPageProps) {
  const milestones = [
    {
      year: '1998',
      date: '14 Agustus 1998',
      title: 'Musyawarah Pendirian & Pengumpulan Modal Perdana',
      desc: 'BMT Al-Muhajirin didirikan atas inisiatif 26 orang tokoh masyarakat dan pedagang perintis di Toili. Dengan menghimpun modal awal sebesar Rp8.488.000, para perintis bertekad menyediakan alternatif permodalan syariah yang adil dan membebaskan masyarakat dari jeratan rentenir pasar.',
      facts: [
        'Didirikan pada tanggal 14 Agustus 1998',
        'Diprakarsai oleh 26 orang anggota pendiri',
        'Total modal awal yang dihimpun sebesar Rp8.488.000'
      ],
      imgUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=85'
    },
    {
      year: '1998',
      date: '16 November 1998',
      title: 'Peresmian Operasional di Pasar Cendana Pura',
      desc: 'Operasional pelayanan BMT Al-Muhajirin diresmikan secara formal pada 16 November 1998 dengan kantor pertama yang berlokasi di Jl. Kompleks Pasar Cendana Pura, Kecamatan Toili, Kabupaten Banggai. Pada masa awal ini, pembiayaan terutama disalurkan untuk pedagang kecil di kawasan Pasar Cendanapura dan Pasar Tirtakencana.',
      facts: [
        'Operasional resmi diresmikan pada 16 November 1998',
        'Kantor perdana berlokasi di Jl. Kompleks Pasar Cendana Pura, Kecamatan Toili, Kab. Banggai',
        'Fokus awal pembiayaan bagi pedagang pasar di Cendanapura dan Tirtakencana'
      ],
      imgUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85'
    },
    {
      year: '2003',
      date: '28 Oktober 2003',
      title: 'Pengesahan Badan Hukum Koperasi Resmi',
      desc: 'Seiring pertumbuhan kepercayaan masyarakat dan bertambahnya jumlah anggota, BMT Al-Muhajirin memperoleh pengesahan status badan hukum resmi dengan nomor 518/11/BH/DISKOP dari Dinas Koperasi dan UKM tertanggal 28 Oktober 2003. Legalitas ini mengukuhkan hak dan perlindungan hukum bagi seluruh simpanan dan pembiayaan anggota.',
      facts: [
        'Pencatatan Badan Hukum No. 518/11/BH/DISKOP',
        'Tanggal pengesahan resmi: 28 Oktober 2003',
        'Bernaung di bawah pengawasan regulasi perkoperasian nasional'
      ],
      imgUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85'
    },
    {
      year: 'Berkelanjutan',
      date: 'Perkembangan Jaringan & Sektor Riil',
      title: 'Ekspansi Layanan, Penggilingan Padi & Briket',
      desc: 'Koperasi kemudian memperluas jaringan cabang dan layanan kas hingga ke Moilong dan wilayah dataran Toili lainnya. Tidak hanya bergerak di perantara keuangan, BMT Al-Muhajirin mengembangkan unit usaha pendukung di sektor riil, termasuk fasilitas penggilingan padi (rice milling) guna menyerap hasil panen petani secara adil serta unit pengolahan briket arang ramah lingkungan.',
      facts: [
        'Perluasan jaringan kantor kas dan layanan keliling pasar',
        'Pengembangan unit usaha penggilingan padi untuk stabilisasi harga gabah petani',
        'Pengembangan industri pengolahan briket arang lokal'
      ],
      imgUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1000&q=85'
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header: Editorial & Refined */}
        <div className="max-w-3xl pb-16 border-b border-[#202522]/10">
          <span className="text-xs font-bold text-[#145A42] tracking-[0.2em] uppercase block mb-3">
            02 — REKAM JEJAK SEJARAH
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B3D2E] tracking-tight leading-[1.15]">
            Perjalanan Sejarah BMT Al-Muhajirin
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[#6B746F] leading-[1.7] mt-5">
            Sebuah ikhtiar gotong royong yang dimulai dari kawasan Pasar Cendana Pura Toili pada tahun 1998 demi memperjuangkan ekonomi ummat yang bebas riba.
          </p>
        </div>

        {/* Introduction Text Block */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-[#202522]/10 items-baseline">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B3D2E] leading-snug">
              Lahir dari Kesadaran Menghindari Riba di Toili
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4 text-[17px] text-[#202522] leading-[1.8]">
            <p>
              Pada akhir era 1990-an di dataran Toili, geliat pasar tradisional dan sektor pertanian berkembang pesat seiring program transmigrasi. Namun, keterbatasan akses terhadap lembaga keuangan yang adil membuat pedagang kecil rentan terjebak dalam pinjaman harian berbiaya tinggi.
            </p>
            <p className="text-[#6B746F]">
              Kondisi tersebut mendorong 26 tokoh masyarakat dan pelaku usaha lokal untuk bermusyawarah mendirikan BMT Al-Muhajirin pada 14 Agustus 1998. Dengan modal awal Rp8.488.000, didirikanlah wadah bersama yang mengedepankan asas kemaslahatan, kejujuran akad syariah, dan kepemilikan kolektif oleh anggota.
            </p>
          </div>
        </div>

        {/* Editorial Timeline Sections */}
        <div className="py-20 space-y-24">
          {milestones.map((m, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Content Side */}
                <div className={`lg:col-span-6 space-y-4 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B3D2E] tracking-tight">
                    {m.year}
                  </div>
                  <div className="text-xs font-bold text-[#145A42] uppercase tracking-wider">
                    {m.date}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#202522] leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-[16.5px] text-[#6B746F] leading-[1.8]">
                    {m.desc}
                  </p>
                  
                  <div className="pt-3 border-t border-[#202522]/10 space-y-2">
                    {m.facts.map((fact, fIdx) => (
                      <div key={fIdx} className="text-sm text-[#202522] flex items-baseline gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#145A42] shrink-0 mt-0.5" />
                        <span>{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photography Side */}
                <div className={`lg:col-span-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="border border-[#202522]/12 overflow-hidden bg-[#F7F6F1] shadow-sm">
                    <img
                      src={m.imgUrl}
                      alt={m.title}
                      className="w-full h-[360px] sm:h-[420px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="pt-16 border-t border-[#202522]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl font-bold text-[#0B3D2E]">Ingin mengenal lebih dekat profil dan tata kelola kami?</h4>
            <p className="text-sm text-[#6B746F] mt-1">Pelajari susunan pengurus, visi misi, dan perizinan resmi BMT Al-Muhajirin.</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onGoToProfil}
              className="border border-[#0B3D2E] text-[#0B3D2E] hover:bg-[#F7F6F1] text-sm font-semibold px-5 py-2.5 rounded-[2px] transition-colors cursor-pointer"
            >
              Profil Koperasi
            </button>
            <button
              onClick={onOpenMembership}
              className="bg-[#0B3D2E] hover:bg-[#145A42] text-white text-sm font-semibold px-5 py-2.5 rounded-[2px] transition-colors cursor-pointer"
            >
              Menjadi Anggota
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
