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

import infoContent from '../content/info.json';
import historyContent from '../content/history.json';
import organizationContent from '../content/organization.json';
import legalContent from '../content/legal.json';
import branchesContent from '../content/branches.json';
import faqsContent from '../content/faqs.json';
import galleryContent from '../content/gallery.json';

// Profil Umum Koperasi (dikelola via Sveltia CMS: src/content/info.json)
export const COOP_INFO = infoContent;

// Tonggak Sejarah (dikelola via Sveltia CMS: src/content/history.json)
export const HISTORY_DATA: HistoryMilestone[] = historyContent.milestones as HistoryMilestone[];

// Katalog Produk & Layanan (dikelola via Sveltia CMS: src/content/products/*.json)
const productModules = import.meta.glob('../content/products/*.json', { eager: true });
const rawProducts: ProductItem[] = Object.values(productModules).map((mod: any) => mod.default || mod);

// Susunan urutan standar katalog produk
const productOrder = [
  'simpanan-wadiah',
  'simpanan-berjangka',
  'simpanan-qurban-haji',
  'pembiayaan-modal-usaha',
  'pembiayaan-pertanian',
  'produk-pembiayaan-qardh',
  'layanan-tamwil-anggota',
  'produk-pembayaran-ppob'
];

export const PRODUCTS_DATA: ProductItem[] = rawProducts.sort((a, b) => {
  const indexA = productOrder.indexOf(a.id);
  const indexB = productOrder.indexOf(b.id);
  if (indexA !== -1 && indexB !== -1) return indexA - indexB;
  if (indexA !== -1) return -1;
  if (indexB !== -1) return 1;
  return a.name.localeCompare(b.name);
});

// Struktur Pengurus, Pengawas & Manajemen (dikelola via Sveltia CMS: src/content/organization.json)
export const ORG_MEMBERS: OrgMember[] = organizationContent.members as OrgMember[];

// Dokumen Legalitas & Perizinan (dikelola via Sveltia CMS: src/content/legal.json)
export const LEGAL_DOCS: LegalDocument[] = legalContent.documents as LegalDocument[];

// Warta, Berita & Artikel (dikelola via Sveltia CMS: src/content/articles/*.json)
const articleModules = import.meta.glob('../content/articles/*.json', { eager: true });
const rawArticles: ArticleItem[] = Object.values(articleModules).map((mod: any) => mod.default || mod);

export const ARTICLES_DATA: ArticleItem[] = rawArticles.sort((a, b) => {
  if (a.isFeatured && !b.isFeatured) return -1;
  if (!a.isFeatured && b.isFeatured) return 1;
  return b.id.localeCompare(a.id);
});

// Galeri Dokumentasi Kegiatan (dikelola via Sveltia CMS: src/content/gallery.json)
export const GALLERY_DATA: GalleryItem[] = galleryContent.items as GalleryItem[];

// Tanya Jawab / FAQ Anggota (dikelola via Sveltia CMS: src/content/faqs.json)
export const FAQS_DATA: FaqItem[] = faqsContent.faqs as FaqItem[];

// Jaringan Kantor Cabang & Unit Kas (dikelola via Sveltia CMS: src/content/branches.json)
export const OFFICE_BRANCHES: OfficeBranch[] = branchesContent.branches as OfficeBranch[];
