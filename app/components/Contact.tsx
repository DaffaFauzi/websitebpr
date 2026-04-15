"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function Contact() {
  const { t } = useI18n();
  return (
    <Section variant="brown" className="overflow-hidden">
      <Container>
        <div className="grid gap-6 lg:gap-8 md:grid-cols-3 md:items-start">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm font-semibold text-white/70">{t("contactSection.label")}</div>
            <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              {t("contactSection.titleA")}{" "}
              <span className="text-white/70">{t("contactSection.titleB")}</span>{" "}
              {t("contactSection.titleC")}{" "}
              <span className="text-white/70">BPR Bonding</span>
            </h2>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  {t("contactSection.cta")} <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 text-sm leading-6 text-white/75"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <div className="font-semibold text-white">BPR Bonding</div>
              <div className="text-white/70">(PT. Buana Perkasa Rajanegara)</div>
            </div>
            <div>
              <div className="font-semibold text-white">Alamat</div>
              <div className="text-white/70">
                Office Tower Fontana, The Mansion Bougenville, Lt. 51 unit BF 51 A1
              </div>
            </div>
            <div>
              <div className="font-semibold text-white">Telepon</div>
              <div className="text-white/70">+62 82123038542</div>
            </div>
            <div>
              <div className="font-semibold text-white">Email</div>
              <div className="text-white/70">bprbonding@gmail.com</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8">
          <Separator className="bg-white/15" />
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-white/70 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/about" className="hover:text-white">
              {t("contactSection.about")}
            </Link>
            <Link href="/services" className="hover:text-white">
              {t("contactSection.services")}
            </Link>
            <Link href="/contact" className="hover:text-white">
              {t("contactSection.contact")}
            </Link>
          </div>
          <div>© {new Date().getFullYear()} BPR Bonding</div>
        </div>
      </Container>
    </Section>
  );
}
