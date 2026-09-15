export type PageType = 
  | 'beranda'
  | 'profil'
  | 'sejarah'
  | 'visi-misi'
  | 'struktur-organisasi'
  | 'legalitas'
  | 'produk-layanan'
  | 'keanggotaan'
  | 'berita'
  | 'galeri'
  | 'kontak';

export type ProductCategory = 'semua' | 'simpanan' | 'pembiayaan' | 'layanan' | 'unggulan';

export interface ProductItem {
  id: string;
  category: 'simpanan' | 'pembiayaan' | 'layanan' | 'unggulan';
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  akad?: string;
  targetUser?: string;
  features: string[];
  requirements: string[];
}

export interface HistoryMilestone {
  year: string;
  date?: string;
  title: string;
  description: string;
  location?: string;
  facts?: string[];
  badge?: string;
}

export interface OrgMember {
  id: string;
  role: string;
  name: string;
  category: 'pengurus' | 'pengawas' | 'manajemen' | 'cabang';
  period?: string;
  bio?: string;
}

export interface LegalDocument {
  id: string;
  title: string;
  regNumber: string;
  dateIssued: string;
  issuer: string;
  description: string;
  category: 'badan-hukum' | 'izin-operasional' | 'syariah' | 'perpajakan';
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  category: 'Berita' | 'Kegiatan' | 'Edukasi' | 'Ekonomi' | 'Koperasi' | 'Pengumuman';
  date: string;
  author: string;
  imageUrl: string;
  excerpt: string;
  content: string[];
  isFeatured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Kegiatan' | 'Pelayanan' | 'Anggota' | 'Kantor' | 'Sosial' | 'Dokumentasi';
  imageUrl: string;
  date: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Umum' | 'Simpanan' | 'Pembiayaan' | 'Keanggotaan';
}

export interface OfficeBranch {
  id: string;
  name: string;
  type: 'Kantor Pusat' | 'Kantor Cabang' | 'Kantor Kas';
  address: string;
  phone: string;
  whatsapp: string;
  operatingHours: string;
  headName: string;
}
