import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="BPR Bonding"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-white/95" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-12 sm:px-6 sm:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            BPR Bonding
            <span className="block text-white/70">
              Jasa Surety Bond & Bank Garansi
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/80 sm:text-lg">
            BPR Bonding is a company that focuses its business on the field of
            Guarantee & General Insurance Agencies.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href="/services">
                Lihat Layanan <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Konsultasi <PhoneCall />
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            <Badge variant="default">Bank Garansi</Badge>
            <Badge variant="default">Surety Bond</Badge>
            <Badge variant="default">Custom Garansi</Badge>
            <Badge variant="default">Asuransi Umum</Badge>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Card className="border-white/10 bg-white/10 backdrop-blur">
            <CardContent className="p-6">
              <div className="text-sm font-medium text-white/70">
                Produk Unggulan
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                Bank Garansi
              </div>
              <div className="mt-2 text-sm leading-6 text-white/70">
                Jaminan dan keamanan finansial untuk transaksi bisnis Anda.
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/10 backdrop-blur">
            <CardContent className="p-6">
              <div className="text-sm font-medium text-white/70">
                Solusi Kontrak
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                Surety Bond
              </div>
              <div className="mt-2 text-sm leading-6 text-white/70">
                Menjamin kinerja dan penyelesaian kontrak atau kewajiban.
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/10 backdrop-blur">
            <CardContent className="p-6">
              <div className="text-sm font-medium text-white/70">
                Kepabeanan
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                Custom Garansi
              </div>
              <div className="mt-2 text-sm leading-6 text-white/70">
                Jaminan pelaksanaan kepabeanan dari asuransi/lembaga penjaminan.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

