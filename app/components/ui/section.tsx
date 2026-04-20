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

const containerVariants = cva("mx-auto px-4 sm:px-6", {
  variants: {
    width: {
      default: "max-w-6xl",
      narrow: "max-w-3xl",
      wide: "max-w-7xl",
    },
    spacing: {
      none: "",

      // 🔥 FIX UTAMA: lebih compact
      section: "py-10 sm:py-12 lg:py-14",

      // 🔥 HERO lebih rapat
      hero: "pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14",

      // 🔥 HEADER juga diperkecil
      pageHeader: "pt-16 pb-6 sm:pt-18 sm:pb-8 lg:pt-20 lg:pb-10",
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
