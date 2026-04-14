import AboutPage from "@/app/pages/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Pelajari lebih lanjut tentang BPR Bonding, perusahaan terpercaya di bidang Bank Garansi dan Surety Bond dengan tim profesional.",
};

export default function Page() {
  return <AboutPage />;
}

