"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Locale, messages } from "@/app/i18n/messages";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "bpr_locale";

function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored === "id" || stored === "en") {
      window.requestAnimationFrame(() => setLocaleState(stored));
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === "id" ? "id" : "en";
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);

  const t = useMemo(() => {
    return (key: string) => {
      const value = getByPath(messages[locale], key);
      if (typeof value === "string") return value;
      const fallback = getByPath(messages.id, key);
      if (typeof fallback === "string") return fallback;
      return key;
    };
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => ({ locale, setLocale, t }), [locale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
