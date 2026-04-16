"use client";

import { useMemo, useState } from "react";
import { Award, Building2, CheckCircle2, Lightbulb, ShieldCheck, Star, Users } from "lucide-react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import BrandLogo from "@/app/components/BrandLogo";
import { PageHero } from "@/app/components/ui/page-hero";
import { Container, Section } from "@/app/components/ui/section";
import Gallery from "@/app/components/Gallery";
import { useI18n } from "@/app/i18n/I18nProvider";

const values = [
  {
    title: "Integritas dan Kepercayaan",
    desc: "Kami menjunjung tinggi nilai-nilai integritas dan profesionalisme dalam setiap aspek layanan kami. Nasabah dapat mempercayai bahwa bisnis mereka akan ditangani dengan penuh dedikasi dan kejujuran.",
    Icon: ShieldCheck,
  },
  {
    title: "Keunggulan Operasional",
    desc: "Kami terus mengadopsi inovasi dan teknologi terbaru dalam memberikan layanan. Hal ini memastikan bahwa kami selalu dapat memberikan solusi yang efisien dan responsif terhadap perkembangan bisnis dan kebutuhan nasabah.",
    Icon: Lightbulb,
  },
  {
    title: "Kemitraan Strategis",
    desc: "Kami tidak hanya berkomitmen untuk memberikan layanan terbaik, tetapi juga untuk memastikan kepuasan pelanggan. Umpan balik dari pelanggan merupakan landasan utama dalam meningkatkan kualitas layanan kami secara berkelanjutan.",
    Icon: Star,
  },
];

export default function AboutPage() {
  const { locale, t } = useI18n();
  const [branchQuery, setBranchQuery] = useState("");
  const [showAboutMore, setShowAboutMore] = useState(false);
  const [showAllBranches, setShowAllBranches] = useState(false);
  const org = locale === "en"
    ? {
        director: {
          title: "Director",
          name: "Crishnia Nurbaiti",
        },
        ops: {
          title: "Operations Manager",
          name: "Herlambang Sangsoko",
        },
        engManager: {
          title: "Engineering Manager",
          name: "Mesaliani Negara",
        },
        financeHead: {
          title: "Finance Supervisor",
          name: "Cucuk Suratningsih",
        },
        engHead: {
          title: "Technical Supervisor",
          name: "Lilik Amaliya Putri",
        },
      }
    : {
        director: {
          title: "Direktur",
          name: "Crishnia Nurbaiti",
        },
        ops: {
          title: "Manager Operasional",
          name: "Herlambang Sangsoko",
        },
        engManager: {
          title: "Manager Teknik",
          name: "Mesaliani Negara",
        },
        financeHead: {
          title: "SPV Keuangan",
          name: "Cucuk Suratningsih",
        },
        engHead: {
          title: "SPV Teknik",
          name: "Lilik Amalia Putri",
        },
      };

  const branches = useMemo(
    () => [
      {name: "Cabang Aceh", addr: "Jl. Cut Nyan Dhien No. 464 Lamteuen Barat, Kec. Jaya Baru – Kota Banda Aceh", phone: "+62 81167131313",},
      { name: "Cabang Jambi", addr: "Alifia Residence Blok E, 05 Kel. Kenali Asam atas Kec. Kota Baru, Kota Jambi", phone: "+62 81320028085" },
      { name: "Cabang Lampung", addr: "Jl. Pulau singkep No. 126 Ruko E, kel. Sukarame Baru, Kec. SUkarame, Kota Bandar Lampung", phone: "+62 85279627653" },
      { name: "Cabang Banjarmasin", addr: "Komplek Palace Blok A No. 4 Tanta Hulu kec. Tanta Kab. Tabalong Kalimantan Selatan", phone: "+62 8115133397" },
      { name: "Cabang Bandung", addr: "Jl. H. sugandi no. 5 komp. Bumi manjahlega indah RT. 006 RW.013 kel. Manjahlega kec. Rancasari kota bandung1", phone: "+62 85213599998" },
      { name: "Cabang Pontianak", addr: "Jl. Kesehatan Gg. Amanah No. 11 ( rumah ke 2 sebelah kiri )Rt.001 Rw.012 Kel. Kota baru Kec. Pontianak selatan kota pontianak.", phone: "+62 85252529191" },
      { name: "Cabang Surabaya", addr: "JL. Krukah Tengah No. 73 Surabaya", phone: "+62 81233774583" },
      { name: "Cabang Balikpapan", addr: "Ruko Sepinggan Pratama Blok SQ3 – 11 Jl. Sepinggan Pratama, Sepinggan, Kec. Balikpapan Selatan, Kota Balikpapan", phone: "+62 85321819290" },
      { name: "Cabang Solo", addr: "JL. Ahmad Yani 40, Solo, Central Java The Sunan Hotel, Lobby Hotel Arcade I, 57143, Gilingan, Banjarsari, Surakarta City, Central Java 57134", phone: "+62 81318253224" },
      { name: "Cabang Makassar", addr: "Komplek Zamrud 2 Blok J No. 14, Jalan Adyaksa Baru, Kel Masale, Kec. Panakkukang Kota Makassar", phone: "+62 85299216789" },
      { name: "Cabang Palembang", addr: "Jl. Basuki Rahmat No. 1674 Rt. 025 Rw.006, Kel. Pahlawan Kec. Ilir Timur I Palembang – 30126", phone: "+62 81373795859" },
      { name: "Cabang Kendari", addr: "Jl. Sao-Sao, Kelurahan Bende, Kecamatan Kadia, Kota Kendari, Provinsi Sulawesi Tenggara", phone: "+62 82258674205" },
      { name: "Cabang Bali", addr: "Jl. Wani No1 Gerokgak Gede, Desa Delod Peken, Kec. Tabanan, Kab. Tabanan, Provinsi Bali", phone: "+62 818135175" },
      { name: "Cabang Mataram", addr: "Jl. Airlangga No.11x, Gomong, Kec. Selaparang, Kota Mataram, Nusa Tenggara Barat", phone: "+62 82341507928" },
      { name: "Cabang Batam", addr: "Komplek Bumi Riau Makmur Blok D No. 14, JL. Laksamana Bintan, Sungai Panas - Batam", phone: "+62 82367081206" },
      { name: "Cabang Medan", addr: " Jl. Sei Serayu No.85, Babura Sunggal, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20121.", phone: "+62 361 0000 0015" },
      { name: "Cabang Palu", addr: "Komplek Zamrud 2 Blok J No. 14, Jalan Adyaksa Baru, Kel Masale, Kec. Panakkukang Kota Makassar.", phone: "+62 411 0000 0016" },
      { name: "Cabang Maluku", addr: "Jl. Kabenti Desa Labuha Kec. Bacan Kab. Halmahera Selatan, Maluku.", phone: "+62 61 0000 0017" },
      { name: "Cabang Papua", addr: "Jl. Akasia V blok D 176 Padang Bulan Jayapura.", phone: "+62 711 0000 0018" },
    ],
    []
  );
  const branchCount = '10+';
  // const branchCount = branches.length;

  const filteredBranches = useMemo(() => {
    const q = branchQuery.trim().toLowerCase();
    if (!q) return branches;
    return branches.filter((b) => `${b.name} ${b.addr} ${b.phone}`.toLowerCase().includes(q));
  }, [branchQuery, branches]);

  const visibleBranches = useMemo(() => {
    if (branchQuery.trim()) return filteredBranches;
    return showAllBranches ? filteredBranches : filteredBranches.slice(0, 8);
  }, [branchQuery, filteredBranches, showAllBranches]);

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <PageHero
          breadcrumbLabel={t("common.about")}
          title={locale === "en" ? "About Us" : "Tentang Kami"}
          description={
            locale === "en"
              ? "Providing trusted, professional guarantee solutions focused on your business needs."
              : "Menyediakan solusi penjaminan profesional yang terpercaya dan berorientasi pada kebutuhan bisnis Anda"
          }
        />

        <Section>
          <Container>
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  {locale === "en"
                    ? "Professional and Trusted Guarantee Partner"
                    : "Mitra Penjaminan Profesional dan Terpercaya"}
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-7 text-black/65">
                  <p>
                    PT. Buana Perkasa Rajanegara (BPR Bonding) adalah perusahaan yang fokus di bidang
                    Penjaminan dan Asuransi Umum, dipercaya untuk memasarkan produk Bank Garansi,
                    Surety Bond, Custom Bond, dan Asuransi Umum.
                  </p>
                  {showAboutMore ? (
                    <>
                      <p>
                        Berdiri sejak 20 Oktober 2023, kami didukung tenaga ahli berpengalaman dan tersertifikasi.
                      </p>
                      <p>
                        Peran kami adalah sebagai penghubung antara penyedia barang/jasa, penerima jaminan,
                        serta lembaga penjaminan atau asuransi untuk memastikan proses berjalan rapi dan tepat.
                      </p>
                    </>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setShowAboutMore((v) => !v)}
                    className="inline-flex h-10 items-center rounded-[var(--radius-pill)] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-4 text-sm font-semibold text-black/70 transition-colors hover:text-black"
                  >
                    {showAboutMore ? "Tutup" : "Lihat selengkapnya"}
                  </button>
                </div>

                <ul className="mt-6 grid gap-3 text-sm text-black/70 sm:grid-cols-2">
                  {[
                    "Validasi risiko lebih akurat",
                    "Jaringan luas di seluruh Indonesia",
                    "Dukungan tim profesional",
                    "Proses yang efisien",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[var(--brand-brown)]" />
                      <span className="leading-6">{x}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    { Icon: Users, value: "10000+", label: locale === "en" ? "Clients" : "Klien" },
                    {
                      Icon: Building2,
                      value: `${branchCount}`,
                      label: locale === "en" ? "Branches" : "Cabang di seluruh Indonesia",
                    },
                    { Icon: Award, value: "98%", label: locale === "en" ? "Success Rate" : "Tingkat Keberhasilan" },
                  ].map(({ Icon, value, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 py-4 shadow-[var(--shadow-soft)]"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--brand-border)] bg-[var(--brand-soft)] text-[var(--brand-brown)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-base font-semibold tracking-tight text-black">{value}</div>
                        <div className="text-xs font-medium text-black/60">{label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-soft)] shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[4/3] w-full bg-[radial-gradient(circle_at_30%_20%,rgba(139,29,29,0.16),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(11,11,11,0.10),transparent_60%)]">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.30),transparent_42%,rgba(255,255,255,0.18))] opacity-60" />
                  <div className="relative flex h-full w-full items-center justify-center">
                    <BrandLogo
                      kind="full"
                      height={64}
                      width={240}
                      className="drop-shadow-[0_24px_90px_rgba(0,0,0,0.22)]"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-7 py-8 shadow-[var(--shadow-soft)]">
                <div className="text-sm font-semibold tracking-tight text-black">
                  Menjadi perusahaan agen yang terbaik dan terpercaya serta berkontribusi dalam meningkatkan bisnis mitra
                </div>
              </div>

              <div className="rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-7 py-8 shadow-[var(--shadow-soft)]">
                <div className="text-sm font-semibold tracking-tight text-black">
                  Komitmen untuk Memberikan yang Terbaik
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-black/65">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--brand-brown)]" />
                    <span>Komitmen untuk memberikan layanan terbaik bagi mitra.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--brand-brown)]" />
                    <span>Konsisten meningkatkan kemampuan SDM dan infrastruktur.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--brand-brown)]" />
                    <span>Fokus menjaga kepercayaan dan memberi nilai tambah.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="pb-6 lg:pb-8" spacing="none">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                {t("aboutPage.orgStructure")}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-black/60">
                Struktur organisasi BPR Bonding untuk mendukung layanan yang cepat dan profesional.
              </p>
            </div>

            <div className="mt-8 rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-soft)] p-6 shadow-[var(--shadow-soft)] sm:p-10">
              <div className="mx-auto max-w-5xl">
                <div className="flex justify-center">
                  <div className="group relative flex w-full max-w-sm flex-col items-center overflow-hidden rounded-[22px] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_6%)] p-6 text-center shadow-[0_18px_50px_-34px_rgba(0,0,0,0.30)]">
                    <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--brand-brown),rgba(139,29,29,0.18),transparent)] opacity-70" />
                    <div className="text-sm font-semibold text-black/85">{org.director.title}</div>
                    <div className="mt-1 text-sm text-black/60">{org.director.name}</div>
                  </div>
                </div>

                <div className="relative mx-auto mt-6 max-w-4xl">
                  <div className="mx-auto h-8 w-px bg-black/10" />
                  <div className="hidden h-px w-full bg-black/10 sm:block" />
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[org.ops, org.engManager, org.financeHead, org.engHead].map((r) => (
                    <div
                      key={r.title}
                      className="group relative flex flex-col items-center overflow-hidden rounded-[22px] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_6%)] p-6 text-center shadow-[0_18px_50px_-34px_rgba(0,0,0,0.30)]"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--brand-brown),rgba(139,29,29,0.18),transparent)] opacity-70" />
                      <div className="text-sm font-semibold tracking-tight text-black/85">{r.title}</div>
                      <div className="mt-2 text-sm text-black/60">{r.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="pb-6 lg:pb-8" spacing="none">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                {t("aboutPage.companyValues")}
              </h2>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {values.map(({ title, desc, Icon }) => (
                <div
                  key={title}
                  className="rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-8 py-8 shadow-[var(--shadow-soft)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--brand-border)] bg-[var(--brand-soft)] text-[var(--brand-brown)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="text-sm font-semibold tracking-tight text-black">{title}</div>
                  </div>
                  <div className="mt-4 text-sm leading-7 text-black/65">{desc}</div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="pb-6 lg:pb-8" spacing="none">
            <div className="rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-6 py-6 shadow-[var(--shadow-soft)] sm:px-10 lg:py-8">
              <div className="mx-auto max-w-2xl">
                <input
                  value={branchQuery}
                  onChange={(e) => setBranchQuery(e.target.value)}
                  aria-label={t("aboutPage.branchesSearch")}
                  placeholder={t("aboutPage.branchesSearch")}
                  className="h-12 w-full rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-5 text-sm text-black/80 outline-none placeholder:text-black/40 focus:border-[color-mix(in_oklab,var(--brand-brown),transparent_65%)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--brand-brown),transparent_80%)]"
                />

                {branchQuery.trim() && filteredBranches.length === 0 ? (
                  <div className="mt-4 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] px-5 py-4 text-sm">
                    <div className="font-semibold text-black/85">
                      {t("aboutPage.branchesNotFoundTitle")}
                    </div>
                    <div className="mt-1 text-black/60">
                      {t("aboutPage.branchesNotFoundHint")}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setBranchQuery("");
                        setShowAllBranches(false);
                      }}
                      className="mt-3 inline-flex h-10 items-center justify-center rounded-full border border-[var(--brand-border)] bg-[var(--brand-soft)] px-4 text-sm font-semibold text-black/70 transition-colors hover:text-black"
                    >
                      {t("aboutPage.branchesClear")}
                    </button>
                  </div>
                ) : null}
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                  {t("aboutPage.branches")}
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-black/60">
                  {t("aboutPage.branchesDesc")}
                </p>
              </div>

              <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleBranches.map((b) => (
                  <div
                    key={b.name}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_6%)] p-6 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_80px_-44px_rgba(0,0,0,0.45)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--brand-brown),rgba(139,29,29,0.18),transparent)] opacity-70" />
                    <div className="text-sm font-semibold tracking-tight text-black/90">
                      {b.name}
                    </div>
                    <div className="mt-2 flex-1 text-sm leading-6 text-black/65">{b.addr}</div>
                    <div className="mt-auto pt-4">
                      <div className="inline-flex items-center rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 py-2 text-sm font-medium text-black/70">
                        {b.phone}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {!branchQuery.trim() && filteredBranches.length > 8 ? (
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAllBranches((v) => !v)}
                    className="inline-flex h-11 items-center rounded-[var(--radius-pill)] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-6 text-sm font-semibold text-black/75 transition-colors hover:text-black"
                  >
                    {showAllBranches ? "Tampilkan lebih sedikit" : "Lihat selengkapnya"}
                  </button>
                </div>
              ) : null}
            </div>
          </Container>
        </Section>

        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
