"use client";

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
  return (
    <I18nProvider>
      <PerformanceMetrics />
      <ScrollAnimator />
      <SplashGate>
        <PageTransition>{children}</PageTransition>
      </SplashGate>
      <ChatbotWidget />
    </I18nProvider>
  );
}
