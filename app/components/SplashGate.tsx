"use client";

import { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/app/i18n/I18nProvider";

const STORAGE_KEY = "bpr_splash_seen";

export default function SplashGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useI18n();
  const [isClient, setIsClient] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setIsClient(true);
    if (typeof window === "undefined") return;

    const seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    if (seen) {
      setShowSplash(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setShowSplash(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 2100);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setShowSplash(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!isClient) return null;

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <motion.div
          key="splash-screen"
          role="button"
          tabIndex={0}
          onClick={handleSkip}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleSkip();
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#F7F3EE] px-5"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(10px)",
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,185,150,0.25),transparent_60%),radial-gradient(circle_at_30%_70%,rgba(139,29,29,0.08),transparent_55%)]" />
            <div className="absolute inset-0 backdrop-blur-[2px]" />
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.94, y: 15, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mx-auto flex w-full flex-col items-center rounded-[32px] bg-white px-8 py-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12),0_12px_40px_-10px_rgba(0,0,0,0.06)] backdrop-blur-[10px]">
              <motion.div
                className="relative"
                initial={{ filter: "blur(8px)", scale: 0.9 }}
                animate={{
                  filter: "blur(0px)",
                  scale: 1,
                  y: [0, -4, 0],
                }}
                transition={{
                  filter: { duration: 0.8, ease: "easeOut" },
                  scale: { duration: 0.8, ease: "easeOut" },
                  y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(242,195,10,0.3),transparent_70%)] blur-2xl" />
                <motion.div className="relative flex h-[96px] w-[96px] items-center justify-center overflow-hidden rounded-[28px] bg-[#8f1a20] text-white shadow-[0_20px_50px_rgba(143,26,32,0.25)]">
                  <Shield className="h-11 w-11" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.5,
                    }}
                  />
                </motion.div>
              </motion.div>

              <div className="mt-8 text-center">
                <motion.div
                  className="text-[24px] font-bold tracking-tight text-[#8f1a20] sm:text-[26px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {locale === "th"
                    ? "ยินดีต้อนรับสู่ BPR Bonding"
                    : "Welcome to BPR Bonding"}
                </motion.div>
                <motion.div
                  className="mt-3 text-[15px] font-medium leading-relaxed text-gray-600/90"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {locale === "th"
                    ? "ปกป้องอนาคตของคุณด้วยความมั่นใจ"
                    : "Protecting your future with confidence"}
                </motion.div>
              </div>

              <div className="mt-10 w-full max-w-[240px]">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#8f1a20] via-[#edcc16] to-[#edcc16]"
                    initial={{ width: "0%", x: "-100%" }}
                    animate={{ width: "100%", x: "0%" }}
                    transition={{ duration: 2.1, ease: "easeInOut" }}
                  />
                </div>

                <div className="mt-5 flex justify-center gap-2.5">
                  {[0, 1, 2].map((idx) => (
                    <motion.span
                      key={idx}
                      className="h-2 w-2 rounded-full bg-[#edcc16]"
                      animate={{
                        y: [0, -6, 0],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.15,
                      }}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                className="mt-8 text-[13px] font-medium text-gray-400/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {locale === "th"
                  ? "กำลังเตรียมข้อมูล..."
                  : "Preparing Your Experience..."}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
