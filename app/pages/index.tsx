import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Services from "@/app/components/Services";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";

const stats = [
  {
    value: "2023",
    label: "Berdiri Sejak",
    desc: "Legalitas perijinan usaha berbasis resiko pada 20 Oktober 2023.",
  },
  {
    value: "4+",
    label: "Layanan Utama",
    desc: "Bank Garansi, Surety Bond, Custom Garansi, dan Asuransi Umum.",
  },
  {
    value: "End-to-end",
    label: "Pendampingan",
    desc: "Mulai dari analisa kebutuhan hingga layanan purna jual.",
  },
];

const insights = [
  {
    title: "Panduan Layanan",
    desc: "Pelajari kategori layanan dan pilih solusi yang paling sesuai.",
    href: "/services",
  },
  {
    title: "Profil Perusahaan",
    desc: "Kenali BPR Bonding, visi, misi, dan nilai yang kami pegang.",
    href: "/about",
  },
  {
    title: "Konsultasi Kebutuhan",
    desc: "Diskusikan kebutuhan penjaminan atau asuransi Anda bersama tim kami.",
    href: "/contact",
  },
];

const faqs = [
  {
    q: "Apa saja layanan utama BPR Bonding?",
    a: "Kami fokus pada Bank Garansi, Surety Bond, Custom Garansi (kepabeanan), dan Asuransi Umum.",
  },
  {
    q: "Apakah BPR Bonding membantu dari awal sampai selesai?",
    a: "Ya. Kami membantu analisa kebutuhan, pemilihan produk, pengurusan dokumen, hingga layanan purna jual.",
  },
  {
    q: "Bagaimana cara konsultasi kebutuhan penjaminan?",
    a: "Silakan menuju halaman Kontak untuk mengirim detail kebutuhan, lalu tim kami akan menindaklanjuti secepatnya.",
  },
];

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />

        <section className="bg-[var(--brand-surface)]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-sm font-medium text-black/50">
                  Impact in Numbers
                </div>
                <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-black sm:text-5xl">
                  Dampak yang dapat Anda rasakan.
                </h2>
              </div>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">
                  Lihat Profil <ArrowUpRight />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {stats.map((s) => (
                <Card
                  key={s.label}
                  className="border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-none"
                >
                  <CardContent className="p-7">
                    <div className="text-3xl font-semibold tracking-tight text-black">
                      {s.value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-black/70">
                      {s.label}
                    </div>
                    <div className="mt-3 text-sm leading-6 text-black/60">
                      {s.desc}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
            <div className="rounded-[44px] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-6 py-12 sm:px-12">
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div>
                  <div className="text-sm font-medium text-black/50">
                    Insights &amp; Resources
                  </div>
                  <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-black sm:text-5xl">
                    Jelajahi informasi penting sebelum memulai.
                  </h2>
                </div>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {insights.map((item) => (
                  <Card
                    key={item.href}
                    className="border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-none transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <CardHeader className="p-7 pb-0">
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-lg font-semibold tracking-tight text-black">
                          {item.title}
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-black/50" />
                      </div>
                      <div className="mt-2 text-sm leading-6 text-black/60">
                        {item.desc}
                      </div>
                    </CardHeader>
                    <CardContent className="p-7 pt-5">
                      <Button asChild variant="outline">
                        <Link href={item.href}>Buka</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Gallery />

        <section className="bg-[var(--brand-surface)]">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
            <div className="rounded-[44px] border border-[var(--brand-border)] bg-[var(--brand-soft)] px-6 py-12 sm:px-12">
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div>
                  <div className="text-sm font-medium text-black/50">
                    Frequently Asked Questions
                  </div>
                  <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-black sm:text-5xl">
                    Pertanyaan yang sering ditanyakan.
                  </h2>
                </div>
              </div>

              <div className="mt-10 grid gap-3">
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-6 py-5"
                  >
                    <summary className="cursor-pointer list-none text-base font-semibold text-black">
                      <div className="flex items-center justify-between gap-4">
                        <span>{f.q}</span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--brand-border)] bg-[var(--brand-soft)] text-black/60 transition-transform duration-300 group-open:rotate-45">
                          +
                        </span>
                      </div>
                    </summary>
                    <div className="mt-4">
                      <Separator className="bg-black/10" />
                    </div>
                    <div className="mt-4 text-sm leading-7 text-black/60">
                      {f.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

