"use client";

import { useEffect } from "react";

export default function PerformanceMetrics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    if (typeof window === "undefined") return;
    if (!("PerformanceObserver" in window)) return;

    const entries: Record<string, number> = {};

    const po = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "paint") {
          if (entry.name === "first-contentful-paint") entries.fcp = entry.startTime;
        }
        if (entry.entryType === "largest-contentful-paint") entries.lcp = entry.startTime;
      }
    });

    try {
      po.observe({ type: "paint", buffered: true });
      po.observe({ type: "largest-contentful-paint", buffered: true });
    } catch {
      return;
    }

    const t = window.setTimeout(() => {
      const fcp = entries.fcp ? Math.round(entries.fcp) : undefined;
      const lcp = entries.lcp ? Math.round(entries.lcp) : undefined;
      if (fcp || lcp) {
        try {
          window.localStorage.setItem(
            "bpr_perf_last",
            JSON.stringify({ ts: Date.now(), fcp, lcp })
          );
        } catch {
          return;
        }
      }
    }, 3000);

    return () => {
      window.clearTimeout(t);
      po.disconnect();
    };
  }, []);

  return null;
}
