const fs = require("fs");
const readline = require("readline-sync");

const DB_FILE = "novels.json";

// Fungsi membaca database
const readDB = () => {
    return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
};

// Fungsi menulis ke database
const writeDB = (data) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// Menampilkan daftar novel
const showNovels = () => {
    const db = readDB();
    return db.novels.map((novel, index) => `${index + 1}. ${novel.title} - ${novel.author} (${novel.year})`).join("\n");
};

// Menambahkan novel baru
const addNovel = () => {
    // Fungsi untuk meminta input yang tidak boleh kosong
    const getInput = (prompt) => {
        let input;
        do {
            input = readline.question(prompt).trim();
            if (!input) console.log("Input tidak boleh kosong! Silakan masukkan kembali.");
        } while (!input);
        return input;
    };

    const newNovel = {
        title: getInput("Masukkan judul novel: "),
        author: getInput("Masukkan nama pengarang: "),
        year: readline.questionInt("Masukkan tahun terbit: "),
        genre: getInput("Masukkan genre: "),
        pages: readline.questionInt("Masukkan jumlah halaman: "),
        rating: readline.questionFloat("Masukkan rating (0-10): "),
        summary: getInput("Masukkan ringkasan: ")
    };

    let db = readDB();
    db.novels.push(newNovel);
    writeDB(db);
    console.log("✅ Novel berhasil ditambahkan!");
};

// Melihat detail satu novel
const getNovel = () => {
    const title = readline.question("Masukkan judul novel yang ingin dilihat: ");
    let db = readDB();
    const novel = db.novels.find(n => n.title.toLowerCase() === title.toLowerCase());
    if (novel) {
        console.log("\n📖 Detail Novel:");
        console.log(`Judul: ${novel.title}`);
        console.log(`Pengarang: ${novel.author}`);
        console.log(`Tahun Terbit: ${novel.year}`);
        console.log(`Genre: ${novel.genre}`);
        console.log(`Jumlah Halaman: ${novel.pages}`);
        console.log(`Rating: ${novel.rating}`);
        console.log(`Ringkasan: ${novel.summary}`);
    } else {
        console.log("Novel tidak ditemukan!");
    }
};

// Mengupdate novel
const updateNovel = () => {
    const updateTitle = readline.question("Masukkan judul novel yang ingin diupdate: ");
    let db = readDB();
    let novel = db.novels.find(n => n.title.toLowerCase() === updateTitle.toLowerCase());

    if (!novel) {
        console.log("Novel tidak ditemukan!");
        return;
    }

    const updatedData = {
        title: readline.question("Masukkan judul baru (kosongkan jika tidak ingin mengubah): "),
        author: readline.question("Masukkan nama pengarang baru (kosongkan jika tidak ingin mengubah): "),
        year: readline.question("Masukkan tahun terbit baru (kosongkan jika tidak ingin mengubah): "),
        genre: readline.question("Masukkan genre baru (kosongkan jika tidak ingin mengubah): "),
        pages: readline.question("Masukkan jumlah halaman baru (kosongkan jika tidak ingin mengubah): "),
        rating: readline.question("Masukkan rating baru (kosongkan jika tidak ingin mengubah): "),
        summary: readline.question("Masukkan ringkasan baru (kosongkan jika tidak ingin mengubah): ")
    };

    // Perbarui hanya data yang diberikan
    novel.title = updatedData.title || novel.title;
    novel.year = updatedData.year || novel.year;
    novel.author = updatedData.author || novel.author;
    novel.genre = updatedData.genre || novel.genre;
    novel.pages = updatedData.pages || novel.pages;
    novel.rating = updatedData.rating || novel.rating;
    novel.summary = updatedData.summary || novel.summary;

    writeDB(db);
    console.log("Novel berhasil diupdate!");
};

// Menghapus novel
const deleteNovel = () => {
    const deleteTitle = readline.question("Masukkan judul novel yang ingin dihapus: ");
    let db = readDB();
    let newNovels = db.novels.filter(n => n.title.toLowerCase() !== deleteTitle.toLowerCase());

    if (newNovels.length !== db.novels.length) {
        db.novels = newNovels;
        writeDB(db);
        console.log("Novel berhasil dihapus!");
    } else {
        console.log("Novel tidak ditemukan!");
    }
};

// Menampilkan novel dengan rating tertinggi
const bestRatedNovel = () => {
    let db = readDB();
    const bestNovel = db.novels.reduce((max, novel) => (novel.rating > max.rating ? novel : max), db.novels[0]);
    console.log("\n🌟 Novel dengan Rating Tertinggi:");
    console.log(`Judul: ${bestNovel.title}`);
    console.log(`Pengarang: ${bestNovel.author}`);
    console.log(`Rating: ${bestNovel.rating}`);
};

// Ekspor fungsi agar bisa digunakan di `app.js`
module.exports = {
    showNovels,
    addNovel,
    getNovel,
    updateNovel,
    deleteNovel,
    bestRatedNovel
};
