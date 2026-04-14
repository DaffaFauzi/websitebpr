import { describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useIssuerLogos } from "@/app/hooks/useIssuerLogos";
import { writeCache } from "@/app/lib/storageCache";
import { getLogosByCategory } from "@/app/data/logoCatalog";

describe("useIssuerLogos", () => {
  it("loads data and writes cache (stale-while-revalidate)", async () => {
    vi.useFakeTimers();
    vi.spyOn(Math, "random").mockReturnValue(0);
    window.localStorage.clear();

    const { result } = renderHook(() => useIssuerLogos("bank-pemerintah", 2));

    expect(["idle", "loading", "ready"]).toContain(result.current.status);

    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.status).toBe("ready");
    expect(result.current.total).toBeGreaterThan(0);
    expect(result.current.data.length).toBeLessThanOrEqual(2);

    const cached = window.localStorage.getItem("bpr_logo_cache_bank-pemerintah");
    expect(cached).toBeTruthy();

    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("hydrates from cache without layout delay", async () => {
    vi.useFakeTimers();
    window.localStorage.clear();

    const all = getLogosByCategory("bank-pemerintah");
    writeCache("bpr_logo_cache_bank-pemerintah", { ids: all.slice(0, 3).map((x) => x.id) });

    const { result } = renderHook(() => useIssuerLogos("bank-pemerintah", 2));

    expect(result.current.status).toBe("ready");
    expect(result.current.total).toBeGreaterThan(0);

    vi.useRealTimers();
  });

  it("prefetch uses requestIdleCallback when available", async () => {
    vi.useFakeTimers();
    vi.spyOn(Math, "random").mockReturnValue(0);
    window.localStorage.clear();

    (window as unknown as { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback =
      (cb) => cb();

    const { result } = renderHook(() => useIssuerLogos("bank-swasta", 2));

    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    const before = window.localStorage.getItem("bpr_logo_cache_bank-swasta");
    expect(before).toBeTruthy();

    window.localStorage.removeItem("bpr_logo_cache_bank-swasta");

    await act(async () => {
      result.current.prefetch();
      vi.advanceTimersByTime(500);
    });

    const after = window.localStorage.getItem("bpr_logo_cache_bank-swasta");
    expect(after).toBeTruthy();

    vi.useRealTimers();
    vi.restoreAllMocks();
  });
});
