import Link from "next/link";

import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

export function PageHero({
  title,
  description,
  breadcrumbLabel,
}: {
  title: string;
  description: string;
  breadcrumbLabel: string;
}) {
  const { t } = useI18n();

  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(139,29,29,0.10),transparent_52%),radial-gradient(circle_at_78%_62%,rgba(11,11,11,0.06),transparent_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.70),transparent_30%,rgba(255,255,255,0.75))]" />
      </div>
      <Container spacing="section" className="relative">
        <div className="text-sm font-medium text-black/50">
          <Link href="/" className="hover:text-black">
            {t("common.home")}
          </Link>
          <span className="mx-2 text-black/30">{t("common.breadcrumbSeparator")}</span>
          <span className="text-black/60">{breadcrumbLabel}</span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          {title}
        </h1>
        <div className="mt-3 h-px w-16 bg-[color-mix(in_oklab,var(--brand-brown),transparent_65%)]" />
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
          {description}
        </p>
      </Container>
    </Section>
  );
}

