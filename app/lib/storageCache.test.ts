import { describe, expect, it } from "vitest";
import { isStale, readCache, writeCache } from "@/app/lib/storageCache";

describe("storageCache", () => {
  it("writes and reads cache envelope", () => {
    writeCache("k1", { hello: "world" });
    const v = readCache<{ hello: string }>("k1");
    expect(v?.v).toBe(1);
    expect(typeof v?.ts).toBe("number");
    expect(v?.data.hello).toBe("world");
  });

  it("detects staleness", () => {
    expect(isStale(Date.now() - 10_000, 1_000)).toBe(true);
    expect(isStale(Date.now() - 500, 1_000)).toBe(false);
  });
});

