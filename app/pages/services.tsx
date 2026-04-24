"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { PageHero } from "@/app/components/ui/page-hero";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

const serviceMeta = [
  {
    key: "bank-garansi",
    imageSrc: "/logos/bg.png",
    iconSrc: "/icons/bank-garansi.svg",
  },
  {
    key: "surety-bond",
    imageSrc: "/logos/surety.png",
    iconSrc: "/icons/surety-bond.svg",
  },
  {
    key: "custom-bond",
    imageSrc: "/logos/cb.png",
    iconSrc: "/icons/custom-bond.svg",
  },
  {
    key: "asuransi-umum",
    imageSrc: "/logos/asuransi.png",
    iconSrc: "/icons/asuransi-umum.svg",
  },
];

export default function ServicesPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <PageHero
          breadcrumbLabel={t("common.services")}
          title={t("servicesPage.heroTitle")}
          description={t("servicesPage.heroDesc")}
        />

        <Section>
          <Container>
            <div className="text-center">
              <div className="flex justify-center">
                <Badge>{t("servicesPage.sectionLabel")}</Badge>
              </div>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                {t("servicesPage.sectionTitle")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
                {t("servicesPage.sectionSubtitle")}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-8">
              {serviceMeta.map((s, index) => {
                const data = t(`servicesPage.list.${s.key}`) as unknown as {
                  title: string;
                  desc: string;
                  items: string[];
                };

                return (
                  <motion.div
                    key={s.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full max-h-[420px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex flex-col justify-between">
                      <div>
                        <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-[var(--brand-soft)]">
                          <Image
                            alt={data.title}
                            src={s.imageSrc}
                            fill
                            sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow backdrop-blur">
                            <Image
                              alt={data.title}
                              src={s.iconSrc}
                              width={18}
                              height={18}
                              className="h-[18px] w-[18px]"
                            />
                          </div>
                        </div>

                        <div className="text-lg font-semibold tracking-[-0.01em] text-black mb-2">
                          {data.title}
                        </div>
                        <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                          {data.desc}
                        </p>

                        <ul className="max-h-[120px] overflow-y-auto pr-2 text-sm text-slate-700 space-y-1">
                          {data.items.map((b) => (
                            <li
                              key={b}
                              className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-red-600"
                            >
                              <span className="leading-6">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center text-sm font-medium text-[var(--brand-brown)]"
                        >
                          {t("homeServices.explore")}
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="text-center">
              <div className="text-balance text-xl font-semibold tracking-tight text-black sm:text-2xl">
                {t("servicesPage.ctaTitle")}
              </div>
              <div className="mt-5 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">{t("servicesPage.ctaButton")}</Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
