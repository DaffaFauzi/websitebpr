"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  PhoneCall,
  BarChart3,
  LineChart,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
  const textVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
    },
  } as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  } as const;

  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-48 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,29,29,0.16),transparent_62%)] blur-xl" />
        <div className="absolute -right-44 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(11,11,11,0.08),transparent_62%)] blur-xl" />
      </div>
      <Container spacing="hero">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={textVariants}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-soft)] px-4 py-2 text-xs font-medium text-black/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-brown)]" />
              {t("hero.since")}
            </motion.div>

            <motion.h1
              variants={textVariants}
              className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-[-0.02em] text-black md:text-5xl lg:text-6xl"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.div
              variants={textVariants}
              className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-black/60"
            >
              {t("hero.tagline")}
            </motion.div>

            <motion.p
              variants={textVariants}
              className="mt-3 max-w-2xl text-pretty text-sm leading-6 text-black/60 sm:text-base sm:leading-7"
            >
              {t("hero.support")}
            </motion.p>

            <motion.div variants={textVariants} className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="shadow-[0_14px_40px_-24px_rgba(139,29,29,0.55)]">
                <Link href="/services">
                  {t("hero.ctaServices")} <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  {t("hero.ctaConsult")} <PhoneCall />
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={textVariants} className="mt-5 lg:mt-6 flex flex-wrap gap-2">
              <Badge>Bank Garansi</Badge>
              <Badge>Surety Bond</Badge>
              <Badge>Custom Bond</Badge>
              <Badge>Asuransi Umum</Badge>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
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

              <motion.div
                aria-hidden
                className="pointer-events-none absolute right-6 top-6 hidden rounded-[20px] border border-white/35 bg-white/20 px-4 py-3 text-black/40 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.55)] backdrop-blur-[6px] lg:block"
                animate={{ y: [0, -11, 0], rotate: [0, -0.8, 0] }}
                transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
                style={{ opacity: 0.18 }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[14px] bg-white/30">
                    <LineChart className="h-4 w-4" />
                  </span>
                  <div className="text-xs font-semibold tracking-tight">Cashflow Monitoring</div>
                </div>
              </motion.div>

              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-8 left-8 hidden rounded-[20px] border border-white/35 bg-white/20 px-4 py-3 text-black/40 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.55)] backdrop-blur-[6px] lg:block"
                animate={{ y: [0, 12, 0], rotate: [0, 1.2, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ opacity: 0.16 }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[14px] bg-white/30">
                    <Wallet className="h-4 w-4" />
                  </span>
                  <div className="text-xs font-semibold tracking-tight">Guarantee Coverage</div>
                </div>
              </motion.div>

              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-12 right-10 hidden rounded-[20px] border border-white/35 bg-white/20 px-4 py-3 text-black/40 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.55)] backdrop-blur-[6px] lg:block"
                animate={{ y: [0, -8, 0], rotate: [0, -1, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ opacity: 0.14 }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[14px] bg-white/30">
                    <BarChart3 className="h-4 w-4" />
                  </span>
                  <div className="text-xs font-semibold tracking-tight">Risk Scoring</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
