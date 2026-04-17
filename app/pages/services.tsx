"use client";

import Link from "next/link";
import Image from "next/image";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { PageHero } from "@/app/components/ui/page-hero";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

const services = [
  {
    key: "bank-garansi",
    imageSrc: "/logos/bg.png",
    iconSrc: "/icons/bank-garansi.svg",
    title: { id: "Bank Garansi", en: "Bank Guarantee" },
    desc: {
      id: "Produk jaminan dari bank yang memberikan kepastian dan perlindungan finansial, sehingga transaksi dan kontrak proyek berjalan lebih aman.",
      en: "A trusted product that offers financial assurance and security, providing peace of mind and protection for financial transactions.",
    },
    bullets: {
      id: [
        "Jaminan Penawaran (Bid Bond)",
        "Jaminan Pelaksanaan (Performance Bond)",
        "Jaminan Uang Muka (Advance Payment Bond)",
        "Jaminan Pemeliharaan (Maintenance Bond)",
        "SP2D (BG Akhir Tahun)",
      ],
      en: ["Bid Bond", "Performance Bond", "Advanced Payment Bond", "Maintenance Bond", "SP2D (BG Akhir Tahun)"],
    },
  },
  {
    key: "surety-bond",
    imageSrc: "/logos/surety.png",
    iconSrc: "/icons/surety-bond.svg",
    title: { id: "Surety Bond", en: "Surety Bond" },
    desc: {
      id: "Jaminan yang memberikan kepastian atas pelaksanaan dan penyelesaian kontrak/pekerjaan, cocok untuk kebutuhan proyek konstruksi dan pengadaan.",
      en: "A reliable and secure financial guarantee that guarantees the performance and completion of a contract or obligation.",
    },
    bullets: {
      id: [
        "Jaminan Pemeliharaan (Maintenance Bond)",
        "Jaminan Penawaran (Bid Bond)",
        "Jaminan Pembayaran (Payment Bond)",
        "Jaminan Pelaksanaan (Performance Bond)",
        "Jaminan Uang Muka (Advance Payment Bond)",
      ],
      en: ["Maintenance Bond", "Bid Bond", "Payment Bond", "Performance Bond", "Advanced Payment Bond"],
    },
  },
  {
    key: "custom-bond",
    imageSrc: "/logos/cb.png",
    iconSrc: "/icons/custom-bond.svg",
    title: { id: "Custom Garansi", en: "Custom Garansi" },
    desc: {
      id: "Jaminan untuk kebutuhan kepabeanan/impor yang diterbitkan oleh perusahaan asuransi atau lembaga penjamin, sesuai ketentuan dan jenis fasilitas yang digunakan.",
      en: "Custom Bond is a guarantee for the implementation of customs issued by an insurance company or guarantee organization.",
    },
    bullets: {
      id: [
        "KITE",
        "KABER",
        "Vooruitslag",
        "SPKPBM",
        "TPS",
        "Impor Sementara (OB 23)",
      ],
      en: ["KITE", "KABER", "Vooruitslag", "SPKPBM", "TPS", "Impor Sementara (OB 23)"],
    },
  },
  {
    key: "asuransi-umum",
    imageSrc: "/logos/asuransi.png",
    iconSrc: "/icons/asuransi-umum.svg",
    title: { id: "Asuransi Umum", en: "General Insurance" },
    desc: {
      id: "Perlindungan menyeluruh untuk aset dan tanggung jawab (liability) agar bisnis tetap aman dan stabil dari berbagai risiko.",
      en: "General Insurance provides comprehensive protection of assets and liabilities and ensures financial security.",
    },
    bullets: {
      id: [
        "Marine Hull",
        "Vehicle Insurance",
        "Property Insurance",
        "CAR/EAR",
        "Third Party Liability",
        "Marine Cargo",
      ],
      en: ["Marine Hull", "Vehicle Insurance", "Property Insurance", "CAR/EAR", "Third Party Liability", "Marine Cargo"],
    },
  },
];

export default function ServicesPage() {
  const { locale, t } = useI18n();
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <PageHero
          breadcrumbLabel={t("common.services")}
          title={t("servicesPage.heroTitle")}
          description={t("servicesPage.heroDesc")}
        />

        <Section>
          <Container>
            <div className="text-center">
              <div className="flex justify-center">
                <Badge>{t("servicesPage.sectionLabel")}</Badge>
              </div>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                {t("servicesPage.sectionTitle")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
                {t("servicesPage.sectionSubtitle")}
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:mt-10 md:grid-cols-2">
              {services.map((s) => {
                const title = locale === "en" ? s.title.en : s.title.id;
                const desc = locale === "en" ? s.desc.en : s.desc.id;
                const bullets = locale === "en" ? s.bullets.en : s.bullets.id;

                return (
                  <Card
                    key={s.key}
                    className="group overflow-hidden transition-[box-shadow,border-color] duration-200 hover:border-black/20 hover:shadow-[var(--shadow-float)]"
                  >
                    <div className="relative aspect-[16/9] bg-[var(--brand-soft)]">
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),transparent_42%,rgba(255,255,255,0.45))]" />
                      <div className="absolute inset-0 p-8 sm:p-10">
                        <div className="relative h-full w-full">
                          <Image
                            alt={title}
                            src={s.imageSrc}
                            fill
                            sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
                            className="object-contain opacity-95"
                          />
                        </div>
                      </div>
                      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_10%)]">
                        <Image alt={title} src={s.iconSrc} width={20} height={20} />
                      </div>
                    </div>

                    <CardContent className="space-y-3">
                      <div className="text-lg font-semibold tracking-tight text-black">
                        {title}
                      </div>
                      <p className="text-sm leading-6 text-black/60 line-clamp-2">
                        {desc}
                      </p>
                      <ul className="space-y-2 text-sm text-black/70">
                        {bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--brand-brown)]" />
                            <span className="leading-6">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="text-center">
              <div className="text-balance text-xl font-semibold tracking-tight text-black sm:text-2xl">
                {t("servicesPage.ctaTitle")}
              </div>
              <div className="mt-5 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">{t("servicesPage.ctaButton")}</Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
