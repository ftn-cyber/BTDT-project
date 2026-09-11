# BTDT

**BTDT — Bahasa Pemrograman untuk Sistem Database Kasir**

BTDT adalah bahasa pemrograman dan ekosistem yang dirancang khusus untuk
memudahkan pengelolaan database kasir pada toko dan supermarket.

BTDT berfokus pada:

- Pengiriman data produk
- Penyimpanan data
- Pembaruan harga
- Penyaluran database
- Autentikasi menggunakan token
- Penerimaan data pada sistem kasir

---

## Komponen BTDT

BTDT terdiri dari beberapa komponen utama.

### 1. BTTC

**BTTC — Basic Text Tag Code**

BTTC merupakan bahasa pemrograman utama dalam ekosistem BTDT.

Extension:

```text
.BTTC
BTTC digunakan untuk:
Mengirim data
Memperbarui data
Menerima data
Mengontrol alur database
Contoh:
@tag

Data/seterah

nama produk: BT Tea
harga produk: RP.17.500,00

Import data
    Request to database.DTTC

@end
2. DTTC
DTTC — Database Tag Text Code
DTTC merupakan format database/data yang digunakan oleh BTDT.
Extension:
.DTTC
Contoh:
@database

rev-import to profTurk

profTurk-save
    untuk menyimpan data atau backup

profTurk-request
    end to pembaruan.BTTC

@end
3. Pembaruan BTTC
File pembaruan digunakan untuk menentukan apakah data baru akan diterapkan pada database.
Contoh:
@update

Rev-stect update data-button=ya
Rev-stect update data-button=no

Ya = import new data

No = skip lets to BTMYdatabase
     on penyaluran data/

@end
Alur:
Data lama
   |
   v
Pembaruan.BTTC
   |
   +---- YA ----> Import data baru
   |
   +---- NO ----> Lewati pembaruan
   |
   v
BTMYdatabase
4. BTMYdatabase
BTMYdatabase merupakan database/penyaluran data pada ekosistem BTDT.
BTMYdatabase bertugas menyalurkan request dan data dari server menuju sistem penerima.
Contoh konsep:
BTMYdatabase

@post

Import-get request

RRekpost-to-token PROsfery

@end
5. token.PROsfery
token.PROsfery digunakan sebagai mekanisme autentikasi untuk permintaan data.
Contoh:
@token

GET request

Token = "21_DIGIT_TOKEN"

@end
Token harus memiliki panjang 21 digit berdasarkan spesifikasi sementara BTDT.
Jangan menyimpan token produksi di repository publik.
Gunakan file contoh:
token.PROsfery.example
dan simpan token sebenarnya pada konfigurasi lokal/server.
6. Penerima.BTTC
Penerima.BTTC digunakan oleh sistem kasir untuk menerima data.
Contoh:
@start

Ref scan = token yang sama

Dork scan =
username host

contoh:
presey.caserBTTC

@end
Penerima akan melakukan:
Scan Token
     |
     v
Verifikasi
     |
     v
Scan Username/Host
     |
     v
Request Database
     |
     v
Terima Data
Cassers Fold
Cassers Fold merupakan aplikasi/software kasir yang dirancang untuk menggunakan sistem BTDT.
Pada saat aplikasi pertama kali dibuka, sistem dapat meminta CODE untuk menghubungkan aplikasi dengan server BTDT.
Konsep:
Cassers Fold
     |
     v
Masukkan CODE
     |
     v
Penerima.BTTC
     |
     v
Token.PROsfery
     |
     v
BTMYdatabase
     |
     v
Data Produk
Struktur Project
Struktur dasar BTDT:
BTDT project/
│
├── system pengirim/
│   └── pengirim.BTTC
│
├── database/
│   └── database.DTTC
│
├── pembaruan data/
│   └── pembaruan.BTTC
│
├── penyaluran data/
│   └── BTMYdatabase/
│       └── token.PROsfery
│
└── Hasil/
    └── kasir/
        └── Penerima.BTTC
Arsitektur
                 BTDT SERVER
                     |
                     v
              Pengirim.BTTC
                     |
                     v
               database.DTTC
                     |
                     v
              Pembaruan.BTTC
                     |
                     v
                BTMYdatabase
                     |
                     v
               token.PROsfery
                     |
                     v
              Penerima.BTTC
                     |
                     v
                Cassers Fold
                     |
                     v
                SISTEM KASIR
Contoh Data
Contoh produk:
Nama Produk : BT Tea
Harga       : RP.17.500,00
Data tersebut dapat dikirim melalui:
Pengirim.BTTC
disimpan pada:
database.DTTC
kemudian diperbarui melalui:
pembaruan.BTTC
dan disalurkan melalui:
BTMYdatabase
kepada:
Penerima.BTTC
untuk digunakan oleh:
Cassers Fold
Status Project
BTDT saat ini berada dalam tahap:
EXPERIMENTAL / DEVELOPMENT
Sintaks, API, struktur database, protokol penyaluran, dan runtime masih dapat berubah.
