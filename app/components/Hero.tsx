"use client";

import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Container, Section } from "@/app/components/ui/section";
import BrandLogo from "@/app/components/BrandLogo";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
  return (
    <Section>
      <Container spacing="section">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-soft)] px-4 py-2 text-xs font-medium text-black/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-brown)]" />
              {t("hero.since")}
            </div>

            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-6xl">
              {t("hero.subtitle")}
            </h1>

            <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-black/60 sm:text-lg">
              {t("hero.desc")}
            </p>

            <div className="mt-5 lg:mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/services">
                  {t("hero.ctaServices")} <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  {t("hero.ctaConsult")} <PhoneCall />
                </Link>
              </Button>
            </div>

            <div className="mt-5 lg:mt-6 flex flex-wrap gap-2">
              <Badge>Bank Garansi</Badge>
              <Badge>Surety Bond</Badge>
              <Badge>Custom Bond</Badge>
              <Badge>Asuransi Umum</Badge>
            </div>
          </motion.div>

          <motion.div 
            className="relative lg:-mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--brand-border)] bg-[var(--brand-soft)] shadow-[var(--shadow-float)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(139,29,29,0.16),transparent_55%),radial-gradient(circle_at_75%_60%,rgba(11,11,11,0.08),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 opacity-55 orbit-cw sm:h-[360px] sm:w-[360px]"
                  style={{ ["--orbit-duration" as never]: "18s" } as never}
                >
                  <div className="absolute left-1/2 top-0 -translate-x-1/2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-[color-mix(in_oklab,var(--brand-surface),transparent_10%)] shadow-[var(--shadow-soft)]">
                      <span className="h-2 w-2 rounded-full bg-[var(--brand-brown)]" />
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 opacity-45 orbit-ccw sm:h-[280px] sm:w-[280px]"
                  style={{ ["--orbit-duration" as never]: "22s" } as never}
                >
                  <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full border border-black/10 bg-[color-mix(in_oklab,var(--brand-surface),transparent_10%)] shadow-[var(--shadow-soft)]" />
                  </div>
                </div>
              </div>
              <div className="relative px-8 pt-5 pb-8 sm:px-10 sm:pt-6 sm:pb-10">
                <div className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_30%)] px-4 py-2 text-xs font-semibold text-black/65">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-brown)]" />
                  BPR Bonding
                </div>

                <div className="mt-3 flex justify-center sm:mt-4">
                  <BrandLogo kind="full" height={52} width={200} priority />
                </div>

                <div className="mt-5 grid gap-4 text-sm text-black/70 sm:mt-6 sm:grid-cols-3">
                  {[
                    { title: "Cepat", desc: "Proses rapi & terarah." },
                    { title: "Transparan", desc: "Status jelas & update." },
                    { title: "Terpercaya", desc: "Mitra penerbit resmi." },
                  ].map((x) => (
                    <div key={x.title} className="flex gap-3">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-brown)]" />
                      <div>
                        <div className="font-semibold text-black">{x.title}</div>
                        <div className="mt-1 leading-6 text-black/60">{x.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
