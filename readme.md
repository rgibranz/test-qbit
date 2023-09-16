# Penjelasan

## studi-kasus-1.php

File `studi-kasus-1.php` berisi implementasi untuk mengerjakan studi kasus 1. Pada studi kasus ini, tugasnya adalah memisahkan data berdasarkan tipe buah (`fruittype`) dan mencetak daftar buah beserta jumlah stoknya.

### Cara menjalankan studi-kasus-1.php

Untuk menjalankan file, gunakan perintah berikut di terminal:

```bash
php studi-kasus-1.php
```

### komentar:

Array yang diberikan adalah sebuah array dalam TypeScript yang mendefinisikan tipe data IFruit dan berisi data terkait buah-buahan

## studi-kasus-2.php

File `studi-kasus-2.php` berisi implementasi untuk mengerjakan studi kasus 2. Pada studi kasus ini, tugasnya adalah menghitung jumlah komentar dan balasan komentar.

### Cara menjalankan studi-kasus-2.php

Untuk menjalankan file, gunakan perintah berikut di terminal:

```bash
php studi-kasus-2.php
```

## Backend UMKM - Proyek Backend dengan Laravel untuk API Testimonial

Proyek "backend-umkm" adalah aplikasi backend yang menggunakan Laravel untuk menyediakan API testimonial.

### Struktur Proyek

- Folder "backend-umkm" berisi seluruh proyek backend yang dibangun menggunakan framework Laravel.
- Aplikasi menggunakan port 127.0.0.1:8000 sebagai default untuk menjalankan server.

### Database

- Menggunakan database MySQL untuk menyimpan data terkait testimonial.
- Konfigurasi koneksi database dan pengaturan lainnya dapat ditemukan di file `.env`.

### Endpoint API

- `GET /api/testimonials`: Endpoint untuk mengambil data testimoni.
- `POST /api/testimonials`: Endpoint untuk mengirim data testimoni.

### Struktur Database - Tabel Testimonial

- Tabel `testimonials` memiliki struktur berikut:
  - `name` (string): Nama dari pemberi testimonial.
  - `testimony` (text): Isi testimoni.
  - `rating` (integer): Nilai penilaian testimoni.

### File Tambahan

- Dalam proyek ini, terdapat file-file berikut:
  - Factory: Membuat data testimoni palsu.
  - Controller: Mengatur logika untuk mengelola testimoni.
  - Model: Mewakili model data testimoni.
  - Test: Mengandung uji coba (test) untuk memastikan fungsionalitas yang benar.

## Frontend UMKM - Proyek Frontend dengan ReactJS untuk Layanan Servis UMKM

Proyek "frontend-umkm" adalah aplikasi frontend yang menggunakan ReactJS untuk menampilkan informasi tentang layanan servis UMKM.

### Struktur Proyek

- Folder "frontend-umkm" berisi seluruh proyek frontend yang dibangun menggunakan ReactJS.
- Aplikasi menggunakan port 127.0.0.1:3000 sebagai port default untuk menjalankan server.

### Struktur Halaman

Aplikasi memiliki struktur halaman sebagai berikut:

1. **Informasi**: Menampilkan informasi umum tentang layanan servis UMKM.
2. **Kelebihan Layanan**: Menginformasikan keunggulan dari layanan servis UMKM.
3. **Testimoni**: Menampilkan testimoni dari pengguna layanan servis UMKM.
4. **Form Testimoni**: Menyediakan form untuk pengguna mengirimkan testimoni.

### Mengambil Data Testimoni

- Aplikasi akan mengambil data testimoni dari backend-umkm menggunakan endpoint API yang tersedia pada port 127.0.0.1:8000.

## menjalankan run-task.sh

saya juga membuat file bash untuk menjalankan beberapa tugas terkait "backend-umkm" dan "frontend-umkm".

1. **Menjalankan studi-kasus-1.php dan studi-kasus-2.php:**

   - Menggunakan perintah `php studi-kasus-1.php` dan `php studi-kasus-2.php` untuk menjalankan dua file PHP yang disebutkan.

2. **Menjalankan composer install di folder backend-umkm:**

   - Pindah ke direktori `backend-umkm` menggunakan `cd backend-umkm`.
   - Jalankan perintah `composer install` untuk menginstal dependensi proyek Laravel.

3. **Mengcopy file .env.example menjadi .env:**

   - Menggunakan perintah `cp backend-umkm/.env.example backend-umkm/.env` untuk mengcopy file `.env.example` menjadi `.env`.

4. **Menjalankan npm install di folder frontend-umkm:**
   - Pindah ke direktori `frontend-umkm` menggunakan `cd frontend-umkm`.
   - Jalankan perintah `npm install` untuk menginstal dependensi proyek ReactJS.
