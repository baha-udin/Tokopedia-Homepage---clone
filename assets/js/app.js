function on() {
    let keranjangBelanja = document.getElementById("keranjangBelanja")
    let overlay = document.getElementById("overlay")

    keranjangBelanja.classList.toggle("StyleKeranjangBelanja")
    overlay.classList.toggle("styleOverlay")
}

function buttonKategori() {
    let kategori = document.getElementById("ambilKategori")
    let overlay = document.getElementById("overlay")

    kategori.classList.toggle("klik-category")
    overlay.classList.toggle("styleOverlay")
}