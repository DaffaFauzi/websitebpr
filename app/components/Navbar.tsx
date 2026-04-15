"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";
import BrandLogo from "@/app/components/BrandLogo";
import { useI18n } from "@/app/i18n/I18nProvider";
import { Button } from "@/app/components/ui/button";

const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/services", key: "nav.services" },
  { href: "/kalkulator-premi", key: "nav.calculator" },
  { href: "/about", key: "nav.about" },
  { href: "/issuer", key: "nav.issuer" },
  { href: "/contact", key: "nav.contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between gap-3 rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_20%)] px-3 py-3 backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--brand-surface),transparent_35%)]">
          <Link href="/" className="flex items-center gap-3 pl-2">
            <BrandLogo
              kind="full"
              height={28}
              width={112}
              className="drop-shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
              priority
            />
            <span className="sr-only">BPR Bonding</span>
          </Link>

          <nav className="hidden items-center rounded-[var(--radius-pill)] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_30%)] px-2 py-2 md:flex">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-[var(--brand-brown)] text-white"
                      : "text-black/70 hover:text-black hover:bg-black/5"
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <Button asChild size="sm" variant="outline">
                <Link href="/contact">{t("nav.contact")}</Link>
              </Button>
            </div>

            <div className="flex items-center rounded-[var(--radius-pill)] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_30%)] p-1">
              <button
                type="button"
                onClick={() => setLocale("id")}
                aria-label={t("nav.indonesian")}
                className={cn(
                  "rounded-[var(--radius-pill)] px-3 py-1 text-xs font-semibold transition-colors",
                  locale === "id"
                    ? "bg-[var(--brand-brown)] text-white"
                    : "text-black/60 hover:text-black hover:bg-black/5"
                )}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                aria-label={t("nav.english")}
                className={cn(
                  "rounded-[var(--radius-pill)] px-3 py-1 text-xs font-semibold transition-colors",
                  locale === "en"
                    ? "bg-[var(--brand-brown)] text-white"
                    : "text-black/60 hover:text-black hover:bg-black/5"
                )}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_30%)] text-black/70 hover:text-black md:hidden"
              aria-label="Buka menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -12, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -12, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="mx-auto mt-4 w-[calc(100%-2rem)] max-w-6xl rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[var(--shadow-float)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                  <BrandLogo kind="full" height={28} width={112} priority />
                  <span className="sr-only">BPR Bonding</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--brand-border)] bg-[var(--brand-surface)] text-black/70 hover:text-black"
                  aria-label="Tutup menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="border-t border-[var(--brand-border)] px-4 py-4">
                <div className="grid gap-2">
                  {navItems.map((item) => {
                    const active =
                      item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between rounded-[var(--radius-md)] border px-4 py-3 text-sm font-semibold",
                          active
                            ? "border-[color-mix(in_oklab,var(--brand-brown),transparent_55%)] bg-[color-mix(in_oklab,var(--brand-brown),transparent_92%)] text-[var(--brand-brown)]"
                            : "border-[var(--brand-border)] bg-[var(--brand-surface)] text-black/80 hover:bg-black/5"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        <span>{t(item.key)}</span>
                        <span className="text-black/30">{t("common.breadcrumbSeparator")}</span>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 grid gap-2">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      {t("nav.contact")}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
