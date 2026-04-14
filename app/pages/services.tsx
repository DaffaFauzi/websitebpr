"use client";

import Link from "next/link";
import Image from "next/image";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useI18n } from "@/app/i18n/I18nProvider";

const services = [
  {
    title: "Bank Garansi",
    desc: "Bank Garansi adalah produk tepercaya yang menawarkan jaminan dan keamanan finansial, memberikan ketenangan dan perlindungan untuk transaksi keuangan.",
    items: [
      "Jaminan Penawaran",
      "Jaminan Pelaksanaan",
      "Jaminan Uang Muka",
      "Jaminan Pemeliharaan",
      "BG Akhir Tahun",
    ],
    iconSrc: "/icons/bank-garansi.svg",
    imageTheme:
      "bg-[radial-gradient(circle_at_30%_20%,rgba(139,29,29,0.16),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(11,11,11,0.10),transparent_60%)]",
  },
  {
    title: "Surety Bond",
    desc: "Surety Bond adalah jaminan keuangan yang dapat diandalkan dan aman yang menjamin kinerja dan penyelesaian kontrak atau kewajiban.",
    items: [
      "Jaminan Pemeliharaan",
      "Jaminan Pembayaran",
      "Jaminan Penawaran",
      "Jaminan Pelaksanaan",
      "Jaminan Uang Muka",
    ],
    iconSrc: "/icons/surety-bond.svg",
    imageTheme:
      "bg-[radial-gradient(circle_at_30%_20%,rgba(11,11,11,0.12),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(139,29,29,0.12),transparent_60%)]",
  },
  {
    title: "Custom Bond",
    desc: "Jaminan kepabeanan untuk pemenuhan kewajiban bea masuk dan pajak impor sesuai ketentuan kepabeanan.",
    items: ["Fasilitas KITE", "Penangguhan Bea Masuk", "Impor Sementara (OB 23)", "Jaminan Kepabeanan"],
    iconSrc: "/icons/custom-bond.svg",
    imageTheme:
      "bg-[radial-gradient(circle_at_30%_20%,rgba(139,29,29,0.14),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(11,11,11,0.10),transparent_60%)]",
  },
  {
    title: "Asuransi Umum",
    desc: "Asuransi Umum memberikan perlindungan komprehensif atas aset dan kewajiban serta memastikan keamanan finansial.",
    items: [
      "Marine Hull",
      "Vehicle Insurance",
      "Property Insurance",
      "CAR/EAR",
      "Third Party Liability",
      "Marine Cargo",
    ],
    iconSrc: "/icons/asuransi-umum.svg",
    imageTheme:
      "bg-[radial-gradient(circle_at_30%_20%,rgba(11,11,11,0.12),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(139,29,29,0.10),transparent_60%)]",
  },
];

function splitInTwo<T>(items: T[]) {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

export default function ServicesPage() {
  const { t } = useI18n();
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
                  {t("servicesPage.headerTitle")}
                </div>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  {t("servicesPage.headerTitle")}
                </h1>
              </div>
              <div className="text-sm text-black/60">
                <Link href="/" className="hover:text-black">
                  {t("common.home")}
                </Link>
                <span className="mx-2 text-black/30">›</span>
                <span className="text-[var(--brand-brown)]">
                  {t("servicesPage.headerBreadcrumb")}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
            <div className="space-y-12 pt-4 sm:space-y-16 sm:pt-6">
              {services.map((s, idx) => {
                const [leftItems, rightItems] = splitInTwo(s.items);
                const reverse = idx % 2 === 1;

                return (
                  <div
                    key={s.title}
                    className="grid gap-10 lg:grid-cols-2 lg:items-center"
                  >
                    <div className={reverse ? "lg:order-2" : ""}>
                      <div className="overflow-hidden rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-soft)] shadow-[0_22px_70px_-44px_rgba(0,0,0,0.35)]">
                        <div className={`relative ${s.imageTheme}`}>
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.20),transparent_45%)]" />
                          <div className="aspect-[4/3] w-full">
                            <div className="flex h-full w-full items-center justify-center">
                              <div className="relative flex h-44 w-44 items-center justify-center rounded-[36px] border border-[var(--brand-border)] bg-white/55 shadow-[0_24px_80px_-56px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:h-52 sm:w-52">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(178,34,34,0.14),transparent_58%)]" />
                                <div className="relative">
                                  <Image alt={s.title} src={s.iconSrc} width={160} height={160} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={reverse ? "lg:order-1" : ""}>
                      <div className="max-w-xl">
                        <div className="flex items-center gap-3">
                          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-soft)]">
                            <Image alt={s.title} src={s.iconSrc} width={24} height={24} />
                          </span>
                          <div className="text-xl font-semibold tracking-tight text-black">
                            {s.title}
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-black/60">
                          {s.desc}
                        </p>

                        <div className="mt-6 grid gap-6 sm:grid-cols-2">
                          <ul className="space-y-2 text-sm text-black/65">
                            {leftItems.map((it) => (
                              <li key={it} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--brand-brown)]" />
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                          <ul className="space-y-2 text-sm text-black/65">
                            {rightItems.map((it) => (
                              <li key={it} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--brand-brown)]" />
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
