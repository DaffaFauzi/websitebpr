## Optimasi Menu Penerbit Bank & Asuransi

### Tujuan
- Loading terasa seamless (tanpa flicker/refresh)
- Menghindari layout shift saat loading
- Menambah caching lokal (stale-while-revalidate)
- Mempermudah skalabilitas data logo (kategori/entitas bertambah)

### Perubahan Teknis
- Indexing in-memory untuk data logo:
  - [logoCatalog.ts](file:///c:/Users/UseR/Documents/Projekan/BPR-COMPANY_ROFILE/app/data/logoCatalog.ts)
  - `getLogoById` dan `getLogosByCategory` kini memakai Map untuk akses O(1)
- Caching lokal (SWR):
  - [storageCache.ts](file:///c:/Users/UseR/Documents/Projekan/BPR-COMPANY_ROFILE/app/lib/storageCache.ts)
  - [useIssuerLogos.ts](file:///c:/Users/UseR/Documents/Projekan/BPR-COMPANY_ROFILE/app/hooks/useIssuerLogos.ts)
- UI Submenu + Skeleton:
  - [IssuerSubmenus.tsx](file:///c:/Users/UseR/Documents/Projekan/BPR-COMPANY_ROFILE/app/components/IssuerSubmenus.tsx)
  - Tab kategori + pagination ringan untuk membatasi beban render per view
  - Skeleton screen saat data belum tersedia
  - Transisi konten 300ms via class `.fade-in`
- Error handling:
  - [ErrorBoundary.tsx](file:///c:/Users/UseR/Documents/Projekan/BPR-COMPANY_ROFILE/app/components/ErrorBoundary.tsx)
- Monitoring sederhana (dev):
  - [PerformanceMetrics.tsx](file:///c:/Users/UseR/Documents/Projekan/BPR-COMPANY_ROFILE/app/components/PerformanceMetrics.tsx)
  - Menyimpan `FCP`/`LCP` terakhir ke localStorage `bpr_perf_last`

### Cara Verifikasi
- Buka `/issuer`, hover tab untuk prefetch, lalu klik tab lain:
  - Harus tampil instan (pakai cache) atau skeleton tanpa layout shift
  - Tidak ada flicker/refresh pada konten
- Cek `localStorage`:
  - `bpr_logo_cache_*` berisi cache per kategori
  - `bpr_perf_last` berisi metrics (di mode development)

