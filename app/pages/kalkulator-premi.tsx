"use client";

import { useMemo, useState } from "react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { PageHero } from "@/app/components/ui/page-hero";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

type GuaranteeType = "bank-garansi" | "surety-bond";
type Duration = "1" | "3" | "6" | "12";

const RATE_BY_GUARANTEE: Record<GuaranteeType, { min: number; max: number }> = {
  "bank-garansi": { min: 0.005, max: 0.015 },
  "surety-bond": { min: 0.003, max: 0.01 },
};

const DURATION_FACTOR: Record<Duration, number> = {
  "1": 0.25,
  "3": 0.5,
  "6": 0.75,
  "12": 1,
};

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function toCurrency(value: number) {
  return currencyFormatter.format(value);
}

export default function PremiumCalculatorPage() {
  const { locale, t } = useI18n();
  const [projectValueInput, setProjectValueInput] = useState("");
  const [guaranteeType, setGuaranteeType] = useState<GuaranteeType>("bank-garansi");
  const [duration, setDuration] = useState<Duration>("12");

  const projectValue = Number(projectValueInput);
  const hasProjectValue = Number.isFinite(projectValue) && projectValue > 0;

  const estimation = useMemo(() => {
    if (!hasProjectValue) return null;
    const rate = RATE_BY_GUARANTEE[guaranteeType];
    const factor = DURATION_FACTOR[duration];
    const min = projectValue * rate.min * factor;
    const max = projectValue * rate.max * factor;
    return { min, max };
  }, [duration, guaranteeType, hasProjectValue, projectValue]);

  const resultText = estimation
    ? `${toCurrency(estimation.min)} - ${toCurrency(estimation.max)}`
    : locale === "en"
      ? "Enter project value to see estimation."
      : "Masukkan nilai proyek untuk melihat estimasi.";

  const whatsappMessage =
    locale === "en"
      ? "Hello BPR Bonding, I would like to consult my premium estimation."
      : "Halo BPR Bonding, saya ingin konsultasi estimasi premi saya.";

  const whatsappUrl = `https://wa.me/6282123038542?text=${encodeURIComponent(whatsappMessage)}`;

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
            <Card className="mx-auto max-w-2xl">
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight text-black sm:text-2xl">
                    {locale === "en" ? "Premium Estimation" : "Estimasi Premi"}
                  </h2>
                  <p className="text-sm leading-6 text-black/60">
                    {locale === "en"
                      ? "Use this simple calculator to estimate your guarantee premium range."
                      : "Gunakan kalkulator sederhana ini untuk memperkirakan rentang premi penjaminan Anda."}
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="project-value" className="mb-2 block text-sm font-medium text-black/75">
                      {t("calculatorPage.fields.projectValue")}
                    </label>
                    <Input
                      id="project-value"
                      type="number"
                      min="0"
                      placeholder={t("calculatorPage.fields.projectPlaceholder")}
                      value={projectValueInput}
                      onChange={(e) => setProjectValueInput(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="guarantee-type" className="mb-2 block text-sm font-medium text-black/75">
                        {t("calculatorPage.fields.guaranteeType")}
                      </label>
                      <select
                        id="guarantee-type"
                        value={guaranteeType}
                        onChange={(e) => setGuaranteeType(e.target.value as GuaranteeType)}
                        className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-black outline-none focus:border-[var(--brand-brown)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--brand-brown),transparent_85%)]"
                      >
                        <option value="bank-garansi">
                          {locale === "en" ? "Bank Guarantee" : "Bank Garansi"}
                        </option>
                        <option value="surety-bond">Surety Bond</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="duration" className="mb-2 block text-sm font-medium text-black/75">
                        {t("calculatorPage.fields.duration")}
                      </label>
                      <select
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value as Duration)}
                        className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-black outline-none focus:border-[var(--brand-brown)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--brand-brown),transparent_85%)]"
                      >
                        <option value="1">{locale === "en" ? "1 Month" : "1 Bulan"}</option>
                        <option value="3">{locale === "en" ? "3 Months" : "3 Bulan"}</option>
                        <option value="6">{locale === "en" ? "6 Months" : "6 Bulan"}</option>
                        <option value="12">{locale === "en" ? "12 Months" : "12 Bulan"}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="rounded-[var(--radius-md)] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-5 py-4">
                  <div className="text-sm font-medium text-black/70">{t("calculatorPage.resultLabel")}</div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight text-[var(--brand-brown)] sm:text-3xl">
                    {resultText}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button asChild size="lg">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      {t("calculatorPage.cta")}
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
