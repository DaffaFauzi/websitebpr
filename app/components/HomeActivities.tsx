"use client";

import { motion } from "framer-motion";

import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function HomeActivities() {
  const { t } = useI18n();
  return (
    <Section>
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-sm font-medium text-black/50">{t("homeActivities.label")}</div>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            {t("homeActivities.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
            {t("homeActivities.subtitle")}
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[var(--brand-soft)] shadow-[var(--shadow-soft)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(139,29,29,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(11,11,11,0.08),transparent_60%)]" />
              <div className="relative flex aspect-[4/3] w-full items-center justify-center px-5 text-center text-xs font-medium text-black/60">
                {t("homeActivities.placeholder")}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

