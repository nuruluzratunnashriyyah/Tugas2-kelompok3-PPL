const readline = require("readline-sync");
const db = require("./fungsi");
const chalk = require("chalk");

// Fungsi untuk menampilkan header
const showHeader = () => {
    console.log(chalk.bold.blue("=============================="));
    console.log(chalk.bold.blue("📖 Selamat datang di NovelHub"));
    console.log(chalk.bold.blue("=============================="));
};

const mainMenu = () => {
    showHeader();
    console.log(chalk.bold("Pilih aksi:"));
    console.log(chalk.green("1. Lihat daftar novel"));
    console.log(chalk.green("2. Tambah novel"));
    console.log(chalk.green("3. Lihat detail novel"));
    console.log(chalk.green("4. Update novel"));
    console.log(chalk.green("5. Hapus novel"));
    console.log(chalk.green("6. Lihat novel dengan rating tertinggi"));
    console.log(chalk.red("7. Keluar"));

    let choice = readline.questionInt("Masukkan nomor: ");

    
    switch (choice) {
        case 1:
            console.log(chalk.bold("\n📚 Daftar Novel:"));
            console.log(chalk.cyan(db.showNovels()));
            console.log("\n");
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
            console.log(chalk.bold.green("Terima kasih telah menggunakan NovelHub! Sampai jumpa!\n"));
            process.exit(0);
        default:
            console.log(chalk.bold.red("Pilihan tidak valid! Silakan pilih nomor antara 1-7."));
    }
    mainMenu();
};

// Jalankan menu utama
mainMenu();
