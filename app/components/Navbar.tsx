"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Service" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-3xl border border-black/10 bg-white/70 px-3 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <Link href="/" className="flex items-center gap-3 pl-2">
            <span className="relative h-8 w-8 overflow-hidden rounded-xl bg-black/5">
              <Image
                src="/images/logo.png"
                alt="BPR Bonding"
                fill
                className="object-contain"
              />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-black sm:inline">
              BPR Bonding
            </span>
          </Link>

          <nav className="hidden items-center rounded-full border border-black/10 bg-white/60 px-2 py-2 md:flex">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-black text-white"
                      : "text-black/70 hover:text-black"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button asChild className="h-10 px-5">
            <Link href="/contact">
              Book a Call <ArrowUpRight className="opacity-90" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

