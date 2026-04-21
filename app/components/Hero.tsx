"use client";

import Link from "next/link";
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
              <Badge>{t("footer.linkBankGaransi")}</Badge>
              <Badge>{t("footer.linkSurety")}</Badge>
              <Badge>{t("footer.linkCustomBond")}</Badge>
              <Badge>{t("footer.linkGeneralInsurance")}</Badge>
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
                <div className="relative mx-auto w-full max-w-lg aspect-square">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[var(--radius-xl)]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,11,11,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,11,11,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-55" />
                    <div className="absolute -left-20 -top-24 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(242,195,10,0.20),transparent_60%)] blur-2xl" />
                    <div className="absolute -bottom-28 -right-24 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(139,29,29,0.14),transparent_62%)] blur-2xl" />
                    <div className="absolute left-[22%] top-[32%] h-1.5 w-1.5 rounded-full bg-[color-mix(in_oklab,var(--brand-brown),white_65%)] opacity-55" />
                    <div className="absolute left-[64%] top-[22%] h-1.5 w-1.5 rounded-full bg-[color-mix(in_oklab,var(--brand-brown),white_65%)] opacity-45" />
                    <div className="absolute left-[78%] top-[64%] h-1.5 w-1.5 rounded-full bg-[color-mix(in_oklab,var(--brand-brown),white_65%)] opacity-55" />
                    <div className="absolute left-[36%] top-[76%] h-1.5 w-1.5 rounded-full bg-[color-mix(in_oklab,var(--brand-brown),white_65%)] opacity-40" />
                  </div>

                  <motion.div className="absolute inset-0" style={{ perspective: 900 }}>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ transformStyle: "preserve-3d" }}
                      animate={{ rotateY: [16, 48, 16], rotateZ: [-2, 2, -2] }}
                      transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <motion.div
                        className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#8f1a20] to-[#6b1418] shadow-[0_32px_80px_rgba(0,0,0,0.22)] sm:h-64 sm:w-64"
                        animate={{ 
                          y: [0, -10, 0], 
                          rotate: [0, 1.2, 0],
                        }}
                        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#edcc16]/20 to-transparent" />
                        
                        {/* Smoothly rotating central icon container */}
                        <motion.div
                          className="relative z-10 flex h-32 w-32 items-center justify-center rounded-2xl bg-white shadow-xl sm:h-36 sm:w-36"
                          animate={{ 
                            rotate: 360,
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-20 w-20 text-[#edcc16] sm:h-24 sm:w-24"
                          >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                          </svg>
                        </motion.div>

                        <motion.div
                          className="absolute inset-0 rounded-3xl border-4 border-[#edcc16]"
                          animate={{ scale: [1, 1.12, 1] }}
                          transition={{ duration: 1.85, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="absolute left-1/2 top-1/2"
                      style={{ x: "-50%", y: "-50%" }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_22px_60px_rgba(0,0,0,0.18)] sm:h-16 sm:w-16"
                        style={{ transform: "translateX(min(190px,34vw)) rotate(-16deg)" }}
                        animate={{ rotate: -360, y: [0, -6, 0] }}
                        transition={{
                          rotate: { duration: 14, repeat: Infinity, ease: "linear" },
                          y: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-7 w-7 text-[#edcc16] sm:h-8 sm:w-8"
                        >
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                        </svg>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="absolute left-1/2 top-1/2"
                      style={{ x: "-50%", y: "-50%" }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_22px_60px_rgba(0,0,0,0.18)] sm:h-16 sm:w-16"
                        style={{ transform: "translateX(min(190px,34vw)) rotate(10deg)" }}
                        animate={{ rotate: -360, y: [0, 7, 0] }}
                        transition={{
                          rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                          y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-7 w-7 text-[#8f1a20] sm:h-8 sm:w-8"
                        >
                          <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h8" />
                          <path d="M15 7h6" />
                          <path d="M18 4v6" />
                        </svg>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="absolute left-1/2 top-1/2"
                      style={{ x: "-50%", y: "-50%" }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_22px_60px_rgba(0,0,0,0.18)] sm:h-16 sm:w-16"
                        style={{ transform: "translateX(min(190px,34vw)) rotate(-8deg)" }}
                        animate={{ rotate: -360, y: [0, -5, 0] }}
                        transition={{
                          rotate: { duration: 16, repeat: Infinity, ease: "linear" },
                          y: { duration: 3.9, repeat: Infinity, ease: "easeInOut" },
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-7 w-7 text-[#edcc16] sm:h-8 sm:w-8"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </motion.div>
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
