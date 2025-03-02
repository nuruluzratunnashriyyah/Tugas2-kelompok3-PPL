# Tugas2-kelompok3-PPL
# Project 2 PPL (Sistem Database Sederhana)

## NOVEL HUB
NovelHub adalah aplikasi berbasis Node.js yang digunakan untuk mengelola daftar novel. Aplikasi ini memungkinkan pengguna untuk menambahkan, melihat, memperbarui, dan menghapus data novel yang disimpan dalam file JSON sebagai database.

### Fitur Utama 
1. Melihat Daftar Novel – Menampilkan semua novel yang tersimpan dalam database.
2. Menambahkan Novel Baru – Pengguna dapat menambahkan novel dengan informasi lengkap seperti judul, pengarang, tahun terbit, genre, jumlah halaman, rating, dan ringkasan. Semua data wajib diisi.
3. Melihat Detail Novel – Mencari dan menampilkan detail sebuah novel berdasarkan judul.
4. Memperbarui Informasi Novel – Memungkinkan pengguna untuk mengubah informasi novel yang sudah ada.
5. Menghapus Novel – Menghapus novel dari database berdasarkan judul.
6. Menampilkan Novel dengan Rating Tertinggi – Menampilkan novel dengan rating tertinggi di database.

### Teknologi yang digunakan
- Node.js – Runtime JavaScript untuk menjalankan aplikasi.
- readline-sync – Library untuk menangani input pengguna di terminal.
- fs (File System) – Digunakan untuk membaca dan menulis database JSON.
- chalk – Menambahkan warna dan gaya pada tampilan terminal.

### Cara menjalankan aplikasi
1. Pastikan Node.js telah terinstal di komputer Anda.
2. Clone repositori ini atau buat file dengan struktur di atas.
3. Install dependensi dengan perintah berikut
   
   **npm install readline-sync chalk**
   
4. Jalankan aplikasi menggunakan perintah berikut:
   
   **node index.js**
   
5. Ikuti instruksi di layar untuk mengelola data novel!

### Note
- Data disimpan dalam format JSON pada file novels.json.
