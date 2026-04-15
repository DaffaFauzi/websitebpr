"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import EntityLogo from "@/app/components/EntityLogo";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import { LogoCategory, LogoMeta, getLogosByCategory } from "@/app/data/logoCatalog";
import { useIssuerLogos } from "@/app/hooks/useIssuerLogos";
import { writeCache } from "@/app/lib/storageCache";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

type Tab = {
  key: LogoCategory;
  titleKey: string;
  banner: "soft" | "beige";
  pageSize: number;
};

function cacheKey(category: LogoCategory) {
  return `bpr_logo_cache_${category}`;
}

function prefill(category: LogoCategory) {
  const all = getLogosByCategory(category);
  writeCache(cacheKey(category), { ids: all.map((x) => x.id) });
}

function SkeletonRow() {
  return (
    <div className="flex w-max gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="logo-box animate-pulse bg-[color-mix(in_oklab,var(--brand-soft),white_55%)]"
        />
      ))}
    </div>
  );
}

function Track({
  items,
  direction,
  duration,
  showText,
}: {
  items: LogoMeta[];
  direction: "left" | "right";
  duration: number;
  showText?: boolean;
}) {
  const anim =
    direction === "left"
      ? `marquee-left ${duration}ms linear infinite`
      : `marquee-right ${duration}ms linear infinite`;

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--brand-surface)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--brand-surface)] to-transparent" />
      <div className="py-3">
        <div className="marquee-track flex w-max gap-4" style={{ animation: anim }}>
          {[...items, ...items].map((x, idx) => (
            <div
              key={`${x.id}-${idx}`}
              className="group logo-box px-5 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="h-full w-full">
                  <EntityLogo meta={x} size={256} rounded="2xl" />
                </div>
                {showText ? (
                  <div className="mt-2 line-clamp-1 text-xs font-medium text-black/55">
                    {x.name}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pager({
  page,
  pageCount,
  onPrev,
  onNext,
}: {
  page: number;
  pageCount: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { t } = useI18n();
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        disabled={page <= 1}
        aria-label={t("common.prev")}
        className="h-10 rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 text-sm font-semibold text-black/70 transition-colors disabled:opacity-40"
      >
        ‹
      </button>
      <div className="text-sm text-black/55">
        {page} / {pageCount}
      </div>
      <button
        type="button"
        onClick={onNext}
        disabled={page >= pageCount}
        aria-label={t("common.next")}
        className="h-10 rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 text-sm font-semibold text-black/70 transition-colors disabled:opacity-40"
      >
        ›
      </button>
    </div>
  );
}

function TabPanel({
  tab,
}: {
  tab: Tab;
}) {
  const { t } = useI18n();
  const { status, data, page, pageCount, setPage, error, revalidate } = useIssuerLogos(
    tab.key,
    tab.pageSize
  );

  const [left, right] = useMemo(() => {
    const a = data.filter((_, i) => i % 2 === 0);
    const b = data.filter((_, i) => i % 2 === 1);
    return [a, b];
  }, [data]);

  const bannerBg =
    tab.banner === "beige"
      ? "bg-[linear-gradient(180deg,rgba(139,29,29,0.06),transparent)]"
      : "bg-[linear-gradient(180deg,transparent,rgba(11,11,11,0.03))]";

  return (
    <Section className={bannerBg}>
      <Container>
        <div className="bg-[var(--brand-surface)]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-sm font-medium text-black/50">{t(tab.titleKey)}</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                {t(tab.titleKey)}
              </div>
            </div>
            <Pager
              page={page}
              pageCount={pageCount}
              onPrev={() => setPage(page - 1)}
              onNext={() => setPage(page + 1)}
            />
          </div>

          <div className={cn("mt-8 fade-in")} key={`${tab.key}-${page}-${status}`} style={{ minHeight: 240 }}>
            {status === "error" ? (
              <div className="border-y border-[var(--brand-border)] bg-[var(--brand-soft)] px-6 py-6">
                <div className="text-sm font-semibold text-black/80">Gagal memuat.</div>
                <div className="mt-2 text-sm text-black/60">{error}</div>
                <button
                  type="button"
                  onClick={revalidate}
                  className="mt-4 h-10 rounded-full bg-[var(--brand-brown)] px-5 text-sm font-semibold text-white"
                >
                  Coba lagi
                </button>
              </div>
            ) : status === "loading" && data.length === 0 ? (
              <div className="space-y-4">
                <div className="relative overflow-hidden">
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--brand-surface)] to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--brand-surface)] to-transparent" />
                  <div className="py-3">
                    <SkeletonRow />
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--brand-surface)] to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--brand-surface)] to-transparent" />
                  <div className="py-3">
                    <SkeletonRow />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <Track items={left} direction="left" duration={4200} />
                <Track items={right} direction="right" duration={4800} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function IssuerSubmenus() {
  const { t } = useI18n();
  const tabs: Tab[] = useMemo(
    () => [
      { key: "bank-pemerintah", titleKey: "issuer.bankGovernment", banner: "soft", pageSize: 12 },
      { key: "bank-swasta", titleKey: "issuer.bankPrivate", banner: "beige", pageSize: 12 },
      { key: "bank-daerah", titleKey: "issuer.bankRegional", banner: "soft", pageSize: 14 },
      { key: "asuransi-bumn", titleKey: "issuer.insBumn", banner: "soft", pageSize: 12 },
      { key: "asuransi-swasta", titleKey: "issuer.insPrivate", banner: "beige", pageSize: 14 },
    ],
    []
  );

  const [active, setActive] = useState<LogoCategory>("bank-pemerintah");

  return (
    <Section>
      <Container spacing="none" className="pt-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onMouseEnter={() => prefill(tab.key)}
              onFocus={() => prefill(tab.key)}
              onClick={() => setActive(tab.key)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold transition-colors",
                active === tab.key
                  ? "border-[var(--brand-brown)] bg-[var(--brand-brown)] text-white"
                  : "border-[var(--brand-border)] bg-[var(--brand-soft)] text-black/70 hover:text-black"
              )}
            >
              {t(tab.titleKey)}
            </button>
          ))}
        </div>
      </Container>

      <ErrorBoundary
        fallback={
          <Container>
            <div className="rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-6 py-6 text-sm text-black/70">
              Terjadi kendala saat menampilkan daftar logo.
            </div>
          </Container>
        }
      >
        <TabPanel tab={tabs.find((x) => x.key === active) ?? tabs[0]} />
      </ErrorBoundary>
    </Section>
  );
}
