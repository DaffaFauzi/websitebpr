"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

import { Button } from "@/app/components/ui/button";
import { Container, Section } from "@/app/components/ui/section";
import BrandLogo from "@/app/components/BrandLogo";
import { useI18n } from "@/app/i18n/I18nProvider";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function About() {
  const { t } = useI18n();

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <div className="text-sm font-medium text-black/50 tracking-wide">
                {t("homeAbout.label")}
              </div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-balance text-4xl sm:text-5xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-black">
              {t("homeAbout.title")}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base leading-relaxed text-black/70">
              {t("aboutPage.contentA")}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-2">
              <Button asChild size="lg" className="bg-[var(--brand-brown)] hover:bg-[var(--brand-brown)]/90 rounded-full px-8">
                <Link href="/about">
                  {t("homeAbout.learnMore")} <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Logo/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="h-full min-h-[300px] sm:min-h-[400px] rounded-[32px] border border-[var(--brand-border)] bg-gradient-to-br from-[#f2eee8] to-[#e4ded5] flex items-center justify-center p-8 shadow-[var(--shadow-soft)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_100%)]" />
            <div className="relative z-10 scale-[1.5] sm:scale-[2]">
              <BrandLogo />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Visi & Misi */}
        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Vision Column */}
          <motion.div variants={itemVariants}>
            <div className="h-full rounded-[32px] border border-[var(--brand-border)] bg-white p-8 sm:p-10 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="text-xl font-bold text-black mb-6">Visi</h3>
              <p className="text-base text-black/70 leading-relaxed font-normal">
                {t("homeAbout.visionDesc")}
              </p>
            </div>
          </motion.div>

          {/* Mission Column */}
          <motion.div variants={itemVariants}>
            <div className="h-full rounded-[32px] border border-[var(--brand-border)] bg-white p-8 sm:p-10 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="text-xl font-bold text-black mb-6">Misi</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="text-black/40 font-bold text-base mt-0.5">•</span>
                  <span className="text-base text-black/70 leading-relaxed font-normal">{t("homeAbout.missionA")}</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-black/40 font-bold text-base mt-0.5">•</span>
                  <span className="text-base text-black/70 leading-relaxed font-normal">{t("homeAbout.missionB")}</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-black/40 font-bold text-base mt-0.5">•</span>
                  <span className="text-base text-black/70 leading-relaxed font-normal">{t("homeAbout.missionC")}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
