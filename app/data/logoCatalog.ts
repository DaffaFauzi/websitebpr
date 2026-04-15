export type LogoCategory =
  | "bank-pemerintah"
  | "bank-swasta"
  | "bank-daerah"
  | "asuransi-bumn"
  | "asuransi-swasta";

export type LogoVariant = "default" | "horizontal" | "vertical";

export type LogoAssetFormat = "webp" | "png" | "svg";

export type LogoMeta = {
  id: string;
  name: string;
  category: LogoCategory;
  variants: LogoVariant[];
  assetStatus: "missing" | "available";
  customSources?: string[];
  logoScale?: number;
  updatedYear: number;
  copyrightOwner: string;
  licenseStatus: "unknown" | "verified";
  officialSourceUrl?: string;
};

export const logoCategories: { key: LogoCategory; labelId: string; labelEn: string }[] = [
  { key: "bank-pemerintah", labelId: "Bank Pemerintah", labelEn: "Government Banks" },
  { key: "bank-swasta", labelId: "Bank Swasta", labelEn: "Private Banks" },
  { key: "bank-daerah", labelId: "Bank Daerah", labelEn: "Regional Development Banks" },
  { key: "asuransi-bumn", labelId: "Asuransi & Penjaminan BUMN", labelEn: "SOE Insurance & Surety" },
  { key: "asuransi-swasta", labelId: "Asuransi & Penjaminan Swasta", labelEn: "Private Insurance & Surety" },
];

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function buildLogoPath({
  slug,
  category,
  variant,
  size,
  format,
}: {
  slug: string;
  category: LogoCategory;
  variant: LogoVariant;
  size: 48 | 128 | 256 | 512;
  format: LogoAssetFormat;
}) {
  return `/logos/${category}/${slug}/${slug}-${category}-${variant}-${size}.${format}`;
}

export function getPreferredLogoSources(meta: LogoMeta, size: 48 | 128 | 256 | 512) {
  if (meta.customSources?.length) return meta.customSources;
  const slug = meta.id;
  const variant: LogoVariant = meta.variants.includes("horizontal") ? "horizontal" : "default";
  return [
    buildLogoPath({ slug, category: meta.category, variant, size, format: "webp" }),
    buildLogoPath({ slug, category: meta.category, variant, size, format: "png" }),
    buildLogoPath({ slug, category: meta.category, variant, size, format: "svg" }),
  ];
}

function make(
  name: string,
  category: LogoCategory,
  variants: LogoVariant[],
  opts?: Partial<Omit<LogoMeta, "id" | "name" | "category" | "variants">>
): LogoMeta {
  return {
    id: slugify(name),
    name,
    category,
    variants,
    assetStatus: opts?.assetStatus ?? "missing",
    customSources: opts?.customSources,
    logoScale: opts?.logoScale,
    updatedYear: opts?.updatedYear ?? 2026,
    copyrightOwner: opts?.copyrightOwner ?? name,
    licenseStatus: opts?.licenseStatus ?? "unknown",
    officialSourceUrl: opts?.officialSourceUrl,
  };
}

export const logos: LogoMeta[] = [
  make("Bank Mandiri", "bank-pemerintah", ["default", "horizontal"], {
    assetStatus: "available",
    customSources: ["/logos/mandiri.png"],
    logoScale: 0.94,
  }),
  make("BNI", "bank-pemerintah", ["default", "horizontal"], {
    assetStatus: "available",
    customSources: ["/logos/bni.png"],
    logoScale: 1,
  }),
  make("BTN", "bank-pemerintah", ["default", "horizontal"], {
    assetStatus: "available",
    customSources: ["/logos/btn.png"],
    logoScale: 1,
  }),
  make("BSI", "bank-pemerintah", ["default", "horizontal"], {
    assetStatus: "available",
    customSources: ["/logos/bsi.png"],
    logoScale: 0.9,
  }),
  make("Indonesia Eximbank", "bank-pemerintah", ["default", "horizontal"], {
    assetStatus: "available",
    customSources: ["/logos/eximbank.png"],
    logoScale: 0.95,
  }),
  make("BRI", "bank-pemerintah", ["default", "horizontal"], {
    assetStatus: "available",
    customSources: ["/logos/bri.png"],
    logoScale: 0.95,
  }),

  make("Panin Dubai Syariah Bank", "bank-swasta", ["horizontal", "vertical", "default"], {
    assetStatus: "available",
    customSources: ["/logos/panin%20dubai.png"],
    logoScale: 0.9,
  }),
  make("OCBC Bank", "bank-swasta", ["horizontal", "default"], {
    assetStatus: "available",
    customSources: ["/logos/ocbc.png"],
    logoScale: 0.95,
  }),
  make("BCA", "bank-swasta", ["horizontal", "default"], {
    assetStatus: "available",
    customSources: ["/logos/bca.png"],
    logoScale: 0.95,
  }),
  make("Danamon", "bank-swasta", ["horizontal", "default"], {
    assetStatus: "available",
    customSources: ["/logos/danamon.png"],
    logoScale: 0.95,
  }),
  make("Bank Mega", "bank-swasta", ["horizontal", "default"], {
    assetStatus: "available",
    customSources: ["/logos/bank%20mega.png"],
    logoScale: 0.95,
  }),
  make("KB Bukopin Syariah", "bank-swasta", ["horizontal", "default"], {
    assetStatus: "available",
    customSources: ["/logos/bokupon.png"],
    logoScale: 0.95,
  }),
  make("Maybank", "bank-swasta", ["horizontal", "default"], {
    assetStatus: "available",
    customSources: ["/logos/maybank.png"],
    logoScale: 0.95,
  }),

  make("Bank Jambi", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/jambi.png"],
    logoScale: 0.95,
  }),
  make("Bank Aceh", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/aceh.png"],
    logoScale: 0.95,
  }),
  make("Bank Lampung", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/lampung.png"],
    logoScale: 0.95,
  }),
  make("Bank Kalteng", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/kalteng.png"],
    logoScale: 0.95,
  }),
  make("Bankaltimtara", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/kaltimtara.png"],
    logoScale: 0.95,
  }),
  make("Bank NTB Syariah", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/ntb%20syariah.png"],
    logoScale: 0.95,
  }),
  make("Bank Sumselbabel", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/sumselbabel.png"],
    logoScale: 0.95,
  }),
  make("Bank DKI", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/dki.png"],
    logoScale: 0.95,
  }),
  make("Bank Bengkulu", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/bengkulu.png"],
    logoScale: 0.95,
  }),
  make("Bank BPD DIY", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/bpd%20diy.png"],
    logoScale: 0.95,
  }),
  make("Bank Kalbar", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/kalbar.png"],
    logoScale: 0.95,
  }),
  make("Bank Kalsel", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/kalsel.png"],
    logoScale: 0.95,
  }),
  make("Bank Nagari", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/nagari.png"],
    logoScale: 0.95,
  }),
  make("Bank NTT", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/ntt.png"],
    logoScale: 0.95,
  }),
  make("Bank Papua", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/papua.png"],
    logoScale: 0.95,
  }),
  make("Bank Sulsebar", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/sulsebar.png"],
    logoScale: 0.95,
  }),
  make("Bank Sulteng", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/sulteng.png"],
    logoScale: 0.95,
  }),
  make("Bank Sultra", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/sultra.png"],
    logoScale: 0.95,
  }),
  make("Bank Sumut", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/sumut.png"],
    logoScale: 0.95,
  }),
  make("Bank BJB", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/bjb.png"],
    logoScale: 0.95,
  }),
  make("Bank Jateng", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/jateng.png"],
    logoScale: 0.95,
  }),
  make("Bank Banten", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/banten.png"],
    logoScale: 0.95,
  }),
  make("Bank BPD Bali", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/bali.png"],
    logoScale: 0.95,
  }),
  make("BRK Syariah", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/brksyariah.png"],
    logoScale: 0.95,
  }),
  make("Bank MalukuMalut", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/maluku.png"],
    logoScale: 0.95,
  }),
  make("Bank Jatim", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/jatim.png"],
    logoScale: 0.95,
  }),
  make("Bank Riau Kepri", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/riau.png"],
    logoScale: 0.95,
  }),
  make("Bank SulutGo", "bank-daerah", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/sulutgo.png"],
    logoScale: 0.95,
  }),
  make("Bank Jatim Syariah", "bank-daerah", ["default"]),
  make("Bank Sulselbar Syariah", "bank-daerah", ["default"]),
  make("Bank DKI Syariah", "bank-daerah", ["default"]),

  make("Jamsyar", "asuransi-bumn", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/jamsyar.png"],
    logoScale: 0.95,
  }),
  make("PLN Insurance", "asuransi-bumn", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/pln.png"],
    logoScale: 0.9,
  }),
  make("Binagriya", "asuransi-bumn", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/binagria.png"],
    logoScale: 0.95,
  }),
  make("Asuransi Jasindo", "asuransi-bumn", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/jasindosyariah.png"],
    logoScale: 0.9,
  }),
  make("Jasa Raharja Insurance", "asuransi-bumn", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/jasaraharja.png"],
    logoScale: 0.9,
  }),
  make("Tripa", "asuransi-bumn", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/tripa.png"],
    logoScale: 0.95,
  }),
  make("Jamkrindo", "asuransi-bumn", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/jamkrindo.png"],
    logoScale: 0.95,
  }),
  make("Askrindo Syariah", "asuransi-bumn", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/askrindosyariah.png"],
    logoScale: 0.9,
  }),
  make("Insurance Tugu", "asuransi-bumn", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/tugu.png"],
    logoScale: 0.95,
  }),
  make("Askrindo Insurance", "asuransi-bumn", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/askrindo.png"],
    logoScale: 0.9,
  }),
  make("BRINS BRI Insurance", "asuransi-bumn", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/brins.png"],
    logoScale: 0.9,
  }),

  make("Asuransi Ramayana", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/ramayana.png"],
    logoScale: 0.95,
  }),
  make("Asuransi Sinarmas", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/sinarmas.png"],
    logoScale: 0.95,
  }),
  make("Asuransi Staco Mandiri", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/stacomandiri.png"],
    logoScale: 0.95,
  }),
  make("Bumida", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/bumida.png"],
    logoScale: 0.95,
  }),
  make("Aswata", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/awasta.png"],
    logoScale: 0.95,
  }),
  make("Bosowa", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/bosowa.png"],
    logoScale: 0.95,
  }),
  make("Videi General Insurance", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/videi.png"],
    logoScale: 0.95,
  }),
  make("AGTagraha General Insurance", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/arthagraha.png"],
    logoScale: 0.95,
  }),
  make("PT Asuransi Bhakti Bayangkara", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/bhakti.png"],
    logoScale: 0.95,
  }),
  make("ACA Asuransi", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/aca.png"],
    logoScale: 0.95,
  }),
  make("Intra Asia", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/intra.png"],
    logoScale: 0.95,
  }),
  make("Jastan", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/jastan.png"],
    logoScale: 1,
  }),
  make("Mega Pratama", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/megapratama.png"],
    logoScale: 0.95,
  }),
  make("Asuransi Rama", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/rama.png"],
    logoScale: 0.95,
  }),
  make("ASEI", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/asei.png"],
    logoScale: 0.95,
  }),
  make("ASKRIDA", "asuransi-swasta", ["default"], {
    assetStatus: "available",
    customSources: ["/logos/askrida.png"],
    logoScale: 0.95,
  }),
];

const logosById = new Map<string, LogoMeta>(logos.map((x) => [x.id, x]));
const logosByCategory = (() => {
  const map = new Map<LogoCategory, LogoMeta[]>();
  for (const x of logos) {
    const arr = map.get(x.category);
    if (arr) arr.push(x);
    else map.set(x.category, [x]);
  }
  return map;
})();

export function getLogosByCategory(category: LogoCategory) {
  return logosByCategory.get(category) ?? [];
}

export function getLogoById(id: string) {
  return logosById.get(id);
}
