"use client";

import Link from "next/link";
import BrandLogo from "@/app/components/BrandLogo";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

import { useI18n } from "@/app/i18n/I18nProvider";

const sections = [
  {
    titleKey: "footer.company",
    links: [
      { href: "/about", labelKey: "footer.linkAbout" },
      { href: "/about", labelKey: "footer.linkTeam" },
      { href: "/about", labelKey: "footer.linkCareers" },
      { href: "/about", labelKey: "footer.linkPress" },
    ],
  },
  {
    titleKey: "footer.products",
    links: [
      { href: "/services", labelKey: "footer.linkBankGaransi" },
      { href: "/services", labelKey: "footer.linkSurety" },
      { href: "/services", labelKey: "footer.linkCustomBond" },
      { href: "/services", labelKey: "footer.linkGeneralInsurance" },
    ],
  },
  {
    titleKey: "footer.resources",
    links: [
      { href: "/services", labelKey: "footer.linkArticles" },
      { href: "/services", labelKey: "footer.linkFaq" },
      { href: "/contact", labelKey: "footer.linkSupport" },
      { href: "/", labelKey: "footer.linkPartners" },
    ],
  },
  {
    titleKey: "footer.legal",
    links: [
      { href: "/privacy", labelKey: "footer.linkPrivacyPolicy" },
      { href: "/terms", labelKey: "footer.linkTerms" },
      { href: "/cookies", labelKey: "footer.linkCookiePolicy" },
      { href: "/disclaimer", labelKey: "footer.linkDisclaimer" },
    ],
  },
];

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-[linear-gradient(180deg,var(--brand-navy),var(--brand-navy-2))] text-white">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo
                kind="full"
                height={36}
                width={140}
                className="drop-shadow-[0_18px_70px_rgba(0,0,0,0.35)]"
                priority
              />
              <div>
                <div className="text-sm text-white/60">{t("footer.tagline")}</div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
              {t("footer.desc")}
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/60" />
                <span>info@bprbonding.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/60" />
                <span>+62 21 0000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-white/60" />
                <span>123 Insurance Plaza</span>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((s) => (
              <div key={s.titleKey}>
                <div className="text-sm font-semibold text-white">{t(s.titleKey)}</div>
                <div className="mt-4 space-y-3 text-sm text-white/65">
                  {s.links.map((l) => (
                    <Link
                      key={`${s.titleKey}-${l.labelKey}`}
                      href={l.href}
                      className="block transition-colors hover:text-white"
                    >
                      {t(l.labelKey)}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 backdrop-blur sm:px-10 sm:py-10">
          <div className="text-center">
            <div className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {t("footer.stayUpdated")}
            </div>
            <div className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/60">
              {t("footer.newsletterDesc")}
            </div>
          </div>

          <form
            className="mx-auto mt-7 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            action="#"
          >
            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              className="h-11 w-full rounded-full border border-white/10 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-white/40 focus:border-[color-mix(in_oklab,var(--brand-accent),white_15%)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--brand-accent),transparent_80%)]"
            />
            <button
              type="button"
              className="h-11 shrink-0 rounded-full bg-[var(--brand-accent)] px-7 text-sm font-semibold text-black transition-colors hover:bg-[color-mix(in_oklab,var(--brand-accent),white_10%)]"
            >
              {t("footer.subscribe")}
            </button>
          </form>

          <div className="mt-8 flex justify-center gap-3">
            {[
              { Icon: Facebook, href: "https://facebook.com" },
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Instagram, href: "https://instagram.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Youtube, href: "https://youtube.com" },
            ].map(({ Icon, href }) => (
              <Link
                key={href}
                href={href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/60 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <BrandLogo kind="mark" height={22} width={22} />
            <span>
              © {new Date().getFullYear()} BPR Bonding. {t("footer.copyright")}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="hover:text-white">
              {t("footer.terms")}
            </Link>
            <Link href="/cookies" className="hover:text-white">
              {t("footer.cookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

