"use client";

import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Container, Section } from "@/app/components/ui/section";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function CookiePolicyPage() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <Section variant="soft">
          <Container spacing="pageHeader">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <div className="text-sm font-medium text-black/50">
                  {isEn ? "Policy" : "Kebijakan"}
                </div>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  {isEn ? "Cookie Policy" : "Kebijakan Cookie"}
                </h1>
              </div>
              <div className="text-sm text-black/60">
                <Link href="/" className="hover:text-black">
                  {isEn ? "Home" : "Beranda"}
                </Link>
                <span className="mx-2 text-black/30">›</span>
                <span className="text-[var(--brand-brown)]">
                  {isEn ? "Cookie Policy" : "Kebijakan Cookie"}
                </span>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container width="narrow">
            <div className="rounded-[var(--radius-xl)] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-7 py-8 shadow-[var(--shadow-soft)]">
              {isEn ? (
                <div className="space-y-5 text-sm leading-7 text-black/70">
                  <p>
                    This website uses cookies and similar technologies to ensure the site works properly,
                    improve performance, and understand usage patterns.
                  </p>
                  <p>
                    You can control cookies through your browser settings. Disabling cookies may affect
                    certain features and the overall experience.
                  </p>
                  <p>
                    For questions about this policy, please contact us via the Contact page.
                  </p>
                </div>
              ) : (
                <div className="space-y-5 text-sm leading-7 text-black/70">
                  <p>
                    Website ini menggunakan cookie dan teknologi serupa untuk memastikan situs berjalan
                    dengan baik, meningkatkan performa, dan memahami pola penggunaan.
                  </p>
                  <p>
                    Anda dapat mengatur penggunaan cookie melalui pengaturan browser. Menonaktifkan cookie
                    dapat memengaruhi beberapa fitur dan pengalaman penggunaan.
                  </p>
                  <p>
                    Jika ada pertanyaan terkait kebijakan ini, silakan hubungi kami melalui halaman Kontak.
                  </p>
                </div>
              )}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
