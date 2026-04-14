## Logo Placeholders

Berikut lokasi placeholder logo yang siap diisi PNG/SVG:

- /issuer (Bank and Insurance Issuer): setiap kartu logo memakai kelas `.logo-box`. Dua track per kategori berjalan horizontal (alternating).
- Hero orbit (beranda): 3 ikon kecil dapat diganti logo SVG/PNG. Tempatkan file di `public/images/` dan ganti elemen ikon menjadi `<Image src="/images/<nama>.svg" />`.
- Services cards (bila diperlukan): gunakan badge/kartu; untuk logo produk bisa tambah elemen di header kartu.

Dimensi responsif:
- `.logo-box`: 160×80 (mobile), 200×96 (>=640px)

Cara pengisian:
- Letakkan file logo di `public/images/` dan ganti isi teks placeholder pada `/issuer` menjadi elemen gambar sesuai logo.
