"use client";

import { useEffect, useState } from "react";
import SplashGate from "@/app/components/SplashGate";
import PerformanceMetrics from "@/app/components/PerformanceMetrics";
import { I18nProvider } from "@/app/i18n/I18nProvider";
import PageTransition from "@/app/components/PageTransition";
import ScrollAnimator from "@/app/components/ScrollAnimator";
import ChatbotWidget from "@/app/components/ChatbotWidget";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [landscapeBlocked, setLandscapeBlocked] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(orientation: landscape) and (max-width: 1024px)");
    const apply = () => setLandscapeBlocked(Boolean(mq.matches));
    apply();
    mq.addEventListener?.("change", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      mq.removeEventListener?.("change", apply);
      window.removeEventListener("orientationchange", apply);
    };
  }, []);

  useEffect(() => {
    const o = window.screen?.orientation as unknown as { lock?: (value: string) => Promise<void> };
    if (typeof o?.lock !== "function") return;
    o.lock("portrait-primary").catch(() => {});
  }, []);

  return (
    <I18nProvider>
      <PerformanceMetrics />
      <ScrollAnimator />
      <SplashGate>
        <>
          {landscapeBlocked ? (
            <div className="fixed inset-0 z-[999] grid place-items-center bg-black/95 px-6 text-center text-white">
              <div className="w-full max-w-sm rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-[10px]">
                <div className="text-lg font-semibold tracking-tight">Mode portrait saja</div>
                <div className="mt-2 text-sm leading-6 text-white/75">
                  Putar perangkat ke portrait untuk melanjutkan.
                </div>
                <div className="mt-4 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
                  Tips: nonaktifkan rotation lock, lalu putar perangkat.
                </div>
              </div>
            </div>
          ) : null}
          <PageTransition>{children}</PageTransition>
          <ChatbotWidget />
        </>
      </SplashGate>
    </I18nProvider>
  );
}
