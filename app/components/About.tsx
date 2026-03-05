import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

export default function About() {
  return (
    <section className="bg-[var(--brand-black)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-medium text-white/60">(01) About Us</div>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Profesional, terpercaya, dan fokus pada kebutuhan penjaminan.
            </h2>
            <p className="mt-6 text-pretty text-base leading-7 text-white/70">
              PT. Buana Perkasa Rajanegara (BPR Bonding) fokus di bidang Lembaga
              Penjaminan & Asuransi Umum untuk memasarkan produk Bank Garansi,
              Surety Bond dan Asuransi Umum.
            </p>

            <div className="mt-10">
              <Button asChild variant="secondary" size="lg">
                <Link href="/about">
                  Learn More <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>

          <Card className="border-white/10 bg-white/5 backdrop-blur">
            <CardContent className="p-8">
              <div className="text-sm font-medium text-white/60">Visi</div>
              <p className="mt-3 text-base leading-7 text-white">
                Menjadi perusahaan agen yang terbaik dan terpercaya serta
                berkontribusi dalam meningkatkan bisnis mitra.
              </p>
              <div className="mt-8 text-sm font-medium text-white/60">Misi</div>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-white/75">
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
        </div>
      </div>
    </section>
  );
}

