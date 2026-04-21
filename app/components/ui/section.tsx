import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    variant: {
      surface: "bg-[var(--brand-surface)]",
      soft: "bg-[var(--brand-soft)]",
      brown: "bg-[var(--brand-brown)]",
      black: "bg-[var(--brand-black)]",
      transparent: "bg-transparent",
    },
  },
  defaultVariants: {
    variant: "surface",
  },
});

const containerVariants = cva("mx-auto px-4 sm:px-6 lg:px-8", {
  variants: {
    width: {
      default: "max-w-6xl",
      narrow: "max-w-3xl",
      wide: "max-w-7xl",
    },
    spacing: {
      none: "",

      // 🔥 FIX UTAMA: lebih compact
      section: "py-8 sm:py-10 lg:py-12",

      // 🔥 HERO lebih rapat
      hero: "pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12",

      // 🔥 HEADER juga diperkecil
      pageHeader: "pt-12 pb-5 sm:pt-14 sm:pb-6 lg:pt-16 lg:pb-8",
    },
  },
  defaultVariants: {
    width: "default",
    spacing: "section",
  },
});

export function Section({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLElement> & VariantProps<typeof sectionVariants>) {
  return <section className={cn(sectionVariants({ variant }), className)} {...props} />;
}

export function Container({
  className,
  width,
  spacing,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof containerVariants>) {
  return <div className={cn(containerVariants({ width, spacing }), className)} {...props} />;
}
