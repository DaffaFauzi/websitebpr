import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] text-sm font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in_oklab,var(--brand-brown),transparent_65%)] disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.03] active:scale-[0.99] [&_svg]:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--brand-brown)] text-white shadow-[0_14px_40px_-24px_rgba(139,29,29,0.45)] hover:bg-[color-mix(in_oklab,var(--brand-brown),black_12%)] hover:shadow-[0_22px_56px_-30px_rgba(139,29,29,0.55)]",
        secondary:
          "bg-[var(--brand-accent)] text-black hover:bg-[color-mix(in_oklab,var(--brand-accent),white_10%)]",
        outline:
          "border border-black/15 bg-[var(--brand-surface)] text-black hover:bg-black/5",
        ghost: "bg-transparent text-black hover:bg-black/5",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4",
        lg: "h-12 px-7 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

