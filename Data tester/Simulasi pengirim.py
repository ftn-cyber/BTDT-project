def kirim_data(nama, harga):
    data = {
        "nama_produk": nama,
        "harga_produk": harga
    }

    print("Mengirim data...")
    print(data)

kirim_data("BT Tea", 17500)
