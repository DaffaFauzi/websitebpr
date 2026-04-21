"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ChevronLeft, ChevronRight, ImageOff, Maximize2, Search, X } from "lucide-react";
import { useI18n } from "@/app/i18n/I18nProvider";
import { Container, Section } from "@/app/components/ui/section";

type GalleryCategoryKey =
  | "kolaborasi"
  | "kantor"
  | "forum"
  | "interaktif"
  | "pelatihan";

type GalleryCategory = {
  key: GalleryCategoryKey;
  theme: string;
};

type GalleryPhoto = {
  id: string;
  category: GalleryCategoryKey;
  src?: string;
  theme: string;
};

function useIsCoarsePointer() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const apply = () => setValue(Boolean(mq.matches));
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  return value;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function StackedCategoryCard({
  coverSrc,
  label,
  count,
  onOpen,
  previewImages = [],
  active = false,
}: {
  coverSrc?: string;
  label: string;
  count: number;
  onOpen: () => void;
  previewImages?: string[];
  active?: boolean;
}) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const isCoarse = useIsCoarsePointer();
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useI18n();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 20, mass: 0.24 });
  const sy = useSpring(my, { stiffness: 180, damping: 20, mass: 0.24 });

  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mx.set(0);
        my.set(0);
      }}
      onMouseMove={(e) => {
        if (isCoarse) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        mx.set((px - 0.5) * 18);
        my.set((py - 0.5) * 18);
      }}
      className={`group relative block w-full cursor-pointer text-left outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-[var(--brand-brown)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
        active ? "ring-2 ring-[var(--brand-brown)] ring-offset-2 ring-offset-[var(--background)]" : ""
      }`}
    >
      <div className="relative">
        {/* Stacked Layer 1 (Only 1 background layer for 2 total layers) */}
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-[24px] border border-black/10 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.12)]"
          animate={{
            x: hovered ? -18 : -12,
            y: hovered ? 16 : 10,
            rotate: hovered ? -5 : -3,
            scale: hovered ? 1.01 : 1
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
        >
          {previewImages[0] ? (
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <Image
                src={previewImages[0]}
                alt={label}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-center opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          ) : null}
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-black/10 bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-[6px] transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)] group-hover:-translate-y-2"
          style={{
            x: isCoarse ? 0 : sx,
            y: isCoarse ? 0 : sy,
          }}
          animate={{ 
            scale: hovered ? 1.03 : 1,
            y: hovered ? -8 : 0
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
        >
          {coverSrc ? (
            <motion.div
              className="absolute inset-0"
              animate={{ scale: hovered ? 1.15 : 1.05 }}
              transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            >
              {!imageLoaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-200 to-slate-300 rounded-[24px]" />
              )}
              <Image
                src={coverSrc}
                alt={label}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-center"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-400 group-hover:from-black/80" />
            </motion.div>
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-50 text-gray-400 text-sm">
              <div className="flex flex-col items-center gap-2">
                <ImageOff className="h-8 w-8 opacity-20" />
                <span className="font-medium opacity-60">{t("homeGallery.empty")}</span>
              </div>
            </div>
          )}

          <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start">
              <motion.div 
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-[6px]"
                animate={{ scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="h-2 w-2 rounded-full bg-white/80" />
                {label}
              </motion.div>

              <motion.div
                animate={{ 
                  scale: hovered ? 1.1 : 1,
                  rotate: hovered ? 5 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/20 p-2.5 text-white backdrop-blur-[6px]">
                  <Search className="h-4 w-4" />
                </span>
              </motion.div>
            </div>

            <motion.div
              animate={{ y: hovered ? -4 : 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-[6px]">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                {count} {t("homeGallery.photos")}
              </div>
              <div className="text-xs text-white/70">{t("homeGallery.clickToView")}</div>
            </motion.div>
          </div>

          <motion.div
            className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </button>
  );
}

export default function Gallery() {
  const { locale, t } = useI18n();
  const isEn = locale === "en";
  const [openCategory, setOpenCategory] = useState<GalleryCategoryKey | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [paused, setPaused] = useState(false);
  const pauseTimeoutRef = useRef<number | null>(null);

  const categories = useMemo<GalleryCategory[]>(
    () => [
      {
        key: "forum",
        theme:
          "bg-[radial-gradient(circle_at_20%_15%,rgba(139,29,29,0.22),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(11,11,11,0.14),transparent_60%)]",
      },
      {
        key: "kolaborasi",
        theme:
          "bg-[radial-gradient(circle_at_25%_20%,rgba(11,11,11,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(139,29,29,0.18),transparent_60%)]",
      },
      {
        key: "kantor",
        theme:
          "bg-[radial-gradient(circle_at_60%_20%,rgba(139,29,29,0.20),transparent_58%),radial-gradient(circle_at_40%_85%,rgba(11,11,11,0.14),transparent_60%)]",
      },
      {
        key: "pelatihan",
        theme:
          "bg-[radial-gradient(circle_at_30%_25%,rgba(11,11,11,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(139,29,29,0.16),transparent_60%)]",
      },
      {
        key: "interaktif",
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
        return {
          id: `${category}-${idx + 1}`,
          category,
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
          2: "/logos/kolaborasi2.jpeg",
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
          3: "/logos/kolaborasi1.jpeg",
          4: "/logos/kolaborasi3.jpeg",
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
          6: "/logos/interaktif6.jpeg",
          7: "/logos/interaktif7.jpeg",
        }
      ),
      ...make(
        "pelatihan",
        "bg-[radial-gradient(circle_at_30%_22%,rgba(139,29,29,0.18),transparent_56%),radial-gradient(circle_at_80%_75%,rgba(11,11,11,0.12),transparent_62%)]",
        7
      ),
    ];
  }, [categories]);

  const photosByCategory = useMemo(() => {
    const map = new Map<GalleryCategoryKey, GalleryPhoto[]>();
    for (const cat of categories) map.set(cat.key, []);
    for (const p of placeholderPhotos) map.get(p.category)?.push(p);
    return map;
  }, [categories, placeholderPhotos]);

  useEffect(() => {
    if (!openCategory) return;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [openCategory]);

  useEffect(() => {
    if (!openCategory) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (fullscreen) {
          setFullscreen(false);
          return;
        }
        setOpenCategory(null);
        return;
      }
      const items = (photosByCategory.get(openCategory) ?? []).filter(p => p.src);
      if (items.length === 0) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveIndex((idx) => (idx - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActiveIndex((idx) => (idx + 1) % items.length);
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [fullscreen, openCategory, photosByCategory]);

  useEffect(() => {
    if (!openCategory) return;
    if (paused) return;
    const items = (photosByCategory.get(openCategory) ?? []).filter(p => p.src);
    if (items.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveIndex((idx) => (idx + 1) % items.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [openCategory, paused, photosByCategory]);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const activePhotos = useMemo(() => {
    if (!openCategory) return [];
    return (photosByCategory.get(openCategory) ?? []).filter(p => p.src);
  }, [openCategory, photosByCategory]);

  const activePhoto = activePhotos[activeIndex];

  const openModal = (key: GalleryCategoryKey) => {
    const validPhotos = (photosByCategory.get(key) ?? []).filter(p => p.src);
    if (validPhotos.length === 0) return;
    
    setFullscreen(false);
    setPaused(false);
    setActiveIndex(0);
    setOpenCategory(key);
  };

  const schedulePauseRelease = () => {
    if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = window.setTimeout(() => setPaused(false), 3800);
  };

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
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-[-0.02em] text-black sm:text-3xl lg:text-4xl">
            {t("homeGallery.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-6 text-slate-600 sm:text-base">
            {t("homeGallery.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 lg:gap-x-20 lg:gap-y-20">
            {categories.map((cat) => {
              const label = t(`homeGallery.categories.${cat.key}`);
              const validPhotos = (photosByCategory.get(cat.key) ?? []).filter(p => p.src);
              const count = validPhotos.length;
              const coverSrc = validPhotos[0]?.src;
              const previews = validPhotos.slice(0, 3).map((p) => p.src!);
              return (
                <div key={cat.key} className="w-full sm:w-[calc(45%-24px)] lg:w-[calc(30%-40px)] max-w-[320px]">
                  <StackedCategoryCard
                    coverSrc={coverSrc}
                    label={label}
                    count={count}
                    previewImages={previews}
                    active={openCategory === cat.key}
                    onOpen={() => openModal(cat.key)}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>

      <AnimatePresence>
        {openCategory && activePhotos.length > 0 ? (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-[6px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => {
              setOpenCategory(null);
            }}
          >
            <motion.div
              className="relative mx-auto flex h-[100dvh] w-full max-w-6xl flex-col px-4 py-6 sm:px-6"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.36, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              onPointerEnter={() => setPaused(true)}
              onPointerLeave={() => setPaused(false)}
            >
              <div className="flex-none flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-white/60">{t("homeGallery.journeyTitle")}</div>
                  <div className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {t(`homeGallery.categories.${openCategory}`)}
                  </div>
                  <div className="mt-1 text-xs text-white/60">{activePhotos.length} {t("homeGallery.photos")}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setOpenCategory(null);
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-[18px] border border-white/15 bg-white/10 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                    aria-label="Tutup"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-5 flex flex-1 flex-col gap-4 min-h-0">
                <div className="relative mx-auto w-full max-w-[420px] flex-1 min-h-0 overflow-hidden rounded-[28px] border border-white/10 bg-black/25">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_82%_78%,rgba(139,29,29,0.16),transparent_60%)]" />

                    <motion.div
                      className="absolute inset-0"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.12}
                      dragMomentum={false}
                      onDragStart={() => {
                        setPaused(true);
                        schedulePauseRelease();
                      }}
                      onDragEnd={(_, info) => {
                        const items = activePhotos;
                        if (items.length === 0) return;
                        const dx = info.offset.x;
                        if (dx > 70) setActiveIndex((i) => (i - 1 + items.length) % items.length);
                        if (dx < -70) setActiveIndex((i) => (i + 1) % items.length);
                      }}
                      onTap={() => {
                        setPaused(true);
                        schedulePauseRelease();
                      }}
                    >
                      <AnimatePresence mode="wait">
                        {activePhoto ? (
                          <motion.button
                            key={activePhoto.id}
                            type="button"
                            onClick={() => setFullscreen(true)}
                            className="relative h-full w-full cursor-zoom-in"
                            initial={{ opacity: 0, scale: 1.01 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.99 }}
                            transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
                          >
                            <motion.div
                              className="absolute inset-0"
                              initial={{ scale: 1.06 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 4.2, ease: [0.4, 0, 0.2, 1] }}
                            >
                              {activePhoto.src && (
                                <Image
                                  src={activePhoto.src}
                                  alt={t(`homeGallery.categories.${activePhoto.category}`)}
                                  fill
                                  priority
                                  sizes="(min-width: 1024px) 420px, 92vw"
                                  className="object-cover"
                                />
                              )}
                            </motion.div>

                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45),transparent_38%,rgba(0,0,0,0.55))] opacity-70" />

                            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur-[6px]">
                              <span>
                                {activeIndex + 1}/{activePhotos.length}
                              </span>
                              <span className="h-1 w-1 rounded-full bg-white/40" />
                              <span>{t(`homeGallery.categories.${activePhoto.category}`)}</span>
                            </div>

                            <div className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-[6px]">
                              <Maximize2 className="h-3.5 w-3.5" />
                              {t("homeGallery.fullscreen")}
                            </div>
                          </motion.button>
                        ) : null}
                      </AnimatePresence>
                    </motion.div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <div className="h-full w-16 bg-gradient-to-r from-black/55 to-transparent" />
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <div className="h-full w-16 bg-gradient-to-l from-black/55 to-transparent" />
                    </div>

                    <div className="absolute inset-y-0 left-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => {
                          setPaused(true);
                          schedulePauseRelease();
                          const items = activePhotos;
                          if (items.length === 0) return;
                          setActiveIndex((i) => (i - 1 + items.length) % items.length);
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-[18px] border border-white/15 bg-white/10 text-white/85 transition-colors hover:bg-white/15"
                        aria-label={t("homeGallery.prev")}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => {
                          setPaused(true);
                          schedulePauseRelease();
                          const items = activePhotos;
                          if (items.length === 0) return;
                          setActiveIndex((i) => (i + 1) % items.length);
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-[18px] border border-white/15 bg-white/10 text-white/85 transition-colors hover:bg-white/15"
                        aria-label={t("homeGallery.next")}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-none rounded-[24px] border border-white/10 bg-black/20 p-3">
                  <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
                    {activePhotos.map((p, idx) => {
                      const label = t(`homeGallery.categories.${p.category}`);
                      const active = idx === activeIndex;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => {
                            setPaused(true);
                            schedulePauseRelease();
                            setActiveIndex(idx);
                          }}
                          className={`relative h-14 w-20 flex-none overflow-hidden rounded-[16px] border transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            active
                              ? "border-white/35 shadow-[0_14px_40px_-28px_rgba(255,255,255,0.22)]"
                              : "border-white/10 hover:border-white/20"
                          }`}
                          aria-label={label}
                        >
                          {p.src && (
                            <Image
                              src={p.src}
                              alt={label}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/25" />
                          {active ? (
                            <div className="absolute inset-x-2 bottom-2 h-1 rounded-full bg-white/80" />
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-white/55 px-1">
                    <div className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                      {paused ? "Pause" : "Auto"}
                    </div>
                    <div>
                      {activeIndex + 1} / {activePhotos.length}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {fullscreen && activePhoto && activePhoto.src && (
          <motion.div
            className="fixed inset-0 z-[300] bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreen(false)}
          >
            <div className="relative h-full w-full">
              <Image
                src={activePhoto.src}
                alt={t(`homeGallery.categories.${activePhoto.category}`)}
                fill
                className="object-contain"
                priority
              />
              <button
                type="button"
                className="absolute right-6 top-6 h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md"
                onClick={() => setFullscreen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
