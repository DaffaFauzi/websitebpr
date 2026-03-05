import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";

export default function Contact() {
  return (
    <section className="bg-[var(--brand-black)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="rounded-[40px] border border-white/10 bg-white/5 px-6 py-12 backdrop-blur sm:px-12">
          <div className="grid gap-10 md:grid-cols-3 md:items-start">
            <div className="md:col-span-2">
              <div className="text-sm font-medium text-white/60">
                (03) Contact Us
              </div>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
                Let’s <span className="text-white/70">discuss</span> your
                <span className="text-white/70"> needs</span> with us
              </h2>
              <div className="mt-10">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">
                    Let’s Talk <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-6 text-white/70">
              <div className="text-white">
                <div className="font-medium text-white/90">BPR Bonding</div>
                <div className="text-white/70">
                  (PT. Buana Perkasa Rajanegara)
                </div>
              </div>
              <div>
                <div className="font-medium text-white/90">Alamat</div>
                <div className="text-white/70">
                  Isi alamat kantor Anda di sini.
                </div>
              </div>
              <div>
                <div className="font-medium text-white/90">Telepon</div>
                <div className="text-white/70">Isi nomor telepon di sini.</div>
              </div>
              <div>
                <div className="font-medium text-white/90">Email</div>
                <div className="text-white/70">Isi email di sini.</div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Separator className="bg-white/10" />
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-white/60 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </div>
            <div>© {new Date().getFullYear()} BPR Bonding</div>
          </div>
        </div>
      </div>
    </section>
  );
}

