"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { PageHero } from "@/app/components/ui/page-hero";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

type GuaranteeType = "bank-garansi" | "surety-bond";
type Duration = "3" | "6" | "9" | "12";
type SuretyBondType = "penawaran" | "uang-muka" | "pelaksanaan" | "pemeliharaan";
type DurationSelection = "" | Duration;

const SURETY_RATE_RULES: Record<SuretyBondType, { min: number; max: number }> = {
  penawaran: { min: 0.00275, max: 0.0035 },
  pelaksanaan: { min: 0.003, max: 0.004 },
  "uang-muka": { min: 0.004, max: 0.005 },
  pemeliharaan: { min: 0.003, max: 0.004 },
};

const DURATION_FACTOR: Record<Duration, number> = {
  "3": 1,
  "6": 2,
  "9": 3,
  "12": 4,
};

const CURRENCY_FORMATTER = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const NUMBER_FORMATTER = new Intl.NumberFormat("id-ID");
const STEPS = [1, 2, 3, 4] as const;

function toCurrency(value: number) {
  return CURRENCY_FORMATTER.format(value);
}

function formatRupiahInput(digits: string) {
  if (!digits) return "";
  return `Rp ${NUMBER_FORMATTER.format(Number(digits))}`;
}

function parseDigits(input: string) {
  return input.replace(/\D/g, "");
}

function FloatingField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] px-3 pb-3 pt-4 shadow-[var(--shadow-soft)] transition-colors focus-within:border-[color-mix(in_oklab,var(--brand-brown),transparent_35%)]">
      <div className="pointer-events-none absolute -top-2 left-3 rounded-full bg-[var(--brand-surface)] px-2 text-xs font-semibold text-black/55">
        {label}
      </div>
      {children}
    </div>
  );
}

export default function PremiumCalculatorPage() {
  const { locale, t } = useI18n();
  const isEn = locale === "en";

  const [step, setStep] = useState<(typeof STEPS)[number]>(1);
  const [guaranteeValueDigits, setGuaranteeValueDigits] = useState("");
  const [guaranteeType, setGuaranteeType] = useState<GuaranteeType>("bank-garansi");
  const [suretyType, setSuretyType] = useState<SuretyBondType>("penawaran");
  const [duration, setDuration] = useState<DurationSelection>("");
  const [animatedMinPremium, setAnimatedMinPremium] = useState(0);
  const [animatedMaxPremium, setAnimatedMaxPremium] = useState(0);

  const guaranteeValue = Number(guaranteeValueDigits);
  const isStep1Valid = Number.isFinite(guaranteeValue) && guaranteeValue > 0;
  const isStep2Valid = Boolean(guaranteeType);
  const isStep3Valid = Boolean(suretyType);
  const isStep4Valid = duration !== "";
  const isComplete = isStep1Valid && isStep2Valid && isStep3Valid && isStep4Valid;

  const rateRule = SURETY_RATE_RULES[suretyType];

  const estimationRange = useMemo<{ min: number; max: number } | null>(() => {
    if (!isComplete) return null;
    const factor = DURATION_FACTOR[duration];
    const min = guaranteeValue * rateRule.min * factor;
    const max = guaranteeValue * rateRule.max * factor;
    return { min, max };
  }, [duration, guaranteeValue, isComplete, rateRule.max, rateRule.min]);

  useEffect(() => {
    if (!estimationRange) return;
    const durationMs = 600;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      setAnimatedMinPremium(Math.round(estimationRange.min * progress));
      setAnimatedMaxPremium(Math.round(estimationRange.max * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [estimationRange]);

  const suretyLabel = t(`calculatorPage.suretyTypes.${suretyType}`);
  const guaranteeTypeLabel = guaranteeType === "surety-bond" ? "Surety Bond" : "Bank Garansi";
  const durationLabel = duration ? `${duration} ${isEn ? "Months" : "Bulan"}` : "-";

  const canGoNext =
    (step === 1 && isStep1Valid) ||
    (step === 2 && isStep2Valid) ||
    (step === 3 && isStep3Valid) ||
    (step === 4 && isStep4Valid);

  const stepHint =
    step === 1
      ? isEn
        ? "Enter guarantee value first."
        : "Masukkan nilai jaminan terlebih dahulu."
      : step === 2
        ? isEn
          ? "Select product type."
          : "Pilih jenis produk."
        : step === 3
          ? isEn
            ? "Select guarantee type."
            : "Pilih jenis jaminan."
          : isEn
            ? "Select duration."
            : "Pilih jangka waktu.";

  const whatsappMessage = isEn
    ? `Hello BPR Bonding, I want to apply. Guarantee value: ${formatRupiahInput(guaranteeValueDigits) || "-"}, product: ${guaranteeTypeLabel}, guarantee type: ${suretyLabel}, duration: ${durationLabel}.`
    : `Halo BPR Bonding, saya ingin ajukan sekarang. Nilai jaminan: ${formatRupiahInput(guaranteeValueDigits) || "-"}, jenis produk: ${guaranteeTypeLabel}, jenis jaminan: ${suretyLabel}, jangka waktu: ${durationLabel}.`;
  const whatsappUrl = `https://wa.me/6281215003232?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <PageHero
          breadcrumbLabel={t("common.calculator")}
          title={t("calculatorPage.title")}
          description={t("calculatorPage.description")}
        />

        <Section>
          <Container width="narrow">
            <Card className="mx-auto max-w-3xl overflow-hidden border-[var(--brand-border)] bg-[linear-gradient(160deg,rgba(255,255,255,0.98)_0%,rgba(139,29,29,0.06)_45%,rgba(255,255,255,0.98)_100%)] shadow-[0_24px_60px_-40px_rgba(139,29,29,0.28)]">
              <CardContent className="space-y-7">
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold tracking-tight text-black sm:text-2xl">
                    {isEn ? "Premium Estimation Wizard" : "Perhitungan Estimasi Premi"}
                  </h2>
                  <p className="text-sm leading-6 text-black/60">
                    {isEn
                      ? "Complete each step in order. Next step unlocks after the current step is valid."
                      : "Isi setiap langkah secara berurutan. Langkah berikutnya akan terbuka setelah langkah saat ini valid."}
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {STEPS.map((item) => {
                      const active = item === step;
                      const done =
                        (item === 1 && isStep1Valid) ||
                        (item === 2 && isStep2Valid) ||
                        (item === 3 && isStep3Valid) ||
                        (item === 4 && isStep4Valid);
                      return (
                        <div
                          key={item}
                          className={`rounded-2xl border px-3 py-2 text-center text-xs font-semibold transition-colors ${
                            active
                              ? "border-[var(--brand-brown)] bg-[var(--brand-brown)] text-white"
                              : done
                                ? "border-[color-mix(in_oklab,var(--brand-brown),transparent_70%)] bg-[var(--brand-soft)] text-[var(--brand-brown)]"
                                : "border-[var(--brand-border)] bg-[var(--brand-surface)] text-black/40"
                          }`}
                        >
                          {isEn ? `Step ${item}` : `Langkah ${item}`}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-4"
                  >
                    {step === 1 ? (
                      <FloatingField label={t("calculatorPage.fields.projectValue")}>
                        <input
                          id="guarantee-value"
                          inputMode="numeric"
                          placeholder={t("calculatorPage.fields.projectPlaceholder")}
                          value={formatRupiahInput(guaranteeValueDigits)}
                          onChange={(e) => {
                            setGuaranteeValueDigits(parseDigits(e.target.value));
                            setAnimatedMinPremium(0);
                            setAnimatedMaxPremium(0);
                          }}
                          className="h-10 w-full border-none bg-transparent px-1 text-base font-semibold text-black outline-none placeholder:text-black/40"
                        />
                      </FloatingField>
                    ) : null}

                    {step === 2 ? (
                      <FloatingField label={t("calculatorPage.fields.guaranteeType")}>
                        <select
                          id="guarantee-type"
                          value={guaranteeType}
                          onChange={(e) => {
                            setGuaranteeType(e.target.value as GuaranteeType);
                            setAnimatedMinPremium(0);
                            setAnimatedMaxPremium(0);
                          }}
                          className="h-10 w-full border-none bg-transparent px-1 text-sm font-medium text-black outline-none"
                        >
                          <option value="bank-garansi">{isEn ? "Bank Guarantee" : "Bank Garansi"}</option>
                          <option value="surety-bond">Surety Bond</option>
                        </select>
                      </FloatingField>
                    ) : null}

                    {step === 3 ? (
                      <FloatingField label={t("calculatorPage.fields.suretyType")}>
                        <select
                          id="surety-type"
                          value={suretyType}
                          onChange={(e) => {
                            setSuretyType(e.target.value as SuretyBondType);
                            setAnimatedMinPremium(0);
                            setAnimatedMaxPremium(0);
                          }}
                          className="h-10 w-full border-none bg-transparent px-1 text-sm font-medium text-black outline-none"
                        >
                          <option value="penawaran">{t("calculatorPage.suretyTypes.penawaran")}</option>
                          <option value="pelaksanaan">{t("calculatorPage.suretyTypes.pelaksanaan")}</option>
                          <option value="uang-muka">{t("calculatorPage.suretyTypes.uang-muka")}</option>
                          <option value="pemeliharaan">{t("calculatorPage.suretyTypes.pemeliharaan")}</option>
                        </select>
                      </FloatingField>
                    ) : null}

                    {step === 4 ? (
                      <FloatingField label={t("calculatorPage.fields.duration")}>
                        <select
                          id="duration"
                          value={duration}
                          onChange={(e) => {
                            setDuration(e.target.value as DurationSelection);
                            setAnimatedMinPremium(0);
                            setAnimatedMaxPremium(0);
                          }}
                          className="h-10 w-full border-none bg-transparent px-1 text-sm font-medium text-black outline-none"
                        >
                          <option value="" disabled>
                            {isEn ? "Select duration" : "Pilih jangka waktu"}
                          </option>
                          <option value="3">{isEn ? "3 Months" : "3 Bulan"}</option>
                          <option value="6">{isEn ? "6 Months" : "6 Bulan"}</option>
                          <option value="9">{isEn ? "9 Months" : "9 Bulan"}</option>
                          <option value="12">{isEn ? "12 Months" : "12 Bulan"}</option>
                        </select>
                      </FloatingField>
                    ) : null}
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep((s) => (s > 1 ? ((s - 1) as (typeof STEPS)[number]) : s))}
                    disabled={step === 1}
                  >
                    {isEn ? "Back" : "Kembali"}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep((s) => (s < 4 ? ((s + 1) as (typeof STEPS)[number]) : s))}
                    disabled={step === 4 || !canGoNext}
                  >
                    {isEn ? "Next" : "Lanjut"}
                  </Button>
                  {!canGoNext ? <span className="text-xs text-red-500">{stepHint}</span> : null}
                </div>

                <div className="rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-5 py-5 shadow-[var(--shadow-soft)]">
                  <div className="text-sm font-semibold text-black/60">{t("calculatorPage.resultLabel")}</div>
                  <div className="mt-2 text-3xl font-bold tracking-tight text-[var(--brand-brown)] sm:text-4xl">
                    {estimationRange
                      ? `${toCurrency(animatedMinPremium)} - ${toCurrency(animatedMaxPremium)}`
                      : isEn
                        ? "Select duration (Step 4) to see estimation."
                        : "Selesaikan Semua Langkah Untuk Mengetahui Estimasi Premi."}
                  </div>
                  <div className="mt-3 grid gap-2 text-xs text-black/60 sm:grid-cols-2">
                    <div>{isEn ? "Guarantee Value" : "Nilai Jaminan"}: {formatRupiahInput(guaranteeValueDigits) || "-"}</div>
                    <div>{isEn ? "Product Type" : "Jenis Produk"}: {guaranteeTypeLabel}</div>
                    <div>{isEn ? "Guarantee Type" : "Jenis Jaminan"}: {suretyLabel}</div>
                    <div>{isEn ? "Duration" : "Jangka Waktu"}: {durationLabel}</div>
                    {estimationRange ? (
                      <>
                      </>
                    ) : null}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-soft)] px-3 py-1 text-xs font-medium text-black/70">
                    <Info className="h-3.5 w-3.5" />
                    {isEn
                      ? "Rate may vary based on bank policy."
                      : "Rate dapat bervariasi sesuai kebijakan asuransi dan bank."}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button asChild size="lg">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      {isEn ? "Apply Now" : "Ajukan Sekarang"}
                    </a>
                  </Button>
                </div>

                <p className="text-xs leading-5 text-black/50">{t("calculatorPage.disclaimer")}</p>
              </CardContent>
            </Card>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
