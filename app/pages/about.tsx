"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Lightbulb, ShieldCheck, Star } from "lucide-react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import BrandLogo from "@/app/components/BrandLogo";
import { Card, CardContent } from "@/app/components/ui/card";
import { useI18n } from "@/app/i18n/I18nProvider";

const values = [
  {
    title: "Profesionalisme dan Integritas",
    desc: "Kami menjunjung tinggi nilai-nilai integritas dan profesionalisme dalam setiap aspek layanan kami. Nasabah dapat mempercayai bahwa bisnis mereka akan ditangani dengan penuh dedikasi dan kejujuran.",
    Icon: ShieldCheck,
  },
  {
    title: "Teknologi dan Inovasi",
    desc: "Kami terus mengadopsi inovasi dan teknologi terbaru dalam memberikan layanan. Hal ini memastikan bahwa kami selalu dapat memberikan solusi yang efisien dan responsif terhadap perkembangan bisnis dan kebutuhan nasabah.",
    Icon: Lightbulb,
  },
  {
    title: "Komitmen terhadap Kepuasan Pelanggan",
    desc: "Kami tidak hanya berkomitmen untuk memberikan layanan terbaik, tetapi juga untuk memastikan kepuasan pelanggan. Umpan balik dari pelanggan merupakan landasan utama dalam meningkatkan kualitas layanan kami secara berkelanjutan.",
    Icon: Star,
  },
];

export default function AboutPage() {
  const { locale, t } = useI18n();
  const [branchQuery, setBranchQuery] = useState("");
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
          title: "Head of Finance Division",
          name: "Cucuk Suratningsih",
        },
        engHead: {
          title: "Head of Engineering Division",
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
          title: "Kepala Divisi Keuangan",
          name: "Cucuk Suratningsih",
        },
        engHead: {
          title: "Kepala Divisi Teknik",
          name: "Lilik Amalia Putri",
        },
      };

  const branches = useMemo(
    () => [
      {name: "Cabang Aceh", addr: "Jl. Cut Nyan Dhien No. 464 Lamteuen Barat, Kec. Jaya Baru – Kota Banda Aceh", phone: "81167131313",},
      { name: "Cabang Jambi", addr: "Alifia Residence Blok E, 05 Kel. Kenali Asam atas Kec. Kota Baru, Kota Jambi", phone: "81320028085" },
      { name: "Cabang Lampung", addr: "Jl. Pulau singkep No. 126 Ruko E, kel. Sukarame Baru, Kec. SUkarame, Kota Bandar Lampung", phone: "85279627653" },
      { name: "Cabang Banjarmasin", addr: "Komplek Palace Blok A No. 4 Tanta Hulu kec. Tanta Kab. Tabalong Kalimantan Selatan", phone: "8115133397" },
      { name: "Cabang Bandung", addr: "Jl. H. sugandi no. 5 komp. Bumi manjahlega indah RT. 006 RW.013 kel. Manjahlega kec. Rancasari kota bandung1", phone: "85213599998" },
      { name: "Cabang Pontianak", addr: "Jl. Kesehatan Gg. Amanah No. 11 ( rumah ke 2 sebelah kiri )Rt.001 Rw.012 Kel. Kota baru Kec. Pontianak selatan kota pontianak.", phone: "85252529191" },
      { name: "Cabang Surabaya", addr: "JL. Krukah Tengah No. 73 Surabaya", phone: "81233774583" },
      { name: "Cabang Balikpapan", addr: "Ruko Sepinggan Pratama Blok SQ3 – 11 Jl. Sepinggan Pratama, Sepinggan, Kec. Balikpapan Selatan, Kota Balikpapan", phone: "85321819290" },
      { name: "Cabang Solo", addr: "JL. Ahmad Yani 40, Solo, Central Java The Sunan Hotel, Lobby Hotel Arcade I, 57143, Gilingan, Banjarsari, Surakarta City, Central Java 57134", phone: "81318253224" },
      { name: "Cabang Makassar", addr: "Komplek Zamrud 2 Blok J No. 14, Jalan Adyaksa Baru, Kel Masale, Kec. Panakkukang Kota Makassar", phone: "85299216789" },
      { name: "Cabang Palembang", addr: "Jl. Basuki Rahmat No. 1674 Rt. 025 Rw.006, Kel. Pahlawan Kec. Ilir Timur I Palembang – 30126", phone: "81373795859" },
      { name: "Cabang Kendari", addr: "Jl. Sao-Sao, Kelurahan Bende, Kecamatan Kadia, Kota Kendari, Provinsi Sulawesi Tenggara", phone: "82258674205" },
      { name: "Cabang Bali", addr: "Jl. Wani No1 Gerokgak Gede, Desa Delod Peken, Kec. Tabanan, Kab. Tabanan, Provinsi Bali", phone: "818135175" },
      { name: "Cabang Mataram", addr: "Jl. Airlangga No.11x, Gomong, Kec. Selaparang, Kota Mataram, Nusa Tenggara Barat", phone: "82341507928" },
      { name: "Cabang Batam", addr: "Komplek Bumi Riau Makmur Blok D No. 14, JL. Laksamana Bintan, Sungai Panas - Batam", phone: "82367081206" },
      { name: "Cabang Medan", addr: " Jl. Sei Serayu No.85, Babura Sunggal, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20121.", phone: "+62 361 0000 0015" },
      { name: "Cabang Palu", addr: "Komplek Zamrud 2 Blok J No. 14, Jalan Adyaksa Baru, Kel Masale, Kec. Panakkukang Kota Makassar.", phone: "+62 411 0000 0016" },
      { name: "Cabang Maluku", addr: "Jl. Kabenti Desa Labuha Kec. Bacan Kab. Halmahera Selatan, Maluku.", phone: "+62 61 0000 0017" },
      { name: "Cabang Papua", addr: "Jl. Akasia V blok D 176 Padang Bulan Jayapura.", phone: "+62 711 0000 0018" },
    ],
    []
  );

  const filteredBranches = useMemo(() => {
    const q = branchQuery.trim().toLowerCase();
    if (!q) return branches;
    return branches.filter((b) => `${b.name} ${b.addr} ${b.phone}`.toLowerCase().includes(q));
  }, [branchQuery, branches]);

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[var(--brand-soft)]">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-0 h-full w-[520px] rotate-[20deg] bg-[repeating-linear-gradient(135deg,rgba(139,29,29,0.16)_0_6px,transparent_6px_14px)] opacity-60" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-14 sm:px-6 sm:pt-28">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <div className="text-sm font-medium text-black/50">
                  {t("aboutPage.headerTitle")}
                </div>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  {t("aboutPage.headerTitle")}
                </h1>
              </div>
              <div className="text-sm text-black/60">
                <Link href="/" className="hover:text-black">
                  {t("common.home")}
                </Link>
                <span className="mx-2 text-black/30">›</span>
                <span className="text-[var(--brand-brown)]">
                  {t("aboutPage.headerBreadcrumb")}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="text-xs font-semibold text-[var(--brand-brown)]">
                  {t("aboutPage.aboutUs")}
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  BPR Bonding
                </h2>
                <div className="mt-6 space-y-5 text-sm leading-7 text-black/65">
                  <p>
                    Perkenalkan kami PT. Buana Perkasa Rajanegara atau yang lebih
                    dikenal dengan nama BPR Bonding adalah perusahaan yang fokus
                    pada bisnis di bidang Lembaga Penjaminan & Asuransi Umum,
                    yang berdiri berdasarkan legalitas perijinan Usaha Berbasis
                    Resiko pada tanggal 20 Oktober 2023, dimana perusahaan kami
                    dipercaya oleh Lembaga Penjaminan dan Asuransi untuk
                    memasarkan produk Bank Garansi, Surety Bond dan Asuransi
                    Umum.
                  </p>
                  <p>
                    BPR Bonding merupakan perusahaan yang profesional dengan
                    didukung oleh tenaga ahli yang memiliki pengalaman dan
                    sertifikasi di bidang Penjaminan dan Asuransi Umum.
                  </p>
                  <p>
                    BPR Bonding adalah Perusahaan yang dapat didefinisikan
                    secara umum memiliki peran sebagai penghubung atau perantara
                    bagi Perusahaan Penyedia Barang atau Jasa, Penerima Jaminan
                    dan Lembaga Penjaminan atau Asuransi.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-soft)] shadow-[0_22px_70px_-44px_rgba(0,0,0,0.35)]">
                <div className="relative bg-[radial-gradient(circle_at_30%_20%,rgba(139,29,29,0.16),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(11,11,11,0.10),transparent_60%)]">
                  <div className="aspect-[4/3] w-full">
                    <div className="flex h-full w-full items-center justify-center">
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
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="overflow-hidden rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-soft)] shadow-[0_22px_70px_-44px_rgba(0,0,0,0.35)]">
                <div className="relative bg-[radial-gradient(circle_at_30%_20%,rgba(11,11,11,0.12),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(139,29,29,0.12),transparent_60%)]">
                  <div className="aspect-[4/3] w-full">
                    <div className="flex h-full w-full items-center justify-center">
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

              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-none">
                  <CardContent className="p-7">
                    <div className="text-sm font-semibold tracking-tight text-black">
                      VISION
                    </div>
                    <div className="mt-3 text-sm leading-7 text-black/65">
                      Menjadi perusahaan agen yang terbaik dan terpercaya serta
                      berkontribusi dalam meningkatkan bisnis mitra.
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-none">
                  <CardContent className="p-7">
                    <div className="text-sm font-semibold tracking-tight text-black">
                      MISSION
                    </div>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-black/65">
                      <li>Komitmen untuk memberikan layanan terbaik bagi mitra.</li>
                      <li>
                        Konsisten meningkatkan kemampuan SDM dan infrastruktur.
                      </li>
                      <li>
                        Fokus menjaga kepercayaan dan memberi nilai tambah.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                {t("aboutPage.orgStructure")}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-black/60">
                Struktur organisasi BPR Bonding untuk mendukung layanan yang cepat dan profesional.
              </p>
            </div>

            <div className="mt-10 rounded-[36px] border border-[var(--brand-border)] bg-[var(--brand-soft)] p-6 sm:p-10">
              <div className="hidden md:block">
                <div className="relative flex justify-center">
                  <div className="absolute left-1/2 top-full mt-4 h-10 w-px -translate-x-1/2 bg-black/10" />
                  <div className="group relative overflow-hidden rounded-[28px] border border-[color-mix(in_oklab,var(--brand-brown),transparent_55%)] bg-[var(--brand-brown)] px-8 py-4 text-center text-white shadow-[0_22px_70px_-40px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:-translate-y-0.5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.20),transparent_55%)]" />
                    <div className="relative">
                      <div className="text-sm font-semibold">{org.director.title}</div>
                      <div className="mt-1 text-sm text-white/85">{org.director.name}</div>
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto mt-14 max-w-6xl">
                  <div className="absolute left-10 right-10 top-3 h-px bg-black/10" />
                  <div className="grid grid-cols-4 gap-6">
                    {[org.ops, org.engManager, org.financeHead, org.engHead].map((r) => (
                      <div key={r.title} className="flex justify-center">
                        <span className="h-2 w-2 rounded-full bg-[var(--brand-brown)]/35" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-6">
                  {[org.ops, org.engManager, org.financeHead, org.engHead].map((r) => (
                    <div
                      key={r.title}
                      className="group relative overflow-hidden rounded-[24px] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_8%)] px-6 py-7 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_80px_-44px_rgba(0,0,0,0.45)]"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--brand-brown),rgba(139,29,29,0.25),transparent)] opacity-70" />
                      <div className="text-center text-sm font-semibold tracking-tight text-black/85">
                        {r.title}
                      </div>
                      <div className="mt-2 text-center text-sm text-black/60">{r.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 md:hidden">
                <div className="relative overflow-hidden rounded-[28px] border border-[color-mix(in_oklab,var(--brand-brown),transparent_55%)] bg-[var(--brand-brown)] px-8 py-4 text-center text-white shadow-[0_22px_70px_-40px_rgba(0,0,0,0.55)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.20),transparent_55%)]" />
                  <div className="relative">
                    <div className="text-sm font-semibold">{org.director.title}</div>
                    <div className="mt-1 text-sm text-white/85">{org.director.name}</div>
                  </div>
                </div>
                <div className="grid gap-4">
                  {[org.ops, org.engManager, org.financeHead, org.engHead].map((r) => (
                    <div
                      key={r.title}
                      className="relative overflow-hidden rounded-[24px] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_8%)] px-6 py-6 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.25)]"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--brand-brown),rgba(139,29,29,0.25),transparent)] opacity-70" />
                      <div className="text-center text-sm font-semibold tracking-tight text-black/85">
                        {r.title}
                      </div>
                      <div className="mt-2 text-center text-sm text-black/60">{r.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                {t("aboutPage.companyValues")}
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {values.map(({ title, desc, Icon }) => (
                <Card
                  key={title}
                  className="border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-none"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-soft)] text-[var(--brand-brown)]">
                        <Icon className="h-6 w-6" />
                      </span>
                    </div>
                    <div className="mt-6 text-center text-sm font-semibold tracking-tight text-black">
                      {title}
                    </div>
                    <div className="mt-3 text-center text-sm leading-6 text-black/65">
                      {desc}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
            <div className="rounded-[40px] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-6 py-10 sm:px-10 sm:py-12">
              <div className="text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                  {t("aboutPage.branches")}
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-black/60">
                  {t("aboutPage.branchesDesc")}
                </p>
              </div>

              <div className="mx-auto mt-8 max-w-2xl">
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
                      onClick={() => setBranchQuery("")}
                      className="mt-3 inline-flex h-10 items-center justify-center rounded-full border border-[var(--brand-border)] bg-[var(--brand-soft)] px-4 text-sm font-semibold text-black/70 transition-colors hover:text-black"
                    >
                      {t("aboutPage.branchesClear")}
                    </button>
                  </div>
                ) : null}
              </div>

              <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredBranches.map((b) => (
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
