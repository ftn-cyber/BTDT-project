interface Produk {
    kode: string;
    nama: string;
    harga: number;
}

const produk: Produk = {
    kode: "001",
    nama: "BT Tea",
    harga: 17500
};

console.log("Produk:", produk.nama);
console.log("Harga: Rp" + produk.harga.toLocaleString("id-ID"));
