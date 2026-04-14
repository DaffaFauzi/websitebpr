## Sistem Manajemen Logo (Issuer)

### Struktur Data
Database logo ada di:
- [logoCatalog.ts](file:///c:/Users/UseR/Documents/Projekan/BPR-COMPANY_ROFILE/app/data/logoCatalog.ts)

Setiap entitas memiliki metadata:
- category: kategori logo (bank pemerintah/swasta/daerah, asuransi bumn/swasta)
- variants: default/horizontal/vertical
- updatedYear: tahun update logo
- copyrightOwner
- licenseStatus: unknown/verified
- officialSourceUrl (opsional)
- assetStatus: missing/available

### Struktur Folder & Naming Convention
Tempatkan file logo di `public/logos/` dengan pola:

`public/logos/<kategori>/<slug>/<slug>-<kategori>-<versi>-<ukuran>.<ext>`

Contoh:
- `public/logos/bank-pemerintah/bank-mandiri/bank-mandiri-bank-pemerintah-horizontal-256.webp`
- `public/logos/asuransi-swasta/jastan/jastan-asuransi-swasta-default-512.png`

Keterangan:
- kategori: `bank-pemerintah | bank-swasta | bank-daerah | asuransi-bumn | asuransi-swasta`
- versi: `default | horizontal | vertical`
- ukuran: `48 | 128 | 256 | 512`
- ext: `webp | png | svg`

Prioritas load:
1) webp → 2) png → 3) svg

### Komponen Rendering Logo + Fallback
Komponen logo:
- [EntityLogo.tsx](file:///c:/Users/UseR/Documents/Projekan/BPR-COMPANY_ROFILE/app/components/EntityLogo.tsx)

Fallback:
- Jika `assetStatus !== "available"` atau file gagal dimuat, tampil placeholder berbasis nama entitas.

### Cara Aktivasi Logo Asli
1) Upload logo ke folder sesuai struktur dan naming convention.
2) Di [logoCatalog.ts](file:///c:/Users/UseR/Documents/Projekan/BPR-COMPANY_ROFILE/app/data/logoCatalog.ts) set:
   - `assetStatus: "available"`
   - `licenseStatus: "verified"` (setelah verifikasi internal)
   - `officialSourceUrl` (opsional tapi disarankan)

### Validasi Hak Penggunaan (Checklist)
Status `licenseStatus` disediakan untuk proses internal. Praktik yang disarankan:
- Simpan bukti sumber resmi (URL/brand guideline)
- Pastikan izin penggunaan untuk publik (website) sudah sesuai ketentuan
- Catat tahun update/rebranding (updatedYear)
