"use client";

import Link from "next/link";
import { useMemo } from "react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import EntityLogo from "@/app/components/EntityLogo";
import { Badge } from "@/app/components/ui/badge";
import { LogoMeta, getLogoById, getLogosByCategory, logoCategories } from "@/app/data/logoCatalog";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

const DURATION_LEFT_MS = 32000;
const DURATION_RIGHT_MS = 34000;
const MIN_ITEMS_PER_TRACK = 18;

function repeatToMin<T>(items: T[], min: number) {
  if (items.length === 0) return [];
  if (items.length >= min) return items;
  const out: T[] = [];
  for (let i = 0; i < min; i++) out.push(items[i % items.length]);
  return out;
}

function MarqueeTrack({
  items,
  direction,
}: {
  items: LogoMeta[];
  direction: "left" | "right";
}) {
  const base = useMemo(() => repeatToMin(items, MIN_ITEMS_PER_TRACK), [items]);
  const loop = useMemo(() => [...base, ...base], [base]);
  const anim =
    direction === "left"
      ? `marquee-left ${DURATION_LEFT_MS}ms linear infinite`
      : `marquee-right ${DURATION_RIGHT_MS}ms linear infinite`;

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--brand-surface)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--brand-surface)] to-transparent" />
      <div className="py-3">
        <div className="marquee-track flex w-max gap-4" style={{ animation: anim, willChange: "transform" }}>
          {loop.map((meta, idx) => (
            <div
              key={`${meta.id}-${idx}`}
              className="group logo-box px-5 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[var(--shadow-float)]"
            >
              <div className="logo-box-inner">
                <EntityLogo meta={meta} size={256} rounded="2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IssuerPageBeforeCleanup() {
  const { locale, t } = useI18n();
  const jastan = getLogoById("jastan");
  const categorySubtitles: Record<
    (typeof logoCategories)[number]["key"],
    { id: string; en: string }
  > = {
    "bank-pemerintah": {
      id: "Mitra bank nasional yang mendukung layanan penjaminan.",
      en: "National banks supporting guarantee services.",
    },
    "bank-swasta": {
      id: "Mitra bank swasta untuk kebutuhan penjaminan bisnis.",
      en: "Private banks supporting business guarantees.",
    },
    "bank-daerah": {
      id: "Mitra bank daerah untuk jangkauan layanan yang luas.",
      en: "Regional banks enabling broader coverage.",
    },
    "asuransi-bumn": {
      id: "Mitra BUMN dan anak BUMN untuk asuransi dan penjaminan.",
      en: "SOE partners for insurance and surety.",
    },
    "asuransi-swasta": {
      id: "Mitra asuransi dan penjaminan swasta yang terpercaya.",
      en: "Trusted private insurance and surety partners.",
    },
  };
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <Section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(139,29,29,0.10),transparent_52%),radial-gradient(circle_at_78%_62%,rgba(11,11,11,0.06),transparent_58%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.70),transparent_30%,rgba(255,255,255,0.75))]" />
          </div>
          <Container spacing="section" className="relative">
            <div className="text-sm font-medium text-black/50">
              <Link href="/" className="hover:text-black">
                {t("common.home")}
              </Link>
              <span className="mx-2 text-black/30">{t("common.breadcrumbSeparator")}</span>
              <span className="text-black/60">{t("issuer.title")}</span>
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              {t("issuer.title")}
            </h1>
            <div className="mt-3 h-px w-16 bg-[color-mix(in_oklab,var(--brand-brown),transparent_65%)]" />
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
              {t("issuer.heroDesc")}
            </p>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_2%)] shadow-[var(--shadow-soft)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(139,29,29,0.10),transparent_58%),radial-gradient(circle_at_78%_70%,rgba(11,11,11,0.06),transparent_62%)]" />
              <div className="relative grid gap-8 px-6 py-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center lg:px-10">
                <div>
                  <div className="inline-flex">
                    <Badge className="border-[color-mix(in_oklab,var(--brand-brown),transparent_65%)] bg-[color-mix(in_oklab,var(--brand-brown),transparent_92%)] text-[var(--brand-brown)]">
                      {t("issuer.partnerLabel")}
                    </Badge>
                  </div>
                  <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                    {t("issuer.partnerName")}
                  </h2>
                  <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-black/65 sm:text-base">
                    {t("issuer.partnerDesc")}
                  </p>

                  <ul className="mt-5 grid gap-2 text-sm text-black/70 sm:grid-cols-2">
                    {[
                      locale === "en" ? "Verified partners" : "Mitra terverifikasi",
                      locale === "en" ? "National coverage" : "Jangkauan nasional",
                      locale === "en" ? "Clear coordination" : "Koordinasi jelas",
                      locale === "en" ? "Operational support" : "Dukungan operasional",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--brand-brown)]" />
                        <span className="leading-6">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:border-l lg:border-[var(--brand-border)] lg:pl-10">
                  <div className="mx-auto max-w-sm rounded-[var(--radius-xl)] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 shadow-[var(--shadow-float)]">
                    <div className="flex justify-center">
                      <div className="h-28 w-full sm:h-32">
                        {jastan ? <EntityLogo meta={jastan} size={512} rounded="2xl" /> : null}
                      </div>
                    </div>
                    <div className="mt-4 text-center text-xs font-medium text-black/55">
                      PT Jasa Tania Tbk (Jastan)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-10">
              {logoCategories.map((cat) => {
                const title = locale === "en" ? cat.labelEn : cat.labelId;
                const subtitle = locale === "en" ? categorySubtitles[cat.key].en : categorySubtitles[cat.key].id;
                const items = getLogosByCategory(cat.key);
                const left = items.filter((_, i) => i % 2 === 0);
                const right = items.filter((_, i) => i % 2 === 1);

                return (
                  <div key={cat.key}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-black">{title}</h3>
                        <div className="mt-2 h-px w-12 bg-black/10" />
                        <p className="mt-3 max-w-3xl text-sm leading-6 text-black/60">{subtitle}</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <MarqueeTrack items={left} direction="left" />
                      <MarqueeTrack items={right} direction="right" />
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
                      {items.map((meta) => (
                        <div
                          key={meta.id}
                          className="group flex h-24 items-center justify-center rounded-[var(--radius-lg)] border border-black/10 bg-[var(--brand-surface)] px-5 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[var(--shadow-float)] sm:h-28"
                        >
                          <div className="h-12 w-full sm:h-14">
                            <EntityLogo meta={meta} size={256} rounded="xl" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
