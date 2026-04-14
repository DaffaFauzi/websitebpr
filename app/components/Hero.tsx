"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  MessageCircle,
  PhoneCall,
  Shield,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="bg-[var(--brand-surface)]">
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-soft)] px-4 py-2 text-xs font-medium text-black/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-brown)]" />
              {t("hero.since")}
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-6xl">
              BPR Bonding
              <span className="mt-2 block text-black/60">
                {t("hero.subtitle")}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-black/60 sm:text-lg">
              {t("hero.desc")}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
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

            <div className="mt-10 flex flex-wrap gap-2">
              <Badge>Bank Garansi</Badge>
              <Badge>Surety Bond</Badge>
              <Badge>Custom Bond</Badge>
              <Badge>Asuransi Umum</Badge>
            </div>
          </motion.div>

          <motion.div 
            className="relative lg:-mt-14"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-[36px] border border-[var(--brand-border)] bg-[var(--brand-soft)] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <div className="relative overflow-hidden rounded-[32px] border border-[color-mix(in_oklab,var(--brand-brown),transparent_80%)] bg-[var(--brand-surface)] [perspective:1000px]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,11,11,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,11,11,0.06)_1px,transparent_1px)] [background-size:48px_48px] opacity-35" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(139,29,29,0.16),transparent_55%),radial-gradient(circle_at_75%_60%,rgba(11,11,11,0.10),transparent_55%)]" />

                <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px]">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[float-soft_5s_ease-in-out_infinite]">
                    <div
                      className="spin-y h-[170px] w-[170px] rounded-[44px] bg-[var(--brand-brown)] shadow-[0_30px_80px_rgba(0,0,0,0.18)] [transform-style:preserve-3d] sm:h-[210px] sm:w-[210px]"
                      style={
                        {
                          ["--spin-duration" as never]: "4.2s",
                        } as React.CSSProperties
                      }
                    >
                      <div className="absolute inset-0 rounded-[44px] bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.20),transparent_55%)]" />
                      <div className="relative flex h-full w-full items-center justify-center">
                        <Shield className="h-16 w-16 text-white sm:h-20 sm:w-20" />
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 orbit-cw"
                    style={
                      {
                        ["--orbit-duration" as never]: "14s",
                      } as React.CSSProperties
                    }
                  >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="translate-x-[150px] -translate-y-[120px] sm:translate-x-[185px] sm:-translate-y-[145px]">
                        <div
                          className="orbit-ccw"
                          style={
                            {
                              ["--orbit-duration" as never]: "14s",
                            } as React.CSSProperties
                          }
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                            <Zap className="h-6 w-6 text-[var(--brand-brown)]" />
                          </div>
                        </div>
                      </div>

                      <div className="-translate-x-[165px] -translate-y-[10px] sm:-translate-x-[205px]">
                        <div
                          className="orbit-ccw"
                          style={
                            {
                              ["--orbit-duration" as never]: "14s",
                            } as React.CSSProperties
                          }
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                            <BookOpen className="h-6 w-6 text-[var(--brand-brown)]" />
                          </div>
                        </div>
                      </div>

                      <div className="-translate-x-[25px] translate-y-[165px] sm:translate-y-[205px]">
                        <div
                          className="orbit-ccw"
                          style={
                            {
                              ["--orbit-duration" as never]: "14s",
                            } as React.CSSProperties
                          }
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                            <MessageCircle className="h-6 w-6 text-[var(--brand-brown)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 orbit-ccw"
                    style={
                      {
                        ["--orbit-duration" as never]: "20s",
                      } as React.CSSProperties
                    }
                  >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="translate-x-[115px] translate-y-[115px] sm:translate-x-[145px] sm:translate-y-[145px]">
                        <div
                          className="orbit-cw"
                          style={
                            {
                              ["--orbit-duration" as never]: "20s",
                            } as React.CSSProperties
                          }
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                            <Zap className="h-6 w-6 text-[var(--brand-brown)]" />
                          </div>
                        </div>
                      </div>

                      <div className="translate-x-[150px] -translate-y-[5px] sm:translate-x-[190px]">
                        <div
                          className="orbit-cw"
                          style={
                            {
                              ["--orbit-duration" as never]: "20s",
                            } as React.CSSProperties
                          }
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                            <BookOpen className="h-6 w-6 text-[var(--brand-brown)]" />
                          </div>
                        </div>
                      </div>

                      <div className="-translate-x-[135px] -translate-y-[130px] sm:-translate-x-[165px] sm:-translate-y-[165px]">
                        <div
                          className="orbit-cw"
                          style={
                            {
                              ["--orbit-duration" as never]: "20s",
                            } as React.CSSProperties
                          }
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                            <MessageCircle className="h-6 w-6 text-[var(--brand-brown)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklab,var(--brand-brown),transparent_78%)] opacity-50 sm:h-[380px] sm:w-[380px]" />
                </div>
              </div>

              <div className="mt-3 rounded-[28px] bg-[var(--brand-brown)] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div className="text-sm font-semibold leading-5">
                    Perlindungan
                    <div className="text-white/70">Penjaminan</div>
                  </div>
                </div>
                <div className="mt-5 text-sm leading-6 text-white/80">
                  Solusi cepat, aman, dan sesuai kebutuhan bisnis dan proyek.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
