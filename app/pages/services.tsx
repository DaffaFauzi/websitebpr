import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";

const services = [
  {
    title: "Bank Garansi",
    desc: "Bank Garansi adalah produk tepercaya yang menawarkan jaminan dan keamanan finansial, memberikan ketenangan dan perlindungan untuk transaksi keuangan.",
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
    desc: "Surety Bond adalah jaminan keuangan yang dapat diandalkan dan aman yang menjamin kinerja dan penyelesaian kontrak atau kewajiban.",
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
    desc: "Custom Garansi adalah jaminan pelaksanaan kepabeanan yang diterbitkan oleh perusahaan asuransi atau lembaga penjaminan.",
    items: ["KITE", "KABER", "Vooruitslag", "SPKPBM", "TPS", "Impor Sementara (OB 23)"],
  },
  {
    title: "Asuransi Umum",
    desc: "Asuransi Umum memberikan perlindungan komprehensif atas aset dan kewajiban serta memastikan keamanan finansial.",
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28">
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-black/50">Layanan Kami</div>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-6xl">
                Kami memberikan solusi terbaik untuk masalah Anda
              </h1>
              <p className="mt-6 text-pretty text-base leading-7 text-black/60">
                Pilih layanan sesuai kebutuhan penjaminan, kepabeanan, maupun
                perlindungan aset. Tim kami membantu analisa risiko, pemilihan
                produk, hingga layanan purna jual.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {services.map((s) => (
                <Card key={s.title}>
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

        <section className="bg-[var(--brand-black)]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 px-6 py-10 sm:px-10">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="text-sm font-medium text-white/60">
                    Butuh bantuan memilih produk?
                  </div>
                  <div className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Konsultasikan kebutuhan Anda dengan tim BPR Bonding.
                  </div>
                </div>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

