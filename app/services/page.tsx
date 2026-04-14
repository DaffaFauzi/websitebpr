import ServicesPage from "@/app/pages/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Kami",
  description:
    "Kami menyediakan berbagai layanan penjaminan: Surety Bond, Bank Garansi, Asuransi Umum, dan Custom Bond untuk kebutuhan proyek Anda.",
};

export default function Page() {
  return <ServicesPage />;
}

