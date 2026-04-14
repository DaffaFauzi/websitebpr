"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LogoCategory, LogoMeta, getLogosByCategory } from "@/app/data/logoCatalog";
import { isStale, readCache, writeCache } from "@/app/lib/storageCache";

type CacheShape = { ids: string[] };

type UseIssuerLogosResult = {
  status: "idle" | "loading" | "ready" | "error";
  data: LogoMeta[];
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
  error?: string;
  setPage: (page: number) => void;
  prefetch: () => void;
  revalidate: () => void;
};

const MAX_AGE_MS = 1000 * 60 * 60 * 24;

function cacheKey(category: LogoCategory) {
  return `bpr_logo_cache_${category}`;
}

function simulateFetch(category: LogoCategory) {
  return new Promise<LogoMeta[]>((resolve) => {
    const delay = 240 + Math.floor(Math.random() * 180);
    window.setTimeout(() => resolve(getLogosByCategory(category)), delay);
  });
}

export function useIssuerLogos(category: LogoCategory, pageSize = 12): UseIssuerLogosResult {
  const [status, setStatus] = useState<UseIssuerLogosResult["status"]>("idle");
  const [items, setItems] = useState<LogoMeta[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [page, setPageState] = useState(1);

  const inflight = useRef<Promise<void> | null>(null);

  const setPage = useCallback((p: number) => {
    setPageState((prev) => {
      if (prev === p) return prev;
      return p;
    });
  }, []);

  const revalidate = useCallback(() => {
    if (typeof window === "undefined") return;
    if (inflight.current) return;

    const run = async () => {
      try {
        setStatus((s) => (s === "ready" ? "ready" : "loading"));
        setError(undefined);
        const fresh = await simulateFetch(category);
        setItems(fresh);
        writeCache(cacheKey(category), { ids: fresh.map((x) => x.id) } satisfies CacheShape);
        setStatus("ready");
      } catch {
        setStatus("error");
        setError("Gagal memuat data.");
      } finally {
        inflight.current = null;
      }
    };

    inflight.current = run();
  }, [category]);

  const prefetch = useCallback(() => {
    if (typeof window === "undefined") return;
    const existing = readCache<CacheShape>(cacheKey(category));
    if (existing && !isStale(existing.ts, MAX_AGE_MS)) return;
    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => void })
      .requestIdleCallback;
    if (idle) idle(() => revalidate());
    else window.setTimeout(() => revalidate(), 0);
  }, [category, revalidate]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setPageState(1);

    const cached = readCache<CacheShape>(cacheKey(category));
    if (cached?.data?.ids?.length) {
      const all = getLogosByCategory(category);
      const byId = new Map(all.map((x) => [x.id, x]));
      const restored = cached.data.ids.map((id) => byId.get(id)).filter(Boolean) as LogoMeta[];
      setItems(restored.length ? restored : all);
      setStatus("ready");
      if (isStale(cached.ts, MAX_AGE_MS)) prefetch();
      return;
    }

    setStatus("loading");
    revalidate();
  }, [category, prefetch, revalidate]);

  const total = items.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, pageCount);

  useEffect(() => {
    if (page !== safePage) setPageState(safePage);
  }, [page, safePage]);

  const data = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, pageSize, safePage]);

  return {
    status,
    data,
    total,
    page: safePage,
    pageSize,
    pageCount,
    error,
    setPage,
    prefetch,
    revalidate,
  };
}

