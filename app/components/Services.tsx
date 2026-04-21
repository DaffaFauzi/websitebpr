"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function Services() {
  const { t } = useI18n();

  const services = [
    {
      id: "Bank Garansi",
      icon: "/icons/bank-garansi.svg",
    },
    {
      id: "Surety Bond",
      icon: "/icons/surety-bond.svg",
    },
    {
      id: "Custom Bond",
      icon: "/icons/custom-bond.svg",
    },
    {
      id: "Asuransi Umum",
      icon: "/icons/asuransi-umum.svg",
    },
  ];

  const movedTitle = "Custom Bond";
  const movedService = services.find((s) => s.id === movedTitle);
  const rightServices = services.filter((s) => s.id !== movedTitle);

  const renderServiceCard = (s: (typeof services)[number], index: number = 0) => {
    const data = t(`homeServices.list.${s.id}`) as unknown as {
      title: string;
      desc: string;
      items: string[];
    };

    return (
      <motion.div
        key={s.id}
        className="h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="flex h-full flex-col overflow-hidden border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-none transition-transform duration-300 hover:-translate-y-0.5">
          <CardHeader className="p-7 pb-0">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--brand-border)] bg-[var(--brand-soft)]">
                  <Image alt={data.title} src={s.icon} width={24} height={24} />
                </div>
                <div className="text-xl font-semibold tracking-tight text-black">
                  {data.title}
                </div>
              </div>
              <span className="h-2 w-2 rounded-full bg-[var(--brand-brown)]" />
            </div>
            <div className="mt-2 min-h-[3rem] text-sm leading-6 text-black/60 line-clamp-2">
              {data.desc}
            </div>
          </CardHeader>
          <CardContent className="mt-auto p-7 pt-5">
            <div className="flex flex-wrap gap-2">
              {data.items.map((it) => (
                <div
                  key={it}
                  className="rounded-full border border-[var(--brand-border)] bg-[var(--brand-soft)] px-4 py-2 text-xs font-medium text-black/70"
                >
                  {it}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <Section className="overflow-hidden">
      <Container>
        <motion.div
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="text-sm font-medium text-black/50">
              {t("homeServices.label")}
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-black sm:text-5xl">
              {t("homeServices.title")}
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-black/60">
              {t("homeServices.desc")}
            </p>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              {t("homeServices.explore")} <ArrowUpRight />
            </Link>
          </Button>
        </motion.div>

        <div className="mt-8 lg:mt-10 grid gap-6 lg:gap-8 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-6">
            <motion.div
              className="rounded-[36px] border border-[var(--brand-border)] bg-[var(--brand-soft)] p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-sm font-medium text-black/60">
                {t("homeServices.processLabel")}
              </div>
              <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                {t("homeServices.processTitle")}
              </h3>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-black/60">
                {t("homeServices.processDesc")}
              </p>

              <div className="mt-8 space-y-6">
                {(
                  t("homeServices.processSteps") as unknown as {
                    title: string;
                    desc: string;
                  }[]
                ).map((step, idx, arr) => (
                  <div key={step.title} className="relative pl-9">
                    <div className="absolute left-0 top-0">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-brown)] text-xs font-semibold text-white">
                        {idx + 1}
                      </div>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="absolute left-3 top-6 h-[calc(100%+8px)] w-px bg-black/10" />
                    )}
                    <div className="text-sm font-semibold text-black">
                      {step.title}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-black/60">
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {movedService ? (
              <div className="hidden lg:block">
                {renderServiceCard(movedService, 2)}
              </div>
            ) : null}
          </div>

          <div>
            <div className="grid gap-6 lg:hidden">
              {services.map((s, i) => renderServiceCard(s, i))}
            </div>
            <div className="hidden lg:grid lg:gap-6">
              {rightServices.map((s, i) => renderServiceCard(s, i + 3))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="secondary">
            <Link href="/kalkulator-premi">{t("homeServices.calcCta")}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
