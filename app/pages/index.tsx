"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Services from "@/app/components/Services";
import EntityLogo from "@/app/components/EntityLogo";
import { getLogosByCategory } from "@/app/data/logoCatalog";
import { Button } from "@/app/components/ui/button";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function IndexPage() {
  const { locale, t } = useI18n();
  const isEn = locale === "en";
  const issuerPreview = useMemo(
    () => [
      ...getLogosByCategory("bank-pemerintah").slice(0, 6),
      ...getLogosByCategory("asuransi-bumn").slice(0, 6),
    ],
    []
  );

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <Hero />
        <Services />

        <Section>
          <Container>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-sm font-medium text-black/50">{t("common.issuer")}</div>
                <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-black sm:text-5xl">
                  {isEn ? "Partner issuers you can rely on." : "Penerbit rekanan yang dapat diandalkan."}
                </h2>
                <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-black/60">
                  {isEn
                    ? "We work with banks and insurance issuers to support your guarantee needs."
                    : "Kami bekerja sama dengan bank dan asuransi penerbit untuk mendukung kebutuhan penjaminan Anda."}
                </p>
              </div>
              <Button asChild size="lg" variant="outline">
                <Link href="/issuer">
                  {isEn ? "View Issuers" : "Lihat Penerbit"} <ArrowUpRight />
                </Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {issuerPreview.map((x) => (
                <div
                  key={x.id}
                  className="flex h-20 items-center justify-center rounded-[var(--radius-md)] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-3 shadow-[var(--shadow-soft)]"
                >
                  <EntityLogo meta={x} size={256} rounded="2xl" />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

