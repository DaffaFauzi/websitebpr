import IndexPage from "@/app/pages/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda | Solusi Penjaminan Terpercaya",
  description:
    "BPR Bonding menyediakan solusi terbaik untuk Bank Garansi, Surety Bond, dan Asuransi Umum dengan proses cepat dan aman.",
};

export default function Home() {
  return <IndexPage />;
}
