"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import BrandLogo from "@/app/components/BrandLogo";
import { useI18n } from "@/app/i18n/I18nProvider";

const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/services", key: "nav.services" },
  { href: "/about", key: "nav.about" },
  { href: "/issuer", key: "nav.issuer" },
  { href: "/contact", key: "nav.contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-3xl border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_20%)] px-3 py-3 backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--brand-surface),transparent_35%)]">
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

          <nav className="hidden items-center rounded-full border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_30%)] px-2 py-2 md:flex">
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

          <div className="flex items-center rounded-full border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_30%)] p-1">
            <button
              type="button"
              onClick={() => setLocale("id")}
              aria-label={t("nav.indonesian")}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
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
                "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                locale === "en"
                  ? "bg-[var(--brand-brown)] text-white"
                  : "text-black/60 hover:text-black hover:bg-black/5"
              )}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

