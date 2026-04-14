"use client";

import Image from "next/image";

export default function BrandLogo({
  kind = "full",
  width,
  height = 40,
  className,
  priority,
}: {
  kind?: "mark" | "full";
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  const w =
    kind === "full"
      ? width ?? Math.round(height * 3.1)
      : width ?? height;
  const src = `/logos/bprbonding.png?v=${process.env.NEXT_PUBLIC_ASSET_VERSION ?? "1"}`;

  return (
    <span
      className={`relative inline-block ${className ?? ""}`}
      style={{ width: w, height }}
    >
      <Image
        key={src}
        src={src}
        alt="BPR Bonding"
        fill
        sizes={`${w}px`}
        className="object-contain"
        unoptimized
        priority={priority}
      />
    </span>
  );
}
