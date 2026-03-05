import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-2xl bg-black/5">
              <Image
                src="/images/logo.png"
                alt="BPR Bonding"
                fill
                className="object-contain"
              />
            </span>
            <div>
              <div className="text-base font-semibold tracking-tight text-black">
                BPR Bonding
              </div>
              <div className="text-sm text-black/60">
                Jasa Surety Bond & Bank Garansi
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-black/70">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-black">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-black/10 py-6 text-sm text-black/60 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} BPR Bonding. All rights reserved.</span>
          <span className="text-black/50">
            Profesionalisme · Integritas · Inovasi
          </span>
        </div>
      </div>
    </footer>
  );
}

