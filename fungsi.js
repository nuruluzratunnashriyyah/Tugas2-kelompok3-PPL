const fs = require("fs");

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
const addNovel = (novel) => {
    let db = readDB();
    db.novels.push(novel);
    writeDB(db);
};

// Melihat detail satu novel
const getNovel = (title) => {
    let db = readDB();
    return db.novels.find(n => n.title.toLowerCase() === title.toLowerCase());
};

// Mengupdate novel
const updateNovel = (title, updatedData) => {
    let db = readDB();
    let novel = db.novels.find(n => n.title.toLowerCase() === title.toLowerCase());

    if (!novel) {
        return false;
    }

    // Perbarui hanya data yang diberikan
    novel.title = updatedData.title || novel.title;
    novel.year = updatedData.year || novel.year;
    novel.author = updatedData.author || novel.author;
    novel.genre = updatedData.genre || novel.genre;
    novel.pages = updatedData.pages || novel.pages;
    novel.rating = updatedData.rating || novel.rating;
    novel.summary = updatedData.summary || novel.summary;

    writeDB(db);
    return true;
};

// Menghapus novel
const deleteNovel = (title) => {
    let db = readDB();
    let newNovels = db.novels.filter(n => n.title.toLowerCase() !== title.toLowerCase());

    if (newNovels.length !== db.novels.length) {
        db.novels = newNovels;
        writeDB(db);
        return true;
    }
    return false;
};

// Menampilkan novel dengan rating tertinggi
const bestRatedNovel = () => {
    let db = readDB();
    return db.novels.reduce((max, novel) => (novel.rating > max.rating ? novel : max), db.novels[0]);
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
