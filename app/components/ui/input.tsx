import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-black outline-none ring-0 placeholder:text-black/40 focus:border-[var(--brand-brown)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--brand-brown),transparent_85%)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

