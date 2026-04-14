"use client";

import Link from "next/link";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import EntityLogo from "@/app/components/EntityLogo";
import IssuerSections from "@/app/components/IssuerSections";
import { getLogoById } from "@/app/data/logoCatalog";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function IssuerPage() {
  const { t } = useI18n();
  const jastan = getLogoById("jastan");
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[var(--brand-soft)]">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-0 h-full w-[520px] rotate-[20deg] bg-[repeating-linear-gradient(135deg,rgba(139,29,29,0.12)_0_6px,transparent_6px_14px)] opacity-60" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-14 sm:px-6 sm:pt-28">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <div className="text-sm font-medium text-black/50">{t("issuer.title")}</div>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  {t("issuer.title")}
                </h1>
              </div>
              <div className="text-sm text-black/60">
                <Link href="/" className="hover:text-black">
                  {t("common.home")}
                </Link>
                <span className="mx-2 text-black/30">›</span>
                <span className="text-[var(--brand-brown)]">{t("issuer.title")}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <div className="relative overflow-hidden rounded-[36px] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-6 py-10 shadow-[0_28px_80px_-54px_rgba(0,0,0,0.45)] sm:px-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(139,29,29,0.18),transparent_55%),radial-gradient(circle_at_75%_60%,rgba(11,11,11,0.10),transparent_55%)]" />
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[color-mix(in_oklab,var(--brand-brown),transparent_78%)] blur-2xl" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--brand-brown),transparent_65%)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_25%)] px-4 py-2 text-xs font-semibold text-[var(--brand-brown)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-brown)]" />
                    {t("issuer.partnerLabel")}
                  </div>
                  <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                    {t("issuer.partnerName")}
                  </h2>
                  <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-black/65 sm:text-base">
                    {t("issuer.partnerDesc")}
                  </p>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="group relative overflow-hidden rounded-[32px] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-6 py-6 shadow-[0_24px_70px_-46px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-0.5 sm:px-8 sm:py-7">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(139,29,29,0.18),transparent_58%),radial-gradient(circle_at_80%_70%,rgba(11,11,11,0.10),transparent_55%)] opacity-90" />
                    <div className="relative">
                      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-white/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-black/60 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-brown)]" />
                        {t("issuer.partnerLabel")}
                      </div>

                      <div className="mt-5 flex justify-center">
                        <div className="relative h-36 w-36 overflow-hidden rounded-[28px] border border-[color-mix(in_oklab,var(--brand-brown),transparent_82%)] bg-white/70 p-5 shadow-[0_18px_60px_-44px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:h-48 sm:w-48 sm:p-7">
                          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.75),transparent_55%)] opacity-70" />
                          <div className="relative h-full w-full">
                            {jastan ? <EntityLogo meta={jastan} size={512} rounded="2xl" /> : null}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-center text-xs font-medium text-black/55">
                        PT Jasa Tania Tbk (Jastan)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <IssuerSections />
      </main>
      <Footer />
    </div>
  );
}
