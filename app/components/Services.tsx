import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";

const services = [
  {
    title: "Bank Garansi",
    desc: "Produk tepercaya yang menawarkan jaminan dan keamanan finansial untuk transaksi keuangan.",
    items: [
      "Jaminan Penawaran",
      "Jaminan Pelaksanaan",
      "Jaminan Uang Muka",
      "Jaminan Pemeliharaan",
      "BG Akhir Tahun",
    ],
  },
  {
    title: "Surety Bond",
    desc: "Jaminan keuangan yang andal dan aman untuk menjamin kinerja dan penyelesaian kontrak.",
    items: [
      "Jaminan Pemeliharaan",
      "Jaminan Pembayaran",
      "Jaminan Penawaran",
      "Jaminan Pelaksanaan",
      "Jaminan Uang Muka",
    ],
  },
  {
    title: "Custom Garansi",
    desc: "Jaminan pelaksanaan kepabeanan yang diterbitkan oleh perusahaan asuransi atau lembaga penjaminan.",
    items: ["KITE", "KABER", "Vooruitslag", "SPKPBM", "TPS", "Impor Sementara (OB 23)"],
  },
  {
    title: "Asuransi Umum",
    desc: "Perlindungan komprehensif atas aset dan kewajiban untuk memastikan keamanan finansial.",
    items: [
      "Marine Hull",
      "Vehicle Insurance",
      "Property Insurance",
      "CAR/EAR",
      "Third Party Liability",
      "Marine Cargo",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-sm font-medium text-black/50">(02) Services</div>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-black sm:text-5xl">
              Layanan Kami
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-black/60">
              Kami memberikan solusi terbaik untuk masalah Anda melalui layanan
              penjaminan dan asuransi yang tepat sasaran.
            </p>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              Explore More <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <Card key={s.title} className="overflow-hidden">
              <CardHeader className="p-7 pb-0">
                <div className="text-xl font-semibold tracking-tight text-black">
                  {s.title}
                </div>
                <div className="mt-2 text-sm leading-6 text-black/60">
                  {s.desc}
                </div>
              </CardHeader>
              <CardContent className="p-7 pt-5">
                <div className="grid gap-2 sm:grid-cols-2">
                  {s.items.map((it) => (
                    <div
                      key={it}
                      className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm font-medium text-black/80"
                    >
                      {it}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

