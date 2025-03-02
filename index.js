const readline = require("readline-sync");
const db = require("./fungsi");

const mainMenu = () => {
    console.log("\n📖 Selamat datang di NovelHub");
    console.log("Pilih aksi:");
    console.log("1. Lihat daftar novel");
    console.log("2. Tambah novel");
    console.log("3. Lihat detail novel");
    console.log("4. Update novel");
    console.log("5. Hapus novel");
    console.log("6. Lihat novel dengan rating tertinggi");
    console.log("7. Keluar");

    let choice = readline.questionInt("Masukkan nomor: ");
    mainMenu();
};

// Jalankan menu utama
mainMenu();
