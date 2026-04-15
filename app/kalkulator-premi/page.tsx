import PremiumCalculatorPage from "@/app/pages/kalkulator-premi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalkulator Premi",
  description:
    "Hitung estimasi premi penjaminan dengan mudah untuk kebutuhan Bank Garansi dan Surety Bond bisnis Anda.",
};

export default function Page() {
  return <PremiumCalculatorPage />;
}
