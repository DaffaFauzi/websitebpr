"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import EntityLogo from "@/app/components/EntityLogo";
import { PageHero } from "@/app/components/ui/page-hero";
import { Badge } from "@/app/components/ui/badge";
import { getLogoById, getLogosByCategory, logoCategories } from "@/app/data/logoCatalog";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function IssuerPage() {
  const { locale, t } = useI18n();
  const jastan = getLogoById("jastan");
  const categorySubtitles: Record<
    (typeof logoCategories)[number]["key"],
    { id: string; en: string }
  > = {
    "bank-pemerintah": {
      id: "Mitra bank nasional yang mendukung layanan penjaminan.",
      en: "National banks supporting guarantee services.",
    },
    "bank-swasta": {
      id: "Mitra bank swasta untuk kebutuhan penjaminan bisnis.",
      en: "Private banks supporting business guarantees.",
    },
    "bank-daerah": {
      id: "Mitra bank daerah untuk jangkauan layanan yang luas.",
      en: "Regional banks enabling broader coverage.",
    },
    "asuransi-bumn": {
      id: "Mitra BUMN dan anak BUMN untuk asuransi dan penjaminan.",
      en: "SOE partners for insurance and surety.",
    },
    "asuransi-swasta": {
      id: "Mitra asuransi dan penjaminan swasta yang terpercaya.",
      en: "Trusted private insurance and surety partners.",
    },
  };
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <PageHero
          breadcrumbLabel={t("issuer.title")}
          title={t("issuer.title")}
          description={t("issuer.heroDesc")}
        />

        <Section>
          <Container>
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--brand-border)] bg-[color-mix(in_oklab,var(--brand-surface),transparent_2%)] shadow-[var(--shadow-soft)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(139,29,29,0.10),transparent_58%),radial-gradient(circle_at_78%_70%,rgba(11,11,11,0.06),transparent_62%)]" />
              <div className="relative grid gap-8 px-6 py-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center lg:px-10">
                <div>
                  <div className="inline-flex">
                    <Badge className="border-[color-mix(in_oklab,var(--brand-brown),transparent_65%)] bg-[color-mix(in_oklab,var(--brand-brown),transparent_92%)] text-[var(--brand-brown)]">
                      {t("issuer.partnerLabel")}
                    </Badge>
                  </div>
                  <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                    {t("issuer.partnerName")}
                  </h2>
                  <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-black/65 sm:text-base">
                    {t("issuer.partnerDesc")}
                  </p>

                  <ul className="mt-5 grid gap-2 text-sm text-black/70 sm:grid-cols-2">
                    {[
                      locale === "en" ? "Verified partners" : "Mitra terverifikasi",
                      locale === "en" ? "National coverage" : "Jangkauan nasional",
                      locale === "en" ? "Clear coordination" : "Koordinasi jelas",
                      locale === "en" ? "Operational support" : "Dukungan operasional",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--brand-brown)]" />
                        <span className="leading-6">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:border-l lg:border-[var(--brand-border)] lg:pl-10">
                  <div className="mx-auto max-w-sm rounded-[var(--radius-xl)] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 shadow-[var(--shadow-float)]">
                    <div className="flex justify-center">
                      <div className="h-28 w-full sm:h-32">
                        {jastan ? <EntityLogo meta={jastan} size={512} rounded="2xl" /> : null}
                      </div>
                    </div>
                    <div className="mt-4 text-center text-xs font-medium text-black/55">
                      PT Jasa Tania Tbk (Jastan)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-10">
              {logoCategories.map((cat) => {
                const title = locale === "en" ? cat.labelEn : cat.labelId;
                const subtitle = locale === "en" ? categorySubtitles[cat.key].en : categorySubtitles[cat.key].id;
                const items = getLogosByCategory(cat.key);

                return (
                  <div key={cat.key}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-black">
                          {title}
                        </h3>
                        <div className="mt-2 h-px w-12 bg-black/10" />
                        <p className="mt-3 max-w-3xl text-sm leading-6 text-black/60">
                          {subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
                      {items.map((meta) => (
                        <div
                          key={meta.id}
                          className="group flex h-24 items-center justify-center rounded-[var(--radius-lg)] border border-black/10 bg-[var(--brand-surface)] px-5 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[var(--shadow-float)] sm:h-28"
                        >
                          <div className="h-12 w-full sm:h-14">
                            <EntityLogo meta={meta} size={256} rounded="xl" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
