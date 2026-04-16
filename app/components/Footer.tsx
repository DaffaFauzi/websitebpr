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
  Youtube,
} from "lucide-react";

import { Container } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

const sections = [
  {
    titleKey: "footer.company",
    links: [
      { href: "/about", labelKey: "footer.linkAbout" },
      { href: "/issuer", labelKey: "nav.issuer" },
      { href: "/contact", labelKey: "nav.contact" },
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
    titleKey: "footer.legal",
    links: [
      { href: "/cookies", labelKey: "footer.linkCookiePolicy" },
    ],
  },
];

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-[var(--brand-black)] text-white">
      <Container spacing="none" className="py-6 lg:py-8">
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-white px-3 py-2">
                <BrandLogo kind="full" height={30} width={120} priority />
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
              {t("footer.desc")}
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/60" />
                <span>bprbonding@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/60" />
                <span>+62 812 1500 3232</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-white/60" />
                <span>Office Tower Fontana, The Mansion Bougenville</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-8 flex items-center gap-3">
          {[
            { Icon: Facebook, href: "https://www.facebook.com/bprbonding" },
            { Icon: Instagram, href: "https://www.instagram.com/bprbonding" },
            { Icon: Linkedin, href: "https://www.linkedin.com/company/bprbonding" },
            { Icon: Youtube, href: "https://www.youtube.com/@bprbonding" },
          ].map(({ Icon, href }) => (
            <Link
              key={href}
              href={href}
              className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-white/10 bg-white/5 text-white/70 transition-colors hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <BrandLogo kind="mark" height={22} width={22} />
            <span>© {new Date().getFullYear()} BPR Bonding. {t("footer.copyright")}</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/cookies" className="hover:text-white">
              {t("footer.linkCookiePolicy")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

