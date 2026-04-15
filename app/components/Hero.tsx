"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Container, Section } from "@/app/components/ui/section";
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
              {t("hero.title")}
            </h1>

            <div className="mt-4 max-w-2xl text-pretty text-base leading-7 text-black/70 sm:text-lg">
              {t("hero.tagline")}
            </div>

            <p className="mt-3 max-w-2xl text-pretty text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
              {t("hero.support")}
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(139,29,29,0.12),transparent_55%),radial-gradient(circle_at_75%_60%,rgba(11,11,11,0.08),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),transparent_40%,rgba(255,255,255,0.50))]" />
              <div className="relative p-6 sm:p-8">
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-white/55 shadow-[var(--shadow-soft)]">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      alt="BPR Bonding partnership"
                      src="/images/hero-partnership.svg"
                      fill
                      priority
                      sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
