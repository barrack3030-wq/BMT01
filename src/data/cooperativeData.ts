import {
  ProductItem,
  HistoryMilestone,
  OrgMember,
  LegalDocument,
  ArticleItem,
  GalleryItem,
  FaqItem,
  OfficeBranch
} from '../types';

export const COOP_INFO = {
  name: 'BMT Al Muhajirin',
  fullName: 'KSU Syariah BMT Al Muhajirin Toili',
  type: 'Koperasi Simpan Pinjam dan Pembiayaan Syariah (KSPPS)',
  motto: 'Bergerak Bersama, Tumbuh Bersama',
  subMotto: 'Membangun koperasi yang profesional, terpercaya, dan memberikan manfaat nyata bagi anggota serta masyarakat.',
  foundingDate: '14 Agustus 1998',
  inaugurationDate: '16 November 1998',
  legalDate: '28 Oktober 2003',
  legalNumber: '518/11/BH/DISKOP',
  initialCapital: 'Rp8.488.000',
  foundingMembersCount: 26,
  firstOffice: 'Jl. Kompleks Pasar Cendana Pura, Kecamatan Toili, Kabupaten Banggai',
  headOffice: {
    address: 'Jl. Ahmad Yani No. 22, Singkoyo, Kecamatan Toili, Kabupaten Banggai, Sulawesi Tengah',
    postalCode: '94765',
    phone: '(0453) 210088',
    whatsapp: '0812-4290-8899',
    email: 'info@bmtalmuhajirin.co.id',
    serviceEmail: 'layanan@bmtalmuhajirin.co.id',
    operatingHours: 'Senin - Jumat: 08.00 - 15.30 WITA | Sabtu: 08.00 - 12.00 WITA'
  },
  stats: {
    experienceYears: '25+',
    experienceLabel: 'Tahun Pengalaman',
    totalMembers: '12.500+',
    totalMembersLabel: 'Anggota Terdaftar',
    servingYears: '27+',
    servingLabel: 'Tahun Melayani Masyarakat',
    serviceAreas: '12',
    serviceAreasLabel: 'Wilayah Layanan di Kab. Banggai'
  }
};

export const HISTORY_DATA: HistoryMilestone[] = [
  {
    year: '1998',
    date: '14 Agustus 1998',
    badge: 'Kelahiran Lembaga',
    title: 'Pendirian KSU Syariah BMT Al Muhajirin',
    location: 'Toili, Kabupaten Banggai, Sulawesi Tengah',
    description: 'Bermula dari kepedulian bersama terhadap para pedagang kecil di kawasan transmigrasi Toili yang membutuhkan akses permodalan tanpa jeratan rentenir. Sebanyak 26 orang tokoh masyarakat dan perintis sepakat menghimpun dana awal.',
    facts: [
      'Didirikan secara resmi pada 14 Agustus 1998',
      'Modal awal pendirian sebesar Rp8.488.000',
      'Diprakarsai oleh 26 orang anggota pendiri berjiwa gotong royong'
    ]
  },
  {
    year: '1998',
    date: '16 November 1998',
    badge: 'Operasional Perdana',
    title: 'Mulai Beroperasi & Diresmikan',
    location: 'Jl. Kompleks Pasar Cendana Pura, Kec. Toili',
    description: 'Kantor pertama resmi dibuka di kompleks Pasar Cendana Pura untuk langsung melayani pedagang kaki lima dan pedagang pasar tradisional. Mayoritas penerima manfaat awal adalah pedagang di Pasar Cendanapura dan Pasar Tirtakencana.',
    facts: [
      'Peresmian operasional kantor perdana pada 16 November 1998',
      'Melayani pembiayaan produktif pedagang sayur, kelontong, dan hasil bumi',
      'Menerapkan prinsip syariah titipan (Wadi\'ah) dan bagi hasil (Mudharabah)'
    ]
  },
  {
    year: '2003',
    date: '28 Oktober 2003',
    badge: 'Pengukuhan Hukum',
    title: 'Mendapatkan Pengesahan Badan Hukum Resmi',
    location: 'Dinas Koperasi & UKM Kab. Banggai',
    description: 'Sebagai wujud komitmen terhadap tata kelola dan legalitas formal di hadapan negara, BMT Al Muhajirin resmi terdaftar dan memperoleh Surat Keputusan Badan Hukum Koperasi.',
    facts: [
      'Nomor Badan Hukum: 518/11/BH/DISKOP',
      'Tanggal Pengesahan: 28 Oktober 2003',
      'Bentuk Usaha: Koperasi Simpan Pinjam dan Pembiayaan Syariah (KSPPS)'
    ]
  },
  {
    year: 'Perkembangan',
    date: 'Tahun 2004 - 2018',
    badge: 'Ekspansi Layanan',
    title: 'Pembukaan Cabang & Diversifikasi Sektor Riil',
    location: 'Kecamatan se-Kabupaten Banggai',
    description: 'Menjawab lonjakan kebutuhan ekonomi anggota, BMT Al Muhajirin memperluas jaringan kantor cabang di berbagai kecamatan di Kabupaten Banggai. Di samping mengoptimalkan fungsi Baitut Tamwil, lembaga juga merintis unit usaha sektor riil untuk menyerap gabah petani lokal dan mengolah limbah pertanian.',
    facts: [
      'Pembukaan jaringan kantor cabang di kecamatan strategis Kabupaten Banggai',
      'Pengembangan unit usaha produktif: Jasa Penggilingan Padi untuk petani',
      'Inovasi unit usaha ramah lingkungan: Pembuatan Briket arang',
      'Penyaluran pembiayaan musyarakah dan murabahah untuk UMKM mikro'
    ]
  },
  {
    year: 'Saat Ini',
    date: 'Era Modern & Berkelanjutan',
    badge: 'Transformasi & Pelayanan',
    title: 'Terus Melayani Anggota & Masyarakat dengan Fondasi Kuat',
    location: 'Kantor Pusat Singkoyo & Seluruh Jaringan Layanan',
    description: 'Hingga kini, KSU Syariah BMT Al Muhajirin berdiri tegak melayani belasan ribu anggota, terus memperluas jangkauan pembiayaan produktif, digitalisasi pencatatan, dan mempertegas jati diri sebagai pilar ketahanan ekonomi rakyat di Sulawesi Tengah.',
    facts: [
      'Kantor Pusat representatif di Jl. Ahmad Yani No. 22 Singkoyo, Kec. Toili',
      'Membina ribuan pelaku usaha mikro, petani, dan peternak lokal',
      'Pengawasan Dewan Pengawas Syariah terstandar dan Dewan Pengurus amanah'
    ]
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'simpanan-wadiah',
    category: 'simpanan',
    name: 'Simpanan Sukarela (Wadi\'ah)',
    shortDesc: 'Simpanan harian yang aman, fleksibel disetor dan ditarik sewaktu-waktu tanpa potongan administrasi bulanan.',
    fullDesc: 'Simpanan berbasis akad Wadi\'ah Yad Dhomanah (titipan yang dijamin). Dana titipan dikelola secara produktif dan amanah oleh koperasi, di mana anggota memperoleh kemudahan transaksi harian serta berkesempatan menerima bonus sukarela tahunan.',
    iconName: 'Wallet',
    akad: 'Wadi\'ah Yad Dhomanah',
    targetUser: 'Seluruh Anggota, Pedagang, Pelajar & Masyarakat Umum',
    features: [
      'Setoran awal ringan mulai Rp20.000',
      'Bebas biaya administrasi bulanan',
      'Penarikan tunai dapat dilakukan setiap jam kerja',
      'Buku tabungan resmi koperasi'
    ],
    requirements: [
      'Fotokopi KTP / Identitas diri yang masih berlaku',
      'Terdaftar sebagai anggota / calon anggota koperasi',
      'Mengisi formulir pembukaan simpanan'
    ]
  },
  {
    id: 'simpanan-berjangka',
    category: 'simpanan',
    name: 'Simpanan Berjangka Mudharabah',
    shortDesc: 'Investasi syariah dengan nisbah bagi hasil yang kompetitif, halal, dan berkah untuk jangka waktu 3, 6, hingga 12 bulan.',
    fullDesc: 'Simpanan investasi murni berjangka dengan akad Mudharabah Muthlaqah. Dana anggota disalurkan khusus pada pembiayaan sektor usaha riil yang produktif, dengan pembagian hasil keuntungan yang adil dan transparan.',
    iconName: 'PiggyBank',
    akad: 'Mudharabah Muthlaqah',
    targetUser: 'Anggota yang merencanakan keuangan jangka menengah & panjang',
    features: [
      'Jangka waktu fleksibel: 3, 6, dan 12 bulan',
      'Nisbah bagi hasil menarik di atas rata-rata',
      'Bagi hasil dapat dicairkan bulanan atau diakumulasi',
      'Sertifikat bilyet simpanan berjangka resmi'
    ],
    requirements: [
      'Telah menjadi anggota koperasi',
      'Minimal penempatan dana Rp1.000.000',
      'Fotokopi KTP & KK'
    ]
  },
  {
    id: 'simpanan-qurban-haji',
    category: 'simpanan',
    name: 'Simpanan Qurban & Ibadah',
    shortDesc: 'Program tabungan terencana untuk mempermudah anggota melaksanakan ibadah qurban dan persiapan ibadah haji/umrah.',
    fullDesc: 'Simpanan khusus yang dirancang dengan setoran berkala terjadwal agar anggota dapat menunaikan ibadah qurban tahunan atau ongkos naik haji tanpa beban finansial mendadak.',
    iconName: 'CalendarCheck',
    akad: 'Wadi\'ah / Mudharabah Terikat',
    targetUser: 'Keluarga muslim yang merencanakan ibadah tahunan',
    features: [
      'Setoran fleksibel mingguan atau bulanan',
      'Pencairan disesuaikan menjelang Idul Adha atau jadwal keberangkatan',
      'Kemitraan penyediaan hewan qurban berkualitas di Toili',
      'Bebas biaya administrasi'
    ],
    requirements: [
      'KTP & Formulir pendaftaran simpanan ibadah',
      'Komitmen setoran berkala'
    ]
  },
  {
    id: 'pembiayaan-modal-usaha',
    category: 'pembiayaan',
    name: 'Pembiayaan Modal Kerja Usaha (Murabahah)',
    shortDesc: 'Pembiayaan jual-beli pengadaan barang dagangan, bibit, pakan, atau peralatan usaha untuk pedagang pasar dan UMKM.',
    fullDesc: 'Solusi pengadaan stok dagang dan permodalan kerja dengan skema Murabahah (jual-beli dengan margin keuntungan yang disepakati bersama di muka). Angsuran tetap, transparan, dan tanpa bunga berlipat.',
    iconName: 'TrendingUp',
    akad: 'Murabahah (Jual Beli Syariah)',
    targetUser: 'Pedagang pasar, pemilik toko kelontong, pedagang kuliner & perintis UMKM',
    features: [
      'Plafon pembiayaan fleksibel dari mikro hingga skala menengah',
      'Jangka waktu angsuran harian, mingguan, atau bulanan sesuai siklus usaha',
      'Margin flat dan transparan sejak awal akad',
      'Proses pendampingan usaha langsung di tempat'
    ],
    requirements: [
      'KTP Suami/Istri & Kartu Keluarga',
      'Keterangan usaha / bukti fisik aktivitas usaha produktif',
      'Agunan jaminan sesuai ketentuan plafon'
    ]
  },
  {
    id: 'pembiayaan-pertanian',
    category: 'pembiayaan',
    name: 'Pembiayaan Musiman Pertanian & Padi',
    shortDesc: 'Pembiayaan modal tanam, pupuk, dan alsintan bagi petani padi sawah dan perkebunan dengan pelunasan saat panen (Yarnen).',
    fullDesc: 'Didesain khusus untuk masyarakat agraris Toili dan Banggai. Petani mendapatkan kepastian pasokan sarana produksi tepat waktu tanpa tertekan tengkulak, dengan pembayaran fleksibel mengikuti kalender panen raya.',
    iconName: 'Wheat',
    akad: 'Salam / Murabahah Pertanian',
    targetUser: 'Kelompok tani padi sawah, jagung, dan perkebunan rakyat',
    features: [
      'Sistem bayar panen (yarnen) yang selaras dengan kalender pertanian',
      'Kemudahan akses pupuk dan sarana produksi',
      'Dukungan integrasi unit penggilingan padi koperasi',
      'Konsultasi dan pendampingan lapangan'
    ],
    requirements: [
      'Kepemilikan / bukti garap lahan sawah/kebun produktif',
      'Surat rekomendasi kelompok tani / desa setempat',
      'Identitas diri dan anggota keluarga'
    ]
  },
  {
    id: 'layanan-tamwil-anggota',
    category: 'layanan',
    name: 'Layanan Penggilingan Padi & Briket',
    shortDesc: 'Unit usaha sektor riil koperasi yang melayani pengolahan pasca panen dan pengolahan limbah pertanian ramah lingkungan.',
    fullDesc: 'Sebagai koperasi serba usaha syariah, BMT Al Muhajirin mengoperasikan fasilitas penggilingan padi modern dan workshop produksi briket untuk memberi nilai tambah nyata pada komoditas lokal Kabupaten Banggai.',
    iconName: 'Factory',
    akad: 'Ijarah (Jasa Layanan Sektor Riil)',
    targetUser: 'Petani padi, pengusaha beras, dan pelaku industri lokal',
    features: [
      'Hasil gilingan beras putih bersih dan rendemen tinggi',
      'Tarif jasa yang terjangkau bagi sesama anggota',
      'Briket arang berkualitas tinggi untuk industri dan rumah tangga',
      'Pemberdayaan tenaga kerja lokal daerah'
    ],
    requirements: [
      'Terbuka untuk anggota dan masyarakat sekitar Toili'
    ]
  },
  {
    id: 'produk-pembayaran-ppob',
    category: 'layanan',
    name: 'Layanan Payment PPOB & Kas Keliling',
    shortDesc: 'Pembayaran tagihan listrik, pulsa, BPJS, transfer dana antar-bank, serta layanan jemput bola kas keliling ke pasar.',
    fullDesc: 'Kemudahan transaksi finansial modern di dekat tempat usaha anggota. Petugas koperasi hadir langsung ke pasar-pasar tradisional di Toili dengan perangkat mobile banking koperasi.',
    iconName: 'Smartphone',
    akad: 'Wakalah bil Ujrah',
    targetUser: 'Seluruh warga dan pedagang di sentra pasar tradisional',
    features: [
      'Layanan jemput setoran harian di lapak pasar',
      'Pembayaran PLN, PDAM, pulsa, dan BPJS cepat',
      'Kemudahan setor-tarik tanpa harus meninggalkan tempat jualan'
    ],
    requirements: [
      'Nomor rekening simpanan BMT Al Muhajirin'
    ]
  },
  {
    id: 'produk-pembiayaan-qardh',
    category: 'unggulan',
    name: 'Pembiayaan Kebajikan (Qardhul Hasan)',
    shortDesc: 'Bantuan dana talangan sosial tanpa margin keuntungan untuk kebutuhan darurat pendidikan atau kesehatan anggota.',
    fullDesc: 'Fungsi baitul maal yang menegaskan sisi kemanusiaan koperasi syariah. Dibiayai dari dana infaq, shadaqah, dan zakat lembaga untuk menopang anggota yang sedang tertimpa musibah atau kebutuhan mendesak.',
    iconName: 'HeartHandshake',
    akad: 'Qardhul Hasan (Pinjaman Kebajikan)',
    targetUser: 'Anggota yang membutuhkan santunan darurat atau modal ultra-mikro',
    features: [
      'Tanpa tambahan biaya atau margin apapun (0% margin)',
      'Pengembalian pokok murni sesuai kemampuan nyata',
      'Wujud nyata kepedulian ukhuwah antar sesama anggota'
    ],
    requirements: [
      'Permohonan tertulis & verifikasi pengurus bidang sosial'
    ]
  }
];

export const ORG_MEMBERS: OrgMember[] = [
  {
    id: '1',
    category: 'pengurus',
    role: 'Ketua Pengurus',
    name: '[Nama Ketua Pengurus]',
    period: 'Periode 2023 - 2028',
    bio: 'Memimpin arah strategis dan kebijakan umum KSU Syariah BMT Al Muhajirin dalam menjaga stabilitas serta pertumbuhan lembaga.'
  },
  {
    id: '2',
    category: 'pengurus',
    role: 'Sekretaris',
    name: '[Nama Sekretaris]',
    period: 'Periode 2023 - 2028',
    bio: 'Bertanggung jawab atas administrasi kelembagaan, kepatuhan hukum keanggotaan, dan dokumentasi rapat anggota tahunan.'
  },
  {
    id: '3',
    category: 'pengurus',
    role: 'Bendahara',
    name: '[Nama Bendahara]',
    period: 'Periode 2023 - 2028',
    bio: 'Mengawasi perputaran arus kas, likuiditas simpan pinjam, serta perencanaan anggaran tahunan koperasi.'
  },
  {
    id: '4',
    category: 'pengawas',
    role: 'Ketua Pengawas Operasional',
    name: '[Nama Ketua Pengawas]',
    period: 'Periode 2023 - 2028',
    bio: 'Memastikan kepatuhan tata kelola, audit internal berkala, dan perlindungan hak seluruh anggota koperasi.'
  },
  {
    id: '5',
    category: 'pengawas',
    role: 'Ketua Dewan Pengawas Syariah (DPS)',
    name: '[Nama Ketua DPS]',
    period: 'Periode 2023 - 2028',
    bio: 'Menjamin seluruh produk, akad, dan operasional lembaga senantiasa sejalan dengan fatwa Dewan Syariah Nasional MUI.'
  },
  {
    id: '6',
    category: 'manajemen',
    role: 'Manajer Operasional & Pembiayaan',
    name: '[Nama Manajer Operasional]',
    period: 'Eksekutif Profesional',
    bio: 'Mengawal operasional harian, analis pembiayaan mikro, penagihan, serta standardisasi pelayanan kantor cabang.'
  },
  {
    id: '7',
    category: 'manajemen',
    role: 'Kepala Unit Sektor Riil (Penggilingan Padi & Briket)',
    name: '[Nama Kepala Unit Usaha]',
    period: 'Eksekutif Profesional',
    bio: 'Mengelola fasilitas pengolahan gabah petani dan produksi briket ramah lingkungan secara profesional.'
  },
  {
    id: '8',
    category: 'cabang',
    role: 'Kepala Kantor Cabang Toili & Wilayah Banggai',
    name: '[Nama Kepala Cabang]',
    period: 'Layanan Lapangan',
    bio: 'Mengkoordinir tim funding dan marketing pembiayaan di sentra-sentra pasar serta pedesaan.'
  }
];

export const LEGAL_DOCS: LegalDocument[] = [
  {
    id: 'badan-hukum',
    title: 'Surat Keputusan Pengesahan Badan Hukum Koperasi',
    regNumber: '518/11/BH/DISKOP',
    dateIssued: '28 Oktober 2003',
    issuer: 'Dinas Koperasi dan Usaha Kecil Menengah',
    description: 'Pengesahan formal status Badan Hukum Koperasi Serba Usaha Syariah BMT Al Muhajirin sebagai badan usaha koperasi resmi yang diakui pemerintah Republik Indonesia.',
    category: 'badan-hukum'
  },
  {
    id: 'izin-koperasi',
    title: 'Izin Operasional Koperasi Simpan Pinjam dan Pembiayaan Syariah',
    regNumber: 'Nomor: 503/014/IOP-KSPPS/DPMPTSP/2021',
    dateIssued: 'Diperbarui Berkala',
    issuer: 'Dinas Penanaman Modal & Pelayanan Terpadu Satu Pintu Kab. Banggai',
    description: 'Izin legal operasional penyelenggaraan kegiatan usaha simpan pinjam dan pembiayaan berdasarkan prinsip syariah di wilayah Kabupaten Banggai.',
    category: 'izin-operasional'
  },
  {
    id: 'rekomendasi-dps',
    title: 'Surat Rekomendasi & Sertifikasi Dewan Pengawas Syariah',
    regNumber: 'Reg: DPS-MUI/SULTENG/BMT-022',
    dateIssued: 'Tahunan Terverifikasi',
    issuer: 'Dewan Pengawas Syariah / Majelis Ulama Indonesia',
    description: 'Ketetapan pengawasan syariah yang memastikan seluruh transaksi, akad jual-beli, dan titipan dana bebas dari unsur riba, maysir, dan gharar.',
    category: 'syariah'
  },
  {
    id: 'npwp-lembaga',
    title: 'Nomor Pokok Wajib Pajak (NPWP) Lembaga',
    regNumber: '02.481.921.4-831.000',
    dateIssued: 'Terdaftar Aktif',
    issuer: 'Direktorat Jenderal Pajak RI',
    description: 'Kepatuhan perpajakan lembaga koperasi sebagai wajib pajak badan yang taat dan transparan.',
    category: 'perpajakan'
  },
  {
    id: 'nib',
    title: 'Nomor Induk Berusaha (NIB) Berbasis Risiko',
    regNumber: '9120008412891',
    dateIssued: 'Kementerian Investasi / BKPM RI',
    issuer: 'Sistem OSS Republik Indonesia',
    description: 'Legalitas tunggal untuk kegiatan operasional jasa perantara keuangan koperasi dan unit usaha penggilingan padi.',
    category: 'izin-operasional'
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'art-1',
    slug: 'rat-bmt-al-muhajirin-laporan-pertanggungjawaban',
    title: 'Rapat Anggota Tahunan (RAT) Buku 2025: Komitmen Pertumbuhan Berkelanjutan dan Pembagian SHU',
    category: 'Koperasi',
    date: '10 Februari 2026',
    author: 'Sekretariat Koperasi',
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Pelaksanaan RAT menjadi bukti transparansi tertinggi dalam tata kelola koperasi syariah. Diikuti ratusan perwakilan anggota dari berbagai cabang se-Kabupaten Banggai.',
    content: [
      'Rapat Anggota Tahunan (RAT) merupakan pemegang kekuasaan tertinggi dalam struktur koperasi. BMT Al Muhajirin Toili sukses menggelar RAT dengan agenda utama penyampaian pertanggungjawaban Pengurus dan Pengawas atas kinerja tahun buku yang lalu.',
      'Dalam sambutannya, Ketua Pengurus menegaskan bahwa prinsip kehati-hatian, digitalisasi layanan kas, dan penguatan permodalan anggota menjadi pilar utama ketahanan lembaga menghadapi fluktuasi ekonomi.',
      'Sisa Hasil Usaha (SHU) dibagikan secara adil dan proporsional kepada seluruh anggota yang aktif bertransaksi dan menabung, mencerminkan asas keadilan gotong royong yang menjadi ruh koperasi.'
    ]
  },
  {
    id: 'art-2',
    slug: 'pemberdayaan-pedagang-pasar-cendanapura',
    title: 'Pemberdayaan Pedagang Pasar Tradisional: Pembiayaan Murabahah Tanpa Agunan Berat',
    category: 'Ekonomi',
    date: '28 Januari 2026',
    author: 'Divisi Pembiayaan Mikro',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Sejak didirikan pada 1998 di kompleks Pasar Cendana Pura, BMT Al Muhajirin senantiasa menjadi sahabat setia pedagang sayur dan sembako.',
    content: [
      'Pasar tradisional adalah denyut nadi perekonomian masyarakat Toili. BMT Al Muhajirin terus mengoptimalkan layanan jemput bola di mana petugas koperasi langsung mendatangi lapak pedagang.',
      'Dengan akad Murabahah yang adil, pedagang terbebas dari jeratan pinjaman rentenir harian yang membebani keuntungan jualan mereka.',
      'Program ini telah mendampingi lebih dari 800 pedagang mikro naik kelas menjadi wirausahawan mandiri.'
    ]
  },
  {
    id: 'art-3',
    slug: 'panen-raya-padi-toili-unit-penggilingan-koperasi',
    title: 'Mendukung Panen Raya Padi Toili Melalui Optimalisasi Unit Penggilingan Koperasi',
    category: 'Kegiatan',
    date: '15 Januari 2026',
    author: 'Unit Sektor Riil',
    imageUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Kecamatan Toili sebagai lumbung pangan Sulawesi Tengah didukung penuh oleh fasilitas mesin penggilingan padi milik BMT Al Muhajirin.',
    content: [
      'Sebagai koperasi yang bertumbuh di tanah pertanian yang subur, BMT Al Muhajirin tidak hanya berperan di sektor keuangan tetapi juga sektor pangan nyata.',
      'Unit penggilingan padi koperasi menyerap gabah kering panen dari para petani anggota dengan harga yang layak dan transparan.',
      'Langkah ini memotong mata rantai distribusi yang selama ini merugikan petani di pedesaan Banggai.'
    ]
  },
  {
    id: 'art-4',
    slug: 'edukasi-keuangan-syariah-bagi-masyarakat-desa',
    title: 'Edukasi Keuangan Syariah: Mengenal Perbedaan Riba dan Bagi Hasil Usaha',
    category: 'Edukasi',
    date: '05 Desember 2025',
    author: 'Dewan Pengawas Syariah',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Memahami esensi akad Wadi’ah, Mudharabah, dan Murabahah agar transaksi keuangan sehari-hari membawa berkah dan ketenteraman.',
    content: [
      'Literasi keuangan syariah menjadi salah satu misi utama BMT Al Muhajirin. Koperasi syariah berlandaskan pada kemitraan nyata yang adil, bukan transaksi spekulatif.',
      'Dalam simpanan Mudharabah, keuntungan dibagikan sesuai nisbah riil hasil perputaran dana, sehingga tidak ada pihak yang dizalimi.'
    ]
  },
  {
    id: 'art-5',
    slug: 'pengumuman-jadwal-layanan-ramadhan',
    title: 'Pengumuman: Jadwal Operasional Kantor Pelayanan Selama Bulan Suci Ramadhan',
    category: 'Pengumuman',
    date: '20 November 2025',
    author: 'Bagian Humas & SDM',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Penyesuaian jam operasional kantor pusat dan kantor cabang selama bulan Ramadhan guna kelancaran ibadah anggota.',
    content: [
      'Diberitahukan kepada seluruh anggota bahwa layanan transaksi kas, setor simpanan, dan konsultasi pembiayaan akan berlangsung mulai pukul 08.30 hingga 14.30 WITA.',
      'Layanan penarikan tabungan hari raya (THR) dapat dikoordinasikan mulai pertengahan bulan berjalan.'
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Pelayanan Ramah di Front Office Kantor Pusat Singkoyo',
    category: 'Pelayanan',
    date: 'Februari 2026',
    description: 'Suasana pelayanan transaksi simpanan dan konsultasi pembiayaan oleh staf customer service yang profesional dan bersahabat.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-2',
    title: 'Aktivitas Pedagang Mitra di Pasar Tradisional Toili',
    category: 'Anggota',
    date: 'Januari 2026',
    description: 'Para pedagang anggota yang telah puluhan tahun bermitra bersama BMT Al Muhajirin dalam permodalan usaha pasar.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-3',
    title: 'Rapat Anggota Tahunan (RAT) Pertanggungjawaban Pengurus',
    category: 'Kegiatan',
    date: 'Tahun 2026',
    description: 'Forum musyawarah tertinggi anggota koperasi yang diselenggarakan penuh kekeluargaan dan musyawarah mufakat.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-4',
    title: 'Fasilitas Unit Penggilingan Padi Koperasi di Toili',
    category: 'Dokumentasi',
    date: 'Desember 2025',
    description: 'Mesin penggilingan gabah berkapasitas memadai untuk melayani petani anggota saat musim panen padi di dataran Toili.',
    imageUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-5',
    title: 'Penyaluran Santunan Sosial & Paket Sembako Berkah',
    category: 'Sosial',
    date: 'Oktober 2025',
    description: 'Fungsi baitul maal menyalurkan zakat, infaq, dan shadaqah kepada para dhuafa dan anak yatim di sekitar kantor cabang.',
    imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-6',
    title: 'Gedung Kantor Pusat Singkoyo yang Representatif',
    category: 'Kantor',
    date: 'Tahun 2025',
    description: 'Kantor Pusat KSU Syariah BMT Al Muhajirin di Jl. Ahmad Yani No. 22 Singkoyo, Toili, Kabupaten Banggai.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-7',
    title: 'Pendampingan Usaha Mikro dan Monitoring Lapangan',
    category: 'Pelayanan',
    date: 'Agustus 2025',
    description: 'Petugas lapangan BMT Al Muhajirin melakukan kunjungan silaturahmi dan pendampingan kelayakan usaha anggota.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gal-8',
    title: 'Dokumentasi Arsip Sejarah Pendirian Awal Tahun 1998',
    category: 'Dokumentasi',
    date: 'Arsip 1998',
    description: 'Napak tilas kebersamaan 26 anggota pendiri yang memulai langkah mulia dari kawasan Pasar Cendana Pura Toili.',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Umum',
    question: 'Apa itu Koperasi Simpan Pinjam Syariah BMT Al Muhajirin?',
    answer: 'BMT (Baitul Maal wat Tamwil) Al Muhajirin Toili adalah lembaga keuangan mikro syariah berbadan hukum Koperasi Simpan Pinjam Syariah (KSPPS). Lembaga ini memadukan dua fungsi utama: Baitul Tamwil (menghimpun simpanan dan menyalurkan pembiayaan produktif bagi anggota) serta Baitul Maal (mengelola dana sosial infaq, sedekah, dan kebajikan bagi masyarakat).'
  },
  {
    id: 'faq-2',
    category: 'Keanggotaan',
    question: 'Bagaimana cara menjadi anggota koperasi?',
    answer: 'Cara menjadi anggota sangat mudah: (1) Mengisi formulir pendaftaran anggota secara online atau di kantor terdekat, (2) Melampirkan fotokopi KTP dan KK yang masih berlaku, (3) Menyetor Simpanan Pokok (Rp100.000 sekali seumur hidup selama menjadi anggota) dan Simpanan Wajib (mulai Rp10.000 per bulan), (4) Menerima Buku Keanggotaan resmi dan langsung dapat menikmati seluruh fasilitas produk.'
  },
  {
    id: 'faq-3',
    category: 'Keanggotaan',
    question: 'Apa saja syarat umum menjadi anggota BMT Al Muhajirin?',
    answer: 'Syarat utama: Warga Negara Indonesia, berakal sehat, berdomisili atau memiliki usaha di wilayah Kabupaten Banggai dan sekitarnya, menyetujui Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) koperasi, serta memiliki itikad baik untuk saling membantu dalam kemakmuran bersama.'
  },
  {
    id: 'faq-4',
    category: 'Simpanan',
    question: 'Apa saja layanan produk yang disediakan koperasi?',
    answer: 'Kami menyediakan: Simpanan Sukarela Wadi\'ah (bisa ditarik sewaktu-waktu tanpa potongan administrasi bulanan), Simpanan Berjangka Mudharabah (investasi bagi hasil kompetitif), Simpanan Qurban/Ibadah, Pembiayaan Usaha Modal Kerja (Murabahah), Pembiayaan Pertanian/Musiman (Yarnen), Layanan Jasa Penggilingan Padi, Produksi Briket, serta Layanan Pembayaran Tagihan/PPOB.'
  },
  {
    id: 'faq-5',
    category: 'Pembiayaan',
    question: 'Bagaimana cara mengajukan pembiayaan usaha?',
    answer: 'Langkah pengajuan pembiayaan: (1) Terdaftar sebagai anggota atau calon anggota, (2) Mengisi formulir pengajuan pembiayaan dengan melampirkan identitas dan keterangan usaha, (3) Petugas analis kami akan melakukan silaturahmi & survei kelayakan usaha ke lokasi Anda, (4) Persetujuan komite pembiayaan, (5) Penandatanganan akad syariah yang transparan, dan (6) Pencairan dana langsung ke rekening simpanan anggota.'
  },
  {
    id: 'faq-6',
    category: 'Umum',
    question: 'Di mana lokasi kantor koperasi dan jam pelayanannya?',
    answer: 'Kantor Pusat kami berlokasi di Jl. Ahmad Yani No. 22, Singkoyo, Kecamatan Toili, Kabupaten Banggai, Sulawesi Tengah. Selain itu, kami memiliki unit layanan dan jaringan di berbagai kecamatan sekitar. Jam pelayanan: Senin - Jumat pukul 08.00 - 15.30 WITA dan Sabtu pukul 08.00 - 12.00 WITA.'
  }
];

export const OFFICE_BRANCHES: OfficeBranch[] = [
  {
    id: 'pusat',
    name: 'Kantor Pusat Singkoyo',
    type: 'Kantor Pusat',
    address: 'Jl. Ahmad Yani No. 22, Singkoyo, Kec. Toili, Kab. Banggai, Sulawesi Tengah',
    phone: '(0453) 210088',
    whatsapp: '0812-4290-8899',
    operatingHours: 'Senin - Jumat 08.00 - 15.30 WITA | Sabtu 08.00 - 12.00 WITA',
    headName: '[Pimpinan Kantor Pusat]'
  },
  {
    id: 'cabang-cendana',
    name: 'Kantor Kas Kompleks Pasar Cendana Pura',
    type: 'Kantor Kas',
    address: 'Jl. Kompleks Pasar Cendana Pura, Kec. Toili, Kab. Banggai',
    phone: '(0453) 210091',
    whatsapp: '0812-4290-8891',
    operatingHours: 'Setiap Hari Pasar: 07.30 - 14.00 WITA',
    headName: '[Penanggung Jawab Kantor Kas Pasar]'
  },
  {
    id: 'cabang-moilong',
    name: 'Kantor Layanan Wilayah Moilong',
    type: 'Kantor Cabang',
    address: 'Jl. Trans Sulawesi, Kec. Moilong, Kab. Banggai',
    phone: '(0453) 210095',
    whatsapp: '0812-4290-8895',
    operatingHours: 'Senin - Jumat 08.00 - 15.00 WITA',
    headName: '[Kepala Kantor Layanan Moilong]'
  },
  {
    id: 'unit-padi',
    name: 'Unit Penggilingan Padi & Sektor Riil',
    type: 'Kantor Cabang',
    address: 'Kawasan Sentra Pangan Dataran Toili, Kab. Banggai',
    phone: '(0453) 210098',
    whatsapp: '0812-4290-8898',
    operatingHours: 'Senin - Sabtu 07.30 - 16.00 WITA',
    headName: '[Kepala Unit Produksi Pertanian]'
  }
];
