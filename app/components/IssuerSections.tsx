"use client";

import { useMemo } from "react";
import EntityLogo from "@/app/components/EntityLogo";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import { LogoCategory, LogoMeta } from "@/app/data/logoCatalog";
import { useIssuerLogos } from "@/app/hooks/useIssuerLogos";
import { useI18n } from "@/app/i18n/I18nProvider";
import { Container, Section } from "@/app/components/ui/section";
import { motion } from "framer-motion";

const DURATION_LEFT_MS = 30000;
const DURATION_RIGHT_MS = 30000;
const MIN_ITEMS_PER_TRACK = 18;

function repeatToMin<T>(items: T[], min: number) {
  if (items.length === 0) return [];
  if (items.length >= min) return items;
  const out: T[] = [];
  for (let i = 0; i < min; i++) out.push(items[i % items.length]);
  return out;
}

function SkeletonRow() {
  return (
    <div className="flex w-max gap-4">
      {Array.from({ length: 9 }).map((_, i) => (
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
        <div className="marquee-track flex w-max gap-4" style={{ animation: anim }}>
          {loop.map((x, idx) => (
            <div
              key={`${x.id}-${idx}`}
              className="group logo-box px-5 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="h-full w-full p-4">
                <EntityLogo meta={x} size={256} rounded="2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategorySection({
  category,
  titleKey,
  banner,
  pageSize,
}: {
  category: LogoCategory;
  titleKey: string;
  banner: "soft" | "beige";
  pageSize: number;
}) {
  const { t } = useI18n();
  const { status, data, error, revalidate } = useIssuerLogos(category, pageSize);

  const [left, right] = useMemo(() => {
    const a = data.filter((_, i) => i % 2 === 0);
    const b = data.filter((_, i) => i % 2 === 1);
    return [a, b];
  }, [data]);

  const bannerBg =
    banner === "beige"
      ? "bg-[linear-gradient(180deg,rgba(139,29,29,0.06),transparent)]"
      : "bg-[linear-gradient(180deg,transparent,rgba(11,11,11,0.03))]";

  return (
    <Section className={bannerBg}>
      <Container>
        <motion.h3 
          className="text-center text-xl font-semibold tracking-tight text-black sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t(titleKey)}
        </motion.h3>

        <motion.div 
          className="mt-6 bg-[var(--brand-surface)] py-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div style={{ minHeight: 220 }}>
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
                <Track items={left} direction="left" />
                <Track items={right} direction="right" />
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default function IssuerSections() {
  return (
    <ErrorBoundary
      fallback={
        <Container>
          <div className="rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-6 py-6 text-sm text-black/70">
            Terjadi kendala saat menampilkan daftar logo.
          </div>
        </Container>
      }
    >
      <CategorySection
        category="bank-pemerintah"
        titleKey="issuer.bankGovernment"
        banner="soft"
        pageSize={24}
      />
      <CategorySection
        category="bank-swasta"
        titleKey="issuer.bankPrivate"
        banner="beige"
        pageSize={24}
      />
      <CategorySection
        category="bank-daerah"
        titleKey="issuer.bankRegional"
        banner="soft"
        pageSize={28}
      />
      <CategorySection
        category="asuransi-bumn"
        titleKey="issuer.insBumn"
        banner="soft"
        pageSize={24}
      />
      <CategorySection
        category="asuransi-swasta"
        titleKey="issuer.insPrivate"
        banner="beige"
        pageSize={28}
      />
    </ErrorBoundary>
  );
}
