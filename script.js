// ============================================================
// A. Mode Gelap dengan classList.toggle
// ============================================================
const btnTema = document.getElementById("btnTema");
btnTema.addEventListener("click", function () {
    document.body.classList.toggle("gelap");
    const gelap = document.body.classList.contains("gelap");
    btnTema.textContent = gelap ? "Mode Terang" : "Mode Gelap";
});

// ============================================================
// B. Penghitung Klik
// ============================================================
let hitung = 0;
const tampil = document.getElementById("angka");

function perbarui() {
    tampil.textContent = hitung;
    if (hitung < 0) {
        tampil.classList.add("negatif");
    } else {
        tampil.classList.remove("negatif");
    }
}

document.getElementById("tambah").addEventListener("click", () => {
    hitung++;
    perbarui();
});

document.getElementById("kurang").addEventListener("click", () => {
    hitung--;
    perbarui();
});

document.getElementById("reset").addEventListener("click", () => {
    hitung = 0;
    perbarui();
});

// ============================================================
// C. Ganti Warna dengan querySelectorAll dan Atribut data-*
// ============================================================
const kotak = document.getElementById("kotak");

document.querySelectorAll(".warna").forEach(function (tombol) {
    tombol.addEventListener("click", function () {
        kotak.style.backgroundColor = tombol.dataset.warna;
    });
});

// ============================================================
// Pertanyaan Analisis No. 3:
// Tambahkan event dblclick pada kotak agar warnanya kembali abu-abu
// ============================================================
kotak.addEventListener("dblclick", function () {
    kotak.style.backgroundColor = "#94a3b8";
});
