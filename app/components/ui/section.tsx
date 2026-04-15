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
      section: "py-6 lg:py-8",
      hero: "pt-28 pb-6 sm:pt-32 lg:pb-8",
      pageHeader: "pt-24 pb-6 sm:pt-28 lg:pb-8",
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

