interface Produk {
    nama: string;
    harga: number;
}

function updateHarga(
    produk: Produk,
    hargaBaru: number
): Produk {
    return {
        ...produk,
        harga: hargaBaru
    };
}

const lama: Produk = {
    nama: "BT Tea",
    harga: 17500
};

const baru = updateHarga(lama, 18000);

console.log(baru);
