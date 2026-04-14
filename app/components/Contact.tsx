"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function Contact() {
  const { t } = useI18n();
  return (
    <section className="bg-[var(--brand-brown)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <motion.div 
          className="rounded-[44px] border border-white/15 bg-[color-mix(in_oklab,var(--brand-surface),transparent_8%)] px-6 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.14)] sm:px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-10 md:grid-cols-3 md:items-start">
            <div className="md:col-span-2">
              <div className="text-sm font-medium text-black/50">
                {t("contactSection.label")}
              </div>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-6xl">
                {t("contactSection.titleA")}{" "}
                <span className="text-black/60">{t("contactSection.titleB")}</span>{" "}
                {t("contactSection.titleC")}{" "}
                <span className="text-black/60">BPR Bonding</span>
              </h2>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">
                    {t("contactSection.cta")} <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-6 text-black/65">
              <div className="text-black">
                <div className="font-medium text-black/90">BPR Bonding</div>
                <div className="text-black/60">
                  (PT. Buana Perkasa Rajanegara)
                </div>
              </div>
              <div>
                <div className="font-medium text-black/90">Alamat</div>
                <div className="text-black/60">
                  Office Tower Fontana, The Mansion Bougenville, Lt. 51 unit BF 51 A1
                </div>
              </div>
              <div>
                <div className="font-medium text-black/90">Telepon</div>
                <div className="text-black/60">+62 82123038542</div>
              </div>
              <div>
                <div className="font-medium text-black/90">Email</div>
                <div className="text-black/60">bprbonding@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Separator className="bg-black/10" />
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-black/60 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/about" className="hover:text-black">
                {t("contactSection.about")}
              </Link>
              <Link href="/services" className="hover:text-black">
                {t("contactSection.services")}
              </Link>
              <Link href="/contact" className="hover:text-black">
                {t("contactSection.contact")}
              </Link>
            </div>
            <div>© {new Date().getFullYear()} BPR Bonding</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

