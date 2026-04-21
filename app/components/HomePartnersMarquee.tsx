"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import EntityLogo from "@/app/components/EntityLogo";
import { Button } from "@/app/components/ui/button";
import { Container, Section } from "@/app/components/ui/section";
import { LogoMeta, getLogosByCategory } from "@/app/data/logoCatalog";
import { useI18n } from "@/app/i18n/I18nProvider";

const MIN_ITEMS_PER_TRACK = 18;

function repeatToMin<T>(items: T[], min: number) {
  if (items.length === 0) return [];
  if (items.length >= min) return items;
  const out: T[] = [];
  for (let i = 0; i < min; i++) out.push(items[i % items.length]);
  return out;
}

function Track({
  items,
  direction,
  durationMs,
}: {
  items: LogoMeta[];
  direction: "left" | "right";
  durationMs: number;
}) {
  const base = useMemo(() => repeatToMin(items, MIN_ITEMS_PER_TRACK), [items]);
  const loop = useMemo(() => [...base, ...base], [base]);
  const anim =
    direction === "left"
      ? `marquee-left ${durationMs}ms linear infinite`
      : `marquee-right ${durationMs}ms linear infinite`;

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--brand-surface)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--brand-surface)] to-transparent" />
      <div className="py-3">
        <div className="marquee-track flex w-max gap-6" style={{ animation: anim, willChange: "transform" }}>
          {loop.map((x, idx) => (
            <div
              key={`${x.id}-${idx}`}
              className="group logo-box px-6 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
            >
              <div className="logo-box-inner">
                <EntityLogo
                  meta={x}
                  size={256}
                  rounded="2xl"
                  className="transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePartnersMarquee() {
  const { locale, t } = useI18n();
  const isEn = locale === "en";

  const items = useMemo(() => {
    const govt = getLogosByCategory("bank-pemerintah");
    const privateBanks = getLogosByCategory("bank-swasta");
    const regional = getLogosByCategory("bank-daerah");
    const insurance = [...getLogosByCategory("asuransi-bumn"), ...getLogosByCategory("asuransi-swasta")];
    const merged = [...govt, ...privateBanks, ...regional, ...insurance];
    const left = merged.filter((_, i) => i % 2 === 0);
    const right = merged.filter((_, i) => i % 2 === 1);
    return { left, right };
  }, []);

  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-sm font-medium text-black/50">{t("homePartners.label")}</div>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-black sm:text-5xl">
              {t("homePartners.title")}
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-black/60">
              {t("homePartners.subtitle")}
            </p>
          </div>
          <Button asChild size="lg" variant="outline">
            <Link href="/issuer">
              {t("homePartners.viewAll")} <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <div className="mt-8 space-y-4 bg-[var(--brand-surface)] py-2">
          <Track items={items.left} direction="left" durationMs={52000} />
          <Track items={items.right} direction="right" durationMs={56000} />
        </div>
      </Container>
    </Section>
  );
}
