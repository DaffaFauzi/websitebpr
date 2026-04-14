"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Bot } from "lucide-react";
import { useI18n } from "@/app/i18n/I18nProvider";

const STORAGE_KEY = "bpr_splash_seen";

export default function SplashGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t } = useI18n();

  const timeoutsRef = useRef<number[]>([]);

  const [active, setActive] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname !== "/") return;

    timeoutsRef.current.forEach((t) => window.clearTimeout(t));
    timeoutsRef.current = [];

    const seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    if (seen) return;

    const visibleMs = 3800;
    const fadeMs = 550;

    const t0 = window.setTimeout(() => {
      setActive(true);
      setHiding(false);
    }, 0);
    const t1 = window.setTimeout(() => {
      setHiding(true);
    }, visibleMs);
    const t2 = window.setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setActive(false);
      setHiding(false);
    }, visibleMs + fadeMs);

    timeoutsRef.current = [t0, t1, t2];

    return () => {
      timeoutsRef.current.forEach((t) => window.clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, [pathname]);

  const handleSkip = () => {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(STORAGE_KEY, "1");
    setHiding(true);
    window.setTimeout(() => {
      setActive(false);
      setHiding(false);
    }, 350);
  };

  const show = active;

  return (
    <>
      {children}
      {show ? (
        <div
          role="button"
          tabIndex={0}
          onClick={handleSkip}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleSkip();
          }}
          className={[
            "splash-animate",
            "fixed inset-0 z-[100] flex items-center justify-center",
            "bg-[var(--background)]",
            "transition-opacity duration-500",
            hiding ? "opacity-0 pointer-events-none" : "opacity-100",
          ].join(" ")}
        >
          <div className="relative mx-auto w-full max-w-md px-6">
            <div className="mx-auto flex w-full max-w-sm flex-col items-center rounded-[44px] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-8 py-12 shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-[var(--brand-brown)] text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <Bot className="h-9 w-9" />
                </div>
                <div className="absolute -right-5 top-3">
                  <span className="inline-block origin-[20%_80%] animate-[wave-hand_1.1s_ease-in-out_infinite] text-3xl">
                    👋
                  </span>
                </div>
              </div>

               <div className="mt-6 text-center">
                <div className="text-xl font-semibold tracking-tight text-[var(--brand-brown)]">
                  {t("splash.title")}
                </div>
                <div className="mt-2 text-sm text-black/50">{t("splash.subtitle")}</div>
              </div>

              <div className="mt-10 w-full">
                <div className="mx-auto h-0.5 w-44 rounded-full bg-black/10" />
                <div className="mt-4 flex justify-center gap-2">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="h-2 w-2 rounded-full bg-[color-mix(in_oklab,var(--brand-brown),white_25%)] animate-[dot-pulse_1.1s_ease-in-out_infinite]"
                      style={{ animationDelay: `${idx * 140}ms` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 text-xs text-black/45">
                {t("splash.hint")}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
