"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Container, Section } from "@/app/components/ui/section";
import BrandLogo from "@/app/components/BrandLogo";

export default function About() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1"
          >
            <div className="text-sm font-medium text-black/50">(01) About Us</div>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-black sm:text-5xl">
              Profesional, terpercaya, dan fokus pada kebutuhan penjaminan.
            </h2>
            <p className="mt-6 text-pretty text-base leading-7 text-black/60">
              PT. Buana Perkasa Rajanegara (BPR Bonding) fokus di bidang Lembaga
              Penjaminan & Asuransi Umum untuk memasarkan produk Bank Garansi,
              Surety Bond dan Asuransi Umum.
            </p>

            <div className="mt-6 lg:mt-8">
              <Button asChild size="lg">
                <Link href="/about">
                  Learn More <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2"
          >
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--brand-border)] bg-[var(--brand-soft)] shadow-[var(--shadow-soft)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(139,29,29,0.16),transparent_55%),radial-gradient(circle_at_75%_60%,rgba(11,11,11,0.08),transparent_60%)]" />
              <div className="relative flex aspect-[4/3] items-center justify-center px-10 py-8 sm:px-12 sm:py-10">
                <BrandLogo
                  kind="full"
                  height={56}
                  width={200}
                  className="drop-shadow-[0_18px_70px_rgba(0,0,0,0.18)]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-none">
              <CardContent className="p-8">
                <div className="text-sm font-medium text-black/50">Visi</div>
                <p className="mt-3 text-base leading-7 text-black">
                  Menjadi perusahaan agen yang terbaik dan terpercaya serta
                  berkontribusi dalam meningkatkan bisnis mitra.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-none">
              <CardContent className="p-8">
                <div className="text-sm font-medium text-black/50">Misi</div>
                <ul className="mt-3 list-inside list-disc space-y-3 text-sm leading-6 text-black/65">
                  <li>
                    Komitmen untuk memberikan layanan terbaik bagi para mitra.
                  </li>
                  <li>
                    Secara konsisten meningkatkan kemampuan sumber daya manusia dan
                    infrastruktur.
                  </li>
                  <li>
                    Fokus menjaga kepercayaan dan memberi nilai tambah bagi para
                    pemangku kepentingan.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}