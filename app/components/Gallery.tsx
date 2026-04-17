"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/app/i18n/I18nProvider";
import { Container, Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";

type GalleryCategoryKey =
  | "kolaborasi"
  | "kantor"
  | "forum"
  | "interaktif"
  | "pelatihan";

type GalleryCategory = {
  key: GalleryCategoryKey;
  labelId: string;
  labelEn: string;
  className: string;
  theme: string;
};

type GalleryPhoto = {
  id: string;
  category: GalleryCategoryKey;
  labelId: string;
  labelEn: string;
  src?: string;
  theme: string;
};

export default function Gallery() {
  const { locale, t } = useI18n();
  const isEn = locale === "en";
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryKey | null>(null);
  const photosRef = useRef<HTMLDivElement | null>(null);

  const categories = useMemo<GalleryCategory[]>(
    () => [
      {
        key: "forum",
        labelId: "Forum",
        labelEn: "Forum",
        className: "sm:col-span-1 sm:row-span-2",
        theme:
          "bg-[radial-gradient(circle_at_20%_15%,rgba(139,29,29,0.22),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(11,11,11,0.14),transparent_60%)]",
      },
      {
        key: "kolaborasi",
        labelId: "Kolaborasi Tim / Gathering",
        labelEn: "Team Collaboration / Gathering",
        className: "sm:col-span-1 sm:row-span-2",
        theme:
          "bg-[radial-gradient(circle_at_25%_20%,rgba(11,11,11,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(139,29,29,0.18),transparent_60%)]",
      },
      {
        key: "kantor",
        labelId: "Kantor / Office",
        labelEn: "Office",
        className: "sm:col-span-1 sm:row-span-4",
        theme:
          "bg-[radial-gradient(circle_at_60%_20%,rgba(139,29,29,0.20),transparent_58%),radial-gradient(circle_at_40%_85%,rgba(11,11,11,0.14),transparent_60%)]",
      },
      {
        key: "pelatihan",
        labelId: "Pelatihan & Pengembangan",
        labelEn: "Training & Development",
        className: "sm:col-span-1 sm:row-span-2",
        theme:
          "bg-[radial-gradient(circle_at_30%_25%,rgba(11,11,11,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(139,29,29,0.16),transparent_60%)]",
      },
      {
        key: "interaktif",
        labelId: "Kegiatan Interaktif / Fun Activities",
        labelEn: "Interactive Activities / Fun Activities",
        className: "sm:col-span-1 sm:row-span-2",
        theme:
          "bg-[radial-gradient(circle_at_30%_25%,rgba(139,29,29,0.16),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(11,11,11,0.12),transparent_60%)]",
      },
    ],
    []
  );

  const placeholderPhotos = useMemo<GalleryPhoto[]>(() => {
    const make = (
      category: GalleryCategoryKey,
      baseTheme: string,
      count: number,
      srcMap: Record<number, string> = {}
    ) =>
      Array.from({ length: count }).map((_, idx) => {
        const cat = categories.find((x) => x.key === category);
        return {
          id: `${category}-${idx + 1}`,
          category,
          labelId: cat?.labelId ?? category,
          labelEn: cat?.labelEn ?? category,
          src: srcMap[idx + 1],
          theme: baseTheme,
        };
      });

    return [
      ...make(
        "kolaborasi",
        "bg-[radial-gradient(circle_at_20%_20%,rgba(139,29,29,0.20),transparent_56%),radial-gradient(circle_at_80%_75%,rgba(11,11,11,0.12),transparent_62%)]",
        7,
        {
          1: "/logos/kolaborasi1.jpeg",
          2: "/logos/kolaborasi2.jpeg",
          3: "/logos/kolaborasi3.jpeg",
          4: "/logos/kolaborasi4.jpeg",
          5: "/logos/kolaborasi5.jpeg",
        }
      ),
      ...make(
        "kantor",
        "bg-[radial-gradient(circle_at_30%_20%,rgba(11,11,11,0.12),transparent_58%),radial-gradient(circle_at_78%_72%,rgba(139,29,29,0.18),transparent_62%)]",
        7
      ),
      ...make(
        "forum",
        "bg-[radial-gradient(circle_at_22%_18%,rgba(139,29,29,0.18),transparent_56%),radial-gradient(circle_at_76%_78%,rgba(11,11,11,0.12),transparent_62%)]",
        7,
        {
          1: "/logos/forum1.jpeg",
          2: "/logos/forum2.JPG",
        }
      ),
      ...make(
        "interaktif",
        "bg-[radial-gradient(circle_at_25%_20%,rgba(11,11,11,0.12),transparent_56%),radial-gradient(circle_at_78%_76%,rgba(139,29,29,0.16),transparent_62%)]",
        7,
        {
          1: "/logos/interaktif1.jpg",
          2: "/logos/interaktif2.jpg",
          3: "/logos/interaktif3.jpg",
          4: "/logos/interaktif4.jpg",
          5: "/logos/interaktif5.jpeg",
        }
      ),
      ...make(
        "pelatihan",
        "bg-[radial-gradient(circle_at_30%_22%,rgba(139,29,29,0.18),transparent_56%),radial-gradient(circle_at_80%_75%,rgba(11,11,11,0.12),transparent_62%)]",
        7
      ),
    ];
  }, [categories]);

  const visiblePhotos = useMemo(() => {
    if (!activeCategory) return [];
    return placeholderPhotos.filter((x) => x.category === activeCategory);
  }, [activeCategory, placeholderPhotos]);

  useEffect(() => {
    if (!activeCategory) return;
    photosRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeCategory]);

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
            {categories.map((cat) => {
              const label = isEn ? cat.labelEn : cat.labelId;
              const isActive = activeCategory === cat.key;

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory((prev) => (prev === cat.key ? null : cat.key))}
                  className={`group relative overflow-hidden rounded-[22px] border bg-[var(--brand-surface)] text-left shadow-[0_18px_50px_-34px_rgba(0,0,0,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_80px_-44px_rgba(0,0,0,0.45)] ${
                    isActive
                      ? "border-[color-mix(in_oklab,var(--brand-brown),transparent_55%)]"
                      : "border-[var(--brand-border)]"
                  } ${cat.className}`}
                >
                  <div className={`h-full w-full ${cat.theme}`}>
                    <div className="h-full w-full bg-[linear-gradient(120deg,rgba(255,255,255,0.30),transparent_42%,rgba(255,255,255,0.18))] opacity-60" />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.36))] opacity-35 transition-opacity duration-300 group-hover:opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="inline-flex rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-black/55">
                      {label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div ref={photosRef} className="mt-8">
          {activeCategory ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-medium text-black/55">
                    {isEn ? "Selected category" : "Kategori dipilih"}
                  </div>
                  <div className="mt-2 text-xl font-semibold tracking-tight text-black">
                    {(isEn
                      ? categories.find((c) => c.key === activeCategory)?.labelEn
                      : categories.find((c) => c.key === activeCategory)?.labelId) ?? ""}
                  </div>
                </div>
                <Button variant="outline" onClick={() => setActiveCategory(null)}>
                  <ArrowLeft /> {isEn ? "Back to categories" : "Kembali ke kategori"}
                </Button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visiblePhotos.map((photo) => {
                  const label = isEn ? photo.labelEn : photo.labelId;
                  return (
                    <div
                      key={photo.id}
                      className="group relative aspect-[4/3] overflow-hidden rounded-[22px] border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[0_18px_50px_-34px_rgba(0,0,0,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_80px_-44px_rgba(0,0,0,0.45)]"
                    >
                      {photo.src ? (
                        <Image
                          src={photo.src}
                          alt={label}
                          fill
                          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className={`h-full w-full ${photo.theme}`}>
                          <div className="h-full w-full bg-[linear-gradient(120deg,rgba(255,255,255,0.30),transparent_42%,rgba(255,255,255,0.18))] opacity-60" />
                        </div>
                      )}

                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.32))] opacity-25 transition-opacity duration-300 group-hover:opacity-45" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="inline-flex rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-[2px]">
                          {label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
