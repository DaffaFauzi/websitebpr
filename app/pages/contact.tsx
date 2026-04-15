"use client";

import Link from "next/link";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { PageHero } from "@/app/components/ui/page-hero";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Container, Section } from "@/app/components/ui/section";
import { Textarea } from "@/app/components/ui/textarea";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function ContactPage() {
  const { locale, t } = useI18n();
  const mapsUrl = "https://share.google/GzEWjyau85RyMk1vf";
  const mapsEmbed =
    "https://www.google.com/maps?q=Office%20Tower%20Fontana%20The%20Mansion%20Bougenville%20Fontana%20Jl.%20Trembesi%20Blok%20D%20Pademangan%20Jakarta%20Utara&output=embed";
  const intro =
    locale === "en"
      ? "Share your surety or insurance needs. Our team will help assess your requirements and recommend the right solution."
      : "Sampaikan kebutuhan penjaminan atau asuransi Anda. Tim kami akan membantu analisa kebutuhan dan memberikan rekomendasi solusi terbaik.";
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <PageHero
          breadcrumbLabel={t("common.contact")}
          title={t("contactPage.title")}
          description={t("contactPage.subtitle")}
        />

        <Section>
          <Container>
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="max-w-xl text-pretty text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
                  {intro}
                </p>

                <div className="mt-6 grid gap-5 text-sm text-black/65 sm:grid-cols-2">
                  <div>
                    <div className="font-medium text-black/90">Alamat</div>
                    <div className="mt-1">Office Tower Fontana, The Mansion Bougenville, Lt. 51 unit BF 51 A1</div>
                  </div>
                  <div>
                    <div className="font-medium text-black/90">Telepon</div>
                    <div className="mt-1">+62 82123038542</div>
                  </div>
                  <div>
                    <div className="font-medium text-black/90">Email</div>
                    <div className="mt-1">bprbonding@gmail.com</div>
                  </div>
                  <div>
                    <div className="font-medium text-black/90">Jam Operasional</div>
                    <div className="mt-1">Senin–Jumat, 08.00 WIB –17.00 WIB</div>
                  </div>
                </div>

                <div className="mt-6 rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-8 shadow-[var(--shadow-soft)]">
                  <div className="text-lg font-semibold tracking-tight text-black">Info cepat</div>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-black/65">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--brand-brown)]" />
                      <span>Estimasi respon: 1 hari kerja.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--brand-brown)]" />
                      <span>Siapkan ringkasan kebutuhan, nilai proyek, dan tenggat waktu.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--brand-brown)]" />
                      <span>Kami bantu rekomendasikan produk: Bank Garansi, Surety Bond, Custom Bond, atau Asuransi Umum.</span>
                    </li>
                  </ul>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="outline" className="sm:flex-1">
                      <a href="tel:+6282123038542">Telepon</a>
                    </Button>
                    <Button asChild className="sm:flex-1">
                      <a href="mailto:bprbonding@gmail.com">Email</a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-8 shadow-[var(--shadow-soft)]">
                <div className="text-lg font-semibold tracking-tight text-black">
                  {t("contactPage.sendMessage")}
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="mb-2 text-sm font-medium text-black/70">
                      {t("contactPage.name")}
                    </div>
                    <Input placeholder={t("contactPage.name")} />
                  </div>
                  <div>
                    <div className="mb-2 text-sm font-medium text-black/70">
                      {t("contactPage.email")}
                    </div>
                    <Input type="email" placeholder={t("contactPage.email")} />
                  </div>
                  <div>
                    <div className="mb-2 text-sm font-medium text-black/70">
                      {t("contactPage.phone")}
                    </div>
                    <Input placeholder={t("contactPage.phone")} />
                  </div>
                  <div>
                    <div className="mb-2 text-sm font-medium text-black/70">
                      {t("contactPage.message")}
                    </div>
                    <Textarea placeholder={t("contactPage.message")} />
                  </div>
                  <Button type="button" className="w-full">
                    {t("contactPage.send")}
                  </Button>
                  <div className="text-xs leading-5 text-black/50">
                    Kami akan merespons pesan Anda secepat mungkin.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[var(--shadow-soft)]">
              <div className="aspect-[16/9] w-full">
                <iframe
                  title="Google Maps - BPR Bonding"
                  src={mapsEmbed}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[var(--brand-brown)] underline-offset-4 hover:underline"
              >
                Buka lokasi di Google Maps
              </Link>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
