"use client";

import { useEffect, useMemo, useRef } from "react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import EntityLogo from "@/app/components/EntityLogo";
import { PageHero } from "@/app/components/ui/page-hero";
import { Badge } from "@/app/components/ui/badge";
import { getLogoById, getLogosByCategory, logoCategories, type LogoMeta } from "@/app/data/logoCatalog";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

function repeatToMin<T>(items: T[], min: number) {
  if (items.length === 0) return [];
  if (items.length >= min) return items;
  const out: T[] = [];
  for (let i = 0; i < min; i++) out.push(items[i % items.length]);
  return out;
}

function MarqueeRow({
  items,
  direction,
}: {
  items: LogoMeta[];
  direction: "left" | "right";
}) {
  const base = useMemo(() => repeatToMin(items, 14), [items]);
  const loop = useMemo(() => [...base, ...base], [base]);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const inViewRef = useRef(true);
  const motionOkRef = useRef(true);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    if (direction === "right") {
      el.scrollLeft = Math.max(0, el.scrollWidth / 2);
    } else {
      el.scrollLeft = 0;
    }
  }, [direction, loop.length]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    motionOkRef.current = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        inViewRef.current = entries.some((e) => e.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);

    const handleVisibility = () => {
      if (document.visibilityState !== "visible") inViewRef.current = false;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let raf = 0;
    let last = performance.now();
    const speed = 28;

    const tick = (now: number) => {
      const target = viewportRef.current;
      raf = requestAnimationFrame(tick);
      if (!target) return;
      if (!motionOkRef.current) return;
      if (!inViewRef.current) return;
      const half = target.scrollWidth / 2;
      if (!Number.isFinite(half) || half <= 0) return;

      const dt = (now - last) / 1000;
      last = now;

      if (!isDraggingRef.current) {
        const delta = speed * dt * (direction === "left" ? 1 : -1);
        target.scrollLeft += delta;
        if (direction === "left" && target.scrollLeft >= half) target.scrollLeft -= half;
        if (direction === "right" && target.scrollLeft <= 0) target.scrollLeft += half;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [direction, loop.length]);

  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[var(--brand-surface)] py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--brand-surface)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--brand-surface)] to-transparent" />
      <div
        ref={viewportRef}
        className="no-scrollbar overflow-x-auto px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onPointerDown={(e) => {
          const el = viewportRef.current;
          if (!el) return;
          isDraggingRef.current = true;
          dragStartXRef.current = e.clientX;
          dragStartScrollRef.current = el.scrollLeft;
          (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          const el = viewportRef.current;
          if (!el) return;
          if (!isDraggingRef.current) return;
          const dx = e.clientX - dragStartXRef.current;
          el.scrollLeft = dragStartScrollRef.current - dx;
        }}
        onPointerUp={(e) => {
          isDraggingRef.current = false;
          (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
        }}
        onPointerCancel={() => {
          isDraggingRef.current = false;
        }}
      >
        <div className="flex w-max gap-6 py-3">
          {loop.map((meta, idx) => (
            <div
              key={`${meta.id}-${idx}`}
              className="group flex h-24 w-60 items-center justify-center rounded-[var(--radius-lg)] border border-black/10 bg-[var(--brand-surface)] px-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:h-28 sm:w-64"
            >
              <div className="h-12 w-full sm:h-14">
                <EntityLogo
                  meta={meta}
                  size={256}
                  rounded="xl"
                  className="grayscale transition-[filter,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IssuerPage() {
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
        <PageHero
          breadcrumbLabel={t("issuer.title")}
          title={t("issuer.title")}
          description={t("issuer.heroDesc")}
        />

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
                const topItems = items.filter((_, i) => i % 2 === 0);
                const bottomItems = items.filter((_, i) => i % 2 === 1);

                return (
                  <div key={cat.key}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-black">
                          {title}
                        </h3>
                        <div className="mt-2 h-px w-12 bg-black/10" />
                        <p className="mt-3 max-w-3xl text-sm leading-6 text-black/60">
                          {subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
                      <div className="col-span-full">
                        <div className="space-y-3">
                          <MarqueeRow
                            items={topItems.length ? topItems : items}
                            direction="right"
                          />
                          <MarqueeRow
                            items={bottomItems.length ? bottomItems : items}
                            direction="left"
                          />
                        </div>
                        <p className="mt-3 text-xs text-black/45">
                          {locale === "en"
                            ? "Tip: drag left or right while logos are moving."
                            : "Tip: geser ke kiri atau kanan meskipun logo sedang berjalan."}
                        </p>
                      </div>
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
