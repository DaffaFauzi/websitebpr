import ContactPage from "@/app/pages/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi BPR Bonding sekarang untuk konsultasi gratis mengenai Bank Garansi, Surety Bond, dan kebutuhan asuransi Anda.",
};

export default function Page() {
  return <ContactPage />;
}

