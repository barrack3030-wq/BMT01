# Panduan Pengelolaan Konten Website via Sveltia CMS
## KSU Syariah BMT Al-Muhajirin Toili

Website ini telah dikonfigurasi agar seluruh data dan konten dapat diperbarui dengan mudah menggunakan **Sveltia CMS** (CMS Git-based modern, ringan, dan tanpa server khusus).

---

### 1. Cara Mengakses Panel Admin
Buka browser dan akses alamat berikut:
```
https://[domain-website-anda]/admin/
```
Atau klik tombol **"Kelola Konten (Sveltia CMS)"** pada bagian bawah (footer) website.

---

### 2. Koleksi Konten yang Tersedia
Sistem telah menyederhanakan struktur konten ke dalam 6 modul utama:

| Modul | Folder / File Penyimpanan | Keterangan |
| :--- | :--- | :--- |
| **Warta & Berita** | `src/content/articles/*.json` | Tambah artikel, jadwal RAT, edukasi syariah, berita pasar, foto sampul |
| **Produk & Layanan** | `src/content/products/*.json` | Simpanan wadiah, mudharabah, pembiayaan murabahah, penggilingan padi |
| **Galeri Dokumentasi** | `src/content/gallery.json` | Foto-foto kegiatan pelayanan kantor kas, silaturahmi pasar, arsip sejarah |
| **Profil & Informasi Lembaga** | `src/content/info.json` | Nama koperasi, nomor badan hukum, alamat kantor pusat, telepon, WhatsApp, statistik |
| **Struktur Organisasi** | `src/content/organization.json` | Nama Ketua Pengurus, Pengawas, DPS, Manajer, dan Pimpinan Cabang |
| **Tanya Jawab (FAQ)** | `src/content/faqs.json` | Tanya jawab umum, syarat simpanan, dan pengajuan pembiayaan usaha |
| **Jaringan Kantor** | `src/content/branches.json` | Alamat kantor pusat, kantor kas pasar cendana pura, kantor moilong, unit padi |

---

### 3. Konfigurasi Repositori GitHub
File konfigurasi Sveltia CMS berada di `/public/admin/config.yml`.
Untuk menghubungkan dengan akun GitHub koperasi:
1. Buka file `/public/admin/config.yml`.
2. Ubah baris berikut sesuai nama pengguna dan nama repositori GitHub Anda:
   ```yaml
   backend:
     name: github
     repo: username-anda/bmt-almuhajirin
     branch: main
   ```
3. Setiap perubahan yang disimpan di Sveltia CMS akan otomatis tersimpan sebagai commit di repositori Git Anda dan memicu pembaruan website.

---

### 4. Media & Foto
Semua foto yang diunggah melalui panel Sveltia CMS akan otomatis tersimpan di dalam folder `public/uploads/` dan langsung tampil di website.
