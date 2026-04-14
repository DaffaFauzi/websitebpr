"use client";

export type CacheEnvelope<T> = {
  v: 1;
  ts: number;
  data: T;
};

export function readCache<T>(key: string): CacheEnvelope<T> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CacheEnvelope<T>;
    if (!parsed || parsed.v !== 1 || typeof parsed.ts !== "number") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeCache<T>(key: string, data: T) {
  if (typeof window === "undefined") return;
  const env: CacheEnvelope<T> = { v: 1, ts: Date.now(), data };
  try {
    window.localStorage.setItem(key, JSON.stringify(env));
  } catch {
    return;
  }
}

export function isStale(ts: number, maxAgeMs: number) {
  return Date.now() - ts > maxAgeMs;
}

