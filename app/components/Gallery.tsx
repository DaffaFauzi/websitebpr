"use client";

import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/app/i18n/I18nProvider";
import { Container, Section } from "@/app/components/ui/section";

type GalleryItem = {
  id: string;
  title: string;
  subtitle?: string;
  src?: string;
  className: string;
  theme: string;
};

export default function Gallery() {
  const { t } = useI18n();

  const items = useMemo<GalleryItem[]>(
    () => [
      {
        id: "event-1",
        title: "Workshop & Forum",
        className: "sm:col-span-1 sm:row-span-2",
        theme:
          "bg-[radial-gradient(circle_at_20%_15%,rgba(139,29,29,0.22),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(11,11,11,0.14),transparent_60%)]",
      },
      {
        id: "team-1",
        title: "Kolaborasi Tim",
        className: "sm:col-span-1 sm:row-span-2",
        theme:
          "bg-[radial-gradient(circle_at_25%_20%,rgba(11,11,11,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(139,29,29,0.18),transparent_60%)]",
      },
      {
        id: "award-1",
        title: "Pencapaian",
        className: "sm:col-span-1 sm:row-span-4",
        theme:
          "bg-[radial-gradient(circle_at_60%_20%,rgba(139,29,29,0.20),transparent_58%),radial-gradient(circle_at_40%_85%,rgba(11,11,11,0.14),transparent_60%)]",
      },
      {
        id: "training-1",
        title: "Pelatihan",
        className: "sm:col-span-1 sm:row-span-2",
        theme:
          "bg-[radial-gradient(circle_at_30%_25%,rgba(11,11,11,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(139,29,29,0.16),transparent_60%)]",
      },
      {
        id: "meeting-1",
        title: "Rapat & Review",
        className: "sm:col-span-1 sm:row-span-2",
        theme:
          "bg-[radial-gradient(circle_at_30%_25%,rgba(139,29,29,0.16),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(11,11,11,0.12),transparent_60%)]",
      },
      {
        id: "partners-1",
        title: "Mitra",
        className: "sm:col-span-1 sm:row-span-2",
        theme:
          "bg-[radial-gradient(circle_at_25%_25%,rgba(11,11,11,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(139,29,29,0.18),transparent_60%)]",
      },
      {
        id: "office-1",
        title: "Kantor",
        className: "sm:col-span-1 sm:row-span-4",
        theme:
          "bg-[radial-gradient(circle_at_30%_20%,rgba(139,29,29,0.16),transparent_58%),radial-gradient(circle_at_70%_80%,rgba(11,11,11,0.12),transparent_60%)]",
      },
      {
        id: "handshake-1",
        title: "Kerja Sama",
        className: "sm:col-span-1 sm:row-span-2",
        theme:
          "bg-[radial-gradient(circle_at_35%_30%,rgba(139,29,29,0.16),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(11,11,11,0.10),transparent_60%)]",
      },
    ],
    []
  );

  return (
    <Section className="overflow-hidden">
      <Container>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-soft)] px-4 py-2 text-xs font-semibold text-black/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-brown)]" />
            {t("homeGallery.label")}
          </div>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            {t("homeGallery.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-6 text-black/60 sm:text-base">
            {t("homeGallery.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:[grid-auto-rows:124px]">
            {items.map((it) => (
              <figure
                key={it.id}
                className={`group relative overflow-hidden rounded-[22px] border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[0_18px_50px_-34px_rgba(0,0,0,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_80px_-44px_rgba(0,0,0,0.45)] ${it.className}`}
              >
                {it.src ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={it.src}
                      alt={it.title}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className={`h-full w-full ${it.theme}`}>
                    <div className="h-full w-full bg-[linear-gradient(120deg,rgba(255,255,255,0.30),transparent_42%,rgba(255,255,255,0.18))] opacity-60" />
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.30))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-sm font-semibold text-white">{it.title}</div>
                  {it.subtitle ? (
                    <div className="mt-1 text-xs text-white/80">{it.subtitle}</div>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
