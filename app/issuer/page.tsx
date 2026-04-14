import IssuerPage from "@/app/pages/issuer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bank and Insurance Issuer",
  description:
    "Daftar bank dan perusahaan asuransi/penjaminan lengkap dengan kategori: Bank Pemerintah, Bank Swasta, BUMN & Anak BUMN, serta Swasta.",
};

export default function Page() {
  return <IssuerPage />;
}
