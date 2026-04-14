import { describe, expect, it } from "vitest";
import { LogoMeta, buildLogoPath, getLogoById, getLogosByCategory, getPreferredLogoSources } from "@/app/data/logoCatalog";

describe("logoCatalog", () => {
  it("builds logo path with naming convention", () => {
    const p = buildLogoPath({
      slug: "bank-mandiri",
      category: "bank-pemerintah",
      variant: "horizontal",
      size: 256,
      format: "webp",
    });
    expect(p).toBe("/logos/bank-pemerintah/bank-mandiri/bank-mandiri-bank-pemerintah-horizontal-256.webp");
  });

  it("gets logo by id", () => {
    const bni = getLogoById("bni");
    expect(bni?.name).toBe("BNI");
  });

  it("gets logos by category", () => {
    const list = getLogosByCategory("bank-pemerintah");
    expect(list.length).toBeGreaterThan(0);
  });

  it("returns preferred sources in order", () => {
    const meta: LogoMeta = {
      id: "dummy",
      name: "Dummy",
      category: "bank-pemerintah",
      variants: ["default"],
      assetStatus: "missing",
      updatedYear: 2026,
      copyrightOwner: "Dummy",
      licenseStatus: "unknown",
    };
    const srcs = getPreferredLogoSources(meta, 256);
    expect(srcs[0].endsWith(".webp")).toBe(true);
    expect(srcs[1].endsWith(".png")).toBe(true);
    expect(srcs[2].endsWith(".svg")).toBe(true);
  });

  it("returns custom sources when provided", () => {
    const bni = getLogoById("bni");
    expect(bni).toBeTruthy();
    const srcs = getPreferredLogoSources(bni!, 256);
    expect(srcs[0]).toContain("/logos/");
  });
});
