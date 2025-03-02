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

    
    switch (choice) {
        case 1:
            console.log("\n📚 Daftar Novel:");
            console.log(db.showNovels());
            break;
        case 2:
            db.addNovel();
            break;
        case 3:
            db.getNovel();
            break;
        case 4:
            db.updateNovel();
            break;
        case 5:
            db.deleteNovel();
            break;
        case 6:
            db.bestRatedNovel();
            break;
        case 7:
            console.log("Terima kasih telah menggunakan NovelHub! Sampai jumpa!");
            process.exit(0);
        default:
            console.log("Pilihan tidak valid! Silakan pilih nomor antara 1-7.");
    }
    mainMenu();
};

// Jalankan menu utama
mainMenu();
