"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { Locale, messages } from "@/app/i18n/messages";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => any; // Mengubah tipe kembalian menjadi any
};

const I18nContext = createContext<I18nContextValue | null>(null);

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

  // Load locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem("bpr_locale") as Locale;
    if (savedLocale && (savedLocale === "id" || savedLocale === "en")) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("bpr_locale", newLocale);
  };

  const t = useMemo(() => {
    return (key: string) => {
      const value = getByPath(messages[locale], key);
      if (value !== undefined) return value;
      const fallback = getByPath(messages.id, key);
      if (fallback !== undefined) return fallback;
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
