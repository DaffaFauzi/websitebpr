"use client";

import { useMemo, useState } from "react";
import { LogoMeta, getPreferredLogoSources } from "@/app/data/logoCatalog";

function initials(name: string) {
  const cleaned = name.replace(/\(.*?\)/g, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  const raw = parts.slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
  return raw || "LOGO";
}

export default function EntityLogo({
  meta,
  size = 256,
  className,
  rounded = "xl",
}: {
  meta: LogoMeta;
  size?: 48 | 128 | 256 | 512;
  className?: string;
  rounded?: "lg" | "xl" | "2xl";
}) {
  const [broken, setBroken] = useState(false);
  const srcs = useMemo(() => getPreferredLogoSources(meta, size), [meta, size]);
  const webp = srcs.find((x) => x.endsWith(".webp"));
  const png = srcs.find((x) => x.endsWith(".png"));
  const svg = srcs.find((x) => x.endsWith(".svg"));
  const fallback = svg ?? png ?? webp ?? srcs[0];
  const r =
    rounded === "lg" ? "rounded-lg" : rounded === "2xl" ? "rounded-2xl" : "rounded-xl";

  if (meta.assetStatus !== "available" || broken) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center ${r} bg-[var(--brand-surface)] ${className ?? ""}`}
        aria-label={meta.name}
      >
        <div className="text-center">
          <div className="text-xs font-semibold tracking-[0.14em] text-black/40">
            {meta.category.replace(/-/g, " ").toUpperCase()}
          </div>
          <div className="mt-2 text-2xl font-extrabold tracking-tight text-[var(--brand-brown)]">
            {initials(meta.name)}
          </div>
          <div className="mt-1 text-xs font-medium text-black/50">{meta.name}</div>
        </div>
      </div>
    );
  }

  return (
    <picture className={`block h-full w-full overflow-hidden ${className ?? ""}`}>
      {webp ? <source srcSet={webp} type="image/webp" /> : null}
      {png ? <source srcSet={png} type="image/png" /> : null}
      <img
        src={fallback}
        alt={meta.name}
        loading="lazy"
        decoding="async"
        onError={() => setBroken(true)}
        style={{
          transform:
            meta.logoScale && meta.logoScale !== 1 ? `scale(${meta.logoScale})` : undefined,
          transformOrigin: "center",
        }}
        className={`h-full w-full object-contain ${r}`}
      />
    </picture>
  );
}
