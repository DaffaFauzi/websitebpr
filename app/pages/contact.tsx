"use client";

import Link from "next/link";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function ContactPage() {
  const { t } = useI18n();
  const mapsUrl = "https://share.google/GzEWjyau85RyMk1vf";
  const mapsEmbed =
    "https://www.google.com/maps?q=Office%20Tower%20Fontana%20The%20Mansion%20Bougenville%20Fontana%20Jl.%20Trembesi%20Blok%20D%20Pademangan%20Jakarta%20Utara&output=embed";
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <section className="bg-[var(--brand-surface)]">
          <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20">
            <div className="rounded-[44px] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-6 py-12 sm:px-12">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 py-2 text-xs font-medium text-black/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-brown)]" />
                    {t("common.contact")}
                  </div>
                  <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-6xl">
                    {t("contactPage.subtitle")}
                  </h1>
                  <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-black/60 sm:text-lg">
                    Sampaikan kebutuhan penjaminan atau asuransi Anda. Tim kami akan
                    membantu analisa kebutuhan dan memberikan rekomendasi solusi
                    terbaik.
                  </p>

                  <div className="mt-10 grid gap-5 text-sm text-black/65 sm:grid-cols-2">
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
                </div>

                <Card className="border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-none">
                  <CardContent className="p-8">
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
                  </CardContent>
                </Card>
              </div>

              <div className="mt-10 overflow-hidden rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[0_18px_50px_-34px_rgba(0,0,0,0.30)]">
                <div className="flex flex-col items-start justify-between gap-4 border-b border-[var(--brand-border)] px-6 py-5 sm:flex-row sm:items-center">
                  <div>
                    <div className="text-sm font-semibold tracking-tight text-black">Lokasi</div>
                    <div className="mt-1 text-sm text-black/60">
                      Office Tower Fontana, The Mansion Bougenville, Lt. 51 unit BF 51 A1
                    </div>
                  </div>
                  <Button asChild variant="outline">
                    <Link href={mapsUrl} target="_blank" rel="noreferrer">
                      Buka Google Maps
                    </Link>
                  </Button>
                </div>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
