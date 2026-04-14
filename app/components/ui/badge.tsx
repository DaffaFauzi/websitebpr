import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium leading-none",
  {
    variants: {
      variant: {
        default: "border-white/15 bg-white/10 text-white",
        light:
          "border-[var(--brand-border)] bg-[var(--brand-soft)] text-black/70",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

