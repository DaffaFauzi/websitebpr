## Performance Report (Template)

### Scope
Halaman: `/issuer` (menu Penerbit Bank & Asuransi)

### Metode
Gunakan:
- Chrome DevTools → Performance / Lighthouse
- Data lokal dari `localStorage` key `bpr_perf_last` (FCP/LCP) pada mode development

### Before
- FCP:
- LCP:
- Catatan visual (flicker/layout shift):

### After
- FCP:
- LCP:
- Catatan visual (flicker/layout shift):

### Checklist UX
- [ ] Skeleton muncul saat belum ada cache
- [ ] Tidak ada layout shift saat loading
- [ ] Hover tab melakukan prefetch (klik tab terasa instan)
- [ ] Error state menampilkan fallback + tombol retry

